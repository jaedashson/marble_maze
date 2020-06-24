export default class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.tiltX = 0;
    this.tiltY = 0;
    this.maxTiltX = 30;
    this.maxTiltY = 30;
    this.accX = 0;
    this.accY = 0;
    this.gravity = 0.1; // Adjust
  }

  draw(ctx) {
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(this.width, 0);
    ctx.lineTo(this.width, this.height);
    ctx.lineTo(0, this.height);
    ctx.lineTo(0, 0);
    ctx.stroke();
  }

  // a = gsinθ
  calculateAcc(deg) {
    let sign = Math.sign(deg);
    let degAbs = Math.abs(deg);
    let rad = this.degToRad(degAbs);
    return sign * this.gravity * Math.sin(rad);
  }

  degToRad(deg) {
    return deg * (Math.PI / 180);
  }

  updateAccX() {
    this.accX = this.calculateAcc(this.tiltX);
  }

  updateAccY() {
    this.accY = this.calculateAcc(this.tiltY);
  }

  tiltUp() {
    if (this.tiltY === -1 * this.maxTiltY) return;
    this.tiltY--;
    this.updateAccY();
  }

  tiltDown() {
    if (this.tiltY === this.maxTiltY) return;
    this.tiltY++;
    this.updateAccY();
  }

  tiltLeft() {
    if (this.tiltX === -1 * this.maxTiltX) return;
    this.tiltX--;
    this.updateAccX();
  }

  tiltRight() {
    if (this.tiltX === this.maxTiltX) return;
    this.tiltX++;
    this.updateAccX();
  }
}