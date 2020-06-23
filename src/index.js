import './styles/index.scss';
import InputHandler from "./scripts/input";
import Game from "./scripts/game";
import Board from "./scripts/board";
import Marble from "./scripts/marble";

let canvas = document.getElementById("game-screen");
let ctx = canvas.getContext("2d");

// Can I make these variables?
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let board = new Board();
let marble = new Marble();
new InputHandler(board);
let game = new Game(board, marble);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
