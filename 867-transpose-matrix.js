// 867. Transpose Matrix
// https://leetcode.com/problems/transpose-matrix/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*

| 1 | 2 | 3 | => | 1 | 4 | 7 |
| 4 | 5 | 6 | => | 2 | 5 | 8 |
| 7 | 8 | 9 | => | 3 | 6 | 9 |

[0][0] => [0][0]
[0][1] => [1][0]
[0][2] => [2][0]
[1][0] => [0][1]
[1][1] => [1][1]
[1][2] => [2][1]
[2][0] => [0][2]
[2][1] => [1][2]
[2][2] => [2][2]

| 1 | 2 | 3 | =>  | 1 | 4 |
| 4 | 5 | 6 | =>  | 2 | 5 |
                  | 3 | 6 |

[0][0] => [0][0]
[0][1] => [1][0]
[0][2] => [2][0]
[1][0] => [0][1]
[1][1] => [1][1]
[1][2] => [2][1]

*/

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = A => {
  const transposed = new Array(A[0].length);
  for (let i = 0; i < transposed.length; i++) {
    transposed[i] = new Array(A.length);
  }
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      // console.log(`[${i}][${j}]`);
      transposed[j][i] = A[i][j];
    }
  }
  return transposed;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: "Example 1",
    input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    expected: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
  },
  {
    name: "Example 2",
    input: [[1, 2, 3], [4, 5, 6]],
    expected: [[1, 4], [2, 5], [3, 6]]
  },
  {
    name: "One",
    input: [[1]],
    expected: [[1]]
  },
  {
    name: "Two, horizontal",
    input: [[1, 2]],
    expected: [[1], [2]]
  },
  {
    name: "Two, vertical",
    input: [[1], [2]],
    expected: [[1, 2]]
  }
];

tests.forEach(({ name, input, expected }) => {
  const result = transpose(input);
  console.log(`${name}`);
  console.log(`Expected: "${expected}"`);
  console.log(`Got: "${result}"`);
});
