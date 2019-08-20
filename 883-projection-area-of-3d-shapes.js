// 883. Projection Area of 3D Shapes
// https://leetcode.com/problems/projection-area-of-3d-shapes/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 364 ms, faster than 28.23% of JavaScript online submissions
// for Number of Recent Calls.
// Memory Usage: 72.8 MB, less than 10.00% of JavaScript online submissions
// for Number of Recent Calls.

// const flattened = a =>
//   a.reduce(
//     (acc, curr) => (Array.isArray(curr) ? [...acc, ...flattened(curr)] : [...acc, curr]),
//     [],
//   );

// const rotated = a => {
//   const aRotated = [...a.map(a2 => [...a2])];
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0, r = a.length - 1; j < a[i].length; j++, r--) {
//       aRotated[i][j] = a[r][i];
//     }
//   }
//   return aRotated;
// };

// const max = a => a.reduce((acc, curr) => (acc < curr ? curr : acc));

// const x = g => g.reduce((acc, curr) => acc + max(curr), 0);
// const y = g => x(rotated(g));
// const z = g => flattened(g).reduce((acc, curr) => (0 < curr ? acc + 1 : acc), 0);

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// const projectionArea = grid => x(grid) + y(grid) + z(grid);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 33.09% of JavaScript online submissions
// for Projection Area of 3D Shapes.
// Memory Usage: 36.6 MB, less than 100.00% of JavaScript online submissions
// for Projection Area of 3D Shapes.

/**
 * @param {number[][]} grid
 * @return {number}
 */
// const projectionArea = grid => {
//   let xy = new Array(grid.length * 2).fill(0).map(u => new Array(grid.length));
//   let z = 0;
//   for (let i = 0, k = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid.length; j++, k++) {
//       // console.log(xy)
//       // console.log(grid[i][j]);
//       // console.log(grid[j][i]);
//       xy[i * 2][j] = grid[i][j];
//       xy[i * 2 + 1][j] = grid[j][i];
//       if (0 < grid[i][j]) z++;
//     }
//   }
//   // console.log(z);
//   // console.log(xy);
//   return xy.map(a => Math.max(...a)).reduce((acc, curr) => acc + curr) + z;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 77.21% of JavaScript online submissions
// for Projection Area of 3D Shapes.
// Memory Usage: 35.2 MB, less than 100.00% of JavaScript online submissions
// for Projection Area of 3D Shapes.

/**
 * @param {number[][]} grid
 * @return {number}
 */
const projectionArea = grid => {
  const xy = new Array(grid.length * 2).fill(0);
  let z = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      xy[i * 2] = Math.max(xy[i * 2], grid[i][j]);
      xy[i * 2 + 1] = Math.max(xy[i * 2 + 1], grid[j][i]);
      if (0 < grid[i][j]) z++;
    }
  }
  return xy.reduce((acc, curr) => acc + curr) + z;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*
| 1 | 2 | => | 3 | 1 |
| 3 | 4 | => | 4 | 2 |

[0][0] => [1][0]
[0][1] => [0][0]
[1][0] => [1][1]
[1][1] => [0][1]

| 1 | 2 | 3 | => | 7 | 4 | 1 |
| 4 | 5 | 6 | => | 8 | 5 | 2 |
| 7 | 8 | 9 | => | 9 | 6 | 3 |

[0][0] => [2][0]
[0][1] => [1][0]
[0][2] => [0][0]
[1][0] => [2][1]
[1][1] => [1][1]
[1][2] => [0][1]
[2][0] => [2][2]
[2][1] => [1][2]
[2][2] => [0][2]
*/

const tests = [
  // | x | y | z |
  // |--:|--:|--:|
  // | 2 | 2 | 1 | = 5

  {
    input: [[2]],
    expected: 5,
  },

  // max(1, 2) = 2
  // max(3, 4) = 4
  // max(1, 3) = 3
  // max(2, 4) = 4
  // +
  // -------------
  // =          13
  //    2 * 2 =  4
  // +
  // -------------
  // =          17

  {
    input: [[1, 2], [3, 4]],
    expected: 17,
  },

  {
    input: [[1, 0], [0, 2]],
    expected: 8,
  },

  // max(a[0][0], a[0][1], a[0][2])
  // max(      1,       1,       1) = 1
  // max(a[1][0], a[1][1], a[1][2])
  // max(      1,       0,       1) = 1
  // max(a[2][0], a[2][1], a[2][2])
  // max(      1,       1,       1) = 1

  // max(a[0][0], a[1][0], a[2][0])
  // max(      1,       1,       1) = 1
  // max(a[0][1], a[1][1], a[2][1])
  // max(      1,       0,       1) = 1
  // max(a[0][2], a[1][2], a[2][2])
  // max(      1,       1,       1) = 1

  // 0 < a[0][0] ? 1 : 0 = 1
  // 0 < a[0][1] ? 1 : 0 = 1
  // 0 < a[0][2] ? 1 : 0 = 1
  // 0 < a[1][0] ? 1 : 0 = 1
  // 0 < a[1][1] ? 1 : 0 = 0
  // 0 < a[1][2] ? 1 : 0 = 1
  // 0 < a[2][0] ? 1 : 0 = 1
  // 0 < a[2][1] ? 1 : 0 = 1
  // 0 < a[2][2] ? 1 : 0 = 1
  // +
  // -----------------------
  //                       8

  {
    input: [[1, 1, 1], [1, 0, 1], [1, 1, 1]],
    expected: 14,
  },

  {
    input: [[2, 2, 2], [2, 1, 2], [2, 2, 2]],
    expected: 21,
  },
];

for ({ input, expected } of tests) {
  const result = projectionArea(input);
  const name = JSON.stringify(input);
  if (result === expected) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
}
