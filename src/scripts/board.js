export default class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.tiltX = 0;
    this.tiltY = 0;
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

  tiltUp() {
    this.tiltY--;
  }

  tiltDown() {
    this.tiltY++;
  }

  tiltLeft() {
    this.tiltX--;
  }

  tiltRight() {
    this.tiltX++;
  }
}