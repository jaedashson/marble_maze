import { CELL_SIZE, WALL_RADIUS } from "../index"; // Why don't these imports work?

// modStart > 0 => extend the starting portion of the wall
// modStart < 0 => shorten the starting portion of the wall
// modEnd > 0 => extend the ending portion of the wall
// modEnd < 0 => shorten the ending portion of the wall

export default class Wall {
  constructor(id, startXCell, startYCell, orientation, length, cellSize, wallRadius, modStart, modEnd) {
    // debugger // FIXME
    this.id = id;
    this.startXCell = startXCell;
    this.startYCell = startYCell;
    this.orientation = orientation;
    this.length = length;
    this.cellSize = 36; // Game size multiplier
    this.radius = 2; // Half of wall thickness
    this.modStart = modStart;
    this.modEnd = modEnd;


    // Calculate dimensions
    this.topLeft;
    this.topRight;
    this.bottomLeft;
    this.bottomRight;
    this.wallWidth;
    this.wallHeight;
    this.center;
    this.calculateDimensions();
    this.calculateCenter();

    // debugger
  }

  calculateCenter() {
    // debugger
    this.center = {
      x: (this.topRight.x + this.topLeft.x) / 2,
      y: (this.topLeft.y + this.bottomLeft.y) / 2
    };
    // debugger
  }

  calculateDimensions() {
    // debugger
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

    // Calculate wallWidth and wallHeight
    this.wallWidth = this.topRight.x - this.topLeft.x;
    this.wallHeight = this.bottomLeft.y - this.topLeft.y;
    // debugger
  }

  draw(ctx) {
    // debugger
    // Draw id label
    ctx.fillStyle = "blue";
    ctx.font = "12 px Arial";
    ctx.fillText(`${this.id}`, this.center.x, this.center.y);
    // debugger
    // Draw wall
    ctx.fillStyle = "black";
    ctx.fillRect(this.topLeft.x, this.topLeft.y, this.topRight.x - this.topLeft.x, this.bottomLeft.y - this.topLeft.y); // FIXME - Refactor to include wallWidth and wallHeight
    // debugger
    // Draw center
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, 2, 0, 2 * Math.PI);
    ctx.fill(); 
  }
}