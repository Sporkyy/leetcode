// 1029. Two City Scheduling
// https://leetcode.com/problems/two-city-scheduling/

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

strictEqual(
  twoCitySchedCost([
    [10, 20],
    [30, 200],
    [50, 400],
    [20, 30],
  ]),
  130,
);

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
