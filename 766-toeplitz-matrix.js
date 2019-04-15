// 766. Toeplitz Matrix
// https://leetcode.com/problems/toeplitz-matrix/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// 1 2 3 4
// 5 1 2 3
// 9 5 1 2
// = [ [ [ 0, 0 ], [ 1, 1 ], [ 2, 2 ] ],
//     [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ] ],
//     [ [ 0, 2 ], [ 1, 3 ]           ] ]
// 1 2
// 2 2
// = [ [ [ 0, 0 ] ],
//     [ [ 1, 1 ] ] ]
// 1 2 3
// 2 1 5
// 5 7 1
// 3 6 9
// = [ [ [ 0, 0 ], [ 1, 1 ], [ 2, 2 ] ],
//     [ [ 0, 1 ], [ 1, 2 ]           ] ]
// 1 2 3 8
// 2 1 5 6
// 5 7 1 6
// 3 6 9 3
// = [ [ [ 0, 0 ], [ 1, 1 ], [ 2, 2 ], [3, 3] ],
//     [ [ 0, 1 ], [ 1, 2 ]  [ 2, 3 ]         ],
//     [ [ 0, 2 ], [ 1, 3 ]                   ] ]
toeplitzIndices = (width, height) => {
  const min = Math.min(width, height);
  const indices = new Array(min - 1);
  for (let i = 0; i < min; i++) {
    console.log(`${i} ${height}`);
    const group = new Array(min - 1);
    for (let j = 0; j < min; j++) {
      group[j] = [j, j + i];
    }
    indices[i] = group;
  }
  console.log(indices);
};

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const isToeplitzMatrix = matrix => {
  toeplitzIndices(matrix[0].length, matrix.length);
  // toeplitzIndices(matrix[0].length, matrix.length)
  //   .map(index => matrix[index][index])
  //   .every(n => n === matrix[0][0]);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  // 1 2 3 4
  // 5 1 2 3
  // 9 5 1 2
  {
    name: 'Example 1',
    input: [[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]],
    expected: true,
  },
  // // 1 2
  // // 2 2
  // {
  //   name: 'Example 2',
  //   input: [[1, 2], [2, 2]],
  //   expected: false,
  // },
  // // 1 2 3
  // // 2 1 5
  // // 5 7 1
  // // 3 6 9
  // {
  //   name: 'Taller than wide',
  //   input: [[1, 2, 3], [2, 1, 5], [5, 7, 1], [3, 6, 9]],
  //   expected: true,
  // },
  // // 11 74  0 93
  // // 40 11 74  7
  // {
  //   name: 'Wrong answer',
  //   input: [[11, 74, 0, 93], [40, 11, 74, 7]],
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
