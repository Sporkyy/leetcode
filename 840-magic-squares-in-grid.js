// 840. Magic Squares In Grid
// https://leetcode.com/problems/magic-squares-in-grid/

/*

A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from
1 to 9 such that each row, column, and both diagonals all have the same sum.

Given a grid of integers, how many 3 x 3 "magic square" subgrids are there?
(Each subgrid is contiguous).

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 112 ms, faster than 6.76% of JavaScript online submissions
// Memory Usage: 39.1 MB, less than 5.88% of JavaScript online submissions

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

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
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
// Memory Usage: 39.1 MB, less than 5.88% of JavaScript online submissions

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

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
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
// Memory Usage: 37.3 MB, less than 11.76% of JavaScript online submissions

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
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
//       if (1 !== (a0 ^ b0 ^ c0 ^ a1 ^ b1 ^ c1 ^ a2 ^ b2 ^ c2)) continue;
//       if (
//         15 === a0 + b0 + c0 &&
//         15 === a1 + b1 + c1 &&
//         15 === a2 + b2 + c2 &&
//         15 === a0 + a1 + a2 &&
//         15 === b0 + b1 + b2 &&
//         15 === c0 + c1 + c2 &&
//         15 === a0 + b1 + c2 &&
//         15 === c0 + b1 + a2
//       )
//         result++;
//     }
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 33.78% of JavaScript online submissions
// Memory Usage: 37.9 MB, less than 5.88% of JavaScript online submissions

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// const numMagicSquaresInside = grid => {
//   let [cols, rows] = [grid[0].length, grid.length];
//   if (cols < 3 || rows < 3) return 0;
//   let result = 0;
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       const [a0, b0, c0] = [
//         grid[(i + 1) % rows][(j + 1) % cols],
//         grid[(i + 1) % rows][(j + 2) % cols],
//         grid[(i + 1) % rows][(j + 3) % cols],
//       ];
//       if (15 !== a0 + b0 + c0) continue;
//       const [a1, b1, c1] = [
//         grid[(i + 2) % rows][(j + 1) % cols],
//         grid[(i + 2) % rows][(j + 2) % cols],
//         grid[(i + 2) % rows][(j + 3) % cols],
//       ];
//       if (15 !== a1 + b1 + c1) continue;
//       const [a2, b2, c2] = [
//         grid[(i + 3) % rows][(j + 1) % cols],
//         grid[(i + 3) % rows][(j + 2) % cols],
//         grid[(i + 3) % rows][(j + 3) % cols],
//       ];
//       if (15 !== a2 + b2 + c2) continue;
//       if (
//         15 !== a0 + a1 + a2 ||
//         15 !== b0 + b1 + b2 ||
//         15 !== c0 + c1 + c2 ||
//         15 !== a0 + b1 + c2 ||
//         15 !== c0 + b1 + a2
//       )
//         continue;
//       if (1 !== (a0 ^ b0 ^ c0 ^ a1 ^ b1 ^ c1 ^ a2 ^ b2 ^ c2)) continue;
//       result++;
//     }
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 51.35% of JavaScript online submissions
// Memory Usage: 34 MB, less than 76.47% of JavaScript online submissions

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// const numMagicSquaresInside = grid => {
//   let [cols, rows] = [grid[0].length, grid.length];
//   if (cols < 3 || rows < 3) return 0;
//   let result = 0;
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (5 !== grid[(i + 2) % rows][(j + 2) % cols]) continue;
//       const perimiter =
//         '' +
//         grid[(i + 1) % rows][(j + 1) % cols] +
//         grid[(i + 1) % rows][(j + 2) % cols] +
//         grid[(i + 1) % rows][(j + 3) % cols] +
//         grid[(i + 2) % rows][(j + 1) % cols] +
//         grid[(i + 2) % rows][(j + 3) % cols] +
//         grid[(i + 3) % rows][(j + 1) % cols] +
//         grid[(i + 3) % rows][(j + 2) % cols] +
//         grid[(i + 3) % rows][(j + 3) % cols];
//       if (
//         perimiter === '29473618' ||
//         perimiter === '67219834' ||
//         perimiter === '81637492' ||
//         perimiter === '43891276' ||
//         perimiter === '27691438' ||
//         perimiter === '49237816' ||
//         perimiter === '83419672' ||
//         perimiter === '61873294'
//       )
//         result++;
//     }
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 10.81% of JavaScript online submissions
// Memory Usage: 37.3 MB, less than 11.76% of JavaScript online submissions

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// const numMagicSquaresInside = grid => {
//   let [cols, rows] = [grid[0].length, grid.length];
//   if (cols < 3 || rows < 3) return 0;
//   let result = 0;
//   const window = [[,], [,], [,], [,], [,], [,], [,], [,], [,]];
//   for (let i = 0; i < rows - 2; i++) {
//     window[0][0] = window[1][0] = window[2][0] = i;
//     window[3][0] = window[4][0] = window[5][0] = i + 1;
//     window[6][0] = window[7][0] = window[8][0] = i + 2;
//     for (let j = 0; j < cols - 2; j++) {
//       window[0][1] = window[3][1] = window[6][1] = j;
//       window[1][1] = window[4][1] = window[7][1] = j + 1;
//       window[2][1] = window[5][1] = window[8][1] = j + 2;
//       if (5 !== grid[window[4][0]][window[4][1]]) continue;
//       const perimiter =
//         '' +
//         grid[window[0][0]][window[0][1]] +
//         grid[window[1][0]][window[1][1]] +
//         grid[window[2][0]][window[2][1]] +
//         grid[window[3][0]][window[3][1]] +
//         grid[window[5][0]][window[5][1]] +
//         grid[window[6][0]][window[6][1]] +
//         grid[window[7][0]][window[7][1]] +
//         grid[window[8][0]][window[8][1]];
//       if (
//         perimiter === '29473618' ||
//         perimiter === '67219834' ||
//         perimiter === '81637492' ||
//         perimiter === '43891276' ||
//         perimiter === '27691438' ||
//         perimiter === '49237816' ||
//         perimiter === '83419672' ||
//         perimiter === '61873294'
//       )
//         result++;
//     }
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 51.35% of JavaScript online submissions
// Memory Usage: 33.7 MB, less than 94.12% of JavaScript online submissions

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// const numMagicSquaresInside = grid => {
//   let [cols, rows] = [grid[0].length, grid.length];
//   if (cols < 3 || rows < 3) return 0;
//   let result = 0;
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (5 !== grid[(i + 2) % rows][(j + 2) % cols]) continue;
//       const perimiter = ''.concat(
//         grid[(i + 1) % rows][(j + 1) % cols],
//         grid[(i + 1) % rows][(j + 2) % cols],
//         grid[(i + 1) % rows][(j + 3) % cols],
//         grid[(i + 2) % rows][(j + 1) % cols],
//         grid[(i + 2) % rows][(j + 3) % cols],
//         grid[(i + 3) % rows][(j + 1) % cols],
//         grid[(i + 3) % rows][(j + 2) % cols],
//         grid[(i + 3) % rows][(j + 3) % cols],
//       );
//       if (
//         '29473618,67219834,81637492,43891276,27691438,49237816,83419672,61873294,'.includes(
//           perimiter,
//         )
//       )
//         result++;
//     }
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 93.24% of JavaScript online submissions
// Memory Usage: 36.7 MB, less than 17.65% of JavaScript online submissions

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// const numMagicSquaresInside = grid => {
//   let [cols, rows] = [grid[0].length, grid.length];
//   if (cols < 3 || rows < 3) return 0;
//   let result = 0;
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       const s =
//         '' +
//         grid[(i + 1) % rows][(j + 1) % cols] +
//         grid[(i + 1) % rows][(j + 2) % cols] +
//         grid[(i + 1) % rows][(j + 3) % cols] +
//         grid[(i + 2) % rows][(j + 1) % cols] +
//         grid[(i + 2) % rows][(j + 2) % cols] +
//         grid[(i + 2) % rows][(j + 3) % cols] +
//         grid[(i + 3) % rows][(j + 1) % cols] +
//         grid[(i + 3) % rows][(j + 2) % cols] +
//         grid[(i + 3) % rows][(j + 3) % cols];
//       if (
//         s === '294753618' ||
//         s === '672159834' ||
//         s === '816357492' ||
//         s === '438951276' ||
//         s === '276951438' ||
//         s === '492357816' ||
//         s === '834159672' ||
//         s === '618753294'
//       )
//         result++;
//     }
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 83.78% of JavaScript online submissions
// Memory Usage: 35.4 MB, less than 41.18% of JavaScript online submissions

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// const numMagicSquaresInside = grid => {
//   let [cols, rows] = [grid[0].length, grid.length];
//   if (cols < 3 || rows < 3) return 0;
//   let result = 0;
//   for (let i = 0; i < rows - 2; i++) {
//     for (let j = 0; j < cols - 2; j++) {
//       const s =
//         '' +
//         grid[i][j] +
//         grid[i][j + 1] +
//         grid[i][j + 2] +
//         grid[i + 1][j] +
//         grid[i + 1][j + 1] +
//         grid[i + 1][j + 2] +
//         grid[i + 2][j] +
//         grid[i + 2][j + 1] +
//         grid[i + 2][j + 2];
//       if (
//         s === '294753618' ||
//         s === '672159834' ||
//         s === '816357492' ||
//         s === '438951276' ||
//         s === '276951438' ||
//         s === '492357816' ||
//         s === '834159672' ||
//         s === '618753294'
//       )
//         result++;
//     }
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 55.88% of JavaScript online submissions
// Memory Usage: 35.6 MB, less than 25.00% of JavaScript online submissions

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// const numMagicSquaresInside = grid => {
//   const subgrids = [];
//   for (let i = 0; i < grid.length - 2; i++)
//     for (let j = 0; j < grid[0].length - 2; j++)
//       subgrids.push(
//         grid
//           .slice(i, i + 3)
//           .map(r => r.slice(j, j + 3).join(''))
//           .join(''),
//       );
//   return subgrids.filter(s =>
//     [
//       '276951438',
//       '294753618',
//       '438951276',
//       '492357816',
//       '618753294',
//       '672159834',
//       '816357492',
//       '834159672',
//     ].includes(s),
//   ).length;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 44 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 35.2 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[][]} grid
 * @return {number}
 */
