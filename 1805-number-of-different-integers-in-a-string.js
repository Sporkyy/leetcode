// 1805. Number of Different Integers in a String
// https://leetcode.com/problems/number-of-different-integers-in-a-string/

/*

You are given a string word that consists of digits and lowercase English
letters.

You will replace every non-digit character with a space. For example,
"a123bc34d8ef34" will become " 123  34 8  34". Notice that you are left with
some integers that are separated by at least one space: "123", "34", "8", and
"34".

Return the number of different integers after performing the replacement
operations on word.

Two integers are considered different if their decimal representations without
any leading zeros are different.

## Constraints
- 1 <= word.length <= 1000
- word consists of digits and lowercase English letters.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 89.95% of JavaScript online submissions
// Memory Usage: 38.5 MB, less than 92.34% of JavaScript online submissions

// /**
//  * @param {string} word
//  * @return {number}
//  */
// const numDifferentIntegers = word => {
//   // console.log(word.replace(/\D+/g, ' '));
//   // console.log(word.split(/\D+/g).filter(Number));
//   // return new Set(word.split(/\D+/g).reduce((acc, curr) => {
//   //   if (curr.length) setImmediate(.)
//   //   return acc;
//   // }), new Set()).size;
//   // console.log(
//   //   word
//   //     .split(/\D+/g)
//   //     .filter(s => s.length)
//   //     .map(Number),
//   // );
//   // console.log(
//   //   new Set(
//   //     word
//   //       .split(/\D+/g)
//   //       .filter(s => s.length)
//   //       .map(Number),
//   //   ).size,
//   // );
//   return new Set(
//     word
//       .split(/\D+/g)
//       .filter(s => s.length)
//       .map(Number),
//   ).size;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 80 ms, faster than 82.30% of JavaScript online submissions
// Memory Usage: 38.6 MB, less than 88.04% of JavaScript online submissions

/**
 * @param {string} word
 * @return {number}
 */
const numDifferentIntegers = word =>
  new Set(
    word
      .split(/\D+/g)
      .filter(s => s.length)
      .map(Number),
  ).size;

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(numDifferentIntegers('a123bc34d8ef34'), 3);
// Explanation: The three different integers are "123", "34", and "8". Notice
// that "34" is only counted once.

// Example 2:
strictEqual(numDifferentIntegers('leet1234code234'), 2);

// Example 3:
strictEqual(numDifferentIntegers('a1b01c001'), 1);
// Explanation: The three integers "1", "01", and "001" all represent the same
// integer because the leading zeros are ignored when comparing their decimal
// values.

strictEqual(
  numDifferentIntegers('4w31am0ets6sl5go5ufytjtjpb7b0sxqbee2blg9ss'),
  8,
);

/*

4w31am0ets6sl5go5ufytjtjpb7b0sxqbee2blg9ss
4 31  0   6

*/
