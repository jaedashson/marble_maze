export default class InputHandler {
  constructor(board) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 87: // W
          debugger
          board.tiltUp();
          break;
        case 83: // S
          debugger
          board.tiltDown();
          break;
        case 65: // A
          debugger
          board.tiltLeft();
          break;
        case 68: // D
          debugger
          board.tiltRight();
          break;
        default:
          break;
      }
    })
  }
}