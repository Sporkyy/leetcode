// 771. Jewels and Stones
// https://leetcode.com/problems/jewels-and-stones/

/*

You're given strings J representing the types of stones that are jewels,
and S representing the stones you have.
Each character in S is a type of stone you have.
You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are
letters. Letters are case sensitive, so "a" is considered a different type
of stone from "A".

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string} J
//  * @param {string} S
//  * @return {number}
//  */
// const numJewelsInStones = (J, S) => {
//   const occurrences = (n, h) => h.split('').filter(s => s === n).length;
//   if (0 === J.length || 0 === S.length) {
//     return 0;
//   }
//   return J.split('').reduce((acc, curr) => acc + occurrences(curr, S), 0);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const countCharInString = (needle, haystack) => {
//   let count = 0;
//   for (let i = 0; i < haystack.length; i++) {
//     if (needle === haystack[i]) count++;
//   }
//   return count;
// };

// /**
//  * @param {string} J
//  * @param {string} S
//  * @return {number}
//  */
// const numJewelsInStones = (J, S) => {
//   let count = 0;
//   for (let i = 0; i < J.length; i++) {
//     count += countCharInString(J[i], S);
//   }
//   return count;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string} J
//  * @param {string} S
//  * @return {number}
//  */
// const numJewelsInStones = (J, S) => {
//   let count = 0;
//   for (let i = 0; i < J.length; i++) {
//     for (let j = 0; j < S.length; j++) {
//       if (J[i] === S[j]) count++;
//     }
//   }
//   return count;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 80.29% of JavaScript online submissions
// Memory Usage: 33.9 MB, less than 65.18% of JavaScript online submissions

// /**
//  * @param {string} J
//  * @param {string} S
//  * @return {number}
//  */
// const numJewelsInStones = (J, S) => {
//   let count = 0;
//   for (let i = S.length - 1; 0 <= i; --i) {
//     if (-1 < J.indexOf(S[i])) {
//       ++count;
//     }
//   }
//   return count;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 33.8 MB, less than 92.71% of JavaScript online submissions

// /**
//  * @param {string} J
//  * @param {string} S
//  * @return {number}
//  */
// const numJewelsInStones = (J, S) => {
//   const jLen = J.length;
//   const sLen = S.length;
//   if (0 === jLen || 0 === sLen) return 0;
//   let count = 0;
//   for (let i = sLen - 1; 0 <= i; --i) {
//     if (J.includes(S[i])) ++count;
//   }
//   return count;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 80.29% of JavaScript online submissions
// Memory Usage: 33.8 MB, less than 90.08% of JavaScript online submissions

// /**
//  * @param {string} J
//  * @param {string} S
//  * @return {number}
//  */
// function numJewelsInStones(J, S) {
//   let count = 0;
//   for (let i = S.length - 1; 0 <= i; --i) {
//     if (J.includes(S[i])) ++count;
//   }
//   return count;
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 33.8 MB, less than 81.17% of JavaScript online submissions

// /**
//  * @param {string} J
//  * @param {string} S
//  * @return {number}
//  */
// function numJewelsInStones(J, S) {
//   if (0 === J.length || 0 === S.length) return 0;
//   let count = 0;
//   for (let i = S.length - 1; 0 <= i; --i) {
//     if (J.includes(S[i])) ++count;
//   }
//   return count;
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 80.72% of JavaScript online submissions
// Memory Usage: 33.8 MB, less than 94.45% of JavaScript online submissions

// /**
//  * @param {string} J
//  * @param {string} S
//  * @return {number}
//  */
// function numJewelsInStones(J, S) {
//   let count = 0;
//   let i = S.length;
//   while (i--) if (J.includes(S[i])) ++count;
//   return count;
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string} J
//  * @param {string} S
//  * @return {number}
//  */
// function numJewelsInStones(J, S) {
//   const dict = new Map();
//   for (stone of S) {
//     if (!dict.has(stone)) dict.set(stone, 0);
//     dict.set(stone, dict.get(stone) + 1);
//   }
//   let result = 0;
//   for (jewel of J) result += dict.get(jewel) || 0;
//   return result;
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 88 ms, faster than 6.92% of JavaScript online submissions
// Memory Usage: 34.7 MB, less than 30.23% of JavaScript online submissions

// /**
//  * @param {string} J
//  * @param {string} S
//  * @return {number}
//  */
// function numJewelsInStones(J, S) {
//   const a = new Array(127).fill(0);
//   for (let i = 0; i < S.length; i++) a[S.charCodeAt(i)]++;
//   let result = 0;
//   for (let i = 0; i < J.length; i++) result += a[J.charCodeAt(i)];
//   return result;
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 44.14% of JavaScript online submissions
// Memory Usage: 34.1 MB, less than 64.18% of JavaScript online submissions

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = (J, S) =>
  [...S].reduce((acc, curr) => (J.includes(curr) ? acc + 1 : acc), 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

strictEqual(numJewelsInStones('aA', 'aAAbbbb'), 3);

strictEqual(numJewelsInStones('z', 'ZZ'), 0);

strictEqual(numJewelsInStones('', 'a'), 0);

strictEqual(numJewelsInStones('a', ''), 0);

strictEqual(numJewelsInStones('', ''), 0);

strictEqual(numJewelsInStones('A', 'AAA'), 3);

strictEqual(numJewelsInStones('z', 'zzz'), 3);
