// 1217. Play with Chips
// https://leetcode.com/problems/play-with-chips/

/*

There are some chips, and the i-th chip is at position chips[i].

You can perform any of the two following types of moves any number of times
(possibly zero) on any chip:

- Move the i-th chip by 2 units to the left or to the right with a cost of 0.
- Move the i-th chip by 1 unit to the left or to the right with a cost of 1.
- There can be two or more chips at the same position initially.

Return the minimum cost needed to move all the chips to the same position (any
position).

Constraints:
- 1 <= chips.length <= 100
- 1 <= chips[i] <= 10^9

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 73.77% of JavaScript online submissions
// Memory Usage: 35.5 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} chips
//  * @return {number}
//  */
// const minCostToMoveChips = (chips, evens = [], odds = []) => {
//   if (!chips.length) return Math.min(evens.length, odds.length);
//   return minCostToMoveChips(
//     chips.slice(1),
//     evens.concat(0 === chips[0] % 2 ? [chips[0]] : []),
//     odds.concat(1 === chips[0] % 2 ? [chips[0]] : []),
//   );
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 73.77% of JavaScript online submissions
// Memory Usage: 34.1 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} chips
 * @return {number}
 */
const minCostToMoveChips = (chips, evenCnt = 0, oddCnt = 0) =>
  !chips.length
    ? Math.min(evenCnt, oddCnt)
    : minCostToMoveChips(
        chips.slice(1),
        evenCnt + +(0 === chips[0] % 2),
        oddCnt + +(1 === chips[0] % 2),
      );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(minCostToMoveChips([1, 2, 3]), 1);
// Explanation: Second chip will be moved to positon 3 with cost 1.
// First chip will be moved to position 3 with cost 0. Total cost is 1.

// Example 2:
strictEqual(minCostToMoveChips([2, 2, 2, 3, 3]), 2);
// Explanation: Both fourth and fifth chip will be moved to position two
// with cost 1. Total minimum cost will be 2.

strictEqual(minCostToMoveChips([1, 2, 5]), 1);
