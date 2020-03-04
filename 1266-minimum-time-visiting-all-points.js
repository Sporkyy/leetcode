// 1266. Minimum Time Visiting All Points
// https://leetcode.com/problems/minimum-time-visiting-all-points/

/*

On a plane there are n points with integer coordinates points[i] = [xi, yi].
Your task is to find the minimum time in seconds to visit all points.

You can move according to the next rules:

In one second always you can either move vertically, horizontally by one unit or
diagonally (it means to move one unit vertically and one unit horizontally in
one second). You have to visit the points in the same order as they appear in
the array.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 50.00% of JavaScript online submissions
// Memory Usage: 35.1 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[][]} points
//  * @return {number}
//  */
// const minTimeToVisitAllPoints = points =>
//   points.reduce(
//     (acc, [x, y], idx) =>
//       points.length - 1 === idx
//         ? acc
//         : acc +
//           Math.max(
//             Math.abs(x - points[idx + 1][0]),
//             Math.abs(y - points[idx + 1][1]),
//           ),
//     0,
//   );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 87.31% of JavaScript online submissions
// Memory Usage: 35 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[][]} points
 * @return {number}
 */
const minTimeToVisitAllPoints = points =>
  points
    .slice(0, points.length - 1)
    .reduce(
      (acc, [x, y], idx) =>
        acc +
        Math.max(
          Math.abs(x - points[idx + 1][0]),
          Math.abs(y - points[idx + 1][1]),
        ),
      0,
    );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(
  minTimeToVisitAllPoints([
    [1, 1],
    [3, 4],
    [-1, 0],
  ]),
  7,
);
// Explanation: One optimal path is
// [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]
// Time from [1,1] to [3,4] = 3 seconds
// Time from [3,4] to [-1,0] = 4 seconds
// Total time = 7 seconds

// Example 2:
strictEqual(
  minTimeToVisitAllPoints([
    [3, 2],
    [-2, 2],
  ]),
  5,
);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
