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

  calculateAcc(deg, vel) {
    // console.log("calculating acceleration!");
    let dir;
    if (deg === 0) {
      dir = Math.sign(vel);
    } else {
      dir = Math.sign(deg);
    }

    let degAbs = Math.abs(deg);
    let rad = this.degToRad(degAbs);

    let acc = this.grav * Math.sin(rad);
    let fric;

    if (this.velX === 0 && this.velY === 0) {
      fric = this.calculateFricS(rad);

      if (acc <= fric) {
        return 0;
      } else {
        return dir * (acc - fric);
      }
    } else { // FIXME
      fric = this.calculateFricK(rad);
      let accNet = dir * (acc - fric);
      // console.log(`dir=${dir}`); // DEBUG
      // console.log(`acc=${acc}`); // DEBUG
      // console.log(`fric=${fric}`); // DEBUG
      // console.log(`accNet=${accNet}`); // DEBUG
      return accNet;
    }
  }

  update(deltaTime) {
    this.accX = this.calculateAcc(this.tiltX, this.velX);
    this.accY = this.calculateAcc(this.tiltY, this.velY);

    this.velX += this.accX * deltaTime;
    if (this.velX > this.maxSpeed) {
      this.velX = this.maxSpeed;
    } else if (this.velX < this.minSpeed) {
      this.velX = this.minSpeed;
    }

    this.velY += this.accY * deltaTime;
    if (this.velY > this.maxSpeed) {
      this.velY = this.maxSpeed;
    } else if (this.velY < this.minSpeed) {
      this.velY = this.minSpeed;
    }

    this.posX += this.velX * deltaTime;
    if (this.posX - this.radius < 0) {
      this.posX = this.radius;
      this.velX = 0;
    } else if (this.posX + this.radius > this.width) {
      this.posX = this.width - this.radius;
      this.velX = 0;
    }

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