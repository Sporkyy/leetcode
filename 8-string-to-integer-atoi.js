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

/**
 * Runtime: 84 ms, faster than 38.00% of JavaScript online submissions
 * Memory Usage: 35.6 MB, less than 100.00% of JavaScript online submissions
 *
 * @param {string} str
 * @param {number} [int=Number.parseInt(str)]
 * @return {number}
 */
const myAtoi = (str, int = Number.parseInt(str)) =>
  isNaN(int)
    ? 0
    : -(2 ** 31) <= int && int <= 2 ** 31 - 1
    ? int
    : int <= -(2 ** 31)
    ? -(2 ** 31)
    : 2 ** 31 - 1;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

// Example 1:
strictEqual(myAtoi('42'), 42);

// Example 2:
strictEqual(myAtoi('   -42'), -42);
// Explanation: The first non-whitespace character is '-', which is
//              the minus sign.
//              Then take as many numerical digits as possible, which gets 42.

// Example 3:
strictEqual(myAtoi('4193 with words'), 4193);
// Explanation: Conversion stops at digit '3' as the next character is not
//              a numerical digit.

// Example 4:
strictEqual(myAtoi('words and 987'), 0);
// Explanation: The first non-whitespace character is 'w', which is not
//              a numerical
//              digit or a +/- sign. Therefore no valid conversion
//              could be performed.

// Example 5:
strictEqual(myAtoi('-91283472332'), -2147483648);
// Explanation: The number "-91283472332" is out of the range of a 32-bit
//              signed integer.
//              Thefore INT_MIN (−231) is returned.

strictEqual(myAtoi('-2147483648'), -2147483648);

strictEqual(myAtoi('2147483648'), 2147483647);
