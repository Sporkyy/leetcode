// 1523. Count Odd Numbers in an Interval Range
// https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/

/*

Given two non-negative integers low and high. Return the count of odd numbers
between low and high (inclusive).

Constraints:
- 0 <= low <= high <= 10^9

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 82.02% of JavaScript online submissions
// Memory Usage: 36.6 MB, less than 18.96% of JavaScript online submissions

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOdds = (low, high) =>
  0 === low % 2
    ? Math.ceil((high - low) / 2)
    : Math.floor((high - low) / 2) + 1;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(countOdds(3, 7), 3);
// Explanation: The odd numbers between 3 and 7 are [3,5,7].

// Example 2:
strictEqual(countOdds(8, 10), 1);
// Explanation: The odd numbers between 8 and 10 are [9].

strictEqual(countOdds(0, 1), 1);
strictEqual(countOdds(0, 2), 1);
strictEqual(countOdds(0, 3), 2);
strictEqual(countOdds(0, 4), 2);
strictEqual(countOdds(0, 5), 3);
strictEqual(countOdds(0, 6), 3);

strictEqual(countOdds(1, 2), 1);
strictEqual(countOdds(1, 3), 2);
strictEqual(countOdds(1, 4), 2);
strictEqual(countOdds(1, 5), 3);
strictEqual(countOdds(1, 6), 3);
strictEqual(countOdds(1, 7), 4);

strictEqual(countOdds(2, 3), 1);
strictEqual(countOdds(2, 4), 1);
strictEqual(countOdds(2, 5), 2);
strictEqual(countOdds(2, 6), 2);
strictEqual(countOdds(2, 7), 3);
strictEqual(countOdds(2, 8), 3);

strictEqual(countOdds(3, 4), 1);
strictEqual(countOdds(3, 5), 2);
strictEqual(countOdds(3, 6), 2);
strictEqual(countOdds(3, 7), 3);
strictEqual(countOdds(3, 8), 3);
strictEqual(countOdds(3, 9), 4);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*

lo = 0, hi = 1 | 1 - 0 = 1 | 0
lo = 0, hi = 2 | 2 - 0 = 2 | 1
lo = 0, hi = 3 | 3 - 0 = 3 | 1
lo = 0, hi = 4 | 4 - 0 = 4 | 2
lo = 0, hi = 5 | 5 - 0 = 5 | 2
lo = 0, hi = 6 | 6 - 0 = 6 | 3
lo = 0, hi = 7 | 7 - 0 = 7 | 3

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// for (let i = 0; i < 10; i++) console.log(Math.ceil(i / 2));
// for (let i = 0; i < 10; i++) console.log(Math.floor(i / 2));
