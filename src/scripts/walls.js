import Wall from "./wall";
import { CELL_SIZE, WALL_RADIUS } from "../index"; // Why don't these imports work?

debugger // FIXME
const walls = [
  new Wall(18, 0, "y", 2, 36, 2), // 1
  new Wall(0, 2, "x", 2, 36, 2), // 2
  new Wall(10, 2, "x", 2, 36, 2), // 3
  new Wall(16, 2, "x", 2, 36, 2), // 4
  new Wall(6, 2, "y", 4, 36, 2), // 5
  new Wall(8, 2, "y", 2, 36, 2), // 6
  new Wall(20, 2, "y", 2, 36, 2), // 7
  new Wall(2, 4, "x", 2, 36, 2), // 8
  new Wall(10, 4, "x", 2, 36, 2), // 9
  new Wall(16, 4, "x", 4, 36, 2), // 10
  new Wall(2, 4, "y", 2, 36, 2), // 11
  new Wall(14, 4, "y", 2, 36, 2), // 12
  new Wall(4, 6, "x", 6, 36, 2), // 13
  new Wall(12, 6, "x", 4, 36, 2), // 14
  new Wall(20, 6, "x", 2, 36, 2), // 15
  new Wall(12, 6, "y", 2, 36, 2), // 16
  new Wall(16, 6, "y", 8, 36, 2), // 17
  new Wall(18, 6, "y", 2, 36, 2), // 18
  new Wall(0, 8, "x", 4, 36, 2), // 19
  new Wall(10, 8, "x", 4, 36, 2), // 20
  new Wall(6, 8, "y", 4, 36, 2), // 21
  new Wall(8, 8, "y", 2, 36, 2), // 22
  new Wall(20, 8, "y", 2, 36, 2), // 23
  new Wall(2, 10, "x", 2, 36, 2), // 24
  new Wall(16, 10, "x", 4, 36, 2), // 25
  new Wall(4, 12, "x", 4, 36, 2), // 26
  new Wall(12, 12, "x", 2, 36, 2), // 27
  new Wall(18, 12, "x", 2, 36, 2), // 28
  new Wall(2, 12, "y", 2, 36, 2), // 29
  new Wall(4, 12, "y", 4, 36, 2), // 30
  new Wall(8, 12, "y", 4, 36, 2), // 31
  new Wall(10, 12, "y", 2, 36, 2), // 32
  new Wall(12, 12, "y", 2, 36, 2), // 33
  new Wall(20, 12, "y", 2, 36, 2), // 34
  new Wall(14, 14, "x", 4, 36, 2), // 35
  new Wall(20, 14, "x", 2, 36, 2), // 36
  new Wall(6, 14, "y", 4, 36, 2), // 37
  new Wall(18, 14, "y", 4, 36, 2), // 38
  new Wall(2, 16, "x", 2, 36, 2), // 39
  new Wall(8, 16, "x", 8, 36, 2), // 40
];

export default walls;