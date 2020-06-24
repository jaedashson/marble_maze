export default class Marble {
  constructor(size, width, height) {
    this.image = document.getElementById("img-marble");
    this.size = size;
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
    ctx.drawImage(this.image, this.posX, this.posY, this.size, this.size);
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
    if (this.posX < 0) {
      this.posX = 0;
    } else if (this.posX + this.size > this.width) {
      this.posX = this.width - this.size;
    }

    this.posY += this.velY * deltaTime;
    if (this.posY < 0) {
      this.posY = 0;
    } else if (this.posY + this.size > this.height) {
      this.posY = this.height - this.size;
    }
  }
}