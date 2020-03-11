// 1185. Day of the Week
// https://leetcode.com/problems/day-of-the-week/

/*

Given a date, return the corresponding day of the week for that date.

The input is given as three integers representing the day, month and year
respectively.

Return the answer as one of the following values {"Sunday", "Monday", "Tuesday",
"Wednesday", "Thursday", "Friday", "Saturday"}.

Constraints:
- The given dates are valid dates between the years 1971 and 2100.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 73.79% of JavaScript online submissions
// Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
const dayOfTheWeek = (day, month, year) =>
  [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ][new Date(`${year}-${month}-${day}`).getDay()];

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(dayOfTheWeek(31, 8, 2019), 'Saturday');

// Example 2:
strictEqual(dayOfTheWeek(18, 7, 1999), 'Sunday');

// Example 3:
strictEqual(dayOfTheWeek(15, 8, 1993), 'Sunday');
