// 1030. Matrix Cells in Distance Order
// https://leetcode.com/problems/matrix-cells-in-distance-order/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 176 ms, faster than 71.19% of JavaScript online submissions
// for Matrix Cells in Distance Order.
// Memory Usage: 48.5 MB, less than 100.00% of JavaScript online submissions
// for Matrix Cells in Distance Order.

// const distance = (originRow, originCol, hereRow, hereCol) =>
//   Math.abs(originRow - hereRow) + Math.abs(originCol - hereCol);

// const cellsWithDistance = (rowCount, colCount, specialRowIndex, specialColIndex) => {
//   const result = new Array(rowCount * colCount);
//   for (let i = 0, k = 0; i <= rowCount - 1; i++) {
//     for (let j = 0; j <= colCount - 1; j++, k++) {
//       result[k] = [i, j, distance(specialRowIndex, specialColIndex, i, j)];
//     }
//   }
//   return result;
// };

/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
// const allCellsDistOrder = (R, C, r0, c0) => {
//   const cells = cellsWithDistance(R, C, r0, c0);
//   const sorted = cells.sort((a, b) => (a[2] < b[2] ? -1 : b[2] < a[2] ? 1 : 0));
//   const result = sorted.map(cellWithDistance => [cellWithDistance[0], cellWithDistance[1]]);
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 376 ms, faster than 5.90% of JavaScript online submissions
// for Matrix Cells in Distance Order.
// Memory Usage: 52.5 MB, less than 42.36% of JavaScript online submissions
// for Matrix Cells in Distance Order.

/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
// const allCellsDistOrder = (R, C, r0, c0) => {
//   result = [];
//   for (rI = i = 0; rI <= R - 1; rI++) {
//     for (cI = 0; cI <= C - 1; cI++, i++) {
//       distance = Math.abs(r0 - rI) + Math.abs(c0 - cI);
//       result[distance * C * R + i] = [rI, cI];
//     }
//   }
//   return result.filter(Boolean);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 168 ms, faster than 84.59% of JavaScript online submissions
// for Matrix Cells in Distance Order.
// Memory Usage: 52.1 MB, less than 45.85% of JavaScript online submissions
// for Matrix Cells in Distance Order.

/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
// const allCellsDistOrder = (R, C, r0, c0) => {
//   const o = {};
//   for (let rI = (i = 0); rI <= R - 1; rI++) {
//     for (let cI = 0; cI <= C - 1; cI++, i++) {
//       const distance = Math.abs(r0 - rI) + Math.abs(c0 - cI);
//       o[distance * C * R + i] = [rI, cI];
//     }
//   }
//   return Object.keys(o).map(key => o[key]);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 196 ms, faster than 33.11% of JavaScript online submissions
// for Matrix Cells in Distance Order.
// Memory Usage: 68.4 MB, less than 5.24% of JavaScript online submissions
// for Matrix Cells in Distance Order.

/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
const allCellsDistOrder = (R, C, r0, c0) => {
  const byDistance = [];
  for (let rI = 0; rI <= R - 1; rI++) {
    for (let cI = 0; cI <= C - 1; cI++) {
      const distance = Math.abs(r0 - rI) + Math.abs(c0 - cI);
      if ('undefined' === typeof byDistance[distance]) {
        byDistance[distance] = [];
      }
      byDistance[distance].push([rI, cI]);
    }
  }
  return byDistance.reduce((acc, curr) => [...acc, ...curr], []);
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
