export default class Game {
  constructor(board, marble) {
    this.board = board;
    this.marble = marble;
  }
  
  update(deltaTime) {
    // this.board.update(deltaTime);
    this.marble.update(deltaTime, this.board.accX, this.board.accY);
  }

  drawHUD(ctx) {
    ctx.fillStyle = "black";
    ctx.font = "16px Arial";
    ctx.fillText(`tilt: x=${this.board.tiltX} y=${this.board.tiltY}`, 20, 20);
    ctx.fillText(`acceleration: x=${this.board.accX} y=${this.board.accY}`, 20, 50);
    ctx.fillText(`velocity: x=${this.marble.velX} y=${this.marble.velY}`, 20, 80);
  }

  draw(ctx) {
    this.board.draw(ctx)
    this.marble.draw(ctx);
    this.drawHUD(ctx);
  }
}