// 463. Island Perimeter
// https://leetcode.com/problems/island-perimeter/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 216 ms, faster than 31.88% of JavaScript online submissions
// Memory Usage: 45.4 MB, less than 27.27% of JavaScript online submissions

// const up = (row, col, grid) => (0 === row ? 0 : grid[row - 1][col]);
// const right = (row, col, grid) => (grid[0].length - 1 === col ? 0 : grid[row][col + 1]);
// const down = (row, col, grid) => (grid.length - 1 === row ? 0 : grid[row + 1][col]);
// const left = (row, col, grid) => (0 === col ? 0 : grid[row][col - 1]);

// const neighbors = (row, col, grid) => [
//   up(row, col, grid),
//   right(row, col, grid),
//   down(row, col, grid),
//   left(row, col, grid),
// ];

// const edges = (cell, row, col, grid) =>
//   0 === cell ? 0 : neighbors(row, col, grid).reduce((count, neighbor) => count - neighbor, 4);

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// const islandPerimeter = grid =>
//   grid.reduce(
//     (gridAcc, row, rowIndex) =>
//       gridAcc +
//       row.reduce((rowAcc, cell, colIndex) => rowAcc + edges(cell, rowIndex, colIndex, grid), 0),
//     0,
//   );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 184 ms, faster than 71.47% of JavaScript online submissions
// Memory Usage: 44.2 MB, less than 50.00% of JavaScript online submissions

/**
 * @param {number[][]} grid
 * @return {number}
 */
// const islandPerimeter = grid => {
//   let edges = 0;
//   for (let r = 0; r < grid.length; r++) {
//     for (let c = 0; c < grid[0].length; c++) {
//       if (0 === grid[r][c]) continue;
//       edges +=
//         (grid[r - 1] ? (grid[r - 1][c] ? 0 : 1) : 1) +
//         (grid[r][c + 1] ? 0 : 1) +
//         (grid[r - 1] ? (grid[r - 1][c] ? 0 : 1) : 1) +
//         (grid[r][c + 1] ? 0 : 1);
//     }
//   }
//   return edges;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 164 ms, faster than 95.92% of JavaScript online submissions
// Memory Usage: 43.9 MB, less than 76.62% of JavaScript online submissions

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// const islandPerimeter = grid => {
//   let edges = 0;
//   for (let r = 0; r < grid.length; r++) {
//     for (let c = 0; c < grid[0].length; c++) {
//       if (0 === grid[r][c]) continue;
//       edges += (grid[r - 1] ? (grid[r - 1][c] ? 0 : 1) : 1) + (grid[r][c + 1] ? 0 : 1);
//     }
//   }
//   return edges * 2;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 196 ms, faster than 53.25% of JavaScript online submissions
// Memory Usage: 43.9 MB, less than 80.14% of JavaScript online submissions

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// const islandPerimeter = grid => {
//   let perimiter = 0;
//   for (let r = 0; r < grid.length; r++) {
//     for (let c = 0; c < grid[0].length; c++) {
//       if (1 !== grid[r][c]) continue;
//       edges = 2;
//       if (c < grid[0].length - 1) edges -= grid[r][c + 1];
//       if (r < grid.length - 1) edges -= grid[r + 1][c];
//       perimiter += edges;
//     }
//   }
//   return perimiter * 2;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 180 ms, faster than 78.21% of JavaScript online submissions
// Memory Usage: 43.7 MB, less than 92.91% of JavaScript online submissions

/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = grid => {
  let perimiter = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (0 === grid[r][c]) continue;
      if (grid.length - 1 === r || 0 === grid[r + 1][c]) perimiter++;
      if (grid[0].length - 1 === c || 0 === grid[r][c + 1]) perimiter++;
    }
  }
  return perimiter * 2;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// +---+===+---+---+
// | 0 [ 1 ] 0 | 0 |
// +===+---+===+---+
// [ 1 | 1 | 1 ] 0 |
// +===+---+===+---+
// | 0 [ 1 ] 0 | 0 |
// +===+---+---+---+
// [ 1 | 1 ] 0 | 0 |
// +===+===+---+---+

strictEqual(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ]),
  16,
);

// +===+===+
// [ 1 | 1 ]
// +---+---+
// [ 1 | 1 ]
// +===+===+

strictEqual(
  islandPerimeter([
    [1, 1],
    [1, 1],
  ]),
  8,
);

// +===+
// [ 1 ]
// +---+
// [ 1 ]
// +===+

strictEqual(islandPerimeter([[1], [1]]), 6);

// +===+
// [ 1 ]
// +---+
// [ 1 ]
// +---+
// [ 1 ]
// +===+

strictEqual(islandPerimeter([[1], [1], [1]]), 8);

// +===+
// [ 1 ]
// +===+
// [ 0 ]
// +---+

strictEqual(islandPerimeter([[1], [0]]), 4);

// +---+===+---+
// | 0 [ 1 ] 0 |
// |===+---+===|
// [ 1 | 1 | 1 ]
// |===+---+===|
// | 0 [ 1 ] 0 |
// +---+===+---+

strictEqual(
  islandPerimeter([
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0],
  ]),
  12,
);

// +---+===+===+
// | 0 [ 1 | 1 ]
// |===+---+===|
// [ 1 | 1 ] 0 |
// +===+===+---+

strictEqual(
  islandPerimeter([
    [0, 1, 1],
    [1, 1, 0],
  ]),
  10,
);

// +===+===+===+
// [ 1 | 1 | 1 ]
// |---+===+---|
// [ 1 ] 0 [ 1 ]
// +===+---+===+

strictEqual(
  islandPerimeter([
    [1, 1, 1],
    [1, 0, 1],
  ]),
  12,
);
