// 1528. Shuffle String
// https://leetcode.com/problems/shuffle-string/

/*

Given a string s and an integer array indices of the same length.

The string s will be shuffled such that the character at the ith position moves
to indices[i] in the shuffled string.

Return the shuffled string.

Constraints:
- s.length == indices.length == n
- 1 <= n <= 100
- s contains only lower-case English letters.
- 0 <= indices[i] < n
- All values of indices are unique (i.e. indices is a permutation of the
  integers from 0 to n - 1).

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 88 ms, faster than 90.53% of JavaScript online submissions
// Memory Usage: 38.6 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @param {number[]} indices
//  * @return {string}
//  */
// const restoreString = (s, indices) =>
//   [...s]
//     .map((c, i) => [c, i])
//     .sort(([, a], [, b]) => indices[a] - indices[b])
//     .reduce((acc, [c]) => `${acc}${c}`, '');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// /**
//  * @param {string} s
//  * @param {number[]} indices
//  * @return {string}
//  */
// const restoreString = (s, indices) => {
//   let x = new Array(indices.length);
//   for (let i = 0; i < indices.length; i++) x[indices[i]] = s[i];
//   return x.join('');
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 116 ms, faster than 40.83% of JavaScript online submissions
// Memory Usage: 38.3 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = (s, indices) =>
  indices
    .reduce((acc, curr, idx) => {
      acc[curr] = s[idx];
      return acc;
    }, new Array(s.length))
    .join('');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]), 'leetcode');
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

/*

45670213
codeleet
leetcode
01234567

*/

// Example 2:
strictEqual(restoreString('abc', [0, 1, 2]), 'abc');
// Explanation: After shuffling, each character remains in its position.

// Example 3:
strictEqual(restoreString('aiohn', [3, 1, 4, 2, 0]), 'nihao');

// Example 4:
strictEqual(restoreString('aaiougrt', [4, 0, 2, 6, 7, 3, 1, 5]), 'arigatou');

// Example 5:
strictEqual(restoreString('art', [1, 0, 2]), 'rat');
