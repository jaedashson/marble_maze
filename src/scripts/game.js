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
    ctx.fillText(`tiltX=${this.marble.tiltX}`, 20, 20);
    ctx.fillText(`tiltY=${this.marble.tiltY}`, 100, 20)
    ctx.fillText(`accX=${this.marble.accX}`, 20, 50);
    ctx.fillText(`accY=${this.marble.accY}`, 100, 50)
    ctx.fillText(`velX=${this.marble.velX}`, 20, 80);
    ctx.fillText(`velY=${this.marble.velY}`, 100, 80)
  }

  draw(ctx) {
    this.board.draw(ctx)
    this.marble.draw(ctx);
    this.drawHUD(ctx);
  }
}