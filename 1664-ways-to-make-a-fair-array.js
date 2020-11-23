// 1664. Ways to Make a Fair Array
// https://leetcode.com/problems/ways-to-make-a-fair-array/

/*

You are given an integer array nums. You can choose *exactly* one index
(*0-indexed*) and remove the element. Notice that the index of the elements may
change after the removal.

For example, if `nums = [6,1,7,4,1]`:

- Choosing to remove index `1` results in `nums = [6,7,4,1]`.
- Choosing to remove index `2` results in `nums = [6,1,4,1]`.
- Choosing to remove index `4` results in `nums = [6,1,7,4]`.

An array is **fair** if the sum of the odd-indexed values equals the sum of the
even-indexed values.

Return the number of indices that you could choose such that after the removal,
`nums` is *fair*.

## Constraints
- `1 <= nums.length <= 105`
- `1 <= nums[i] <= 104`

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Time Limit Exceeded

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const waysToMakeFair = nums => {
//   const [fwd, bkwd] = [[], []];
//   let [feSum, foSum, beSum, boSum, cnt] = [0, 0, 0, 0, 0];
//   for (let i = 0; i < nums.length; i++) {
//     if (0 === i % 2) feSum += nums[i];
//     else foSum += nums[i];
//     fwd.push([feSum, foSum]);
//     if (0 === (nums.length - 1 - i) % 2) beSum += nums[nums.length - 1 - i];
//     else boSum += nums[nums.length - 1 - i];
//     bkwd.unshift([beSum, boSum]);
//   }
//   // console.log(fwd);
//   // console.log(bkwd);
//   for (let i = 0; i < fwd.length; i++) {
//     // console.log(fwd[i][0] + bkwd[i][1]);
//     // console.log(fwd[i][1] + bkwd[i][0]);
//     if (fwd[i][0] + bkwd[i][1] === fwd[i][1] + bkwd[i][0]) cnt++;
//   }
//   return cnt;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 388 ms, faster than 17.86% of JavaScript online submissions
// Memory Usage: 74.4 MB, less than 8.93% of JavaScript online submissions

/**
 * @param {number[]} nums
 * @return {number}
 */
const waysToMakeFair = nums => {
  let [cnt, ePreSum, oPreSum, ePostSum, oPostSum] = [0, 0, 0, 0, 0];
  const sums = new Array(nums.length).fill().map(_ => [0, 0, 0, 0]);
  for (let i = 0; i < nums.length; i++) {
    0 === i % 2 ? (ePreSum += nums[i]) : (oPreSum += nums[i]);
    0 === (nums.length - 1 - i) % 2
      ? (ePostSum += nums[nums.length - 1 - i])
      : (oPostSum += nums[nums.length - 1 - i]);
    sums[i][0] = ePreSum;
    sums[i][1] = oPreSum;
    sums[sums.length - 1 - i][2] = ePostSum;
    sums[sums.length - 1 - i][3] = oPostSum;
    // console.log(ePreSum, oPreSum, ePostSum, oPostSum);
  }
  // console.log(sums);
  for (let i = 0; i < sums.length; i++) {
    // console.log(sums[i][3], sums[i][1], sums[i][2], sums[i][0]);
    if (sums[i][3] - sums[i][1] === sums[i][2] - sums[i][0]) cnt++;
  }
  return cnt;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// console.log(waysToMakeFair([2, 1, 6, 4]));
// console.log(waysToMakeFair([1, 6, 4]));
// console.log(waysToMakeFair([2, 6, 4]));
// console.log(waysToMakeFair([2, 1, 4]));
// console.log(waysToMakeFair([2, 1, 6]));

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(waysToMakeFair([2, 1, 6, 4]), 1);
// Explanation:
// Remove index 0: [1,6,4] -> Even sum: 1 + 4 = 5. Odd sum: 6. Not fair.
// Remove index 1: [2,6,4] -> Even sum: 2 + 4 = 6. Odd sum: 6. Fair.
// Remove index 2: [2,1,4] -> Even sum: 2 + 4 = 6. Odd sum: 1. Not fair.
// Remove index 3: [2,1,6] -> Even sum: 2 + 6 = 8. Odd sum: 1. Not fair.
// There is 1 index that you can remove to make nums fair.

// Example 2:
strictEqual(waysToMakeFair([1, 1, 1]), 3);
// Explanation: You can remove any index and the remaining array is fair.

// Example 3:
strictEqual(waysToMakeFair([1, 2, 3]), 0);
// Explanation: You cannot make a fair array after removing any index.

strictEqual(waysToMakeFair([1, 2, 5, 4, 3]), 2);
/*

//  |   1 |   2 | (5) |   4 | (3) |
//  | 1,0 | 1,2 | 6,2 | 6,6 | 9,6 |
//  | 1,0 | 1,2 |     | 5,2 | 5,5 |
//  | 1,0 | 1,2 | 6,2 | 6,6 |     |

Even sum = 9
Odd sum = 6

*/

strictEqual(waysToMakeFair([4, 5, 2, 2, 1, 1]), 2);
/*

| 4   | 5   | 2   | 2   | (1) | (1) |
| 4,0 | 4,5 | 6,5 | 6,7 | 7,7 | 7,8 |
|     | 5,0 | 5,2 | 7,2 | 7,3 | 8,3 |
| 4,0 | 4,5 |     | 6,5 | 6,7 | 7,6 |
| 4,0 | 4,5 | 6,5 |     | 5,5 | 7,5 |
| 4,0 | 4,5 | 6,5 | 6,7 |     | 7,7 |
| 4,0 | 4,5 | 6,5 | 6,7 | 7,7 |     |

*/
