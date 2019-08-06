// 1029. Two City Scheduling
// https://leetcode.com/problems/two-city-scheduling/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 67.97% of JavaScript online submissions
// for Two City Scheduling.
// Memory Usage: 34.8 MB, less than 41.67% of JavaScript online submissions
// for Two City Scheduling.

/**
 * @param {number[][]} costs
 * @return {number}
 */
const twoCitySchedCost = costs =>
  costs
    .sort((a, b) => a[0] - a[1] - (b[0] - b[1]))
    .reduce((a, c, i) => (a += i < costs.length / 2 ? c[0] : c[1]), 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  // | 10 |  30  | 400 | 30
  // | 20 | 200  |  50 | 20
  // Explanation:
  // The first person goes to city A for a cost of 10.
  // The second person goes to city A for a cost of 30.
  // The third person goes to city B for a cost of 50.
  // The fourth person goes to city B for a cost of 20.

  {
    input: [[10, 20], [30, 200], [400, 50], [30, 20]],
    expected: 110,
  },

  {
    input: [[10, 20], [30, 200], [50, 400], [20, 30]],
    expected: 130,
  },

  {
    input: [[259, 770], [448, 54], [926, 667], [184, 139], [840, 118], [577, 469]],
    expected: 1859,
  },
];

for (let { input, expected } of tests) {
  const output = twoCitySchedCost(input);
  if (output === expected) {
    console.log(`✅ ${input}`);
  } else {
    console.log(`🔴 ${input}`);
    console.log(`Expected "${expected}" but got "${output}"`);
  }
}
