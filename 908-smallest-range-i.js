// 908. Smallest Range I
// https://leetcode.com/problems/smallest-range-i/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 65.08% of JavaScript online submissions
// for Smallest Range I.
// Memory Usage: 35.2 MB, less than 100.00% of JavaScript online submissions
// for Smallest Range I.

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const smallestRangeI = (A, K) => Math.max(Math.max(...A) - K - (Math.min(...A) + K), 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: {
      A: [1],
      K: 0,
    },
    expected: 0,
  },
  {
    input: {
      A: [0, 10],
      K: 2,
    },
    expected: 6,
  },
  {
    input: {
      A: [1, 3, 6],
      K: 3,
    },
    expected: 0,
  },
];

for ({
  input: { A, K },
  expected,
} of tests) {
  const name = `A: ${A}, K: ${K}`;
  const result = smallestRangeI(A, K);
  if (expected === result) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
}
