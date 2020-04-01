// 1394. Find Lucky Integer in an Array
// https://leetcode.com/problems/find-lucky-integer-in-an-array/

/*

Given an array of integers arr, a lucky integer is an integer which has a
frequency in the array equal to its value.

Return a lucky integer in the array. If there are multiple lucky integers return
the largest of them. If there is no lucky integer return -1.

Constraints:
- 1 <= arr.length <= 500
- 1 <= arr[i] <= 500

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 116 ms, faster than 18.18% of JavaScript online submissions
// Memory Usage: 35.4 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {number}
//  */
// const findLucky = arr => {
//   const cnts = new Array(arr.length + 1).fill(0);
//   for (const num of arr) if (0 < num && num < arr.length + 1) cnts[num]++;
//   for (let i = cnts.length - 1; 0 < i; i--) if (i === cnts[i]) return i;
//   return -1;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 75.65% of JavaScript online submissions
// Memory Usage: 35.3 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {number}
//  */
// const findLucky = arr => {
//   const cnts = new Array(arr.length + 1).fill(0);
//   for (const num of arr) if (num < arr.length + 1) cnts[num]++;
//   for (let i = cnts.length - 1; 0 < i; i--) if (i === cnts[i]) return i;
//   return -1;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 108 ms, faster than 23.38% of JavaScript online submissions
// Memory Usage: 36.6 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} arr
 * @return {number}
 */
const findLucky = arr => {
  const poss = new Map(
    [...new Set(arr)].sort((a, b) => b - a).map(n => [n, 0]),
  );
  for (const num of arr) poss.set(num, poss.get(num) + 1);
  for (const [x, y] of poss) if (x === y) return x;
  return -1;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(findLucky([2, 2, 3, 4]), 2);
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.

// Example 2:
strictEqual(findLucky([1, 2, 2, 3, 3, 3]), 3);
// Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.

// Example 3:
strictEqual(findLucky([2, 2, 2, 3, 3]), -1);
// Explanation: There are no lucky numbers in the array.

// Example 4:
strictEqual(findLucky([5]), -1);

// Example 5:
strictEqual(findLucky([7, 7, 7, 7, 7, 7, 7]), 7);
