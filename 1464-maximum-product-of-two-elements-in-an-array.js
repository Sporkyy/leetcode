// 1464. Maximum Product of Two Elements in an Array
// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

/*

Given the array of integers nums, you will choose two different indices i and j
of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

Constraints:
- 2 <= nums.length <= 500
- 1 <= nums[i] <= 10^3

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 54.20% of JavaScript online submissions
// Memory Usage: 35.8 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = nums =>
  (nums.sort((a, b) => a - b).pop() - 1) * (nums.pop() - 1);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(maxProduct([3, 4, 5, 2]), 12);
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will
// get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 =
// 12.

// Example 2:
strictEqual(maxProduct([1, 5, 4, 5]), 16);
// Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get
// the maximum value of (5-1)*(5-1) = 16.

// Example 3:
strictEqual(maxProduct([3, 7]), 12);

strictEqual(maxProduct([10, 2, 5, 2]), 36);
