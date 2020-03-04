// 1154. Day of the Year
// https://leetcode.com/problems/day-of-the-year/

/*

Given a string date representing a Gregorian calendar date formatted as
YYYY-MM-DD, return the day number of the year.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 89.84% of JavaScript online submissions
// Memory Usage: 34.5 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} date
//  * @return {number}
//  */
// const dayOfYear = date =>
//   (Date.parse(date) - Date.parse(`${new Date(date).getFullYear()}-01-01`)) /
//     86400000 +
//   1;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 58.59% of JavaScript online submissions
// Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} date
 * @return {number}
 */
const dayOfYear = date =>
  (Date.parse(date) - Date.parse(`${date.slice(0, 4)}-01-01`)) / 86400000 + 1;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(dayOfYear('2019-01-09'), 9);
// Explanation: Given date is the 9th day of the year in 2019.

// Example 2:
strictEqual(dayOfYear('2019-02-10'), 41);

// Example 3:
strictEqual(dayOfYear('2003-03-01'), 60);

// Example 4:
strictEqual(dayOfYear('2004-03-01'), 61);
