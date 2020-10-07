// 1588. Sum of All Odd Length Subarrays
// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/

/*

Given an array of positive integers arr, calculate the sum of all possible
odd-length subarrays.

A subarray is a contiguous subsequence of the array.

Return the sum of all odd-length subarrays of arr.

## Constraints
- 1 <= arr.length <= 100
- 1 <= arr[i] <= 1000

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 72 ms, faster than 92.82% of JavaScript online submissions
// Memory Usage: 44.3 MB, less than 9.17% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {number}
//  */
// const sumOddLengthSubarrays = arr => {
//   let res = 0;
//   for (let i = 1; i <= arr.length; i += 2) {
//     // console.log(i);
//     for (let j = 0; j + i <= arr.length; j++) {
//       // console.log(j);
//       // console.log(arr.slice(j, j + i));
//       // console.log(arr.slice(j, j + i).reduce((acc, curr) => acc + curr));
//       res += arr.slice(j, j + i).reduce((acc, curr) => acc + curr);
//     }
//   }
//   // console.log(res);
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 92 ms, faster than 27.72% of JavaScript online submissions
// Memory Usage: 43.9 MB, less than 17.33% of JavaScript online submissions

/**
 * @param {number[]} arr
 * @return {number}
 */
const sumOddLengthSubarrays = arr => {
  let res = 0;
  for (let i = 1; i <= arr.length; i += 2)
    for (let j = 0; j + i <= arr.length; j++)
      res += arr.slice(j, j + i).reduce((acc, curr) => acc + curr);
  return res;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// strictEqual(sumOddLengthSubarrays([0]), 0);

/*

  0
+---+
| 0 |
+---+
  1

*/

// Example 2:
// strictEqual(sumOddLengthSubarrays([1, 2]), 3);
// Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.

/*

  1   2
+---+---+
| 1 |   |
+---+---+
|   | 2 |
+---+---+
  1   1

*/

// Example 3:
// strictEqual(sumOddLengthSubarrays([10, 11, 12]), 66);

/*

  10   11   12
+----+----+----+
| 10 | 11 | 12 |
+----+----+----+
| 10 |    |    |
|    | 11 |    |
|    |    | 12 |
+----+----+----+
   2    2    2

*/

strictEqual(sumOddLengthSubarrays([10, 11, 12, 13]), 115);

/*

  10   11   12   13
+----+----+----+----+
| 10 | 11 | 12 |    |
|    | 11 | 12 | 13 |
+----+----+----+----+
| 10 |    |    |    |
|    | 11 |    |    |
|    |    | 12 |    |
|    |    |    | 13 |
+----+----+----+----+
   2    3    3    2

*/

// Example 1:
strictEqual(sumOddLengthSubarrays([1, 4, 2, 5, 3]), 58);

/*

  1   4   2   5   3
+---+---+---+---+---+
| 1 | 4 | 2 | 5 | 3 |
+---+---+---+---+---+
| 1 | 4 | 2 |   |   |
|   | 4 | 2 | 5 |   |
|   |   | 2 | 5 | 3 |
+---+---+---+---+---+
| 1 |   |   |   |   |
|   | 4 |   |   |   |
|   |   | 2 |   |   |
|   |   |   | 5 |   |
|   |   |   |   | 3 |
+---+---+---+---+---+
  3   4   5   4   3

*/

strictEqual(sumOddLengthSubarrays([1, 4, 2, 5, 3, 6]), 98);

/*

  1   4   2   5   3   6
+---+---+---+---+---+---+
| 1 | 4 | 2 | 5 | 3 |   |
|   | 4 | 2 | 5 | 3 | 6 |
+---+---+---+---+---+---+
| 1 | 4 | 2 |   |   |   |
|   | 4 | 2 | 5 |   |   |
|   |   | 2 | 5 | 3 |   |
|   |   |   | 5 | 3 | 6 |
+---+---+---+---+---+---+
| 1 |   |   |   |   |   |
|   | 4 |   |   |   |   |
|   |   | 2 |   |   |   |
|   |   |   | 5 |   |   |
|   |   |   |   | 3 |   |
|   |   |   |   |   | 6 |
+---+---+---+---+---+---+
  3   5   6   6   5   3

*/

strictEqual(sumOddLengthSubarrays([1, 4, 2, 5, 3, 6]), 98);

strictEqual(sumOddLengthSubarrays([0, 1, 2, 3, 4, 5, 6]), 132);

/*

+---+---+---+---+---+---+---+
| 0 | 1 | 2 | 3 | 4 | 5 | 6 |
+---+---+---+---+---+---+---+
| 0 | 1 | 2 | 3 | 4 |   |   |
|   | 1 | 2 | 3 | 4 | 5 |   |
|   |   | 2 | 3 | 4 | 5 | 6 |
+---+---+---+---+---+---+---+
| 0 | 1 | 2 |   |   |   |   |
|   | 1 | 2 | 3 |   |   |   |
|   |   | 2 | 3 | 4 |   |   |
|   |   |   | 3 | 4 | 5 |   |
|   |   |   |   | 4 | 5 | 6 |
+---+---+---+---+---+---+---+
| 0 |   |   |   |   |   |   |
|   | 1 |   |   |   |   |   |
|   |   | 2 |   |   |   |   |
|   |   |   | 3 |   |   |   |
|   |   |   |   | 4 |   |   |
|   |   |   |   |   | 5 |   |
|   |   |   |   |   |   | 6 |
+---+---+---+---+---+---+---+
  4   6   8   8   8   6   4

*/

strictEqual(sumOddLengthSubarrays([0, 1, 2, 3, 4, 5, 6, 7]), 210);

/*

  0   1   2    3    4   5   6   7
+---+---+---+----+----+---+---+---+
| 0 | 1 | 2 |  3 |  4 | 5 | 6 |   |
|   | 1 | 2 |  3 |  4 | 5 | 6 | 7 |
+---+---+---+----+----+---+---+---+
| 0 | 1 | 2 |  3 |  4 |   |   |   |
|   | 1 | 2 |  3 |  4 | 5 |   |   |
|   |   | 2 |  3 |  4 | 5 | 6 |   |
|   |   |   |  3 |  4 | 5 | 6 | 7 |
+---+---+---+----+----+---+---+---+
| 0 | 1 | 2 |    |    |   |   |   |
|   | 1 | 2 |  3 |    |   |   |   |
|   |   | 2 |  3 |  4 |   |   |   |
|   |   |   |  3 |  4 | 5 |   |   |
|   |   |   |    |  4 | 5 | 6 |   |
|   |   |   |    |    | 5 | 6 | 7 |
+---+---+---+----+----+---+---+---+
| 0 |   |   |    |    |   |   |   |
|   | 1 |   |    |    |   |   |   |
|   |   | 2 |    |    |   |   |   |
|   |   |   |  3 |    |   |   |   |
|   |   |   |    |  4 |   |   |   |
|   |   |   |    |    | 5 |   |   |
|   |   |   |    |    |   | 6 |   |
|   |   |   |    |    |   |   | 7 |
+---+---+---+----+----+---+---+---+
  4   7   9   10   10   9   7   4

*/
