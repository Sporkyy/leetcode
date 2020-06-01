// 1399. Count Largest Group
// https://leetcode.com/problems/count-largest-group/

/*

Given an integer n. Each number from 1 to n is grouped according to the sum of
its digits.

Return how many groups have the largest size.

Constraints:
- 1 <= n <= 10^4

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 92 ms, faster than 20.72% of JavaScript online submissions
// Memory Usage: 44.4 MB, less than 100.00% of JavaScript online submissions

// const sumDigits = (n, sum = 0) =>
//   !n ? sum : sumDigits(Math.trunc(n / 10), sum + (n % 10));

// console.log(sumDigits(1));
// console.log(sumDigits(12));
// console.log(sumDigits(123));
// console.log(sumDigits(1234));

// /**
//  * @param {number} n
//  * @return {number}
//  */
// const countLargestGroup = n => {
//   const sums = [...new Array(n + 1).keys()].slice(1).map(x => sumDigits(x));
//   // console.log(sums);
//   const cnts = new Array(4 * 9 + 1).fill(0);
//   for (const sum of sums) cnts[sum]++;
//   // console.log(cnts);
//   const largest = Math.max(...cnts);
//   // console.log(largest);
//   let cnt = 0;
//   return cnts.filter(c => c === largest).length;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 1020 ms, faster than 5.11% of JavaScript online submissions
// Memory Usage: 46.4 MB, less than 100.00% of JavaScript online submissions

const sumDigits = n => (!n ? 0 : (n % 10) + Math.trunc(sumDigits(n / 10)));

/**
 * @param {number} n
 * @return {number}
 */
const countLargestGroup = n => {
  const sums = [...new Array(n + 1).keys()].slice(1).map(x => sumDigits(x));
  const cnts = new Array(4 * 9 + 1).fill(0);
  for (const sum of sums) cnts[sum]++;
  const largest = Math.max(...cnts);
  let cnt = 0;
  return cnts.filter(c => c === largest).length;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(countLargestGroup(13), 4);
// Explanation: There are 9 groups in total, they are grouped according sum of
// its digits of numbers from 1 to 13: [1,10], [2,11], [3,12], [4,13], [5], [6],
// [7], [8], [9]. There are 4 groups with largest size.

// Example 2:
strictEqual(countLargestGroup(2), 2);
// Explanation: There are 2 groups [1], [2] of size 1.

// Example 3:
strictEqual(countLargestGroup(15), 6);

// Example 4:
strictEqual(countLargestGroup(24), 5);

strictEqual(countLargestGroup(174), 1);

strictEqual(countLargestGroup(99), 1);

strictEqual(countLargestGroup(9999), 1);
