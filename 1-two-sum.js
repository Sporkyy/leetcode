// 1. Two Sum
// https://leetcode.com/problems/two-sum/

/*
〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

Given an array of integers nums and an integer target, return indices of the two
numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not
use the same element twice.

You can return the answer in any order.

〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰
*/

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// const twoSum = (nums, target) => {
//   let answer;
//   nums.forEach((n1, i1) => {
//     'undefined' === typeof answer &&
//       nums.forEach((n2, i2) => {
//         if ('undefined' === typeof answer && i1 !== i2 && target === n1 + n2) {
//           answer = [i1, i2];
//         }
//       });
//   });
//   return answer;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 360 ms, faster than 5.14% of JavaScript online submissions
// Memory Usage: 36.1 MB, less than 13.64% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// const twoSum = (nums, target) =>
//   nums
//     .map((n1, i1) =>
//       nums.reduce((answer, n2, i2) => (i1 !== i2 && target === n1 + n2 ? i2 : answer), undefined),
//     )
//     .reduce(
//       (answer, i2, i1) =>
//         'undefined' === typeof answer && 'undefined' !== typeof i2 ? [i1, i2] : answer,
//       undefined,
//     );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 68 ms, faster than 60.17% of JavaScript online submissions
// Memory Usage: 35.8 MB, less than 16.12% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// const twoSum = (nums, target) => {
//   dict = {};
//   for (let i = 0; i < nums.length; i++) {
//     const need = target - nums[i];
//     if (undefined !== dict[need]) return [dict[need], i];
//     dict[nums[i]] = i;
//   }
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 54.02% of JavaScript online submissions
// Memory Usage: 40 MB, less than 6.20% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// const twoSum = (nums, target) => {
//   const map = new Map([...nums.entries()].map(e => e.reverse()));
//   for (const [i, n] of nums.entries())
//     if (map.has(target - n) && map.get(target - n) !== i)
//       return [i, map.get(target - n)];
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 90.70% of JavaScript online submissions
// Memory Usage: 41.1 MB, less than 28.16% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// const twoSum = (nums, target) =>
//   nums
//     .reduce((acc, curr, idx) => {
//       if (acc.has(target - curr)) {
//         acc.set('res', [idx, acc.get(target - curr)]);
//       }
//       acc.set(curr, idx);
//       return acc;
//     }, new Map())
//     .get('res');

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 90.70% of JavaScript online submissions
// Memory Usage: 38.9 MB, less than 69.50% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// const twoSum = (nums, target) =>
//   nums
//     .reduce(
//       (acc, curr, idx, arr) =>
//         acc.has(target - curr)
//           ? arr.splice(0) && acc.set('res', [idx, acc.get(target - curr)])
//           : acc.set(curr, idx),
//       new Map(),
//     )
//     .get('res');

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 90.70% of JavaScript online submissions
// Memory Usage: 38.8 MB, less than 69.50% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// const twoSum = (nums, target) =>
//   nums.reduce(
//     (acc, curr, idx, arr) =>
//       acc.has(target - curr)
//         ? arr.splice(0) && [idx, acc.get(target - curr)]
//         : acc.set(curr, idx),
//     new Map(),
//   );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 89.82% of JavaScript online submissions
// Memory Usage: 41.2 MB, less than 15.59% of JavaScript online submissions

/**
 * This was produced by GitHub Copilot.
 *
 * @param {[number]} nums
 * @param {[number]} target
 * @return {[number]}
 */
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (map.has(need)) return [map.get(need), i];
    map.set(nums[i], i);
  }
}

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { deepStrictEqual } from 'assert';

deepStrictEqual(
  ...[twoSum([2, 7, 11, 15], 9), [0, 1]].map(a => a.sort((a, b) => a - b)),
);
deepStrictEqual(
  ...[twoSum([15, 11, 7, 2], 9), [2, 3]].map(a => a.sort((a, b) => a - b)),
);
deepStrictEqual(
  ...[twoSum([2, 7], 9), [0, 1]].map(a => a.sort((a, b) => a - b)),
);
deepStrictEqual(
  ...[twoSum([0, 1, 2, 0], 0), [0, 3]].map(a => a.sort((a, b) => a - b)),
);
deepStrictEqual(
  ...[twoSum([3, 2, 4], 6), [1, 2]].map(a => a.sort((a, b) => a - b)),
);
