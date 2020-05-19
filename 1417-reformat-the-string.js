// 1417. Reformat The String
// https://leetcode.com/problems/reformat-the-string/

/*

Given alphanumeric string s. (Alphanumeric string is a string consisting of
lowercase English letters and digits).

You have to find a permutation of the string where no letter is followed by
another letter and no digit is followed by another digit. That is, no two
adjacent characters have the same type.

Return the reformatted string or return an empty string if it is impossible to
reformat the string.

Constraints:
- 1 <= s.length <= 500
- s consists of only lowercase English letters and/or digits.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 112 ms, faster than 26.92% of JavaScript online submissions
// Memory Usage: 36.6 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} s
 * @return {string}
 */
const reformat = s => {
  if (1 === s.length) return s;
  const [letters, digits] = [s.match(/\D/g) || [], s.match(/\d/g) || []];
  if (0 === letters.length || 0 === digits.length) return '';
  if (2 < Math.abs(letters.length - digits.length)) return '';
  const mix = (short, long) => {
    if (long.length < short.length) return mix(long, short);
    let mixed = '';
    while (long.length)
      mixed += long.pop() + (!short.length ? '' : short.pop());
    return mixed;
  };
  return mix(letters, digits);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
// strictEqual(reformat('a0b1c2'), '0a1b2c');
// Explanation: No two adjacent characters have the same type in "0a1b2c". "a0b1c2", "0a1b2c", "0c2a1b" are also valid permutations.

// Example 2:
// strictEqual(reformat('leetcode'), '');
// Explanation: "leetcode" has only characters so we cannot separate them by digits.

// Example 3:
// strictEqual(reformat('1229857369'), '');
// Explanation: "1229857369" has only digits so we cannot separate them by characters.

// Example 4:
// strictEqual(reformat('covid2019'), 'c2o0v1i9d');

// Example 5:
// strictEqual(reformat('ab123'), '1a2b3');

strictEqual(reformat('j'), 'j');

strictEqual(reformat('ec'), '');
