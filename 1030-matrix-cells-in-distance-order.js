// 1030. Matrix Cells in Distance Order
// https://leetcode.com/problems/matrix-cells-in-distance-order/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 176 ms, faster than 71.19% of JavaScript online submissions for Matrix Cells in Distance Order.
// Memory Usage: 52.1 MB, less than 100.00% of JavaScript online submissions for Matrix Cells in Distance Order.

const cellsWithDistance = (R, C, r0, c0) => {
  const answer = [];
  for (let i = 0; i <= R - 1; i++) {
    for (let j = 0; j <= C - 1; j++) {
      answer.push([i, j, Math.abs(r0 - i) + Math.abs(c0 - j)]);
    }
  }
  return answer;
};

/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
const allCellsDistOrder = (R, C, r0, c0) => {
  const cells = cellsWithDistance(R, C, r0, c0);
  // console.log(cells);
  const sorted = cells.sort((a, b) => (a[2] < b[2] ? -1 : b[2] < a[2] ? 1 : 0));
  // console.log(sorted);
  const answer = sorted.map(cellWithDistance => [cellWithDistance[0], cellWithDistance[1]]);
  // console.log(answer);
  return answer;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    // [0, 0], [0, 1]
    input: {
      R: 1,
      C: 2,
      r0: 0,
      c0: 0,
    },
    expected: [[0, 0], [0, 1]],
  },
  {
    name: 'Example 2',
    // [0, 0], [0, 1]
    // [1, 0], [1, 1]
    input: {
      R: 2,
      C: 2,
      r0: 0,
      c0: 1,
    },
    expected: [[0, 1], [0, 0], [1, 1], [1, 0]],
  },
  {
    name: 'Example 3',
    // [0, 0], [0, 1], [0, 2]
    // [1, 0], [1, 1], [1, 2]
    input: {
      R: 2,
      C: 3,
      r0: 1,
      c0: 2,
    },
    expected: [[1, 2], [0, 2], [1, 1], [0, 1], [1, 0], [0, 0]],
  },
];

const areArraysEqual = (a1, a2) => a1.length === a2.length && a1.toString() === a2.toString();

tests.forEach(({ name, input: { R, C, r0, c0 }, expected }) => {
  const output = allCellsDistOrder(R, C, r0, c0);
  if (areArraysEqual(expected, output)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
});
