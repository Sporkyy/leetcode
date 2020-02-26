// 1360. Number of Days Between Two Dates
// https://leetcode.com/problems/number-of-days-between-two-dates/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const daysInMonth = (m, y) =>
//   ({
//     1: 31,
//     2: 28,
//     3: 31,
//     4: 30,
//     5: 31,
//     6: 30,
//     7: 31,
//     8: 31,
//     9: 30,
//     10: 31,
//     11: 30,
//     12: 31,
//   }[m]);

// const isLeapYear = y => {};
// const daysToEOY = d => {};
// const daysSinceBOY = d => {};

// /**
//  * @param {string} date1
//  * @param {string} date2
//  * @return {number}
//  */
// const daysBetweenDates = (date1, date2) => {
//   if (date2.replace(/-/g, '') < date1.replace(/-/g, ''))
//     return daysBetweenDates(date2, date1);
//   const [year1, month1, day1] = date1.split('-').map(Number);
//   console.log(year1, month1, day1);
//   const [year2, month2, day2] = date2.split('-').map(Number);
//   console.log(year2, month2, day2);
//   // Years, Leap years, Months, Days
//   // const [years, days] = [year2 - year1, day2 - day1];
//   // let months = [];
//   // for (let i = month1 + 1; i < month2; i++) months.push(i);
//   // console.log(months);
//   const [years, months, days] = [[], [], []];
//   for (let i = year1 + 1; i < year2; i++) years.push(i);
//   console.log(years);
//   for (let i = month1 + 1; i <= 12; i++) months.push(i);
//   console.log(months);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 48.02% of JavaScript online submissions
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
const daysBetweenDates = (date1, date2) =>
  Math.abs(Date.parse(date1) - Date.parse(date2)) / 86400000;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

strictEqual(daysBetweenDates('2019-06-29', '2019-06-30'), 1);

strictEqual(daysBetweenDates('2020-01-15', '2019-12-31'), 15);

strictEqual(
  daysBetweenDates('2020-02-26', '1980-09-11'),
  daysBetweenDates('1980-09-11', '2020-02-26'),
);
