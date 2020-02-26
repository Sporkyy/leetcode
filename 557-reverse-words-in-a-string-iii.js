// 557. Reverse Words in a String III
// https://leetcode.com/problems/reverse-words-in-a-string-iii/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 40.02% of JavaScript online submissions
// Memory Usage: 42.2 MB, less than 45.07% of JavaScript online submissions

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = s =>
  s
    .split(' ')
    .map(w =>
      w
        .split('')
        .reverse()
        .join(''),
    )
    .join(' ');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

strictEqual(
  reverseWords("Let's take LeetCode contest"),
  "s'teL ekat edoCteeL tsetnoc",
);
