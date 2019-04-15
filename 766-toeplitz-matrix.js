// 766. Toeplitz Matrix
// https://leetcode.com/problems/toeplitz-matrix/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1
// 1 2 3 4
// 5 1 2 3
// 9 5 1 2
// = [ [ [ 0, 0 ], [ 1, 1 ], [ 2, 2 ] ],
//     [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ] ],
//     [ [ 0, 2 ], [ 1, 3 ]           ] ]

// Example 2
// 1 2
// 2 2
// = [ [ [ 0, 0 ] ],
//     [ [ 1, 1 ] ] ]

// Taller than wide
// 1 2 3
// 2 1 5
// 5 7 1
// 3 6 9
// = [ [ [ 0, 0 ], [ 1, 1 ], [ 2, 2 ] ],
//     [ [ 0, 1 ], [ 1, 2 ]           ] ]

// Wrong answer
// 11 74  0 93
// 40 11 74  7
// [ [ [ 0, 0 ], [ 1, 1 ] ],
//   [ [ 0, 1 ], [ 1, 2 ] ],
//   [ [ 0, 2 ], [ 1, 3 ] ] ]

// 4x4 square, true
// 1 2 3 4
// 9 1 2 3
// 9 9 1 2
// 9 9 9 1
// = [ [ [ 0, 0 ], [ 1, 1 ], [ 2, 2 ], [3, 3] ],
//     [ [ 0, 1 ], [ 1, 2 ]  [ 2, 3 ]         ],
//     [ [ 0, 2 ], [ 1, 3 ]                   ] ]
toeplitzGroupIndices = (width, height, groupIndex) => {
  const min = Math.min(height, width - groupIndex);
  const indices = new Array(min);
  for (let i = 0; i < min; i++) {
    indices[i] = [i, i + groupIndex];
  }
  // console.log(indices);
  return indices;
};

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const isToeplitzMatrix = matrix => {
  const width = matrix[0].length;
  const height = matrix.length;
  for (let i = 0; i < width - 1; i++) {
    // console.log(i);
    const indices = toeplitzGroupIndices(width, height, i);
    const members = new Array(indices.length);
    for (let j = 0; j < indices.length; j++) {
      members[j] = matrix[indices[j][0]][indices[j][1]];
    }
    // console.log(members);
    if (!members.every(n => n === members[0])) {
      return false;
    }
  }
  return true;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    //   // 1 2 3 4
    //   // 5 1 2 3
    //   // 9 5 1 2
    input: [[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]],
    expected: true,
  },
  {
    name: 'Example 2',
    //   // 1 2
    //   // 2 2
    input: [[1, 2], [2, 2]],
    expected: false,
  },
  {
    name: 'Taller than wide',
    //  1 2 3
    //  2 1 5
    //  5 7 1
    //  3 6 9
    input: [[1, 2, 3], [2, 1, 5], [5, 7, 1], [3, 6, 9]],
    expected: false,
  },
  {
    name: 'Wrong answer',
    //   // 11 74  0 93
    //   // 40 11 74  7
    input: [[11, 74, 0, 93], [40, 11, 74, 7]],
    expected: false,
  },
  {
    name: '4x4 square, true',
    //   // 1 2 3 4
    //   // 9 1 2 3
    //   // 9 9 1 2
    //   // 9 9 9 1
    input: [[1, 2, 3, 4], [9, 1, 2, 3], [9, 9, 1, 2], [9, 9, 9, 1]],
    expected: true,
  },
  // [[36,59,71,15,26,82,87],[56,36,59,71,15,26,82],[15,0,36,59,71,15,26]]
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
