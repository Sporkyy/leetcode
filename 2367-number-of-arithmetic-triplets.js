// 2367. Number of Arithmetic Triplets
// https://leetcode.com/problems/number-of-arithmetic-triplets/

/*

You are given a **0-indexed, strictly increasing** integer array `nums` and
a positive integer `diff`. A triplet `(i, j, k)` is an **arithmetic triplet**
if the following conditions are met:

- `i < j < k`,
- `nums[j] - nums[i] == diff`, and
- `nums[k] - nums[j] == diff`.

Return *the number of unique **arithmetic triplets*** .

Constraints:

- `3 <= nums.length <= 200`
- `0 <= nums[i] <= 200`
- `1 <= diff <= 50`
- `nums` is **strictly** increasing.

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} nums
//  * @param {number} diff
//  * @return {number}
//  */
// const arithmeticTriplets = (nums, diff) => {
//   let cnt = 0;
//   let [x, y, z] = [nums[0], nums[1], null];
//   for (let i = 2; i < nums.length; i++) {
//     z = nums[i];
//     console.log(x, y, z);
//     if (diff === y - x && diff === z - y) cnt++;
//     [x, y] = [y, z];
//   }
//   return cnt;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} nums
//  * @param {number} diff
//  * @return {number}
//  */
// const arithmeticTriplets = (nums, diff) => {
//   let cnt = 0;
//   for (let i = 0; i < nums.length; i++) {
//     const [x, y, z] = [nums[i], nums[i + 1], nums[i + 2]];
//     console.log({ x, y, z });
//     if (diff === y - x && diff === z - y) cnt++;
//   }
//   return cnt;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} nums
//  * @param {number} diff
//  * @return {number}
//  */
// const arithmeticTriplets = (nums, diff) => {
//   const numSet = new Set(nums);
//   let cnt = 0;
//   for (let i = 0; i < nums.length - 2; i++) {
//     // console.log(i);

//     // console.log(nums[i + 1], nums[i]);
//     // console.log(nums[i + 2], nums[i + 1]);

//     // console.log(nums[i]);
//     // console.log(nums[i + 1]);
//     // console.log(nums[i + 2]);

//     console.log(nums[i + 1] - nums[i]);
//     // console.log();
//     console.log(nums[i + 2]);

//     if (numSet.)

//     // console.log(nums[i + 1] - nums[i], nums[i + 2] - nums[i + 1]);
//     // if (diff === nums[i + 1] - nums[i] && diff === nums[i + 2] - nums[i + 1]) {
//     //   cnt++;
//     //   console.log('here');
//     // }
//   }
//   console.log(cnt);
//   return cnt;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
const arithmeticTriplets = (nums, diff) => {
  let cnt = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      for (let k = j; k < nums.length; k++) {
        if (diff === nums[j] - nums[i] && diff === nums[k] - nums[j]) cnt++;
      }
    }
  }
  return cnt;
};

// Runtime 120 ms | Beats 21.46%
// Memory 42 MB | Beats 59.93%

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

// Example 1:
strictEqual(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3), 2);
// Explanation:
// (1, 4, 7) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
// (4, 7, 10) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3.

// Example 2:
strictEqual(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2), 2);
// Explanation:
// (4, 6, 8) is an arithmetic triplet because both 8 - 6 == 2 and 6 - 4 == 2.
// (5, 7, 9) is an arithmetic triplet because both 9 - 7 == 2 and 7 - 5 == 2.

/*

k - j == d and j - i == d
7 - 4 == 3 and 4 - 1 == 3
d + j == k and d + i == j
3 + 4 == 7 and 3 + 1 == 4

10 - 7 == 3 and 7 - 4 == 3

*/
