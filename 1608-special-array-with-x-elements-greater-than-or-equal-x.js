// 1608. Special Array With X Elements Greater Than or Equal X
// https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/

/*

You are given an array nums of non-negative integers. nums is considered special
if there exists a number x such that there are exactly x numbers in nums that
are greater than or equal to x.

Notice that x does not have to be an element in nums.

Return x if the array is special, otherwise, return -1. It can be proven that if
nums is special, the value for x is unique.

Constraints
- 1 <= nums.length <= 100
- 0 <= nums[i] <= 1000

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 88.66% of JavaScript online submissions
// Memory Usage: 38.6 MB, less than 6.19% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const specialArray = nums => {
//   nums.sort((a, b) => a - b);
//   // console.log(nums);
//   for (let i = 0, j = 0; i <= nums[nums.length - 1]; i++) {
//     while (nums[j] < i) j++;
//     // console.log(i);
//     // console.log(nums.length - j);
//     // console.log(nums[j]);
//     if (i === nums.length - j) return i;
//   }
//   return -1;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 86.96% of JavaScript online submissions
// Memory Usage: 38.8 MB, less than 6.09% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const specialArray = nums => {
//   nums.sort((a, b) => a - b);
//   for (let i = 1, j = 0; i <= nums.length; i++) {
//     while (nums[j] < i) j++;
//     if (i === nums.length - j) return i;
//   }
//   return -1;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 88.02% of JavaScript online submissions
// Memory Usage: 39.1 MB, less than 6.45% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const specialArray = nums => {
//   for (let i = 1, x = 0; i <= nums.length; i++, x = 0) {
//     for (const n of nums) if (i <= n) x++;
//     if (i === x) return i;
//   }
//   return -1;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 88.02% of JavaScript online submissions
// Memory Usage: 38.2 MB, less than 6.45% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const specialArray = nums => {
//   outer: for (let i = 1, x = 0; i <= nums.length; i++, x = 0) {
//     for (const n of nums)
//       if (i <= n) {
//         x++;
//         if (i < x) continue outer;
//       }
//     if (i === x) return i;
//   }
//   return -1;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 88.02% of JavaScript online submissions
// Memory Usage: 38.9 MB, less than 6.45% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const specialArray = nums => {
//   let min = nums.length;
//   let max = nums.length;
//   for (const n of nums) {
//     if (n < min) min--;
//     if (max < n) max++;
//   }
//   // console.log(min, max);
//   outer: for (let i = min, x = 0; i <= max; i++, x = 0) {
//     for (const n of nums)
//       if (i <= n) {
//         x++;
//         if (i < x) continue outer;
//       }
//     if (i === x) return i;
//   }
//   return -1;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const specialArray = nums => {
//   outer: for (let i = 1, x = 0; i <= nums.length; i++, x = 0) {
//     for (const n of nums)
//       if (i <= n) {
//         x++;
//         if (i < x) continue outer;
//       }
//     if (i === x) return i;
//   }
//   return -1;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 88.02% of JavaScript online submissions
// Memory Usage: 38.9 MB, less than 6.45% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const specialArray = nums => {
//   let min = nums.length;
//   let max = nums.length;
//   for (const n of nums) {
//     if (n < min) min--;
//     if (max < n) max++;
//   }
//   // console.log(min, max);
//   outer: for (let i = min, x = 0; i <= max; i++, x = 0) {
//     for (const n of nums)
//       if (i <= n) {
//         x++;
//         if (i < x) continue outer;
//       }
//     if (i === x) return i;
//   }
//   return -1;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const specialArray = nums => {
//   let x = nums.length;
//   while (1 < x) {
//     let [ltCnt, gteCnt] = [0, 0];
//     for (const n of nums) {
//       if (n < x) ltCnt++;
//       else gteCnt++;
//     }
//     console.log(ltCnt, gteCnt, x);
//     // if (ltCnt === x || gteCnt === x) return x;
//     x--;
//   }
//   return -1;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 84 ms, faster than 55.76% of JavaScript online submissions
// Memory Usage: 39 MB, less than 6.45% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const specialArray = nums => {
//   outer: for (let x = 1, cntGteX = 0; x <= nums.length; x++, cntGteX = 0) {
//     for (const n of nums) {
//       if (x <= n) cntGteX++;
//       if (x < cntGteX) continue outer;
//     }
//     if (x === cntGteX) return x;
//   }
//   return -1;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 80 ms, faster than 72.35% of JavaScript online submissions
// Memory Usage: 38.8 MB, less than 6.45% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const specialArray = nums => {
//   for (let x = 1, cntGteX = 0; x <= nums.length; x++, cntGteX = 0) {
//     for (const n of nums) {
//       if (x <= n) cntGteX++;
//       if (x < cntGteX) break;
//     }
//     if (x === cntGteX) return x;
//   }
//   return -1;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 80 ms, faster than 72.17% of JavaScript online submissions
// Memory Usage: 38.8 MB, less than 6.09% of JavaScript online submissions

/**
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = (nums, x = nums.length) =>
  0 === x
    ? -1
    : x === nums.reduce((cnt, n) => cnt + (x <= n ? 1 : 0), 0)
    ? x
    : specialArray(nums, x - 1);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 88 ms, faster than 37.39% of JavaScript online submissions
// Memory Usage: 39.9 MB, less than 6.09% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const specialArray = (nums, x = nums.length) =>
//   0 === x
//     ? -1
//     : x === nums.filter(n => x <= n).length
//     ? x
//     : specialArray(nums, x - 1);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 86.96% of JavaScript online submissions
// Memory Usage: 39 MB, less than 6.09% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const specialArray = nums => {
//   outer: for (let x = nums.length, cntGteX = 0; 0 < x; x--, cntGteX = 0) {
//     for (const n of nums) {
//       if (x <= n) cntGteX++;
//       if (x < cntGteX) continue outer;
//     }
//     if (x === cntGteX) return x;
//   }
//   return -1;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 84 ms, faster than 54.78% of JavaScript online submissions
// Memory Usage: 41.6 MB, less than 6.09% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const specialArray = (nums, x = 1) =>
//   nums.length + 1 === x
//     ? -1
//     : x === nums.filter(n => x <= n).length
//     ? x
//     : specialArray(nums, x + 1);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 100 ms, faster than 20.87% of JavaScript online submissions
// Memory Usage: 44.4 MB, less than 6.09% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const specialArray = nums =>
//   [...new Array(1001).keys()].reduce(
//     (res, x) =>
//       -1 !== res ? res : x === nums.filter(n => x <= n).length ? x : -1,
//     -1,
//   );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 84 ms, faster than 54.78% of JavaScript online submissions
// Memory Usage: 39.6 MB, less than 6.09% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const specialArray = nums => {
//   let [start, end] = [1, nums.length + 1];
//   for (const n of nums) {
//     if (0 !== n) start = Math.min(start, n);
//     else end--;
//   }
//   outer: for (let x = start, cnt = 0; x < end; x++, cnt = 0) {
//     for (const n of nums) {
//       if (x <= n) cnt++;
//       if (x < cnt) continue outer;
//     }
//     if (x === cnt) return x;
//   }
//   return -1;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 86.96% of JavaScript online submissions
// Memory Usage: 39.5 MB, less than 6.09% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const specialArray = nums => {
//   let [x, end] = [nums.length, nums.length];
//   for (const n of nums)
//     if (0 !== n) x = Math.min(x, n);
//     else end--;
//   x = Math.min(x, end);
//   outer: for (let cnt = 0; x <= end; x++, cnt = 0) {
//     for (const n of nums) {
//       if (x <= n) cnt++;
//       if (x < cnt) continue outer;
//     }
//     if (x === cnt) return x;
//   }
//   return -1;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 84 ms, faster than 54.78% of JavaScript online submissions
// Memory Usage: 39.9 MB, less than 6.09% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const specialArray = nums => {
//   nums.sort((a, b) => b - a);
//   let [x, end] = [nums.length, nums.length];
//   for (const n of nums)
//     if (0 !== n) x = Math.min(x, n);
//     else end--;
//   x = Math.min(x, end);
//   outer: for (let cnt = 0; x <= end; x++, cnt = 0) {
//     for (const n of nums) {
//       if (x <= n) cnt++;
//       if (x < cnt) continue outer;
//     }
//     if (x === cnt) return x;
//   }
//   return -1;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(specialArray([3, 5]), 2);
// Explanation: There are 2 values (3 and 5) that are greater than or equal to 2.

// Example 2:
strictEqual(specialArray([0, 0]), -1);
// Explanation: No numbers fit the criteria for x.
// If x = 0, there should be 0 numbers >= x, but there are 2.
// If x = 1, there should be 1 number >= x, but there are 0.
// If x = 2, there should be 2 numbers >= x, but there are 0.
// x cannot be greater since there are only 2 numbers in nums.

// Example 3:
strictEqual(specialArray([0, 4, 3, 0, 4]), 3);
// Explanation: There are 3 values that are greater than or equal to 3.

// Example 4:
strictEqual(specialArray([3, 6, 7, 7, 0]), -1);

strictEqual(specialArray([3, 9, 7, 8, 3, 8, 6, 6]), 6);

strictEqual(specialArray([0, 5, 0, 1, 8, 3, 0, 1]), 3);

strictEqual(specialArray([3]), 1);

// strictEqual(specialArray([0, 4, 4, 0]), 2);
