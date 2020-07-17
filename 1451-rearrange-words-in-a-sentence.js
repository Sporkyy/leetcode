// 1451. Rearrange Words in a Sentence
// https://leetcode.com/problems/rearrange-words-in-a-sentence/

/*

Given a sentence text (A sentence is a string of space-separated words) in the
following format:

First letter is in upper case. Each word in text are separated by a single
space. Your task is to rearrange the words in text such that all words are
rearranged in an increasing order of their lengths. If two words have the same
length, arrange them in their original order.

Return the new text following the format shown above.

Constraints:
- text begins with a capital letter and then contains lowercase letters and
  single space between words.
- 1 <= text.length <= 10^5

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 104 ms, faster than 37.39% of JavaScript online submissions
// Memory Usage: 40.1 MB, less than 80.19% of JavaScript online submissions

/**
 * @param {string} text
 * @return {string}
 */
const arrangeWords = text =>
  text
    .toLowerCase()
    .split(' ')
    .sort(({ length: a }, { length: b }) => a - b)
    .join(' ')
    .replace(/^./, firstLetter => firstLetter.toUpperCase());

// console.log('Version: ' + process.version);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(arrangeWords('Leetcode is cool'), 'Is cool leetcode');
// Explanation: There are 3 words, "Leetcode" of length 8, "is" of length 2 and "cool" of length 4.
// Output is ordered by length and the new first word starts with capital letter.

// Example 2:
strictEqual(arrangeWords('Keep calm and code on'), 'On and keep calm code');
// Explanation: Output is ordered as follows:
// "On" 2 letters.
// "and" 3 letters.
// "keep" 4 letters in case of tie order by position in original text.
// "calm" 4 letters.
// "code" 4 letters.

// Example 3:
strictEqual(arrangeWords('To be or not to be'), 'To be or to be not');

strictEqual(arrangeWords('To be or not to be'), 'To be or to be not');
