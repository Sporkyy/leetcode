// 1260. Shift 2D Grid
// https://leetcode.com/problems/shift-2d-grid/

/*

Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.

In one shift operation:

Element at grid[i][j] moves to grid[i][j + 1].
Element at grid[i][n - 1] moves to grid[i + 1][0].
Element at grid[m - 1][n - 1] moves to grid[0][0].
Return the 2D grid after applying shift operation k times.

*/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 88 ms, faster than 90.64% of JavaScript online submissions
// Memory Usage: 41.7 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[][]} grid
//  * @param {number} k
//  * @return {number[][]}
//  */
// const shiftGrid = (grid, k) => {
//   const linear = grid.reduce((acc, curr) => acc.concat(curr), []);
//   // console.log(linear);
//   const doubled = linear.concat(linear);
//   // console.log(doubled);
//   k %= linear.length;
//   // console.log(k);
//   const shifted = doubled.slice(linear.length - k, doubled.length - k);
//   // console.log(shifted);
//   for (let i = 0, x = 0; i < grid.length; i++)
//     for (let j = 0; j < grid[i].length; j++, x++) grid[i][j] = shifted[x];
//   // console.log(grid);
//   return grid;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 92 ms, faster than 77.45% of JavaScript online submissions
// Memory Usage: 41.9 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[][]} grid
//  * @param {number} k
//  * @return {number[][]}
//  */
// const shiftGrid = (grid, k) => {
//   const flat = grid.reduce((acc, curr) => acc.concat(curr), []);
//   const doubled = flat.concat(flat);
//   k %= flat.length;
//   const shifted = doubled.slice(flat.length - k, doubled.length - k);
//   const matrix = [];
//   for (let i = 0; i < flat.length; i += grid[0].length)
//     matrix.push(shifted.slice(i, i + grid[0].length));
//   return matrix;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 92 ms, faster than 77.45% of JavaScript online submissions
// Memory Usage: 41.9 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[][]} grid
//  * @param {number} k
//  * @return {number[][]}
//  */
// const shiftGrid = (grid, k) => {
//   const flat = grid.reduce((acc, curr) => acc.concat(curr), []);
//   k %= flat.length;
//   const shifted = [
//     ...flat.slice(flat.length - k),
//     ...flat.slice(0, flat.length - k),
//   ];
//   const matrix = [];
//   for (let i = 0; i < flat.length; i += grid[0].length)
//     matrix.push(shifted.slice(i, i + grid[0].length));
//   return matrix;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 92 ms, faster than 77.45% of JavaScript online submissions
// Memory Usage: 41.9 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[][]} grid
//  * @param {number} k
//  * @return {number[][]}
//  */
// const shiftGrid = (grid, k) => {
//   const flat = grid.reduce((acc, curr) => acc.concat(curr), []);
//   k %= flat.length;
//   const shifted = [...flat.slice(-k), ...flat.slice(0, -k)];
//   const matrix = [];
//   for (let i = 0; i < flat.length; i += grid[0].length)
//     matrix.push(shifted.slice(i, i + grid[0].length));
//   return matrix;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 97.03% of JavaScript online submissions
// Memory Usage: 42 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[][]} grid
//  * @param {number} k
//  * @return {number[][]}
//  */
// const shiftGrid = (grid, k) => {
//   // Store the width and the height of the grid
//   const [w, h] = [grid[0].length, grid.length];
//   // Calculate the total items in the grid
//   const t = w * h;
//   // Use the total to avoid extraneous whole-grid shifts
//   k %= t;
//   // Flatten the grid for easy shifting
//   const flattened = grid.reduce((acc, curr) => acc.concat(curr), []);
//   // Shift the grid using slice for speed
//   const sFlattened = [...flattened.slice(-k), ...flattened.slice(0, -k)];
//   // Make a new two-dimensional shifted grid
//   const shifted = []; // The second dimension is added on the next line
//   // Store the flat shifted grid in the new two-dimensional shifted grid
//   for (let i = 0; i < t; i += w) shifted.push(sFlattened.slice(i, i + w));
//   // Return the new two-dimensional shifted grid
//   return shifted;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 92 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 45.3 MB, less than 35.62% of JavaScript online submissions

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
const shiftGrid = (grid, k) => {
  // Store the width and the height of the grid
  const [w, h] = [grid[0].length, grid.length];
  // Calculate the total items in the grid
  const t = w * h;
  // Use the total to avoid extraneous whole-grid shifts
  k %= t;
  // Flatten the grid for easy shifting
  const flattened = grid.flat();
  // Shift the grid using slice for speed
  const sFlattened = [...flattened.slice(-k), ...flattened.slice(0, -k)];
  // Make a new two-dimensional shifted grid
  const shifted = []; // The second dimension is added on the next line
  // Store the flat shifted grid in the new two-dimensional shifted grid
  for (let i = 0; i < t; i += w) shifted.push(sFlattened.slice(i, i + w));
  // Return the new two-dimensional shifted grid
  return shifted;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
deepStrictEqual(
  shiftGrid(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    1,
  ),
  [
    [9, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ],
);

// Example 2:
deepStrictEqual(
  shiftGrid(
    [
      [3, 8, 1, 9],
      [19, 7, 2, 5],
      [4, 6, 11, 10],
      [12, 0, 21, 13],
    ],
    4,
  ),
  [
    [12, 0, 21, 13],
    [3, 8, 1, 9],
    [19, 7, 2, 5],
    [4, 6, 11, 10],
  ],
);

// Example 3:
deepStrictEqual(
  shiftGrid(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    9,
  ),
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
);

deepStrictEqual(
  shiftGrid(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    4,
  ),
  [
    [6, 7, 8],
    [9, 1, 2],
    [3, 4, 5],
  ],
);

deepStrictEqual(shiftGrid([[1], [2], [3], [4], [7], [6], [5]], 23), [
  [6],
  [5],
  [1],
  [2],
  [3],
  [4],
  [7],
]);

deepStrictEqual(
  shiftGrid(
    [
      [-353, 853, 839, 122, -337],
      [819, 356, 116, 0, 791],
      [-516, -502, -681, -427, -314],
      [-386, -400, 597, 740, 836],
      [129, 598, 40, -875, -968],
      [495, -604, 79, 414, -104],
      [237, 121, 211, 4, 677],
      [-712, 351, -947, -203, 361],
    ],
    7,
  ),
  [
    [4, 677, -712, 351, -947],
    [-203, 361, -353, 853, 839],
    [122, -337, 819, 356, 116],
    [0, 791, -516, -502, -681],
    [-427, -314, -386, -400, 597],
    [740, 836, 129, 598, 40],
    [-875, -968, 495, -604, 79],
    [414, -104, 237, 121, 211],
  ],
);
