export default class Game {
  constructor(board, marble, walls, holes) {
    debugger
    this.board = board;
    this.marble = marble;
    this.walls = walls;
    this.holes = holes;
  }
  
  update(deltaTime) {
    this.marble.update(deltaTime, this.board.accX, this.board.accY);
  }

  drawHUD(ctx) {
    ctx.fillStyle = "blue";
    ctx.font = "16px Arial";

    // FIXME - delete for final game
    ctx.fillText(`tiltX=${this.marble.tiltX}`, 20, 26);
    ctx.fillText(`tiltY=${this.marble.tiltY}`, 420, 26)
    ctx.fillText(`accX=${this.marble.accX}`, 20, 56);
    ctx.fillText(`accY=${this.marble.accY}`, 420, 56);
    ctx.fillText(`velX=${this.marble.velX}`, 20, 86);
    ctx.fillText(`velY=${this.marble.velY}`, 420, 86);

    // final HUD
    const tiltBarLength = 160;

    ctx.fillText(`x direction`, 140, 26);
    ctx.rect(220, 10, tiltBarLength, 20);
    ctx.stroke();
    

    ctx.fillText(`y direction`, 140, 56);
    ctx.rect(220, 40, tiltBarLength, 20);
    ctx.stroke();
  }

  drawStartFinish(ctx) {
    ctx.fillStyle = "red";
    ctx.fillText("START", 36 * 17 - 22, 16 * 36);

    ctx.fillStyle = "green";
    ctx.fillText("FINISH", 21 * 36 - 22, 17 * 36 + 8);
    
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.rect(20 * 36, 16 * 36, 2 * 36, 2 * 36);
    ctx.stroke();
  }

  draw(ctx) {
    this.drawStartFinish(ctx);

    this.board.draw(ctx);
    this.walls.forEach(wall => wall.draw(ctx));
    this.holes.forEach(hole => hole.draw(ctx));
    this.marble.draw(ctx);
    this.drawHUD(ctx);
  }
}