// 1839. Longest Substring Of All Vowels in Order
// https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/

/*
A string is considered **beautiful** if it satisfies the following conditions:

- Each of the 5 English vowels (`'a'`, `'e'`, `'i'`, `'o'`, `'u'`) must appear
  **at least once** in it.
- The letters must be sorted in **alphabetical order** (i.e. all `'a'`s before
  `'e'`s, all `'e'`s before `'i'`s, etc.).

For example, strings `"aeiou"` and `"aaaaaaeiiiioou"` are considered beautiful,
but `"uaeio"`, `"aeoiu"`, and `"aaaeeeooo"` are **not beautiful**.

Given a string `word` consisting of English vowels, return the **length of the
longest beautiful substring** of `word`. If no such substring exists, return
`0`.

A **substring** is a contiguous sequence of characters in a string.

## Constraints

- 1 <= word.length <= 5 * 105
- word consists of characters 'a', 'e', 'i', 'o', and 'u'.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 244 ms, faster than 22.48% of JavaScript online submissions
// Memory Usage: 50.3 MB, less than 29.46% of JavaScript online submissions

/**
 * @param {string} word
 * @return {number}
 */
const longestBeautifulSubstring = word => {
  const map = new Map([
    [undefined, 'a'],
    ['a', 'ae'],
    ['e', 'ei'],
    ['i', 'io'],
    ['o', 'ou'],
    ['u', 'u'],
  ]);
  let max = 0;
  for (let i = 0, cnt = 0, set = new Set(word[0]); i < word.length; i++) {
    if (map.get(word[i - 1]).includes(word[i])) {
      cnt++;
    } else {
      set.clear();
      if ('a' === word[i]) cnt = 1;
      else cnt = 0;
    }
    set.add(word[i]);
    // console.log(`${word[i]} ${cnt} (${set.size})`);
    if (5 === set.size) max = Math.max(max, cnt);
  }
  return max;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(longestBeautifulSubstring('aeiaaioaaaaeiiiiouuuooaauuaeiu'), 13);
// Explanation: The longest beautiful substring in word is "aaaaeiiiiouuu" of
// length 13.

// Example 2:
strictEqual(longestBeautifulSubstring('aeeeiiiioooauuuaeiou'), 5);
// Explanation: The longest beautiful substring in word is "aeiou" of length 5.

// Example 3:
strictEqual(longestBeautifulSubstring('a'), 0);
// Explanation: There is no beautiful substring, so return 0.

strictEqual(longestBeautifulSubstring('u'), 0);

strictEqual(longestBeautifulSubstring('uuuuu'), 0);
