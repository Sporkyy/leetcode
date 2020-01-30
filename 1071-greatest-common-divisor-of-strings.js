// 1071. Greatest Common Divisor of Strings
// https://leetcode.com/problems/greatest-common-divisor-of-strings/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 70.42% of JavaScript online submissions
// Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
// const gcdOfStrings = (str1, str2) => {
//   const findGcd = (a, b) => (0 === b ? a : findGcd(b, a % b));
//   const gcd = findGcd(str1.length, str2.length);
//   const combo = str1 + str2;
//   const gcdString = combo.substring(0, gcd);
//   for (let i = gcd; i < combo.length; i += gcd) {
//     if (gcdString !== combo.substring(i, i + gcd)) return '';
//   }
//   return gcdString;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 49.30% of JavaScript online submissions
// Memory Usage: 35.3 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
// const gcdOfStrings = (str1, str2) => {
//   const findGcd = (a, b) => (0 === b ? a : findGcd(b, a % b));
//   const gcd = findGcd(str1.length, str2.length);
//   const combo = str1 + str2;
//   for (let i = 0; i < gcd; i++) {
//     for (let j = i + gcd; j < combo.length; j += gcd) {
//       if (combo.charAt(i) !== combo.charAt(j)) return '';
//     }
//   }
//   return combo.substring(0, gcd);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 49.30% of JavaScript online submissions
// Memory Usage: 35.3 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
// const gcdOfStrings = (str1, str2) => {
//   const findGcd = (a, b) => (0 === b ? a : findGcd(b, a % b));
//   const gcd = findGcd(str1.length, str2.length);
//   for (let i = 0; i < gcd; i++) {
//     for (let j = i + gcd; j < str1.length; j += gcd) {
//       if (str1.charAt(i) !== str1.charAt(j)) return '';
//     }
//     for (let j = i; j < str2.length; j += gcd) {
//       if (str1.charAt(i) !== str2.charAt(j)) return '';
//     }
//   }
//   return str1.substring(0, gcd);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 25.35% of JavaScript online submissions
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
// const gcdOfStrings = (str1, str2) => {
//   const findGcd = (a, b) => (0 === b ? a : findGcd(b, a % b));
//   const gcd = findGcd(str1.length, str2.length);
//   const gcdString = str1.substring(0, gcd);
//   if (0 < str2.replace(new RegExp(gcdString, 'g'), '').length) return '';
//   return gcdString;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 91.55% of JavaScript online submissions
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
// const gcdOfStrings = (str1, str2) => {
//   const len1 = str1.length;
//   const len2 = str2.length;
//   if (len1 < len2) return gcdOfStrings(str2, str1);
//   if (len1 === len2 && str1 !== str2) return '';
//   if (str1 !== str1.substring(len2, len1) + str2) return '';
//   const findGcd = (a, b) => (0 === b ? a : findGcd(b, a % b));
//   return str1.substring(0, findGcd(str1.length, str2.length));
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 49.30% of JavaScript online submissions
// Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
// const gcdOfStrings = (str1, str2) => {
//   const len1 = str1.length;
//   const len2 = str2.length;
//   if (
//     (len1 === len2 && str1 !== str2) ||
//     (len2 < len1 && str1 !== str1.substring(len2, len1) + str2) ||
//     (len1 < len2 && str2 !== str2.substring(len2, len1) + str1)
//   ) {
//     return '';
//   }
//   const findGcd = (a, b) => (0 === b ? a : findGcd(b, a % b));
//   return str1.substring(0, findGcd(str1.length, str2.length));
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 48 ms, faster than 95.77% of JavaScript online submissions
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} str1
//  * @param {string} str2
//  * @return {string}
//  */
// const gcdOfStrings = (str1, str2) => {
//   if (str1 + str2 !== str2 + str1) return '';
//   const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));
//   return str1.substring(0, gcd(str1.length, str2.length));
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 112 ms, faster than 7.43% of JavaScript online submissions
// Memory Usage: 33.6 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number} x
 * @param {number} y
 * @return {number} The greatest common denominator
 */
const gcd = (x, y) => (0 === y ? x : gcd(y, x % y));

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = (str1, str2) =>
  str1 + str2 !== str2 + str1
    ? ''
    : str1.substring(0, gcd(str1.length, str2.length));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(gcdOfStrings('ABCABC', 'ABC'), 'ABC');

strictEqual(gcdOfStrings('ABABAB', 'ABAB'), 'AB');

strictEqual(gcdOfStrings('LEET', 'CODE'), '');

strictEqual(
  gcdOfStrings(
    'TAUXXTAUXXTAUXXTAUXXTAUXX',
    'TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX',
  ),
  'TAUXX',
);

strictEqual(gcdOfStrings('ABABAB', 'ABCD'), '');

strictEqual(gcdOfStrings('ABCD', 'ABABAB'), '');

strictEqual(
  gcdOfStrings(
    'NLZGMNLZGMNLZGMNLZGMNLZGMNLZGMNLZGMNLZGM',
    'NLZGMNLZGMNLZGMNLZGMNLZGMNLZGMNLZGMNLZGMNLZGM',
  ),
  'NLZGM',
);

strictEqual(
  gcdOfStrings(
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
  ),
  'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
);
