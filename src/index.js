import './styles/index.scss';
import InputHandler from "./scripts/input";
import Game from "./scripts/game";
import Board from "./scripts/board";
import Marble from "./scripts/marble";
import walls from "./scripts/walls"; // select which walls file to import
import holes from "./scripts/holes"; // select which holes file to import

let canvas = document.getElementById("game-screen");
let ctx = canvas.getContext("2d");

export const CELL_SIZE = 36; // Game size multiplier
export const WALL_RADIUS = 2;
export const GAME_WIDTH = 22 * CELL_SIZE;
export const GAME_HEIGHT = 18 * CELL_SIZE;
// const MARBLE_SIZE = 20;
const MARBLE_RADIUS = CELL_SIZE / 3;

let board = new Board(GAME_WIDTH, GAME_HEIGHT);
let marble = new Marble(MARBLE_RADIUS, GAME_WIDTH, GAME_HEIGHT, walls, holes);
let inputHandler = new InputHandler(marble);
let game = new Game(board, marble, walls, holes);

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
