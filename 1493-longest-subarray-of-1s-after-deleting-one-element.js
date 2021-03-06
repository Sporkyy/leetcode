// 1493. Longest Subarray of 1's After Deleting One Element
// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/

/*

Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the
resulting array.

Return 0 if there is no such subarray.

Constraints:
- 1 <= nums.length <= 10^5
- nums[i] is either 0 or 1.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const longestSubarray = nums => {
//   const longest = [-Infinity, -Infinity];
//   const current = [-Infinity, -Infinity];
//   for (let i = 0, run = 0; i < nums.length; i++) {
//     if (0 === nums[i]) {
//       run = 0;
//       continue;
//     }
//     run++;
//     if (current[0] < run) {
//       current[0] = current[1];
//       current[1] = run;
//     }
//     if (longest[0] + longest[1] < current[0] + current[1]) longest = current;
//   }
//   return longest[0] + longest[1];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 67.83% of JavaScript online submissions
// Memory Usage: 40.7 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const longestSubarray = nums => {
//   let [curr, prev, longest] = [0, 0, 0];
//   for (let i = 0, run = 0; i < nums.length; i++) {
//     if (0 === nums[i] && curr === 0) prev = 0;
//     else if (0 === nums[i]) [curr, prev] = [0, curr];
//     else curr++;
//     longest = Math.max(curr + prev, longest);
//   }
//   if (0 === longest) return 0;
//   if (nums.length === longest) longest--;
//   return longest;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 100 ms, faster than 46.96% of JavaScript online submissions
// Memory Usage: 41.4 MB, less than 50.00% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const longestSubarray = nums => {
//   let [cRun, pRun, lRun] = [0, 0, 0];
//   for (const num of nums)
//     if (0 === num) [cRun, pRun] = [0, cRun];
//     else cRun++, (lRun = Math.max(cRun + pRun, lRun));
//   return 0 === lRun ? 0 : cRun === nums.length ? lRun - 1 : lRun;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 67.83% of JavaScript online submissions
// Memory Usage: 42.5 MB, less than 50.00% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const longestSubarray = nums => {
//   let [cRun, pRun, lRun] = [0, 0, 0];
//   for (const num of nums)
//     if (0 === num) [cRun, pRun] = [0, cRun];
//     else cRun++, (lRun = Math.max(cRun + pRun, lRun));
//   return cRun === nums.length ? lRun - 1 : lRun;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 64.80% of JavaScript online submissions
// Memory Usage: 43.4 MB, less than 50.00% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const longestSubarray = nums => {
//   let [pRun, cRun, lRun] = [0, 0, 0];
//   for (const num of nums)
//     if (num) [cRun, lRun] = [cRun + 1, Math.max(lRun, pRun + cRun + 1)];
//     else [pRun, cRun] = [cRun, 0];
//   return Math.min(nums.length - 1, lRun);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// OOM error on Leetcode

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const longestSubarray = (nums, zCnt = 0, cRun = 0, pRun = 0, lRun = 0) =>
//   0 === nums.length
//     ? lRun - (0 === zCnt ? 1 : 0)
//     : 0 === nums.pop()
//     ? longestSubarray(nums, zCnt + 1, 0, cRun, lRun)
//     : longestSubarray(nums, zCnt, ++cRun, pRun, Math.max(cRun + pRun, lRun));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 136 ms, faster than 19.20% of JavaScript online submissions
// Memory Usage: 46.3 MB, less than 50.00% of JavaScript online submissions

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = nums =>
  Math.min(
    nums.length - 1,
    Math.max(
      ...nums.reduce(
        ([pRun, cRun, lRun], curr) =>
          curr
            ? [pRun, cRun + 1, Math.max(lRun, pRun + cRun + 1)]
            : [cRun, 0, lRun],
        [0, 0, 0],
      ),
    ),
  );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1: [2, 1, 3]
strictEqual(longestSubarray([1, 1, 0, 1]), 3);
// Explanation: After deleting the number in position 2, [1,1,1] contains 3
// numbers with value of 1's.

// Example 2: [0, 3, 5]
strictEqual(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]), 5);
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1]
// longest subarray with value of 1's is [1,1,1,1,1].

// Example 4: [2, 0, 4]
strictEqual(longestSubarray([1, 1, 0, 0, 1, 1, 1, 0, 1]), 4);

// Example 5: [0, 0, 0]
strictEqual(longestSubarray([0, 0, 0]), 0);

// 0, 1, 1
strictEqual(longestSubarray([1, 0]), 1);

// 1, 0, 1
strictEqual(longestSubarray([0, 1]), 1);

// 0, 1, 1
strictEqual(longestSubarray([0, 1, 0]), 1);

// Example 3: [3, 0, 3]
strictEqual(longestSubarray([1, 1, 1]), 2);
// Explanation: You must delete one element.

// 2, 0, 2
strictEqual(longestSubarray([1, 1]), 1);

// 2, 0, 2
strictEqual(longestSubarray([1, 1, 0, 0, 1, 0, 1, 0, 0, 1]), 2);

// 1, 0, 1
strictEqual(longestSubarray([1, 0, 0, 1]), 1);

// 1, 0, 1
strictEqual(longestSubarray([1, 0, 0, 1, 0]), 1);

// 1, 0, 1
strictEqual(longestSubarray([1, 0, 0, 1, 0, 0]), 1);

// 1, 0, 1
strictEqual(longestSubarray([1, 0, 0, 0, 0]), 1);

// 0, 0, 2
strictEqual(longestSubarray([0, 0, 1, 1]), 2);
