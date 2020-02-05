// 1018. Binary Prefix Divisible By 5
// https://leetcode.com/problems/binary-prefix-divisible-by-5/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Limited by 53-big numbers

/**
 * @param {number[]} A
 * @return {boolean[]}
 */
// var prefixesDivBy5 = function(A) {
//   const s = A.join('');
//   const d = new Array(A.length);
//   const b2d = b => parseInt(b, 2);
//   const isM5 = n => 0 === n % 5;
//   for (let i = 0, a = ''; i < s.length; i++) d[i] = isM5(b2d((a += s[i])));
//   return d;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Works in all reasonable cases

/**
 * @param {number[]} A
 * @return {boolean[]}
 */
// const prefixesDivBy5 = A =>
//   A.map((n, i) => BigInt(0) === BigInt(`0b${A.slice(0, i).join('')}${n}`) % BigInt(5));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 34.53% of JavaScript online submissions
// Memory Usage: 42.1 MB, less than 13.42% of JavaScript online submissions

/**
 * @param {number[]} A
 * @return {boolean[]}
 */
// const prefixesDivBy5 = A => {
//   const result = [];
//   for (let i = 0, s = ''; i < A.length; i++) {
//     s += A[i];
//     if (BigInt(0) === BigInt(`0b${s}`) % BigInt(5)) {
//       result.push(true);
//       s = '';
//     } else {
//       result.push(false);
//     }
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 59.00% of JavaScript online submissions
// Memory Usage: 38.2 MB, less than 92.31% of JavaScript online submissions

/**
 * @param {number[]} A
 * @param {number} acc
 * @return {boolean[]}
 */
const prefixesDivBy5 = (A, acc = 0) => A.map(d => !(acc = (acc * 2 + d) % 5));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(prefixesDivBy5([0, 1, 1]), [true, false, false]);

deepStrictEqual(prefixesDivBy5([1, 1, 1]), [false, false, false]);

deepStrictEqual(prefixesDivBy5([0, 1, 1, 1, 1, 1]), [
  true,
  false,
  false,
  false,
  true,
  false,
]);

deepStrictEqual(prefixesDivBy5([1, 1, 1, 0, 1]), [
  false,
  false,
  false,
  false,
  false,
]);

deepStrictEqual(
  prefixesDivBy5([1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1]),
  [
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
);

deepStrictEqual(
  prefixesDivBy5([
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
  ]),
  [
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
);

deepStrictEqual(
  prefixesDivBy5([
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    1,
    1,
    0,
    0,
    1,
    1,
    1,
  ]),
  [
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    false,
    false,
    false,
  ],
);
