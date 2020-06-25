export default class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
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
    let acc = sign * this.grav * Math.sin(rad);

    let fric = this.calculateFric(rad);
  }
}