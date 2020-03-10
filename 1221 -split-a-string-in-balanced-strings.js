// 1221. Split a String in Balanced Strings
// https://leetcode.com/problems/split-a-string-in-balanced-strings/

/*

Balanced strings are those who have equal quantity of 'L' and 'R' characters.

Given a balanced string s split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings.

Constraints:

1 <= s.length <= 1000 s[i] = 'L' or 'R'

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 70.62% of JavaScript online submissions
// Memory Usage: 34.2 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const balancedStringSplit = s => {
//   // console.log(s);
//   let cnt = 0;
//   for (let i = 0, d = 0; i < s.length; i++) {
//     d += 'R' === s[i] ? -1 : 1;
//     // console.log(d);
//     if (0 === d) cnt++;
//   }
//   return cnt;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const balancedStringSplit = s => {
//   console.log(
//     [...s].reduce(
//       (acc, curr) => [
//         acc[0] + 'L' === curr ? 1 : 0,
//         acc[1] + 'R' === curr ? 1 : 0,
//         0 < acc[0] && 0 < acc[1] && acc[0] === acc[1]
//           ? acc[2].concat([curr])
//           : acc[2][acc[2].length - 1].concat([curr]),
//       ],
//       [0, 0, [[]]],
//     ),
//   );
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 46.54% of JavaScript online submissions
// Memory Usage: 35.2 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = (s, l = 0, r = 0, cnt = 0) =>
  !s.length
    ? cnt
    : balancedStringSplit(
        s.slice(1),
        l + +('L' === s[0]),
        r + +('R' === s[0]),
        cnt + +(l === r),
      );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(balancedStringSplit('RLRRLLRLRL'), 4);
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring
// contains same number of 'L' and 'R'.

// Example 2:
strictEqual(balancedStringSplit('RLLLLRRRLR'), 3);
// Explanation: s can be split into "RL", "LLLRRR", "LR", each substring
// contains same number of 'L' and 'R'.

// Example 3:
strictEqual(balancedStringSplit('LLLLRRRR'), 1);
// Explanation: s can be split into "LLLLRRRR".

// Example 4:
strictEqual(balancedStringSplit('RLRRRLLRLL'), 2);
// Explanation: s can be split into "RL", "RRRLLRLL", since each substring
// contains an equal number of 'L' and 'R'
