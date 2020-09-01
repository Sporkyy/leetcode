// 1534. Count Good Triplets
// https://leetcode.com/problems/count-good-triplets/

/*

Given an array of integers arr, and three integers a, b and c. You need to find
the number of good triplets.

A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:
- 0 <= i < j < k < arr.length
- |arr[i] - arr[j]| <= a
- |arr[j] - arr[k]| <= b
- |arr[i] - arr[k]| <= c

Where |x| denotes the absolute value of x.

Return the number of good triplets.

Constraints:
- 3 <= arr.length <= 100
- 0 <= arr[i] <= 1000
- 0 <= a, b, c <= 1000

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 37 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const countGoodTriplets = (arr, a, b, c) => {
  let cnt = 0;
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++)
      for (let k = j + 1; k < arr.length; k++)
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        )
          cnt++;
  return cnt;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3), 4);
// Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].

/*

| 0 | 1 | 2 | 3 | 4 | 5 |
+---+---+---+---+---+---+
| 3 | 0 | 1 | 1 | 9 | 7 |

0, 1, 2
0, 1, 3
0, 1, 4
0, 1, 5


*/

// Example 2:
strictEqual(countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1), 0);
// Explanation: No triplet satisfies all conditions.