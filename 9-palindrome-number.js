// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 268 ms, faster than 59.92% of JavaScript online submissions
// Memory Usage: 46.1 MB, less than 7.87% of JavaScript online submissions

// const reverseString = s =>
//   s
//     .split('')
//     .reverse()
//     .join('');

/**
 * @param {number} x
 * @return {boolean}
 */
// const isPalindrome = x => reverseString('' + x) === '' + x;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 264 ms, faster than 64.45% of JavaScript online submissions
// Memory Usage: 45.6 MB, less than 46.07% of JavaScript online submissions

/**
 * @param {number} x
 * @return {boolean}
 */
// const isPalindrome = x => {
//   const s = '' + x;
//   for (let i = 0, j = s.length - 1; 0 <= j; i++, --j) {
//     if (s[i] !== s[j]) return false;
//   }
//   return true;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 248 ms, faster than 74.99% of JavaScript online submissions
// Memory Usage: 44.5 MB, less than 96.63% of JavaScript online submissions

/**
 * @param {number} x
 * @return {boolean}
 */
// const isPalindrome = x => {
//   let revX = 0;
//   let tmp = x;
//   while (0 < tmp) {
//     revX = revX * 10 + (tmp % 10);
//     tmp = Math.trunc(tmp / 10);
//   }
//   return revX === x;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 236 ms, faster than 98.21% of JavaScript online submissions
// Memory Usage: 45.4 MB, less than 61.35% of JavaScript online submissions

/**
 * @param {number} x
 * @return {boolean}
 */
// const isPalindrome = x => {
//   if (x < 0 || (x !== 0 && 0 === x % 10)) return false;

//   let revX = 0;
//   while (revX < x) {
//     revX = revX * 10 + (x % 10);
//     x = Math.trunc(x / 10);
//   }

//   return x === revX || x === Math.trunc(revX / 10);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 236 ms, faster than 98.21% of JavaScript online submissions
// Memory Usage: 45.3 MB, less than 65.62% of JavaScript online submissions

// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// const isPalindrome = x => {
//   if (x < 0 || (x !== 0 && 0 === x % 10)) {
//     return false;
//   } else if (x < 10) {
//     return true;
//   } else if (x < 100) {
//     if (Math.trunc(x / 10) !== x % 10) return false;
//   } else if (x < 1000) {
//     if (Math.trunc(x / 100) !== x % 10) return false;
//   } else if (x < 10000) {
//     if (Math.trunc(x / 1000) !== x % 10) return false;
//   } else if (x < 100000) {
//     if (Math.trunc(x / 10000) !== x % 10) return false;
//   } else if (x < 1000000) {
//     if (Math.trunc(x / 100000) !== x % 10) return false;
//   } else if (x < 10000000) {
//     if (Math.trunc(x / 1000000) !== x % 10) return false;
//   } else if (x < 100000000) {
//     if (Math.trunc(x / 10000000) !== x % 10) return false;
//   } else if (x < 1000000000) {
//     if (Math.trunc(x / 100000000) !== x % 10) return false;
//   }

//   let revX = 0;
//   while (revX < x) {
//     revX = revX * 10 + (x % 10);
//     x = Math.trunc(x / 10);
//   }

//   return x === revX || x === Math.trunc(revX / 10);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// const isPalindrome = x =>
//   x === parseInt([...Math.abs(x).toString()].reverse().join(''), 10);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 180 ms, faster than 86.73% of JavaScript online submissions
// Memory Usage: 44.9 MB, less than 96.55% of JavaScript online submissions

/**
 * Reverse an integer
 *
 * @param {number} x The number in obverse
 * @param {number} [y=0] The number in reverse
 * @return {number} The reverse of x
 */
const rev = (x, y = 0) => (0 === x ? y : rev(~~(x / 10), y * 10 + (x % 10)));

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => (x < 0 ? false : x === rev(x));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { ok } from 'assert';

ok(isPalindrome(121));

ok(!isPalindrome(-121));

ok(!isPalindrome(10));

ok(!isPalindrome(1000021));

ok(isPalindrome(11));

ok(isPalindrome(111));

ok(isPalindrome(1239321));

ok(isPalindrome(1001));
