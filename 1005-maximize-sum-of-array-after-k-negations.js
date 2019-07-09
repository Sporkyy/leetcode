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
const largestSumAfterKNegations = (A, K) => {
  for (let i = 0; i < K; i++) {
    const mi = A.reduce((acc, curr, i) => (curr < A[acc] ? i : acc), 0);
    const mv = A[mi];
    if (0 === mv) break;
    A[mi] = -mv;
  }
  return A.reduce((acc, curr) => acc + curr);
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
