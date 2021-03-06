// 1578. Minimum Deletion Cost to Avoid Repeating Letters
//       https://leetcode.com/problems/minimum-deletion-cost-to-avoid-repeating-letters/

/*

Given a string s and an array of integers cost where cost[i] is the cost of
deleting the ith character in s.

Return the minimum cost of deletions such that there are no two identical
letters next to each other.

Notice that you will delete the chosen characters at the same time, in other
words, after deleting a character, the costs of deleting other characters will
not change.

## Constraints
- s.length == cost.length
- 1 <= s.length, cost.length <= 10^5
- 1 <= cost[i] <= 10^4
- s contains only lowercase English letters.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 216 ms, faster than 20.00% of JavaScript online submissions
// Memory Usage: 59 MB, less than 22.50% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @param {number[]} cost
//  * @return {number}
//  */
// const minCost = (s, cost) => {
//   let res = 0;
//   for (let i = 0, stk = []; i < s.length; i++) {
//     stk.push(cost[i]);
//     if (s[i] !== s[i + 1]) {
//       if (1 < stk.length)
//         res += stk
//           .sort((a, b) => a - b)
//           .slice(0, -1)
//           .reduce((acc, curr) => acc + curr);
//       stk = [];
//     }
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 128 ms, faster than 56.67% of JavaScript online submissions
// Memory Usage: 57.6 MB, less than 25.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @param {number[]} cost
//  * @return {number}
//  */
// const minCost = (s, cost) => {
//   let res = 0;
//   for (let i = 0, stk = []; i < s.length; i++) {
//     stk.push(cost[i]);
//     if (s[i] !== s[i + 1]) {
//       if (1 < stk.length) {
//         res += stk.reduce((acc, curr) => acc + curr);
//         res -= Math.max(...stk);
//       }
//       stk = [];
//     }
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 100 ms, faster than 90.83% of JavaScript online submissions
// Memory Usage: 47.9 MB, less than 77.50% of JavaScript online submissions

/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
const minCost = (s, cost) => {
  let res = 0;
  for (let i = 0, max = 0; i < s.length; i++) {
    res += cost[i];
    max = Math.max(max, cost[i]);
    if (s[i] !== s[i + 1]) {
      res -= max;
      max = 0;
    }
  }
  return res;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(minCost('abaac', [1, 2, 3, 4, 5]), 3);
// Explanation: Delete the letter "a" with cost 3 to get "abac" (String without
// two identical letters next to each other).

// Example 2:
strictEqual(minCost('abc', [1, 2, 3]), 0);
// Explanation: You don't need to delete any character because there are no
// identical letters next to each other.

// Example 3:
strictEqual(minCost('aabaa', [1, 2, 3, 4, 1]), 2);
// Explanation: Delete the first and the last character, getting the string
// ("aba").

strictEqual(minCost('dbacd', [10, 5, 2, 2, 2]), 0);
