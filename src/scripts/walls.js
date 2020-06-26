import Wall from "./wall";
import { CELL_SIZE, WALL_RADIUS } from "../index"; // Why don't these imports work?

debugger // FIXME
const walls = [
  new Wall (18, 0, "y", 2, 36, 2),
  new Wall (0, 2, "x", 2, 36, 2),
];

export default walls;