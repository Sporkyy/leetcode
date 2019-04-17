// 463. Island Perimeter
// https://leetcode.com/problems/island-perimeter/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const up = (row, col, grid) => (0 === row ? 0 : grid[row - 1][col]);
const right = (row, col, grid) => (grid[0].length - 1 === col ? 0 : grid[row][col + 1]);
const down = (row, col, grid) => (grid.length - 1 === row ? 0 : grid[row + 1][col]);
const left = (row, col, grid) => (0 === col ? 0 : grid[row][col - 1]);

const sides = (row, col, grid) => [
  up(row, col, grid),
  right(row, col, grid),
  down(row, col, grid),
  left(row, col, grid),
];

const numPerimiterSides = (row, col, grid) =>
  0 === grid[row][col] ? 0 : sides(row, col, grid).reduce((acc, curr) => acc - curr, 4);

/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = grid => {
  let perimiter = 0;
  // console.log(sides(0, 1, grid));
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      // console.log(`[${i}, ${j}]`);
      // console.log(sides(i, j, grid));
      // console.log(`[${i}, ${j}] = ${numPerimiterSides(i, j, grid)}`);
      perimiter += numPerimiterSides(i, j, grid);
    }
  }
  return perimiter;
};

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
    console.log(``);
  }
});
