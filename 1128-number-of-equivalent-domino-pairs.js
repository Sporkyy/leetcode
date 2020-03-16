// 1128. Number of Equivalent Domino Pairs
// https://leetcode.com/problems/number-of-equivalent-domino-pairs/

/*

Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] =
[c, d] if and only if either (a==c and b==d), or (a==d and b==c) - that is, one
domino can be rotated to be equal to another domino.

Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and
dominoes[i] is equivalent to dominoes[j].

Constraints:
- 1 <= dominoes.length <= 40000
- 1 <= dominoes[i][j] <= 9

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[][]} dominoes
//  * @return {number}
//  */
// const numEquivDominoPairs = dominoes =>
//   dominoes.reduce(
//     (acc, curr, idx) =>
//       idx === dominoes.length - 1
//         ? acc
//         : Math.min(...curr) === Math.min(...dominoes[idx + 1]) &&
//           Math.max(...curr) === Math.max(...dominoes[idx + 1])
//         ? acc + 1
//         : acc,
//     0,
//   );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[][]} dominoes
//  * @return {number}
//  */
// const numEquivDominoPairs = dominoes =>
//   [dominoes.map(a => Number(`${Math.min(...a)}${Math.max(...a)}`))].reduce(
//     (_acc, _curr, _idx, a) => a[0].length - new Set(a[0]).size,
//     0,
//   );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 82.99% of JavaScript online submissions
// Memory Usage: 41.8 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[][]} dominoes
//  * @return {number}
//  */
// const numEquivDominoPairs = dominoes => {
//   const nums = dominoes.map(a => Number(`${Math.min(...a)}${Math.max(...a)}`));
//   const cnts = new Array(100).fill(0);
//   for (const num of nums) cnts[num]++;
//   return cnts.reduce((acc, curr) => acc + ((curr - 1) * curr) / 2, 0);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 97.42% of JavaScript online submissions
// Memory Usage: 42.1 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[][]} dominoes
 * @return {number}
 */
const numEquivDominoPairs = dominoes => {
  const cnts = new Array(100).fill(0);
  for (const d of dominoes) cnts[+`${Math.min(...d)}${Math.max(...d)}`]++;
  return cnts.reduce((acc, curr) => acc + ((curr - 1) * curr) / 2, 0);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(
  numEquivDominoPairs([
    [1, 2],
    [2, 1],
    [3, 4],
    [5, 6],
  ]),
  1,
);

strictEqual(
  numEquivDominoPairs([
    [1, 2],
    [1, 2],
    [1, 1],
    [1, 2],
    [2, 2],
  ]),
  3,
);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*

12, 12, 33, 44, 55 => 12, 33, 44, 55 = 1

12, 12, 12, 33, 44, => 12, 33, 44 = 3

12, 12, 12, 33, 33, => 12, 33 = 4

12, 12, 33, 33, 44 => 12, 33, 44 = 2

12, 12, 33, 33, 44, 44, 44 => 12, 33, 44 = 5

// =-=-=-=

11 = 0 = 0 * (0 + 1) / 2
11, 11 = 1 = 1 * (1 + 1) / 2
11, 11, 11 = 3 = 2 * (2 + 1) / 2
11, 11, 11, 11 = 6 = 3 * (3 + 1) / 2
11, 11, 11, 11, 11 = 10 = 4 * (4 + 1) / 2

*/
