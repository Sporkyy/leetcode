// 1422. Maximum Score After Splitting a String
// https://leetcode.com/problems/maximum-score-after-splitting-a-string/

/*

Given a string s of zeros and ones, return the maximum score after splitting the
string into two non-empty substrings (i.e. left substring and right substring).

The score after splitting a string is the number of zeros in the left substring
plus the number of ones in the right substring.

Constraints:
- 2 <= s.length <= 500
- The string s consists of characters '0' and '1' only.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 87.42% of JavaScript online submissions
// Memory Usage: 35.4 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const maxScore = s => {
//   let lScore = 0 == s[0] ? 1 : 0;
//   let rScore = [...s.slice(1)].filter(c => 1 == c).length;
//   // console.log(lScore, rScore);
//   let maxScore = lScore + rScore;
//   for (let i = 1; i < s.length - 1; i++) {
//     // console.log(s[i]);
//     if (0 == s[i]) lScore++;
//     if (1 == s[i]) rScore--;
//     // console.log(lScore, rScore);
//     maxScore = Math.max(lScore + rScore, maxScore);
//   }
//   return maxScore;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 87.42% of JavaScript online submissions
// Memory Usage: 35.2 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const maxScore = s => {
//   let lScore = 0 == s[0] ? 1 : 0;
//   let rScore = s.slice(1).replace(/0/g, '').length;
//   let maxScore = lScore + rScore;
//   for (let i = 1; i < s.length - 1; i++) {
//     0 == s[i] ? lScore++ : rScore--;
//     maxScore = Math.max(lScore + rScore, maxScore);
//   }
//   return maxScore;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 112 ms, faster than 35.48% of JavaScript online submissions
// Memory Usage: 37.1 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const maxScore = s =>
//   Math.max(
//     ...new Array(s.length - 1)
//       .fill()
//       .map(
//         (_, split) =>
//           s.slice(0, split + 1).replace(/1/g, '').length +
//           s.slice(split + 1, s.length).replace(/0/g, '').length,
//       ),
//   );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 124 ms, faster than 25.48% of JavaScript online submissions
// Memory Usage: 37.3 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} s
 * @return {number}
 */
const maxScore = s =>
  [...s].reduce(
    (max, _, split) =>
      split < s.length - 1
        ? Math.max(
            max,
            s.slice(0, split + 1).replace(/1/g, '').length +
              s.slice(split + 1, s.length).replace(/0/g, '').length,
          )
        : max,
    0,
  );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(maxScore('011101'), 5);
// Explanation:
// All possible ways of splitting s into two non-empty substrings are:
// left = "0" and right = "11101", score = 1 + 4 = 5
// left = "01" and right = "1101", score = 1 + 3 = 4
// left = "011" and right = "101", score = 1 + 2 = 3
// left = "0111" and right = "01", score = 1 + 1 = 2
// left = "01110" and right = "1", score = 2 + 1 = 3

// Example 2:
strictEqual(maxScore('00111'), 5);
// Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5

// Example 3:
strictEqual(maxScore('1111'), 3);
