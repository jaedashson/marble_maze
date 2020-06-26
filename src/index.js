import './styles/index.scss';
import InputHandler from "./scripts/input";
import Game from "./scripts/game";
import Board from "./scripts/board";
import Marble from "./scripts/marble";

let canvas = document.getElementById("game-screen");
let ctx = canvas.getContext("2d");

const CELL_SIZE = 36;
const GAME_WIDTH = 22 * CELL_SIZE;
const GAME_HEIGHT = 18 * CELL_SIZE;
// const MARBLE_SIZE = 20;
const MARBLE_RADIUS = CELL_SIZE / 3;

let board = new Board(GAME_WIDTH, GAME_HEIGHT);
let marble = new Marble(MARBLE_RADIUS, GAME_WIDTH, GAME_HEIGHT);
let inputHandler = new InputHandler(marble);
let game = new Game(board, marble);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  inputHandler.handleInput(deltaTime);
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
