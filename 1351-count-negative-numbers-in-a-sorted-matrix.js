// 1351. Count Negative Numbers in a Sorted Matrix
// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

/*

Given a m * n matrix grid which is sorted in non-increasing order both row-wise
and column-wise.

Return the number of negative numbers in grid.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 74.68% of JavaScript online submissions
// Memory Usage: 37.1 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = grid =>
  grid.reduce((acc, curr) => acc + curr.filter(n => n < 0).length, 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ]),
  8,
);

// Example 2:
strictEqual(
  countNegatives([
    [3, 2],
    [1, 0],
  ]),
  0,
);

// Example 3:
strictEqual(
  countNegatives([
    [1, -1],
    [-1, -1],
  ]),
  3,
);

// Example 4:
strictEqual(countNegatives([[-1]]), 1);
