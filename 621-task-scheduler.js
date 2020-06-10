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

// /**
//  * @param {character[]} tasks
//  * @param {number} n
//  * @return {number}
//  */
// const leastInterval = (tasks, n) => {
//   const cnts = new Array(26).fill(0);
//   for (const task of tasks) cnts[task.charCodeAt(0) - 65]++;
//   const max = Math.max(...cnts);
//   const maxCnt = cnts.filter(cnt => max === cnt).length;
//   let intervals = max * maxCnt + (max - 1) * (n - maxCnt + 1);
//   if (intervals < tasks.length) intervals += tasks.length - intervals;
//   return intervals;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 164 ms, faster than 19.08% of JavaScript online submissions
// Memory Usage: 48.9 MB, less than 8.71% of JavaScript online submissions

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = (tasks, n) => {
  const map = new Map();

  for (const task of tasks)
    if (map.has(task)) map.get(task).push(task);
    else map.set(task, [task]);

  // console.log(map);

  const sorted = [...map.values()]
    .sort(({ length: a }, { length: b }) => b - a)
    .reduce((acc, curr) => acc.concat(curr));

  // console.log(sorted);

  const max = Math.max(...[...map.values()].map(({ length: l }) => l));

  // console.log(max);

  const rows = [];
  // let rows = [];

  while (sorted.length) {
    const row = sorted.splice(0, max - (sorted[0] === sorted[max - 1] ? 0 : 1));
    // if (6 === row.length && row[0] !== row[max - 1]) sorted.push(row.pop());
    rows.push(row);
  }

  // console.log(rows);
  // rows = [['A', 'A'], ['B'], ['C']];

  const rotated = new Array(max).fill().map(_ => []);

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rotated.length; j++) {
      rotated[j].push(rows[i][j]);
    }
  }

  // console.log(rotated);

  const joined = rotated.map(r => r.join(''));

  // console.log(joined);

  const padded = joined.map((r, i) =>
    i === max - 1 ? r : r.padEnd(n + 1, '#'),
  );

  // console.log(padded);

  const final = padded.join('');

  // console.log(final);

  return final.length;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

strictEqual(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 0), 6);
// /*
// | A | B |
// | A | B |
// | A | B |
// */

strictEqual(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 1), 6);
// /*
// | A | B |
// | A | B |
// | A | B |
// */

strictEqual(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2), 8);
// /*
// | A | B | # |
// | A | B | # |
// | A | B |   |
// */

strictEqual(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 3), 10);
// /*
// | A | B | # | # |
// | A | B | # | # |
// | A | B |   |   |
// */

strictEqual(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 50), 104);
// /*
// | A | B | # x 49 |
// | A | B | # x 49 |
// | A | B |        |
// */

strictEqual(
  leastInterval(
    ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
    2,
  ),
  16,
);
// /*
// | A | B | G |
// | A | C | # |
// | A | D | # |
// | A | E | # |
// | A | F | # |
// | A |   |   |
// */

strictEqual(leastInterval(['A', 'A', 'B', 'B', 'C', 'D', 'E'], 2), 7);
// /*
// | A | B | C | E |
// | A | B | D |   |
// */

strictEqual(
  leastInterval(['A', 'A', 'A', 'B', 'B', 'B', 'C', 'D', 'D', 'D'], 2),
  10,
);
// /*
// | A | B | D | C |
// | A | B | D |   |
// | A | B | D |   |
// */

strictEqual(
  leastInterval(
    [
      'A',
      'A',
      'A',
      'A',
      'B',
      'B',
      'B',
      'B',
      'C',
      'C',
      'C',
      'C',
      'D',
      'D',
      'D',
      'D',
      'E',
      'F',
    ],
    4,
  ),
  19,
);
// /*
// | A | B | C | D | E |
// | A | B | C | D | F |
// | A | B | C | D | # |
// | A | B | C | D |   |
// */

strictEqual(leastInterval(['A', 'B', 'C', 'A'], 2), 4);
/*
| A | B | C |
| A |   |   |
*/