const numMagicSquaresInside = grid => {
  const magicSquares = new Set([
    '276951438',
    '294753618',
    '438951276',
    '492357816',
    '618753294',
    '672159834',
    '816357492',
    '834159672',
  ]);
  let cnt = 0;
  for (let i = 0; i < grid.length - 2; i++)
    for (let j = 0; j < grid[0].length - 2; j++)
      if (
        magicSquares.has(
          grid[i][j].toString() +
            grid[i][j + 1] +
            grid[i][j + 2] +
            grid[i + 1][j] +
            grid[i + 1][j + 1] +
            grid[i + 1][j + 2] +
            grid[i + 2][j] +
            grid[i + 2][j + 1] +
            grid[i + 2][j + 2],
        )
      )
        cnt++;
  return cnt;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// numMagicSquaresInside([
//   [8, 7, 4, 1, 7, 2],
//   [5, 8, 4, 2, 6, 9],
//   [4, 2, 1, 4, 2, 8],
//   [6, 5, 9, 2, 7, 4],
//   [8, 2, 3, 9, 5, 3],
//   [3, 9, 5, 6, 8, 1],
// ]);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

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

strictEqual(
  numMagicSquaresInside([
    [4, 3, 8, 4],
    [9, 5, 1, 9],
    [2, 7, 6, 2],
  ]),
  1,
);

strictEqual(numMagicSquaresInside([[8]]), 0);

strictEqual(
  numMagicSquaresInside([
    [5, 5, 5],
    [5, 5, 5],
    [5, 5, 5],
  ]),
  0,
);

strictEqual(
  numMagicSquaresInside([
    [10, 3, 5],
    [1, 6, 11],
    [7, 9, 2],
  ]),
  0,
);

strictEqual(
  numMagicSquaresInside([
    [7, 0, 5],
    [2, 4, 6],
    [3, 8, 1],
  ]),
  0,
);

// +---+---+---+
// | 8 | 1 | 6 |
// | 3 | 5 | 7 |
// | 4 | 9 | 2 |
// +---+---+---+

strictEqual(
  numMagicSquaresInside([
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2],
  ]),
  1,
);

