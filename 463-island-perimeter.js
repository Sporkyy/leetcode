// 463. Island Perimeter
// https://leetcode.com/problems/island-perimeter/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const up = (row, col, grid) => (0 === row ? 0 : grid[row - 1][col]);
const right = (row, col, grid) => (grid[0].length - 1 === col ? 0 : grid[row][col + 1]);
const down = (row, col, grid) => (grid.length - 1 === row ? 0 : grid[row + 1][col]);
const left = (row, col, grid) => (0 === col ? 0 : grid[row][col - 1]);

const neighbors = (row, col, grid) => [
  up(row, col, grid),
  right(row, col, grid),
  down(row, col, grid),
  left(row, col, grid),
];

const edges = (cell, row, col, grid) =>
  0 === cell ? 0 : neighbors(row, col, grid).reduce((count, neighbor) => count - neighbor, 4);

/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = grid =>
  grid.reduce(
    (gridAcc, row, rowIndex) =>
      gridAcc +
      row.reduce((rowAcc, cell, colIndex) => rowAcc + edges(cell, rowIndex, colIndex, grid), 0),
    0,
  );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example',
    // 0100
    // 1110
    // 0100
    // 1100
    input: [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]],
    expected: 16,
  },
];

tests.forEach(({ name, input, expected }) => {
  const result = islandPerimeter(input);
  if (result === expected) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
