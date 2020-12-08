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

// /**
//  * @param {string} sequence
//  * @param {string} word
//  * @return {number}
//  */
// const maxRepeating = (sequence, word) => {
//   let res = 0;
//   while (new RegExp(word.repeat(res + 1)).test(sequence)) res++;
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 68 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 38.6 MB, less than 53.59% of JavaScript online submissions

// /**
//  * @param {string} sequence
//  * @param {string} word
//  * @return {number}
//  */
// const maxRepeating = (sequence, word) => {
//   let cnt = 0;
//   while (-1 < sequence.indexOf(word.repeat(cnt + 1))) cnt++;
//   return cnt;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 92 ms, faster than 30.72% of JavaScript online submissions
// Memory Usage: 38.7 MB, less than 53.59% of JavaScript online submissions

// /**
//  * @param {string} sequence
//  * @param {string} word
//  * @return {number}
//  */
// const maxRepeating = (sequence, word, i = 0) =>
//   -1 === sequence.indexOf(word.repeat(i + 1))
//     ? i
//     : maxRepeating(sequence, word, i + 1);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 80 ms, faster than 75.16% of JavaScript online submissions
// Memory Usage: 38.7 MB, less than 53.59% of JavaScript online submissions

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
const maxRepeating = (sequence, word, needle = '') =>
  !sequence.includes(`${needle}${word}`)
    ? needle.length / word.length
    : maxRepeating(sequence, word, `${needle}${word}`);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 92 ms, faster than 30.72% of JavaScript online submissions
// Memory Usage: 42.5 MB, less than 5.23% of JavaScript online submissions

// /**
//  * @param {string} sequence
//  * @param {string} word
//  * @return {number}
//  */
// const maxRepeating = (sequence, word) => {
//   const [sl, wl] = [sequence.length, word.length];
//   let max = 0;
//   for (
//     let sf = 0, sb = sl - 1, wf = 0, wb = wl - 1, fCnt = 0, bCnt = 0;
//     sf < sl;
//     sf++, sb--
//   ) {
//     if (sequence[sf] !== word[wf]) [fCnt, wf] = [0, 0];
//     if (sequence[sf] === word[wf]) wf++;
//     if (wf === word.length) {
//       [fCnt, wf] = [fCnt + 1, 0];
//       max = Math.max(max, fCnt);
//     }
//     if (sequence[sb] !== word[wb]) [bCnt, wb] = [0, wl - 1];
//     if (sequence[sb] === word[wb]) wb--;
//     if (-1 === wb) {
//       [bCnt, wb] = [bCnt + 1, wl - 1];
//       max = Math.max(max, bCnt);
//     }
//   }
//   return max;
// };

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

|aaaba|aaaba|aaba|aaaba|aaaba|aaaba|aaaba|
|aaaba|aaaba|    |aaaba|aaaba|aaaba|aaaba|

|aaaba|aaab|aaaba|aaaba|aaaba|aaaba|aaaba|
|aaaba|    |aaaba|aaaba|aaaba|aaaba|aaaba|
*/

strictEqual(maxRepeating('bbaa', 'ba'), 1);
