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

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
const maxRepeating = (sequence, word) => {
  const [sl, wl] = [sequence.length, word.length];
  let max = 0;
  for (
    let sf = 0, sb = sl - 1, wf = 0, wb = wl - 1, fCnt = 0, bCnt = 0;
    sf < sl;
    sf++, sb--
  ) {
    // console.log(sf, sb);
    // console.log(sequence[sf], word[wf]);
    // console.log(sequence[sb], word[wb]);
    if (sequence[sf] === word[wf]) wf++;
    else [fCnt, wf] = [0, 0];
    if (wf === word.length) {
      [fCnt, wf] = [fCnt + 1, 0];
      max = Math.max(max, fCnt);
    }
    if (sequence[sb] === word[wb]) wb--;
    else [bCnt, wb] = [0, wl - 1];
    if (-1 === wb) {
      [bCnt, wb] = [bCnt + 1, wl - 1];
      max = Math.max(max, bCnt);
    }
  }
  return max;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
// strictEqual(maxRepeating('ababc', 'ab'), 2);
// Explanation: "abab" is a substring in "ababc".

// Example 2:
// strictEqual(maxRepeating('ababc', 'ba'), 1);
// Explanation: "ba" is a substring in "ababc". "baba" is not a substring in
// "ababc".

// Example 3:
// strictEqual(maxRepeating('ababc', 'ac'), 0);
// Explanation: "ac" is not a substring in "ababc".

// strictEqual(maxRepeating('aaabaaaabaaabaaaabaaaabaaaabaaaaba', 'aaaba'), 5);
/*

|aaaba|aaaba|aaba|aaaba|aaaba|aaaba|aaaba|
|aaaba|aaaba|    |aaaba|aaaba|aaaba|aaaba|

|aaaba|aaab|aaaba|aaaba|aaaba|aaaba|aaaba|
|aaaba|    |aaaba|aaaba|aaaba|aaaba|aaaba|
*/

strictEqual(maxRepeating('bbaa', 'ba'), 1);
