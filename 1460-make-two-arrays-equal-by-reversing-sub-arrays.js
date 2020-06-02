// 1460. Make Two Arrays Equal by Reversing Sub-arrays
// https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays/

/*

Given two integer arrays of equal length target and arr.

In one step, you can select any non-empty sub-array of arr and reverse it. You
are allowed to make any number of steps.

Return True if you can make arr equal to target, or False otherwise.

Constraints:
- target.length == arr.length
- 1 <= target.length <= 1000
- 1 <= target[i] <= 1000
- 1 <= arr[i] <= 1000

*/

import { ok } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 58.08% of JavaScript online submissions
// Memory Usage: 37.6 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
const canBeEqual = (target, arr) =>
  JSON.stringify(target.slice().sort((a, b) => a - b)) ===
  JSON.stringify(arr.slice().sort((a, b) => a - b));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
ok(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]));
// Explanation: You can follow the next steps to convert arr to target:
// 1- Reverse sub-array [2,4,1], arr becomes [1,4,2,3]
// 2- Reverse sub-array [4,2], arr becomes [1,2,4,3]
// 3- Reverse sub-array [4,3], arr becomes [1,2,3,4]
// There are multiple ways to convert arr to target, this is not the only way to do so.

// Example 2:
ok(canBeEqual([7], [7]));
// Explanation: arr is equal to target without any reverses.

// Example 3:
ok(canBeEqual([1, 12], [12, 1]));

// Example 4:
ok(!canBeEqual([3, 7, 9], [3, 7, 11]));
// Explanation: arr doesn't have value 9 and it can never be converted to target.

// Example 5:
ok(canBeEqual([1, 1, 1, 1, 1], [1, 1, 1, 1, 1]));
