// 1317. Convert Integer to the Sum of Two No-Zero Integers
// https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 244 ms
// Memory Usage: 41.4 MB

// /**
//  * @param {number} x
//  * @returns {boolean}
//  */
// const hasZeros = x => {
//   console.log(x);
//   if (x < -1 || (0 < x && x < 10)) return false;
//   if (0 === x % 10) return true;
//   else return hasZeros(Math.trunc(x / 10));
//   // return 0 === x % 10 ? true : 9 < x ? hasZeros(x % 10) : false;
// };

// // console.log(hasZeros(0));
// // console.log(hasZeros(1));
// // console.log(hasZeros(10));
// // console.log(hasZeros(20));
// // console.log(hasZeros(100));
// // console.log(hasZeros(111));
// // console.log(hasZeros(1009));
// // console.log(hasZeros(1));
// // console.log(hasZeros(9));

// // /**
// //  * @param {number} n
// //  * @return {number[]}
// //  */
// // const getNoZeroIntegers = n => {
// //   let x = 0;
// //   while (x <= n) {
// //     console.log(n, x);
// //     if (0 !== n % 10 && 0 < x && 0 !== x % 10)
// //       return [Math.min(n, x), Math.max(n, x)];
// //     n--;
// //     x++;
// //   }
// // };

// /**
//  * @param {number} n
//  * @return {number[]}
//  */
// const getNoZeroIntegers = (x, y = 0) => {
//   console.log(x, y);
//   if (x < y) return false;
//   if (!hasZeros(x) && !hasZeros(y)) return [Math.min(x, y), Math.max(x, y)];
//   else return getNoZeroIntegers(x - 1, y + 1);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 96 ms, faster than 7.37% of JavaScript online submissions
// Memory Usage: 33.6 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number} x
//  * @returns {boolean}
//  */
// const hasZeros = x => {
//   if (x < -1 || (0 < x && x < 10)) return false;
//   if (0 === x % 10) return true;
//   else return hasZeros(Math.trunc(x / 10));
// };

// /**
//  * @param {number} n
//  * @return {number[]}
//  */
// const getNoZeroIntegers = (x, y = 0) => {
//   if (x < y) return false;
//   if (!hasZeros(x) && !hasZeros(y)) return [Math.min(x, y), Math.max(x, y)];
//   else return getNoZeroIntegers(x - 1, y + 1);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number} x
//  * @returns {boolean}
//  */
// const hasZeros = x =>
//   0 < Math.abs(x) && Math.abs(x) < 10
//     ? false
//     : 0 === x % 10
//     ? true
//     : hasZeros(Math.trunc(x / 10));

// /**
//  * @param {number} n
//  * @return {number[]}
//  */
// const getNoZeroIntegers = (x, y = 0) =>
//   x < y
//     ? false
//     : !hasZeros(x) && !hasZeros(y)
//     ? [Math.min(x, y), Math.max(x, y)]
//     : getNoZeroIntegers(x - 1, y + 1);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 73.40% of JavaScript online submissions
// Memory Usage: 33.3 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number} x
//  * @returns {boolean}
//  */
// const hasZeros = x =>
//   0 === x % 10 ? true : 10 < Math.abs(x) ? hasZeros(Math.trunc(x / 10)) : false;

// /**
//  * @param {number} x
//  * @param {number} [y=0]
//  * @return {number[]}
//  */
// const getNoZeroIntegers = (x, y = 0) =>
//   !hasZeros(x) && !hasZeros(y)
//     ? [Math.min(x, y), Math.max(x, y)]
//     : getNoZeroIntegers(x - 1, y + 1);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 136 ms, faster than 7.37% of JavaScript online submissions
// Memory Usage: 33.5 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number} x
 * @returns {boolean}
 */
const hasZeros = x =>
  0 === x % 10
    ? true
    : Math.abs(x) <= 100
    ? false
    : hasZeros(Math.trunc(x / 10));

/**
 * @param {number} x
 * @param {number} [y=0]
 * @return {number[]}
 */
const getNoZeroIntegers = (x, y = 0) =>
  !hasZeros(x) && !hasZeros(y) ? [y, x] : getNoZeroIntegers(x - 1, y + 1);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

// deepStrictEqual(getNoZeroIntegers(2), [1, 1]);

// deepStrictEqual(getNoZeroIntegers(11), [2, 9]);

// deepStrictEqual(getNoZeroIntegers(10000), [1, 9999]);

// deepStrictEqual(getNoZeroIntegers(69), [1, 68]);

// deepStrictEqual(getNoZeroIntegers(1010), [11, 999]);

deepStrictEqual(getNoZeroIntegers(1403), [4, 1399]);
