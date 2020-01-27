// 1317. Convert Integer to the Sum of Two No-Zero Integers
// https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} x
 * @returns {boolean}
 */
const hasZeros = x => {
  console.log(x);
  if (x < -1 || (0 < x && x < 10)) return false;
  if (0 === x % 10) return true;
  else return hasZeros(Math.trunc(x / 10));
  // return 0 === x % 10 ? true : 9 < x ? hasZeros(x % 10) : false;
};

// console.log(hasZeros(0));
// console.log(hasZeros(1));
// console.log(hasZeros(10));
// console.log(hasZeros(20));
// console.log(hasZeros(100));
// console.log(hasZeros(111));
// console.log(hasZeros(1009));
// console.log(hasZeros(1));
// console.log(hasZeros(9));

// /**
//  * @param {number} n
//  * @return {number[]}
//  */
// const getNoZeroIntegers = n => {
//   let x = 0;
//   while (x <= n) {
//     console.log(n, x);
//     if (0 !== n % 10 && 0 < x && 0 !== x % 10)
//       return [Math.min(n, x), Math.max(n, x)];
//     n--;
//     x++;
//   }
// };

/**
 * @param {number} n
 * @return {number[]}
 */
const getNoZeroIntegers = (x, y = 0) => {
  console.log(x, y);
  if (x < y) return false;
  if (!hasZeros(x) && !hasZeros(y)) return [Math.min(x, y), Math.max(x, y)];
  else return getNoZeroIntegers(x - 1, y + 1);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(getNoZeroIntegers(2), [1, 1]);
// // Explanation: A = 1, B = 1. A + B = n and both A and B don't contain any 0 in their decimal representation.

deepStrictEqual(getNoZeroIntegers(11), [2, 9]);

deepStrictEqual(getNoZeroIntegers(10000), [1, 9999]);

deepStrictEqual(getNoZeroIntegers(69), [1, 68]);

deepStrictEqual(getNoZeroIntegers(1010), [11, 999]);
