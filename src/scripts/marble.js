import walls from "./walls";
import {
  quadForm,
  degToRad,
  calculateDistance
} from "./util"; // HELP - Why isn't this import working?
import * as util from "./util"; // HELP - Why isn't this import working?

export default class Marble {
  constructor(radius, width, height, walls, holes) {
    this.radius = radius; // Radius of the marble
    this.width = width; // Width of the board
    this.height = height; // Height of the board
    this.walls = walls;
    this.holes = holes;

    this.cellSize = 36; // Game size adjustment
    
    this.maxTiltX = 45;
    this.maxTiltY = 45;
    this.startPosX = this.cellSize * 17; // TODO - For final game, set to this.cellSize * 17
    this.startPosY = this.cellSize * 17; // TODO - For final game, set to this.cellSize * 17

    this.tiltX = 0; // TEST
    this.tiltY = 0; // TEST
    this.accX = 0;
    this.accY = 0;
    this.velX = 0;
    this.velY = 0;
    this.posX = this.startPosX;
    this.posY = this.startPosY;
    
    this.grav = 0.0025; // Acceleration due to gravity
    this.fricSCoeff = 0.05; // Static friction coefficient
    this.fricKCoeff = 0.05; // Kinetic friction coefficient
    this.tiltSensitivity = 0.03;
    this.bounciness = 0.1; // TODO - Delete
    this.stopX = false; // Prevents movement in x-direction if true
    this.stopY = false; // Prevents movement in y-direction if true

    this.wallRadius = 2;
    // TODO - Change this so that it is dynamic based on this.walls
    this.halfOfLongestWallLength = 4; // Used to calculate this.distRadius

    // The farthest a marble's center can be from a wall's center and still possibly collide
    // Used to calculate which walls to check for collision
    this.distRadius = Math.sqrt(Math.pow(this.wallRadius, 2) + Math.pow(this.halfOfLongestWallLength * this.cellSize + this.wallRadius, 2)) + this.radius;
    
    this.collision = null; // Collision type, if any
    this.distanceMin = this.radius; // HELP - What does this do?
    this.shiftX = 0; // Correction for posX after collision
    this.shiftY = 0; // Correction for posY after collision
    this.fell = false; // true if marble fell into hole
    // debugger;
  }

  restart() {
    this.tiltX = 0;
    this.tiltY = 0;
    this.accX = 0;
    this.accY = 0;
    this.velX = 0;
    this.velY = 0;
    this.posX = this.startPosX;
    this.posY = this.startPosY;
  }

  draw(ctx) {
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    // debugger

    // FIXME - Delete for final game
    // ctx.arc(this.posX, this.posY, this.distRadius, 0, 2 * Math.PI);
    // ctx.stroke();

  }

  // TODO - Replace with util function
  quadForm(a, b, c) {
    // debugger
    let soln1 = null;
    let soln2 = null;

    soln1 = (-b - Math.sqrt( b*b - 4 * a * c )) / (2 * a);
    soln2 = (-b + Math.sqrt( b*b - 4 * a * c )) / (2 * a);
    // debugger
    return [soln1, soln2];
  }

  // TODO - Replace with util function
  calculateDistance(x1, y1, x2, y2) {
    // debugger
    const dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    // debugger
    return dist;
  }

  calculateFricS(rad) {
    return this.fricSCoeff * this.grav * Math.cos(rad);
  }

  calculateFricK(rad, vel) {
    return this.fricKCoeff * this.grav * Math.cos(rad);
  }

  // TODO - Replace with util function
  degToRad(deg) {
    return deg * (Math.PI / 180);
  }

  calculateAcc(deg, vel, axis) {
    // console.log("calculating acceleration!");
    let dirTilt = Math.sign(deg); // -1 or 1 based on tilt on axis
    let dirFric;

    if (vel === 0) { 
      dirFric = -1 * dirTilt; // If marble is not already moving on this axis, direction of friction is opposite of direction of TILT.
    } else {
      dirFric = -1 * Math.sign(vel); // If marble IS moving on this axis, friction is opposite of direction of VELOCITY.
    }

    // debugger

    let rad = this.degToRad(Math.abs(deg));

    let acc = dirTilt * this.grav * Math.sin(rad);
    let fric = dirFric * this.fricKCoeff * this.grav * Math.cos(rad);
    let accNet = acc + fric;

    // If acceleration does not overcome friction and acceleration is not in the direction of velocity, marble should not move on this axis.
    if (
      Math.abs(acc) <= Math.abs(fric) &&
      Math.sign(accNet) !== Math.sign(vel) // HELP - What does this do?
    ) {
      if (axis === "x") this.stopX = true;
      if (axis === "y") this.stopY = true;
    } else {
      if (axis === "x") this.stopX = false;
      if (axis === "y") this.stopY = false;
    }

    return accNet;
  }



