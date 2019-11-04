// 4. Median of Two Sorted Arrays
// https://leetcode.com/problems/median-of-two-sorted-arrays/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * Runtime: 132 ms, faster than 69.43% of JavaScript online submissions
//  * Memory Usage: 40.2 MB, less than 17.29% of JavaScript online submissions
//  *
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// const findMedianSortedArrays = (nums1, nums2) =>
//   [...nums1, ...nums2]
//     .sort((a, b) => (a < b ? -1 : a === b ? 0 : 1))
//     .slice(
//       1 === (nums1.length + nums2.length) % 2
//         ? Math.trunc((nums1.length + nums2.length) / 2)
//         : Math.floor((nums1.length + nums2.length) / 2 - 1),
//       1 === (nums1.length + nums2.length) % 2
//         ? Math.trunc((nums1.length + nums2.length) / 2) + 1
//         : Math.ceil((nums1.length + nums2.length) / 2 + 1),
//     )
//     .reduce((acc, curr) => acc + curr, 0) /
//   (1 === (nums1.length + nums2.length) % 2 ? 1 : 2);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {*[]} a
 * @param {*[]} b
 * @param {*[]} [c=[]]
 * @returns
 */
const mergeArrays = (a, b, c = []) => {
  if (!a.length) return b;
  if (!b.length) return a;
  if (b[0] < a[0]) [a, b] = [b, a];
  return [a.shift(), ...mergeArrays(a, b, c)];
};

/**
 * Runtime: 380 ms, faster than 5.65% of JavaScript online submissions
 * Memory Usage: 136.9 MB, less than 6.38% of JavaScript online submissions
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} combo
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const merged = mergeArrays(nums1, nums2);
  const half = Math.floor(merged.length / 2);
  if (0 === merged.length % 2) return (merged[half - 1] + merged[half]) / 2;
  else return merged[half];
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// console.log(merge([1], [2]));
// console.log(merge([2], [1]));
// console.log(merge([1, 2], [3, 4]));
// console.log(merge([1, 3], [2, 4]));
// console.log(merge([3, 4], [1, 2]));
// console.log(merge([2, 4], [1, 3]));
// console.log(merge([1, 2, 3], [4, 5]));
// console.log(merge([1, 2], [3, 4, 5]));
// console.log(merge([1, 2, 3, 4], [5, 6, 7, 8]));

// 0, 1, 2, 3, (4), 5, 6, 7, 8
// findMedianSortedArrays([5, 7, 8], [0, 1, 2, 3, 4, 6]);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(findMedianSortedArrays([1, 3], [2]), 2.0);

strictEqual(findMedianSortedArrays([1, 2], [3, 4]), 2.5);

strictEqual(findMedianSortedArrays([1, 2], []), 1.5);

strictEqual(findMedianSortedArrays([3], [-2, -1]), -1.0);
