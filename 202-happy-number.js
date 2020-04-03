// 202. Happy Number
// https://leetcode.com/problems/happy-number/

import { ok } from 'assert';

/*

Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any
positive integer, replace the number by the sum of the squares of its digits,
and repeat the process until the number equals 1 (where it will stay), or it
loops endlessly in a cycle which does not include 1. Those numbers for which
this process ends in 1 are happy numbers.

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 124 ms, faster than 8.87% of JavaScript online submissions
// Memory Usage: 38.1 MB, less than 7.69% of JavaScript online submissions

// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// const isHappy = (n, i = 0) => {
//   const digits = [...`${n}`].map(Number);
//   // console.log(digits);
//   const x = digits.reduce((acc, curr) => acc + curr ** 2, 0);
//   // console.log(x);
//   return 1 === x ? true : 999 < i ? false : isHappy(x, i + 1);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 65.98% of JavaScript online submissions
// Memory Usage: 36.8 MB, less than 23.08% of JavaScript online submissions

// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// const isHappy = (n, seen = new Set()) => {
//   n = [...`${n}`].reduce((acc, curr) => acc + curr ** 2, 0);
//   if (seen.has(n)) return false;
//   seen.add(n);
//   return 1 === n ? true : isHappy(n, seen);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 43.09% of JavaScript online submissions
// Memory Usage: 36.8 MB, less than 23.08% of JavaScript online submissions

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n, seen = new Set()) =>
  seen.has(1)
    ? true
    : seen.has(n)
    ? false
    : isHappy(
        [...`${n}`].reduce((acc, curr) => acc + curr ** 2, 0),
        seen.add(n),
      );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example
ok(isHappy(19));
// Explanation:
// 1 ** 2 + 9 ** 2 = 82
// 8 ** 2 + 2 ** 2 = 68
// 6 ** 2 + 8 ** 2 = 100
// 1 ** 2 + 0 ** 2 + 0 ** 2 = 1

ok(!isHappy(11));
// 1 ** 2 + 1 ** 2 = 2
// 2 ** 2 = 4
