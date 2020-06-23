export default class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.tiltX = 0;
    this.tiltY = 0;
    this.maxTiltX = 30;
    this.maxTiltY = 30;
  }
  
  draw(ctx) {
    // ctx.fillStyle = "#edb879";
    // ctx.fillRect(0, 0, this.width, this.height);

    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(this.width, 0);
    ctx.lineTo(this.width, this.height);
    ctx.lineTo(0, this.height);
    ctx.lineTo(0, 0);
    ctx.stroke();
  }

  tiltUp() {
    if (this.tiltY === -1 * this.maxTiltY) return;
    this.tiltY--;
  }

  tiltDown() {
    if (this.tiltY === this.maxTiltY) return;
    this.tiltY++;
  }

  tiltLeft() {
    if (this.tiltX === -1 * this.maxTiltX) return;
    this.tiltX--;
  }

  tiltRight() {
    if (this.tiltX === this.maxTiltX) return;
    this.tiltX++;
  }
}