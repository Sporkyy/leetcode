// 826. Most Profit Assigning Work
// https://leetcode.com/problems/most-profit-assigning-work/

/*

We have jobs: difficulty[i] is the difficulty of the ith job, and profit[i] is
the profit of the ith job.

Now we have some workers. worker[i] is the ability of the ith worker, which
means that this worker can only complete a job with difficulty at most
worker[i].

Every worker can be assigned at most one job, but one job can be completed
multiple times.

For example, if 3 people attempt the same job that pays $1, then the total
profit will be $3.  If a worker cannot complete any job, his profit is $0.

What is the most profit we can make?

## Notes
- 1 <= difficulty.length = profit.length <= 10000
- 1 <= worker.length <= 10000
- difficulty[i], profit[i], worker[i]  are in range [1, 10^5]

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Time Limit Exceeded

// /**
//  * @param {number[]} difficulties
//  * @param {number[]} profits
//  * @param {number[]} workers
//  * @return {number}
//  */
// const maxProfitAssignment = (difficulties, profits, workers) => {
//   const tmp = new Map();
//   let min = Infinity;
//   for (let i = 0; i < difficulties.length; i++) {
//     const [difficulty, profit] = [difficulties[i], profits[i]];
//     tmp.set(difficulty, Math.max(profit, tmp.get(difficulty) || 0));
//     min = Math.min(min, difficulty);
//   }
//   // console.log(tmp);
//   const sorted = [...tmp].sort(([a], [b]) => a - b);
//   // console.log(sorted);
//   let max = -Infinity;
//   const x = sorted.map(([difficulty, profit]) => [
//     difficulty,
//     (max = Math.max(max, profit)),
//   ]);
//   // console.log(x);
//   const y = new Map(x);
//   // console.log(y);
//   let sum = 0;
//   outer: for (const ability of workers) {
//     // console.log(ability);
//     if (ability < min) continue;
//     if (y.has(ability)) sum += y.get(ability);
//     else {
//       for (const [difficulty, profit] of [...y].sort(([a], [b]) => b - a)) {
//         // console.log(ability, difficulty, profit);
//         if (difficulty < ability) {
//           sum += profit;
//           y.set(ability, profit);
//           continue outer;
//         }
//       }
//     }
//   }
//   return sum;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 4808 ms, faster than 7.14% of JavaScript online submissions
// Memory Usage: 43.5 MB, less than 78.57% of JavaScript online submissions

// /**
//  * @param {number[]} difficulties
//  * @param {number[]} profits
//  * @param {number[]} workers
//  * @return {number}
//  */
// const maxProfitAssignment = (difficulties, profits, workers) => {
//   let sum = 0;
//   for (const ability of workers) {
//     let max = 0;
//     for (let i = 0; i < difficulties.length; i++) {
//       const [difficulty, profit] = [difficulties[i], profits[i]];
//       if (difficulty <= ability) max = Math.max(max, profit);
//     }
//     sum += max;
//   }
//   return sum;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 3528 ms, faster than 7.14% of JavaScript online submissions
// Memory Usage: 43 MB, less than 92.86% of JavaScript online submissions

// /**
//  * @param {number[]} difficulties
//  * @param {number[]} profits
//  * @param {number[]} workers
//  * @return {number}
//  */
// const maxProfitAssignment = (difficulties, profits, workers) => {
//   const wages = new Array(workers.length).fill(0);
//   for (let i = 0; i < difficulties.length; i++)
//     for (let j = 0; j < workers.length; j++)
//       if (difficulties[i] <= workers[j] && wages[j] < profits[i])
//         wages[j] = profits[i];
//   return wages.reduce((acc, curr) => acc + curr);
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 1096 ms, faster than 25.00% of JavaScript online submissions
// Memory Usage: 46.1 MB, less than 57.14% of JavaScript online submissions

// /**
//  * @param {number[]} difficulties
//  * @param {number[]} profits
//  * @param {number[]} workers
//  * @return {number}
//  */
// const maxProfitAssignment = (difficulties, profits, workers) => {
//   const sorted = new Array(difficulties.length);
//   for (let i = 0; i < sorted.length; i++)
//     sorted[i] = [difficulties[i], profits[i]];
//   sorted.sort(([a], [b]) => a - b);
//   // console.log(sorted);
//   let max = 0;
//   for (let i = 0; i < sorted.length; i++)
//     sorted[i][1] = max = Math.max(sorted[i][1], max);
//   // console.log(max);
//   // console.log(sorted);
//   let sum = 0;
//   for (const ability of workers) {
//     let wage = 0;
//     for (let i = 0; i < sorted.length; i++) {
//       if (ability < sorted[i][0]) break;
//       wage = sorted[i][1];
//     }
//     sum += wage;
//   }
//   return sum;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 604 ms, faster than 28.57% of JavaScript online submissions
// Memory Usage: 46.3 MB, less than 53.57% of JavaScript online submissions

/**
 * @param {number[]} d
 * @param {number[]} p
 * @param {number[]} w
 * @return {number}
 */
const maxProfitAssignment = (d, p, w) => {
  const x = new Array(d.length);
  for (let i = 0; i < x.length; i++) x[i] = [d[i], p[i]];
  x.sort(([ad, ap], [bd, bp]) => bp - ap || bd - ad);
  // console.log(x);
  let sum = 0;
  for (const ability of w) {
    let i = 0;
    while (i < x.length && ability < x[i][0]) i++;
    // console.log(x[i]);
    if (!x[i]) continue;
    // console.log(ability, x[i][0]);
    sum += x[i][1];
  }
  return sum;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(
  maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7]),
  100,
);
// Explanation: Workers are assigned jobs of difficulty [4,4,6,6] and they get
// profit of [20,20,30,30] separately.

strictEqual(
  maxProfitAssignment(
    [68, 35, 52, 47, 86],
    [67, 17, 1, 81, 3],
    [92, 10, 85, 84, 82],
  ),
  324,
);

/*

| 35 | 47 | 52 | 68 | 86 |
| 17 | 81 |  1 | 67 |  3 |

*/
