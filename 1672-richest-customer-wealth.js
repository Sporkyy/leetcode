// 1672. Richest Customer Wealth
// https://leetcode.com/problems/richest-customer-wealth/

/*

You are given an m x n integer grid accounts where accounts[i][j] is the amount
of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank.
Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts.
The richest customer is the customer that has the maximum wealth.

## Constraints
- m == accounts.length
- n == accounts[i].length
- 1 <= m, n <= 50
- 1 <= accounts[i][j] <= 100

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 80.99% of JavaScript online submissions
// Memory Usage: 38.7 MB, less than 30.92% of JavaScript online submissions

/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = accounts =>
  Math.max(...accounts.map(arr => arr.reduce((acc, curr) => acc + curr)));

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ]),
  6,
);
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.

// Example 2:
strictEqual(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ]),
  10,
);
// Explanation:
// 1st customer has wealth = 6
// 2nd customer has wealth = 10
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.

// Example 3:
strictEqual(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ]),
  17,
);
