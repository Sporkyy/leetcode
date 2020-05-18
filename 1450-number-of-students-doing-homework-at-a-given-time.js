// 1450. Number of Students Doing Homework at a Given Time
// https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/

/*

Given two integer arrays startTime and endTime and given an integer queryTime.

The ith student started doing their homework at the time startTime[i] and
finished it at time endTime[i].

Return the number of students doing their homework at time queryTime. More
formally, return the number of students where queryTime lays in the interval
[startTime[i], endTime[i]] inclusive.

Constraints:
- startTime.length == endTime.length
- 1 <= startTime.length <= 100
- 1 <= startTime[i] <= endTime[i] <= 1000
- 1 <= queryTime <= 1000

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 83.42% of JavaScript online submissions
// Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
const busyStudent = (startTime, endTime, queryTime) =>
  startTime.filter((s, i) => s <= queryTime && queryTime <= endTime[i]).length;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(busyStudent([1, 2, 3], [3, 2, 7], 4), 1);
// Explanation: We have 3 students where:
// The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
// The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
// The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.

// Example 2:
strictEqual(busyStudent([4], [4], 4), 1);
// Explanation: The only student was doing their homework at the queryTime.

// Example 3:
strictEqual(busyStudent([4], [4], 5), 0);

// Example 4:
strictEqual(busyStudent([1, 1, 1, 1], [1, 3, 2, 4], 7), 0);

// Example 5:
strictEqual(
  busyStudent(
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [10, 10, 10, 10, 10, 10, 10, 10, 10],
    5,
  ),
  5,
);
