// 1674. Minimum Moves to Make Array Complementary
// https://leetcode.com/problems/minimum-moves-to-make-array-complementary/

/*
〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

You are given an integer array nums of even length n and an integer limit. In
one move, you can replace any integer from nums with another integer between 1
and limit, inclusive.

The array nums is complementary if for all indices i (0-indexed), nums[i] +
nums[n - 1 - i] equals the same number. For example, the array [1,2,3,4] is
complementary because for all indices i, nums[i] + nums[n - 1 - i] = 5.

Return the minimum number of moves required to make nums complementary.

## Constraints
- n == nums.length
- 2 <= n <= 105
- 1 <= nums[i] <= limit <= 105
- n is even.

〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰
*/

// /**
//  * @param {number[]} nums
//  * @param {number} limit
//  * @return {number}
//  */
// const minMoves = (nums, limit) => {
//   console.log(nums, limit);
//   const sums = [];
//   for (let i = 0; i < nums.length / 2; i++) {
//     console.log(nums[i], nums[nums.length - 1 - i]);
//     sums.push(nums[i] + nums[nums.length - 1 - i]);
//   }
//   console.log(sums);
//   for (let i = 0; i < sums.length; i++) {
//   }
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {number[]} nums
//  * @param {number} limit
//  * @return {number}
//  */
// const minMoves = (nums, limit) => {
//   // console.log(nums, limit);
//   const x = new Map();
//   for (let i = 0, j = nums.length - 1; i < j; i++, j--) {
//     const [l, r] = [nums[i], nums[j]];
//     const sum = l + r;
//     x.has(sum) ? x.get(sum).push([l, r]) : x.set(sum, [[l, r]]);
//   }
//   if (1 === x.size) return 0;
//   console.log(x);
//   const min = Math.min(...x.keys()); //?
//   let res = 0;
//   for (const [key, val] of x) {
//     if (min === key) continue;
//     // console.log(key, val);
//     for (const [x, y] of val) {
//       console.log(x, y);
//       const have = Math.min(x, y); // ?
//       const need = min - have; // ?
//       if (have < min && need < min) res++;
//       else res += 2;
//     }
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
const minMoves = (nums, limit) => {
  let [min, minSum] = [Infinity, Infinity];
  for (let i = 0; i < nums.length / 2; i++) {
    min = Math.min(min, nums[i]);
    minSum = Math.min(minSum, nums[i] + nums[nums.length - 1 - i]);
  }
  console.log(min, minSum);
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
// strictEqual(minMoves([1, 2, 4, 3], 4), 1);
// Explanation: In 1 move, you can change nums to [1,2,2,3] (underlined elements
// are changed).
// - nums[0] + nums[3] = 1 + 3 = 4.
// - nums[1] + nums[2] = 2 + 2 = 4.
// - nums[2] + nums[1] = 2 + 2 = 4.
// - nums[3] + nums[0] = 3 + 1 = 4. Therefore, nums[i] + nums[n-1-i] = 4 for
//   every i, so nums is complementary.

// Example 2:
// strictEqual(minMoves([1, 2, 2, 1], 2), 2);
// Explanation: In 2 moves, you can change nums to [2,2,2,2]. You cannot change
// any number to 3 since 3 > limit.

// Example 3:
// strictEqual(minMoves([1, 2, 1, 2], 2), 0);
// Explanation: nums is already complementary.

// strictEqual(minMoves([1, 2, 2, 2, 4, 3], 4), 1);

/*

[1, 2, 2, 2, 4, 3]
[4, 6, 4, 4, 6, 4]

| 4 | 6 | 4 |
| 1 | 2 | 2 |
| 3 | 4 | 2 |

*/

strictEqual(minMoves([28, 50, 76, 80, 64, 30, 32, 84, 53, 8], 84), 4);
