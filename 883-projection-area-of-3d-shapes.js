// 883. Projection Area of 3D Shapes
// https://leetcode.com/problems/projection-area-of-3d-shapes/

/*

On a N * N grid, we place some 1 * 1 * 1 cubes that are axis-aligned with
the x, y, and z axes.

Each value v = grid[i][j] represents a tower of v cubes placed on top of
grid cell (i, j).

Now we view the projection of these cubes onto the xy, yz, and zx planes.

A projection is like a shadow, that maps our 3 dimensional figure to
a 2 dimensional plane.

Here, we are viewing the "shadow" when looking at the cubes from the top,
the front, and the side.

Return the total area of all three projections.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 364 ms, faster than 28.23% of JavaScript online submissions
// Memory Usage: 72.8 MB, less than 10.00% of JavaScript online submissions

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
// Memory Usage: 36.6 MB, less than 100.00% of JavaScript online submissions

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

// Runtime: 64 ms, faster than 61.22% of JavaScript online submissions
// Memory Usage: 35.7 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[][]} grid
 * @return {number}
 */
const projectionArea = grid => {
  const [xy, yz] = [
    new Array(grid.length).fill(0),
    new Array(grid.length).fill(0),
  ];
  let zx = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      xy[i] = Math.max(xy[i], grid[i][j]);
      yz[i] = Math.max(yz[i], grid[j][i]);
      if (0 < grid[i][j]) zx++;
    }
  }
  return xy.concat(yz).reduce((acc, curr) => acc + curr) + zx;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// | x | y | z |
// |--:|--:|--:|
// | 2 | 2 | 1 | = 5

strictEqual(projectionArea([[2]]), 5);

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

strictEqual(
  projectionArea([
    [1, 2],
    [3, 4],
  ]),
  17,
);

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

strictEqual(
  projectionArea([
    [1, 0],
    [0, 2],
  ]),
  8,
);

strictEqual(
  projectionArea([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]),
  14,
);

strictEqual(
  projectionArea([
    [2, 2, 2],
    [2, 1, 2],
    [2, 2, 2],
  ]),
  21,
);

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