  checkBorderCollisions() {
    if (this.posX - this.radius < 0) {
      this.collision = "right";
      this.shiftX = 2 * (0 - (this.posX - this.radius));
    } else if (this.posX + this.radius > this.width) {
      this.collision = "left";
      this.shiftX = -2 * ((this.posX + this.radius) - this.width);
    }

    if (this.posY - this.radius < 0) {
      this.collision = "bottom";
      this.shiftY = 2 * (0 - (this.posY - this.radius));
    } else if (this.posY + this.radius > this.height) {
      this.collision = "top";
      this.shiftY = -2 * ((this.posY + this.radius) - this.height);
    }
  }

  // Iterate through walls and check for collision
  checkWallCollisions() {
    // debugger

    const wallsToCheck = [];

    this.walls.forEach(wall => {
      // debugger

      if (this.calculateDistance(this.posX, this.posY, wall.center.x, wall.center.y) <= this.distRadius) {
        // debugger
        wallsToCheck.push(wall);
      }
    })

    // debugger

    wallsToCheck.forEach(wall => {
      this.detectCollision(wall);
    })
  }

  detectCollision(wall) {
    let distance = null; // DEBUG
    let opp = null;
    let adj = null;
    let theta = null;
    let intX = null;
    let intY = null;
    let shiftX = null;
    let shiftY = null;


    // DETECT CORNER

    // Detect top collision
    if (
      this.posY < wall.topLeft.y &&
      wall.topLeft.x <= this.posX &&
      this.posX <= wall.topRight.x
    ) {
      // debugger
      distance = wall.topLeft.y - this.posY;
      // debugger
      if (
        distance <= this.radius &&
        distance < this.distanceMin
      ) {
        // debugger
        this.collision = "top";
        this.distanceMin = distance;

        // calculate shiftY
        this.shiftY = wall.topLeft.y - (this.posY + this.radius);
        // debugger
      }
    }

    // detect bottom collision
    if (
      this.posY > wall.bottomLeft.y &&
      wall.topLeft.x <= this.posX &&
      this.posX <= wall.topRight.x
    ) {
      // debugger
      distance = this.posY - wall.bottomLeft.y;
      // debugger
      if (
        distance <= this.radius &&
        distance < this.distanceMin
      ) {
        // debugger
        this.collision = "bottom";
        this.distanceMin = distance;

        // calculate shiftY
        this.shiftY = wall.bottomLeft.y - (this.posY - this.radius);
        // debugger
      }
    }

    // detect left collision
    if (
      this.posX < wall.topLeft.x &&
      wall.topLeft.y <= this.posY &&
      this.posY <= wall.bottomLeft.y
    ) {
      // debugger
      distance = wall.topLeft.x - this.posX;
      // debugger
      if (
        distance <= this.radius &&
        distance < this.distanceMin  
      ) {
        // debugger
        this.collision = "left";
        this.distanceMin = distance;

        // calculate shiftX
        this.shiftX = wall.topLeft.x - (this.posX + this.radius);
        // debugger
      }
    }

    // detect right collision
    if (
      this.posX > wall.topRight.x &&
      wall.topLeft.y <= this.posY &&
      this.posY <= wall.bottomLeft.y
    ) {
      // debugger
      distance = this.posX - wall.topRight.x;
      // debugger
      if (
        distance <= this.radius &&
        distance < this.distanceMin  
      ) {
        // debugger
        this.collision = "right";
        this.distanceMin = distance;

        // calculate shiftX
        this.shiftX = wall.topRight.x - (this.posX - this.radius);
        // debugger
      }
    }

    // detect top-left collision
    if (
      this.posX < wall.topLeft.x &&
      this.posY < wall.topLeft.y
    ) {
      // debugger
      distance = this.calculateDistance(this.posX, this.posY, wall.topLeft.x, wall.topLeft.y);
      // debugger
      if (
        distance <= this.radius &&
        distance < this.distanceMin
      ) {
        // debugger
        opp = wall.topLeft.y - this.posY;
        adj = wall.topLeft.x - this.posX;
  
        theta = Math.atan(opp / adj);
        // debugger

        intX = this.quadForm(
          1,
          -2 * this.posX,
          Math.pow(this.posX, 2) + Math.pow(wall.topLeft.y - this.posY, 2) - Math.pow(this.radius, 2)
        );
        intY = this.quadForm(
          1,
          -2 * this.posY,
          Math.pow(this.posY, 2) + Math.pow(wall.topLeft.x - this.posX, 2) - Math.pow(this.radius, 2)
        );
        // debugger
        shiftX = intX[1] - wall.topLeft.x;
        shiftY = intY[1] - wall.topLeft.y;
        // debugger
        if (theta === Math.PI / 4) {
          // debugger
          this.collision = "top-left";          
          this.shiftX = shiftX;
          this.shiftY = shiftY;
        } else if (theta < Math.PI / 4) {
          // debugger
          this.collision = "left";
          this.shiftX = shiftX;
        } else if (theta > Math.PI / 4) {
          // debugger
          this.collision = "top";
          this.shiftY = shiftY;
        }

        this.distanceMin = distance;
      }
    }

    // detect top-right collision
    if (
      this.posX > wall.topRight.x &&
      this.posY < wall.topRight.y
    ) {
      // debugger
      distance = this.calculateDistance(this.posX, this.posY, wall.topRight.x, wall.topRight.y);
      // debugger
      if (
        distance <= this.radius &&
        distance < this.distanceMin
      ) {
        // debugger
        opp = wall.topRight.y - this.posY;
        adj = this.posX - wall.topRight.x;
  
        theta = Math.atan(opp / adj);
        // debugger

        intX = this.quadForm(
          1,
          -2 * this.posX,
          Math.pow(this.posX, 2) + Math.pow(wall.topRight.y - this.posY, 2) - Math.pow(this.radius, 2)
        );
        intY = this.quadForm(
          1,
          -2 * this.posY,
          Math.pow(this.posY, 2) + Math.pow(wall.topRight.x - this.posX, 2) - Math.pow(this.radius, 2)
        );
        // debugger
        shiftX = wall.topRight.x - intX[0];
        shiftY = intY[1] - wall.topRight.y;
        // debugger
        if (theta === Math.PI / 4) {
          // debugger
          this.collision = "top-right";
          this.shiftX = shiftX;
          this.shiftY = shiftY;
        } else if (theta < Math.PI / 4) {
          // debugger
          this.collision = "right";
          this.shiftX = shiftX;
        } else if (theta > Math.PI / 4) {
          // debugger
          this.collision = "top";
          this.shiftY = shiftY;
        }

        this.distanceMin = distance;
      }
    }

    // detect bottom-left collision
    if (
      this.posX < wall.bottomLeft.x &&
      this.posY > wall.bottomLeft.y
    ) {
      // debugger
      distance = this.calculateDistance(this.posX, this.posY, wall.bottomLeft.x, wall.bottomLeft.y);
      // debugger
      if (
        distance <= this.radius &&
        distance < this.distanceMin
      ) {
        // debugger
        opp = this.posY - wall.bottomLeft.y;
        adj = wall.bottomLeft.x - this.posX;
  
        theta = Math.atan(opp / adj);
        // debugger

        intX = this.quadForm(
          1,
          -2 * this.posX,
          Math.pow(this.posX, 2) + Math.pow(wall.bottomLeft.y - this.posY, 2) - Math.pow(this.radius, 2)
        );
        intY = this.quadForm(
          1,
          -2 * this.posY,
          Math.pow(this.posY, 2) + Math.pow(wall.bottomLeft.x - this.posX, 2) - Math.pow(this.radius, 2)
        );
        // debugger
        shiftX = intX[1] - wall.bottomLeft.x;
        shiftY = wall.bottomLeft.y - intY[0];
        // debugger
        if (theta === Math.PI / 4) {
          // debugger
          this.collision = "bottom-left";
          this.shiftX = shiftX;
          this.shiftY = shiftY;
        } else if (theta < Math.PI / 4) {
          // debugger
          this.collision = "left";
          this.shiftX = shiftX;
        } else if (theta > Math.PI / 4) {
          // debugger
          this.collision = "bottom";
          this.shiftY = shiftY;
        }

        this.distanceMin = distance;
      }
    }

    // detect bottom-right collision
    if (
      this.posX > wall.bottomRight.x &&
      this.posY > wall.bottomRight.y
    ) {
      // debugger
      distance = this.calculateDistance(this.posX, this.posY, wall.bottomRight.x, wall.bottomRight.y);
      // debugger
      if (
        distance <= this.radius &&
        distance < this.distanceMin
      ) {
        // debugger
        opp = this.posY - wall.bottomRight.y;
        adj = this.posX - wall.bottomRight.x;
  
        theta = Math.atan(opp / adj);
        // debugger

        intX = this.quadForm(
          1,
          -2 * this.posX,
          Math.pow(this.posX, 2) + Math.pow(wall.bottomRight.y - this.posY, 2) - Math.pow(this.radius, 2)
        );
        intY = this.quadForm(
          1,
          -2 * this.posY,
          Math.pow(this.posY, 2) + Math.pow(wall.bottomRight.x - this.posX, 2) - Math.pow(this.radius, 2)
        );
        // debugger
        shiftX = wall.bottomRight.x - intX[0];
        shiftY = wall.bottomRight.y - intY[0];
        // debugger
        if (theta === Math.PI / 4) {
          // debugger
          this.collision = "bottom-right";
          this.shiftX = shiftX;
          this.shiftY = shiftY;
        } else if (theta < Math.PI / 4) {
          // debugger
          this.collision = "right";
          this.shiftX = shiftX;
        } else if (theta > Math.PI / 4) {
          // debugger
          this.collision = "bottom";
          this.shiftY = shiftY;
        }

        this.distanceMin = distance;
      }
    }
  }

