// 1. Two Sum
// https://leetcode.com/problems/two-sum/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

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

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 360 ms, faster than 5.14% of JavaScript online submissions
// for Two Sum.
// Memory Usage: 36.1 MB, less than 13.64% of JavaScript online submissions
// for Two Sum.

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

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 60.17% of JavaScript online submissions
// for Two Sum.
// Memory Usage: 35.8 MB, less than 16.12% of JavaScript online submissions
// for Two Sum.

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

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Runtime: 76 ms, faster than 54.02% of JavaScript online submissions
 * Memory Usage: 40 MB, less than 6.20% of JavaScript online submissions
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const map = new Map([...nums.entries()].map(e => e.reverse()));
  for (const [i, n] of nums.entries())
    if (map.has(target - n) && map.get(target - n) !== i)
      return [i, map.get(target - n)];
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(twoSum([2, 7, 11, 15], 9).sort(), [0, 1].sort());
deepStrictEqual(twoSum([15, 11, 7, 2], 9).sort(), [2, 3].sort());
deepStrictEqual(twoSum([2, 7], 9).sort(), [0, 1].sort());
deepStrictEqual(twoSum([0, 1, 2, 0], 0).sort(), [0, 3].sort());
deepStrictEqual(twoSum([3, 2, 4], 6).sort(), [1, 2].sort());
