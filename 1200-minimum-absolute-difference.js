// 1200. Minimum Absolute Difference
// https://leetcode.com/problems/minimum-absolute-difference/

/*

Given an array of distinct integers arr, find all pairs of elements with the
minimum absolute difference of any two elements.

Return a list of pairs in ascending order(with respect to pairs), each pair [a,
b] follows

- a, b are from arr
- a < b
- b - a equals to the minimum absolute difference of any two elements in arr

Constraints:
- 2 <= arr.length <= 10^5
- -10^6 <= arr[i] <= 10^6

*/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 228 ms, faster than 16.76% of JavaScript online submissions
// Memory Usage: 65.4 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {number[][]}
//  */
// const minimumAbsDifference = arr => {
//   arr.sort((a, b) => a - b);
//   // console.log(arr);
//   const map = new Map();
//   // console.log(map);
//   for (let i = 0; i < arr.length - 1; i += 1) {
//     const [pair, diff] = [[arr[i], arr[i + 1]], arr[i + 1] - arr[i]];
//     // console.log(pair);
//     map.has(diff) ? map.get(diff).push(pair) : map.set(diff, [pair]);
//   }
//   // console.log(map);
//   // console.log(...map.keys);
//   return map.get(Math.min(...map.keys()));
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} arr
//  * @return {number[][]}
//  */
// const minimumAbsDifference = arr => {
//   arr.sort((a, b) => a - b);
//   const map = new Map();
//   for (let i = 0; i < arr.length - 1; i += 1) {
//     const [pair, diff] = [[arr[i], arr[i + 1]], arr[i + 1] - arr[i]];
//     map.has(diff) ? map.get(diff).push(pair) : map.set(diff, [pair]);
//   }
//   return map.get(Math.min(...map.keys()));
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 948 ms, faster than 5.32% of JavaScript online submissions
// Memory Usage: 273.8 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
const minimumAbsDifference = arr => {
  const cnts = new Array(Math.max(...arr) - Math.min(...arr))
    .fill()
    .map(_ => []);
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++)
    cnts[arr[i + 1] - arr[i]].push([arr[i], arr[i + 1]]);
  for (const groups of cnts) if (groups.length) return groups;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
deepStrictEqual(minimumAbsDifference([4, 2, 1, 3]), [
  [1, 2],
  [2, 3],
  [3, 4],
]);
// Explanation: The minimum absolute difference is 1. List all pairs with
// difference equal to 1 in ascending order.

// Example 2:
deepStrictEqual(minimumAbsDifference([1, 3, 6, 10, 15]), [[1, 3]]);

// Example 3:
deepStrictEqual(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]), [
  [-14, -10],
  [19, 23],
  [23, 27],
]);
