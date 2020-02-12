// 944. Delete Columns to Make Sorted
// https://leetcode.com/problems/delete-columns-to-make-sorted/

/*

We are given an array A of N lowercase letter strings, all of the same length.

Now, we may choose any set of deletion indices, and for each string,
we delete all the characters in those indices.

For example, if we have an array A = ["abcdef","uvwxyz"] and
deletion indices {0, 2, 3}, then the final array after deletions is
["bef", "vyz"], and the remaining columns of A are ["b","v"], ["e","y"],
and ["f","z"].
(Formally, the c-th column is [A[0][c], A[1][c], ..., A[A.length-1][c]].)

Suppose we chose a set of deletion indices D such that after deletions,
each remaining column in A is in non-decreasing sorted order.

Return the minimum possible value of D.length.

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 432 ms, faster than 5.11% of JavaScript online submissions
// Memory Usage: 43.4 MB, less than 20.00% of JavaScript online submissions

// /**
//  * @param {string[]} A
//  * @return {number}
//  */
// const minDeletionSize = A => {
//   if (0 == A.length) return undefined;
//   const colCount = A[0].length;
//   let nonIncreasingColCount = 0;
//   const extractColumn = (a, i) => a.reduce((acc, curr) => [...acc, curr[i]], []);
//   const isArrayNonDecreasing = a => {
//     if (a.length < 2) return undefined;
//     let answer = true;
//     for (let i = 0; i < a.length - 1; i++) {
//       const curr = a[i];
//       const next = a[i + 1];
//       // console.log(`${curr} then ${next}`);
//       answer = answer && curr <= next;
//     }
//     return answer;
//   };
//   for (let i = 0; i < colCount; i++) {
//     const col = extractColumn(A, i);
//     // console.log(`${col} = ${isArrayIncreasing(col)}`);
//     if (!isArrayNonDecreasing(col)) {
//       nonIncreasingColCount++;
//     }
//   }
//   return nonIncreasingColCount;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 160 ms, faster than 12.77% of JavaScript online submissions
// Memory Usage: 53.5 MB, less than 20.00% of JavaScript online submissions

// /**
//  * @param {string[]} A
//  * @return {number}
//  */
// const minDeletionSize = A => {
//   const rotated = unrotatedArray => {
//     const rotatedArray = new Array(unrotatedArray[0].length).fill('');
//     for (let row = 0; row < unrotatedArray.length; row++) {
//       for (let col = 0; col < unrotatedArray[0].length; col++) {
//         rotatedArray[col] += unrotatedArray[row][col];
//       }
//     }
//     return rotatedArray;
//   };
//   return rotated(A).filter(row => {
//     for (let i = 0; i < row.length - 1; i++) {
//       if (row[i + 1] < row[i]) return true;
//     }
//     return false;
//   }).length;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 69.74% of JavaScript online submissions
// Memory Usage: 39.6 MB, less than 40.00% of JavaScript online submissions

/**
 * @param {string[]} A
 * @return {number}
 */
const minDeletionSize = A => {
  let result = 0;
  loop: for (let i = 0; i < A[0].length; i++) {
    for (let j = 0; j < A.length - 1; j++) {
      if (A[j + 1][i] < A[j][i]) {
        result++;
        continue loop;
      }
    }
  }
  return result;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

// + | c d g
// - | b a h
// + | a f i

strictEqual(minDeletionSize(['cba', 'daf', 'ghi']), 1);

// + | a
// + | b

strictEqual(minDeletionSize(['a', 'b']), 0);

// - | z w t
// - | y v s
// - | x u r

strictEqual(minDeletionSize(['zyx', 'wvu', 'tsr']), 3);

// + | a a a
// + | b b b
// + | c c c
// + | d d d
// + | e e e
// + | f f f

strictEqual(minDeletionSize(['abcdef', 'abcdef', 'abcdef']), 0);

// - | r f g
// + | r u u
// + | j r z
// - | k t m

strictEqual(minDeletionSize(['rrjk', 'furt', 'guzm']), 2);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*

3 x 3

[0, 0] [0, 1] [0, 2]
[1, 0] [1, 1] [1, 2]
[2, 0] [2, 1] [2, 2]

<0, 0> <1, 0> <2, 0>
<0, 1> <1, 1> <2, 1>
<0, 2> <1, 2> <2, 2>

6 x 3

[0, 0] [0, 1] [0, 2] [0, 3] [0, 4] [0, 5]
[1, 0] [1, 1] [1, 2] [1, 3] [1, 4] [1, 5]
[2, 0] [2, 1] [2, 2] [2, 3] [2, 4] [2, 5]

<0, 0> <1, 0> <2, 0>
<0, 1> <1, 1> <2, 1>
<0, 2> <1, 2> <2, 2>
<0, 3> <1, 3> <2, 3>
<0, 4> <1, 4> <2, 4>
<0, 5> <1, 5> <2, 5>

4 x 3

[0, 0] [0, 1] [0, 2] [0, 3]
[1, 0] [1, 1] [1, 2] [1, 3]
[2, 0] [2, 1] [2, 2] [2, 3]

<0, 0> <1, 0> <2, 0>
<0, 1> <1, 1> <2, 1>
<0, 2> <1, 2> <2, 2>
<0, 3> <1, 3> <2, 3>

2 x 3

[0, 0] [0, 1]
[1, 0] [1, 1]
[2, 0] [2, 1]

<0, 0> <1, 0> <2, 0>
<0, 1> <1, 1> <2, 1>

*/