  detectHole() {
    this.holes.forEach(hole => {
      if (this.calculateDistance(this.posX, this.posY, hole.posX, hole.posY) <= hole.radius) {
        this.fell = true;
      }
    })
  }

  checkFinish() {
    if (
      this.posX >= 20 * this.cellSize &&
      this.posY >= 16 * this.cellSize
    ) {
      alert("YOU WIN");
      this.restart();
    } else if (this.fell) {
      // alert("YOU DIED");
      this.restart();
    }
  }

  update(deltaTime) {
    // Reset collision instance variables
    this.collision = null;
    this.distanceMin = this.radius;
    this.shiftX = 0;
    this.shiftY = 0;
    this.fell = false;

    // Update accelerations
    this.accX = this.calculateAcc(this.tiltX, this.velX, "x");
    this.accY = this.calculateAcc(this.tiltY, this.velY, "y");
    
    // Update velX
    let prevVelX = this.velX;
    this.velX += this.accX * deltaTime;
    // If velocity changes direction and this.stopX is true
    if (Math.sign(prevVelX) !== Math.sign(this.velX) && this.stopX) {
      this.velX = 0;
      this.accX = 0;
    }
    
    // Update velY
    let prevVelY = this.velY;
    this.velY += this.accY * deltaTime;
    // If velocity changes direction and this.stopY is true
    if (Math.sign(prevVelY) !== Math.sign(this.velY) && this.stopY) {
      this.velY = 0;
      this.accY = 0;
    }
    
    // Update posX
    this.posX += this.velX * deltaTime;
    if (this.posX - this.radius < 0) { // If marble hits left border of maze
      this.posX = this.radius;
      this.velX = 0;
    } else if (this.posX + this.radius > this.width) { // If marble hits right border of maze
      this.posX = this.width - this.radius;
      this.velX = 0;
    }
    
    // Update posY
    this.posY += this.velY * deltaTime;
    if (this.posY - this.radius < 0) { // If marble hits top border of maze
      this.posY = this.radius;
      this.velY = 0;
    } else if (this.posY + this.radius > this.height) { // If marble hits bottom border of maze
      this.posY = this.height - this.radius;
      this.velY = 0;
    }

    // BOOKMARK

    this.checkWallCollisions();
    // this.checkBorderCollisions();
    this.detectHole();

    if (this.collision) {
      // Correct position
      this.posX += this.shiftX;
      this.posY += this.shiftY;

      // Correct velocity
      if (
        this.collision === "top-left" ||
        this.collision === "top-right" ||
        this.collision === "bottom-left" ||
        this.collision === "bottom-right"
      ) {
        // this.velX *= (-1 * this.bounciness);
        // this.velY *= (-1 * this.bounciness);
        this.velX = 0;
        this.velY = 0;
      }
      if (this.collision === "top" || this.collision === "bottom") {
        // this.velX *= this.bounciness;
        // this.velY *= (-1 * this.bounciness);
        this.velY = 0;
      }
      if (this.collision === "left" || this.collision === "right") {
        // this.velX *= (-1 * this.bounciness);
        // this.velY *= this.bounciness;
        this.velX = 0;
      }

    }
    // debugger
    
    this.checkFinish();
  }

  tiltUp(deltaTime) {
    this.tiltY -= deltaTime * this.tiltSensitivity;
    if (this.tiltY < -1 * this.maxTiltY) this.tiltY = -1 * this.maxTiltY;
  }

  tiltDown(deltaTime) {
    this.tiltY += deltaTime * this.tiltSensitivity;
    if (this.tiltY > this.maxTiltY) this.tiltY = this.maxTiltY;
  }

  tiltLeft(deltaTime) {
    this.tiltX -= deltaTime * this.tiltSensitivity;
    if (this.tiltX < -1 * this.maxTiltX) this.tiltX = -1 * this.maxTiltX;
  }

  tiltRight(deltaTime) {
    this.tiltX += deltaTime * this.tiltSensitivity;
    if (this.tiltX > this.maxTiltX) this.tiltX = this.maxTiltX;
  }
}