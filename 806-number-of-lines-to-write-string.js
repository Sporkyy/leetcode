// 806. Number of Lines To Write String
// https://leetcode.com/problems/number-of-lines-to-write-string/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 50.69% of JavaScript online submissions
// Memory Usage: 35 MB, less than 28.57% of JavaScript online submissions

/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
const numberOfLines = (widths, S) => {
  let [lines, cnt] = [1, 0];
  for (let i = 0; i < S.length; i++) {
    const w = widths[S.charCodeAt(i) - 97];
    if (100 < cnt + w) [lines, cnt] = [lines + 1, 0];
    cnt += w;
  }
  return [lines, cnt];
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

deepStrictEqual(
  numberOfLines(
    [
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
    ],
    'abcdefghijklmnopqrstuvwxyz',
  ),
  [3, 60],
);

deepStrictEqual(
  numberOfLines(
    [
      4,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
    ],
    'bbbcccdddaaa',
  ),
  [2, 4],
);
