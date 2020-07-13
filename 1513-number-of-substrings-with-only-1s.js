// 1513. Number of Substrings With Only 1s
// https://leetcode.com/problems/number-of-substrings-with-only-1s/

/*

Given a binary string s (a string consisting only of '0' and '1's).

Return the number of substrings with all characters 1's.

Since the answer may be too large, return it modulo 10^9 + 7.

Constraints:
- s[i] == '0' or s[i] == '1'
- 1 <= s.length <= 10^5

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const numSub = s => {
//   const cnts = new Map();
//   for (const { length: len } of s.split('0')) {
//     // console.log(len);
//     cnts.set(len, (cnts.get(len) || 0) + 1);
//   }
//   // console.log(cnts);
//   let res = 0;
//   for (const [n, cnt] of cnts) {
//     // console.log(n);
//     res += cnt * ((n * (n + 1)) / 2);
//   }
//   return res;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 37.7 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} s
 * @return {number}
 */
const numSub = s =>
  s
    .split('0')
    .reduce((cnt, { length: len }) => cnt + (len * (len + 1)) / 2, 0) %
  (10 ** 9 + 7);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 92 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 37.7 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const numSub = s =>
//   s
//     .split(/0+/)
//     .reduce((cnt, { length: len }) => cnt + (len * (len + 1)) / 2, 0) %
//   (10 ** 9 + 7);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(numSub('0110111'), 9);
// Explanation: There are 9 substring in total with only 1's characters.
// "1" -> 5 times.
// "11" -> 3 times.
// "111" -> 1 time.

// Example 2:
strictEqual(numSub('101'), 2);
// Explanation: Substring "1" is shown 2 times in s.

// Example 3:
strictEqual(numSub('111111'), 21);
// Explanation: Each substring contains only 1's characters.

// Example 4:
strictEqual(numSub('000'), 0);

/*

1    = 1
11   = 2 + 1 = 3
111  = 3 + 2 + 1 = 6
1111 = 4 + 3 + 2 + 1 = 10
11111 = 5 + 4 + 3 + 2 + 1 = 15
111111 = 6 + 5 + 4 + 3 + 2 + 1 = 21

*/
