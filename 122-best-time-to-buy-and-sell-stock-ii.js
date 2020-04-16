// 122. Best Time to Buy and Sell Stock II
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

/*

Say you have an array prices for which the ith element is the price of a given
stock on day i.

Design an algorithm to find the maximum profit. You may complete as many
transactions as you like (i.e., buy one and sell one share of the stock multiple
times).

Note: You may not engage in multiple transactions at the same time (i.e., you
must sell the stock before you buy again).

Constraints:
- 1 <= prices.length <= 3 * 10 ^ 4
- 0 <= prices[i] <= 10 ^ 4

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 84.11% of JavaScript online submissions
// Memory Usage: 36.3 MB, less than 23.81% of JavaScript online submissions

const maxProfit = prices => {
  let profit = 0;
  for (let i = 0, lo = Infinity, hi = -Infinity; i < prices.length; i++) {
    [lo, hi] = [Math.min(lo, prices[i]), Math.max(hi, prices[i])];
    if (prices[i + 1] < prices[i] || i === prices.length - 1) {
      profit += hi - lo;
      [lo, hi] = [Infinity, -Infinity];
    }
  }
  return profit;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(maxProfit([7, 1, 5, 3, 6, 4]), 7);
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

// Example 2:
strictEqual(maxProfit([1, 2, 3, 4, 5]), 4);
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
//              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
//              engaging multiple transactions at the same time. You must sell before buying again.

// Example 3:
strictEqual(maxProfit([7, 6, 4, 3, 1]), 0);
// Explanation: In this case, no transaction is done, i.e. max profit = 0.
