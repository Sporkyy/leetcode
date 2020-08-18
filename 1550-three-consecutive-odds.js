// 1550. Three Consecutive Odds
// https://leetcode.com/problems/three-consecutive-odds/

/*

Given an integer array arr, return true if there are three consecutive odd
numbers in the array. Otherwise, return false.

## Constraints
- 1 <= arr.length <= 1000
- 1 <= arr[i] <= 1000

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 68 ms, faster than 95.42% of JavaScript online submissions
// Memory Usage: 37.2 MB, less than 5.23% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
// const threeConsecutiveOdds = arr => {
//   for (let i = 0, x = new Array(3); i < arr.length; i++) {
//     x[i % 3] = arr[i] % 2;
//     if ('[1,1,1]' === JSON.stringify(x)) return true;
//   }
//   return false;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 83.66% of JavaScript online submissions
// Memory Usage: 37 MB, less than 9.15% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
// const threeConsecutiveOdds = arr => {
//   for (let i = 0, x = 0; i < arr.length; i++)
//     if (7 === (x = arr[i] % 2 ? x | [1, 2, 4][i % 3] : 0)) return true;
//   return false;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 64 ms, faster than 98.69% of JavaScript online submissions
// Memory Usage: 36.5 MB, less than 62.09% of JavaScript online submissions

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds = arr => {
  for (let i = 0, x = 0; i < arr.length; i++) {
    x = arr[i] % 2 ? x | [1, 2, 4][i % 3] : 0;
    if (7 === x) return true;
  }
  return false;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 72 ms, faster than 89.54% of JavaScript online submissions
// Memory Usage: 36.8 MB, less than 22.22% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
// const threeConsecutiveOdds = arr =>
//   arr
//     .map(n => n % 2)
//     .join('')
//     .includes('111');

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { ok } from 'assert';

// Example 1:
ok(!threeConsecutiveOdds([2, 6, 4, 1]));
// Explanation: There are no three consecutive odds.

// Example 2:
ok(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));
// Explanation: [5,7,23] are three consecutive odds.

ok(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12, 5, 7, 10]));

ok(!threeConsecutiveOdds([1, 3]));

ok(!threeConsecutiveOdds([1, 3, 2]));
