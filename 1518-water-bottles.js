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

// /**
//  * @param {number} numBottles
//  * @param {number} numExchange
//  * @return {number}
//  */
// const numWaterBottles = (numBottles, numExchange, drank = numBottles) =>
//   numBottles < numExchange
//     ? drank
//     : numWaterBottles(
//         Math.trunc(numBottles / numExchange) + (numBottles % numExchange),
//         numExchange,
//         drank + Math.trunc(numBottles / numExchange),
//       );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 76.31% of JavaScript online submissions
// Memory Usage: 36.8 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number} cntBot
 * @param {number} xchan
 * @return {number}
 */
const numWaterBottles = (cntBot, xchan) => {
  let drunk = cntBot;
  while (xchan <= cntBot) {
    drunk += Math.trunc(cntBot / xchan);
    cntBot = Math.trunc(cntBot / xchan) + (cntBot % xchan);
  }
  return drunk;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
// strictEqual(numWaterBottles(9, 3), 13);
// Explanation: You can exchange 3 empty bottles to get 1 full water bottle.
// Number of water bottles you can drink: 9 + 3 + 1 = 13.

/*

eeeeeeeee
eee
e

*/

// Example 2:
// strictEqual(numWaterBottles(15, 4), 19);
// Explanation: You can exchange 4 empty bottles to get 1 full water bottle.
// Number of water bottles you can drink: 15 + 3 + 1 = 19.

// Example 3:
// strictEqual(numWaterBottles(5, 5), 6);

// Example 4:
// strictEqual(numWaterBottles(2, 3), 2);

strictEqual(numWaterBottles(10, 2), 19);

/*

           |  drinkable | empty | drank |
bbbbbbbbbb |        10  |     0 |    10 |
 b b b b b |         5  |     0 |     5 |
   b   b B |         2  |     1 |     2 |
       b B |         1  |     1 |     1 |
         B |         1  |     0 |     1 |
---------- + --
             23

10 + 2 = 12 / 1 * 2 = 6
 6 + 2 =  8 / 8 * 1 = 1

*/
