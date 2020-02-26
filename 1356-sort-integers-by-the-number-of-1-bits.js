// 1356. Sort Integers by The Number of 1 Bits
// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/

/*

Given an integer array arr. You have to sort the integers in the array in
ascending order by the number of 1's in their binary representation and in case
of two or more integers have the same number of 1's you have to sort them in
ascending order.

Return the sorted array.

*/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 188 ms, faster than 17.91% of JavaScript online submissions
// Memory Usage: 42 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {number[]}
//  */
// const sortByBits = arr =>
//   arr.sort((a, b) => {
//     const aBitCnt = [...a.toString(2)].reduce(
//       (acc, curr) => ('1' === curr ? acc + 1 : acc),
//       0,
//     );
//     const bBitCnt = [...b.toString(2)].reduce(
//       (acc, curr) => ('1' === curr ? acc + 1 : acc),
//       0,
//     );
//     return aBitCnt !== bBitCnt ? aBitCnt - bBitCnt : a - b;
//   });

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 268 ms, faster than 5.22% of JavaScript online submissions
// Memory Usage: 41.6 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {number[]}
//  */
// const sortByBits = arr =>
//   arr.sort((a, b) => {
//     const aBitCnt = a
//       .toString(2)
//       .split(/0+/g)
//       .join('').length;
//     const bBitCnt = b
//       .toString(2)
//       .split(/0+/g)
//       .join('').length;
//     return aBitCnt !== bBitCnt ? aBitCnt - bBitCnt : a - b;
//   });

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 220 ms, faster than 14.93% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.
// Memory Usage: 41.5 MB, less than 100.00% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = arr =>
  arr.sort((a, b) => {
    const aBitCnt = a.toString(2).replace(/0+/g, '').length;
    const bBitCnt = b.toString(2).replace(/0+/g, '').length;
    return aBitCnt !== bBitCnt ? aBitCnt - bBitCnt : a - b;
  });

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
deepStrictEqual(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]), [
  0,
  1,
  2,
  4,
  8,
  3,
  5,
  6,
  7,
]);
// Explantion: [0] is the only integer with 0 bits. [1,2,4,8] all have 1 bit.
// [3,5,6] have 2 bits. [7] has 3 bits. The sorted array by bits is
// [0,1,2,4,8,3,5,6,7]

// Example 2:
deepStrictEqual(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]), [
  1,
  2,
  4,
  8,
  16,
  32,
  64,
  128,
  256,
  512,
  1024,
]);
// Explantion: All integers have 1 bit in the binary representation, you should
// just sort them in ascending order.

deepStrictEqual(sortByBits([10000, 10000]), [10000, 10000]);

deepStrictEqual(sortByBits([2, 3, 5, 7, 11, 13, 17, 19]), [
  2,
  3,
  5,
  17,
  7,
  11,
  13,
  19,
]);

deepStrictEqual(sortByBits([10, 100, 1000, 10000]), [10, 100, 10000, 1000]);
