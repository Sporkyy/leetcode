// 621. Task Scheduler
// https://leetcode.com/problems/task-scheduler/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string[]} tasks
//  * @param {number} n
//  * @return {number}
//  */
// const leastInterval = (tasks, n) => {
//   const buckets = new Array(26).fill(0);
//   for (let c of tasks) buckets[c.charCodeAt(0) - 65]++;
//   // console.log(buckets);
//   const map = new Map(buckets.map((e, i) => [String.fromCharCode(65 + i), e]));
//   // console.log(map);
//   const sorted = [...map.entries()]
//     .sort(([, cntA], [, cntB]) => cntB - cntA)
//     .filter(([, cnt]) => 0 < cnt);
//   // console.log(sorted);
//   const lastInt = new Array(buckets.length).fill(-Infinity);
//   let tasksCnt = tasks.length;
//   const intervals = [];
//   while (tasksCnt) {
//     for (let i = 0; i < sorted.length; i++) {
//       // console.log(`${lastInt[i]} + ${n} < ${intervals.length}`);
//       if (lastInt[i] + n < intervals.length && 0 < sorted[i][1]) {
//         // if (0 < sorted[i][1]) {
//         lastInt[i] = intervals.length;
//         intervals.push(sorted[i][0]);
//         tasksCnt--;
//         sorted[i][1]--;
//       } else {
//         intervals.push('idle');
//         break;
//       }
//     }
//   }
//   // console.log(sorted);
//   // console.log(lastInt);
//   console.log(intervals);
//   return intervals.length;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = (tasks, n) => {
  const buckets = new Array(26).fill(0);
  for (let c of tasks) buckets[c.charCodeAt(0) - 65]++;
  // console.log(buckets);
  const map = new Map(buckets.map((e, i) => [String.fromCharCode(65 + i), e]));
  // console.log(map);
  // console.log([...map.entries()].map(([task]) => [task, Infinity]));
  const last = new Map([...map.entries()].map(([task]) => [task, -Infinity]));
  // console.log(last);
  let taskCntDwn = tasks.length;
  const intervals = [];
  while (taskCntDwn) {
    let x;
    for (let [task, cnt] of map) {
      if (0 < cnt && last.get(task) + n < intervals.length) {
        // if (0 < cnt) {
        x = task;
        map.set(task, cnt - 1);
        last.set(task, intervals.length);
        taskCntDwn--;
        break;
      }
    }
    intervals.push(x || 'idle');
  }
  // console.log(map);
  // console.log(last);
  // console.log(intervals);
  return intervals.length;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2), 8);
// Explanation: Ⓐ ➡ Ⓑ ➡ □ ➡ Ⓐ ➡ Ⓑ ➡ □ ➡ Ⓐ ➡ Ⓑ
// 0: A=-1, B=-1
// 1: A=0, B=-1
// 2: A=0, B=1
// 3: A=0 B=1
// 4: A= B=
// 5: A= B=
// 6: A= B=
// 7: A= B=
// 8: A= B=

strictEqual(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 50), 104);
// Explanation
// Ⓐ ➡ Ⓑ
// □ ✖️49
// Ⓐ ➡ Ⓑ
// □ ✖️49
// Ⓐ ➡ Ⓑ

strictEqual(
  leastInterval(
    ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
    2,
  ),
  16,
);
// Ⓐ ➡ Ⓑ ➡ Ⓒ ➡ Ⓐ ➡ Ⓓ ➡ Ⓔ ➡ Ⓐ ➡ Ⓕ ➡ Ⓖ ➡ Ⓐ ➡ □ ➡ □ ➡ Ⓐ ➡ □ ➡ □ ➡ Ⓐ
