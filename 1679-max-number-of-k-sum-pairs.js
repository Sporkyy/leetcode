// 1679. Max Number of K-Sum Pairs
// https://leetcode.com/problems/max-number-of-k-sum-pairs/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

/*

You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and
remove them from the array.

Return the maximum number of operations you can perform on the array.

## Constraints

- 1 <= nums.length <= 105
- 1 <= nums[i] <= 109
- 1 <= k <= 109

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Time Limit Exceeded
// 47 / 51 test cases passed.

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// const maxOperations = (nums, k) => {
//   const map = new Map();
//   for (const n of nums) if (n < k) map.set(n, (map.get(n) || 0) + 1);
//   // console.log(map);
//   let [i, res] = [1, 0];
//   while (i <= k / 2 && map.size) {
//     const [x, y] = [map.get(i) || 0, map.get(k - i) || 0];
//     // console.log(x, y);
//     if (x && y)
//       if (i === k / 2) res += Math.trunc(x / 2);
//       else res += Math.min(x, y);
//     map.delete(i);
//     map.delete(k - i);
//     i++;
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// const maxOperations = (nums, k) => {
//   const map = new Map();
//   for (const n of nums) if (n < k) map.set(n, (map.get(n) || 0) + 1);
//   // console.log(map);
//   let [i, res] = [1, 0];
//   while (i <= k / 2 && map.size) {
//     const [x, y] = [map.get(i) || 0, map.get(k - i) || 0];
//     // console.log(x, y);
//     if (x && y)
//       if (i === k / 2) res += Math.trunc(x / 2);
//       else res += Math.min(x, y);
//     map.delete(i);
//     map.delete(k - i);
//     i++;
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 176 ms, faster than 72.05% of JavaScript online submissions
// Memory Usage: 54.9 MB, less than 35.40% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// const maxOperations = (nums, k) => {
//   const map = nums.reduce(
//     (acc, curr) => acc.set(curr, (acc.get(curr) || 0) + 1),
//     new Map(),
//   );
//   let res = 0;
//   for (const have of [...map.keys()]
//     .sort((a, b) => a - b)
//     .filter(n => n <= k / 2)) {
//     const need = k - have;
//     const [cntHave, cntNeed] = [map.get(have) || 0, map.get(need) || 0];
//     res += have !== need ? Math.min(cntHave, cntNeed) : Math.trunc(cntHave / 2);
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 168 ms, faster than 73.99% of JavaScript online submissions
// Memory Usage: 55 MB, less than 35.84% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// const maxOperations = (nums, k) => {
//   const map = nums.reduce(
//     (acc, curr) => acc.set(curr, (acc.get(curr) || 0) + 1),
//     new Map(),
//   );
//   let res = 0;
//   for (const have of [...map.keys()].sort((a, b) => a - b)) {
//     if (k / 2 < have) break;
//     const need = k - have;
//     const [cntHave, cntNeed] = [map.get(have) || 0, map.get(need) || 0];
//     res += have !== need ? Math.min(cntHave, cntNeed) : Math.trunc(cntHave / 2);
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 128 ms, faster than 91.33% of JavaScript online submissions
// Memory Usage: 53.9 MB, less than 49.71% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// const maxOperations = (nums, k) => {
//   const map = nums.reduce(
//     (acc, curr) => acc.set(curr, (acc.get(curr) || 0) + 1),
//     new Map(),
//   );
//   let res = 0;
//   for (const have of map.keys()) {
//     if (k / 2 < have) continue;
//     const need = k - have;
//     const [cntHave, cntNeed] = [map.get(have) || 0, map.get(need) || 0];
//     res += have !== need ? Math.min(cntHave, cntNeed) : Math.trunc(cntHave / 2);
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 120 ms, faster than 98.84% of JavaScript online submissions
// Memory Usage: 53.6 MB, less than 57.23% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// const maxOperations = (nums, k) => {
//   const cnts = new Map();
//   for (const n of nums) cnts.set(n, (cnts.get(n) || 0) + 1);
//   let res = 0;
//   for (const have of cnts.keys()) {
//     if (k / 2 < have) continue;
//     const need = k - have;
//     if (!cnts.has(need)) continue;
//     const [cntHave, cntNeed] = [cnts.get(have), cnts.get(need)];
//     if (!cntHave || !cntNeed) continue;
//     if (have === need) res += Math.trunc(cntHave / 2);
//     else res += Math.min(cntHave, cntNeed);
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 112 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 53.5 MB, less than 57.23% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// const maxOperations = (nums, k) => {
//   // Create a Map object to hold counts of the instances of each integer
//   const cnts = new Map();
//   // Go though each integer and set the count (also handling no existing count)
//   for (const n of nums) cnts.set(n, (cnts.get(n) || 0) + 1);
//   // Declare a variable to hold the resulting number of of operations
//   let res = 0;
//   // Look through the counts for the two integers that must be selected
//   // Think of the smaller as the one we have and the larger as the one we need
//   for (const have of cnts.keys()) {
//     // Continue on integers larger than one-half k
//     if (k / 2 < have) continue;
//     // We need the larger of the pair; calculate what it is
//     const need = k - have;
//     // Continue if the needed integer wasn't in the nums array
//     if (!cnts.has(need)) continue;
//     // Declare and assign counts for what we have and need
//     const [cntHave, cntNeed] = [cnts.get(have), cnts.get(need)];
//     // When you have and need the same integers (because both equal k / 2)
//     if (have === need) res += Math.trunc(cntHave / 2);
//     // When you have and need different integers
//     else res += Math.min(cntHave, cntNeed);
//   }
//   // Return the sum where we stored the number of operations we could perform
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 136 ms, faster than 84.97% of JavaScript online submissions
// Memory Usage: 51.1 MB, less than 73.99% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// const maxOperations = (nums, k) =>
//   nums
//     .reduce((acc, curr) => {
//       const [have, need] = [curr, k - curr]; //?
//       if (acc.get(need)) {
//         acc.set(need, (acc.get(need) || 1) - 1);
//         acc.set('opCnt', acc.get('opCnt') + 1);
//       } else acc.set(have, (acc.get(have) || 0) + 1);
//       return acc;
//     }, new Map([['opCnt', 0]]))
//     .get('opCnt');

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 120 ms, faster than 98.84% of JavaScript online submissions
// Memory Usage: 50.7 MB, less than 75.14% of JavaScript online submissions

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = (nums, k) =>
  nums
    .reduce(
      (acc, curr) =>
        acc.get(k - curr)
          ? acc
              .set(k - curr, (acc.get(k - curr) || 1) - 1)
              .set('opCnt', acc.get('opCnt') + 1)
          : acc.set(curr, (acc.get(curr) || 0) + 1),
      new Map([['opCnt', 0]]),
    )
    .get('opCnt');

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(maxOperations([1, 2, 3, 4], 5), 2);
// Explanation: Starting with nums = [1,2,3,4]:
// - Remove numbers 1 and 4, then nums = [2,3]
// - Remove numbers 2 and 3, then nums = []
// There are no more pairs that sum up to 5, hence a total of 2 operations.

// Example 2:
strictEqual(maxOperations([3, 1, 3, 4, 3], 6), 1);
// Explanation: Starting with nums = [3,1,3,4,3]:
// - Remove the first two 3's, then nums = [1,4,3]
// There are no more pairs that sum up to 6, hence a total of 1 operation.

strictEqual(maxOperations([3, 1, 4], 6), 0);
strictEqual(maxOperations([3, 1, 3, 4], 6), 1);
strictEqual(maxOperations([3, 1, 3, 4, 3, 3], 6), 2);

strictEqual(
  maxOperations(
    [2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2],
    3,
  ),
  4,
);

strictEqual(maxOperations([1, 2, 3, 4], 5), 2);
