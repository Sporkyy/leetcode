// 1346. Check If N and Its Double Exist
// https://leetcode.com/problems/check-if-n-and-its-double-exist/

/*

Given an array arr of integers, check if there exists two integers N and M such
that N is the double of M ( i.e. N = 2 * M).

More formally check if there exists two indices i and j such that :

i != j 0 <= i, j < arr.length arr[i] == 2 * arr[j]

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 44 ms, faster than 99.61% of JavaScript online submissions
// Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
// const checkIfExist = arr =>
//   arr.some((n, idx) => {
//     const i2n = arr.indexOf(n * 2);
//     return -1 < i2n && idx !== i2n;
//   });

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 80 ms, faster than 77.79% of JavaScript online submissions
// Memory Usage: 41.9 MB, less than 7.55% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
// const checkIfExist = arr =>
//   !arr.length
//     ? false
//     : arr.slice(1).includes(arr[0] * 2) || arr.slice(1).includes(arr[0] / 2)
//     ? true
//     : checkIfExist(arr.slice(1));

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 68 ms, faster than 99.26% of JavaScript online submissions
// Memory Usage: 40 MB, less than 48.03% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
// const checkIfExist = arr =>
//   !arr.length
//     ? false
//     : (x => arr.some(n => n === x * 2 || n === x / 2))(arr.pop())
//     ? true
//     : checkIfExist(arr);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 84 ms, faster than 55.69% of JavaScript online submissions
// Memory Usage: 41.3 MB, less than 9.99% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
// const checkIfExist = (arr, haystack = new Set()) =>
//   arr.length &&
//   (n =>
//     haystack.has(n / 2) ||
//     haystack.has(n * 2) ||
//     (haystack.add(n) && checkIfExist(arr, haystack)))(arr.pop());

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 92.03% of JavaScript online submissions
// Memory Usage: 40.1 MB, less than 48.03% of JavaScript online submissions

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = arr =>
  arr.length &&
  ((x => arr.some(n => n === x * 2 || n === x / 2))(arr.pop()) ||
    checkIfExist(arr));

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { ok } from 'assert';

// Example 1:
ok(checkIfExist([10, 2, 5, 3]));
// Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

// Example 2:
ok(checkIfExist([7, 1, 14, 11]));
// Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.

// Example 3:
ok(!checkIfExist([3, 1, 7, 11]));
// Explanation: In this case does not exist N and M, such that N = 2 * M.

// Test
ok(!checkIfExist([-2, 0, 10, -19, 4, 6, -8]));

ok(checkIfExist([-20, 8, -6, -14, 0, -19, 14, 4]));

ok(!checkIfExist([0]));

ok(checkIfExist([0, 0]));
