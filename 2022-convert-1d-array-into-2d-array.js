// 2022. Convert 1D Array Into 2D Array
// https://leetcode.com/problems/convert-1d-array-into-2d-array/

/*

You are given a **0-indexed** 1-dimensional (1D) integer array `original`, and
two integers, `m` and `n`. You are tasked with creating a 2-dimensional (2D)
array with `m` rows and `n` columns using all the elements from `original`.

The elements from indices 0 to n - 1 (**inclusive**) of `original` should form
the first row of the constructed 2D array, the elements from indices n to `2 * n
- 1` (**inclusive**) should form the second row of the constructed 2D array, and
so on.

Return an `m x n` *2D array constructed according to the above procedure, or an
empty 2D array if it is impossible.*

# Constraints
- 1 <= original.length <= 5 * 104
- 1 <= original[i] <= 105
- 1 <= m, n <= 4 * 104

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 316 ms, faster than 48.25% of JavaScript online submissions
// Memory Usage: 65.6 MB, less than 39.47% of JavaScript online submissions

// /**
//  * @param {number[]} original
//  * @param {number} m
//  * @param {number} n
//  * @return {number[][]}
//  */
// const construct2DArray = (original, m, n) =>
//   m * n === original.length
//     ? original.reduce(
//         (acc, curr, idx) => {
//           acc[Math.trunc(idx / n)][idx % n] = curr;
//           return acc;
//         },
//         new Array(m).fill().map(_ => new Array(n)),
//       )
//     : [];

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 228 ms, faster than 89.91% of JavaScript online submissions
// Memory Usage: 58 MB, less than 91.23% of JavaScript online submissions

// /**
//  * @param {number[]} original
//  * @param {number} m
//  * @param {number} n
//  * @return {number[][]}
//  */
// const construct2DArray = (original, m, n) => {
//   if (m * n !== original.length) return [];
//   const tmp = [];
//   for (let i = 0; i < m; i++) {
//     // console.log(i);
//     // console.log(original.slice(i * n, i * n + n));
//     tmp.push(original.slice(i * n, i * n + n));
//   }
//   return tmp;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 289 ms, faster than 52.63% of JavaScript online submissions
// Memory Usage: 65.4 MB, less than 40.79% of JavaScript online submissions

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
const construct2DArray = (original, m, n) => {
  const arr = [];
  if (m * n !== original.length) return arr;
  for (let i = 0; i < m; i++) arr.push(original.slice(i * n, i * n + n));
  return arr;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 433 ms, faster than 15.35% of JavaScript online submissions
// Memory Usage: 64.6 MB, less than 46.93% of JavaScript online submissions

// /**
//  * @param {number[]} original
//  * @param {number} m
//  * @param {number} n
//  * @return {number[][]}
//  */
// const construct2DArray = (original, m, n) => {
//   if (m * n !== original.length) return [];
//   const tmp = [];
//   while (original.length) tmp.push(original.splice(0, n));
//   return tmp;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { deepStrictEqual } from 'assert';

// Example 1:
deepStrictEqual(construct2DArray([1, 2, 3, 4], 2, 2), [
  [1, 2],
  [3, 4],
]);
// Explanation:
// - The constructed 2D array should contain 2 rows and 2 columns.
// - The first group of n=2 elements in original, [1,2], becomes the first row
//   in the constructed 2D array.
// - The second group of n=2 elements in original, [3,4], becomes the second row
//   in the constructed 2D array.

// Example 2:
deepStrictEqual(construct2DArray([1, 2, 3], 1, 3), [[1, 2, 3]]);
// Explanation:
// - The constructed 2D array should contain 1 row and 3 columns.
// - Put all three elements in original into the first row of the constructed 2D
//   array.

// Example 3:
deepStrictEqual(construct2DArray([1, 2], 1, 1), []);
// Explanation:
// - There are 2 elements in original.
// - It is impossible to fit 2 elements in a 1x1 2D array, so return an empty 2D
//   array.

// Example 4:
deepStrictEqual(construct2DArray([3], 1, 2), []);
// Explanation:
// - There is 1 element in original.
// - It is impossible to make 1 element fill all the spots in a 1x2 2D array, so
//   return an empty 2D array.

deepStrictEqual(construct2DArray([1, 2, 3], 1, 3), [[1, 2, 3]]);
