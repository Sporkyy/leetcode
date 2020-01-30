// 1078. Occurrences After Bigram
// https://leetcode.com/problems/occurrences-after-bigram/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 48 ms, faster than 91.64% of JavaScript online submissions
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} text
//  * @param {string} first
//  * @param {string} second
//  * @return {string[]}
//  */
// const findOcurrences = (text, first, second) =>
//   text.split(' ').reduce((acc, curr, i, t) => {
//     if (i < 2) return acc;
//     if (first === t[i - 2] && second === t[i - 1]) acc.push(curr);
//     return acc;
//   }, []);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 30.87% of JavaScript online submissions
// Memory Usage: 33.1 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} text
//  * @param {string} first
//  * @param {string} second
//  * @return {string[]}
//  */
// const findOcurrences = (text, first, second) =>
//   text
//     .split(' ')
//     .reduce(
//       (acc, curr, idx, src) =>
//         first === src[idx - 2] && second === src[idx - 1]
//           ? acc.concat(curr)
//           : acc,
//       [],
//     );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 48 ms, faster than 91.28% of JavaScript online submissions
// Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
const findOcurrences = (text, first, second) =>
  text
    .split(' ')
    .filter((_, idx, src) => first === src[idx - 2] && second === src[idx - 1]);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(
  findOcurrences('alice is a good girl she is a good student', 'a', 'good'),
  ['girl', 'student'],
);

deepStrictEqual(findOcurrences('we will we will rock you', 'we', 'will'), [
  'we',
  'rock',
]);
