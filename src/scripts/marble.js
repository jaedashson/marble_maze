export default class Marble {
  constructor() {
    this.image = document.getElementById("img-marble");
    this.position = {
      x: 300,
      y: 300
    };
    this.acceleration = {
      x: 0,
      y: 0
    }
    this.speed = {
      x: 0,
      y: 0
    };
    this.gravity = 0.01; // Adjust
    this.friction = 0.25; // Adjust
  }

  degToRad(deg) {
    return deg * (Math.PI / 180);
  }

  calculateAcceleration(deg) {
    let sign = Math.sign(deg);
    let degAbs = Math.abs(deg);
    let rad = this.degToRad(degAbs);
    return sign * this.gravity * (Math.sin(rad) - this.friction * Math.cos(rad));
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y, 16, 16);
  }

  // a = g(sinθ - μcosθ)
  update(deltaTime, tiltX, tiltY) {
    this.acceleration.x = this.calculateAcceleration(tiltX);
    this.acceleration.y = this.calculateAcceleration(tiltY);

    this.speed.x = this.acceleration.x * deltaTime;
    this.speed.y = this.acceleration.y * deltaTime;

    this.position.x += this.speed.x * deltaTime;
    this.position.y += this.speed.y * deltaTime;
  }
}