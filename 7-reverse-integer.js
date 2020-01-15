// 7. Reverse Integer
// https://leetcode.com/problems/reverse-integer/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 87.63% of JavaScript online submissions
// Memory Usage: 35.8 MB, less than 68.32% of JavaScript online submissions

/**
 * @param {number} x
 * @return {number}
 */
// const reverse = x => {
//   // console.log(x);
//   const s = '' + x;
//   let result = '';
//   let isNegative = false;
//   for (let i = s.length - 1; 0 <= i; --i) {
//     if (i === 0 && '-' === s[i]) {
//       isNegative = true;
//     } else {
//       result += s[i];
//     }
//   }
//   result = parseInt(result, 10);
//   // console.log(result);
//   if (isNegative) result *= -1;
//   if (result < Math.pow(-2, 31) || Math.pow(2, 31) < result) return 0;
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 87.63% of JavaScript online submissions
// Memory Usage: 36.2 MB, less than 13.20% of JavaScript online submissions

/**
 * @param {number} x
 * @return {number}
 */
// const reverse = x => {
//   const arr = ('' + x).split('');
//   // console.log(arr);
//   const revArr = arr.slice(1).reverse();
//   if ('-' === arr[0]) {
//     revArr.unshift(arr[0]);
//   } else {
//     revArr.push(arr[0]);
//   }
//   // console.log(revArr);
//   const result = parseInt(revArr.join(''), 10);
//   if (result < Math.pow(-2, 31) || Math.pow(2, 31) < result) return 0;
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 87.63% of JavaScript online submissions
// Memory Usage: 35.8 MB, less than 68.32% of JavaScript online submissions

// const realReverse = x =>
//   Math.sign(x) *
//   parseInt(
//     Math.abs(x)
//       .toString()
//       .split('')
//       .reverse()
//       .join(''),
//     10,
//   );

// const is32BitInteger = x => Math.pow(-2, 31) <= x && x <= Math.pow(2, 31) - 1;

// /**
//  * @param {number} x
//  * @return {number}
//  */
// const reverse = x => {
//   const revX = realReverse(x);
//   if (!is32BitInteger(revX)) return 0;
//   return revX;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * Runtime: 80 ms, faster than 42.37% of JavaScript online submissions
//  * Memory Usage: 36.8 MB, less than 9.37% of JavaScript online submissions
//  *
//  * @param {number} x
//  * @return {number}
//  */
// const reverse = x => {
//   if (!Array.isArray(x)) x = [Math.sign(x), Math.abs(x)];
//   if (x[x.length - 1] < 10) {
//     x = x[0] * x.slice(1).join('');
//     return x < -(2 ** 31) || 2 ** 31 - 1 < x ? 0 : x;
//   }
//   const last = x[x.length - 1];
//   x[x.length - 1] = last % 10;
//   x.push(Math.trunc(last / 10));
//   return reverse(x);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * Runtime: 68 ms, faster than 91.05% of JavaScript online submissions
//  * Memory Usage: 36.2 MB, less than 14.58% of JavaScript online submissions
//  *
//  * @param {number} x
//  * @return {number}
//  */
// const reverse = (x, sign = Math.sign(x), revX = 0) => {
//   if (x < 0) x = Math.abs(x);
//   revX = revX + (x % 10) * 10 ** (Math.log10((x ^ (x >> 31)) - (x >> 31)) | 0);
//   x = Math.trunc(x / 10);
//   return 0 === x
//     ? sign * revX < -(2 ** 31) || 2 ** 31 - 1 < sign * revX
//       ? 0
//       : sign * revX
//     : reverse(x, sign, revX);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number} x
//  * @return {number}
//  */
// const reverse = (x, sign = Math.sign(x), revX = 0) => {
//   if (x < 0) x = Math.abs(x);
//   revX += (x % 10) * 10 ** (Math.log10((x ^ (x >> 31)) - (x >> 31)) | 0);
//   x = Math.trunc(x / 10);
//   return 0 < x
//     ? reverse(x, sign, revX)
//     : -(2 ** 31) <= sign * revX && sign * revX <= 2 ** 31 - 1
//     ? sign * revX
//     : 0;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * Runtime: 68 ms, faster than 91.05% of JavaScript online submissions
//  * Memory Usage: 35.5 MB, less than 92.71% of JavaScript online submissions
//  *
//  * @param {number} x
//  * @return {number}
//  */
// const reverse = x => {
//   const sign = Math.sign(x);
//   x = Math.abs(x);
//   let revX = 0;
//   while (0 < x) {
//     revX += (x % 10) * 10 ** (Math.log10((x ^ (x >> 31)) - (x >> 31)) | 0);
//     x = Math.trunc(x / 10);
//   }
//   return -(2 ** 31) <= sign * revX && sign * revX <= 2 ** 31 - 1
//     ? sign * revX
//     : 0;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number} n
//  * @return {number}
//  */
// const digitCount = n => (Math.log10((n ^ (n >> 31)) - (n >> 31)) | 0) + 1;

// /**
//  * Runtime: 68 ms, faster than 91.05% of JavaScript online submissions
//  * Memory Usage: 35.7 MB, less than 86.46% of JavaScript online submissions
//  *
//  * @param {number} x
//  * @return {number}
//  */
// const reverse = x => {
//   const sign = Math.sign(x);
//   x = Math.abs(x);
//   let revX = 0;
//   for (let i = digitCount(x); 0 < i; i--) {
//     revX += (x % 10) * 10 ** (i - 1);
//     x = Math.trunc(x / 10);
//   }
//   revX *= sign;
//   return -(2 ** 31) <= revX && revX <= 2 ** 31 - 1 ? revX : 0;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * Runtime: 80 ms, faster than 42.71% of JavaScript online submissions
//  * Memory Usage: 35.9 MB, less than 57.29% of JavaScript online submissions
//  *
//  * @param {number} x
//  * @return {number}
//  */
// const reverse = x => {
//   const sign = Math.sign(x);
//   x = Math.abs(x);
//   let revX = 0;
//   for (let i = Math.max(Math.floor(Math.log10(Math.abs(x))), 0); 0 <= i; i--) {
//     revX += (x % 10) * 10 ** i;
//     x = Math.trunc(x / 10);
//   }
//   revX *= sign;
//   return -(2 ** 31) <= revX && revX <= 2 ** 31 - 1 ? revX : 0;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * Runtime: 64 ms, faster than 96.75% of JavaScript online submissions
//  * Memory Usage: 36.2 MB, less than 13.54% of JavaScript online submissions
//  *
//  * @param {number} x
//  * @return {number}
//  */
// const reverse = x => {
//   const revX = Math.sign(x) * [...`${Math.abs(x)}`].reverse().join('');
//   return -(2 ** 31) <= revX && revX <= 2 ** 31 - 1 ? revX : 0;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 48.33% of JavaScript online submissions
// Memory Usage: 35.6 MB, less than 91.67% of JavaScript online submissions

/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  const sign = Math.sign(x);
  x = Math.abs(x);
  let revX = 0;
  while (0 < x) {
    revX += x % 10;
    x = Math.trunc(x / 10);
    if (0 < x) revX *= 10;
  }
  revX *= sign;
  return -(2 ** 31) <= revX && revX <= 2 ** 31 - 1 ? revX : 0;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(reverse(1), 1);

strictEqual(reverse(123), 321);

strictEqual(reverse(-123), -321);

strictEqual(reverse(120), 21);

strictEqual(reverse(1534236469), 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
