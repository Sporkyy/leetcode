// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/

/*

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you
climb to the top?

Note: Given n will be a positive integer.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Timeout

// /**
//  * @param {number} n
//  * @return {number}
//  */
// const climbStairs = n => {
//   if (0 === n) return 0;
//   // console.log(n);
//   const fib = n => (n <= 1 ? n : fib(n - 1) + fib(n - 2));
//   // console.log(fib(n));
//   return fib(n + 1);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 68.86% of JavaScript online submissions
// Memory Usage: 33.9 MB, less than 48.00% of JavaScript online submissions

// /**
//  * @param {number} n
//  * @return {number}
//  */
// const climbStairs = n =>
//   [...new Array(n).keys()].reduce(
//     (acc, curr) => acc.concat([acc[curr + 2] + acc[curr + 1]]),
//     [0, 1, 2],
//   )[n];

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 68.86% of JavaScript online submissions
// Memory Usage: 33.7 MB, less than 92.00% of JavaScript online submissions

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = n =>
  new Array(n)
    .fill()
    .reduce((acc, _, idx) => acc.concat([acc[idx + 2] + acc[idx + 1]]), [
      0,
      1,
      2,
    ])[n];

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// console.log(climbStairs(0));
// console.log(climbStairs(1));
// console.log(climbStairs(2));
// console.log(climbStairs(3));
// console.log(climbStairs(4));
// console.log(climbStairs(5));
// console.log(climbStairs(6));
// console.log(climbStairs(7));
// console.log(climbStairs(8));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

strictEqual(climbStairs(0), 0);
// None

strictEqual(climbStairs(1), 1);
// 1. 1 step

// Example 1:
strictEqual(climbStairs(2), 2);
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
strictEqual(climbStairs(3), 3);
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

strictEqual(climbStairs(4), 5);
// 1. 1 step + 1 step + 1 step + 1 step
// 2. 1 step + 1 step + 2 steps
// 3. 1 step + 2 steps + 1 step
// 4. 2 steps + 1 step + 1 step
// 5. 2 steps + 2 steps

strictEqual(climbStairs(5), 8);
// 1. 1 step + 1 step + 1 step + 1 step + 1 step
// 2. 1 step + 1 step + 1 step + 2 steps
// 3. 1 step + 1 step + 2 steps + 1 step
// 4. 1 step + 2 steps + 1 step + 1 step
// 5. 2 steps + 1 step + 1 step + 1 step
// 6. 2 steps + 1 step + 2 steps
// 7. 2 steps + 2 steps + 1 step
// 8. 1 step + 2 steps + 2 steps
