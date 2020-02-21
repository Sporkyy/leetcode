// 728. Self Dividing Numbers
// https://leetcode.com/problems/self-dividing-numbers/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 58.03% of JavaScript online submissions
// Memory Usage: 38.2 MB, less than 6.48% of JavaScript online submissions

// /**
//  * @param {number} left
//  * @param {number} right
//  * @return {number[]}
//  */
// const selfDividingNumbers = (left, right) => {
//   const a = [];
//   for (let i = left, x = 0; i <= right; i++) {
//     if (i <= 9) {
//       a[x++] = i;
//       continue;
//     }
//     // console.log(i);
//     const digits = `${i}`.split('').map(s => parseInt(s, 10));
//     // console.log(digits);
//     if (-1 !== digits.indexOf(0)) continue;
//     let isSelfDividing = true
//     for (let j = digits.length - 1; 0 <= j; --j) {
//       // console.log(digits[j]);
//       isSelfDividing = isSelfDividing && 0 === i % digits[j];
//     }
//     if (isSelfDividing) {
//       a[x++] = i;
//       continue;
//     }
//   }
//   // console.log(a);
//   return a;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 42.34% of JavaScript online submissions
// Memory Usage: 38.1 MB, less than 7.41% of JavaScript online submissions

// const isSelfDividing = i =>
//   String(i)
//     .split('')
//     .map(s => parseInt(s, 10))
//     .reduce((answer, digit) => answer && 0 !== digit && 0 === i % digit, true);

// const arraryRange = (start, end) =>
// Array.from(Array(end - start + 1), (x, i) => start + i);

// /**
//  * @param {number} left
//  * @param {number} right
//  * @return {number[]}
//  */
// const selfDividingNumbers = (left, right) =>
//   arraryRange(left, right).filter(n => isSelfDividing(n));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 95.90% of JavaScript online submissions
// Memory Usage: 34.8 MB, less than 93.00% of JavaScript online submissions

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = (left, right) => {
  const result = [];
  top: do {
    let num = left;
    do {
      const digit = num % 10;
      if (0 === digit || 0 !== left % digit) continue top;
      num = Math.trunc(num / 10);
    } while (0 < num);
    result.push(left);
  } while (left++ < right);
  return result;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

deepStrictEqual(selfDividingNumbers(1, 22), [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  11,
  12,
  15,
  22,
]);

deepStrictEqual(selfDividingNumbers(1, 1), [1]);

deepStrictEqual(selfDividingNumbers(127, 129), [128]);

deepStrictEqual(selfDividingNumbers(1, 1000), [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  11,
  12,
  15,
  22,
  24,
  33,
  36,
  44,
  48,
  55,
  66,
  77,
  88,
  99,
  111,
  112,
  115,
  122,
  124,
  126,
  128,
  132,
  135,
  144,
  155,
  162,
  168,
  175,
  184,
  212,
  216,
  222,
  224,
  244,
  248,
  264,
  288,
  312,
  315,
  324,
  333,
  336,
  366,
  384,
  396,
  412,
  424,
  432,
  444,
  448,
  488,
  515,
  555,
  612,
  624,
  636,
  648,
  666,
  672,
  728,
  735,
  777,
  784,
  816,
  824,
  848,
  864,
  888,
  936,
  999,
]);
