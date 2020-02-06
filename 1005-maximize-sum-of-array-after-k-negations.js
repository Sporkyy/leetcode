// 1005. Maximize Sum Of Array After K Negations
// https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/

/*

Given an array A of integers, we must modify the array in the following way:
we choose an i and replace A[i] with -A[i], and we repeat this process
K times in total.  (We may choose the same index i multiple times.)

Return the largest possible sum of the array after modifying it in this way.

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 92 ms, faster than 27.50% of JavaScript online submissions
// Memory Usage: 34.7 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @param {number} K
//  * @return {number}
//  */
// const largestSumAfterKNegations = (A, K) => {
//   for (let i = 0; i < K; i++) {
//     const mi = A.reduce((acc, curr, i) => (curr < A[acc] ? i : acc), 0);
//     const mv = A[mi];
//     if (0 === mv) break;
//     A[mi] = -mv;
//   }
//   return A.reduce((acc, curr) => acc + curr);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 66.50% of JavaScript online submissions
// Memory Usage: 35.5 MB, less than 39.43% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @param {number} K
//  * @return {number}
//  */
// const largestSumAfterKNegations = (A, K) => {
//   A.sort((a, b) => a - b);
//   for (let i = 0; i < A.length && 0 < K; i++) if (A[i] < 0) (A[i] = -A[i]) && K--;
//   if (0 < K && !A.includes(0) && 1 === K % 2) {
//     const mi = A.reduce((acc, curr, i) => (curr < A[acc] ? i : acc), 0);
//     A[mi] = -A[mi];
//   }
//   return A.reduce((acc, curr) => acc + curr);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 96 ms, faster than 22.50% of JavaScript online submissions
// Memory Usage: 34.8 MB, less than 98.59% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @param {number} K
//  * @return {number}
//  */
// const largestSumAfterKNegations = (A, K) => {
//   const getMindex = () => A.reduce((a, c, i) => (c < A[a] ? i : a), 0);
//   let mindex = getMindex();
//   while (0 !== A[mindex] && 0 < K) {
//     if (A[mindex] < 0) {
//       A[mindex] = -A[mindex];
//       mindex = getMindex();
//       K--;
//     } else {
//       if (1 === K % 2) A[mindex] = -A[mindex];
//       K = 0;
//     }
//   }
//   return A.reduce((acc, curr) => acc + curr);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 84.50% of JavaScript online submissions
// Memory Usage: 36.8 MB, less than 26.76% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @param {number} K
//  * @return {number}
//  */
// const largestSumAfterKNegations = (A, K) => {
//   const pos = [];
//   const neg = [];
//   for (let i = 0; i < A.length; i++)
//     if (A[i] < 0) neg.push(A[i]);
//     else pos.push(A[i]);
//   neg.sort((a, b) => b - a);
//   while (neg.length && 0 < K) pos.push(-neg.pop()) && K--;
//   const combo = [...neg, ...pos];
//   let sum = combo.reduce((acc, curr) => acc + curr);
//   if (0 === K % 2 || pos.includes(0)) return sum;
//   return sum - Math.min(...combo) * 2;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 116 ms, faster than 16.50% of JavaScript online submissions
// Memory Usage: 36.7 MB, less than 26.76% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @param {number} K
//  * @return {number}
//  */
// const largestSumAfterKNegations = (A, K) => {
//   while (K--) {
//     const mindex = A.reduce((a, c, i) => (c < A[a] ? i : a), 0);
//     A[mindex] = -A[mindex];
//   }
//   return A.reduce((acc, curr) => acc + curr);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 37.00% of JavaScript online submissions
// Memory Usage: 34.8 MB, less than 98.59% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @param {number} K
//  * @return {number}
//  */
// const largestSumAfterKNegations = (A, K) => {
//   while (K--) {
//     const mindex = A.reduce((a, c, i) => (c < A[a] ? i : a), 0);
//     const minVal = A[mindex];
//     if (0 === minVal) break;
//     if (0 < minVal && 1 === K % 2) break;
//     A[mindex] = -minVal;
//     if (0 < minVal && 0 === K % 2) break;
//   }
//   return A.reduce((acc, curr) => acc + curr);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 84.50% of JavaScript online submissions
// Memory Usage: 35.9 MB, less than 32.39% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @param {number} K
//  * @return {number}
//  */
// const largestSumAfterKNegations = (A, K) => {
//   A.sort((a, b) => a - b);
//   let sum = 0;
//   for (let i = 0; i < A.length; i++) {
//     let val = A[i];
//     if (0 < K) {
//       if (val < 0) {
//         let next = A[i + 1];
//         if (next && 0 < next && Math.abs(val) < next && 0 === K % 2) {
//           K = 0;
//         } else {
//           [val, K] = [-val, K - 1];
//         }
//       } else if (0 === val) K = 0;
//       else if (0 < val && 1 === K % 2) [val, K] = [-val, 0];
//     }
//     sum += val;
//   }
//   return sum;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 308 ms, faster than 12.50% of JavaScript online submissions
// Memory Usage: 53.8 MB, less than 50.00% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @param {number} K
//  * @return {number}
//  */
// const largestSumAfterKNegations = (A, K) => {
//   A.sort((a, b) => a - b);
//   let sum = 0;
//   for (let i = 0; i < A.length; i++) {
//     let val = A[i];
//     if (0 < K) {
//       if (val < 0) {
//         let next = A[i + 1];
//         if (Math.abs(val) < next && 0 === K % 2) K = 0;
//         else [val, K] = [-val, K - 1];
//       } else if (0 !== val && 1 === K % 2) [val, K] = [-val, 0];
//       else K = 0;
//     }
//     sum += val;
//   }
//   return sum;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} A
//  * @param {number} K
//  * @return {number}
//  */
// const largestSumAfterKNegations = (a, k) => {
//   console.log({ a, k });
//   if (0 === k) return a.reduce((acc, curr) => acc + curr);
//   const mindex = a.indexOf(Math.min(...a));
//   console.log(mindex);
//   console.log(`${Math.sign(a[mindex])}${k % 2}`);
//   ({
//     // Negative min + odd negations
//     'negative-odd': () => {
//       console.log('Negative min + odd negations');
//       // Negate the min
//       a[mindex] = -1 * a[mindex];
//       // And go to penultimate iteration
//       k--;
//     },
//     // Negative min + even negations
//     'negative-even': () => {
//       console.log('Negative min + even negations');
//       // Negate the min
//       a[mindex] = -1 * a[mindex];
//       // Go to next iteration
//       k--;
//     },
//     // Postive min + odd negations
//     'positive-odd': () => {
//       console.log('Postive min + odd negations');
//       // Negate the min
//       a[mindex] = -1 * a[mindex];
//       // And you're done
//       k = 0;
//     },
//     // Postive min + even negations
//     'positive-even': () => {
//       console.log('Postive min + even negations');
//       // You're done
//       k = 0;
//     },
//   }[
//     `${a[mindex] < 0 ? 'negative' : 'positive'}-${0 === k % 2 ? 'even' : 'odd'}`
//   ]());
//   return largestSumAfterKNegations(a, k);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} A
//  * @param {number} K
//  * @return {number}
//  */
// const largestSumAfterKNegations = (a, k) => {
//   if (0 === k) return a.reduce((acc, curr) => acc + curr);
//   const min = Math.min(...a);
//   const mindex = a.indexOf(min);
//   ({
//     no: () => {
//       [a[mindex], k] = [-1 * a[mindex], k - 1];
//     },
//     ne: () => {
//       [a[mindex], k] = [-1 * a[mindex], k - 1];
//     },
//     po: () => {
//       [a[mindex], k] = [-1 * a[mindex], 0];
//     },
//     pe: () => {
//       k = 0;
//     },
//   }[`${a[mindex] < 0 ? 'n' : 'p'}${0 === k % 2 ? 'e' : 'o'}`]());
//   return largestSumAfterKNegations(a, k);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} A
//  * @param {number} K
//  * @return {number}
//  */
// const largestSumAfterKNegations = (a, k) => {
//   if (0 === k) return a.reduce((acc, curr) => acc + curr);
//   const min = Math.min(...a);
//   const mindex = a.indexOf(min);
//   if (min < 0) [a[mindex], k] = [-1 * min, k - 1];
//   else if (0 === k % 2) k = 0;
//   else [a[mindex], k] = [-1 * a[mindex], 0];
//   return largestSumAfterKNegations(a, k);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 59.72% of JavaScript online submissions
// Memory Usage: 40.3 MB, less than 50.00% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @param {number} K
//  * @return {number}
//  */
// const largestSumAfterKNegations = (a, k) => {
//   if (0 === k) return a.reduce((acc, curr) => acc + curr);
//   const min = Math.min(...a);
//   const mindex = a.indexOf(min);
//   if (min < 0 || k % 2) a[mindex] = -a[mindex];
//   return largestSumAfterKNegations(a, min < 0 ? k - 1 : 0);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 72.92% of JavaScript online submissions
// Memory Usage: 36.3 MB, less than 50.00% of JavaScript online submissions

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const largestSumAfterKNegations = (a, k) => {
  if (0 === k) return a.reduce((acc, curr) => acc + curr);
  let [min, mindex] = [Infinity];
  for (let i = 0; i < a.length; i++) if (a[i] < min) [min, mindex] = [a[i], i];
  if (min < 0 || k % 2) a[mindex] = -a[mindex];
  return largestSumAfterKNegations(a, min < 0 ? k - 1 : 0);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 72.92% of JavaScript online submissions
// Memory Usage: 36.2 MB, less than 50.00% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @param {number} K
//  * @return {number}
//  */
// const largestSumAfterKNegations = (a, k) => {
//   while (0 < k) {
//     let [min, mindex] = [Infinity];
//     for (let i = 0; i < a.length; i++)
//       if (a[i] < min) [min, mindex] = [a[i], i];
//     if (min < 0 || k % 2) a[mindex] = -a[mindex];
//     k = min < 0 ? k - 1 : 0;
//   }
//   return a.reduce((acc, curr) => acc + curr);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(largestSumAfterKNegations([4, 2, 3], 1), 5);
// 1: [4, -2, 3]

strictEqual(largestSumAfterKNegations([3, -1, 0, 2], 3), 6);
// [1, 2, 2]: [3, 1, 0, 2]

strictEqual(largestSumAfterKNegations([2, -3, -1, 5, -4], 2), 13);
// [1, 4]: [2, 3, -1, 5, 4]

strictEqual(largestSumAfterKNegations([-8, 3, -5, -3, -5, -2], 6), 22);

strictEqual(largestSumAfterKNegations([8, 3, 5, 3, 5, 2], 6), 26);
// // null: [8, 3, 5, 3, 5, 2]

strictEqual(largestSumAfterKNegations([3, 5, 3, 5, 2], 5), 14);

strictEqual(largestSumAfterKNegations([-2, 5, 0, 2, -2], 3), 11);

strictEqual(largestSumAfterKNegations([-2, 9, 9, 8, 4], 5), 32);
