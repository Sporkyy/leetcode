// 1475. Final Prices With a Special Discount in a Shop
// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/

/*

Given the array prices where prices[i] is the price of the ith item in a shop.
There is a special discount for items in the shop, if you buy the ith item, then
you will receive a discount equivalent to prices[j] where j is the minimum index
such that j > i and prices[j] <= prices[i], otherwise, you will not receive any
discount at all.

Return an array where the ith element is the final price you will pay for the
ith item of the shop considering the special discount.

Constraints:
- 1 <= prices.length <= 500
- 1 <= prices[i] <= 10^3

*/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 108 ms, faster than 21.97% of JavaScript online submissions
// Memory Usage: 42.1 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} prices
 * @return {number[]}
 */
const finalPrices = prices =>
  prices.map(
    (price, idx) =>
      price -
      prices
        .slice(idx + 1)
        .reduce((acc, curr) => (0 === acc && curr <= price ? curr : acc), 0),
  );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
deepStrictEqual(finalPrices([8, 4, 6, 2, 3]), [4, 2, 4, 2, 3]);
// Explanation:
// - For item 0 with price[0]=8 you will receive a discount equivalent to
//   prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4.
// - For item 1 with price[1]=4 you will receive a discount equivalent to
//   prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2.
// - For item 2 with price[2]=6 you will receive a discount equivalent to
//   prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4.
// - For items 3 and 4 you will not receive any discount at all.

// Example 2:
deepStrictEqual(finalPrices([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
// Explanation: In this case, for all items, you will not receive any discount
// at all.

// Example 3:
deepStrictEqual(finalPrices([10, 1, 1, 6]), [9, 0, 1, 6]);
