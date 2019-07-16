// 840. Magic Squares In Grid
// https://leetcode.com/problems/magic-squares-in-grid/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const sum = a => a.reduce((acc, curr) => acc + curr);
// const getRowRemainder = (grid, r, c) => {};
// const getColRemainder = (grid, c, r) => {};
// const getDiagonalRemainder = (grid, d, s) => {};
// const getMax = grid => sum(grid[0]) - Math.min(...grid[0]);
// const getMin = grid => sum(grid[0]) - Math.max(...grid[0]);
// const getPermutation = (a, p) => {};
// const isMagic = grid => {};

/**
 * @param {number[][]} grid
 * @return {number}
 */
// const numMagicSquaresInside = grid => {
//   const [min, max] = [getMin(grid), getMax(grid)];
//   // console.log(`min = ${min} max = ${max}`);
//   for (let i = min; i <= max; i++) {
//     // console.log(i);
//     const result = [new Array(3), new Array(3), new Array(3)];
//     // console.log(result);
//     for (let j = 0; j < 3; j++) {
//       // console.log(j);
//       for (let k = 0; k < 4; k++) {
//         // console.log(k);
//       }
//     }
//   }
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const sum = a => a.reduce((acc, curr) => acc + curr);
// const getRowRemainder = (grid, r, c) => {};
// const getColRemainder = (grid, c, r) => {};
// const getDiagonalRemainder = (grid, d, s) => {};
// const getMax = grid => sum(grid[0]) - Math.min(...grid[0]);
// const getMin = grid => sum(grid[0]) - Math.max(...grid[0]);
// const getPermutation = (a, p) => {};
// const isMagic = grid => {};

/**
 * @param {number[][]} grid
 * @return {number}
 */
const numMagicSquaresInside = grid => {
  const sums = new Set();
  for (let i = 0; i < 4; i++) sums.add(sum(grid[0].filter((n, j) => i !== j)));
  console.log(sums);
  let possibilities = new Array(12);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      const possibility = [[i, 0 + j], [i, 1 + j]];
    }
  }
  console.log(possibilities);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  // +---+---+---+---+
  // | 4 | 3 | 8 | 4 |
  // | 9 | 5 | 1 | 9 |
  // | 2 | 7 | 6 | 2 |
  // +---+---+---+---+

  // Yes
  // +---+---+---+
  // | 4 | 3 | 8 |
  // | 9 | 5 | 1 |
  // | 2 | 7 | 6 |
  // +---+---+---+

  // No
  // +---+---+---+
  // | 3 | 8 | 4 |
  // | 5 | 1 | 9 |
  // | 7 | 6 | 2 |
  // +---+---+---+

  {
    input: [[4, 3, 8, 4], [9, 5, 1, 9], [2, 7, 6, 2]],
    expected: 1,
  },
];

for (let { input, expected } of tests) {
  const output = numMagicSquaresInside(input);
  const name = JSON.stringify(input);
  if (output === expected) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
}
