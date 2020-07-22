// 1518. Water Bottles
// https://leetcode.com/problems/water-bottles/

/*

Given numBottles full water bottles, you can exchange numExchange empty water
bottles for one full water bottle.

The operation of drinking a full water bottle turns it into an empty bottle.

Return the maximum number of water bottles you can drink.

Constraints:
- 1 <= numBottles <= 100
- 2 <= numExchange <= 100

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 89.43% of JavaScript online
// Memory Usage: 36.4 MB, less than 100.00% of JavaScript online

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
const numWaterBottles = (numBottles, numExchange, drank = numBottles) =>
  numBottles < numExchange
    ? drank
    : numWaterBottles(
        Math.trunc(numBottles / numExchange) + (numBottles % numExchange),
        numExchange,
        drank + Math.trunc(numBottles / numExchange),
      );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
// strictEqual(numWaterBottles(9, 3), 13);
// Explanation: You can exchange 3 empty bottles to get 1 full water bottle.
// Number of water bottles you can drink: 9 + 3 + 1 = 13.

// Example 2:
strictEqual(numWaterBottles(15, 4), 19);
// Explanation: You can exchange 4 empty bottles to get 1 full water bottle.
// Number of water bottles you can drink: 15 + 3 + 1 = 19.

// Example 3:
strictEqual(numWaterBottles(5, 5), 6);

// Example 4:
strictEqual(numWaterBottles(2, 3), 2);
