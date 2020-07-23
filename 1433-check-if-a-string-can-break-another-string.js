// 1433. Check If a String Can Break Another String
// https://leetcode.com/problems/check-if-a-string-can-break-another-string/

/*

Given two strings: s1 and s2 with the same size, check if some permutation of
string s1 can break some permutation of string s2 or vice-versa (in other words
s2 can break s1).

A string x can break string y (both of size n) if x[i] >= y[i] (in alphabetical
order) for all i between 0 and n-1.

Constraints:
- s1.length == n
- s2.length == n
- 1 <= n <= 10^5
- All strings consist of lowercase English letters.

*/

import { ok } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 472 ms, faster than 12.50% of JavaScript online submissions
// Memory Usage: 56.1 MB, less than 14.29% of JavaScript online submissions

// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
// const checkIfCanBreak = (s1, s2) => {
//   s1 = [...s1].sort().join('');
//   s2 = [...s2].sort().join('');
//   let [isXYBroke, isYXBroke] = [true, true];
//   for (let i = 0; i < s1.length; i++) {
//     isXYBroke = isXYBroke && s1[i] <= s2[i];
//     isYXBroke = isYXBroke && s2[i] <= s1[i];
//   }
//   return isXYBroke || isYXBroke;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 260 ms, faster than 73.44% of JavaScript online submissions
// Memory Usage: 50.7 MB, less than 71.43% of JavaScript online submissions

// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
// const checkIfCanBreak = (s1, s2) => {
//   s1 = [...s1].sort();
//   s2 = [...s2].sort();
//   let [isXYBroke, isYXBroke] = [true, true];
//   for (let i = 0; i < s1.length; i++) {
//     isXYBroke = isXYBroke && s1[i] <= s2[i];
//     isYXBroke = isYXBroke && s2[i] <= s1[i];
//   }
//   return isXYBroke || isYXBroke;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 396 ms, faster than 29.69% of JavaScript online submissions
// Memory Usage: 52.5 MB, less than 42.86% of JavaScript online submissions

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkIfCanBreak = (s1, s2) => {
  const a1 = [...s1].sort();
  const a2 = [...s2].sort();
  let [isXYBroke, isYXBroke] = [true, true];
  for (let i = 0; i < a1.length; i++) {
    isXYBroke = isXYBroke && a2[i] <= a1[i];
    isYXBroke = isYXBroke && a1[i] <= a2[i];
  }
  return isXYBroke || isYXBroke;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
// ok(checkIfCanBreak('abc', 'xya'));
// Explanation: "ayx" is a permutation of s2="xya" which can break to string
// "abc" which is a permutation of s1="abc".

// Example 2:
// ok(!checkIfCanBreak('abe', 'acd'));
// Explanation: All permutations for s1="abe" are: "abe", "aeb", "bae", "bea",
// "eab" and "eba" and all permutation for s2="acd" are: "acd", "adc", "cad",
// "cda", "dac" and "dca". However, there is not any permutation from s1 which
// can break some permutation from s2 and vice-versa.

// Example 3:
// ok(checkIfCanBreak('leetcodee', 'interview'));

// ok(checkIfCanBreak('yopumzgd', 'pamntyya'));

// ok(!checkIfCanBreak('ixzhsdka', 'aauramvg'));

ok(!checkIfCanBreak('yf', 'qm'));
