// 4. Median of Two Sorted Arrays
// https://leetcode.com/problems/median-of-two-sorted-arrays/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
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

// /**
//  * @param {*[]} a
//  * @param {*[]} b
//  * @param {*[]} [c=[]]
//  * @returns
//  */
// const mergeArrays = (a, b, c = []) => {
//   if (!a.length) return b;
//   if (!b.length) return a;
//   if (b[0] < a[0]) [a, b] = [b, a];
//   return [a.shift(), ...mergeArrays(a, b, c)];
// };

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// const findMedianSortedArrays = (nums1, nums2) => {
//   const merged = mergeArrays(nums1, nums2);
//   const half = Math.floor(merged.length / 2);
//   if (0 === merged.length % 2) return (merged[half - 1] + merged[half]) / 2;
//   else return merged[half];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// const findMedianSortedArrays = (nums1, nums2) => {
//   if (1 === nums1.length + nums2.length) return nums1[0] || nums2[0];
//   if (2 === nums1.length + nums2.length)
//     return [...nums1, ...nums2].slice(-2).reduce((acc, curr) => acc + curr) / 2;
//   const stack = [];
//   while (nums1.length || nums2.length) {
//     if (!nums1.length) [nums1, nums2] = [nums2, []];
//     if (nums2[0] < nums1[0]) [nums1, nums2] = [nums2, nums1];
//     stack.push(nums1.shift());
//     if (nums1.length + nums2.length < stack.length) {
//       if (0 === (stack.length + nums1.length + nums2.length) % 2)
//         return (stack[stack.length - 2] + stack[stack.length - 1]) / 2.0;
//       return stack[stack.length - 1];
//     }
//   }
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Runtime: 108 ms, faster than 83.18% of JavaScript online submissions
 * Memory Usage: 39.2 MB, less than 74.47% of JavaScript online submissions
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// const findMedianSortedArrays = (nums1, nums2) => {
//   const stack = [];
//   while (nums1.length || nums2.length) {
//     if (!nums1.length || nums2[0] < nums1[0]) [nums1, nums2] = [nums2, nums1];
//     stack.push(nums1.shift());
//     if (nums1.length + nums2.length < stack.length) {
//       if (0 === (stack.length + nums1.length + nums2.length) % 2)
//         return (stack[stack.length - 2] + stack[stack.length - 1]) / 2.0;
//       return stack[stack.length - 1];
//     }
//   }
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const stack = [];
  while (nums1.length || nums2.length) {
    if (!nums1.length || nums2[0] < nums1[0]) [nums1, nums2] = [nums2, nums1];
    stack.push(nums1.shift());
    if (nums1.length + nums2.length < stack.length) {
      return 0 === (stack.length + nums1.length + nums2.length) % 2
        ? (stack[stack.length - 2] + stack[stack.length - 1]) / 2.0
        : stack[stack.length - 1];
    }
  }
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// console.log(mergeArrays([1, 3], [2]));
// console.log(mergeArrays([1], [2]));
// console.log(mergeArrays([2], [1]));
// console.log(mergeArrays([1, 2], [3, 4]));
// console.log(mergeArrays([1, 3], [2, 4]));
// console.log(mergeArrays([3, 4], [1, 2]));
// console.log(mergeArrays([2, 4], [1, 3]));
// console.log(mergeArrays([1, 2, 3], [4, 5]));
// console.log(mergeArrays([1, 2], [3, 4, 5]));
// console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]));

// 0, 1, 2, 3, (4), 5, 6, 7, 8
// findMedianSortedArrays([5, 7, 8], [0, 1, 2, 3, 4, 6]);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(findMedianSortedArrays([1, 3], [2]), 2.0);

strictEqual(findMedianSortedArrays([1, 2], [3, 4]), 2.5);

strictEqual(findMedianSortedArrays([1, 2], []), 1.5);

strictEqual(findMedianSortedArrays([3], [-2, -1]), -1.0);

strictEqual(findMedianSortedArrays([1, 3], [2]), 2.0);

strictEqual(findMedianSortedArrays([1], []), 1.0);

strictEqual(findMedianSortedArrays([], [1]), 1.0);

strictEqual(findMedianSortedArrays([1], [2]), 1.5);

strictEqual(findMedianSortedArrays([2], [1]), 1.5);

strictEqual(findMedianSortedArrays([], [1, 2, 3, 4, 5]), 3.0);

strictEqual(findMedianSortedArrays([], [1, 2, 3, 4, 5, 6]), 3.5);

strictEqual(findMedianSortedArrays([], [0, 1, 2]), 1);

strictEqual(findMedianSortedArrays([-1], [0, 1]), 0);
