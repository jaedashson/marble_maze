import Wall from "./wall";

// new Wall(id, startXCell, startYCell, orientation, length, cellSize, wallRadius, modStart, modEnd)
const walls = [
  new Wall(1, 4, 0, "y", 18, 36, 2, 0, 0), // horizontal wall above
  // new Wall(2, 10, 10, "y", 6, 36, 2, 0, 0)
]

export default walls;