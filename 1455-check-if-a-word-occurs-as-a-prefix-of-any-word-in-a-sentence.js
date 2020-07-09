// 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
// https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/

/*

Given a sentence that consists of some words separated by a single space, and a
searchWord.

You have to check if searchWord is a prefix of any word in sentence.

Return the index of the word in sentence where searchWord is a prefix of this
word (1-indexed).

If searchWord is a prefix of more than one word, return the index of the first
word (minimum index). If there is no such word return -1.

A prefix of a string S is any leading contiguous substring of S.

Constraints:
- 1 <= sentence.length <= 100
- 1 <= searchWord.length <= 10
- sentence consists of lowercase English letters and spaces.
- searchWord consists of lowercase English letters.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 83.90% of JavaScript online submissions
// Memory Usage: 33.4 MB, less than 5.51% of JavaScript online submissions

// /**
//  * @param {string} sentence
//  * @param {string} searchWord
//  * @return {number}
//  */
// const isPrefixOfWord = (sentence, searchWord, cnt = 0) =>
//   !sentence.length
//     ? -1
//     : 'string' === typeof sentence
//     ? isPrefixOfWord(sentence.split(' '), searchWord)
//     : new RegExp(`^${searchWord}`).test(sentence.shift())
//     ? cnt + 1
//     : isPrefixOfWord(sentence, searchWord, cnt + 1);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 83.90% of JavaScript online submissions
// Memory Usage: 32.3 MB, less than 99.78% of JavaScript online submissions

// /**
//  * @param {string} sentence
//  * @param {string} searchWord
//  * @return {number}
//  */
// const isPrefixOfWord = (sentence, searchWord, cnt = 0) =>
//   !sentence.length
//     ? -1
//     : 'string' === typeof sentence
//     ? isPrefixOfWord(sentence.split(' '), searchWord)
//     : 0 === sentence.shift().indexOf(searchWord)
//     ? cnt + 1
//     : isPrefixOfWord(sentence, searchWord, cnt + 1);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string} sentence
//  * @param {string} searchWord
//  * @return {number}
//  */
// const isPrefixOfWord = (sentence, searchWord) => {
//   const prefix = sentence.split(new RegExp(`(^| )${searchWord}`)).shift();
//   return sentence.length === prefix.length
//     ? -1
//     : 0 === prefix.length
//     ? 1
//     : prefix.split(' ').length + 1;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 96 ms, faster than 7.83% of JavaScript online submissions
// Memory Usage: 32.5 MB, less than 94.93% of JavaScript online submissions

// /**
//  * @param {string} sentence
//  * @param {string} searchWord
//  * @return {number}
//  */
// const isPrefixOfWord = (
//   sentence,
//   searchWord,
//   prefix = sentence.split(new RegExp(`(^| )${searchWord}`)).shift(),
// ) =>
//   sentence.length === prefix.length
//     ? -1
//     : 0 === prefix.length
//     ? 1
//     : prefix.split(' ').length + 1;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 28.95% of JavaScript online submissions
// Memory Usage: 33.3 MB, less than 5.95% of JavaScript online submissions

// /**
//  * @param {string} sentence
//  * @param {string} searchWord
//  * @return {number}
//  */
// const isPrefixOfWord = (
//   sentence,
//   searchWord,
//   prefix = sentence.split(new RegExp(`(^| )${searchWord}`))[0],
// ) =>
//   sentence.length === prefix.length
//     ? -1
//     : 0 === prefix.length
//     ? 1
//     : prefix.split(' ').length + 1;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 38.26% of JavaScript online submissions
// Memory Usage: 32.8 MB, less than 62.33% of JavaScript online submissions

// /**
//  * @param {string} sentence
//  * @param {string} searchWord
//  * @return {number}
//  */
// const isPrefixOfWord = (
//   sentence,
//   searchWord,
//   idx = sentence.split(' ').findIndex(word => word.startsWith(searchWord)),
// ) => (-1 === idx ? idx : idx + 1);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 96 ms, faster than 7.83% of JavaScript online submissions
// Memory Usage: 32.7 MB, less than 77.53% of JavaScript online submissions

// /**
//  * @param {string} sentence
//  * @param {string} searchWord
//  * @return {number}
//  */
// const isPrefixOfWord = (sentence, searchWord) =>
//   sentence
//     .split(' ')
//     .reduce(
//       (acc, curr, idx) =>
//         -1 < acc ? acc : curr.startsWith(searchWord) ? idx + 1 : -1,
//       -1,
//     );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 62.92% of JavaScript online submissions
// Memory Usage: 32.5 MB, less than 94.71% of JavaScript online submissions

