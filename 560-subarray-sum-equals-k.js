// 560. Subarray Sum Equals K
// https://leetcode.com/problems/subarray-sum-equals-k/

/*

Given an array of integers nums and an integer k, return the total number of
continuous subarrays whose sum equals to k.

## Constraints
- 1 <= nums.length <= 2 * 104
- -1000 <= nums[i] <= 1000
- -107 <= k <= 107

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 100 ms, faster than 90.66% of JavaScript online submissions
// Memory Usage: 46.8 MB, less than 66.77% of JavaScript online submissions

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {
  const m = new Map();
  let res = 0;
  for (let i = 0, sum = 0; i < nums.length; i++) {
    m.set(sum, (m.get(sum) || 0) + 1);
    sum += nums[i];
    res += m.get(sum - k) || 0;
  }
  return res;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(subarraySum([1, 1, 1], 2), 2);

/*

| 1 | 1 | 1 |
| 1 | 2 | 3 |

*/

// Example 2:
strictEqual(subarraySum([1, 2, 3], 3), 2);

/*

| 1 | 2 | 3 |
| 1 | 3 | 6 |

*/

strictEqual(subarraySum([-1, -1, 1], 0), 1);

/*

| -1 | -1 | 1 |
| -1 |  0 | 1 |

*/
