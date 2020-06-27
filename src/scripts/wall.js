import { CELL_SIZE, WALL_RADIUS } from "../index"; // Why don't these imports work?

// modStart > 0 => extend the starting portion of the wall
// modStart < 0 => shorten the starting portion of the wall
// modEnd > 0 => extend the ending portion of the wall
// modEnd < 0 => shorten the ending portion of the wall

export default class Wall {
  constructor(startXCell, startYCell, orientation, length, cellSize, wallRadius, modStart, modEnd) {
    debugger // FIXME
    this.startXCell = startXCell;
    this.startYCell = startYCell;
    this.orientation = orientation;
    this.length = length;
    this.cellSize = cellSize;
    this.radius = wallRadius;
    this.modStart = modStart;
    this.modEnd = modEnd;

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
      
      if (this.modStart < 0) {
        this.topLeft.x += this.radius;
        this.bottomLeft.x += this.radius;
      } else if (this.modStart > 0) {
        this.topLeft.x -= this.radius;
        this.bottomLeft.x -= this.radius;
      }

      this.topRight = {
        x: (this.startXCell + this.length) * this.cellSize,
        y: this.startYCell * this.cellSize - this.radius
      };
      this.bottomRight = {
        x: (this.startXCell + this.length) * this.cellSize,
        y: this.startYCell * this.cellSize + this.radius
      };

      if (this.modEnd < 0) {
        this.topRight.x -= this.radius;
        this.bottomRight.x -= this.radius;
      } else if (this.modEnd > 0) {
        this.topRight.x += this.radius;
        this.bottomRight.x += this.radius;
      }

    } else if (this.orientation === "y") {
      this.topLeft = {
        x: this.startXCell * this.cellSize - this.radius,
        y: this.startYCell * this.cellSize
      };
      this.topRight = {
        x: this.startXCell * this.cellSize + this.radius,
        y: this.startYCell * this.cellSize
      };

      if (this.modStart < 0) {
        this.topLeft.y += this.radius;
        this.topRight.y += this.radius;
      } else if (this.modStart > 0) {
        this.topLeft.y -= this.radius;
        this.topRight.y -= this.radius;
      }

      this.bottomLeft = {
        x: this.startXCell * this.cellSize - this.radius,
        y: (this.startYCell + this.length) * this.cellSize 
      };
      this.bottomRight = {
        x: this.startXCell * this.cellSize + this.radius,
        y: (this.startYCell + this.length) * this.cellSize
      };

      if (this.modEnd < 0) {
        this.bottomLeft.y -= this.radius;
        this.bottomRight.y -= this.radius;
      } else if (this.modEnd > 0) {
        this.bottomLeft.y += this.radius;
        this.bottomRight.y += this.radius;
      }

    }
  }

  draw(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(this.topLeft.x, this.topLeft.y, this.topRight.x - this.topLeft.x, this.bottomLeft.y - this.topLeft.y);
  }
}