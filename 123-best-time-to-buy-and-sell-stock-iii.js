// 123. Best Time to Buy and Sell Stock III
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/

/*

Say you have an array for which the ith element is the price of a given stock on
day i.

Design an algorithm to find the maximum profit. You may complete at most two
transactions.

Note: You may not engage in multiple transactions at the same time (i.e., you
must sell the stock before you buy again).

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
//  1: 0x8db900 node::Abort() [nodejs run]
//  2: 0x8db94c  [nodejs run]
//  3: 0xad6c1e v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [nodejs run]
//  4: 0xad6e54 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [nodejs run]
//  5: 0xec44e2  [nodejs run]
//  6: 0xed3cff v8::internal::Heap::AllocateRawWithRetryOrFail(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment) [nodejs run]
//  7: 0xe9d0e4 v8::internal::Factory::NewFillerObject(int, bool, v8::internal::AllocationSpace) [nodejs run]
//  8: 0x113c88e v8::internal::Runtime_AllocateInNewSpace(int, v8::internal::Object**, v8::internal::Isolate*) [nodejs run]
//  9: 0xce2ee2dbe1d

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// const leetcode121 = prices =>
//   prices.reduce(
//     ([min, profit], curr) => [
//       Math.min(min, curr),
//       Math.max(profit, curr - min),
//     ],
//     [Infinity, 0],
//   )[1];

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// const maxProfit = prices => {
//   // Partition the prices into two arrays
//   const partitions = prices.map((_, idx) => [
//     prices.slice(0, idx),
//     prices.slice(idx, prices.length),
//   ]);
//   // console.log(partitions);
//   // Get the maximum profit from each half
//   const maxes = partitions.map(([l, r]) => [leetcode121(l), leetcode121(r)]);
//   // console.log(maxes);
//   const sums = maxes.map(([l, r]) => l + r);
//   // console.log(sums);
//   return Math.max(0, ...sums);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} prices
 * @return {number}
 */
const leetcode121 = prices =>
  prices.reduce(
    ([min, profit], curr) => [
      Math.min(min, curr),
      Math.max(profit, curr - min),
    ],
    [Infinity, 0],
  )[1];

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
  // Partition the prices into two arrays
  // const partitions = prices.map((_, idx) => [
  //   prices.slice(0, idx),
  //   prices.slice(idx, prices.length),
  // ]);
  // console.log(partitions);
  const partitions = new Array(prices.length).fill().map(_ => [[], []]);
  for (let i = 0; i < prices.length; i++) {
    for (let j = 0; j < prices.length; j++) {
      // console.log(i, j);
      if (j < i) partitions[i][0].push(prices[j]);
      else partitions[i][1].push(prices[j]);
    }
  }
  // console.log(partitions);
  // Get the maximum profit from each half
  const maxes = partitions.map(([l, r]) => [leetcode121(l), leetcode121(r)]);
  // console.log(maxes);
  const sums = maxes.map(([l, r]) => l + r);
  // console.log(sums);
  return Math.max(0, ...sums);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]), 6);
// Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
//              Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.

// Example 2:
strictEqual(maxProfit([1, 2, 3, 4, 5]), 4);
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
//              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
//              engaging multiple transactions at the same time. You must sell before buying again.

// Example 3:
strictEqual(maxProfit([7, 6, 4, 3, 1]), 0);
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

strictEqual(maxProfit([6, 1, 3, 2, 4, 7]), 7);
/*

| Buy | Sell | Profit    |
|   1 |    2 | 3 - 1 = 2 |
|   3 |    5 | 7 - 2 = 5 |

| 6 | 1 | 3 | 2 | 4 | 7 |
| = | = | = | = | = | = |
| 7 | 3 | 4 | 4 | 7 |   |
|   | 2 | 7 | 7 |   |   |
|   | 4 |   |   |   |   |
|   | 7 |   |   |   |   |

| 6 | 1 | 3 | 2 | 4 | 7 |
| 1 |   |   |   |   |   |
| 3 | 3 |   |   |   |   |
| 2 | 2 | 2 |   |   |   |
| 4 | 4 | 4 | 4 |   |   |
| 7 | 7 | 7 | 7 | 7 |   |

*/
