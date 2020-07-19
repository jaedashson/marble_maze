export default class Hole {
  constructor(id, posCellX, posCellY) {
    this.cellSize = 36; // DRY me!
    this.id = id;
    this.posCellX = posCellX;
    this.posCellY = posCellY;
    this.posX = this.posCellX * this.cellSize;
    this.posY = this.posCellY * this.cellSize;

    this.radius = (this.cellSize * 0.75) / 2 + 16; // FIXME
  }

  draw(ctx) {
    // // draw hole
    // ctx.fillStyle = "gray";
    // ctx.beginPath();
    // ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
    // ctx.fill();

    // draw shadow
    const grd = ctx.createRadialGradient(this.posX, this.posY, 0, this.posX, this.posY, this.radius + 10)
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "gray");
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    
  }
}