/*

# 1323. Maximum 69 Number
## https://leetcode.com/problems/maximum-69-number/

Given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes
9, and 9 becomes 6).

## Constraints
- 1 <= num <= 10^4
- num's digits are 6 or 9.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 108 ms, faster than 5.15% of JavaScript online submissions
// Memory Usage: 33.5 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number} num
//  * @return {number}
//  */
// const maximum69Number = num => {
//   const s = '' + num;
//   const first6 = s.indexOf(6);
//   // console.log(first6);
//   if (first6 < 0) return num;
//   // console.log(num + 3 * 10 ** (s.length - 1 - first6));
//   return num + 3 * 10 ** (s.length - 1 - first6);
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 96 ms, faster than 11.86% of JavaScript online submissions
// Memory Usage: 33.4 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number} num
//  * @return {number}
//  */
// const maximum69Number = num => {
//   let x = 10 ** Math.trunc(Math.log10(Math.abs(num)));
//   while (0 < x) {
//     if (num % (x * 10) < 9 * x) return num + 3 * x;
//     x = Math.trunc(x / 10);
//   }
//   return num;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 20.04% of JavaScript online submissions
// Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number} num
//  * @return {number}
//  */
// const maximum69Number = num => +('' + num).replace('6', '9');

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 72 ms, faster than 22.70% of JavaScript online submissions
// Memory Usage: 33.5 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number} num
//  * @return {number}
//  */
// const maximum69Number = num => +('' + num).replace(6, 9);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 144 ms, faster than 5.01% of JavaScript online submissions
// Memory Usage: 38.5 MB, less than 62.87% of JavaScript online submissions

// /**
//  * @param {number} num
//  * @return {number}
//  */
// const maximum69Number = num => Number(`${num}`.replace(6, 9));

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 84.11% of JavaScript online submissions
// Memory Usage: 38.8 MB, less than 16.93% of JavaScript online submissions

// /**
//  * @param {number} num
//  * @return {number}
//  */
// const maximum69Number = num => {
//   let tmp = num;
//   let tmp2 = 3;
//   let addend = 0;
//   while (0 < tmp) {
//     // console.log(tmp % 10);
//     if (6 === tmp % 10) addend = tmp2;
//     tmp = Math.trunc(tmp / 10);
//     tmp2 *= 10;
//   }
//   return num + addend;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 108 ms, faster than 5.01% of JavaScript online submissions
// Memory Usage: 38.3 MB, less than 93.96% of JavaScript online submissions

// /**
//  * @param {number} num
//  * @return {number}
//  */
// const maximum69Number = num => {
//   let [cntDown, cntUp, addend] = [num, 3, 0];
//   while (0 < cntDown) {
//     if (6 === cntDown % 10) addend = cntUp;
//     [cntDown, cntUp] = [Math.trunc(cntDown / 10), cntUp * 10];
//   }
//   return num + addend;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 72 ms, faster than 95.34% of JavaScript online submissions
// Memory Usage: 38.6 MB, less than 62.87% of JavaScript online submissions

/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number = num => {
  // Count down by "chopping off" the last digit from a copy of `num`
  // Count up by by powers of ten (10 ** n) times three (3, 30, 300, etc.)
  // Addend will be added to `num` (as the augend) as return value
  let [cntDown, cntUp, addend] = [num, 3, 0];
  // Keep chopping numbers off the end of `cntDown`
  while (0 < cntDown) {
    // If the digit about to be chopped off is a "6",
    // then remember where we are in counting up by powers of ten times three
    if (6 === cntDown % 10) addend = cntUp;
    // Count down by chopping off the last digit
    // Count up by power of ten times three
    [cntDown, cntUp] = [Math.trunc(cntDown / 10), cntUp * 10];
  }
  // Add that last power of ten times three to the original `num`
  return num + addend;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1
strictEqual(maximum69Number(9669), 9969);
// Explanation:
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.

// Example 2
strictEqual(maximum69Number(9996), 9999);
// Explanation: Changing the last digit 6 to 9 results in the maximum number.

// Example 3
strictEqual(maximum69Number(9999), 9999);
// Explanation: It is better not to apply any change.
