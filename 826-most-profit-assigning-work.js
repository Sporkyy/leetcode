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

/**
 * @param {number[]} difficulties
 * @param {number[]} profits
 * @param {number[]} workers
 * @return {number}
 */
const maxProfitAssignment = (difficulties, profits, workers) => {
  const tmp = new Map();
  for (let i = 0; i < difficulties.length; i++) {
    const [difficulty, profit] = [difficulties[i], profits[i]];
    tmp.set(difficulty, Math.max(profit, tmp.get(difficulty) || 0));
  }
  console.log(tmp);
  let max = 0;
  for (const [difficulty, profit] of [...tmp].sort(([a], [b]) => a - b)) {
    tmp.set(difficulty, (max = Math.max(max, profit)));
  }
  console.log(tmp);
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
