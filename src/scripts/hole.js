export default class Hole {
  constructor(id, posCellX, posCellY) {
    this.cellSize = 36; // DRY me!
    this.id = id;
    this.posCellX = posCellX;
    this.posCellY = posCellY;
    this.radius = (this.cellSize * 0.75) / 2
  }

  draw() {
    
  }
}