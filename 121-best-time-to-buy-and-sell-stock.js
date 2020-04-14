// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/*

Say you have an array for which the ith element is the price of a given stock on
day i.

If you were only permitted to complete at most one transaction (i.e., buy one
and sell one share of the stock), design an algorithm to find the maximum
profit.

Note that you cannot sell a stock before you buy one.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 796 ms, faster than 5.01% of JavaScript online submissions
// Memory Usage: 41.5 MB, less than 7.41% of JavaScript online submissions

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// const maxProfit = (prices) =>
//   prices.reduce(
//     (acc, curr, idx) =>
//       Math.max(acc, Math.max(...prices.slice(idx + 1)) - curr),
//     0,
//   );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of
// memory

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// const maxProfit = (prices, max = 0) =>
//   !prices.length
//     ? max
//     : maxProfit(
//         prices.slice(1),
//         Math.max(max, Math.max(...prices.slice(1)) - prices[0]),
//       );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of
// memory

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// const maxProfit = (prices, min = Infinity, profit = 0) =>
//   !prices.length
//     ? profit
//     : maxProfit(
//         prices.slice(1),
//         Math.min(min, prices[0]),
//         Math.max(profit, prices[0] - min),
//       );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 46.04% of JavaScript online submissions
// Memory Usage: 38.3 MB, less than 7.41% of JavaScript online submissions

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices =>
  prices.reduce(
    ([min, profit], curr) => [
      Math.min(min, curr),
      Math.max(profit, curr - min),
    ],
    [Infinity, 0],
  )[1];

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(maxProfit([7, 1, 5, 3, 6, 4]), 5);
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.

// Example 2:
strictEqual(maxProfit([7, 6, 4, 3, 1]), 0);
// Explanation: In this case, no transaction is done, i.e. max profit = 0.
