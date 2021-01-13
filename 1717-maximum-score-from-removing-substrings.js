// 1717. Maximum Score From Removing Substrings
// https://leetcode.com/problems/maximum-score-from-removing-substrings/

/*

You are given a string s and two integers x and y. You can perform two types of
operations any number of times.

- Remove substring "ab" and gain x points.
  - For example, when removing "ab" from "cabxbae" it becomes "cxbae".
- Remove substring "ba" and gain y points.
  - For example, when removing "ba" from "cabxbae" it becomes "cabxe".

Return the maximum points you can gain after applying the above operations on s.

## Constraints
- 1 <= s.length <= 105
- 1 <= x, y <= 104
- s consists of lowercase English letters.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Time Limit Exceeded

/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const maximumGain = (s, x, y) => {
  let score = 0;
  while (/(ab|ba)/.test(s)) {
    if (y < x) {
      if (s.includes('ab')) {
        s = s.replace('ab', '');
        score += x;
      } else if (s.includes('ba')) {
        s = s.replace('ba', '');
        score += y;
      }
    } else {
      if (s.includes('ba')) {
        s = s.replace('ba', '');
        score += y;
      } else if (s.includes('ab')) {
        s = s.replace('ab', '');
        score += x;
      }
    }
  }
  return score;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(maximumGain('cdbcbbaaabab', 4, 5), 19);
// Explanation:
// - Remove the "ba" underlined in "cdbcbbaaabab". Now, s = "cdbcbbaaab" and 5
//   points are added to the score.
// - Remove the "ab" underlined in "cdbcbbaaab". Now, s = "cdbcbbaa" and 4
//   points are added to the score.
// - Remove the "ba" underlined in "cdbcbbaa". Now, s = "cdbcba" and 5 points
//   are added to the score.
// - Remove the "ba" underlined in "cdbcba". Now, s = "cdbc" and 5 points are
//   added to the score.
//
// Total score = 5 + 4 + 5 + 5 = 19.

// Example 2:
strictEqual(maximumGain('aabbaaxybbaabb', 5, 4), 20);
