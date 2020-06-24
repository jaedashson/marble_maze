export default class Marble {
  constructor(radius, width, height) {
    this.image = document.getElementById("img-marble");
    this.radius = radius;
    this.posX = 300;
    this.posY = 300;
    this.velX = 0;
    this.velY = 0;
    this.maxSpeed = 10;
    this.minSpeed = -10;
    this.width = width;
    this.height = height;
  }

  draw(ctx) {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  update(deltaTime, accX, accY) {
    this.velX += accX * deltaTime;
    if (this.velX > this.maxSpeed) {
      this.velX = this.maxSpeed;
    } else if (this.velX < this.minSpeed) {
      this.velX = this.minSpeed;
    }

    this.velY += accY * deltaTime;
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
}