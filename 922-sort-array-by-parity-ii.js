// 922. Sort Array By Parity II
// https://leetcode.com/problems/sort-array-by-parity-ii/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 124 ms, faster than 10.08% of JavaScript online submissions
// Memory Usage: 39.1 MB, less than 45.45% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
//  const sortArrayByParityII = A => {
//   let [e, o] = [0, 1];
//   do {
//     if (A[e] & 1 && !(A[o] & 1)) {
//       [A[e], A[o]] = [A[o], A[e]];
//       [e, o] = [e + 2, o + 2];
//     } else {
//       while (e < A.length && !(A[e] & 1)) e += 2;
//       while (o < A.length && A[o] & 1) o += 2;
//     }
//   } while (e < A.length && o < A.length);
//   return A;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 100 ms, faster than 54.17% of JavaScript online submissions
// Memory Usage: 42 MB, less than 9.09% of JavaScript online submissions

// const isEven = n => 0 === n % 2;
// const isOdd = n => 1 === n % 2;

// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
// const sortArrayByParityII = A => {
//   const evens = A.filter(n => isEven(n));
//   // console.log(evens);
//   const odds = A.filter(n => isOdd(n));
//   // console.log(odds);
//   const answer = [];
//   for (let i = (e = o = 0); i < A.length; i++) {
//     if (isEven(i)) {
//       answer.push(evens[e++]);
//     } else {
//       answer.push(odds[o++]);
//     }
//   }
//   return answer;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 100 ms, faster than 54.17% of JavaScript online submissions
// Memory Usage: 38.8 MB, less than 45.45% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
// const sortArrayByParityII = A => {
//   const result = new Array(A.length);
//   for (let i = 0, e = 0, o = 1; i < A.length; i++)
//     if (A[i] & 1) {
//       result[o] = A[i];
//       o += 2;
//     } else {
//       result[e] = A[i];
//       e += 2;
//     }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 92 ms, faster than 87.04% of JavaScript online submissions
// Memory Usage: 38.8 MB, less than 54.55% of JavaScript online submissions

/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParityII = A => {
  let [e, o] = [0, 1];
  while (e < A.length && o < A.length) {
    if (A[e] & 1 && !(A[o] & 1)) {
      [A[e], A[o]] = [A[o], A[e]];
      [e, o] = [e + 2, o + 2];
    } else {
      if (!(A[e] & 1)) e += 2;
      if (A[o] & 1) o += 2;
    }
  }
  return A;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const checkParity = a => a.every((n, i) => null !== n && (n & 1) === (i & 1));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { ok } from 'assert';

assert.ok(checkParity(sortArrayByParityII([2, 3])));

assert.ok(checkParity(sortArrayByParityII([1, 2])));

assert.ok(checkParity(sortArrayByParityII([4, 2, 5, 7])));

assert.ok(checkParity(sortArrayByParityII([4, 2, 5, 7])));

assert.ok(checkParity(sortArrayByParityII([4, 9, 8, 5, 7, 2])));

assert.ok(checkParity(sortArrayByParityII([1, 2, 3, 3, 2, 3, 0, 4])));
