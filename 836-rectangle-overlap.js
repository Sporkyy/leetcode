// 836. Rectangle Overlap
// https://leetcode.com/problems/rectangle-overlap/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory

/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
// var isRectangleOverlap = function([r1x1, r1y1, r1x2, r1y2], [r2x1, r2y1, r2x2, r2y2]) {
//   // console.log([r1x1, r1y1, r1x2, r1y2], [r2x1, r2y1, r2x2, r2y2]);
//   const xMin = Math.min(r1x1, r1x2, r2x1, r2x2);
//   // console.log(xMin);
//   if (xMin < 0)
//     [r1x1, r1x2, r2x1, r2x2] = [
//       r1x1 + Math.abs(xMin),
//       r1x2 + Math.abs(xMin),
//       r2x1 + Math.abs(xMin),
//       r2x2 + Math.abs(xMin),
//     ];
//   const yMin = Math.min(r1y1, r1y2, r2y1, r2y2);
//   // console.log(yMin);
//   if (yMin < 0)
//     [r1y1, r1y2, r2y1, r2y2] = [
//       r1y1 + Math.abs(yMin),
//       r1y2 + Math.abs(yMin),
//       r2y1 + Math.abs(yMin),
//       r2y2 + Math.abs(yMin),
//     ];
//   if (r1x2 < r1x1 && r1y2 < r1y1) [r1x1, r1y1, r1x2, r1y2] = [r1x2, r1y2, r1x1, r1y1];
//   if (r2x2 < r2x1 && r2y2 < r2y1) [r2x1, r2y1, r2x2, r2y2] = [r2x2, r2y2, r2x1, r2y1];
//   // console.log([r1x1, r1y1, r1x2, r1y2], [r2x1, r2y1, r2x2, r2y2]);
//   const xMax = Math.max(r1x1, r1x2, r2x1, r2x2);
//   // console.log(xMax);
//   const yMax = Math.max(r1y1, r1y2, r2y1, r2y2);
//   // console.log(yMax);
//   const canvas = new Array(yMax + 1).fill(0).map(n => new Array(xMax + 1).fill(0));
//   // for (let row of canvas) console.log(row);
//   for (let i = 0; i < canvas.length; i++) {
//     for (let j = 0; j < canvas[i].length; j++) {
//       if (r1y1 <= i && i <= r1y2 && r1x1 <= j && j <= r1x2) canvas[i][j] += 1;
//       if (r2y1 <= i && i <= r2y2 && r2x1 <= j && j <= r2x2) canvas[i][j] += 2;
//     }
//   }
//   for (let row of canvas) console.log(row);
//   for (let i = 0; i < canvas.length; i++) {
//     for (let j = 0; j < canvas[0].length; j++) {
//       if (3 !== canvas[i][j]) continue;
//       if (canvas.length - 2 < i) continue;
//       if (canvas[0].length - 2 < j) continue;
//       // console.log(i, j);
//       const [r, dr, d] = [canvas[i][j + 1], canvas[i + 1][j + 1], canvas[i + 1][j]];
//       // console.log(r, dr, d);
//       if (3 === r && 3 === dr && 3 === d) return true;
//     }
//   }
//   return false;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
const isRectangleOverlap = ([ax1, ay1, ax2, ay2], [bx1, by1, bx2, by2]) => {
  // console.log([ax1, ay1, ax2, ay2], [bx1, by1, bx2, by2]);
  // if (ax2 < ax1 && ay2 < ay1) [ax1, ay1, ax2, ay2] = [ax2, ay2, ax1, ay1];
  // if (bx2 < bx1 && by2 < by1) [bx1, by1, bx2, by2] = [bx2, by2, bx1, by1];
  // console.log([ax1, ay1, ax2, ay2], [bx1, by1, bx2, by2]);
  if (bx1 < ax2 && by1 < ay2) return true;
  if (ax1 < bx2 && ay2 < by2) return true;
  return false;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  //   | 0 | 1 | 2 | 3 |
  //   +===============+
  // 0 | 1 | 1 | 1 | 0 |
  // 1 | 1 | 3 | 3 | 2 |
  // 2 | 1 | 3 | 3 | 2 |
  // 3 | 0 | 2 | 2 | 2 |
  //   +===============+

  {
    input: {
      rec1: [0, 0, 2, 2],
      rec2: [1, 1, 3, 3],
    },
    expected: true,
  },

  //    | -1 | 0 | 1 | 2 |
  //    +================+
  // -1 |  1 | 1 | 1 | 0 |
  //  0 |  1 | 3 | 3 | 2 |
  //  1 |  1 | 3 | 3 | 2 |
  //  2 |  0 | 2 | 2 | 2 |
  //    +================+

  {
    input: {
      rec1: [1, 1, -1, -1],
      rec2: [2, 2, 0, 0],
    },
    expected: true,
  },

  //   | 0 | 1 | 2 |
  //   +===========+
  // 0 | 1 | 3 | 2 |
  // 1 | 1 | 3 | 2 |
  //   +===========+

  {
    input: {
      rec1: [0, 0, 1, 1],
      rec2: [1, 0, 2, 1],
    },
    expected: false,
  },

  //    | -4 | -3 | -2 | -1 |
  //    +===================+
  // -5 |  2 |  2 |  2 |  0 |
  // -4 |  2 |  2 |  2 |  0 |
  // -3 |  2 |  2 |  2 |  0 |
  // -2 |  2 |  2 |  2 |  0 |
  // -1 |  0 |  0 |  0 |  0 |
  //  0 |  0 |  0 |  0 |  0 |
  //  1 |  0 |  0 |  0 |  0 |
  //  2 |  0 |  0 |  0 |  0 |
  //  3 |  1 |  1 |  1 |  1 |
  //  4 |  1 |  1 |  1 |  1 |
  //  5 |  1 |  1 |  1 |  1 |​​
  //    +===================+

  {
    input: {
      rec1: [-4, 3, -1, 5],
      rec2: [-4, -5, -2, -2],
    },
    expected: false,
  },

  // {
  //   input: {
  //     rec1: [-9, 6, -3, 10],
  //     rec2: [-8, -10, -5, -4],
  //   },
  //   expected: false,
  // },

  // {
  //   input: {
  //     rec1: [-687153884, -854669644, -368882013, -788694078],
  //     rec2: [540420176, -909203694, 655002739, -577226067],
  //   },
  //   expected: false,
  // },
];

for (let {
  input: { rec1, rec2 },
  expected,
} of tests) {
  const output = isRectangleOverlap(rec1, rec2);
  const name = `rec1 = ${rec1}; rec2 = ${rec2}`;
  if (expected === output) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
}
