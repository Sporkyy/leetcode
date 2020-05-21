// 1403. Minimum Subsequence in Non-Increasing Order
// https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/

/*

Given the array nums, obtain a subsequence of the array whose sum of elements is
strictly greater than the sum of the non included elements in such subsequence.

If there are multiple solutions, return the subsequence with minimum size and if
there still exist multiple solutions, return the subsequence with the maximum
total sum of all its elements. A subsequence of an array can be obtained by
erasing some (possibly zero) elements from the array.

Note that the solution with the given constraints is guaranteed to be unique.
Also return the answer sorted in non-increasing order.

Constraints:
- 1 <= nums.length <= 500
- 1 <= nums[i] <= 100

*/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 96 ms, faster than 35.65% of JavaScript online submissions
// Memory Usage: 35.6 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// const minSubsequence = nums => {
//   nums.sort((a, b) => a - b);
//   // console.log(nums);
//   let sum = nums.reduce((acc, curr) => acc + curr);
//   // console.log(sum);
//   let subSum = 0;
//   const sub = [];
//   while (subSum <= sum) {
//     const n = nums.pop();
//     sub.push(n);
//     (subSum += n), (sum -= n);
//   }
//   // console.log(sub);
//   return sub;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 96 ms, faster than 35.65% of JavaScript online submissions
// Memory Usage: 35.6 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// const minSubsequence = nums => {
//   nums.sort((a, b) => a - b);
//   let [sum, subSum] = [nums.reduce((acc, curr) => acc + curr), 0];
//   const sub = [];
//   while (subSum <= sum) {
//     const n = nums.pop();
//     sub.push(n), (subSum += n), (sum -= n);
//   }
//   return sub;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const minSubsequence = nums => {
  nums.sort((a, b) => a - b);
  let [sum, subSum] = [nums.reduce((acc, curr) => acc + curr), 0];
  const sub = [];
  while (subSum <= sum) {
    const n = nums.pop();
    sub.push(n), (subSum += n), (sum -= n);
  }
  return sub;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
// deepStrictEqual(minSubsequence([4, 3, 10, 9, 8]), [10, 9]);
// Explanation: The subsequences [10,9] and [10,8] are minimal such that the sum
// of their elements is strictly greater than the sum of elements not included,
// however, the subsequence [10,9] has the maximum total sum of its elements.

// Example 2:
deepStrictEqual(minSubsequence([4, 4, 7, 6, 7]), [7, 7, 6]);
// Explanation: The subsequence [7,7] has the sum of its elements equal to 14
// which is not strictly greater than the sum of elements not included (14 = 4 +
// 4 + 6). Therefore, the subsequence [7,6,7] is the minimal satisfying the
// conditions. Note the subsequence has to returned in non-decreasing order.

// Example 3:
deepStrictEqual(minSubsequence([6]), [6]);
