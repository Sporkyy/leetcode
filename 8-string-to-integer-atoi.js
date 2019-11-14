// 8. String to Integer (atoi)
// https://leetcode.com/problems/string-to-integer-atoi/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * Runtime: 88 ms, faster than 25.98% of JavaScript online submissions
//  * Memory Usage: 35.7 MB, less than 100.00% of JavaScript online submissions
//  *
//  * @param {string} str
//  * @return {number}
//  */
// const myAtoi = str => {
//   const int = parseInt(str.match(/^[ ]*[-+]?\d+/));
//   if (isNaN(int)) return 0;
//   return -(2 ** 31) <= int && int <= 2 ** 31 - 1
//     ? int
//     : int <= -(2 ** 31)
//     ? -(2 ** 31)
//     : 2 ** 31 - 1;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * Runtime: 84 ms, faster than 38.00% of JavaScript online submissions
//  * Memory Usage: 35.6 MB, less than 100.00% of JavaScript online submissions
//  *
//  * @param {string} str
//  * @param {number} [int=Number.parseInt(str)]
//  * @return {number}
//  */
// const myAtoi = (str, int = Number.parseInt(str)) =>
//   isNaN(int)
//     ? 0
//     : -(2 ** 31) <= int && int <= 2 ** 31 - 1
//     ? int
//     : int <= -(2 ** 31)
//     ? -(2 ** 31)
//     : 2 ** 31 - 1;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * Runtime: 100 ms, faster than 10.80% of JavaScript online submissions
//  * Memory Usage: 37.8 MB, less than 14.29% of JavaScript online submissions
//  *
//  * @param {string} str
//  * @param {number} [int=Number.parseInt(str)]
//  * @return {number}
//  */
// const myAtoi = str => {
//   let [nums, nonNums] = [[], []];
//   for (const char of [...str]) {
//     if (0 === nums.length + nonNums.length && ' ' === char) continue;
//     if ('0123456789'.includes(char)) {
//       if (
//         (1 === nonNums.length && !'-+'.includes(nonNums[0])) ||
//         1 < nonNums.length
//       )
//         return 0;
//       nums.push(char);
//       continue;
//     } else {
//       if (nums.length) break;
//       nonNums.push(char);
//     }
//   }
//   let num = 0;
//   for (let i = nums.length - 1; 0 <= i; i--)
//     num += nums[nums.length - i - 1] * 10 ** i;
//   if ('-' === nonNums[nonNums.length - 1]) num *= -1;
//   if (num < 0) return Math.max(-(2 ** 31), num);
//   return Math.min(2 ** 31 - 1, num);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Runtime: 84 ms, faster than 39.02% of JavaScript online submissions
 * Memory Usage: 37 MB, less than 14.29% of JavaScript online submissions
 *
 * @param {string} str
 * @param {number} [int=Number.parseInt(str)]
 * @return {number}
 */
const myAtoi = str => {
  let [sign, start, end] = [1, 0];
  while (' ' === str[start]) start++;
  if ('-' === str[start]) {
    sign = -1;
    start++;
  } else if ('+' === str[start]) start++;
  if (47 < str.charCodeAt(start) && str.charCodeAt(start) < 58) {
    end = start;
    while (47 < str.charCodeAt(end) && str.charCodeAt(end) < 58) end++;
  }
  if (start <= end) {
    const num = sign * str.slice(start, end);
    const [min, max] = [-(2 ** 31), 2 ** 31 - 1];
    return Math.max(min, Math.min(max, num));
  }
  return 0;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

// strictEqual(myAtoi('1'), 1);
// strictEqual(myAtoi('10'), 10);
// strictEqual(myAtoi('-1'), -1);
// strictEqual(myAtoi('-10'), -10);
// strictEqual(myAtoi(' 1'), 1);
// strictEqual(myAtoi('1 '), 1);
// strictEqual(myAtoi(' 1 '), 1);
// strictEqual(myAtoi('a1'), 0);
// strictEqual(myAtoi('1b'), 1);
// strictEqual(myAtoi('a1b'), 0);
// strictEqual(myAtoi(' a1'), 0);
// strictEqual(myAtoi('1b '), 1);
// strictEqual(myAtoi(' a1b '), 0);

// // Example 1:
// strictEqual(myAtoi('42'), 42);

// // Example 2:
// strictEqual(myAtoi('   -42'), -42);
// // Explanation: The first non-whitespace character is '-', which is
// //              the minus sign.
// //              Then take as many numerical digits as possible, which gets 42.

// // Example 3:
// strictEqual(myAtoi('4193 with words'), 4193);
// // Explanation: Conversion stops at digit '3' as the next character is not
// //              a numerical digit.

// // Example 4:
// strictEqual(myAtoi('words and 987'), 0);
// // Explanation: The first non-whitespace character is 'w', which is not
// //              a numerical
// //              digit or a +/- sign. Therefore no valid conversion
// //              could be performed.

// // Example 5:
// strictEqual(myAtoi('-91283472332'), -2147483648);
// // Explanation: The number "-91283472332" is out of the range of a 32-bit
// //              signed integer.
// //              Thefore INT_MIN (−231) is returned.

// strictEqual(myAtoi('-2147483648'), -2147483648);

// strictEqual(myAtoi('2147483648'), 2147483647);

// strictEqual(myAtoi('3.14159'), 3);

// strictEqual(myAtoi('   -42'), -42);

// strictEqual(myAtoi('+-2'), 0);

// strictEqual(myAtoi('-   234'), 0);

strictEqual(myAtoi('+1'), 1);
