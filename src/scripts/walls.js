import Wall from "./wall";
import { CELL_SIZE, WALL_RADIUS } from "../index"; // TODO - Why don't these imports work?

// new Wall(id, startXCell, startYCell, orientation, length, cellSize, wallRadius, modStart, modEnd)
const walls = [
  new Wall(1, 18, 0, "y", 2, 36, 2, 0, 1), // 1
  new Wall(2, 0, 2, "x", 2, 36, 2, 0, 0), // 2
  new Wall(3, 10, 2, "x", 2, 36, 2, 0, 0), // 3
  new Wall(4, 16, 2, "x", 2, 36, 2, 0, -1), // 4
  new Wall(5, 6, 2, "y", 4, 36, 2, 0, -1), // 5
  new Wall(6, 8, 2, "y", 2, 36, 2, 0, 0), // 6
  new Wall(7, 20, 2, "y", 2, 36, 2, 0, 1), // 7
  new Wall(8, 2, 4, "x", 2, 36, 2, 1, 0), // 8
  new Wall(9, 10, 4, "x", 2, 36, 2, 0, 0), // 9
  new Wall(10, 16, 4, "x", 4, 36, 2, 0, -1), // 10
  new Wall(11, 2, 4, "y", 2, 36, 2, -1, 0), // 11
  new Wall(12, 14, 4, "y", 2, 36, 2, 0, -1), // 12
  new Wall(13, 4, 6, "x", 6, 36, 2, 0, 0), // 13
  new Wall(14, 12, 6, "x", 4, 36, 2, 1, 1), // 14
  new Wall(15, 20, 6, "x", 2, 36, 2, 0, 0), // 15
  new Wall(16, 12, 6, "y", 2, 36, 2, -1, -1), // 16
  new Wall(17, 16, 6, "y", 8, 36, 2, -1, -1), // 17
  new Wall(18, 18, 6, "y", 2, 36, 2, 0, 0), // 18
  new Wall(19, 0, 8, "x", 4, 36, 2, 0, 0), // 19
  new Wall(20, 10, 8, "x", 4, 36, 2, 0, 0), // 20
  new Wall(21, 6, 8, "y", 4, 36, 2, 0, -1), // 21
  new Wall(22, 8, 8, "y", 2, 36, 2, 0, 0), // 22
  new Wall(23, 20, 8, "y", 2, 36, 2, 0, 1), // 23
  new Wall(24, 2, 10, "x", 2, 36, 2, 0, 0), // 24
  new Wall(25, 16, 10, "x", 4, 36, 2, -1, -1), // 25
  new Wall(26, 4, 12, "x", 4, 36, 2, 1, 1), // 26
  new Wall(27, 12, 12, "x", 2, 36, 2, 1, 0), // 27
  new Wall(28, 18, 12, "x", 2, 36, 2, 0, 1), // 28
  new Wall(29, 2, 12, "y", 2, 36, 2, 0, 0), // 29
  new Wall(30, 4, 12, "y", 4, 36, 2, -1, 1), // 30
  new Wall(31, 8, 12, "y", 4, 36, 2, -1, 1), // 31
  new Wall(32, 10, 12, "y", 2, 36, 2, 0, 0), // 32
  new Wall(33, 12, 12, "y", 2, 36, 2, -1, 0), // 33
  new Wall(34, 20, 12, "y", 2, 36, 2, -1, 1), // 34
  new Wall(35, 14, 14, "x", 4, 36, 2, 0, 1), // 35
  new Wall(36, 20, 14, "x", 2, 36, 2, -1, 0), // 36
  new Wall(37, 6, 14, "y", 4, 36, 2, 0, 0), // 37
  new Wall(38, 18, 14, "y", 4, 36, 2, -1, 0), // 38
  new Wall(39, 2, 16, "x", 2, 36, 2, 0, -1), // 39
  new Wall(40, 8, 16, "x", 8, 36, 2, -1, 0), // 40
];

export default walls;