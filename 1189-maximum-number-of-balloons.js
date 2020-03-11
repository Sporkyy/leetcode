// 1189. Maximum Number of Balloons
// https://leetcode.com/problems/maximum-number-of-balloons/

/*

Given a string text, you want to use the characters of text to form as many
instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of
instances that can be formed.

Constraints:

- 1 <= text.length <= 10^4
- text consists of lower case English letters only.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 34.25% of JavaScript online submissions
// Memory Usage: 37.6 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} text
//  * @return {number}
//  */
// const maxNumberOfBalloons = text => {
//   const cnts = [...text].reduce((acc, curr) => {
//     acc[curr.charCodeAt(0) - 97]++;
//     return acc;
//   }, new Array(26).fill(0));
//   return Math.min(
//     /* b */ cnts[1],
//     /* a */ cnts[0],
//     /* l */ Math.trunc(cnts[11] / 2),
//     /* o */ Math.trunc(cnts[14] / 2),
//     /* n */ cnts[13],
//   );
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 75.14% of JavaScript online submissions
// Memory Usage: 34.2 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} text
//  * @return {number}
//  */
// const maxNumberOfBalloons = text =>
//   Math.min(
//     /* b  */ (text.match(/(b)/g) || '').length,
//     /* a  */ (text.match(/(a)/g) || '').length,
//     /* ll */ Math.trunc((text.match(/(l)/g) || '').length / 2),
//     /* oo */ Math.trunc((text.match(/(o)/g) || '').length / 2),
//     /* n  */ (text.match(/(n)/g) || '').length,
//   );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 34.25% of JavaScript online submissions
// Memory Usage: 37.6 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} text
 * @return {number}
 */
const maxNumberOfBalloons = text =>
  [
    ...[...text].reduce(
      (acc, curr) => (acc.has(curr) ? acc.set(curr, acc.get(curr) + 1) : acc),
      new Map([
        ['b', 0],
        ['a', 0],
        ['l', 0],
        ['o', 0],
        ['n', 0],
      ]),
    ),
  ].reduce(
    (acc, [c, cnt]) =>
      Math.min(acc, Math.trunc(cnt / (/[lo]/.test(c) ? 2 : 1)) || 0),
    Infinity,
  );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(maxNumberOfBalloons('nlaebolko'), 1);

// Example 2:
strictEqual(maxNumberOfBalloons('loonbalxballpoon'), 2);

// Example 3:
strictEqual(maxNumberOfBalloons('leetcode'), 0);

strictEqual(maxNumberOfBalloons('balon'), 0);
