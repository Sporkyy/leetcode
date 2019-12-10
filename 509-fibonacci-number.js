// 509. Fibonacci Number
// https://leetcode.com/problems/fibonacci-number/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 13.95% of JavaScript online submissions
// for Fibonacci Number.
// Memory Usage: 34.2 MB, less than 32.36% of JavaScript online submissions
// for Fibonacci Number.

/**
 * @param {number} N
 * @return {number}
 */
const fib = N => (N <= 1 ? N : fib(N - 1) + fib(N - 2));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(fib(2), 1);
strictEqual(fib(3), 2);
strictEqual(fib(4), 3);
strictEqual(fib(0), 0);
strictEqual(fib(1), 1);
