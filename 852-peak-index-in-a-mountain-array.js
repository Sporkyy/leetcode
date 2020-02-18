// 852. Peak Index in a Mountain Array
// https://leetcode.com/problems/peak-index-in-a-mountain-array/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 22.20% of JavaScript online submissions
// Memory Usage: 34.9 MB, less than 60.98% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @return {number}
//  */
// const peakIndexInMountainArray = A =>
//   A.reduce(
//     (acc, curr, i) => ('undefined' === typeof acc || A[acc] < curr ? i : acc),
//     undefined,
//   );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 67.36% of JavaScript online submissions
// Memory Usage: 35.1 MB, less than 46.15% of JavaScript online submissions

/**
 * @param {number[]} A
 * @return {number}
 */
const peakIndexInMountainArray = A =>
  A.reduce((acc, curr, i) => (A[acc] < curr ? i : acc), 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

strictEqual(peakIndexInMountainArray([0, 1, 0]), 1);

strictEqual(peakIndexInMountainArray([0, 2, 1, 0]), 1);

strictEqual(peakIndexInMountainArray([0, 1, 2, 0]), 2);

strictEqual(peakIndexInMountainArray([3, 1, 2, 0]), 0);

strictEqual(peakIndexInMountainArray([1, 2, 0, 3]), 3);

strictEqual(peakIndexInMountainArray([999]), 0);
