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

// Runtime: 72 ms, faster than 78.25% of JavaScript online submissions
// Memory Usage: 37.4 MB, less than 7.46% of JavaScript online submissions

// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {string[]}
//  */
// const uncommonFromSentences = (a, b) =>
//   [
//     ...`${a} ${b}`
//       .split(' ')
//       .reduce(
//         (acc, curr) => acc.set(curr, (acc.get(curr) || 0) + 1),
//         new Map(),
//       ),
//   ].reduce((acc, [word, cnt]) => {
//     if (1 === cnt) acc.push(word);
//     return acc;
//   }, []);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 63.34% of JavaScript online submissions
// Memory Usage: 37.2 MB, less than 9.33% of JavaScript online submissions

// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {string[]}
//  */
// const uncommonFromSentences = (a, b) => {
//   const mapA = [...a.split(' ')].reduce(
//     (acc, curr) => acc.set(curr, (acc.get(curr) || 0) + 1),
//     new Map(),
//   );

//   const mapB = [...b.split(' ')].reduce(
//     (acc, curr) =>
//       acc.set(curr, (acc.get(curr) || 0) + 1 + (mapA.get(curr) || 0)),
//     new Map(),
//   );

//   for (const word of mapB.keys()) mapA.delete(word);

//   return [...mapA]
//     .reduce((acc, [word, cnt]) => {
//       if (1 === cnt) acc.push(word);
//       return acc;
//     }, [])
//     .concat(
//       [...mapB].reduce((acc, [word, cnt]) => {
//         if (1 === cnt) acc.push(word);
//         return acc;
//       }, []),
//     );
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 91.00% of JavaScript online submissions
// Memory Usage: 37.1 MB, less than 13.83% of JavaScript online submissions

// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {string[]}
//  */
// const uncommonFromSentences = (a, b) => {
//   const map = new Map();
//   for (const word of a.split(' ')) map.set(word, (map.get(word) || 0) + 1);
//   for (const word of b.split(' ')) map.set(word, (map.get(word) || 0) + 1);
//   for (const [word, cnt] of map) if (1 < cnt) map.delete(word);
//   return [...map.keys()];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 78.46% of JavaScript online submissions
// Memory Usage: 37.1 MB, less than 13.19% of JavaScript online submissions

// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {string[]}
//  */
// const uncommonFromSentences = (a, b) => {
//   const map = new Map();
//   for (const word of a.split(' ')) map.set(word, (map.get(word) || 0) + 1);
//   for (const word of b.split(' ')) map.set(word, (map.get(word) || 0) + 1);
//   for (const [word, cnt] of map) if (1 < cnt) map.delete(word);
//   return [...map].reduce((acc, [word, cnt]) => {
//     if (1 === cnt) acc.push(word);
//     return acc;
//   }, []);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 78.46% of JavaScript online submissions
// Memory Usage: 38.4 MB, less than 5.15% of JavaScript online submissions

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
//         ` ${a} ${b} `.indexOf(` ${word} `) -
//           ` ${a} ${b} `.lastIndexOf(` ${word} `),
//     );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 63.34% of JavaScript online submissions
// Memory Usage: 37.2 MB, less than 9.98% of JavaScript online submissions

// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {string[]}
//  */
// const uncommonFromSentences = (a, b) => {
//   const map = new Map();
//   for (const word of a.split(' ')) map.set(word, (map.get(word) || 0) + 1);
//   for (const word of b.split(' ')) map.set(word, (map.get(word) || 0) + 1);
//   return [...map].reduce((acc, [word, cnt]) => {
//     if (1 === cnt) acc.push(word);
//     return acc;
//   }, []);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 96.78% of JavaScript online submissions
// Memory Usage: 37.2 MB, less than 11.58% of JavaScript online submissions

/**
 * @param {string} a
 * @param {string} b
 * @return {string[]}
 */
const uncommonFromSentences = (a, b) =>
  [
    ...`${a} ${b}`
      .split(' ')
      .reduce(
        (map, word) => map.set(word, (map.get(word) || 0) + 1),
        new Map(),
      ),
  ].reduce((acc, [word, cnt]) => {
    if (1 === cnt) acc.push(word);
    return acc;
  }, []);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 63.34% of JavaScript online submissions
// Memory Usage: 37.4 MB, less than 7.72% of JavaScript online submissions

// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {string[]}
//  */
// const uncommonFromSentences = (a, b) =>
//   [
//     ...`${a} ${b}`
//       .split(' ')
//       .reduce(
//         (map, word) => map.set(word, (map.get(word) || 0) + 1),
//         new Map(),
//       ),
//   ].reduce((acc, [word, cnt]) => acc.concat(1 === cnt ? [word] : []), []);

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

deepStrictEqual(uncommonFromSentences('d b zu d t', 'udb zu ap ap'), [
  'b',
  't',
  'udb',
]);
