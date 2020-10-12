// 1608. Special Array With X Elements Greater Than or Equal X
// https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/

/*

You are given an array nums of non-negative integers. nums is considered special
if there exists a number x such that there are exactly x numbers in nums that
are greater than or equal to x.

Notice that x does not have to be an element in nums.

Return x if the array is special, otherwise, return -1. It can be proven that if
nums is special, the value for x is unique.

Constraints
- 1 <= nums.length <= 100
- 0 <= nums[i] <= 1000

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const specialArray = nums => {
//   nums.sort((a, b) => a - b);
//   console.log(nums);
//   for (let i = 0, j = 0; i < nums.length; i++) {
//     while (j < nums[i] - 1) j++;
//     console.log(i);
//     console.log(nums[j]);
//     // console.log(nums[i]);
//     // console.log(j === nums.length - i);
//     if (j === nums.length - i) return j;
//   }
//   return -1;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 88.66% of JavaScript online submissions
// Memory Usage: 38.6 MB, less than 6.19% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const specialArray = nums => {
//   nums.sort((a, b) => a - b);
//   // console.log(nums);
//   for (let i = 0, j = 0; i <= nums[nums.length - 1]; i++) {
//     while (nums[j] < i) j++;
//     // console.log(i);
//     // console.log(nums.length - j);
//     // console.log(nums[j]);
//     if (i === nums.length - j) return i;
//   }
//   return -1;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 72 ms, faster than 94.33% of JavaScript online submissions
// Memory Usage: 38.9 MB, less than 6.19% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const specialArray = nums => {
//   nums.sort((a, b) => a - b);
//   for (let i = 0, j = 0; i <= nums[nums.length - 1]; i++) {
//     while (nums[j] < i) j++;
//     if (i === nums.length - j) return i;
//   }
//   return -1;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 88.02% of JavaScript online submissions
// Memory Usage: 39.1 MB, less than 6.45% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const specialArray = nums => {
//   for (let i = 1, x = 0; i <= nums.length; i++, x = 0) {
//     for (const n of nums) if (i <= n) x++;
//     if (i === x) return i;
//   }
//   return -1;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 88.02% of JavaScript online submissions
// Memory Usage: 38.2 MB, less than 6.45% of JavaScript online submissions

/**
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = nums => {
  outer: for (let i = 1, x = 0; i <= nums.length; i++, x = 0) {
    for (const n of nums)
      if (i <= n) {
        x++;
        if (i < x) continue outer;
      }
    if (i === x) return i;
  }
  return -1;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
// strictEqual(specialArray([3, 5]), 2);
// Explanation: There are 2 values (3 and 5) that are greater than or equal to 2.

// Example 2:
// strictEqual(specialArray([0, 0]), -1);
// Explanation: No numbers fit the criteria for x.
// If x = 0, there should be 0 numbers >= x, but there are 2.
// If x = 1, there should be 1 number >= x, but there are 0.
// If x = 2, there should be 2 numbers >= x, but there are 0.
// x cannot be greater since there are only 2 numbers in nums.

// Example 3:
// strictEqual(specialArray([0, 4, 3, 0, 4]), 3);
// Explanation: There are 3 values that are greater than or equal to 3.

// Example 4:
// strictEqual(specialArray([3, 6, 7, 7, 0]), -1);

strictEqual(specialArray([3, 9, 7, 8, 3, 8, 6, 6]), 6);
