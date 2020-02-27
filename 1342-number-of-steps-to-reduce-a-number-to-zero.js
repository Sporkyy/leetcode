// 1342. Number of Steps to Reduce a Number to Zero
// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

/*

Given a non-negative integer num, return the number of steps to reduce it to
zero. If the current number is even, you have to divide it by 2, otherwise, you
have to subtract 1 from it.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 33.13% of JavaScript online submissions
// Memory Usage: 34.4 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = (num, i = 0) =>
  0 === num ? i : numberOfSteps(0 === num % 2 ? num / 2 : num - 1, i + 1);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// console.log(numberOfSteps(7));
// console.log(numberOfSteps(8));
// console.log(numberOfSteps(9));

// console.log(numberOfSteps(13));
// console.log(numberOfSteps(14));
// console.log(numberOfSteps(15));

// console.log(numberOfSteps(122));
// console.log(numberOfSteps(123));
// console.log(numberOfSteps(124));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

strictEqual(numberOfSteps(8), 4);
// Explanation:
// Step 1) 8 is even; divide by 2 and obtain 4.
// Step 2) 4 is even; divide by 2 and obtain 2.
// Step 3) 2 is even; divide by 2 and obtain 1.
// Step 4) 1 is odd; subtract 1 and obtain 0.

strictEqual(numberOfSteps(14), 6);
// Explanation:
// Step 1) 14 is even; divide by 2 and obtain 7.
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3.
// Step 4) 3 is odd; subtract 1 and obtain 2.
// Step 5) 2 is even; divide by 2 and obtain 1.
// Step 6) 1 is odd; subtract 1 and obtain 0.

strictEqual(numberOfSteps(123), 12);

strictEqual(numberOfSteps(1), 1);

strictEqual(numberOfSteps(0), 0);
