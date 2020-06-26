import { CELL_SIZE, WALL_RADIUS } from "../index"; // Why don't these imports work?

export default class Wall {
  constructor(startXCell, startYCell, orientation, length, cellSize, wallRadius) {
    debugger // FIXME
    this.startXCell = startXCell;
    this.startYCell = startYCell;
    this.orientation = orientation;
    this.length = length;
    this.cellSize = cellSize;
    this.wallRadius = wallRadius;
    this.radius = wallRadius;

    // Calculate dimensions
    this.topLeft;
    this.topRight;
    this.bottomLeft;
    this.bottomRight;
    this.calculateDimensions();
  }

  calculateDimensions() {
    if (this.orientation === "x") {
      this.topLeft = {
        x: this.startXCell * this.cellSize,
        y: this.startYCell * this.cellSize - this.radius
      };
      this.bottomLeft = {
        x: this.startXCell * this.cellSize,
        y: this.startYCell * this.cellSize + this.radius
      };
      this.topRight = {
        x: (this.startXCell + this.length) * this.cellSize,
        y: this.startYCell * this.cellSize - this.radius
      };
      this.bottomRight = {
        x: (this.startXCell + this.length) * this.cellSize,
        y: this.startYCell * this.cellSize + this.radius
      };

    } else if (this.orientation === "y") {
      debugger // FIXME
      this.topLeft = {
        x: this.startXCell * this.cellSize - this.radius,
        y: this.startYCell * this.cellSize
      };
      this.topRight = {
        x: this.startXCell * this.cellSize + this.radius,
        y: this.startYCell * this.cellSize
      };
      this.bottomLeft = {
        x: this.startXCell * this.cellSize - this.radius,
        y: (this.startYCell + this.length) * this.cellSize 
      };
      this.bottomRight = {
        x: this.startXCell * this.cellSize + this.radius,
        y: (this.startYCell + this.length) * this.cellSize
      };
    }
  }

  draw(ctx) {
    debugger // FIXME
    ctx.fillStyle = "black";
    ctx.fillRect(this.topLeft.x, this.topLeft.y, this.topRight.x - this.topLeft.x, this.bottomLeft.y - this.topLeft.y);
  }
}