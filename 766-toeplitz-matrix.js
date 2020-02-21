// 766. Toeplitz Matrix
// https://leetcode.com/problems/toeplitz-matrix/

/*

A matrix is Toeplitz if every diagonal from top-left to bottom-right has the
same element.

Now given an M x N matrix, return True if and only if the matrix is Toeplitz.

*/

import { ok } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 97.24% of JavaScript online submissions
// Memory Usage: 35.6 MB, less than 100.00% of JavaScript online submissions

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

// 1 2 3 4
// 5 1 2 3
// 9 5 1 2

ok(
  isToeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2],
  ]),
);

// 1 2
// 2 2

ok(
  !isToeplitzMatrix([
    [1, 2],
    [2, 2],
  ]),
);

//  1 2 3
//  2 1 5
//  5 7 1
//  3 6 9

ok(
  !isToeplitzMatrix([
    [1, 2, 3],
    [2, 1, 5],
    [5, 7, 1],
    [3, 6, 9],
  ]),
);

// 11 74  0 93
// 40 11 74  7

ok(
  !isToeplitzMatrix([
    [11, 74, 0, 93],
    [40, 11, 74, 7],
  ]),
);

// 1 2 3 4
// 9 1 2 3
// 9 9 1 2
// 9 9 9 1

ok(
  isToeplitzMatrix([
    [1, 2, 3, 4],
    [9, 1, 2, 3],
    [9, 9, 1, 2],
    [9, 9, 9, 1],
  ]),
);

// 36 59 71 15 26 82 87
// 56 36 59 71 15 26 82
// 15  0 36 59 71 15 26

ok(
  !isToeplitzMatrix([
    [36, 59, 71, 15, 26, 82, 87],
    [56, 36, 59, 71, 15, 26, 82],
    [15, 0, 36, 59, 71, 15, 26],
  ]),
);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*

| 1 | 2 | 3 | 4 |
| 9 | 1 | 2 | 3 |
| 9 | 9 | 1 | 2 |
| 9 | 9 | 9 | 1 |

[0, 0], [1, 1], [2, 2], [3, 3]
[0, 1], [1, 2], [2, 3]
[0, 2], [1, 3]
[1, 0], [2, 1], [3, 2]
[2, 0], [3, 1]

*/
