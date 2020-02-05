// 1029. Two City Scheduling
// https://leetcode.com/problems/two-city-scheduling/

/*

There are 2N people a company is planning to interview.
The cost of flying the i-th person to city A is costs[i][0],
and the cost of flying the i-th person to city B is costs[i][1].

Return the minimum cost to fly every person to a city such that
exactly N people arrive in each city.

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 67.97% of JavaScript online submissions
// Memory Usage: 34.8 MB, less than 41.67% of JavaScript online submissions

/**
 * @param {number[][]} costs
 * @return {number}
 */
const twoCitySchedCost = costs =>
  costs
    .sort((a, b) => a[0] - a[1] - (b[0] - b[1]))
    .reduce((a, c, i) => (a += i < costs.length / 2 ? c[0] : c[1]), 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(
  twoCitySchedCost([
    [10, 20],
    [30, 200],
    [400, 50],
    [30, 20],
  ]),
  110,
);

// Explanation:
//   The first person goes to city A for a cost of 10.
//   The second person goes to city A for a cost of 30.
//   The third person goes to city B for a cost of 50.
//   The fourth person goes to city B for a cost of 20.
// The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people
// interviewing in each city.

strictEqual(
  twoCitySchedCost([
    [10, 20],
    [30, 200],
    [50, 400],
    [20, 30],
  ]),
  130,
);

// 0: B: 20
// 1: A: 30
// 2: A: 50
// 3: B: 30

strictEqual(
  twoCitySchedCost([
    [259, 770],
    [448, 54],
    [926, 667],
    [184, 139],
    [840, 118],
    [577, 469],
  ]),
  1859,
);
