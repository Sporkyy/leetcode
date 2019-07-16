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

// Runtime: 112 ms, faster than 6.76% of JavaScript online submissions
// for Magic Squares In Grid.
// Memory Usage: 39.1 MB, less than 5.88% of JavaScript online submissions
// for Magic Squares In Grid.

// const sum = a => a.reduce((acc, curr) => acc + curr);
// const getRow = (g, r) => g[r];
// const getCol = (g, c) => g.map(r => r[c]);
// const getDia = (g, d) => g.reduce((a, c) => [...a, c[1 === d ? 2 - a.length : a.length]], []);
// const isMagic = g => {
//   const target = sum(getRow(g, 1));
//   for (let i = 1; i < 3; i++) if (target !== sum(getRow(g, i))) return false;
//   for (let i = 0; i < 3; i++) if (target !== sum(getCol(g, i))) return false;
//   for (let i = 0; i < 2; i++) if (target !== sum(getDia(g, i))) return false;
//   return true;
// };
// const isValid = g => {
//   const uniques = new Set();
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       const v = g[i][j];
//       if (v < 1 || 9 < v) return false;
//       uniques.add(v);
//     }
//   }
//   return 9 === uniques.size;
// };

// +---+---+---+
// | 5 | 1 | 9 |
// | 7 | 6 | 2 |
// | 3 | 8 | 4 |
// +---+---+---+

// console.log(getRow([[4, 3, 8], [9, 5, 1], [2, 7, 6]], 0));
// console.log(getCol([[4, 3, 8], [9, 5, 1], [2, 7, 6]], 0));
// console.log(getDia([[4, 3, 8], [9, 5, 1], [2, 7, 6]], 0));
// console.log(getDia([[4, 3, 8], [9, 5, 1], [2, 7, 6]], 1));
// console.log(isMagic([[4, 3, 8], [9, 5, 1], [2, 7, 6]]));

// console.log(getRow([[3, 8, 4], [5, 1, 9], [7, 6, 2]], 0));
// console.log(getCol([[3, 8, 4], [5, 1, 9], [7, 6, 2]], 0));
// console.log(getDia([[3, 8, 4], [5, 1, 9], [7, 6, 2]], 0));
// console.log(getDia([[3, 8, 4], [5, 1, 9], [7, 6, 2]], 1));
// console.log(isUnique([[3, 8, 4], [5, 1, 9], [7, 6, 2]]));
// console.log(isUnique([[3, 8, 4], [5, 1, 9], [7, 6, 3]]));
// console.log(isMagic([[3, 8, 4], [5, 1, 9], [7, 6, 2]]));

/**
 * @param {number[][]} grid
 * @return {number}
 */
// const numMagicSquaresInside = grid => {
//   let [cols, rows] = [grid[0].length, grid.length];
//   if (cols < 3 || rows < 3) return 0;
//   let result = 0;
//   for (let i = 0, z = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++, z++) {
//       const [a0, b0, c0, a1, b1, c1, a2, b2, c2] = [
//         grid[(i + 1) % rows][(j + 1) % cols],
//         grid[(i + 1) % rows][(j + 2) % cols],
//         grid[(i + 1) % rows][(j + 3) % cols],
//         grid[(i + 2) % rows][(j + 1) % cols],
//         grid[(i + 2) % rows][(j + 2) % cols],
//         grid[(i + 2) % rows][(j + 3) % cols],
//         grid[(i + 3) % rows][(j + 1) % cols],
//         grid[(i + 3) % rows][(j + 2) % cols],
//         grid[(i + 3) % rows][(j + 3) % cols],
//       ];
//       // console.log([[a0, b0, c0], [a1, b1, c1], [a2, b2, c2]]);
//       // console.log(isMagic([[a0, b0, c0], [a1, b1, c1], [a2, b2, c2]]));
//       const g = [[a0, b0, c0], [a1, b1, c1], [a2, b2, c2]];
//       if (!isValid(g)) continue;
//       if (isMagic(g)) result++;
//     }
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 100 ms, faster than 6.76% of JavaScript online submissions
// for Magic Squares In Grid.
// Memory Usage: 39.1 MB, less than 5.88% of JavaScript online submissions
// for Magic Squares In Grid.

// const sum = a => a.reduce((acc, curr) => acc + curr);
// const getRow = (g, r) => g[r];
// const getCol = (g, c) => g.map(r => r[c]);
// const getDia = (g, d) => g.reduce((a, c) => [...a, c[1 === d ? 2 - a.length : a.length]], []);
// const isMagic = g => {
//   const target = sum(getRow(g, 1));
//   for (let i = 1; i < 3; i++) if (target !== sum(getRow(g, i))) return false;
//   for (let i = 0; i < 3; i++) if (target !== sum(getCol(g, i))) return false;
//   for (let i = 0; i < 2; i++) if (target !== sum(getDia(g, i))) return false;
//   return true;
// };
// const isValid = g => {
//   const uniques = new Set();
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       const v = g[i][j];
//       if (v < 1 || 9 < v) return false;
//       uniques.add(v);
//     }
//   }
//   return 9 === uniques.size;
// };

// +---+---+---+
// | 5 | 1 | 9 |
// | 7 | 6 | 2 |
// | 3 | 8 | 4 |
// +---+---+---+

// console.log(getRow([[4, 3, 8], [9, 5, 1], [2, 7, 6]], 0));
// console.log(getCol([[4, 3, 8], [9, 5, 1], [2, 7, 6]], 0));
// console.log(getDia([[4, 3, 8], [9, 5, 1], [2, 7, 6]], 0));
// console.log(getDia([[4, 3, 8], [9, 5, 1], [2, 7, 6]], 1));
// console.log(isMagic([[4, 3, 8], [9, 5, 1], [2, 7, 6]]));

