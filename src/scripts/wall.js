export default class Wall {
  constructor(startX, startY, axis, length, thickness) {
    this.startX = startX;
    this.startY = startY;
    this.axis = axis;
    this.length = length;
    this.thickness = thickness;

    // Calculate dimensions
    this.topLeft;
    this.topRight;
    this.bottomRight;
    this.bottomLeft;
  }

  draw() {
    
  }
}