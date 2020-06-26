// 1480. Running Sum of 1d Array
// https://leetcode.com/problems/running-sum-of-1d-array/

/*

Given an array nums. We define a running sum of an array as runningSum[i] =
sum(nums[0]…nums[i]).

Return the running sum of nums.

Constraints:

- 1 <= nums.length <= 1000
- -10^6 <= nums[i] <= 10^6

*/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 83.90% of JavaScript online submissions
// Memory Usage: 41.3 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// const runningSum = nums =>
//   nums
//     .reduce((acc, curr) => acc.concat([acc[acc.length - 1] + curr]), [0])
//     .slice(1);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 23.85% of JavaScript online submissions
// Memory Usage: 46.6 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// const runningSum = (nums, sums = [nums.shift()]) =>
//   !nums.length
//     ? sums
//     : runningSum(nums, [...sums, sums[sums.length - 1] + nums.shift()]);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 23.85% of JavaScript online submissions
// Memory Usage: 41.5 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums, sums = [nums.shift()]) =>
  !nums.length
    ? sums
    : runningSum(nums, sums.concat([sums[sums.length - 1] + nums.shift()]));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

for (let i = 0; i < 99999; i++) {
  // Example 1:
  deepStrictEqual(runningSum([1, 2, 3, 4]), [1, 3, 6, 10]);
  // Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

  // Example 2:
  deepStrictEqual(runningSum([1, 1, 1, 1, 1]), [1, 2, 3, 4, 5]);
  // Explanation: Running sum is obtained as follows:
  // [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

  // Example 3:
  deepStrictEqual(runningSum([3, 1, 2, 10, 1]), [3, 4, 6, 16, 17]);
}
