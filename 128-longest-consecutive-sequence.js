// 128. Longest Consecutive Sequence
// https://leetcode.com/problems/longest-consecutive-sequence/

/*

Given an unsorted array of integers nums, return the length of the longest
consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

## Constraints
- `0 <= nums.length <= 105`
- `-109 <= nums[i] <= 109`

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 678 ms, faster than 19.52% of JavaScript online submissions
// Memory Usage: 57.2 MB, less than 71.64% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const longestConsecutive = nums => {
//   const set = new Set(nums);
//   let longest = 0;
//   for (const num of nums) {
//     if (!set.has(num - 1)) {
//       let current = num;
//       while (set.has(current)) {
//         current += 1;
//       }
//       longest = Math.max(longest, current - num);
//     }
//   }
//   return longest;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const longestConsecutive = nums =>
//   ((set, longest) => {
//     for (const num of nums) {
//       if (!set.has(num - 1)) {
//         let current = num;
//         while (set.has(current)) current += 1;
//         longest = Math.max(longest, current - num);
//       }
//     }
//     return longest;
//   })(new Set(nums), 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 907 ms, faster than 5.02% of JavaScript online submissions
// Memory Usage: 58.2 MB, less than 41.37% of JavaScript online submissions

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = nums =>
  (set =>
    nums.reduce((longest, num, idx) => {
      if (!set.has(num - 1)) while (set.has(num)) num += 1;
      return Math.max(longest, num - nums[idx]);
    }, 0))(new Set(nums));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

// Example 1:
strictEqual(longestConsecutive([100, 4, 200, 1, 3, 2]), 4);
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4].
// Therefore its length is 4.

// Example 2:
strictEqual(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9);
