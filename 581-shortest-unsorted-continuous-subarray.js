// 581. Shortest Unsorted Continuous Subarray
// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/

/*

Given an integer array, you need to find one continuous subarray that if you
only sort this subarray in ascending order, then the whole array will be sorted
in ascending order, too.

You need to find the shortest such subarray and output its length.

Note:
- Then length of the input array is in range [1, 10,000].
- The input array may contain duplicates, so ascending order here means <=.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const findUnsortedSubarray = nums => {
//   // console.log(nums);
//   let [startI, endI] = [Infinity, -Infinity];
//   for (let i = 0; i < nums.length - 1; i++) {
//     // console.log(nums[i + 1] < nums[i]);
//     if (nums[i + 1] < nums[i]) {
//       [startI, endI] = [Math.min(startI, i), Math.max(endI, i + 1)];
//       while (nums[startI - 1] === nums[startI]) startI--;
//       // console.log(startI, endI);
//     } else if (nums[endI] === nums[i + 1]) endI++;
//   }
//   console.log(startI, endI);
//   // console.log(endI - startI + 1);
//   return Infinity === startI ? 0 : endI - startI + 1;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const findUnsortedSubarray = nums => {
//   let [i, j] = [0, nums.length - 1];
//   while (nums[i] < nums[i + 1]) i++;
//   console.log(i);
//   while (nums[j - 1] < nums[j]) j--;
//   console.log(j);
//   // console.log(i, j);
//   if (0 === j) return 0;
//   return j - i + 1;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 104 ms, faster than 53.74% of JavaScript online submissions
// Memory Usage: 39.4 MB, less than 12.50% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const findUnsortedSubarray = nums =>
//   nums
//     .slice()
//     .sort((a, b) => a - b)
//     .map((n, idx) => (0 === n - nums[idx] ? ' ' : 'x'))
//     .join('')
//     .trim().length;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 104 ms, faster than 53.61% of JavaScript online submissions
// Memory Usage: 41.4 MB, less than 12.50% of JavaScript online submissions

/**
 * @param {number[]} nums
 * @return {number}
 */
const findUnsortedSubarray = nums =>
  nums
    .slice()
    .sort((a, b) => a - b)
    .reduce((acc, curr, idx) => acc + (curr === nums[idx] ? ' ' : 'x'), '')
    .trim().length;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]), 5);
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the
// whole array sorted in ascending order.

strictEqual(findUnsortedSubarray([1, 2, 3, 4]), 0);

strictEqual(findUnsortedSubarray([1, 3, 2, 2, 2]), 4);

strictEqual(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]), 5);

strictEqual(findUnsortedSubarray([2, 3, 3, 2, 4]), 3);

strictEqual(findUnsortedSubarray([1, 2, 4, 5, 3]), 3);
