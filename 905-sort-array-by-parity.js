// 905. Sort Array By Parity
// https://leetcode.com/problems/sort-array-by-parity/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 37 MB, less than 69.01% of JavaScript online submissions

// /**
//  * Filter+Concat
//  *
//  * @param {number[]} A
//  * @return {number[]}
//  */
// const sortArrayByParity = A =>
//   A.filter(n => 0 === n % 2).concat(A.filter(n => 1 === n % 2));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 92.13% of JavaScript online submissions
// Memory Usage: 37.4 MB, less than 32.65% of JavaScript online submissions

// /**
//  * Filter+Spread
//  *
//  * @param {number[]} A
//  * @return {number[]}
//  */
// const sortArrayByParity = A => [
//   ...A.filter(n => 0 === n % 2),
//   ...A.filter(n => 1 === n % 2),
// ];

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 37.4 MB, less than 35.54% of JavaScript online submissions

// /**
//  * Filter + Push
//  *
//  * @param {number[]} A
//  * @return {number[]}
//  */
// const sortArrayByParity = A => {
//   const result = A.filter(n => 0 === n % 2);
//   const tmp = A.filter(n => 1 === n % 2);
//   const start = result.length;
//   result.length = result.length + tmp.length;
//   for (let i = 0; i < tmp.length; i++) {
//     result[start + i] = tmp[i];
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 37.4 MB, less than 35.54% of JavaScript online submissions

// /**
//  * Loop+Push
//  *
//  * @param {number[]} A
//  * @return {number[]}
//  */
// const sortArrayByParity = A => {
//   const result = [];
//   const secondary = [];
//   for (let i = 0; i < A.length; i++) {
//     if (0 === A[i] % 2) {
//       result.push(A[i]);
//     } else {
//       secondary.push(A[i]);
//     }
//   }
//   const start = result.length;
//   result.length = result.length + secondary.length;
//   for (let i = 0; i < secondary.length; i++) {
//     result[start + i] = secondary[i];
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 59.67% of JavaScript online submissions
// Memory Usage: 37.9 MB, less than 8.00% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
// const sortArrayByParity = A => A.sort((a, b) => (a & 1) - (b & 1));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 49.38% of JavaScript online submissions
// Memory Usage: 38 MB, less than 8.00% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
// const sortArrayByParity = A => A.sort((a, b) => (a % 2) - (b % 2));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 49.38% of JavaScript online submissions
// Memory Usage: 37.3 MB, less than 24.00% of JavaScript online submissions

// /**
//  * @param {number[]} a
//  * @return {number[]}
//  */
// const sortArrayByParity = a => {
//   const res = [];
//   for (const n of a)
//     if (0 === n % 2) res.unshift(n);
//     else res.push(n);
//   return res;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 1096 ms, faster than 5.67% of JavaScript online submissions
// Memory Usage: 387.7 MB, less than 8.00% of JavaScript online submissions

// /**
//  * @param {number[]} a
//  * @return {number[]}
//  */
// const sortArrayByParity = (a, sorted = []) =>
//   !a.length
//     ? sorted
//     : sortArrayByParity(
//         a.slice(1),
//         0 === a[0] % 2 ? [a[0]].concat(sorted) : sorted.concat(a[0]),
//       );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 81.56% of JavaScript online submissions
// Memory Usage: 37.8 MB, less than 8.00% of JavaScript online submissions

// /**
//  * @param {number[]} a
//  * @return {number[]}
//  */
// const sortArrayByParity = a => {
//   let [l, r] = [0, a.length - 1];
//   while (l < r) {
//     if (1 === a[l] % 2 && 0 === a[r] % 2)
//       [a[l], a[r], l, r] = [a[r], a[l], l + 1, r - 1];
//     else if (0 === a[l] % 2) l++;
//     else r--;
//   }
//   return a;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 92.02% of JavaScript online submissions
// Memory Usage: 37.9 MB, less than 8.00% of JavaScript online submissions

/**
 * @param {number[]} a
 * @return {number[]}
 */
const sortArrayByParity = a => {
  let [l, r] = [0, a.length - 1];
  while (l < r) {
    if (1 === a[l] % 2 && 0 === a[r] % 2)
      [a[l], a[r], l, r] = [a[r], a[l], l + 1, r - 1];
    if (0 === a[l] % 2) l++;
    if (1 === a[r] % 2) r--;
  }
  return a;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const checkParity = a => {
  let i = 0;
  while (0 === a[i] % 2 && i < a.length) i++;
  while (1 === a[i] % 2 && i < a.length) i++;
  return a.length === i;
};

// console.log(checkParity([1, 2, 3]));
// console.log(checkParity([1, 3, 5]));
// console.log(checkParity([2, 1, 3]));
// console.log(checkParity([4, 0, 3]));
// console.log(checkParity([1, 0, 3]));
// console.log(checkParity([4, 2, 6, 0, 1, 3, 5]));
// console.log(checkParity([1, 4, 2, 6, 0, 1, 3, 5]));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { ok } from 'assert';

ok(checkParity(sortArrayByParity([3, 1, 2, 4])));

ok(checkParity(sortArrayByParity([2, 3, 1, 4])));

ok(checkParity(sortArrayByParity([0, 2, 4, 6])));

ok(checkParity(sortArrayByParity([1, 3, 5, 7])));

ok(checkParity(sortArrayByParity([1, 3, 2, 5, 7])));

ok(checkParity(sortArrayByParity([1, 2, 3, 4, 5])));

ok(
  checkParity(
    sortArrayByParity([
      4016,
      2240,
      402,
      1600,
      2540,
      4665,
      545,
      2756,
      3533,
      2737,
      4073,
      2701,
      4820,
      3016,
      2938,
      2225,
      2982,
      1924,
      2878,
      1451,
    ]),
  ),
);
