// 1507. Reformat Date
// https://leetcode.com/problems/reformat-date/

/*

Given a date string in the form Day Month Year, where:

- Day is in the set {"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}.
- Month is in the set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
  "Sep", "Oct", "Nov", "Dec"}.
- Year is in the range [1900, 2100].
- Convert the date string to the format YYYY-MM-DD, where:

- YYYY denotes the 4 digit year.
- MM denotes the 2 digit month.
- DD denotes the 2 digit day.

Constraints:
- The given dates are guaranteed to be valid, so no error handling is necessary.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 61.09% of JavaScript online submissions
// Memory Usage: 37.1 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} date
 * @return {string}
 */
const reformatDate = date =>
  date
    .split(' ')
    .map(
      (part, i) =>
        ({
          Jan: '01',
          Feb: '02',
          Mar: '03',
          Apr: '04',
          May: '05',
          Jun: '06',
          Jul: '07',
          Aug: '08',
          Sep: '09',
          Oct: '10',
          Nov: '11',
          Dec: '12',
        }[part] || `${Number.parseInt(part)}`.padStart(2, '0')),
    )
    .reverse()
    .join('-');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(reformatDate('20th Oct 2052'), '2052-10-20');

// Example 2:
strictEqual(reformatDate('6th Jun 1933'), '1933-06-06');

// Example 3:
strictEqual(reformatDate('26th May 1960'), '1960-05-26');
