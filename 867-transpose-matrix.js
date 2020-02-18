// 867. Transpose Matrix
// https://leetcode.com/problems/transpose-matrix/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 15.59% of JavaScript online submissions
// Memory Usage: 37.7 MB, less than 33.33% of JavaScript online submissions

// /**
//  * @param {number[][]} A
//  * @return {number[][]}
//  */
// const transpose = A => {
//   const transposed = new Array(A[0].length);
//   for (let i = 0; i < transposed.length; i++) {
//     transposed[i] = new Array(A.length);
//   }
//   for (let i = 0; i < A.length; i++) {
//     for (let j = 0; j < A[i].length; j++) {
//       transposed[j][i] = A[i][j];
//     }
//   }
//   return transposed;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 88.50% of JavaScript online submissions
// Memory Usage: 37.6 MB, less than 33.33% of JavaScript online submissions

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const transpose = A => {
  const [rows, cols] = [A.length, A[0].length];
  const transposed = new Array(cols).fill().map(u => new Array(rows));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      transposed[j][i] = A[i][j];
    }
  }
  return transposed;
};

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

deepStrictEqual(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ],
);

deepStrictEqual(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ]),
  [
    [1, 4],
    [2, 5],
    [3, 6],
  ],
);

deepStrictEqual(transpose([[1]]), [[1]]);

deepStrictEqual(transpose([[1, 2]]), [[1], [2]]);

deepStrictEqual(transpose([[1], [2]]), [[1, 2]]);
