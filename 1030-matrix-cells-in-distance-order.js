// 1030. Matrix Cells in Distance Order
// https://leetcode.com/problems/matrix-cells-in-distance-order/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 176 ms, faster than 71.19% of JavaScript online submissions
// Memory Usage: 48.5 MB, less than 100.00% of JavaScript online submissions

// const distance = (originRow, originCol, hereRow, hereCol) =>
//   Math.abs(originRow - hereRow) + Math.abs(originCol - hereCol);

// const cellsWithDistance = (rowCount, colCount, specialRowIndex, specialColIndex) => {
//   const result = new Array(rowCount * colCount);
//   for (let i = 0, k = 0; i <= rowCount - 1; i++) {
//     for (let j = 0; j <= colCount - 1; j++, k++) {
//       result[k] = [i, j, distance(specialRowIndex, specialColIndex, i, j)];
//     }
//   }
//   return result;
// };

/**
 * @param {number} r
 * @param {number} c
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
// const allCellsDistOrder = (R, C, r0, c0) => {
//   const cells = cellsWithDistance(R, C, r0, c0);
//   const sorted = cells.sort((a, b) => (a[2] < b[2] ? -1 : b[2] < a[2] ? 1 : 0));
//   const result = sorted.map(cellWithDistance => [cellWithDistance[0], cellWithDistance[1]]);
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 376 ms, faster than 5.90% of JavaScript online submissions
// Memory Usage: 52.5 MB, less than 42.36% of JavaScript online submissions

/**
 * @param {number} r
 * @param {number} c
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
// const allCellsDistOrder = (R, C, r0, c0) => {
//   result = [];
//   for (rI = i = 0; rI <= R - 1; rI++) {
//     for (cI = 0; cI <= C - 1; cI++, i++) {
//       distance = Math.abs(r0 - rI) + Math.abs(c0 - cI);
//       result[distance * C * R + i] = [rI, cI];
//     }
//   }
//   return result.filter(Boolean);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 168 ms, faster than 84.59% of JavaScript online submissions
// Memory Usage: 52.1 MB, less than 45.85% of JavaScript online submissions

/**
 * @param {number} r
 * @param {number} c
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
// const allCellsDistOrder = (R, C, r0, c0) => {
//   const o = {};
//   for (let rI = (i = 0); rI <= R - 1; rI++) {
//     for (let cI = 0; cI <= C - 1; cI++, i++) {
//       const distance = Math.abs(r0 - rI) + Math.abs(c0 - cI);
//       o[distance * C * R + i] = [rI, cI];
//     }
//   }
//   return Object.keys(o).map(key => o[key]);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 196 ms, faster than 33.11% of JavaScript online submissions
// Memory Usage: 68.4 MB, less than 5.24% of JavaScript online submissions

/**
 * @param {number} r
 * @param {number} c
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
// const allCellsDistOrder = (R, C, r0, c0) => {
//   const byDistance = [];
//   for (let rI = 0; rI <= R - 1; rI++) {
//     for (let cI = 0; cI <= C - 1; cI++) {
//       const distance = Math.abs(r0 - rI) + Math.abs(c0 - cI);
//       if ('undefined' === typeof byDistance[distance]) {
//         byDistance[distance] = [];
//       }
//       byDistance[distance].push([rI, cI]);
//     }
//   }
//   return byDistance.reduce((acc, curr) => [...acc, ...curr], []);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 152 ms, faster than 96.07% of JavaScript online submissions
// Memory Usage: 50.4 MB, less than 53.27% of JavaScript online submissions

// /**
//  * @param {number} R
//  * @param {number} C
//  * @param {number} r0
//  * @param {number} c0
//  * @return {number[][]}
//  */
// const allCellsDistOrder = (R, C, r0, c0) => {
//   const byDistance = new Array(R * C).fill(0).map(x => []);
//   for (let rI = 0; rI <= R - 1; rI++) {
//     for (let cI = 0; cI <= C - 1; cI++) {
//       const distance = Math.abs(r0 - rI) + Math.abs(c0 - cI);
//       byDistance[distance].push([rI, cI]);
//     }
//   }
//   const result = [];
//   for (let i = 0; i < byDistance.length; i++) {
//     for (let j = 0; j < byDistance[i].length; j++) {
//       result.push(byDistance[i][j]);
//     }
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} r
 * @param {number} c
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
const allCellsDistOrder = (r, c, r0, c0) => {
  const byDistance = new Array(r * c).fill(0).map(x => []);
  for (let rI = 0; rI <= r - 1; rI++) {
    for (let cI = 0; cI <= c - 1; cI++) {
      const distance = Math.abs(r0 - rI) + Math.abs(c0 - cI);
      byDistance[distance].push([rI, cI]);
    }
  }
  const result = [];
  for (let i = 0; i < byDistance.length; i++) {
    for (let j = 0; j < byDistance[i].length; j++) {
      result.push(byDistance[i][j]);
    }
  }
  return result;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

// [0, 0], [0, 1]
deepStrictEqual(allCellsDistOrder(1, 2, 0, 0), [
  [0, 0],
  [0, 1],
]);

// [0, 0], [0, 1]
// [1, 0], [1, 1]
deepStrictEqual(allCellsDistOrder(2, 2, 0, 1), [
  [0, 1],
  [0, 0],
  [1, 1],
  [1, 0],
]);

// [0, 0], [0, 1], [0, 2]
// [1, 0], [1, 1], [1, 2]
deepStrictEqual(allCellsDistOrder(2, 3, 1, 2), [
  [1, 2],
  [0, 2],
  [1, 1],
  [0, 1],
  [1, 0],
  [0, 0],
]);
