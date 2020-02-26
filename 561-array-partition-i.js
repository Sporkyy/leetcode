// 561. Array Partition I
// https://leetcode.com/problems/array-partition-i/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 116 ms, faster than 70.08% of JavaScript online submissions
// Memory Usage: 39.1 MB, less than 49.68% of JavaScript online submissions

// const getN = a => a.length / 2;

// const ufo = (v1, v2) => (v1 < v2 ? -1 : v2 < v1 ? 1 : 0);

// const sortAsc = a => a.sort((n1, n2) => ufo(n1, n2));

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const arrayPairSum = nums => {
//   const n = getN(nums);
//   return sortAsc(nums).reduce(
//     (acc, curr, i) => (0 === i % 2 ? acc + curr : acc),
//     0,
//   );
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 120 ms, faster than 56.49% of JavaScript online submissions
// Memory Usage: 40.4 MB, less than 10.83% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const arrayPairSum = nums =>
//   nums
//     .sort((a, b) => a - b)
//     .filter((n, i) => 0 === i % 2)
//     .reduce((acc, curr) => acc + curr);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 116 ms, faster than 71.14% of JavaScript online submissions
// Memory Usage: 40.3 MB, less than 11.11% of JavaScript online submissions

/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = nums =>
  nums
    .sort((a, b) => a - b)
    .filter((_, i) => 0 === i % 2)
    .reduce((acc, curr) => acc + curr);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

strictEqual(arrayPairSum([1, 4, 3, 2]), 4);

strictEqual(arrayPairSum([2, 1]), 1);

strictEqual(arrayPairSum([2, 2, 6, 6, 8, 8]), 16);

strictEqual(arrayPairSum([1, 1, 1, 1, 1, 1]), 3);

strictEqual(arrayPairSum([-1, -4, -3, -2]), -6);