// console.log(getRow([[3, 8, 4], [5, 1, 9], [7, 6, 2]], 0));
// console.log(getCol([[3, 8, 4], [5, 1, 9], [7, 6, 2]], 0));
// console.log(getDia([[3, 8, 4], [5, 1, 9], [7, 6, 2]], 0));
// console.log(getDia([[3, 8, 4], [5, 1, 9], [7, 6, 2]], 1));
// console.log(isUnique([[3, 8, 4], [5, 1, 9], [7, 6, 2]]));
// console.log(isUnique([[3, 8, 4], [5, 1, 9], [7, 6, 3]]));
// console.log(isMagic([[3, 8, 4], [5, 1, 9], [7, 6, 2]]));

/**
 * @param {number[][]} grid
 * @return {number}
 */
// const numMagicSquaresInside = grid => {
//   let [cols, rows] = [grid[0].length, grid.length];
//   if (cols < 3 || rows < 3) return 0;
//   let result = 0;
//   for (let i = 0, z = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++, z++) {
//       const [a0, b0, c0, a1, b1, c1, a2, b2, c2] = [
//         grid[(i + 1) % rows][(j + 1) % cols],
//         grid[(i + 1) % rows][(j + 2) % cols],
//         grid[(i + 1) % rows][(j + 3) % cols],
//         grid[(i + 2) % rows][(j + 1) % cols],
//         grid[(i + 2) % rows][(j + 2) % cols],
//         grid[(i + 2) % rows][(j + 3) % cols],
//         grid[(i + 3) % rows][(j + 1) % cols],
//         grid[(i + 3) % rows][(j + 2) % cols],
//         grid[(i + 3) % rows][(j + 3) % cols],
//       ];
//       // console.log(a0 ^ b0 ^ c0 ^ a1 ^ b1 ^ c1 ^ a2 ^ b2 ^ c2);
//       if (1 !== (a0 ^ b0 ^ c0 ^ a1 ^ b1 ^ c1 ^ a2 ^ b2 ^ c2)) continue;
//       // console.log([[a0, b0, c0], [a1, b1, c1], [a2, b2, c2]]);
//       // console.log(isMagic([[a0, b0, c0], [a1, b1, c1], [a2, b2, c2]]));
//       const g = [[a0, b0, c0], [a1, b1, c1], [a2, b2, c2]];
//       // if (!isValid(g)) continue;
//       if (isMagic(g)) result++;
//     }
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 10.81% of JavaScript online submissions
// for Magic Squares In Grid.
// Memory Usage: 37.3 MB, less than 11.76% of JavaScript online submissions
// for Magic Squares In Grid.

/**
 * @param {number[][]} grid
 * @return {number}
 */
const numMagicSquaresInside = grid => {
  let [cols, rows] = [grid[0].length, grid.length];
  if (cols < 3 || rows < 3) return 0;
  let result = 0;
  for (let i = 0, z = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++, z++) {
      const [a0, b0, c0, a1, b1, c1, a2, b2, c2] = [
        grid[(i + 1) % rows][(j + 1) % cols],
        grid[(i + 1) % rows][(j + 2) % cols],
        grid[(i + 1) % rows][(j + 3) % cols],
        grid[(i + 2) % rows][(j + 1) % cols],
        grid[(i + 2) % rows][(j + 2) % cols],
        grid[(i + 2) % rows][(j + 3) % cols],
        grid[(i + 3) % rows][(j + 1) % cols],
        grid[(i + 3) % rows][(j + 2) % cols],
        grid[(i + 3) % rows][(j + 3) % cols],
      ];
      if (1 !== (a0 ^ b0 ^ c0 ^ a1 ^ b1 ^ c1 ^ a2 ^ b2 ^ c2)) continue;
      if (
        15 === a0 + b0 + c0 &&
        15 === a1 + b1 + c1 &&
        15 === a2 + b2 + c2 &&
        15 === a0 + a1 + a2 &&
        15 === b0 + b1 + b2 &&
        15 === c0 + c1 + c2 &&
        15 === a0 + b1 + c2 &&
        15 === c0 + b1 + a2
      )
        result++;
    }
  }
  return result;
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

  {
    input: [[8]],
    expected: 0,
  },

  {
    input: [[5, 5, 5], [5, 5, 5], [5, 5, 5]],
    expected: 0,
  },

  {
    input: [[10, 3, 5], [1, 6, 11], [7, 9, 2]],
    expected: 0,
  },

  {
    input: [[7, 0, 5], [2, 4, 6], [3, 8, 1]],
    expected: 0,
  },

  // +---+---+---+
  // | 8 | 1 | 6 |
  // | 3 | 5 | 7 |
  // | 4 | 9 | 2 |
  // +---+---+---+

  //

  {
    input: [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    expected: 1,
  },

  // +---+---+---+
  // | 4 | 7 | 8 |
  // | 9 | 5 | 1 |
  // | 2 | 3 | 6 |
  // +---+---+---+

  {
    input: [[4, 7, 8], [9, 5, 1], [2, 3, 6]],
    expected: 0,
  },

  // +---+---+---+
  // | 9 | 5 | 6 |
  // | 2 | 8 | 7 |
  // | 1 | 4 | 3 |
  // +---+---+---+

  {
    input: [[9, 5, 6], [2, 8, 7], [1, 4, 3]],
    expected: 0,
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
