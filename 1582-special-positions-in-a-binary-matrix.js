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

// Runtime: 80 ms, faster than 89.68% of JavaScript online submissions
// Memory Usage: 39.4 MB, less than 21.43% of JavaScript online submissions

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

  let res = 0;
  for (let i = 0; i < mat.length; i++)
    for (let j = 0; j < mat[0].length; j++)
      if (1 === mat[i][j] && 1 === rows[i] && 1 === cols[j]) res++;

  return res;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 100 ms, faster than 45.24% of JavaScript online submissions
// Memory Usage: 38.6 MB, less than 84.92% of JavaScript online submissions

// /**
//  * @param {number[][]} mat
//  * @return {number}
//  */
// const numSpecial = mat => {
//   const rows = new Array(mat.length).fill(0);
//   const cols = new Array(mat[0].length).fill(0);

//   for (let i = 0; i < mat.length; i++)
//     for (let j = 0; j < mat[0].length; j++) {
//       rows[i] += mat[i][j];
//       cols[j] += mat[i][j];
//     }

//   let res = 0;
//   for (let i = 0; i < mat.length; i++) {
//     if (1 !== rows[i]) continue;
//     for (let j = 0; j < mat[0].length; j++) {
//       if (1 !== cols[j]) continue;
//       if (1 === mat[i][j]) res++;
//     }
//   }

//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 196 ms, faster than 5.56% of JavaScript online submissions
// Memory Usage: 41.2 MB, less than 7.93% of JavaScript online submissions

// /**
//  * @param {number[][]} mat
//  * @return {number}
//  */
// const numSpecial = mat => {
//   const rows = new Map([...new Array(mat.length).keys()].map(k => [k, 0]));
//   const cols = new Map([...new Array(mat[0].length).keys()].map(k => [k, 0]));

//   for (let row = 0; row < mat.length; row++)
//     for (let col = 0; col < mat[0].length; col++) {
//       if (rows.has(row)) {
//         let rowCnt = rows.get(row);
//         rowCnt += mat[row][col];
//         if (rowCnt < 2) rows.set(row, rowCnt);
//         else rows.delete(row);
//       }
//       if (cols.has(col)) {
//         let colCnt = cols.get(col);
//         colCnt += mat[row][col];
//         if (colCnt < 2) cols.set(col, colCnt);
//         else cols.delete(col);
//       }
//     }

//   let res = 0;
//   for (const [row, rowCnt] of rows) {
//     if (0 === rowCnt) continue;
//     for (const [col, colCnt] of cols) {
//       if (0 === colCnt) continue;
//       if (1 === mat[row][col]) res++;
//     }
//   }

//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 84 ms, faster than 81.75% of JavaScript online submissions
// Memory Usage: 39.1 MB, less than 42.06% of JavaScript online submissions

// /**
//  * @param {number[][]} mat
//  * @return {number}
//  */
// const numSpecial = mat => {
//   const rows = new Array(mat.length).fill(0);
//   const cols = new Array(mat[0].length).fill(0);

//   for (let row = 0; row < mat.length; row++) {
//     if (1 < rows[row]) continue;
//     for (let col = 0; col < mat[0].length; col++) {
//       const val = mat[row][col];
//       if (!val) continue;
//       rows[row] += val;
//       if (1 < cols[col]) continue;
//       cols[col] += val;
//     }
//   }

//   let res = 0;
//   for (let row = 0; row < mat.length; row++) {
//     if (1 !== rows[row]) continue;
//     for (let col = 0; col < mat[0].length; col++) {
//       if (1 !== cols[col]) continue;
//       if (1 === mat[row][col]) res++;
//     }
//   }

//   return res;
// };

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

strictEqual(
  numSpecial([
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 0],
  ]),
  2,
);

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
