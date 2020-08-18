// 1551. Minimum Operations to Make Array Equal
// https://leetcode.com/problems/minimum-operations-to-make-array-equal/

/*

You have an array arr of length n where arr[i] = (2 * i) + 1 for all valid
values of i (i.e. 0 <= i < n).

In one operation, you can select two indices x and y where 0 <= x, y < n and
subtract 1 from arr[x] and add 1 to arr[y] (i.e. perform arr[x] -=1 and arr[y]
+= 1). The goal is to make all the elements of the array equal. It is guaranteed
that all the elements of the array can be made equal using some operations.

Given an integer n, the length of the array. Return the minimum number of
operations needed to make all the elements of arr equal.

## Constraints
- 1 <= n <= 10^4

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {number} n
//  * @return {number}
//  */
// const minOperations = n => {
//   // 2*a(n-1) - a(n-2) + a(n-8) - 2*a(n-9) + a(n-10)
//   const arr = [...new Array(n).keys()].map(i => i * 2 + 1);
//   console.log(arr);
//   console.log(
//     arr.reduce(
//       (acc, curr, idx) =>
//         acc + (0 === idx % 2 ? 2 : 1) * (0 === idx % 2 ? 1 : -1) * curr,
//       0,
//     ),
//   );
//   return arr.reduce(
//     (acc, curr, idx) =>
//       acc + (0 === idx % 2 ? 2 : 1) * (0 === idx % 2 ? 1 : -1) * curr,
//     0,
//   );
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {number} n
//  * @return {number}
//  */
// const minOperations = n => {
//   const arr = [...new Array(n).keys()].map(i => i * 2 + 1);
//   // console.log(arr);
//   // console.log(
//   //   arr
//   //     .slice(0, n / 2)
//   //     .map(m => n - m)
//   //     .reduce((acc, curr) => acc + curr),
//   // );
//   return arr
//     .slice(0, n / 2)
//     .map(m => n - m)
//     .reduce((acc, curr) => acc + curr, 0);
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {number} n
//  * @return {number}
//  */
// const minOperations = n =>
//   [...new Array(n).keys()]
//     .map(i => i * 2 + 1)
//     .slice(0, n / 2)
//     .map(m => n - m)
//     .reduce((acc, curr) => acc + curr, 0);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 128 ms, faster than 31.15% of JavaScript online submissions
// Memory Usage: 42.4 MB, less than 8.20% of JavaScript online submissions

/**
 * @param {number} n
 * @return {number}
 */
const minOperations = n =>
  [...new Array(n).keys()]
    .map(i => i * 2 + 1)
    .slice(0, n / 2)
    .reduce((acc, curr) => acc + n - curr, 0);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

strictEqual(minOperations(1), 0);
// 0: [1]

strictEqual(minOperations(2), 1);
// 0: [1, 3]
// 1: [2, 2]

// Example 1:
strictEqual(minOperations(3), 2);
// 0: [ 1, 3, 5 ]
// 1: [ 2, 3, 4 ]
// 2: [ 3, 3, 3 ]

strictEqual(minOperations(4), 4);
// 0: [ 1, 3, 5, 7 ]
// 1: [ 1, 4, 4, 7 ]
// 2: [ 2, 4, 4, 6 ]
// 3: [ 3, 4, 4, 5 ]
// 4: [ 4, 4, 4, 4 ]

strictEqual(minOperations(5), 6);
// 0: [ 1, 3, 5, 7, 9 ]
// 1: [ 1, 4, 5, 6, 9 ]
// 2: [ 1, 5, 5, 5, 9 ]
// 3: [ 2, 5, 5, 5, 8 ]
// 4: [ 3, 5, 5, 5, 7 ]
// 5: [ 4, 5, 5, 5, 6 ]
// 6: [ 5, 5, 5, 5, 5 ]

// Example 2:
strictEqual(minOperations(6), 9);
// 0: [ 1, 3, 5, 7, 9, 11 ]
// 1: [ 1, 3, 6, 6, 9, 11 ]
// 2: [ 1, 4, 6, 6, 8, 11 ]
// 3: [ 1, 5, 6, 6, 7, 11 ]
// 4: [ 1, 6, 6, 6, 6, 11 ]
// 5: [ 2, 6, 6, 6, 6, 10 ]
// 6: [ 3, 6, 6, 6, 6,  9 ]
// 7: [ 4, 6, 6, 6, 6,  8 ]
// 8: [ 5, 6, 6, 6, 6,  7 ]
// 9: [ 6, 6, 6, 6, 6,  6 ]

