// 766. Toeplitz Matrix
// https://leetcode.com/problems/toeplitz-matrix/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const isToeplitzMatrix = matrix => {
  for (let i = 0; i < matrix.length - 1; i++) {
    // console.log(i);
    for (let j = 0; j < matrix[0].length - 1; j++) {
      // console.log(j);
      // console.log(`[${i}, ${j}] !== [${i + 1}, ${j + 1}]`);
      if (matrix[i][j] !== matrix[i + 1][j + 1]) {
        return false;
      }
    }
  }
  return true;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    // 1 2 3 4
    // 5 1 2 3
    // 9 5 1 2
    input: [[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]],
    expected: true,
  },
  // {
  //   name: 'Example 2',
  //   // 1 2
  //   // 2 2
  //   input: [[1, 2], [2, 2]],
  //   expected: false,
  // },
  // {
  //   name: 'Taller than wide',
  //   //  1 2 3
  //   //  2 1 5
  //   //  5 7 1
  //   //  3 6 9
  //   input: [[1, 2, 3], [2, 1, 5], [5, 7, 1], [3, 6, 9]],
  //   expected: false,
  // },
  // {
  //   name: 'Wrong answer 1',
  //   // 11 74  0 93
  //   // 40 11 74  7
  //   input: [[11, 74, 0, 93], [40, 11, 74, 7]],
  //   expected: false,
  // },
  // {
  //   name: '4x4 square, true',
  //   //   // 1 2 3 4
  //   //   // 9 1 2 3
  //   //   // 9 9 1 2
  //   //   // 9 9 9 1
  //   input: [[1, 2, 3, 4], [9, 1, 2, 3], [9, 9, 1, 2], [9, 9, 9, 1]],
  //   expected: true,
  // },
  // {
  //   name: 'Wrong answer 2',
  //   // 36 59 71 15 26 82 87
  //   // 56 36 59 71 15 26 82
  //   // 15  0 36 59 71 15 26
  //   input: [
  //     [36, 59, 71, 15, 26, 82, 87],
  //     [56, 36, 59, 71, 15, 26, 82],
  //     [15, 0, 36, 59, 71, 15, 26],
  //   ],
  //   expected: false,
  // },
];

tests.forEach(({ name, input, expected }) => {
  const result = isToeplitzMatrix(input);
  if (result === expected) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