// /**
//  * @param {string} sentence
//  * @param {string} searchWord
//  * @return {number}
//  */
// const isPrefixOfWord = (sentence, searchWord) => {
//   const idx = ` ${sentence}`.indexOf(` ${searchWord}`);
//   if (-1 === idx) return -1;
//   let cntSpaces = 0;
//   for (let i = 0; i < idx; i++) if (' ' === sentence[i]) cntSpaces++;
//   return cntSpaces + 1;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// // Runtime: 60 ms, faster than 94.39% of JavaScript online submissions
// // Memory Usage: 33 MB, less than 45.59% of JavaScript online submissions

// /**
//  * @param {string} sentence
//  * @param {string} searchWord
//  * @return {number}
//  */
// const isPrefixOfWord = (sentence, searchWord) => {
//   [sentence, searchWord] = [` ${sentence}`, ` ${searchWord}`];
//   for (let i = 0, j = 0, cntSpaces = 0; i < sentence.length; i++) {
//     if (sentence[i] !== searchWord[j]) j = 0;
//     if (sentence[i] === searchWord[j]) j++;
//     if (' ' === sentence[i]) cntSpaces++;
//     else if (j === searchWord.length) return cntSpaces;
//   }
//   return -1;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 100 ms, faster than 6.06% of JavaScript online submissions
// Memory Usage: 33.2 MB, less than 7.27% of JavaScript online submissions

// /**
//  * @param {string} sentence
//  * @param {string} searchWord
//  * @return {number}
//  */
// const isPrefixOfWord = (sentence, searchWord) => {
//   [sentence, searchWord] = [` ${sentence}`, ` ${searchWord}`];
//   for (let i = 0, j = 0, cntSpaces = 0; i < sentence.length; i++) {
//     if (' ' === sentence[i]) [cntSpaces, j] = [cntSpaces + 1, 0];
//     j = sentence[i] === searchWord[j] ? j + 1 : 0;
//     if (j === searchWord.length) return cntSpaces;
//   }
//   return -1;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 94.39% of JavaScript online submissions
// Memory Usage: 32.8 MB, less than 68.06% of JavaScript online submissions

// /**
//  * @param {string} sentence
//  * @param {string} searchWord
//  * @return {number}
//  */
// const isPrefixOfWord = (sentence, searchWord) => {
//   [sentence, searchWord] = [` ${sentence}`, ` ${searchWord}`];
//   for (let i = 0, j = 0, cntSpaces = 0; i < sentence.length; i++) {
//     if (' ' === sentence[i]) {
//       cntSpaces++;
//       j = 0;
//     }
//     if (sentence[i] === searchWord[j]) j++;
//     else j = 0;
//     if (j === searchWord.length) return cntSpaces;
//   }
//   return -1;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 88 ms, faster than 15.21% of JavaScript online submissions
// Memory Usage: 32.7 MB, less than 84.58% of JavaScript online submissions

// /**
//  * @param {string} sentence
//  * @param {string} searchWord
//  * @return {number}
//  */
// const isPrefixOfWord = (sentence, searchWord) => {
//   for (let i = 0, j = 0, cntWords = 1; i < sentence.length; i++, j++) {
//     if (' ' === sentence[i] && cntWords++ && (j = -1)) continue;
//     if (sentence[i] !== searchWord[j] && (j = Infinity)) continue;
//     if (j === searchWord.length - 1) return cntWords;
//   }
//   return -1;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 88 ms, faster than 15.21% of JavaScript online submissions
// Memory Usage: 33.3 MB, less than 6.17% of JavaScript online submissions

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
const isPrefixOfWord = (sentence, searchWord) => {
  for (let i = 0, j = 0, cntWords = 1; i < sentence.length; i++, j++)
    if (' ' === sentence[i]) cntWords++, (j = -1);
    else if (sentence[i] !== searchWord[j]) j = Infinity;
    else if (j === searchWord.length - 1) return cntWords;
  return -1;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(isPrefixOfWord('i love eating burger', 'burg'), 4);
// Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.

// Example 2:
strictEqual(isPrefixOfWord('this problem is an easy problem', 'pro'), 2);
// Explanation: "pro" is prefix of "problem" which is the 2nd and the 6th word in the sentence, but we return 2 as it's the minimal index.

// Example 3:
strictEqual(isPrefixOfWord('i am tired', 'you'), -1);
// Explanation: "you" is not a prefix of any word in the sentence.

// Example 4:
strictEqual(isPrefixOfWord('i use triple pillow', 'pill'), 4);

// Example 5:
strictEqual(isPrefixOfWord('hello from the other side', 'they'), -1);

strictEqual(isPrefixOfWord('leetcode corona', 'leetco'), 1);

strictEqual(isPrefixOfWord('hellohello hellohellohello', 'ell'), -1);

strictEqual(
  isPrefixOfWord(
    'pillow love winstontang i pillow corona you errichto love',
    'i',
  ),
  4,
);

strictEqual(isPrefixOfWord('b bu bur burg burger', 'burg'), 4);

strictEqual(isPrefixOfWord('love errichto jonathan dumb', 'dumb'), 4);
