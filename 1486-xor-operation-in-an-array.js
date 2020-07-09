// 1486. XOR Operation in an Array
// https://leetcode.com/problems/xor-operation-in-an-array/

/*

Given an integer n and an integer start.

Define an array nums where nums[i] = start + 2*i (0-indexed)
and n == nums.length.

Return the bitwise XOR of all elements of nums.

Constraints:
- 1 <= n <= 1000
- 0 <= start <= 1000
- n == nums.length

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 91.10% of JavaScript online submissions
// Memory Usage: 33.5 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = (n, start) =>
  new Array(n)
    .fill()
    .map((_, i) => start + 2 * i)
    .reduce((acc, curr) => acc ^ curr);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(xorOperation(5, 0), 8);
// Explanation: Array nums is equal to [0, 2, 4, 6, 8]
//              where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
// Where "^" corresponds to bitwise XOR operator.

// Example 2:
strictEqual(xorOperation(4, 3), 8);
// Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.

// Example 3:
strictEqual(xorOperation(1, 7), 7);

// Example 4:
strictEqual(xorOperation(10, 5), 2);
