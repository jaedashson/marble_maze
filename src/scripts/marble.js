export default class Marble {
  constructor(radius, width, height) {
    this.radius = radius;
    this.width = width;
    this.height = height;
    this.tiltX = 0;
    this.tiltY = 0;
    this.maxTiltX = 45;
    this.maxTiltY = 45;
    this.accX = 0;
    this.accY = 0;
    this.velX = 0;
    this.velY = 0;
    // this.maxSpeed = 10;
    // this.minSpeed = -10;
    this.posX = 300;
    this.posY = 300;
    this.grav = 0.00025; // Adjust
    this.fricSCoeff = 0.2; // Adjust
    this.fricKCoeff = 0.2; // Adjust
    this.tiltMultiplier = 0.03; // Adjust
    this.stopX = false;
    this.stopY = false;
  }

  draw(ctx) {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  calculateFricS(rad) {
    return this.fricSCoeff * this.grav * Math.cos(rad);
  }

  calculateFricK(rad, vel) {
    return this.fricKCoeff * this.grav * Math.cos(rad);
  }

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

  update(deltaTime) {
    // Update accelerations
    this.accX = this.calculateAcc(this.tiltX, this.velX, "x");
    this.accY = this.calculateAcc(this.tiltY, this.velY, "y");

    // Update velX
    let prevVelX = this.velX;
    this.velX += this.accX * deltaTime;
    if (Math.sign(prevVelX) !== Math.sign(this.velX) && this.stopX) {
      this.velX = 0;
    }

    // Update velY
    let prevVelY = this.velY;
    this.velY += this.accY * deltaTime;
    if (Math.sign(prevVelY) !== Math.sign(this.velY) && this.stopY) {
      this.velY = 0;
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
  }

  tiltUp(deltaTime) {
    this.tiltY -= deltaTime * this.tiltMultiplier;
    if (this.tiltY < -1 * this.maxTiltY) this.tiltY = -1 * this.maxTiltY;
  }

  tiltDown(deltaTime) {
    this.tiltY += deltaTime * this.tiltMultiplier;
    if (this.tiltY > this.maxTiltY) this.tiltY = this.maxTiltY;
  }

  tiltLeft(deltaTime) {
    this.tiltX -= deltaTime * this.tiltMultiplier;
    if (this.tiltX < -1 * this.maxTiltX) this.tiltX = -1 * this.maxTiltX;
  }

  tiltRight(deltaTime) {
    this.tiltX += deltaTime * this.tiltMultiplier;
    if (this.tiltX > this.maxTiltX) this.tiltX = this.maxTiltX;
  }
}