strictEqual(minOperations(7), 12);
//  0: [ 1, 3, 5, 7, 9, 11, 13 ]
//  1: [ 1, 3, 6, 7, 8, 11, 13 ]
//  2: [ 1, 3, 7, 7, 7, 11, 13 ]
//  3: [ 1, 4, 7, 7, 7, 10, 13 ]
//  4: [ 1, 5, 7, 7, 7,  9, 13 ]
//  5: [ 1, 6, 7, 7, 7,  8, 13 ]
//  6: [ 1, 7, 7, 7, 7,  7, 13 ]
//  7: [ 2, 7, 7, 7, 7,  7, 12 ]
//  8: [ 3, 7, 7, 7, 7,  7, 11 ]
//  9: [ 4, 7, 7, 7, 7,  7, 10 ]
// 10: [ 5, 7, 7, 7, 7,  7,  9 ]
// 11: [ 6, 7, 7, 7, 7,  7,  8 ]
// 12: [ 7, 7, 7, 7, 7,  7,  7 ]

strictEqual(minOperations(8), 16);
//  0: [ 1, 3, 5, 7, 9, 11, 13, 15 ]
//  1: [ 1, 3, 5, 8, 8, 11, 13, 15 ]
//  2: [ 1, 3, 6, 8, 8, 10, 13, 15 ]
//  3: [ 1, 3, 7, 8, 8,  9, 13, 15 ]
//  4: [ 1, 3, 8, 8, 8,  8, 13, 15 ]
//  5: [ 1, 4, 8, 8, 8,  8, 12, 15 ]
//  6: [ 1, 5, 8, 8, 8,  8, 11, 15 ]
//  7: [ 1, 6, 8, 8, 8,  8, 10, 15 ]
//  8: [ 1, 7, 8, 8, 8,  8,  9, 15 ]
//  9: [ 1, 8, 8, 8, 8,  8,  8, 15 ]
// 10: [ 2, 8, 8, 8, 8,  8,  8, 14 ]
// 11: [ 3, 8, 8, 8, 8,  8,  8, 13 ]
// 12: [ 4, 8, 8, 8, 8 , 8,  8, 12 ]
// 13: [ 5, 8, 8, 8, 8,  8,  8, 11 ]
// 14: [ 6, 8, 8, 8, 8,  8,  8, 10 ]
// 15: [ 7, 8, 8, 8, 8,  8,  8,  9 ]
// 16: [ 8, 8, 8, 8, 8,  8,  8,  8 ]

strictEqual(minOperations(9), 20);
//  0: [ 1, 3, 5, 7, 9, 11, 13, 15, 17 ]
//  1: [ 1, 3, 5, 8, 9, 10, 13, 15, 17 ]
//  2: [ 1, 3, 5, 9, 9,  9, 13, 15, 17 ]
//  3: [ 1, 3, 6, 9, 9,  9, 12, 15, 17 ]
//  4: [ 1, 3, 7, 9, 9,  9, 11, 15, 17 ]
//  5: [ 1, 3, 8, 9, 9,  9, 10, 15, 17 ]
//  6: [ 1, 3, 9, 9, 9,  9,  9, 15, 17 ]
//  7: [ 1, 4, 9, 9, 9,  9,  9, 14, 17 ]
//  8: [ 1, 5, 9, 9, 9,  9,  9, 13, 17 ]
//  9: [ 1, 6, 9, 9, 9,  9,  9, 12, 17 ]
// 10: [ 1, 7, 9, 9, 9,  9,  9, 11, 17 ]
// 11: [ 1, 8, 9, 9, 9,  9,  9, 10, 17 ]
// 12: [ 1, 9, 9, 9, 9,  9,  9,  9, 17 ]
// 13: [ 2, 9, 9, 9, 9,  9,  9,  9, 16 ]
// 14: [ 3, 9, 9, 9, 9,  9,  9,  9, 15 ]
// 15: [ 4, 9, 9, 9, 9,  9,  9,  9, 14 ]
// 16: [ 5, 9, 9, 9, 9,  9,  9,  9, 13 ]
// 17: [ 6, 9, 9, 9, 9,  9,  9,  9, 12 ]
// 18: [ 7, 9, 9, 9, 9,  9,  9,  9, 11 ]
// 19: [ 8, 9, 9, 9, 9,  9,  9,  9, 10 ]
// 20: [ 9, 9, 9, 9, 9,  9,  9,  9,  9 ]

strictEqual(minOperations(31), 240);
