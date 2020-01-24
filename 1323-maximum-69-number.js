// 1323. Maximum 69 Number
// https://leetcode.com/problems/maximum-69-number/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 108 ms, faster than 5.15% of JavaScript online submissions
// Memory Usage: 33.5 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number} num
//  * @return {number}
//  */
// const maximum69Number = num => {
//   const s = '' + num;
//   const first6 = s.indexOf(6);
//   // console.log(first6);
//   if (first6 < 0) return num;
//   // console.log(num + 3 * 10 ** (s.length - 1 - first6));
//   return num + 3 * 10 ** (s.length - 1 - first6);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 96 ms, faster than 11.86% of JavaScript online submissions
// Memory Usage: 33.4 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number = num => {
  let x = 10 ** Math.trunc(Math.log10(Math.abs(num)));
  while (0 < x) {
    if (num % (x * 10) < 9 * x) return num + 3 * x;
    x = Math.trunc(x / 10);
  }
  return num;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 20.04% of JavaScript online submissions
// Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number} num
//  * @return {number}
//  */
// const maximum69Number = num => +('' + num).replace('6', '9');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 22.70% of JavaScript online submissions
// Memory Usage: 33.5 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number = num => +('' + num).replace(6, 9);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(maximum69Number(9669), 9969);

// Explanation:
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.

strictEqual(maximum69Number(9996), 9999);

// Explanation: Changing the last digit 6 to 9 results in the maximum number.

strictEqual(maximum69Number(9999), 9999);

// Explanation: It is better not to apply any change.
