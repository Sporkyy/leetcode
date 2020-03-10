// 1207. Unique Number of Occurrences
// https://leetcode.com/problems/unique-number-of-occurrences/

/*

Given an array of integers arr, write a function that returns true if and only
if the number of occurrences of each value in the array is unique.

Constraints:
- 1 <= arr.length <= 1000
- -1000 <= arr[i] <= 1000

*/

import { ok } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 28.13% of JavaScript online submissions
// Memory Usage: 35.4 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
// const uniqueOccurrences = arr => {
//   const cnts = new Array(2001).fill(0);
//   for (const n of arr) cnts[n + 1000]++;
//   return cnts.filter(n => 0 !== n).length === new Set(cnts).size - 1;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 86.99% of JavaScript online submissions
// Memory Usage: 35.9 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
// const uniqueOccurrences = arr => {
//   const cnts = new Array(2001).fill(0);
//   for (const n of arr) cnts[n + 1000]++;
//   const map = new Map([...new Set(arr)].map(n => [n, cnts[n + 1000]]));
//   return [...map.keys()].length === new Set(map.values()).size;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 86.99% of JavaScript online submissions
// Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
// const uniqueOccurrences = arr => {
//   const cnts = new Map();
//   for (const n of arr) cnts.set(n, cnts.get(n) + 1 || 1);
//   return [...cnts.keys()].length === new Set(cnts.values()).size;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = arr => {
  const map = arr.reduce((a, c) => a.set(c, a.get(c) + 1 || 1), new Map());
  return [...map.keys()].length === new Set(map.values()).size;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
ok(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two
// values have the same number of occurrences.

// Example 2:
ok(!uniqueOccurrences([1, 2]));

// Example 3:
ok(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));

ok(uniqueOccurrences([1, 11, 1, 2, 11, 1, 2, 2, -2, 2]));
