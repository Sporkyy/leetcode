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

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// const maxProfit = prices => {
//   let profit = 0;
//   for (let i = 0, lo = Infinity, hi = -Infinity; i < prices.length; i++) {
//     [lo, hi] = [Math.min(lo, prices[i]), Math.max(hi, prices[i])];
//     if (prices[i + 1] < prices[i] || i === prices.length - 1) {
//       profit += hi - lo;
//       [lo, hi] = [Infinity, -Infinity];
//     }
//   }
//   return profit;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 64.98% of JavaScript online submissions
// Memory Usage: 36.5 MB, less than 23.81% of JavaScript online submissions

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// const maxProfit = prices =>
//   prices
//     .map((price, idx) => prices[idx + 1] - price)
//     .filter(n => 0 < n)
//     .reduce((acc, curr) => acc + curr, 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// const maxProfit = prices =>
//   prices
//     .map((price, idx) => prices[idx + 1] - price)
//     .filter(n => 0 < n)
//     .reduce((acc, curr) => acc + curr, 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// const maxProfit = prices =>
//   prices.reduce(
//     (profit, priceToday, idx) =>
//       profit +
//       (priceToday < prices[idx + 1] ? prices[idx + 1] - priceToday : 0),
//     0,
//   );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 32.11% of JavaScript online submissions
// Memory Usage: 36.6 MB, less than 23.81% of JavaScript online submissions

/**
 * You have a time travel machine that can only go back 1 day.
 * You will use it to exploit the stock market.
 * But somehow had infinite money to start with. (Whatever.)
 *
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
  // Start with nothing and take every profitable opportunity from time travel
  let profit = 0;
  // Start from the second day (because that is the first day you could sell)
  for (let i = 1; i < prices.length; i++) {
    // Our Delorean only goes back 1 day, but that is all we need
    const [priceYesterday, priceToday] = [prices[i - 1], prices[i]];
    // Whenever there is profit, engage that Flux Capacitor!
    if (priceYesterday < priceToday) profit += priceToday - priceYesterday;
    // Buy yesterday; sell today
  }
  // Take every Monday off!
  return profit;
  // Time travel trading makes every weekend is a three-day weekend!
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
