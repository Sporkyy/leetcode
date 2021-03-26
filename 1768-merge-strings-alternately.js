// 1768. Merge Strings Alternately
// https://leetcode.com/problems/merge-strings-alternately/

/*

You are given two strings word1 and word2. Merge the strings by adding letters
in alternating order, starting with word1. If a string is longer than the other,
append the additional letters onto the end of the merged string.

Return the merged string.

Constraints
- 1 <= word1.length, word2.length <= 100
- word1 and word2 consist of lowercase English letters.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 84 ms, faster than 32.68% of JavaScript online submissions
// Memory Usage: 40.7 MB, less than 5.55% of JavaScript online submissions

// /**
//  * @param {string} word1
//  * @param {string} word2
//  * @return {string}
//  */
// const mergeAlternately = (word1, word2) => {
//   console.log(word2.slice(word1.length));
//   const res = Array(word1.length * 2)
//     .fill()
//     .map((_, i) => {
//       // console.log(i % 2);
//       // console.log(Math.trunc(i / 2));
//       // console.log([word1, word2][i % 2]);
//       // console.log([word1, word2][i % 2][Math.trunc(i / 2)]);
//       return [word1, word2][i % 2][Math.trunc(i / 2)];
//     })
//     .join('');
//   // console.log(res);
//   // console.log(word2.slice(word1.length));
//   return `${res}${word2.slice(word1.length)}`;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 84 ms, faster than 32.68% of JavaScript online submissions
// Memory Usage: 40 MB, less than 9.00% of JavaScript online submissions

// /**
//  * @param {string} word1
//  * @param {string} word2
//  * @return {string}
//  */
// const mergeAlternately = (word1, word2) =>
//   `${Array(Math.min(word1.length, word2.length) * 2)
//     .fill()
//     .map((_, i) => [word1, word2][i % 2][Math.trunc(i / 2)])
//     .join('')}${word1.slice(word2.length)}${word2.slice(word1.length)}`;

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 68 ms, faster than 98.64% of JavaScript online submissions
// Memory Usage: 38.8 MB, less than 66.09% of JavaScript online submissions

// /**
//  * @param {string} word1
//  * @param {string} word2
//  * @return {string}
//  */
// const mergeAlternately = (word1, word2, leftover = '') => {
//   if (word1.length < word2.length)
//     return mergeAlternately(
//       word1,
//       word2.slice(0, word1.length),
//       word2.slice(word1.length),
//     );
//   if (word2.length < word1.length)
//     return mergeAlternately(
//       word1.slice(0, word2.length),
//       word2,
//       word1.slice(word2.length),
//     );
//   // console.log([...word1, ...word2]);
//   return (
//     [...word1, ...word2]
//       .map((_, i, a) => {
//         let ni = i / 2;
//         if (i % 2) ni = Math.trunc(ni + word2.length);
//         return a[ni];
//       })
//       .join('') + leftover
//   );
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 84.22% of JavaScript online submissions
// Memory Usage: 39.2 MB, less than 28.24% of JavaScript online submissions

// /**
//  * @param {string} word1
//  * @param {string} word2
//  * @return {string}
//  */
// const mergeAlternately = (word1, word2, leftover = '', min = word1.length) =>
//   word1.length < word2.length
//     ? mergeAlternately(
//         word1,
//         word2.slice(0, word1.length),
//         word2.slice(word1.length),
//         word1.length,
//       )
//     : word2.length < word1.length
//     ? mergeAlternately(
//         word1.slice(0, word2.length),
//         word2,
//         word1.slice(word2.length),
//         word2.length,
//       )
//     : [...word1, ...word2]
//         .map(
//           (_, i, a) => a[i < min * 2 ? Math.trunc(i / 2 + (i % 2) * min) : i],
//         )
//         .join('') + leftover;

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 84.22% of JavaScript online submissions
// Memory Usage: 40.6 MB, less than 5.55% of JavaScript online submissions

