// 1592. Rearrange Spaces Between Words
// https://leetcode.com/problems/rearrange-spaces-between-words/

/*

You are given a string text of words that are placed among some number of
spaces. Each word consists of one or more lowercase English letters and are
separated by at least one space. It's guaranteed that text contains at least one
word.

Rearrange the spaces so that there is an equal number of spaces between every
pair of adjacent words and that number is maximized. If you cannot redistribute
all the spaces equally, place the extra spaces at the end, meaning the returned
string should be the same length as text.

Return the string after rearranging the spaces.

## Constraints
- 1 <= text.length <= 100
- text consists of lowercase English letters and ' '.
- text contains at least one word.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 80 ms, faster than 49.05% of JavaScript online submissions
// Memory Usage: 37.6 MB, less than 6.66% of JavaScript online submissions

// /**
//  * @param {string} text
//  * @return {string}
//  */
// const reorderSpaces = text => {
//   const spcCnt = text.replace(/\S/g, '').length;
//   console.log(spcCnt);
//   const words = text.trim().split(/\s+/g);
//   console.log(words);
//   if (1 === words.length) return `${words[0]}${' '.repeat(spcCnt)}`;
//   let spcsPerWord = Math.trunc(spcCnt / (words.length - 1));
//   console.log(spcsPerWord);
//   // if (Infinity === spcsPerWord) spcsPerWord = spcCnt;
//   // console.log(spcCnt % words.length);
//   return (
//     words.join(' '.repeat(spcsPerWord)) +
//     ' '.repeat(spcCnt % (words.length - 1))
//   );
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 80 ms, faster than 49.05% of JavaScript online submissions
// Memory Usage: 36.6 MB, less than 82.86% of JavaScript online submissions

// /**
//  * @param {string} text
//  * @return {string}
//  */
// const reorderSpaces = text => {
//   const cntSpaces = text.replace(/\S/g, '').length;
//   const words = text.trim().split(/\s+/g);
//   const spacesPerWord = 1 < words.length ? cntSpaces / (words.length - 1) : 0;
//   const wordSpaces = ' '.repeat(spacesPerWord);
//   const remainingSpaces =
//     1 < words.length
//       ? ' '.repeat(cntSpaces % (words.length - 1 || 0))
//       : ' '.repeat(cntSpaces);
//   return `${words.join(wordSpaces)}${remainingSpaces}`;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 80 ms, faster than 49.05% of JavaScript online submissions
// Memory Usage: 38.5 MB, less than 5.24% of JavaScript online submissions

// /**
//  * @param {string} text
//  * @return {string}
//  */
// const reorderSpaces = text => {
//   let cntSpaces = 0;
//   let words = [];
//   for (let i = 0, word = ''; i <= text.length; i++) {
//     if ('undefined' === typeof text[i] && word.length) words.push(word);
//     else if (' ' === text[i]) {
//       cntSpaces++;
//       if (word.length) {
//         words.push(word);
//         word = '';
//       }
//     } else word += text[i];
//   }
//   // console.log(words, cntSpaces);
//   let cntWordSpaces = 0;
//   let cntRemainingSpaces = cntSpaces;
//   if (1 < words.length) {
//     cntWordSpaces = Math.trunc(cntSpaces / (words.length - 1));
//     // console.log(cntWordSpaces);
//     cntRemainingSpaces = cntSpaces - cntWordSpaces * (words.length - 1);
//   }
//   // console.log(cntRemainingSpaces);
//   const wordSpaces = ' '.repeat(cntWordSpaces);
//   const remainingSpaces = ' '.repeat(cntRemainingSpaces);
//   return `${words.join(wordSpaces)}${remainingSpaces}`;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {string} text
//  * @return {string}
//  */
// const reorderSpaces = text => {
//   let cntSpaces = 0;
//   const words = new Map();
//   for (const c of text)
//     if (' ' === c) cntSpaces++;
//     else words.set(cntSpaces, `${words.get(cntSpaces) || ''}${c}`);
//   console.log(cntSpaces, [...words.values()]);
//   //   let spcsPerWord = Math.trunc(spcCnt / (words.length - 1));
//   //   const wordSpaces = ' '.repeat(spacesPerWord);
//   //   const remainingSpaces =
//   //     1 < words.length
//   //       ? ' '.repeat(cntSpaces % (words.length - 1 || 0))
//   //       : ' '.repeat(cntSpaces);
//   //   return `${words.join(wordSpaces)}${remainingSpaces}`;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 72.38% of JavaScript online submissions
// Memory Usage: 38.6 MB, less than 5.24% of JavaScript online submissions

/**
 * @param {string} text
 * @return {string}
 */
const reorderSpaces = text => {
  const regex = /(\w+)/g;
  const words = [];
  let execResults;
  let cntSpaces = text.length; // Decremented in loop below
  while (null !== (execResults = regex.exec(text))) {
    words.push(execResults[0]);
    cntSpaces -= regex.lastIndex - execResults.index; // A mixed-key array‽
  }
  if (1 === words.length) return `${words[0]}${' '.repeat(cntSpaces)}`;
  const spacedWords = words.join(' '.repeat(cntSpaces / (words.length - 1)));
  const remainingSpaces = ' '.repeat(cntSpaces % (words.length - 1));
  return `${spacedWords}${remainingSpaces}`;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(
  reorderSpaces('  this   is  a sentence '),
  'this   is   a   sentence',
);
// Explanation: There are a total of 9 spaces and 4 words. We can evenly divide
// the 9 spaces between the words: 9 / (4-1) = 3 spaces.

// Example 2:
strictEqual(
  reorderSpaces(' practice   makes   perfect'),
  'practice   makes   perfect ',
);
// Explanation: There are a total of 7 spaces and 3 words. 7 / (3-1) = 3 spaces
// plus 1 extra space. We place this extra space at the end of the string.

// Example 3:
strictEqual(reorderSpaces('hello   world'), 'hello   world');

// Example 4:
strictEqual(
  reorderSpaces('  walks  udp package   into  bar a'),
  'walks  udp  package  into  bar  a ',
);

// Example 5:
strictEqual(reorderSpaces('a'), 'a');

strictEqual(reorderSpaces('  hello'), 'hello  ');
