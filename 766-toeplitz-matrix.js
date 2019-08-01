// 766. Toeplitz Matrix
// https://leetcode.com/problems/toeplitz-matrix/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 60.57% of JavaScript online submissions
// for Toeplitz Matrix.
// Memory Usage: 35.7 MB, less than 34.54% of JavaScript online submissions
// for Toeplitz Matrix.

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const isToeplitzMatrix = matrix => {
  for (let i = 0; i < matrix.length - 1; i++)
    for (let j = 0; j < matrix[0].length - 1; j++)
      if (matrix[i][j] !== matrix[i + 1][j + 1]) return false;
  return true;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  // 1 2 3 4
  // 5 1 2 3
  // 9 5 1 2

  {
    input: [[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]],
    expected: true,
  },

  // 1 2
  // 2 2

  {
    input: [[1, 2], [2, 2]],
    expected: false,
  },

  //  1 2 3
  //  2 1 5
  //  5 7 1
  //  3 6 9

  {
    input: [[1, 2, 3], [2, 1, 5], [5, 7, 1], [3, 6, 9]],
    expected: false,
  },

  // 11 74  0 93
  // 40 11 74  7

  {
    input: [[11, 74, 0, 93], [40, 11, 74, 7]],
    expected: false,
  },

  // 1 2 3 4
  // 9 1 2 3
  // 9 9 1 2
  // 9 9 9 1

  {
    input: [[1, 2, 3, 4], [9, 1, 2, 3], [9, 9, 1, 2], [9, 9, 9, 1]],
    expected: true,
  },

  // 36 59 71 15 26 82 87
  // 56 36 59 71 15 26 82
  // 15  0 36 59 71 15 26

  {
    input: [
      [36, 59, 71, 15, 26, 82, 87],
      [56, 36, 59, 71, 15, 26, 82],
      [15, 0, 36, 59, 71, 15, 26],
    ],
    expected: false,
  },
];

for ({ input, expected } of tests) {
  const result = isToeplitzMatrix(input);
  const name = JSON.stringify(input);
  if (result === expected) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
}