// /**
//  * @param {string} word1
//  * @param {string} word2
//  * @return {string}
//  */
// const mergeAlternately = (word1, word2) =>
//   word2.length < word1.length
//     ? mergeAlternately(
//         word1.slice(0, word2.length),
//         `${word2}${word1.slice(word2.length)}`,
//       )
//     : [...word1, ...word2]
//         .map(
//           (_, i, a) =>
//             a[
//               i < word1.length * 2
//                 ? Math.trunc(i / 2 + (i % 2) * word1.length)
//                 : i
//             ],
//         )
//         .join('');

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 84 ms, faster than 32.28% of JavaScript online submissions
// Memory Usage: 39.1 MB, less than 28.16% of JavaScript online submissions

// /**
//  * @param {string} word1
//  * @param {string} word2
//  * @return {string}
//  */
// const mergeAlternately = (word1, word2) => {
//   let res = '';
//   for (let i = 0; i < Math.min(word1.length, word2.length); i++)
//     res = `${res}${word1[i]}${word2[i]}`;
//   return `${res}${word1.slice(res.length / 2)}${word2.slice(res.length / 2)}`;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 84.10% of JavaScript online submissions
// Memory Usage: 39.1 MB, less than 38.35% of JavaScript online submissions

// /**
//  * @param {string} word1
//  * @param {string} word2
//  * @return {string}
//  */
// const mergeAlternately = (word1, word2) => {
//   let [res, i] = ['', 0];
//   while (i < word1.length && i < word2.length) res += word1[i] + word2[i++];
//   while (i < word1.length) res += word1[i++];
//   while (i < word2.length) res += word2[i++];
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 80 ms, faster than 63.11% of JavaScript online submissions
// Memory Usage: 39.7 MB, less than 11.77% of JavaScript online submissions

// /**
//  * @param {string} word1
//  * @param {string} word2
//  * @return {string}
//  */
// const mergeAlternately = (word1, word2) => {
//   let res = '';
//   for (let i = 0; i < word1.length + word2.length; i++) {
//     if (i < word1.length) res += word1[i];
//     if (i < word2.length) res += word2[i];
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 84.10% of JavaScript online submissions
// Memory Usage: 38.9 MB, less than 66.26% of JavaScript online submissions

// /**
//  * @param {string} word1
//  * @param {string} word2
//  * @return {string}
//  */
// const mergeAlternately = (word1, word2) => {
//   let res = [];
//   for (let i = 0; i < word1.length + word2.length; i++) {
//     if (i < word1.length) res.push(word1[i]);
//     if (i < word2.length) res.push(word2[i]);
//   }
//   return res.join('');
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 80 ms, faster than 63.11% of JavaScript online submissions
// Memory Usage: 39 MB, less than 38.35% of JavaScript online submissions

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
  let [i, res] = [0, []];
  while (i < word1.length && i < word2.length) {
    if (i < word1.length) res.push(word1[i]);
    if (i < word2.length) res.push(word2[i]);
    i++;
  }
  res.push(word1.slice(i), word2.slice(i));
  return res.join('');
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(mergeAlternately('abc', 'pqr'), 'apbqcr');
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

/*

|  0 |  1 |  2 |  3 |  4 |  5 |
|  a |  b |  c |  p |  q |  r |
|  0 |  2 |  4 |  1 |  3 |  5 |
| +0 | +1 | +2 | -2 | -1 | -0 |

*/

// Example 2:
strictEqual(mergeAlternately('ab', 'pqrs'), 'apbqrs');
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b
// word2:    p   q   r   s
// merged: a p b q   r   s

/*

|  0 |  1 |  2 |  3 |  4 |  5 |
|  a |  b |  p |  q |  r |  s |
|  0 |  2 |  1 |  3 |  4 |  5 |
| +0 | +1 | -1 | -0 | +0 | +0 |

*/

// Example 3:
strictEqual(mergeAlternately('abcd', 'pq'), 'apbqcd');
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q
// merged: a p b q c   d

/*

|  0 |  1 |  2 |  3 |  4 |  5 |
|  a |  b |  c |  d |  p |  q |
|  0 |  2 |  4 |  5 |  1 |  3 |
| +0 | +1 | +2 | +2 | -3 | -2 |

*/
