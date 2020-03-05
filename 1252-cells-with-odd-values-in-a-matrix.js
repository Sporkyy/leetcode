// 1252. Cells with Odd Values in a Matrix
// https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/

/*

Given n and m which are the dimensions of a matrix initialized by zeros and
given an array indices where indices[i] = [ri, ci]. For each pair of [ri, ci]
you have to increment all cells in row ri and column ci by 1.

Return the number of cells with odd values in the matrix after applying the
increment to all indices.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 26.62% of JavaScript online submissions
// Memory Usage: 38.5 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number} n
//  * @param {number} m
//  * @param {number[][]} indices
//  * @return {number}
//  */
// const oddCells = (n, m, indices) => {
//   const matrix = new Array(n).fill().map(_ => new Array(m).fill(0));
//   for (const [ri, ci] of indices)
//     for (let i = 0; i < matrix.length; i++)
//       for (let j = 0; j < matrix[i].length; j++) {
//         if (ri === i) matrix[i][j]++;
//         if (ci === j) matrix[i][j]++;
//       }
//   return matrix
//     .reduce((acc, curr) => acc.concat(curr), [])
//     .filter(n => 1 === n % 2).length;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 48 ms, faster than 98.11% of JavaScript online submissions
// Memory Usage: 35.7 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number} n
//  * @param {number} m
//  * @param {number[][]} indices
//  * @return {number}
//  */
// const oddCells = (n, m, indices) => {
//   const [rows, cols] = [new Array(n).fill(0), new Array(m).fill(0)];
//   for (const [ri, ci] of indices) [rows[ri]++, cols[ci]++];
//   // console.log(rows.join(''));
//   // console.log(cols.join(''));
//   let res = 0;
//   const rowOdds = rows.filter(n => 1 === n % 2).length;
//   // console.log(rowOdds);
//   const rowEvens = rows.length - rowOdds;
//   // console.log(rowEvens);
//   const colOdds = cols.filter(n => 1 === n % 2).length;
//   // console.log(colOdds);
//   const colEvens = cols.length - colOdds;
//   // console.log(colEvens);
//   return rowOdds * colEvens + rowEvens * colOdds;
//   // rowEvens + colEvens -
//   // console.log(res);
//   // res += rows.filter(n => 1 === n % 2).length * cols.length;
//   // console.log(res);
//   // res += cols.filter(n => 1 === n % 2).length * rows.length;
//   // console.log(res);
//   // // res -= rows.filter(n => 1 === n % 2).length;
//   // console.log(res);
//   // // res -= cols.filter(n => 1 === n % 2).length;
//   // console.log(res);
//   return res;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 69.81% of JavaScript online submissions
// Memory Usage: 35.9 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
const oddCells = (n, m, indices) => {
  const [rows, cols] = [new Array(n).fill(0), new Array(m).fill(0)];
  for (const [ri, ci] of indices) [rows[ri]++, cols[ci]++];
  const rowOdds = rows.filter(n => 1 === n % 2).length;
  const rowEvens = rows.length - rowOdds;
  const colOdds = cols.filter(n => 1 === n % 2).length;
  const colEvens = cols.length - colOdds;
  return rowOdds * colEvens + rowEvens * colOdds;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(
  oddCells(2, 3, [
    [0, 1],
    [1, 1],
  ]),
  6,
);
// Explanation: Initial matrix = [[0,0,0],[0,0,0]].
// After applying first increment it becomes [[1,2,1],[0,1,0]].
// The final matrix will be [[1,3,1],[1,3,1]] which contains 6 odd numbers.

// Example 2:
strictEqual(
  oddCells(2, 2, [
    [1, 1],
    [0, 0],
  ]),
  0,
);
// Explanation: Final matrix = [[2,2],[2,2]]. There is no odd number in the final matrix.

strictEqual(oddCells(48, 37, [[40, 5]]), 83);

strictEqual(
  oddCells(2, 3, [
    [0, 1],
    [1, 1],
  ]),
  6,
);
