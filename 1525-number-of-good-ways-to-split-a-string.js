// 1525. Number of Good Ways to Split a String
// https://leetcode.com/problems/number-of-good-ways-to-split-a-string/

/*

You are given a string s, a split is called good if you can split s into 2
non-empty strings p and q where its concatenation is equal to s and the number
of distinct letters in p and q are the same.

Return the number of good splits you can make in s.

Constraints:
- s contains only lowercase English letters.
- 1 <= s.length <= 10^5

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Time Limit Exceeded

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const numSplits = s =>
//   [...s].reduce(
//     (acc, _, idx, arr) =>
//       idx === arr.length - 1 ||
//       new Set(arr.slice(0, idx + 1)).size !== new Set(arr.slice(idx + 1)).size
//         ? acc
//         : acc + 1,
//     0,
//   );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 128 ms, faster than 71.15% of JavaScript online submissions
// Memory Usage: 42.8 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const numSplits = s => {
//   const fwd = new Array(s.length - 1);
//   const rev = new Array(s.length - 1);
//   const sFwd = new Set();
//   const sRev = new Set();
//   for (let i = 0; i < s.length - 1; i++) {
//     // console.log(s[i], s[s.length - i - 1]);
//     sFwd.add(s[i]);
//     sRev.add(s[s.length - 1 - i]);
//     fwd[i] = sFwd.size;
//     rev[s.length - 2 - i] = sRev.size;
//   }
//   // console.log(fwd);
//   // console.log(rev);
//   let res = 0;
//   for (let i = 0; i < fwd.length; i++) {
//     // console.log(fwd[i], rev[i]);
//     if (fwd[i] === rev[i]) res++;
//   }
//   return res;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 172 ms, faster than 50.00% of JavaScript online submissions
// Memory Usage: 45.6 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const numSplits = s => {
//   const [fwd, rev] = [new Array(s.length - 1), new Array(s.length - 1)];
//   const [sFwd, sRev] = [new Set(), new Set()];
//   for (let i = 0; i < s.length - 1; i++)
//     [fwd[i], rev[s.length - 2 - i]] = [
//       sFwd.add(s[i]).size,
//       sRev.add(s[s.length - 1 - i]).size,
//     ];
//   let res = 0;
//   for (let i = 0; i < fwd.length; i++) if (fwd[i] === rev[i]) res++;
//   return res;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 112 ms, faster than 84.62% of JavaScript online submissions
// Memory Usage: 44.8 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} s
 * @return {number}
 */
const numSplits = s => {
  const arr = new Array(s.length - 1).fill(0);
  const [setLeft, setRight] = [new Set(), new Set()];
  for (let i = 0; i < s.length - 1; i++) {
    arr[i] += setLeft.add(s[i]).size;
    arr[s.length - 2 - i] -= setRight.add(s[s.length - 1 - i]).size;
  }
  return arr.filter(n => 0 === n).length;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(numSplits('aacaba'), 2);
// Explanation:
// - There are 5 ways to split "aacaba" and 2 of them are good.
// - ("a", "acaba") Left string and right string contains 1 and 3 different
//   letters respectively.
// - ("aa", "caba") Left string and right string contains 1 and 3 different
//   letters respectively.
// - ("aac", "aba") Left string and right string contains 2 and 2 different
//   letters respectively (good split).
// - ("aaca", "ba") Left string and right string contains 2 and 2 different
//   letters respectively (good split).
// - ("aacab", "a") Left string and right string contains 3 and 1 different
//   letters respectively.

/*

aacaba
112233
------
333221

*/

// Example 2:
strictEqual(numSplits('abcd'), 1);
// Explanation: Split the string as follows ("ab", "cd").

// Example 3:
strictEqual(numSplits('aaaaa'), 4);
// Explanation: All possible splits are good.

// Example 4:
strictEqual(numSplits('acbadbaada'), 2);
