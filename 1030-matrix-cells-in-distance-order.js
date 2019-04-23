// 1030. Matrix Cells in Distance Order
// https://leetcode.com/problems/matrix-cells-in-distance-order/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 176 ms, faster than 71.19% of JavaScript online submissions for Matrix Cells in Distance Order.
// Memory Usage: 48.5 MB, less than 100.00% of JavaScript online submissions for Matrix Cells in Distance Order.

const distance = (originRow, originCol, hereRow, hereCol) =>
  Math.abs(originRow - hereRow) + Math.abs(originCol - hereCol);

const cellsWithDistance = (rowCount, colCount, specialRowIndex, specialColIndex) => {
  const result = new Array(rowCount * colCount);
  for (let i = 0, k = 0; i <= rowCount - 1; i++) {
    for (let j = 0; j <= colCount - 1; j++, k++) {
      result[k] = [i, j, distance(specialRowIndex, specialColIndex, i, j)];
    }
  }
  return result;
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
  const sorted = cells.sort((a, b) => (a[2] < b[2] ? -1 : b[2] < a[2] ? 1 : 0));
  const result = sorted.map(cellWithDistance => [cellWithDistance[0], cellWithDistance[1]]);
  return result;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 160 ms, faster than 94.07% of JavaScript online submissions for Matrix Cells in Distance Order.
// Memory Usage: 47.6 MB, less than 100.00% of JavaScript online submissions for Matrix Cells in Distance Order.

// /**
//  * @param {number} R
//  * @param {number} C
//  * @param {number} r0
//  * @param {number} c0
//  * @return {number[][]}
//  */
// const allCellsDistOrder = (R, C, r0, c0) => {
//   const distanceGroups = Array(R * C)
//     .fill()
//     .map(() => []);
//   for (let i = R - 1; 0 <= i; --i) {
//     for (let j = C - 1; 0 <= j; --j) {
//       distanceGroups[Math.abs(i - r0) + Math.abs(j - c0)].push([i, j]);
//     }
//   }
//   return [].concat(...distanceGroups);
// };

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
