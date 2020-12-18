/*

# 1684. Count the Number of Consistent Strings
## https://leetcode.com/problems/count-the-number-of-consistent-strings/

You are given a string allowed consisting of distinct characters and an array of
strings words. A string is consistent if all characters in the string appear in
the string allowed.

Return the number of consistent strings in the array words.

## Constraints:
- 1 <= words.length <= 104
- 1 <= allowed.length <= 26
- 1 <= words[i].length <= 10
- The characters in allowed are distinct.
- words[i] and allowed contain only lowercase English letters.

〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

*/

// Runtime: 160 ms, faster than 18.82% of JavaScript online submissions
// Memory Usage: 52.2 MB, less than 14.02% of JavaScript online submissions

// /**
//  * @param {string} allowed
//  * @param {string[]} words
//  * @return {number}
//  */
// const countConsistentStrings = (allowed, words) =>
//   (allowedSet =>
//     words.reduce(
//       (acc, curr) =>
//         acc + [...new Set([...curr])].every(char => allowedSet.has(char)),
//       0,
//     ))(new Set([...allowed]));

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 116 ms, faster than 75.65% of JavaScript online submissions
// Memory Usage: 52.2 MB, less than 14.02% of JavaScript online submissions

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = (allowed, words) =>
  (allowedSet =>
    words.reduce(
      (acc, curr) => acc + [...curr].every(char => allowedSet.has(char)),
      0,
    ))(new Set([...allowed]));

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 108 ms, faster than 93.73% of JavaScript online submissions
// Memory Usage: 47.8 MB, less than 78.60% of JavaScript online submissions

// /**
//  * @param {string} allowed
//  * @param {string[]} words
//  * @return {number}
//  */
// const countConsistentStrings = (allowed, words) => {
//   const allowedSet = new Set([...allowed]);
//   let cntConsistent = 0;
//   outer: for (const word of words) {
//     for (const char of word) if (!allowedSet.has(char)) continue outer;
//     cntConsistent++;
//   }
//   return cntConsistent;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(
  countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab']),
  2,
);
// Explanation: Strings "aaab" and "baa" are consistent since they only contain
// characters 'a' and 'b'.

// Example 2:
strictEqual(
  countConsistentStrings('abc', ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc']),
  7,
);
// Explanation: All strings are consistent.

// Example 3:
strictEqual(
  countConsistentStrings('cad', [
    'cc',
    'acd',
    'b',
    'ba',
    'bac',
    'bad',
    'ac',
    'd',
  ]),
  4,
);
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
