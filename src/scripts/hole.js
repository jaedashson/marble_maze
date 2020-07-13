export default class Hole {
  constructor(id, posCellX, posCellY) {
    this.cellSize = 36; // DRY me!
    this.id = id;
    this.posCellX = posCellX;
    this.posCellY = posCellY;
    this.posX = this.posCellX * this.cellSize;
    this.posY = this.posCellY * this.cellSize;


    this.radius = (this.cellSize * 0.75) / 2 + 8; // FIXME
  }

  draw(ctx) {
    ctx.fillStyle = "gray";
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}