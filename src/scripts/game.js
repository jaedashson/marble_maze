export default class Game {
  constructor(board, marble, walls) {
    this.board = board;
    this.marble = marble;
    this.walls = walls;
  }
  
  update(deltaTime) {
    this.marble.update(deltaTime, this.board.accX, this.board.accY);
  }

  drawHUD(ctx) {
    ctx.fillStyle = "blue";
    ctx.font = "16px Arial";
    ctx.fillText(`tiltX=${this.marble.tiltX}`, 20, 26);
    ctx.fillText(`tiltY=${this.marble.tiltY}`, 420, 26)
    ctx.fillText(`accX=${this.marble.accX}`, 20, 56);
    ctx.fillText(`accY=${this.marble.accY}`, 420, 56)
    ctx.fillText(`velX=${this.marble.velX}`, 20, 86);
    ctx.fillText(`velY=${this.marble.velY}`, 420, 86)
  }

  drawStartFinish(ctx) {

  }

  draw(ctx) {
    this.drawStartFinish(ctx);

    this.board.draw(ctx);
    this.marble.draw(ctx);
    this.walls.forEach(wall => wall.draw(ctx));
    this.drawHUD(ctx);
  }
}