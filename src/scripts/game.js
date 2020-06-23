export default class Game {
  constructor(board, marble) {
    this.board = board;
    this.marble = marble;
  }
  
  update(deltaTime) {
    // this.board.update(deltaTime);
    this.marble.update(deltaTime, this.board.tiltX, this.board.tiltY);
  }

  drawHUD(ctx) {
    ctx.font = "16px Arial";
    ctx.fillText(`tilt: x=${this.board.tiltX} y=${this.board.tiltY}`, 20, 20);

    ctx.fillText(`acceleration: x=${this.marble.acceleration.x} y=${this.marble.acceleration.y}`, 20, 50);
    ctx.fillText(`speed: x=${this.marble.speed.x} y=${this.marble.speed.y}`, 20, 80);
  }

  draw(ctx) {
    this.board.draw(ctx)
    this.marble.draw(ctx);
    this.drawHUD(ctx);

  }

}