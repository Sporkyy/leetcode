// 1304. Find N Unique Integers Sum up to Zero
// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

/*

Given an integer n, return any array containing n unique integers such that they
add up to 0.

*/

import { ok, strictEqual } from 'assert';

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

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

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 64 ms, faster than 44.12% of JavaScript online submissions
// Memory Usage: 35.6 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number} n
//  * @return {number[]}
//  */
// const sumZero = n =>
//   [...new Array(n - 1).keys()].concat([0 - ((n - 1) * (n - 2)) / 2]);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 60 ms, faster than 69.72% of JavaScript online submissions
// Memory Usage: 35.7 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number} n
//  * @return {number[]}
//  */
// const sumZero = n => [...new Array(n - 1).keys(), 0 - ((n - 1) * (n - 2)) / 2];

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {number} n
//  * @return {number[]}
//  */
// const sumZero = n => {
//   // const x = [...new Array(n - 1).keys()]; //?
//   const x = [...new Array(n).keys()].slice(1); //?
//   // const y = 0 - ((n - 1) * (n - 2)) / 2; //?
//   const y = 0 - ((n - 1) * n) / 2; //?
//   return [...x, y];
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 62 ms, faster than 93.42% of JavaScript online submissions
// Memory Usage: 44.5 MB, less than 5.61% of JavaScript online submissions

// /**
//  * @param {number} n
//  * @return {number[]}
//  */
// const sumZero = n => [...new Array(n).keys(), ((-n + 1) * n) / 2].slice(1);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 74 ms, faster than 69.44% of JavaScript online submissions
// Memory Usage: 44.3 MB, less than 5.61% of JavaScript online submissions

/**
 * @param {number} n
 * @return {number[]}
 */
const sumZero = n => [...new Array(n).keys(), ((1 - n) * n) / 2].slice(1);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

const areUnique = arr => arr.length === new Set(arr).size;
const sum = arr => arr.reduce((acc, curr) => acc + curr, 0);

// Example 3:
(arr => {
  ok(areUnique(arr));
  strictEqual(sum(arr), 0);
})(sumZero(1));
// Example: [0]

// Someone in the comments mentioned "2" didn't work with my solution:
(arr => {
  ok(areUnique(arr));
  strictEqual(sum(arr), 0);
})(sumZero(2));

// Example 2:
(arr => {
  ok(areUnique(arr));
  strictEqual(sum(arr), 0);
})(sumZero(3));
// Example: [-1,0,1]

// Example 1:
(arr => {
  ok(areUnique(arr));
  strictEqual(sum(arr), 0);
})(sumZero(5));
// Example: [-3,-1,2,-2,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

// Just a bigger example:
(arr => {
  ok(areUnique(arr));
  strictEqual(sum(arr), 0);
})(sumZero(8));
