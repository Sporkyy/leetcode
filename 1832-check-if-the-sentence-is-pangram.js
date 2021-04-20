// 1832. Check if the Sentence Is Pangram
// https://leetcode.com/problems/check-if-the-sentence-is-pangram/

/*

A pangram is a sentence where every letter of the English alphabet appears at
least once.

Given a string sentence containing only lowercase English letters, return true
if sentence is a pangram, or false otherwise.

## Constraints

- 1 <= sentence.length <= 1000
- sentence consists of lowercase English letters.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 72 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 40 MB, less than 21.19% of JavaScript online submissions

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = sentence => {
  const found = new Set();
  for (const c of sentence) {
    if (/[a-z]/.test(c)) found.add(c);
    if (26 === found.size) return true;
  }
  return false;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = sentence => {
  const found = new Set();
  for (const c of sentence) {
    if (/[a-z]/.test(c)) found.add(c);
    if (26 === found.size) return true;
  }
  return false;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { ok } from 'assert';

// Example 1:
ok(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'));
// Explanation: sentence contains at least one of every letter of the English
// alphabet.

// Example 2:
ok(!checkIfPangram('leetcode'));
