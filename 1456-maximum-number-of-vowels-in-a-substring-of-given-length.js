// 1456. Maximum Number of Vowels in a Substring of Given Length
// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/

/*

Given a string s and an integer k.

Return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are (a, e, i, o, u).

Constraints:
- 1 <= s.length <= 10^5
- s consists of lowercase English letters.
- 1 <= k <= s.length

*/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 268 ms, faster than 6.11% of JavaScript online submissions
// Memory Usage: 47.2 MB, less than 6.27% of JavaScript online submissions

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = (s, k) => {
  let max = 0;
  const map = new Map([
    ['a', true],
    ['e', true],
    ['i', true],
    ['o', true],
    ['u', true],
  ]);
  for (let i = 0, cnt = 0; i < s.length; i++) {
    if (map.get(s[i])) cnt++;
    if (map.get(s[i - k])) cnt--;
    max = Math.max(max, cnt);
  }
  return max;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
deepStrictEqual(maxVowels('abciiidef', 3), 3);
// Explanation: The substring "iii" contains 3 vowel letters.

// Example 2:
deepStrictEqual(maxVowels('aeiou', 2), 2);
// Explanation: Any substring of length 2 contains 2 vowels.

// Example 3:
deepStrictEqual(maxVowels('leetcode', 3), 2);
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

// Example 4:
deepStrictEqual(maxVowels('rhythms', 4), 0);
// Explanation: We can see that s doesn't have any vowel letters.

// Example 5:
deepStrictEqual(maxVowels('tryhard', 4), 1);
