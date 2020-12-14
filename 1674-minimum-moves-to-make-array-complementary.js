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

// /**
//  * @param {number[]} nums
//  * @param {number} limit
//  * @return {number}
//  */
// const minMoves = (nums, limit) => {
//   let [min, minSum] = [Infinity, Infinity];
//   for (let i = 0; i < nums.length / 2; i++) {
//     min = Math.min(min, nums[i]);
//     minSum = Math.min(minSum, nums[i] + nums[nums.length - 1 - i]);
//   }
//   console.log(min, minSum);
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {number[]} nums
//  * @param {number} limit
//  * @return {number}
//  */
// const minMoves = (nums, limit) => {
//   const sums = new Array(nums.length / 2);
//   const pairs = new Array(nums.length / 2);
//   let maxSum = -Infinity;
//   for (let i = 0; i < sums.length; i++) {
//     sums[i] = nums[i] + nums[nums.length - 1 - i];
//     pairs[i] = [nums[i], nums[nums.length - 1 - i]];
//     maxSum = Math.max(maxSum, nums[i] + nums[nums.length - 1 - i]);
//   }
//   console.log(sums);
//   console.log(pairs);
//   console.log(maxSum);
//   let res = 0;
//   for (let i = 0; i < pairs.length; i++) {
//     if (pairs[i][0] + pairs[i][1] < maxSum) {
//       console.log(i);
//       if (maxSum < limit + Math.max(pairs[i][0], pairs[i][1])) res++;
//       else res += 2;
//     }
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {number[]} nums
//  * @param {number} limit
//  * @return {number}
//  */
// const minMoves = (nums, limit) => {
//   const sums = new Map();
//   for (let i = 0; i < nums.length / 2; i++) {
//     const [x, y] = [nums[i], nums[nums.length - 1 - i]];
//     if (!sums.has(x + y)) sums.set(x + y, []);
//     sums.get(x + y).push([x, y]);
//   }
//   const x = [...sums.entries()].sort(
//     ([, { length: a }], [, { length: b }]) => a - b,
//   ); // ?
//   const target = x.pop()[0]; // ?
//   let res = 0;
//   for (let i = 0; i < x.length; i++) {
//     for (let j = 0; j < x[i][1].length; j++) {
//       const [a, b] = x[i][1][j]; // ?
//       if (target < a + b) {
//         console.log('here');
//         if (a < target || b < target) res++;
//         else res += 2;
//       } else {
//         if (target < limit + a || target < limit + b) res++;
//         else res += 2;
//       }
//     }
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {number[]} nums
//  * @param {number} limit
//  * @return {number}
//  */
// const minMoves = (nums, limit) => {
//   const sums = new Set();
//   for (let i = 0; i < nums.length / 2; i++)
//     sums.add(nums[i] + nums[nums.length - 1 - i]);
//   console.log(sums);
//   const poss = [];
//   outer: for (let i = 0; i < nums.length / 2; i++) {
//     console.log('--------------');
//     let cnt = 0;
//     const min = Math.min(...poss);
//     const [x, y] = [nums[i], nums[nums.length - 1 - i]];
//     for (const sum of sums) {
//       if (x + y === sum) continue;
//       console.log(`[${x}, ${y}] | ${sum}`);
//       if (sum < x + y) {
//         if (x < sum || y < sum) cnt++;
//         else cnt += 2;
//       } else {
//         if (sum < limit + x || sum < limit + y) cnt++;
//         else cnt += 2;
//       }
//       if (min < cnt) continue outer;
//     }
//     poss.push(cnt);
//   }
//   console.log(poss);
//   return Math.min(...poss) || 0;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {number[]} nums
//  * @param {number} limit
//  * @return {number}
//  */
// const minMoves = (nums, limit) => {
//   const sums = new Set();
//   for (let i = 0; i < nums.length / 2; i++)
//     sums.add(nums[i] + nums[nums.length - 1 - i]);
//   // console.log(sums);
//   const cnts = new Set();
//   outer: for (const sum of sums) {
//     let cnt = 0;
//     const min = Math.min(...cnts);
//     for (let i = 0; i < nums.length / 2; i++) {
//       const [x, y] = [nums[i], nums[nums.length - 1 - i]];
//       if (x + y === sum) continue;
//       // console.log(`${sum} | [${x}, ${y}] | ${limit}`);
//       if (sum < x + y) {
//         // console.log('one');
//         if (x < sum || y < sum) cnt++;
//         else cnt += 2;
//       } else {
//         // console.log('two');
//         if (sum <= limit + x || sum <= limit + y) cnt++;
//         else cnt += 2;
//       }
//       // if (min <= cnt) continue outer;
//     }
//     // console.log(cnt);
//     cnts.add(cnt);
//   }
//   // console.log(cnts);
//   return Math.min(...cnts) || 0;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {number[]} nums
//  * @param {number} limit
//  * @return {number}
//  */
// const minMoves = (nums, limit) => {
//   const sums = new Set();
//   for (let i = 0; i < nums.length / 2; i++)
//     sums.add(nums[i] + nums[nums.length - 1 - i]);
//   console.log(sums);
//   const cnts = new Set();
//   outer: for (const sum of sums) {
//     let cnt = 0;
//     const min = Math.min(...cnts);
//     for (let i = 0; i < nums.length / 2; i++) {
//       // console.log(i);
//       const [x, y] = [nums[i], nums[nums.length - 1 - i]];
//       if (x + y === sum) continue;
//       console.log(`${sum} | [${x}, ${y}] | ${limit}`);
//       if (sum < limit + y || sum < x + limit) cnt++;
//       else cnt += 2;
//     }
//     console.log(cnt);
//     cnts.add(cnt);
//   }
//   console.log(cnts);
//   return Math.min(...cnts) || 0;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
const minMoves = (nums, limit) => {
  const sums = new Set();
  const mins = new Array(nums.length / 2);
  const maxes = new Array(nums.length / 2);
  let [min, max] = [Infinity, -Infinity];
  for (let i = 0; i < nums.length / 2; i++) {
    const [x, y] = [nums[i], nums[nums.length - 1 - i]];
    sums.add(x, y);
    mins[i] = Math.min(x, y);
    maxes[i] = Math.max(x, y);
    min = Math.min(min, x, y);
    max = Math.max(max, x, y);
  }
  console.log(sums);
  console.log(mins);
  console.log(maxes);
  console.log(Math.min(...mins));
  console.log(Math.max(...mins));
  console.log(Math.min(...maxes));
  if (Math.max(...mins) - Math.min(...mins) < limit) return nums.length / 2;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(minMoves([1, 2, 4, 3], 4), 1);
// Explanation: In 1 move, you can change nums to [1,2,2,3] (underlined elements
// are changed).
// - nums[0] + nums[3] = 1 + 3 = 4.
// - nums[1] + nums[2] = 2 + 2 = 4.
// - nums[2] + nums[1] = 2 + 2 = 4.
// - nums[3] + nums[0] = 3 + 1 = 4. Therefore, nums[i] + nums[n-1-i] = 4 for
//   every i, so nums is complementary.

/*

1 + 3 = 4
2 + 4 = 6



*/

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

// strictEqual(minMoves([28, 50, 76, 80, 64, 30, 32, 84, 53, 8], 84), 4);

/*

Even: 28 + 76 + 64 + 32 + 53 = 253
Odd:  50 + 80 + 30 + 84 +  8 = 252

*/

// strictEqual(minMoves([37, 2, 9, 49, 58, 57, 48, 17], 58), 3);

// strictEqual(minMoves([1, 3, 1, 1, 1, 2, 3, 2, 3, 1, 3, 2, 1, 3], 3), 4);

strictEqual(
  minMoves([20744, 7642, 19090, 9992, 2457, 16848, 3458, 15721], 22891),
  4,
);

/*

0, 7: 20,744 + 15,721 = 36,465
1, 6:  7,642 +  3,458 = 11,100
2, 5: 19,090 + 16,848 = 35,938
3, 4:  9,992 +  2,457 = 12,449

36,465 - 22,891 =  13,574
11,100 - 22,891 = -11,791
35,938 - 22,891 =  13,047
12,449 - 22,891 = -10,442

36,465 - 35,938 =    527
11,100 - 35,938 = 24,838
35,938 - 35,938 =      0
12,449 - 35,938 = 23,489

*/
