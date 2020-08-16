import walls from "./walls";

export default class Marble {
  constructor(radius, width, height, walls, holes) {
    this.radius = radius; // radius of the marble
    this.width = width; // width of the board
    this.height = height; // height of the board
    this.walls = walls;
    this.holes = holes;

    this.cellSize = 36; // game size adjustment
    
    this.maxTiltX = 45;
    this.maxTiltY = 45;
    this.startPosX = this.cellSize * 1; // TODO - for final game, set to this.cellSize * 17
    this.startPosY = this.cellSize * 9; // TODO - for final game, set to this.cellSize * 17

    this.tiltX = 0; // TEST
    this.tiltY = 0; // TEST
    this.accX = 0;
    this.accY = 0;
    this.velX = 0;
    this.velY = 0;
    this.posX = this.startPosX;
    this.posY = this.startPosY;
    
    this.grav = 0.0025; // acceleration due to gravity
    this.fricSCoeff = 0.05; // static friction coefficient
    this.fricKCoeff = 0.05; // kinetic friction coefficient
    this.tiltSensitivity = 0.03;
    this.bounciness = 0.1; // TODO - delete
    this.stopX = false; // prevents movement in x-direction if true
    this.stopY = false; // prevents movement in y-direction if true

    this.wallRadius = 2;
    this.halfOfLongestWallLength = 11; // used to calculate this.distRadius
    // TODO - change this so that it is dynamic based on this.walls

    // The farthest a marble's center can be from a wall's center and still possibly collide
    // Used to calculate which walls to check for collision
    this.distRadius = Math.sqrt(Math.pow(this.wallRadius, 2) + Math.pow(this.halfOfLongestWallLength * this.cellSize + this.wallRadius, 2)) + this.radius;
    
    this.collision = null; // collision type, if any
    this.distanceMin = this.radius;
    this.shiftX = 0; // correction for posX after collision
    this.shiftY = 0; // correction for posY after collision
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

    // FIXME - delete for final game
    ctx.arc(this.posX, this.posY, this.distRadius, 0, 2 * Math.PI);
    ctx.stroke();

  }

  // TODO - replace with util function
  quadForm(a, b, c) {
    // debugger
    let soln1 = null;
    let soln2 = null;

    soln1 = (-b - Math.sqrt( b*b - 4 * a * c )) / (2 * a);
    soln2 = (-b + Math.sqrt( b*b - 4 * a * c )) / (2 * a);
    // debugger
    return [soln1, soln2];
  }

  calculateFricS(rad) {
    return this.fricSCoeff * this.grav * Math.cos(rad);
  }

  calculateFricK(rad, vel) {
    return this.fricKCoeff * this.grav * Math.cos(rad);
  }

  // TODO - replace with util function
  degToRad(deg) {
    return deg * (Math.PI / 180);
  }

  calculateAcc(deg, vel, axis) {
    // console.log("calculating acceleration!");
    let dirAcc = Math.sign(deg);
    let dirFric;
    if (vel === 0) { // Is this correct?
      dirFric = -1 * dirAcc;
    } else {
      dirFric = -1 * Math.sign(vel);
    }

    let rad = this.degToRad(Math.abs(deg));

    let acc = dirAcc * this.grav * Math.sin(rad);
    let fric = dirFric * this.fricKCoeff * this.grav * Math.cos(rad);
    let accNet = acc + fric;

    if (Math.abs(acc) <= Math.abs(fric) && Math.sign(accNet) !== Math.sign(vel)) {
      if (axis === "x") this.stopX = true;
      if (axis === "y") this.stopY = true;
    } else {
      if (axis === "x") this.stopX = false;
      if (axis === "y") this.stopY = false;
    }

    return accNet;
  }

  // TODO - replace with util function
  calculateDistance(x1, y1, x2, y2) {
    // debugger
    const dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    // debugger
    return dist;
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

    // detect top collision
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
        this.shiftY = 2 * (wall.topLeft.y - (this.posY + this.radius));
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
        this.shiftY = 2 * (wall.bottomLeft.y - (this.posY - this.radius));
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
        this.shiftX = 2 * (wall.topLeft.x - (this.posX + this.radius));
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
        this.shiftX = 2 * (wall.topRight.x - (this.posX - this.radius));
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
        shiftX = -2 * (intX[1] - wall.topLeft.x);
        shiftY = -2 * (intY[1] - wall.topLeft.y);
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
        shiftX = 2 * (wall.topRight.x - intX[0]);
        shiftY = -2 * (intY[1] - wall.topRight.y);
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
        shiftX = -2 * (intX[1] - wall.bottomLeft.x);
        shiftY = 2 * (wall.bottomLeft.y - intY[0]);
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
        shiftX = 2 * (wall.bottomRight.x - intX[0]);
        shiftY = 2 * (wall.bottomRight.y - intY[0]);
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
    // reset collision instance variables
    this.collision = null;
    this.distanceMin = this.radius;
    this.shiftX = 0;
    this.shiftY = 0;
    this.fell = false;

    // Update accelerations
    this.accX = this.calculateAcc(this.tiltX, this.velX, "x"); // FIXME
    this.accY = this.calculateAcc(this.tiltY, this.velY, "y"); // FIXME
    
    // Update velX
    let prevVelX = this.velX;
    this.velX += this.accX * deltaTime;
    if (Math.sign(prevVelX) !== Math.sign(this.velX) && this.stopX) {
      this.velX = 0;
      this.accX = 0;
    }
    
    // Update velY
    let prevVelY = this.velY;
    this.velY += this.accY * deltaTime;
    if (Math.sign(prevVelY) !== Math.sign(this.velY) && this.stopY) {
      this.velY = 0;
      this.accY = 0;
    }
    
    // Update posX
    this.posX += this.velX * deltaTime;
    if (this.posX - this.radius < 0) {
      this.posX = this.radius;
      this.velX = 0;
    } else if (this.posX + this.radius > this.width) {
      this.posX = this.width - this.radius;
      this.velX = 0;
    }
    
    // Update posY
    this.posY += this.velY * deltaTime;
    if (this.posY - this.radius < 0) {
      this.posY = this.radius;
      this.velY = 0;
    } else if (this.posY + this.radius > this.height) {
      this.posY = this.height - this.radius;
      this.velY = 0;
    }

    this.checkWallCollisions();
    this.checkBorderCollisions();
    this.detectHole();

    if (this.collision) {
      // correct position
      this.posX += this.shiftX;
      this.posY += this.shiftY;

      // correct velocity
      if (
        this.collision === "top-left" ||
        this.collision === "top-right" ||
        this.collision === "bottom-left" ||
        this.collision === "bottom-right"
      ) {
        this.velX *= (-1 * this.bounciness);
        this.velY *= (-1 * this.bounciness);
      }
      if (this.collision === "top" || this.collision === "bottom") {
        this.velX *= this.bounciness;
        this.velY *= (-1 * this.bounciness);
      }
      if (this.collision === "left" || this.collision === "right") {
        this.velX *= (-1 * this.bounciness);
        this.velY *= this.bounciness;
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