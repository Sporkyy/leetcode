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

// Runtime: 180 ms, faster than 75.95% of JavaScript online submissions
// Memory Usage: 49.7 MB, less than 96.20% of JavaScript online submissions

/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const maximumGain = (s, x, y) => {
  let [hiStr, hiPts, loStr, loPts] = ['ab', x, 'ba', y];
  if (x < y) [hiStr, hiPts, loStr, loPts] = [loStr, loPts, hiStr, hiPts];

  let score = 0;

  for (let i = 0, stk = []; i <= s.length; i++) {
    if (!('a' === s[i] || 'b' === s[i])) {
      let cnt = 0;
      while (loStr[1] === stk[stk.length - 1]) {
        cnt++;
        stk.pop();
      }
      score += Math.min(cnt, stk.length) * loPts;
      stk = [];
      continue;
    }
    if (stk.length && `${stk[stk.length - 1]}${s[i]}` === hiStr) {
      score += hiPts;
      stk.pop();
      continue;
    }
    stk.push(s[i]);
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

/*

cdbcbbaaabab
---------11- | cdbcbbaaa__b | cdbcbbaaab
--------2112 | cdbcbbaa____ | cdbcbbaa
-----33-2112 | cdbcb__a____ | cdbcba
----43342112 | cdbc________ | cdbc

|c|d|b|c|b|b|a|a|a|b|a|b|
| | | | | |1|1| | | | | | ba
|c|d|b|c|b| | |a|a|b|a|b|
| | | | |2|1|1|2| | | | | ba
|c|d|b|c| | | | |a|b|a|b|
| | | | |2|1|1|2| |3|3| | ba
|c|d|b|c| | | | |a| | |b|
| | | | |2|1|1|2|4|3|3|4| ab

*/

// Example 2:
strictEqual(maximumGain('aabbaaxybbaabb', 5, 4), 20);

strictEqual(
  maximumGain(
    'aabbabkbbbfvybssbtaobaaaabataaadabbbmakgabbaoapbbbbobaabvqhbbzbbkapabaavbbeghacabamdpaaqbqabbjbababmbakbaabajabasaabbwabrbbaabbafubayaazbbbaababbaaha',
    1926,
    4320,
  ),
  112374,
);
