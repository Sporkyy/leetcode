// 1477. Find Two Non-overlapping Sub-arrays Each With Target Sum
// https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/

/*

Given an array of integers arr and an integer target.

You have to find two non-overlapping sub-arrays of arr each with sum equal
target. There can be multiple answers so you have to find an answer where the
sum of the lengths of the two sub-arrays is minimum.

Return the minimum sum of the lengths of the two required sub-arrays, or return
-1 if you cannot find such two sub-arrays.

Constraints:
- 1 <= arr.length <= 10^5
- 1 <= arr[i] <= 1000
- 1 <= target <= 10^8

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Time Limit Exceeded

// /**
//  * @param {number[]} arr
//  * @param {number} target
//  * @return {number}
//  */
// const minSumOfLengths = (arr, target) => {
//   const groups = [];
//   for (let i = 0, sum = 0, idxs = []; i < arr.length; i++) {
//     while (idxs.length && target < sum + arr[i]) sum -= arr[idxs.shift()];
//     idxs.push(i);
//     sum += arr[i];
//     if (target === sum) groups.push([idxs[0], idxs[idxs.length - 1]]);
//   }
//   // console.log(groups);
//   const x = groups.map(([aL, aR]) => {
//     // console.log(groups.filter(([bL]) => aR < bL));
//     return (
//       aR -
//       aL +
//       groups.reduce(
//         (acc, [bL, bR]) => (aR < bL && bR - bL < acc ? bR - bL : acc),
//         Infinity,
//       ) +
//       2
//     );
//   });
//   // console.log(x);
//   return Infinity === Math.min(...x) ? -1 : Math.min(...x);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 168 ms, faster than 64.84% of JavaScript online submissions
// Memory Usage: 45.6 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @param {number} target
//  * @return {number}
//  */
// const minSumOfLengths = (arr, target) => {
//   let [lL, lR, rL, rR] = [0, 0, arr.length - 1, arr.length - 1];
//   const sumIndicies = (l, r) => (l === r ? arr[l] : arr[l] + arr[r]);
//   let [lSum, rSum] = [sumIndicies(lL, lR), sumIndicies(rL, rR)];
//   let [one, two] = [Infinity, Infinity];
//   while (lR < rL) {
//     // console.log(arr.slice(lL, lR + 1), arr.slice(rL, rR + 1));
//     // console.log(lSum, rSum);
//     // console.log(lL, lR, rL, rR);
//     while (target < lSum && lL <= lR) lSum -= arr[lL++];
//     while (target < rSum && rL <= rR) rSum -= arr[rR--];
//     if (lSum === target && lR - lL < one) one = lR - lL;
//     if (rSum === target && rR - rL < two) two = rR - rL;
//     if (one <= two) rSum += arr[--rL];
//     else lSum += arr[++lR];
//   }
//   // console.log(lL, lR, rL, rR);
//   // console.log(one, two);
//   if (Infinity === one + two) return -1;
//   return one + two + 2;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 88 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 45.5 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @param {number} target
//  * @return {number}
//  */
// const minSumOfLengths = (arr, target) => {
//   let [iLL, iLR, iRL, iRR] = [0, 0, arr.length - 1, arr.length - 1];
//   let [lSum, rSum] = [arr[iLL], arr[iRL]];
//   let [left, right] = [Infinity, Infinity];
//   while (iLR < iRL) {
//     while (target < lSum) lSum -= arr[iLL++];
//     while (target < rSum) rSum -= arr[iRR--];
//     if (lSum === target && iLR - iLL < left) left = iLR - iLL;
//     if (rSum === target && iRR - iRL < right) right = iRR - iRL;
//     if (left <= right) rSum += arr[--iRL];
//     else lSum += arr[++iLR];
//   }
//   return Infinity === left + right ? -1 : left + right + 2;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 116 ms, faster than 95.60% of JavaScript online submissions
// Memory Usage: 45.5 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
const minSumOfLengths = (arr, target) => {
  let [iLL, iLR, iRL, iRR] = [0, 0, arr.length - 1, arr.length - 1];
  let [lSum, rSum] = [arr[iLL], arr[iRL]];
  let [left, right] = [Infinity, Infinity];
  while (iLR < iRL) {
    while (target < lSum) lSum -= arr[iLL++];
    while (target < rSum) rSum -= arr[iRR--];
    if (lSum === target) left = Math.min(left, iLR - iLL);
    if (rSum === target) right = Math.min(right, iRR - iRL);
    if (left <= right) rSum += arr[--iRL];
    else lSum += arr[++iLR];
  }
  return Infinity === left + right ? -1 : left + right + 2;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(minSumOfLengths([3, 2, 2, 4, 3], 3), 2);
/*

| 3 | 2,2,4 | 3 |
| 0 |       | 4 |

*/

// Example 2:
strictEqual(minSumOfLengths([7, 3, 4, 7], 7), 2);
/*

| 7 | 3,4 | 7 |
| 0 |     | 3 |

*/

// Example 3:
strictEqual(minSumOfLengths([4, 3, 2, 6, 2, 3, 4], 6), -1);
// Explanation: We have only one sub-array of sum = 6.

// Example 4:
strictEqual(minSumOfLengths([5, 5, 4, 4, 5], 3), -1);
// Explanation: We cannot find a sub-array of sum = 3.

// Example 5:
strictEqual(minSumOfLengths([3, 1, 1, 1, 5, 1, 2, 1], 3), 3);
// Explanation: Note that sub-arrays [1,2] and [2,1] cannot be an answer because they overlap.

/*

| 3 | 1,1,1,5 | 1+2 | 1 |
| 0 |         | 5-6 |

*/

// strictEqual(minSumOfLengths([1, 6, 1], 7), -1);

strictEqual(minSumOfLengths([1, 2, 2, 3, 2, 6, 7, 2, 1, 4, 8], 5), 4);

/*

| 1,2 | 2+3 | 2,6,7,2 | 1+4 | 8 |
      | 2-3 |         | 8-9 |

*/

strictEqual(
  minSumOfLengths(
    [
      2,
      2,
      4,
      4,
      4,
      4,
      4,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
    ],
    20,
  ),
  23,
);

/*
| 2+2+4+4+4+4 | 4+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1 | 1,1,1,1
| 0---------5 | 6------------------------------22 |
*/

strictEqual(minSumOfLengths([1, 1, 2, 1, 1, 3], 4), 5);

/*

| 1+1+2 | 1 | 1+3 |
| 0---2 |   | 4-5 |

|1,1,2| 1 |1,3|
|1+1+2| 1 |1+3|

*/

strictEqual(minSumOfLengths([1, 1, 1, 2, 2, 2, 4, 4], 6), 6);

/*

| 1 | 1+1+2+2 | 2+4 | 4 |
| 1-----4 | 5-6 |

*/

strictEqual(minSumOfLengths([20, 1, 1, 1, 2, 2, 2, 4, 4], 6), 6);
