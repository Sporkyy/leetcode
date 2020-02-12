// 961. N-Repeated Element in Size 2N Array
// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 116 ms, faster than 16.78% of JavaScript online submissions
// Memory Usage: 43.3 MB, less than 5.38% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @return {number}
//  */
// const repeatedNTimes = A =>
//   Object.entries(
//     A.reduce((acc, curr) => {
//       acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
//       return acc;
//     }, {}),
//   ).reduce((answer, [currKey, currValue]) => {
//     if (currValue === A.length / 2) {
//       answer = parseInt(currKey);
//     }
//     return answer;
//   }, undefined);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 96 ms, faster than 37.14% of JavaScript online submissions
// Memory Usage: 42.3 MB, less than 5.38% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @return {number}
//  */
// const repeatedNTimes = A => {
//   const counts = new Map(Array.from(new Set(A)).map(v => [v, 0]));
//   for (let i = A.length - 1; 0 <= i; --i) {
//     counts.set(A[i], 1 + counts.get(A[i]));
//   }
//   for (let [key, value] of counts) {
//     if (A.length / 2 === value) return key;
//   }
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 36.7 MB, less than 50.00% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @return {number}
//  */
// const repeatedNTimes = A => {
//   const map = new Map();
//   for (let i = 0; i < A.length; i++) {
//     const e = A[i];
//     console.log(e);
//     if (map.has(e)) {
//       return e;
//     } else {
//       map.set(e, true);
//     }
//   }
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 41.63% of JavaScript online submissions
// Memory Usage: 36.4 MB, less than 50.00% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @return {number}
//  */
// const repeatedNTimes = A => {
//   for (let i = 0; i < A.length; i += 4) {
//     if (A[i] === A[i + 1]) return A[i];
//     if (A[i] === A[i + 2]) return A[i];
//     if (A[i] === A[i + 3]) return A[i];
//     if (A[i + 1] === A[i + 2]) return A[i + 1];
//     if (A[i + 1] === A[i + 3]) return A[i + 1];
//     if (A[i + 2] === A[i + 3]) return A[i + 2];
//   }
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 92.71% of JavaScript online submissions
// Memory Usage: 36.5 MB, less than 43.75% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @return {number}
//  */
// const repeatedNTimes = A => {
//   for (let i = 0; i < A.length; i += 4) {
//     const [a, b, c, d] = [A[i], A[i + 1], A[i + 2], A[i + 3]];
//     if (a === b) return a;
//     if (a === c) return a;
//     if (a === d) return a;
//     if (b === c) return b;
//     if (b === d) return b;
//     if (c === d) return c;
//   }
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 53.53% of JavaScript online submissions
// Memory Usage: 36.5 MB, less than 50.00% of JavaScript online submissions

/**
 * @param {number[]} A
 * @return {number}
 */
const repeatedNTimes = A => {
  for (let i = 0; i < A.length; i += 4) {
    const [a, b] = [A[i], A[i + 1]];
    if (a === b) return a;
    if (i < A.length - 2) {
      const [c, d] = [A[i + 2], A[i + 3]];
      if (a === c) return a;
      if (a === d) return a;
      if (b === c) return b;
      if (b === d) return b;
      if (c === d) return c;
    }
  }
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(repeatedNTimes([1, 2, 3, 3]), 3);

strictEqual(repeatedNTimes([2, 1, 2, 5, 3, 2]), 2);

strictEqual(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]), 5);

strictEqual(repeatedNTimes([1, 3, 5, 2, 2, 2]), 2);

strictEqual(
  repeatedNTimes([0, 0, 0, 0, 8, 0, 2, 3, 0, 1, 7, 6, 0, 4, 9, 0]),
  0,
);
