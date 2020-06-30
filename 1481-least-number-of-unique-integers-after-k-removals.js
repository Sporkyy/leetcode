// 1481. Least Number of Unique Integers after K Removals
// https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/

/*

Given an array of integers arr and an integer k. Find the least number of unique
integers after removing exactly k elements.

Constraints:
- 1 <= arr.length <= 10^5
- 1 <= arr[i] <= 10^9
- 0 <= k <= arr.length

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 252 ms, faster than 66.32% of JavaScript online submissions
// Memory Usage: 75.5 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @param {number} k
//  * @return {number}
//  */
// const findLeastNumOfUniqueInts = (arr, k) => {
//   const cnts = new Map();
//   for (const n of arr)
//     if (!cnts.has(n)) cnts.set(n, 1);
//     else cnts.set(n, cnts.get(n) + 1);
//   // console.log(cnts);
//   const sorted = [...cnts.entries()].sort(([, aCnt], [, bCnt]) => aCnt - bCnt);
//   // console.log(sorted);
//   for (let i = 0; 0 < k; i++) while (0 < sorted[i][1] && k--) sorted[i][1]--;
//   // console.log(sorted);
//   return sorted.reduce((uniqs, [n, cnt]) => uniqs + (cnt ? 1 : 0), 0);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 200 ms, faster than 80.07% of JavaScript online submissions
// Memory Usage: 71.9 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @param {number} k
//  * @return {number}
//  */
// const findLeastNumOfUniqueInts = (arr, k) => {
//   const cnts = new Map();
//   for (const n of arr) cnts.set(n, cnts.has(n) ? cnts.get(n) + 1 : 1);
//   const sorted = [...cnts.entries()].sort(([, aCnt], [, bCnt]) => aCnt - bCnt);
//   for (let i = 0; 0 < k; i++) while (0 < sorted[i][1] && k--) sorted[i][1]--;
//   return sorted.reduce((uniqs, [n, cnt]) => uniqs + (cnt ? 1 : 0), 0);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 144 ms, faster than 94.16% of JavaScript online submissions
// Memory Usage: 58.7 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findLeastNumOfUniqueInts = (arr, k) => {
  const map = new Map();
  for (const n of arr) map.set(n, (map.get(n) || 0) + 1);
  let res = map.size;
  const cnts = [...map.values()].sort((a, b) => a - b);
  for (const cnt of cnts)
    if (0 <= (k -= cnt)) res--;
    else return res;
  return res;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
// strictEqual(findLeastNumOfUniqueInts([5, 5, 4], 1), 1);
// Explanation: Remove the single 4, only 5 is left.

// Example 2:
// strictEqual(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3), 2);
// Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.

strictEqual(findLeastNumOfUniqueInts([1], 1), 0);

strictEqual(
  findLeastNumOfUniqueInts(
    [
      24,
      119,
      157,
      446,
      251,
      117,
      22,
      168,
      374,
      373,
      323,
      311,
      441,
      213,
      120,
      412,
      200,
      236,
      328,
      24,
      164,
      104,
      331,
      32,
      19,
      223,
      89,
      114,
      152,
      82,
      456,
      381,
      355,
      343,
      157,
      245,
      443,
      368,
      229,
      49,
      82,
      16,
      373,
      142,
      240,
      125,
      8,
    ],
    41,
  ),
  3,
);
