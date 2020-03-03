// 1281. Subtract the Product and Sum of Digits of an Integer
//       https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

/*

Given an integer number n, return the difference between the product of its
digits and the sum of its digits.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 82.72% of JavaScript online submissions
// Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number} n
//  * @return {number}
//  */
// const subtractProductAndSum = n =>
//   [...`${n}`].reduce((acc, curr) => acc * Number(curr), 1) -
//   [...`${n}`].reduce((acc, curr) => acc + Number(curr), 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 48 ms, faster than 94.38% of JavaScript online submissions
// Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = n =>
  [...`${n}`]
    .reduce((acc, curr) => [acc[0] * Number(curr), acc[1] + Number(curr)], [
      1,
      0,
    ])
    .reduce((acc, curr) => acc - curr);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(subtractProductAndSum(234), 15);
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15

// Example 2:
strictEqual(subtractProductAndSum(4421), 21);
// Explanation:
// Product of digits = 4 * 4 * 2 * 1 = 32
// Sum of digits = 4 + 4 + 2 + 1 = 11
// Result = 32 - 11 = 21
