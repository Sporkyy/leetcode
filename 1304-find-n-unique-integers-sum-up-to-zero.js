// 1304. Find N Unique Integers Sum up to Zero
// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

/*

Given an integer n, return any array containing n unique integers such that they
add up to 0.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 69.72% of JavaScript online submissions
// Memory Usage: 35.1 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number} n
//  * @return {number[]}
//  */
// const sumZero = n => {
//   const res = [...new Array(n - 1).keys()];
//   const sum = res.slice(1).reduce((acc, curr) => acc + curr, 0);
//   res.push(0 - sum);
//   return res;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 44.12% of JavaScript online submissions
// Memory Usage: 35.6 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number} n
//  * @return {number[]}
//  */
// const sumZero = n =>
//   [...new Array(n - 1).keys()].concat([0 - ((n - 1) * (n - 2)) / 2]);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 69.72% of JavaScript online submissions
// Memory Usage: 35.7 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number} n
 * @return {number[]}
 */
const sumZero = n => [...new Array(n - 1).keys(), 0 - ((n - 1) * (n - 2)) / 2];

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(
  sumZero(5).reduce((acc, curr) => acc + curr),
  0,
);
// Example: [-3,-1,2,-2,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

// Example 2:
strictEqual(
  sumZero(3).reduce((acc, curr) => acc + curr),
  0,
);
// Example: [-1,0,1]

// Example 3:
strictEqual(
  sumZero(1).reduce((acc, curr) => acc + curr),
  0,
);
// Example: [0]
