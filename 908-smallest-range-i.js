// 908. Smallest Range I
// https://leetcode.com/problems/smallest-range-i/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const smallestRangeI = (A, K) => {
  return Math.max((Math.max(...A) + -Math.abs(K)) - (Math.min(...A) + Math.abs(K)), 0);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [{
    name: 'Example 1',
    input: {
      A: [1],
      K: 0
    },
    expected: 0
  },
  {
    name: 'Example 2',
    input: {
      A: [0, 10],
      K: 2
    },
    expected: 6
  },
  {
    name: 'Example 3',
    input: {
      A: [1, 3, 6],
      K: 3
    },
    expected: 0
  }
];

tests.forEach(({
  name,
  input: {
    A,
    K
  },
  expected
}) => {
  const result = smallestRangeI(A, K);
  if (expected === result) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});