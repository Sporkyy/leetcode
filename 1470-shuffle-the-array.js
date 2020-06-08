// 1470. Shuffle the Array
// https://leetcode.com/problems/shuffle-the-array/

/*

Given the array nums consisting of 2n elements in the form
[x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

Constraints:
- 1 <= n <= 500
- nums.length == 2n
- 1 <= nums[i] <= 10^3

*/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 100 ms, faster than 53.00% of JavaScript online submissions
// Memory Usage: 54.3 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @param {number} n
//  * @return {number[]}
//  */
// const shuffle = (nums, n, a = []) =>
//   !nums.length
//     ? a
//     : shuffle(
//         nums,
//         n - 1,
//         a.concat(nums.splice(0, 1)).concat(nums.splice(1 * n - 1, 1)),
//       );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 100 ms, faster than 53.00% of JavaScript online submissions
// Memory Usage: 50.5 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = (nums, n, a = []) =>
  !nums.length
    ? a
    : shuffle(
        nums,
        n - 1,
        a.concat(nums.splice(0, 1), nums.splice(1 * n - 1, 1)),
      );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
deepStrictEqual(shuffle([2, 5, 1, 3, 4, 7], 3), [2, 3, 5, 4, 1, 7]);
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7
// then the answer is [2,3,5,4,1,7].

// Example 2:
deepStrictEqual(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4), [1, 4, 2, 3, 3, 2, 4, 1]);

// Example 3:
deepStrictEqual(shuffle([1, 1, 2, 2], 2), [1, 2, 1, 2]);
