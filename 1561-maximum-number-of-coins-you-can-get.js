// 1561. Maximum Number of Coins You Can Get
// https://leetcode.com/problems/maximum-number-of-coins-you-can-get/

/*

There are 3n piles of coins of varying size, you and your friends will take
piles of coins as follows:

- In each step, you will choose any 3 piles of coins (not necessarily
  consecutive).
- Of your choice, Alice will pick the pile with the maximum number of coins.
- You will pick the next pile with maximum number of coins.
- Your friend Bob will pick the last pile.
- Repeat until there are no more piles of coins.
- Given an array of integers piles where piles[i] is the number of coins in the
  ith pile.

Return the maximum number of coins which you can have.

Constraints:
- 3 <= piles.length <= 10^5
- piles.length % 3 == 0
- 1 <= piles[i] <= 10^4

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Time Limit Exceeded

// /**
//  * @param {number[]} piles
//  * @return {number}
//  */
// const maxCoins = piles => {
//   let res = 0;
//   while (piles.length) {
//     piles.sort((a, b) => a - b);
//     res += piles[piles.length - 2];
//     piles = piles.slice(1, -2);
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Time Limit Exceeded

// /**
//  * @param {number[]} piles
//  * @return {number}
//  */
// const maxCoins = piles => {
//   piles.sort((a, b) => a - b);
//   let res = 0;
//   while (piles.length) {
//     res += piles[piles.length - 2];
//     piles = piles.slice(1, -2);
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 204 ms, faster than 95.81% of JavaScript online submissions
// Memory Usage: 47.5 MB, less than 43.11% of JavaScript online submissions

/**
 * @param {number[]} piles
 * @return {number}
 */
const maxCoins = piles => {
  piles.sort((a, b) => a - b);
  let res = 0;
  for (let i = piles.length - 2; piles.length / 3 <= i; i -= 2) res += piles[i];
  return res;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
// strictEqual(maxCoins([2, 4, 1, 2, 7, 8]), 9);
// Explanation:
// - Choose the triplet (2, 7, 8), Alice Pick the pile with 8 coins, you the
//   pile with 7 coins and Bob the last one.
// - Choose the triplet (1, 2, 4), Alice Pick the pile with 4 coins, you the
//   pile with 2 coins and Bob the last one.
// - The maximum number of coins which you can have are: 7 + 2 = 9.
// - On the other hand if we choose this arrangement (1, 2, 8), (2, 4, 7) you
//   only get 2 + 4 = 6 coins which is not optimal.

// Example 2:
// strictEqual(maxCoins([2, 4, 5]), 4);

// Example 3:
strictEqual(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4]), 18);
