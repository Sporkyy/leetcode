// 1582. Special Positions in a Binary Matrix
// https://leetcode.com/problems/special-positions-in-a-binary-matrix/

/*

Given a rows x cols matrix mat, where mat[i][j] is either 0 or 1, return the
number of special positions in mat.

A position (i,j) is called special if mat[i][j] == 1 and all other elements in
row i and column j are 0 (rows and columns are 0-indexed).

## Constraints
- rows == mat.length
- cols == mat[i].length
- 1 <= rows, cols <= 100
- mat[i][j] is 0 or 1.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 140 ms, faster than 7.14% of JavaScript online submissions
// Memory Usage: 39.5 MB, less than 18.25% of JavaScript online submissions

/**
 * @param {number[][]} mat
 * @return {number}
 */
const numSpecial = mat => {
  const rows = new Array(mat.length).fill(0);
  const cols = new Array(mat[0].length).fill(0);

  for (let i = 0; i < mat.length; i++)
    for (let j = 0; j < mat[0].length; j++) {
      rows[i] += mat[i][j];
      cols[j] += mat[i][j];
    }

  // console.log(rows, cols);

  let res = 0;
  for (let i = 0; i < mat.length; i++)
    for (let j = 0; j < mat[0].length; j++)
      if (1 === mat[i][j] && 1 === rows[i] && 1 === cols[j]) res++;

  // console.log(res);

  return res;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(
  numSpecial([
    [1, 0, 0],
    [0, 0, 1],
    [1, 0, 0],
  ]),
  1,
);
// Explanation: (1,2) is a special position because mat[1][2] == 1 and all other
// elements in row 1 and column 2 are 0.

// Example 2:
strictEqual(
  numSpecial([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ]),
  3,
);
// Explanation: (0,0), (1,1) and (2,2) are special positions.

// Example 3:
strictEqual(
  numSpecial([
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ]),
  2,
);

// Example 4:
strictEqual(
  numSpecial([
    [0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
  ]),
  3,
);

strictEqual(
  numSpecial([
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [1, 1, 1, 0],
  ]),
  1,
);

strictEqual(
  numSpecial([
    [0, 0],
    [1, 0],
    [0, 1],
  ]),
  2,
);

/*

Row 0, Col 0: [0,0], [0,1], [1,0], [2,0]
Row 0, Col 1: [0,0], [1,0], [1,1], [2,0]
Row 1, Col 0: [0,0], [1,0], [2,0], [2,2]
Row 2: [1,0], [1,1], [0,1], [2,1]
5: [2,0], [2,1], [0,1], [1,1]

*/

strictEqual(
  numSpecial([
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 0],
  ]),
  2,
);

strictEqual(
  numSpecial([
    [0, 0, 1],
    [0, 0, 0],
    [0, 0, 0],
    [0, 1, 0],
  ]),
  2,
);

/*

[0,0], [0,1], [0,2], [1,0], [2,0], [3,0]
[0,0], [0,1], [0,2], [1,1], [2,1], [3,1]
[0,0], [0,1], [0,2], [1,2], [2,2], [3,2]

[0,0], [1,0], [2,0], [3,0], [1,1], [1,2]
[0,0], [1,0], [2,0], [3,0], [2,1], [2,2]
[0,0], [1,0], [2,0], [3,0], [3,1], [3,2]

[1,1]

[2,2]

[3,1]

*/

strictEqual(
  numSpecial([
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 0],
  ]),
  2,
);

/*

0010
0000
0100

000
100
001
000

0010
1000
0110
0000

*/

strictEqual(
  numSpecial([
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0],
  ]),
  1,
);

/*

----------------
0|0|0|0|0|1|0|0| 1
----------------
0|0|0|0|1|0|0|1| 2
----------------
0|0|0|0|1|0|0|0| 1
----------------
1|0|0|0|1|0|0|0| 2
----------------
0|0|1|1|0|0|0|0| 2
----------------
1 0 1 1 3 1 0 1

*/
