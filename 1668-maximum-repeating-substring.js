// 1668. Maximum Repeating Substring
// https://leetcode.com/problems/maximum-repeating-substring/

/*

For a string sequence, a string word is k-repeating if word concatenated k times
is a substring of sequence. The word's maximum k-repeating value is the highest
value k where word is k-repeating in sequence. If word is not a substring of
sequence, word's maximum k-repeating value is 0.

Given strings sequence and word, return the maximum k-repeating value of word in
sequence.

## Constraints

- 1 <= sequence.length <= 100
- 1 <= word.length <= 100
- sequence and word contains only lowercase English letters.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 88 ms, faster than 41.18% of JavaScript online submissions
// Memory Usage: 38.9 MB, less than 24.18% of JavaScript online submissions

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
const maxRepeating = (sequence, word) => {
  let res = 0;
  while (new RegExp(word.repeat(res + 1)).test(sequence)) res++;
  return res;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(maxRepeating('ababc', 'ab'), 2);
// Explanation: "abab" is a substring in "ababc".

// Example 2:
strictEqual(maxRepeating('ababc', 'ba'), 1);
// Explanation: "ba" is a substring in "ababc". "baba" is not a substring in
// "ababc".

// Example 3:
strictEqual(maxRepeating('ababc', 'ac'), 0);
// Explanation: "ac" is not a substring in "ababc".

strictEqual(maxRepeating('aaabaaaabaaabaaaabaaaabaaaabaaaaba', 'aaaba'), 5);
/*
|aaaba|aaab|aaaba|aaaba|aaaba|aaaba|aaaba|
|     |    |aaaba|aaaba|aaaba|aaaba|aaaba|
*/
