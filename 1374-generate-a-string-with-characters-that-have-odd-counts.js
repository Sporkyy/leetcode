// 1374. Generate a String With Characters That Have Odd Counts
//       https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/

/*

Given an integer n, return a string with n characters such that each character
in such string occurs an odd number of times.

The returned string must contain only lowercase English letters. If there are
multiples valid strings, return any of them.

Constraints:

1 <= n <= 500

*/

import { ok } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 48 ms, faster than 97.33% of JavaScript online submissions
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number} n
//  * @return {string}
//  */
// const generateTheString = n => {
//   const stock = new Array(26).fill(0);
//   for (let i = 0; i < 26 && 0 < n; i++, n--) stock[i]++;
//   stock[25] += n;
//   if (0 === stock[25] % 2) {
//     stock[24] += stock[25];
//     stock[25] = 0;
//   }
//   return stock
//     .map((n, idx) => String.fromCharCode(97 + idx).repeat(n))
//     .join('');
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 70.35% of JavaScript online submissions
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number} n
//  * @return {string}
//  */
// const generateTheString = n =>
//   0 === n % 2
//     ? `a${'b'.repeat(n - 1)}`
//     : `a${1 < n ? 'b' : ''}${2 < n ? 'c'.repeat(n - 2) : ''}`;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 70.35% of JavaScript online submissions
// Memory Usage: 33.6 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number} n
 * @return {string}
 */
const generateTheString = n => `${'a'.repeat(n - 1)}${n % 2 ? 'a' : 'b'}`;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// console.log(generateTheString(1));
// console.log(generateTheString(2));
// console.log(generateTheString(3));
// console.log(generateTheString(4));
// console.log(generateTheString(5));
// console.log(generateTheString(6));
// console.log(generateTheString(7));
// console.log(generateTheString(8));
// console.log(generateTheString(9));
// console.log(generateTheString(10));
// console.log(generateTheString(26));
// console.log(generateTheString(27));
// console.log(generateTheString(28));
// console.log(generateTheString(29));
// console.log(generateTheString(30));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const check = s => s.match(/(\w)\1*/g).every(s => 1 === s.length % 2);

// console.log(check('a'));
// console.log(check('aa'));
// console.log(check('ab'));
// console.log(check('abb'));
// console.log(check('aabb'));
// console.log(check('abc'));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
ok(check(generateTheString(4)));

// Example 2:
ok(check(generateTheString(2)));

// Example 3:
ok(check(generateTheString(7)));
