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

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const minimumMoves = s => {
//   let cntMoves = 0;
//   for (let i = 0; i < s.length; i++) {
//     if ('X' === s[i]) {
//       cntMoves++;
//       i += 2;
//     }
//   }
//   return cntMoves;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 128 ms, faster than 5.73% of JavaScript online submissions
// Memory Usage: 40.1 MB, less than 11.89% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const minimumMoves = s => {
//   // console.log(s.match(/(X..|X+)/g));
//   // console.log(
//   //   [...s]
//   //     .reverse()
//   //     .join('')
//   //     .match(/(X..|X+)/g),
//   // );
//   // console.log(s.match(/$(.?X.?)*/) ?? 0);
//   // console.log(s.match(/(.?X.?)*^/) ?? 0);

//   return Math.min(
//     (s.match(/(X..|X+)/g) ?? []).length,
//     (
//       [...s]
//         .reverse()
//         .join('')
//         .match(/(X..|X+)/g) ?? []
//     ).length,
//   );

//   // return s.match(/.?X.?/g) ?? 0;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 72.69% of JavaScript online submissions
// Memory Usage: 39.8 MB, less than 13.66% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const minimumMoves = s => (s.match(/(X..|X+)/g) ?? []).length;

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 72 ms, faster than 85.90% of JavaScript online submissions
// Memory Usage: 40.3 MB, less than 11.45% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const minimumMoves = s => {
//   // console.log([...s.match(/X.?.?/g)].length);
//   // console.log([...s.matchAll('X.?.?')]);
//   // (s.match(/X{,3}/g) ?? []).length;
//   return s.match(/X.?.?/g)?.length ?? 0;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 85 ms, faster than 45.82% of JavaScript online submissions
// Memory Usage: 39.7 MB, less than 13.66% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const minimumMoves = s => s.match(/X.?.?/g)?.length ?? 0;

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 83 ms, faster than 47.58% of JavaScript online submissions
// Memory Usage: 39.2 MB, less than 17.18% of JavaScript online submissions

/**
 * @param {string} s
 * @return {number}
 */
const minimumMoves = s => s.match(/X.{0,2}/g)?.length ?? 0;

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

strictEqual(minimumMoves('OXOOX'), 2);

strictEqual(minimumMoves('OXOX'), 1);
// OXOX
// OOOO

strictEqual(minimumMoves('XXXXX'), 2);

strictEqual(minimumMoves('XXXOOXXX'), 2);
