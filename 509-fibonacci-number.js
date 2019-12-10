// 509. Fibonacci Number
// https://leetcode.com/problems/fibonacci-number/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 13.95% of JavaScript online submissions
// Memory Usage: 34.2 MB, less than 32.36% of JavaScript online submissions

/**
 * @param {number} n
 * @return {number}
 */
const fib = n => (n <= 1 ? n : fib(n - 1) + fib(n - 2));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(fib(0), 0);
strictEqual(fib(1), 1);
strictEqual(fib(2), 1);
strictEqual(fib(3), 2);
strictEqual(fib(4), 3);
