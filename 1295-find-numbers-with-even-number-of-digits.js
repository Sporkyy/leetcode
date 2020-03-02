// 1295. Find Numbers with Even Number of Digits
// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

/*

Given an array nums of integers, return how many of them contain an even number
of digits.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 60.98% of JavaScript online submissions
// Memory Usage: 34.4 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = nums =>
  nums.filter(n =>
    10 ** 5 <= n
      ? true
      : 10 ** 4 <= n
      ? false
      : 10 ** 3 <= n
      ? true
      : 10 ** 2 <= n
      ? false
      : 10 <= n
      ? true
      : false,
  ).length;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(findNumbers([12, 345, 2, 6, 7896]), 2);
// Explanation:
// 12 contains 2 digits (even number of digits).
// 345 contains 3 digits (odd number of digits).
// 2 contains 1 digit (odd number of digits).
// 6 contains 1 digit (odd number of digits).
// 7896 contains 4 digits (even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.

// Example 2:
strictEqual(findNumbers([555, 901, 482, 1771]), 1);
// Explanation:
// Only 1771 contains an even number of digits.
