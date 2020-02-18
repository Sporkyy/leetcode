// 893. Groups of Special-Equivalent Strings
// https://leetcode.com/problems/groups-of-special-equivalent-strings/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 49.68% of JavaScript online submissions
// for Groups of Special-Equivalent Strings.
// Memory Usage: 37.2 MB, less than 100.00% of JavaScript online submissions
// for Groups of Special-Equivalent Strings.

// const evenChars = s =>
//   s
//     .split('')
//     .filter((c, i) => 0 === i % 2)
//     .join('');

// const oddChars = s =>
//   s
//     .split('')
//     .filter((c, i) => 1 === i % 2)
//     .join('');

// const sortedString = s =>
//   s
//     .split('')
//     .sort()
//     .join('');

// const normalized = s => `${sortedString(evenChars(s))}${sortedString(oddChars(s))}`;

// const numUniqueElements = a => new Set(a).size;

// /**
//  * @param {string[]} A
//  * @return {number}
//  */
// const numSpecialEquivGroups = A => numUniqueElements(A.map(s => normalized(s)));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 98.08% of JavaScript online submissions
// for Groups of Special-Equivalent Strings.
// Memory Usage: 37.3 MB, less than 100.00% of JavaScript online submissions
// for Groups of Special-Equivalent Strings.

/**
 * @param {string[]} A
 * @return {number}
 */
const numSpecialEquivGroups = A =>
  new Set(
    A.map(a => {
      const sorted = new Array(56).fill(0);
      for (let i = 0; i < a.length; i++)
        if (i & 1) sorted[a.charCodeAt(i) - 71]++;
        else sorted[a.charCodeAt(i) - 97]++;
      return sorted.join('');
    }),
  ).size;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

strictEqual(numSpecialEquivGroups(['a', 'b', 'c', 'a', 'c', 'c']), 3);

strictEqual(numSpecialEquivGroups(['aa', 'bb', 'ab', 'ba']), 4);

strictEqual(
  numSpecialEquivGroups(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']),
  3,
);

strictEqual(numSpecialEquivGroups(['abcd', 'cdab', 'adcb', 'cbad']), 1);
