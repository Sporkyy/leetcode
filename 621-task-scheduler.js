// 621. Task Scheduler
// https://leetcode.com/problems/task-scheduler/

/*

Given a char array representing tasks CPU need to do. It contains capital
letters A to Z where different letters represent different tasks. Tasks could be
done without original order. Each task could be done in one interval. For each
interval, CPU could finish one task or just be idle.

However, there is a non-negative cooling interval n that means between two same
tasks, there must be at least n intervals that CPU are doing different tasks or
just be idle.

You need to return the least number of intervals the CPU will take to finish all
the given tasks.

Constraints:

- The number of tasks is in the range [1, 10000].
- The integer n is in the range [0, 100].

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {character[]} tasks
//  * @param {number} n
//  * @return {number}
//  */
// const leastInterval = (tasks, n) => {
//   if (0 === n) return tasks.length;
//   const cnts = new Array(26).fill(0);
//   for (const task of tasks) cnts[task.charCodeAt(0) - 65]++;
//   const width = n + 1;
//   const height = Math.max(...cnts);
//   console.log(height);
//   const maxCnt = cnts.filter(cnt => height === cnt).length;
//   console.log(maxCnt);
//   let res = height * maxCnt;
//   console.log(res);
//   const remainingTasks = tasks.length - res;
//   console.log(remainingTasks);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {character[]} tasks
//  * @param {number} n
//  * @return {number}
//  */
// const leastInterval = (tasks, n) => {
//   if (0 === n) return tasks.length;
//   const cnts = new Array(26).fill(0);
//   for (const task of tasks) cnts[task.charCodeAt(0) - 65]++;
//   const max = Math.max(...cnts);
//   const maxCnt = cnts.filter(cnt => max === cnt).length;
//   console.log(maxCnt);
//   let intervals = max * maxCnt;
//   console.log(intervals);
//   const intervalMax = max * (n + 1);
//   console.log(intervalMax);
//   if (intervals === intervalMax) return intervals;
//   // console.log((max - 1) * n);
//   // intervals += (max - 1) * n;
//   // console.log(intervals);
//   return intervals;

//   // const remainingTasks = tasks.length - max;
//   // console.log(remainingTasks);
//   // const width = n + 1;
//   // console.log(height);
//   // const maxCnt = cnts.filter(cnt => height === cnt).length;
//   // console.log(maxCnt);
//   // let res = height * maxCnt;
//   // console.log(res);
//   // const remainingTasks = tasks.length - res;
//   // console.log(remainingTasks);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {character[]} tasks
//  * @param {number} n
//  * @return {number}
//  */
// const leastInterval = (tasks, n) => {
//   if (0 === n) return tasks.length;
//   const cnts = new Array(26).fill(0);
//   for (const task of tasks) cnts[task.charCodeAt(0) - 65]++;
//   const max = Math.max(...cnts);
//   console.log(max);
//   const maxCnt = cnts.filter(cnt => max === cnt).length;
//   console.log(maxCnt);
//   let filled = max * maxCnt;
//   console.log(filled);
//   let empty = max * (n + 1 - maxCnt);
//   console.log(empty);
//   if (!empty) return filled;
//   console.log(tasks.length - max * maxCnt);
//   filled += tasks.length - max * maxCnt;
//   empty -= tasks.length - max * maxCnt;
//   console.log(`${filled}/${empty}`);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 92 ms, faster than 90.12% of JavaScript online submissions
// Memory Usage: 41.8 MB, less than 29.67% of JavaScript online submissions

// /**
//  * @param {character[]} tasks
//  * @param {number} n
//  * @return {number}
//  */
// const leastInterval = (tasks, n) => {
//   // if (0 === n) return tasks.length;
//   const cnts = new Array(26).fill(0);
//   for (const task of tasks) cnts[task.charCodeAt(0) - 65]++;
//   const max = Math.max(...cnts);
//   // console.log(max);
//   const maxCnt = cnts.filter(cnt => max === cnt).length;
//   // console.log(maxCnt);
//   let intervals = max * maxCnt;
//   // console.log(intervals);
//   const [rows, cols] = [max - 1, n - maxCnt + 1];
//   // console.log(rows, cols);
//   intervals += rows * cols;
//   // console.log(intervals);
//   if (intervals < tasks.length) intervals += tasks.length - intervals;
//   return intervals;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 120 ms, faster than 34.30% of JavaScript online submissions
// Memory Usage: 41.7 MB, less than 29.88% of JavaScript online submissions

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = (tasks, n) => {
  const cnts = new Array(26).fill(0);
  for (const task of tasks) cnts[task.charCodeAt(0) - 65]++;
  const max = Math.max(...cnts);
  const maxCnt = cnts.filter(cnt => max === cnt).length;
  let intervals = max * maxCnt + (max - 1) * (n - maxCnt + 1);
  if (intervals < tasks.length) intervals += tasks.length - intervals;
  return intervals;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

strictEqual(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 0), 6);
/*
| A | B |
| A | B |
| A | B |
*/

strictEqual(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 1), 6);
/*
| A | B |
| A | B |
| A | B |
*/

strictEqual(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2), 8);
/*
| A | B | # |
| A | B | # |
| A | B |   |
*/

strictEqual(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 3), 10);
/*
| A | B | # | # |
| A | B | # | # |
| A | B |   |   |
*/

// strictEqual(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 50), 104);
/*
| A | B | # x 49 |
| A | B | # x 49 |
| A | B |        |
*/

strictEqual(
  leastInterval(
    ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
    2,
  ),
  16,
);
/*
| A | B | G |
| A | C | # |
| A | D | # |
| A | E | # |
| A | F | # |
| A |   |   |
*/

strictEqual(leastInterval(['A', 'A', 'B', 'B', 'C', 'D', 'E'], 2), 7);
/*
| A | B | C |
| A | B | D |
| E |
*/
