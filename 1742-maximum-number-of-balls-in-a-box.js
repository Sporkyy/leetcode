// 1742. Maximum Number of Balls in a Box
// https://leetcode.com/problems/maximum-number-of-balls-in-a-box/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

/*

You are working in a ball factory where you have n balls numbered from
`lowLimit` up to `highLimit` inclusive (i.e., `n == highLimit - lowLimit + 1`),
and an infinite number of boxes numbered from 1 to infinity.

Your job at this factory is to put each ball in the box with a number equal to
the sum of digits of the ball's number. For example, the ball number `321` will
be put in the box number `3 + 2 + 1 = 6` and the ball number 10 will be put in
the box number `1 + 0 = 1`.

Given two integers `lowLimit` and `highLimit`, return the number of balls in the
box with the most balls.

## Constraints
- `1 <= lowLimit <= highLimit <= 105`

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 332 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 55.3 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
const countBalls = (lowLimit, highLimit) =>
  Math.max(
    ...new Array(highLimit - lowLimit + 1)
      .fill()
      .reduce((acc, _, idx) => {
        const dSum = [...`${lowLimit + idx}`]
          .map(Number)
          .reduce((a, c) => a + c);
        acc.set(dSum, (acc.get(dSum) || 0) + 1);
        return acc;
      }, new Map())
      .values(),
  );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(countBalls(1, 10), 2);
// Explanation:
// Box Number:  1 2 3 4 5 6 7 8 9 10 11 ...
// Ball Count:  2 1 1 1 1 1 1 1 1 0  0  ...
// Box 1 has the most number of balls with 2 balls.

// Example 2:
strictEqual(countBalls(5, 15), 2);
// Explanation:
// Box Number:  1 2 3 4 5 6 7 8 9 10 11 ...
// Ball Count:  1 1 1 1 2 2 1 1 1 0  0  ...
// Boxes 5 and 6 have the most number of balls with 2 balls in each.

// Example 3:
strictEqual(countBalls(19, 28), 2);
// Explanation:
// Box Number:  1 2 3 4 5 6 7 8 9 10 11 12 ...
// Ball Count:  0 1 1 1 1 1 1 1 1 2  0  0  ...
// Box 10 has the most number of balls with 2 balls.
