// 1508. Range Sum of Sorted Subarray Sums
// https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/

/*

Given the array nums consisting of n positive integers. You computed the sum of
all non-empty continous subarrays from the array and then sort them in
non-decreasing order, creating a new array of n * (n + 1) / 2 numbers.

Return the sum of the numbers from index left to index right (indexed from 1),
inclusive, in the new array. Since the answer can be a huge number return it
modulo 10^9 + 7.

Constraints:
- 1 <= nums.length <= 10^3
- nums.length == n
- 1 <= nums[i] <= 100
- 1 <= left <= right <= n * (n + 1) / 2

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 516 ms, faster than 21.70% of JavaScript online submissions
// Memory Usage: 75.9 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const rangeSum = (nums, n, left, right) => {
  for (let i = 0, sum = nums[i]; i < n; i++, sum = nums[i])
    for (let j = i + 1; j < n; j++) nums.push((sum += nums[j]));
  // console.log(nums);
  nums.sort((a, b) => a - b);
  // console.log(nums);
  // console.log(nums.slice(left - 1, right));
  return (
    nums.slice(left - 1, right).reduce((acc, curr) => acc + curr) %
    (10 ** 9 + 7)
  );
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(rangeSum([1, 2, 3, 4], 4, 1, 5), 13);
// Explanation: All subarray sums are 1, 3, 6, 10, 2, 5, 9, 3, 7, 4. After
// sorting them in non-decreasing order we have the new array [1, 2, 3, 3, 4, 5,
// 6, 7, 9, 10]. The sum of the numbers from index le = 1 to ri = 5 is 1 + 2 + 3
// + 3 + 4 = 13.

// Example 2:
strictEqual(rangeSum([1, 2, 3, 4], 4, 3, 4), 6);
// Explanation: The given array is the same as example 1. We have the new array
// [1, 2, 3, 3, 4, 5, 6, 7, 9, 10]. The sum of the numbers from index le = 3 to
// ri = 4 is 3 + 3 = 6.

// Example 3:
strictEqual(rangeSum([1, 2, 3, 4], 4, 1, 10), 50);
