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

// Time Limit Exceeded

// /**
//  * @param {number[]} nums
//  * @param {number} limit
//  * @return {number}
//  */
// const minMoves = (nums, limit) => {
//   const sums = new Set();
//   const mins = new Array(nums.length / 2);
//   const maxes = new Array(nums.length / 2);
//   let [minMin, maxMax] = [Infinity, -Infinity];
//   for (let i = 0; i < nums.length / 2; i++) {
//     const [x, y] = [nums[i], nums[nums.length - 1 - i]];
//     const [min, max] = [x, y].sort((a, b) => a - b);
//     [mins[i], maxes[i]] = [min, max];
//     minMin = Math.min(minMin, min);
//     maxMax = Math.max(maxMax, max);
//     sums.add(min + max);
//   }
//   // console.log(mins, minMin);
//   // console.log(maxes, maxMax);
//   // console.log(sums);
//   let res = Infinity;

//   outer: for (const sum of sums) {
//     // console.log(sum);
//     let cnt = 0;
//     for (let i = 0; i < mins.length; i++) {
//       const [min, max] = [mins[i], maxes[i]];
//       if (min + max === sum) continue;
//       // console.log(sum, [min, max]);
//       if (
//         (min < sum && sum <= min + limit) ||
//         (max < sum && sum <= max + limit)
//       )
//         cnt++;
//       else cnt += 2;
//     }
//     // console.log(`sum = ${sum}, cnt = ${cnt}`);
//     res = Math.min(res, cnt);
//   }
//   let fallback = 0;
//   for (let i = 0; i < mins.length; i++) {
//     if (Math.max(...mins) < minMin + limit) fallback++;
//   }
//   if (mins.length === fallback) return Math.min(res, fallback);
//   return res;
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
  let [minMin, maxMax] = [Infinity, -Infinity];
  for (let i = 0; i < nums.length / 2; i++) {
    const [x, y] = [nums[i], nums[nums.length - 1 - i]];
    const [min, max] = [x, y].sort((a, b) => a - b);
    [mins[i], maxes[i]] = [min, max];
    minMin = Math.min(minMin, min);
    maxMax = Math.max(maxMax, max);
    sums.add(min + max);
  }
  // console.log(mins, minMin);
  // console.log(maxes, maxMax);
  // console.log(sums);
  let res = Infinity;

  outer: for (const sum of sums) {
    // console.log(sum);
    let cnt = 0;
    for (let i = 0; i < mins.length; i++) {
      const [min, max] = [mins[i], maxes[i]];
      if (min + max === sum) continue;
      // console.log(sum, [min, max]);
      if (
        (min < sum && sum <= min + limit) ||
        (max < sum && sum <= max + limit)
      )
        cnt++;
      else cnt += 2;
      if (res <= cnt) continue outer;
    }
    // console.log(`sum = ${sum}, cnt = ${cnt}`);
    res = Math.min(res, cnt);
  }
  let fallback = 0;
  for (let i = 0; i < mins.length; i++) {
    if (Math.max(...mins) < minMin + limit) fallback++;
  }
  if (mins.length === fallback) return Math.min(res, fallback);
  return res;
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
strictEqual(minMoves([1, 2, 2, 1], 2), 2);
// Explanation: In 2 moves, you can change nums to [2,2,2,2]. You cannot change
// any number to 3 since 3 > limit.

// Example 3:
strictEqual(minMoves([1, 2, 1, 2], 2), 0);
// Explanation: nums is already complementary.

strictEqual(minMoves([1, 2, 2, 2, 4, 3], 4), 1);

/*

| 0, 5 | 1, 3 | 4 |
| 1, 4 | 2, 4 | 6 |
| 2, 3 | 2, 2 | 4 |

*/

strictEqual(minMoves([28, 50, 76, 80, 64, 30, 32, 84, 53, 8], 84), 4);

/*

min |  8 |  50 |  76 |  32 | 30 |
max | 28 |  53 |  84 |  80 | 64 |
sum | 36 | 103 | 160 | 112 | 94 |

min | (66) |  50  |  76  |  32  | 30 |
max |  28  | (44) | (18) | (62) | 64 |
sum |  36  |  94  |  94  |  94  | 94 |

*/

strictEqual(minMoves([37, 2, 9, 49, 58, 57, 48, 17], 58), 3);

strictEqual(minMoves([1, 3, 1, 1, 1, 2, 3, 2, 3, 1, 3, 2, 1, 3], 3), 4);

/*

min | 1 | 1 | 1 | 1 | 1 | 2 | 2 |
max | 3 | 3 | 2 | 3 | 1 | 3 | 3 |
sum | 4 | 4 | 3 | 4 | 2 | 5 | 5 |

min | 1 | 1 |  1  | 1 |  1  |  2  |  2  |
max | 3 | 3 | (3) | 3 | (3) | (2) | (2) |
sum | 4 | 4 |  4  | 4 |  4  |  4  |  4  |

*/

strictEqual(
  minMoves([20744, 7642, 19090, 9992, 2457, 16848, 3458, 15721], 22891),
  4,
);

/*

min | 15,721 |  3,458 | 16,848 |  2,457 |
max | 20,744 |  7,642 | 19,090 |  9,992 |
sum | 36,465 | 11,100 | 35,938 | 12,449 |

min |   15,721 |   3,458  |  16,848  |   2,457  |
max |  (2,147) | (19,433) |  (6,043) | (22,891) |
sum |   25,348 |  25,348  |  25,348  |  25,348  |

*/
