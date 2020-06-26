import { CELL_SIZE } from "../index";
import { WALL_RADIUS } from "../index";

export default class Wall {
  constructor(startXCell, startYCell, orientation, length) {
    this.startXCell = startXCell;
    this.startYCell = startYCell;
    this.orientation = orientation;
    this.length = length;
    this.radius = WALL_RADIUS;

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
        x: this.startXCell * CELL_SIZE,
        y: this.startYCell * CELL_SIZE - WALL_RADIUS
      };
      this.bottomLeft = {
        x: this.startXCell * CELL_SIZE,
        y: this.startYCell * CELL_SIZE + WALL_RADIUS
      };
      this.topRight = {
        x: (this.startXCell + this.length) * CELL_SIZE,
        y: this.startYCell * CELL_SIZE - WALL_RADIUS
      };
      this.bottomRight = {
        x: (this.startXCell + this.length) * CELL_SIZE,
        y: this.startYCell * CELL_SIZE + WALL_RADIUS
      };

    } else if (this.orientation === "y") {
      this.topLeft = {
        x: this.startXCell * CELL_SIZE - WALL_RADIUS,
        y: this.startYCell * CELL_SIZE
      };
      this.topRight = {
        x: this.startXCell * CELL_SIZE + WALL_RADIUS,
        y: this.startYCell * CELL_SIZE
      };
      this.bottomLeft = {
        x: this.startXCell * CELL_SIZE - WALL_RADIUS,
        y: (this.startYCell + this.length) * CELL_SIZE 
      };
      this.bottomRight = {
        x: this.startXCell * CELL_SIZE + WALL_RADIUS,
        y: (this.startYCell + this.length) * CELL_SIZE
      };
    }
  }

  draw(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(this.topLeft.x, this.topLeft.y, this.topRight.x - this.topLeft.x, this.bottomLeft.y - this.topLeft.y);
  }
}