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
    const fontSize = 16;

    ctx.fillStyle = "blue";
    ctx.font = `${fontSize}px Arial`;

    // FIXME - delete for final game
    // ctx.fillText(`tiltX=${this.marble.tiltX}`, 20, 26);
    // ctx.fillText(`tiltY=${this.marble.tiltY}`, 420, 26)
    // ctx.fillText(`accX=${this.marble.accX}`, 20, 56);
    // ctx.fillText(`accY=${this.marble.accY}`, 420, 56);
    // ctx.fillText(`velX=${this.marble.velX}`, 20, 86);
    // ctx.fillText(`velY=${this.marble.velY}`, 420, 86);

    // final HUD
    const startX = 140;
    const startY = 10;

    const tiltBarLength = 160;
    const tiltBarHeight = 20;

    ctx.strokeStyle = "black";
    ctx.fillText(`x-direction`, startX, startY + fontSize);
    ctx.fillText(`y-direction`, startX, startY + fontSize + 30);
    ctx.rect(startX + 80, startY, tiltBarLength, tiltBarHeight);
    ctx.rect(startX + 80, startY + 30, tiltBarLength, tiltBarHeight);
    ctx.stroke();

    // tilt bar center line
    ctx.strokeStyle = "gray";
    ctx.beginPath();
    ctx.moveTo(startX + 80 + (tiltBarLength / 2), startY);
    ctx.lineTo(startX + 80 + (tiltBarLength / 2), startY + tiltBarHeight);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(startX + 80 + (tiltBarLength / 2), startY + 30);
    ctx.lineTo(startX + 80 + (tiltBarLength / 2), startY + tiltBarHeight + 30);
    ctx.stroke();
    
    // ctx.beginPath()
    
    
    // tilt meter
    const tiltPercentX = this.marble.tiltX / this.marble.maxTiltX;
    const tiltPercentY = this.marble.tiltY / this.marble.maxTiltY;
    const tiltMeterPosX = tiltPercentX * (tiltBarLength / 2);
    const tiltMeterPosY = tiltPercentY * (tiltBarLength / 2);

    ctx.strokeStyle = "orange";
    ctx.beginPath();
    ctx.moveTo(startX + 80 + (tiltBarLength / 2) + tiltMeterPosX, startY);
    ctx.lineTo(startX + 80 + (tiltBarLength / 2) + tiltMeterPosX, startY + tiltBarHeight);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(startX + 80 + (tiltBarLength / 2) + tiltMeterPosY, startY + 30);
    ctx.lineTo(startX + 80 + (tiltBarLength / 2) + tiltMeterPosY, startY + tiltBarHeight + 30);
    ctx.stroke();


  }

  drawStartFinish(ctx) {
    ctx.fillStyle = "red";
    ctx.fillText("START", 36 * 17 - 24, 17 * 36);

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