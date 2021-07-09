// 806. Number of Lines To Write String
// https://leetcode.com/problems/number-of-lines-to-write-string/

/*

We are to write the letters of a given string S, from left to right into lines.
Each line has maximum width 100 units, and if writing a letter would cause
the width of the line to exceed 100 units, it is written on the next line.
We are given an array widths, an array where widths[0] is the width of
'a', widths[1] is the width of 'b', ..., and widths[25] is the width of 'z'.

Now answer two questions: how many lines have at least one character from S,
and what is the width used by the last such line? Return your answer as an
integer list of length 2.

*/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 50.69% of JavaScript online submissions
// Memory Usage: 35 MB, less than 28.57% of JavaScript online submissions

// /**
//  * @param {number[]} widths
//  * @param {string} S
//  * @return {number[]}
//  */
// const numberOfLines = (widths, S) => {
//   let [lines, cnt] = [1, 0];
//   for (let i = 0; i < S.length; i++) {
//     const w = widths[S.charCodeAt(i) - 97];
//     if (100 < cnt + w) [lines, cnt] = [lines + 1, 0];
//     cnt += w;
//   }
//   return [lines, cnt];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 90.63% of JavaScript online submissions
// Memory Usage: 35.6 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
const numberOfLines = (widths, s) =>
  [...s]
    .map(c => widths[c.charCodeAt(0) - 97])
    .reduce(
      (acc, curr) => [
        acc[0] + (100 < acc[1] + curr ? 1 : 0),
        100 < acc[1] + curr ? curr : acc[1] + curr,
      ],
      [s.length ? 1 : 0, 0],
    );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

deepStrictEqual(
  numberOfLines(
    [
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10, 10,
    ],
    'abcdefghijklmnopqrstuvwxyz',
  ),
  [3, 60],
);

deepStrictEqual(
  numberOfLines(
    [
      4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10,
    ],
    'bbbcccdddaaa',
  ),
  [2, 4],
);
