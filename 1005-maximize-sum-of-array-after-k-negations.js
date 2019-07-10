// 1005. Maximize Sum Of Array After K Negations
// https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 92 ms, faster than 27.50% of JavaScript online submissions
// for Maximize Sum Of Array After K Negations.
// Memory Usage: 34.7 MB, less than 100.00% of JavaScript online submissions
// for Maximize Sum Of Array After K Negations.

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
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
// for Maximize Sum Of Array After K Negations.
// Memory Usage: 35.5 MB, less than 39.43% of JavaScript online submissions
// for Maximize Sum Of Array After K Negations.

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
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
// for Maximize Sum Of Array After K Negations.
// Memory Usage: 34.8 MB, less than 98.59% of JavaScript online submissions
// for Maximize Sum Of Array After K Negations.

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
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
// for Maximize Sum Of Array After K Negations.
// Memory Usage: 36.8 MB, less than 26.76% of JavaScript online submissions
// for Maximize Sum Of Array After K Negations.

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
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
// for Maximize Sum Of Array After K Negations.
// Memory Usage: 36.7 MB, less than 26.76% of JavaScript online submissions
// for Maximize Sum Of Array After K Negations.

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// const largestSumAfterKNegations = (A, K) => {
//   while (K--) {
//     const mindex = A.reduce((a, c, i) => (c < A[a] ? i : a), 0);
//     A[mindex] = -A[mindex];
//   }
//   return A.reduce((acc, curr) => acc + curr);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 37.00% of JavaScript online submissions
// for Maximize Sum Of Array After K Negations.
// Memory Usage: 34.8 MB, less than 98.59% of JavaScript online submissions
// for Maximize Sum Of Array After K Negations.

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
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
// for Maximize Sum Of Array After K Negations.
// Memory Usage: 35.9 MB, less than 32.39% of JavaScript online submissions
// for Maximize Sum Of Array After K Negations.

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
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

// Runtime: 52 ms, faster than 99.50% of JavaScript online submissions
// for Maximize Sum Of Array After K Negations.
// Memory Usage: 35.9 MB, less than 33.80% of JavaScript online submissions
// for Maximize Sum Of Array After K Negations.

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const largestSumAfterKNegations = (A, K) => {
  A.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    let val = A[i];
    if (0 < K) {
      if (val < 0) {
        let next = A[i + 1];
        if (Math.abs(val) < next && 0 === K % 2) K = 0;
        else [val, K] = [-val, K - 1];
      } else if (0 !== val && 1 === K % 2) [val, K] = [-val, 0];
      else K = 0;
    }
    sum += val;
  }
  return sum;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: {
      A: [4, 2, 3],
      K: 1,
    },
    expected: 5,
  },
  // Explanation: Choose indices (1,) and A becomes [4,-2,3].

  {
    input: {
      A: [3, -1, 0, 2],
      K: 3,
    },
    expected: 6,
  },
  // Explanation: Choose indices (1, 2, 2) and A becomes [3,1,0,2].

  {
    input: {
      A: [2, -3, -1, 5, -4],
      K: 2,
    },
    expected: 13,
  },
  // Explanation: Choose indices (1, 4) and A becomes [2,3,-1,5,4].

  {
    input: {
      A: [-8, 3, -5, -3, -5, -2],
      K: 6,
    },
    expected: 22,
  },

  {
    input: {
      A: [8, 3, 5, 3, 5, 2],
      K: 6,
    },
    expected: 26,
  },

  {
    input: {
      A: [3, 5, 3, 5, 2],
      K: 5,
    },
    expected: 14,
  },

  {
    input: {
      A: [-2, 5, 0, 2, -2],
      K: 3,
    },
    expected: 11,
  },
];

tests.forEach(({ input: { A, K }, expected }) => {
  const output = largestSumAfterKNegations(A, K);
  if (expected === output) {
    console.log(`✅ ${A.join(', ')}; ${K}`);
  } else {
    console.log(`🔴 ${A.join(', ')}; ${K}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
});