// +---+---+---+
// | 4 | 7 | 8 |
// | 9 | 5 | 1 |
// | 2 | 3 | 6 |
// +---+---+---+

strictEqual(
  numMagicSquaresInside([
    [4, 7, 8],
    [9, 5, 1],
    [2, 3, 6],
  ]),
  0,
);

// +---+---+---+
// | 9 | 5 | 6 |
// | 2 | 8 | 7 |
// | 1 | 4 | 3 |
// +---+---+---+

strictEqual(
  numMagicSquaresInside([
    [9, 5, 6],
    [2, 8, 7],
    [1, 4, 3],
  ]),
  0,
);

strictEqual(
  numMagicSquaresInside([
    [8, 7, 4, 1, 7, 2],
    [5, 8, 4, 2, 6, 9],
    [4, 2, 1, 4, 2, 8],
    [6, 5, 9, 2, 7, 4],
    [8, 2, 3, 9, 5, 3],
    [3, 9, 5, 6, 8, 1],
  ]),
  0,
);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*

https://oeis.org/A217568

276951438
294753618
438951276
492357816
618753294
672159834
816357492
834159672

3x3 = 1
3x4 = 2
3x5 = 3
3x6 = 4
4x4 = 4
4x5 = 6
4x6 = 8
5x5 = 9
6x6 = 16

