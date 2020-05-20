// 1413. Minimum Value to Get Positive Step by Step Sum
// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/

/*

Given an array of integers nums, you start with an initial positive value
startValue.

In each iteration, you calculate the step by step sum of startValue plus
elements in nums (from left to right).

Return the minimum positive value of startValue such that the step by step sum
is never less than 1.

Constraints:
- 1 <= nums.length <= 100
- -100 <= nums[i] <= 100

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 104 ms, faster than 8.18% of JavaScript online submissions
// Memory Usage: 34.4 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const minStartValue = nums => {
//   let startValue = 1;
//   let tmp = startValue;
//   for (let i = 0; i < nums.length; i++) {
//     // console.log(startValue);
//     // console.log(`(${startValue}) ${tmp} + ${nums[i]} = ${tmp + nums[i]}`);
//     tmp += nums[i];
//     if (tmp < 1) {
//       // console.log('again');
//       tmp = ++startValue;
//       i = -1;
//     }
//   }
//   // console.log(startValue);
//   return startValue;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 100 ms, faster than 10.69% of JavaScript online submissions
// Memory Usage: 36.1 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const minStartValue = nums => {
//   loop: for (let startVal = 1, acc = 1; true; startVal++, acc = startVal) {
//     for (const n of nums) if ((acc += n) < 1) continue loop;
//     return startVal;
//   }
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 120 ms, faster than 5.97% of JavaScript online submissions
// Memory Usage: 36.9 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const minStartValue = nums => {
//   for (let startVal = 1, acc = 1; true; startVal++, acc = startVal)
//     if (nums.map(n => (acc += n)).every(n => 0 < n)) return startVal;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 620 ms, faster than 5.97% of JavaScript online submissions
// Memory Usage: 50.6 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const minStartValue = (nums, startVal = 1) =>
//   0 <
//   Math.min(
//     ...nums.reduce((acc, curr, idx) => acc.concat(acc[idx] + curr), [startVal]),
//   )
//     ? startVal
//     : minStartValue(nums, startVal + 1);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 148 ms, faster than 5.97% of JavaScript online submissions
// Memory Usage: 35 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} nums
 * @return {number}
 */
const minStartValue = nums => {
  for (let startVal = 1, acc = 1; true; startVal++, acc = startVal)
    if (nums.every(n => 0 < (acc += n))) return startVal;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(minStartValue([-3, 2, -3, 4, 2]), 5);
// Explanation: If you choose startValue = 4, in the third iteration your step by step sum is less than 1.
//                 step by step sum
//                 startValue = 4 | startValue = 5 | nums
//                   (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
//                   (1 +2 ) = 3  | (2 +2 ) = 4    |   2
//                   (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
//                   (0 +4 ) = 4  | (1 +4 ) = 5    |   4
//                   (4 +2 ) = 6  | (5 +2 ) = 7    |   2

// Example 2:
strictEqual(minStartValue([1, 2]), 1);
// Explanation: Minimum start value should be positive.

// Example 3:
strictEqual(minStartValue([1, -2, -3]), 5);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
