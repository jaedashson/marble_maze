export default class InputHandler {
  constructor(board) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 87: // W
          board.tiltUp();
        case 83: // S
          board.tiltDown();
        case 65: // A
          board.tiltLeft();
        case 68: // D
          board.tiltRight();
        default:
          break;
      }
    })
  }
}