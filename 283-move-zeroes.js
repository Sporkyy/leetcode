// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/

import { deepStrictEqual } from 'assert';

/*

Given an array nums, write a function to move all 0's to the end of it while
maintaining the relative order of the non-zero elements.

Note:
- You must do this in-place without making a copy of the array.
- Minimize the total number of operations.

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 164 ms, faster than 5.05% of JavaScript online submissions
// Memory Usage: 36.7 MB, less than 6.38% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// const moveZeroes = (nums) => {
//   for (let i = nums.length - 1; 0 <= i; i--)
//     if (0 === nums[i])
//       for (let j = i; j < nums.length - 1; j++)
//         [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 172 ms, faster than 5.05% of JavaScript online submissions
// Memory Usage: 36.3 MB, less than 17.02% of JavaScript online submissions

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let zeroCnt = 0;
  for (let i = nums.length - 1; 0 <= i; i--)
    if (0 === nums[i]) {
      zeroCnt++;
      for (let j = i; j < nums.length - zeroCnt; j++)
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
    }
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example:
const vals = [0, 1, 0, 3, 12];
moveZeroes(vals);
deepStrictEqual(vals, [1, 3, 12, 0, 0]);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
