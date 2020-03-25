// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/

/*

Given an integer array nums, find the contiguous subarray (containing at least
one number) which has the largest sum and return its sum.

Follow up:
If you have figured out the O(n) solution, try coding another solution using the
divide and conquer approach, which is more subtle.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Memory error

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const maxSubArray = (nums, running = 0, max = -Infinity) => {
//   // console.log(nums);
//   // console.log(running);
//   // console.log(max);
//   return !nums.length
//     ? max
//     : maxSubArray(
//         nums.slice(1),
//         Math.max(nums[0], running + nums[0]),
//         Math.max(max, running + nums[0], nums[0]),
//       );
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 86.09% of JavaScript online submissions
// Memory Usage: 37.7 MB, less than 5.55% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const maxSubArray = nums =>
//   nums.reduce(
//     ([running, max], curr) => [
//       Math.max(curr, running + curr),
//       Math.max(curr, running + curr, max),
//     ],
//     [0, -Infinity],
//   )[1];

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 67.95% of JavaScript online submissions
// Memory Usage: 38 MB, less than 5.55% of JavaScript online submissions

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums =>
  nums.reduce(
    ([localMax, globalMax], curr) => [
      Math.max(curr, localMax + curr),
      Math.max(curr, localMax + curr, globalMax),
    ],
    [-Infinity, -Infinity],
  )[1];

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 67.95% of JavaScript online submissions
// Memory Usage: 36.2 MB, less than 5.55% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const maxSubArray = nums =>
//   nums.slice(1).reduce(
//     ({ localMax, globalMax }, curr) => ({
//       localMax: Math.max(curr, localMax + curr),
//       globalMax: Math.max(curr, localMax + curr, globalMax),
//     }),
//     { localMax: nums[0], globalMax: nums[0] },
//   ).globalMax;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 168 ms, faster than 11.98% of JavaScript online submissions
// Memory Usage: 64.9 MB, less than 5.55% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const maxSubArray = nums =>
//   Math.max(
//     ...nums.reduce(
//       (acc, curr) => acc.concat([Math.max(curr, acc[acc.length - 1] + curr)]),
//       [-Infinity],
//     ),
//   );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example:
strictEqual(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
// Explanation: [4,-1,2,1] has the largest sum = 6.

strictEqual(maxSubArray([-2, 1]), 1);
