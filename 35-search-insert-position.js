// 35. Search Insert Position
// https://leetcode.com/problems/search-insert-position/

/*

Given a sorted array and a target value, return the index if the target is
found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 84 ms, faster than 34.97% of JavaScript online submissions
// Memory Usage: 36.4 MB, less than 59.90% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// const searchInsert = (nums, target) => {
//   let idxOfLastSmaller;
//   for (let i = 0; i < nums.length; i++)
//     if (nums[i] === target) return i;
//     else if (nums[i] < target) idxOfLastSmaller = i + 1;
//   return idxOfLastSmaller || 0;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 80 ms, faster than 44.82% of JavaScript online submissions
// Memory Usage: 36.8 MB, less than 36.09% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// const searchInsert = (nums, target) => {
//   let idxOfLastSmaller = 0;
//   for (let i = 0; i < nums.length; i++)
//     if (nums[i] === target || target < nums[i]) return i;
//     else if (nums[i] < target) idxOfLastSmaller = i + 1;
//   return idxOfLastSmaller;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 100 ms, faster than 16.14% of JavaScript online submissions
// Memory Usage: 36.6 MB, less than 51.39% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// const searchInsert = (nums, target) =>
//   (i => {
//     while (nums[i] < target) i++;
//     return i;
//   })(0);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 64 ms, faster than 96.51% of JavaScript online submissions
// Memory Usage: 36.7 MB, less than 47.17% of JavaScript online submissions

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  const incUntil = i => {
    while (nums[i] < target) i++;
    return i;
  };
  return incUntil(0);
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 108 ms, faster than 10.51% of JavaScript online submissions
// Memory Usage: 37.4 MB, less than 5.11% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// const searchInsert = (nums, target) => {
//   const inc = i => (nums[i] < target ? inc(i + 1) : i);
//   return inc(0);
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 80 ms, faster than 44.82% of JavaScript online submissions
// Memory Usage: 37 MB, less than 15.96% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// const searchInsert = (
//   nums,
//   target,
//   f = (i = 0) => {
//     while (nums[i] < target) i++;
//     return i;
//   },
// ) => f();

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(searchInsert([1, 3, 5, 6], 5), 2);

// Example 2:
strictEqual(searchInsert([1, 3, 5, 6], 2), 1);

// Example 3:
strictEqual(searchInsert([1, 3, 5, 6], 7), 4);

// Example 4:
strictEqual(searchInsert([1, 3, 5, 6], 0), 0);

strictEqual(searchInsert([-1, 3, 5, 6], 0), 1);

strictEqual(searchInsert([-3, -1], -2), 1);
