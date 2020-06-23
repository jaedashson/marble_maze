export default class Board {
  constructor() {
    this.tiltX = 0;
    this.tiltY = 0;
  }

  tiltUp() {
    this.tiltY++;
  }

  tiltDown() {
    this.tiltY--;
  }

  tiltLeft() {
    this.tiltX--;
  }

  tiltRight() {
    this.tiltX++;
  }
}