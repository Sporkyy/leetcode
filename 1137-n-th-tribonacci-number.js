// 1137. N-th Tribonacci Number
// https://leetcode.com/problems/n-th-tribonacci-number/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 63.26% of JavaScript online submissions
// Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number} n
 * @return {number}
 */
// const tribonacci = n => {
//   let [x, y, z] = [0, 1, 1];
//   if (n < 3) return [x, y, z][n];
//   for (i = 3; i < n; i++) [x, y, z] = [y, z, x + y + z];
//   return x + y + z;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 100 ms, faster than 8.21% of JavaScript online submissions
// Memory Usage: 33.5 MB, less than 100.00% of JavaScript online submissions

const tribonacci = n => {
  const a = [0, 1, 1];
  for (let i = 3; i <= n; i++) a[i] = a[i - 3] + a[i - 2] + a[i - 1];
  return a[n];
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(tribonacci(0), 0);

strictEqual(tribonacci(1), 1);

strictEqual(tribonacci(2), 1);

strictEqual(tribonacci(3), 2);

strictEqual(tribonacci(4), 4);

strictEqual(tribonacci(5), 7);

strictEqual(tribonacci(6), 13);

strictEqual(tribonacci(25), 1389537);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*
t0 = 0 + 1 + 1 = 0
t1 = 0 + 1 + 1 = 1
t2 = 0 + 1 + 1 = 1
t3 = 0 + 1 + 1 = 2
t4 = 1 + 1 + 2 = 4
t5 = 1 + 2 + 4 = 7
t6 = 2 + 4 + 7 = 13
*/