rows - 2 * cols - 2

| 4 | 3 | 8 | 4 |
| 9 | 5 | 1 | 9 |
| 2 | 7 | 6 | 2 |

|0|0|0|0|0|0|0|0|0|0|1|1|
|0|1|2|3|4|5|6|7|8|9|0|1|
|-|-|-|-|-|-|-|-|-|-|-|-|
|4|3|8|4|9|5|1|9|2|7|6|2|
|4|3|8| |9|5|1| |2|7|6| |
| |3|8|4| |5|1|9| |7|6|2|

| 8 | 7 | 4 | 1 | 7 | 2 |
| 5 | 8 | 4 | 2 | 6 | 9 |
| 4 | 2 | 1 | 4 | 2 | 8 |
| 6 | 5 | 9 | 2 | 7 | 4 |
| 8 | 2 | 3 | 9 | 5 | 3 |
| 3 | 9 | 5 | 6 | 8 | 1 |

|0|0|0|0|0|0|0|0|0|0|1|1|1|1|1|1|1|1|1|1|2|2|2|2|2|2|2|2|2|2|2|3|3|3|3|3|
|0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|
|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
|8|7|4|1|7|2|5|8|4|2|6|9|4|2|1|4|2|8|6|5|9|2|7|4|8|2|3|9|5|3|3|9|5|6|8|1|
|8|7|4| | | |5|8|4| | | |4|2|1| | | | | | | | | | | | | | | | | | | | | |
| |7|4|1| | | |8|4|2| | | |2|1|4| | | | | | | | | | | | | | | | | | | | |
| | |4|1|7| | | |4|2|6| | | |1|4|2| | | | | | | | | | | | | | | | | | | |
| | | |1|7|2| | | |2|6|9| | | |4|2|8| | | | | | | | | | | | | | | | | | |
| | | | | | |5|8|4| | | |4|2|1| | | |6|5|9| | | | | | | | | | | | | | | |
| | | | | | | |8|4|2| | | |2|1|4| | | |5|9|2| | | | | | | | | | | | | | |
| | | | | | | | |4|2|6| | | |1|4|2| | | |9|2|7| | | | | | | | | | | | | |
| | | | | | | | | |2|6|9| | | |4|2|8| | | |2|7|4| | | | | | | | | | | | |
| | | | | | | | | | | | |4|2|1| | | |6|5|9| | | |8|2|3| | | | | | | | | |
| | | | | | | | | | | | | |2|1|4| | | |5|9|2| | | |2|3|9| | | | | | | | |
| | | | | | | | | | | | | | |1|4|2| | | |9|2|7| | | |3|9|5| | | | | | | |
| | | | | | | | | | | | | | | |4|2|8| | | |2|7|4| | | |9|5|3| | | | | | |
| | | | | | | | | | | | | | | | | | |6|5|9| | | |8|2|3| | | |3|9|5| | | |
| | | | | | | | | | | | | | | | | | | |5|9|2| | | |2|3|9| | | |9|5|6| | |
| | | | | | | | | | | | | | | | | | | | |9|2|7| | | |3|9|5| | | |5|6|8| |
| | | | | | | | | | | | | | | | | | | | | |2|7|4| | | |9|5|3| | | |6|8|1|

*/
