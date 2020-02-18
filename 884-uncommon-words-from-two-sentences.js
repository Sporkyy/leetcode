// 884. Uncommon Words from Two Sentences
// https://leetcode.com/problems/uncommon-words-from-two-sentences/

import { deepStrictEqual } from 'assert';

/*

We are given two sentences A and B.  (A sentence is a string of space
separated words. Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences,
and does not appear in the other sentence.

Return a list of all uncommon words.

You may return the list in any order.

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 20.84% of JavaScript online submissions
// Memory Usage: 35.1 MB, less than 6.90% of JavaScript online submissions

// const instances = (haystack, needle) =>
//   haystack.reduce((count, word) => count + (needle === word ? 1 : 0), 0);

// const uniqueElements = a => a.filter(word => 1 === instances(a, word));

// const allWords = (...strings) =>
//   strings.reduce((words, string) => [...words, ...string.split(' ')], []);

// const uniqueWords = (...strings) =>
//   Array.from(new Set(uniqueElements(allWords(...strings))).values());

// const xorWord = (haystack1, haystack2, word) =>
//   haystack1.split(' ').indexOf(word) !== haystack2.split(' ').indexOf(word);

// /**
//  * @param {string} A
//  * @param {string} B
//  * @return {string[]}
//  */
// const uncommonFromSentences = (A, B) =>
//   uniqueWords(A, B).filter(word => xorWord(A, B, word));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 89.18% of JavaScript online submissions
// Memory Usage: 34.5 MB, less than 20.69% of JavaScript online submissions

// /**
//  * @param {string} A
//  * @param {string} B
//  * @return {string[]}
//  */
// const uncommonFromSentences = (A, B) => {
//   const answer = [];

//   A = A.split(' ');
//   B = B.split(' ');
//   const AB = A.concat(B);

//   for (let i = 0; i < AB.length; i++) {
//     const word = AB[i];
//     const ai = A.indexOf(word);
//     const ali = A.lastIndexOf(word);
//     if (ai !== ali) {
//       continue;
//     }
//     const bi = B.indexOf(word);
//     const bli = B.lastIndexOf(word);
//     if (bi !== bli || (-1 !== ai) === (-1 !== bi)) {
//       continue;
//     }
//     answer.push(word);
//   }

//   return answer;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 89.18% of JavaScript online submissions
// Memory Usage: 35 MB, less than 10.34% of JavaScript online submissions

// /**
//  * @param {string} A
//  * @param {string} B
//  * @return {string[]}
//  */
// const uncommonFromSentences = (A, B) => {
//   A = A.split(' ');
//   B = B.split(' ');

//   const AB = A.concat(B);
//   const answer = [];
//   const map = new Object(null);

//   for (let i = 0; i < AB.length; i++) {
//     const word = AB[i];
//     if (map.hasOwnProperty(word)) continue;
//     map[word] = {
//       aIndex: A.indexOf(word),
//       aLastIndex: A.lastIndexOf(word),
//       bIndex: B.indexOf(word),
//       bLastIndex: B.lastIndexOf(word),
//     };
//   }

//   for (let word in map) {
//     if (
//       map[word].aIndex !== map[word].aLastIndex ||
//       map[word].bIndex !== map[word].bLastIndex ||
//       (-1 !== map[word].aIndex) === (-1 !== map[word].bIndex)
//     ) {
//       continue;
//     }
//     answer.push(word);
//   }

//   return answer;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 33.9 MB, less than 79.31% of JavaScript online submissions

// /**
//  * @param {string} A
//  * @param {string} B
//  * @return {string[]}
//  */
// const uncommonFromSentences = (A, B) => {
//   const answer = [];
//   let haystack = `${A} ${B}`;
//   const words = haystack.split(' ');
//   haystack = ` ${haystack} `;

//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     const needle = ' ' + word + ' ';
//     if (haystack.indexOf(needle) !== haystack.lastIndexOf(needle)) continue;
//     answer.push(word);
//   }

//   return answer;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {string[]}
//  */
// const uncommonFromSentences = (a, b) => {
//   const tmp = new Map([...new Set(`${a} ${b}`.split(' '))].map(e => [e, 0]));
//   // console.log(tmp);
//   for (const [word] of tmp) {
//     tmp.set(
//       word,
//       ` ${a} `.indexOf(` ${word} `) -
//         ` ${a} `.lastIndexOf(` ${word} `) +
//         ` ${b} `.indexOf(` ${word} `) -
//         ` ${b} `.lastIndexOf(` ${word} `) +
//         ` ${a} ${b} `.indexOf(` ${word} `) -
//         ` ${a} ${b} `.lastIndexOf(` ${word} `),
//     );
//   }
//   // console.log(tmp);
//   [...tmp.entries()].filter(([, n]) => 0 === n).map(([word]) => word);
//   return [...tmp.entries()].filter(([, n]) => 0 === n).map(([word]) => word);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 41.67% of JavaScript online submissions
// Memory Usage: 37.1 MB, less than 25.00% of JavaScript online submissions

// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {string[]}
//  */
// const uncommonFromSentences = (a, b) =>
//   `${a} ${b}`
//     .split(' ')
//     .filter(
//       word =>
//         0 ===
//         ` ${a} `.indexOf(` ${word} `) -
//           ` ${a} `.lastIndexOf(` ${word} `) +
//           ` ${b} `.indexOf(` ${word} `) -
//           ` ${b} `.lastIndexOf(` ${word} `) +
//           ` ${a} ${b} `.indexOf(` ${word} `) -
//           ` ${a} ${b} `.lastIndexOf(` ${word} `),
//     );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 41.67% of JavaScript online submissions
// Memory Usage: 35.5 MB, less than 25.00% of JavaScript online submissions

/**
 * @param {string} a
 * @param {string} b
 * @return {string[]}
 */
const uncommonFromSentences = (a, b) =>
  `${a} ${b}`
    .split(' ')
    .filter(
      word =>
        0 ===
        ` ${a} ${b} `.indexOf(` ${word} `) -
          ` ${a} ${b} `.lastIndexOf(` ${word} `),
    );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

deepStrictEqual(
  uncommonFromSentences('this apple is sweet', 'this apple is sour'),
  ['sweet', 'sour'],
);

deepStrictEqual(uncommonFromSentences('apple apple', 'banana'), ['banana']);

deepStrictEqual(uncommonFromSentences('fd kss fd', 'fd fd kss'), []);

deepStrictEqual(uncommonFromSentences('d b zu d t', 'udb zu ap'), [
  'b',
  't',
  'udb',
  'ap',
]);
