// 1539. Kth Missing Positive Number
// https://leetcode.com/problems/kth-missing-positive-number/

/*

Given an array arr of positive integers sorted in a strictly increasing order,
and an integer k.

Find the kth positive integer that is missing from this array.

## Constraints
- 1 <= arr.length <= 1000
- 1 <= arr[i] <= 1000
- 1 <= k <= 1000
- arr[i] < arr[j] for 1 <= i < j <= arr.length

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 88 ms, faster than 44.53% of JavaScript online submissions
// Memory Usage: 39.6 MB, less than 9.05% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @param {number} k
//  * @return {number}
//  */
// const findKthPositive = (arr, k) =>
//   [
//     ...arr.reduce((acc, curr) => {
//       acc.delete(curr);
//       return acc;
//     }, new Set(new Array(1 + arr[arr.length - 1] + k).keys())),
//   ][k];

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 96 ms, faster than 36.23% of JavaScript online submissions
// Memory Usage: 37 MB, less than 52.07% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @param {number} k
//  * @return {number}
//  */
// const findKthPositive = (arr, k) => {
//   for (let i = 1, j = 0; i < Infinity; i++) {
//     if (i !== arr[j]) k--;
//     else j++;
//     if (!k) return i;
//   }
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 72 ms, faster than 90.74% of JavaScript online submissions
// Memory Usage: 36.7 MB, less than 88.52% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @param {number} k
//  * @return {number}
//  */
// const findKthPositive = (arr, k) => {
//   for (let i = 1, j = 0; ; i++)
//     if (i === arr[j]) j++;
//     else if (!--k) return i;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 72 ms, faster than 90.74% of JavaScript online submissions
// Memory Usage: 36.9 MB, less than 69.26% of JavaScript online submissions

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = (arr, k) => {
  for (let i = 1, j = 0; ; i++)
    if (i === arr[j]) j++;
    else if (k === i - j) return i;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 88 ms, faster than 43.70% of JavaScript online submissions
// Memory Usage: 37.2 MB, less than 35.92% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @param {number} k
//  * @return {number}
//  */
// const findKthPositive = (arr, k) => {
//   arr.reverse();
//   const qMissing = [];
//   for (let i = 0; qMissing.length < k + 1; i++) {
//     if (i !== arr[arr.length - 1]) qMissing.push(i);
//     else arr.pop();
//   }
//   return qMissing[k];
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(findKthPositive([2, 3, 4, 7, 11], 5), 9);
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The
// 5th missing positive integer is 9.

// Example 2:
strictEqual(findKthPositive([1, 2, 3, 4], 2), 6);
// Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing
// positive integer is 6.
