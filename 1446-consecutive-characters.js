// 1446. Consecutive Characters
// https://leetcode.com/problems/consecutive-characters/

/*

Given a string s, the power of the string is the maximum length of a non-empty
substring that contains only one unique character.

Return the power of the string.

Constraints:
- 1 <= s.length <= 500
- s contains only lowercase English letters.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 56.32% of JavaScript online submissions
// Memory Usage: 36.9 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} s
 * @return {number}
 */
const maxPower = s =>
  s
    .split(/((\w)\2*)/)
    .reduce(
      (max, match) => (max < match.length ? match.length : max),
      -Infinity,
    );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(maxPower('leetcode'), 2);
// Explanation: The substring "ee" is of length 2 with the character 'e' only.

// Example 2:
strictEqual(maxPower('abbcccddddeeeeedcba'), 5);
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.

// Example 3:
strictEqual(maxPower('triplepillooooow'), 5);

// Example 4:
strictEqual(maxPower('hooraaaaaaaaaaay'), 11);

// Example 5:
strictEqual(maxPower('tourist'), 1);

strictEqual(maxPower(''), 0);
