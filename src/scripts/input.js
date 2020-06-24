export default class InputHandler {
  constructor(board) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 87: // W
          board.tiltUp();
          break;
        case 83: // S
          board.tiltDown();
          break;
        case 65: // A
          board.tiltLeft();
          break;
        case 68: // D
          board.tiltRight();
          break;
        default:
          break;
      }
    })
  }
}