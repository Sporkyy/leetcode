// 2027. Minimum Moves to Convert String
// https://leetcode.com/problems/minimum-moves-to-convert-string/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

/*

You are given a string s consisting of n characters which are either `'X'` or
`'O'`.

A **move** is defined as selecting **three consecutive characters** of `s` and
converting them to `'O'`. Note that if a move is applied to the character `'O'`,
it will stay the **same**.

Return the **minimum** number of moves required so that all the characters of
`s` *are converted* to `'O'`.

## Constraints

- `3 <= s.length <= 1000`
- `s[i]` is either `'X'` or `'O'`.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 72 ms, faster than 85.90% of JavaScript online submissions
// Memory Usage: 38 MB, less than 98.68% of JavaScript online submissions

/**
 * @param {string} s
 * @return {number}
 */
const minimumMoves = s => {
  let cntMoves = 0;
  for (let i = 0; i < s.length; i++) {
    if ('X' === s[i]) {
      cntMoves++;
      i += 2;
    }
  }
  return cntMoves;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// ## Example 1
strictEqual(minimumMoves('XXX'), 1);
// Explanation: XXX -> OOO
// We select all the 3 characters and convert them in one move.

// ## Example 2
strictEqual(minimumMoves('XXOX'), 2);
// Explanation: XXOX -> OOOX -> OOOO
// - We select the first 3 characters in the first move, and convert them to
//   'O'.
// - Then we select the last 3 characters and convert them so that the final
//   string contains all 'O's.

// ## Example 3
strictEqual(minimumMoves('OOOO'), 0);
// Explanation: There are no 'X's in s to convert.

// strictEqual(minimumMoves('OXOOX'), 2);

strictEqual(minimumMoves('OXOX'), 1);
// OXOX
// XXOO
