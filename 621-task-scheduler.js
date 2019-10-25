// 621. Task Scheduler
// https://leetcode.com/problems/task-scheduler/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = (tasks, n) => {
  const buckets = new Array(26).fill(0);
  for (let c of tasks) buckets[c.charCodeAt(0) - 65]++;
  console.log(buckets);
  const map = new Map(buckets.map((e, i) => [String.fromCharCode(65 + i), e]));
  console.log(map);
  const sorted = [...map.entries()]
    .sort(([, cntA], [, cntB]) => cntB - cntA)
    .filter(([, cnt]) => 0 < cnt);
  console.log(sorted);
  const lastInt = new Array(26);
  let tasksCnt = 0;
  const intervals = [];
  return intervals.length;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

// strictEqual(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2), 8);
// Explanation: Ⓐ ➡ Ⓑ ➡ idle ➡ Ⓐ ➡ Ⓑ ➡ idle ➡ Ⓐ ➡ Ⓑ

// strictEqual(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 50), 104);

strictEqual(
  leastInterval(
    ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
    2,
  ),
  16,
);
// Ⓐ ➡ Ⓑ ➡ Ⓒ ➡ Ⓐ ➡ Ⓓ ➡ Ⓔ ➡ Ⓐ ➡ Ⓕ ➡ Ⓖ ➡ Ⓐ ➡ i ➡ i ➡ Ⓐ ➡ i ➡ i ➡ Ⓐ
