// 1512. Number of Good Pairs
// https://leetcode.com/problems/number-of-good-pairs/

/*

Given an array of integers nums.

A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.

Constraints:
- 1 <= nums.length <= 100
- 1 <= nums[i] <= 100

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 61.14% of JavaScript online submissions
// Memory Usage: 36.2 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const numIdenticalPairs = nums => {
//   const map = new Map();
//   let cnt = 0;
//   for (const n of nums) {
//     cnt += map.get(n) || 0;
//     map.set(n, (map.get(n) || 0) + 1);
//   }
//   return cnt;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const numIdenticalPairs = nums => {
//   const map = new Map();
//   let cnt = 0;
//   for (const n of nums) cnt += map.set(n, (map.get(n) || 0) + 1).get(n) - 1;
//   return cnt;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 53.26% of JavaScript online submissions
// Memory Usage: 36.7 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = nums =>
  [
    ...nums
      .reduce((map, n) => map.set(n, (map.get(n) || 0) + 1), new Map())
      .values(),
  ].reduce((sum, cnt) => (sum += (cnt ** 2 - cnt) / 2), 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(numIdenticalPairs([1, 2, 3, 1, 1, 3]), 4);
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// Example 2:
strictEqual(numIdenticalPairs([1, 1, 1, 1]), 6);
// Explanation: Each pair in the array are good.

// Example 3:
strictEqual(numIdenticalPairs([1, 2, 3]), 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*

0122333444455555

0 =  0 = (0 ** 2 - 0) / 2
1 =  0 = (1 ** 2 - 1) / 2
2 =  1 = (2 ** 2 - 2) / 2
3 =  3 = (3 ** 2 - 3) / 2
4 =  6 = (4 ** 2 - 4) / 2
5 = 10 = (5 ** 2 - 5) / 2

*/
