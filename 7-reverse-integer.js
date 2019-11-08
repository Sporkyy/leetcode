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
//  * Runtime: 72 ms, faster than 79.48% of JavaScript online submissions
//  * Memory Usage: 36.3 MB, less than 12.50% of JavaScript online submissions
//  *
//  * @param {number} x
//  * @return {number}
//  */
// const reverse = x => {
//   const revX = Math.sign(x) * [...`${Math.abs(x)}`].reverse().join('');
//   return revX < -(2 ** 31) || 2 ** 31 - 1 < revX ? 0 : revX;
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

/**
 * Runtime: 80 ms, faster than 42.37% of JavaScript online submissions
 * Memory Usage: 36.8 MB, less than 9.37% of JavaScript online submissions
 *
 * @param {number} x
 * @return {number}
 */
const reverse = (x, revX) => {
  console.log(x, revX);

  // return reverse(x, revX);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// console.log(reverse(5));

console.log(reverse(42));

// console.log(reverse(123));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

// strictEqual(reverse(123), 321);

// strictEqual(reverse(-123), -321);

// strictEqual(reverse(120), 21);

// strictEqual(reverse(1534236469), 0);
