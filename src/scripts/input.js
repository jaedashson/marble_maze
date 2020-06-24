export default class InputHandler {
  constructor(board) {
    this.board = board;
    this.keys;

    window.addEventListener("keydown", e => {
      e.preventDefault();
      this.keys = (this.keys || []);
      this.keys[e.keyCode] = (e.type == "keydown");
    })

    window.addEventListener("keyup", e => {
      e.preventDefault();
      this.keys[e.keyCode] = (e.type == "keydown");
    })
  }

  handleInput(deltaTime) {
    if (this.keys && this.keys[87]) { this.board.tiltUp(deltaTime); }
    if (this.keys && this.keys[83]) { this.board.tiltDown(deltaTime); }
    if (this.keys && this.keys[65]) { this.board.tiltLeft(deltaTime); }
    if (this.keys && this.keys[68]) { this.board.tiltRight(deltaTime); }
  }
}