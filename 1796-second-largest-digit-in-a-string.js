// 1796. Second Largest Digit in a String
// https://leetcode.com/problems/second-largest-digit-in-a-string/

/*

Given an alphanumeric string s, return the second largest numerical digit that
appears in s, or -1 if it does not exist.

An alphanumeric string is a string consisting of lowercase English letters and
digits.

## Constraints
- 1 <= s.length <= 500
- s consists of only lowercase English letters and/or digits.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 112 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 42.8 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const secondHighest = s => {
//   const a = [...s].reduce(
//     ([pen, ult], curr) => {
//       // console.log(curr);
//       // console.log(Number.isInteger(+curr));
//       return !Number.isInteger(+curr) || curr <= pen || +curr === ult
//         ? [pen, ult]
//         : ult < curr
//         ? [ult, +curr]
//         : [+curr, ult];
//     },
//     [-1, -1],
//   );
//   console.log(a);
//   return a[0] === a[1] ? -1 : a[0];
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const secondHighest = s =>
//   [...s].reduce(
//     ([pen, ult], curr) =>
//       !Number.isInteger(+curr) || curr <= pen || +curr === ult
//         ? [pen, ult]
//         : ult < curr
//         ? [ult, +curr]
//         : [+curr, ult],
//     [-1, -1],
//   )[0];

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 92 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 42.1 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const secondHighest = s => {
//   const a = [...s].reduce(
//     ([pen, ult], curr) => {
//       // console.log([pen, ult]);
//       return !Number.isInteger(+curr) || curr <= pen || curr == ult
//         ? [pen, ult]
//         : [Math.max(pen, Math.min(+curr, ult)), Math.max(+curr, ult)];
//     },
//     [-1, -1],
//   );
//   // console.log(a);
//   return a[0];
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 84 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 42.2 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} s
 * @return {number}
 */
const secondHighest = s =>
  [...s].reduce(
    ([pen, ult], curr) =>
      !(-1 < curr) || curr <= pen || +curr === ult
        ? [pen, ult]
        : [Math.max(pen, Math.min(+curr, ult)), Math.max(+curr, ult)],
    [-1, -1],
  )[0];

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

console.log(-1 < +'a');
console.log(-1 < +'0');

import { strictEqual } from 'assert';

// Example 1:
strictEqual(secondHighest('dfa12321afd'), 2);
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest
// digit is 2.

// Example 2:
strictEqual(secondHighest('abc1111'), -1);
// Explanation: The digits that appear in s are [1]. There is no second largest
// digit.

strictEqual(secondHighest('sjhtz8344'), 4);

strictEqual(secondHighest('ck077'), 0);
