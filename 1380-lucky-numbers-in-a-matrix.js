// 1380. Lucky Numbers in a Matrix
// https://leetcode.com/problems/lucky-numbers-in-a-matrix/

/*

Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix
in any order.

A lucky number is an element of the matrix such that it is the minimum element
in its row and maximum in its column.

*/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 12.06% of JavaScript online submissions
// Memory Usage: 39 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[][]} rows
//  * @return {number[]}
//  */
// const luckyNumbers = rows => {
//   const cols = new Array(rows[0].length)
//     .fill()
//     .map(_ => new Array(rows.length));

//   // console.log(cols);

//   for (let i = 0; i < rows.length; i++) {
//     for (let j = 0; j < rows[0].length; j++) {
//       cols[j][i] = rows[i][j];
//     }
//   }

//   // console.log(cols);

//   // console.log(rows.map(row => Math.min(...row)));
//   // console.log(new Set(cols.map(col => Math.max(...col))));

//   const mins = rows.map(row => Math.min(...row));
//   const maxs = new Set(cols.map(col => Math.max(...col)));

//   const res = [];
//   for (const n of mins) if (maxs.has(n)) res.push(n);

//   return res;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 76.88% of JavaScript online submissions
// Memory Usage: 37.3 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[][]} matrix
//  * @return {number[]}
//  */
// const luckyNumbers = matrix => {
//   const mins = new Array(matrix.length).fill(Infinity);
//   const maxes = new Array(matrix[0].length).fill(-Infinity);
//   for (let ri = 0; ri < matrix.length; ri++) {
//     for (let ci = 0; ci < matrix[0].length; ci++) {
//       // console.log([ri, ci]);
//       mins[ri] = Math.min(mins[ri], matrix[ri][ci]);
//       maxes[ci] = Math.max(maxes[ci], matrix[ri][ci]);
//     }
//   }
//   // console.log(mins);
//   // console.log(maxes);

//   const maxSet = new Set(maxes);
//   const res = [];
//   for (const n of mins) if (maxSet.has(n)) res.push(n);
//   return res;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 31.16% of JavaScript online submissions
// Memory Usage: 37 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[][]} matrix
//  * @return {number[]}
//  */
// const luckyNumbers = matrix => {
//   const mins = new Array(matrix.length).fill(Infinity);
//   const maxes = new Array(matrix[0].length).fill(-Infinity);
//   for (let ri = 0; ri < matrix.length; ri++)
//     for (let ci = 0; ci < matrix[0].length; ci++) {
//       mins[ri] = Math.min(mins[ri], matrix[ri][ci]);
//       maxes[ci] = Math.max(maxes[ci], matrix[ri][ci]);
//     }
//   return maxes.filter(max => mins.includes(max));
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 56.28% of JavaScript online submissions
// Memory Usage: 37 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[][]} matrix
//  * @return {number[]}
//  */
// const luckyNumbers = matrix => {
//   const mins = new Array(matrix.length).fill(Infinity);
//   const maxes = new Array(matrix[0].length).fill(-Infinity);
//   for (let i = 0; i < matrix.length; i++)
//     for (let j = 0; j < matrix[0].length; j++) {
//       mins[i] = Math.min(mins[i], matrix[i][j]);
//       maxes[j] = Math.max(maxes[j], matrix[i][j]);
//     }
//   const minSet = new Set(mins);
//   return maxes.filter(max => minSet.has(max));
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 12.06% of JavaScript online submissions
// Memory Usage: 37 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const luckyNumbers = matrix => {
  const mins = new Array(matrix.length).fill(Infinity);
  const maxes = new Array(matrix[0].length).fill(-Infinity);
  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[0].length; j++)
      (mins[i] = Math.min(mins[i], matrix[i][j])),
        (maxes[j] = Math.max(maxes[j], matrix[i][j]));
  const minSet = new Set(mins);
  return maxes.filter(max => minSet.has(max));
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
deepStrictEqual(
  luckyNumbers([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17],
  ]),
  [15],
);
// Explanation: 15 is the only lucky number since it is the minimum in its row
// and the maximum in its column

// Example 2:
deepStrictEqual(
  luckyNumbers([
    [1, 10, 4, 2],
    [9, 3, 8, 7],
    [15, 16, 17, 12],
  ]),
  [12],
);
// Explanation: 12 is the only lucky number since it is the minimum in its row
// and the maximum in its column.

// Example 3:
deepStrictEqual(
  luckyNumbers([
    [7, 8],
    [1, 2],
  ]),
  [7],
);
