export default class Game {
  constructor(board, marble) {
    this.board = board;
    this.marble = marble;
  }
  
  update(deltaTime) {
    // this.board.update(deltaTime);
    this.marble.update(deltaTime, this.board.tiltX, this.board.tiltY);
  }

  draw(ctx) {
    this.board.draw(ctx)
    this.marble.draw(ctx);
  }

}