// 1556. Thousand Separator
// https://leetcode.com/problems/thousand-separator/

/*

Given an integer n, add a dot (".") as the thousands separator and return it in
string format.

Constraints:
- 0 <= n < 2^31

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 72 ms, faster than 91.46% of JavaScript online submissions
// Memory Usage: 37.2 MB, less than 9.45% of JavaScript online submissions

/**
 * @param {number} n
 * @param {number[]} groups
 * @return {string}
 */
const thousandSeparator = (n, groups = []) =>
  ((a, b) =>
    0 === a
      ? `${b}` + groups.map(g => '.' + `${g}`.padStart(3, '0')).join('')
      : thousandSeparator(a, [b, ...groups]))(Math.trunc(n / 1000), n % 1000);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
// strictEqual(thousandSeparator(987), '987');

// Example 2:
// strictEqual(thousandSeparator(1234), '1.234');

// Example 3:
strictEqual(thousandSeparator(123456789), '123.456.789');

// Example 4:
// strictEqual(thousandSeparator(0), '0');

// strictEqual(thousandSeparator(1), '1');

// strictEqual(thousandSeparator(1000), '1.000');

// strictEqual(thousandSeparator(9876543021), '9.876.543.021');

// strictEqual(thousandSeparator(9876543210), '9.876.543.210');
