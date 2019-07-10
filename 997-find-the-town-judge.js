// 997. Find the Town Judge
// https://leetcode.com/problems/find-the-town-judge/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = (N, trust) => {};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: {
      N: 2,
      trust: [[1, 2]],
    },
    expected: 2,
  },

  {
    input: {
      N: 3,
      trust: [[1, 3], [2, 3]],
    },
    expected: 3,
  },

  {
    input: {
      N: 3,
      trust: [[1, 3], [2, 3], [3, 1]],
    },
    expected: -1,
  },

  {
    input: {
      N: 3,
      trust: [[1, 2], [2, 3]],
    },
    expected: -1,
  },

  {
    input: {
      N: 4,
      trust: [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]],
    },
    expected: 3,
  },
];

tests.forEach(({ input: { N, trust }, expected }) => {
  const output = findJudge(N, trust);
});
