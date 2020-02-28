// 1331. Rank Transform of an Array
// https://leetcode.com/problems/rank-transform-of-an-array/

/*

Given an array of integers arr, replace each element with its rank.

The rank represents how large the element is. The rank has the following rules:

Rank is an integer starting from 1. The larger the element, the larger the rank.
If two elements are equal, their rank must be the same. Rank should be as small
as possible.

*/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 228 ms, faster than 98.85% of JavaScript online submissions
// Memory Usage: 66.7 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const arrayRankTransform = arr => {
  const ranks = [...new Set(arr)]
    .sort((a, b) => a - b)
    .reduce((acc, curr, idx) => acc.set(curr, idx + 1), new Map());
  return arr.map(n => ranks.get(n));
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Time Limit Exceeded

// /**
//  * @param {number[]} arr
//  * @return {number[]}
//  */
// const arrayRankTransform = arr => {
//   const uniques = [...new Set(arr)];
//   return arr.map(n => uniques.filter(u => u < n).length + 1);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
deepStrictEqual(arrayRankTransform([40, 10, 20, 30]), [4, 1, 2, 3]);
// Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.

// Example 2:
deepStrictEqual(arrayRankTransform([100, 100, 100]), [1, 1, 1]);
// Explanation: Same elements share the same rank.

// Example 3:
deepStrictEqual(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]), [
  5,
  3,
  4,
  2,
  8,
  6,
  7,
  1,
  3,
]);
