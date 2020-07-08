// 1491. Average Salary Excluding the Minimum and Maximum Salary
// https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/

/*

Given an array of unique integers salary where salary[i] is the salary of the
employee i.

Return the average salary of employees excluding the minimum and maximum salary.

Constraints:
- 3 <= salary.length <= 100
- 10^3 <= salary[i] <= 10^6
- salary[i] is unique.
- Answers within 10^-5 of the actual value will be accepted as correct.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 104 ms, faster than 10.98% of JavaScript online submissions
// Memory Usage: 33 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} salary
//  * @return {number}
//  */
// const average = salary =>
//   salary
//     .sort((a, b) => a - b)
//     .slice(1, -1)
//     .reduce((acc, curr) => acc + curr) /
//   (salary.length - 2);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 88 ms, faster than 30.79% of JavaScript online submissions
// Memory Usage: 32.4 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} salary
 * @return {number}
 */
const average = salary =>
  salary.reduce(
    (acc, curr) => acc + curr,
    0 - Math.min(...salary) - Math.max(...salary),
  ) /
  (salary.length - 2);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(average([4000, 3000, 1000, 2000]), 2500.0);
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000)/2= 2500

// Example 2:
strictEqual(average([1000, 2000, 3000]), 2000.0);
// Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
// Average salary excluding minimum and maximum salary is (2000)/1= 2000

// Example 3:
strictEqual(average([6000, 5000, 4000, 3000, 2000, 1000]), 3500.0);

// Example 4:
strictEqual(average([8000, 9000, 2000, 3000, 6000, 1000]), 4750.0);
