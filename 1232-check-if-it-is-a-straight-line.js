// 1232. Check If It Is a Straight Line
// https://leetcode.com/problems/check-if-it-is-a-straight-line/

/*

You are given an array coordinates, coordinates[i] = [x, y], where [x, y]
represents the coordinate of a point. Check if these points make a straight line
in the XY plane.

Constraints:
- 2 <= coordinates.length <= 1000
- coordinates[i].length == 2
- -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
- coordinates contains no duplicate point.

*/

import { ok } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 100 ms, faster than 5.20% of JavaScript online submissions
// Memory Usage: 38.9 MB, less than 5.02% of JavaScript online submissions

// /**
//  * @param {number[][]} coordinates
//  * @return {boolean}
//  */
// const checkStraightLine = coordinates => {
//   if (2 === coordinates.length) return true;
//   for (let i = 0; i < coordinates.length - 2; i++) {
//     const [ax, ay, bx, by, cx, cy] = [
//       coordinates[i][0],
//       coordinates[i][1],
//       coordinates[i + 1][0],
//       coordinates[i + 1][1],
//       coordinates[i + 2][0],
//       coordinates[i + 2][1],
//     ];
//     if ((ax - bx) * (by - cy) !== (bx - cx) * (ay - by)) return false;
//   }
//   return true;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 112 ms, faster than 5.20% of JavaScript online submissions
// Memory Usage: 38.6 MB, less than 5.02% of JavaScript online submissions

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = coordinates => {
  const [ix, iy] = [coordinates[0][0], coordinates[0][1]];
  for (let i = 1; i < coordinates.length - 1; i++) {
    const [ax, ay] = [coordinates[i][0], coordinates[i][1]];
    const [bx, by] = [coordinates[i + 1][0], coordinates[i + 1][1]];
    if ((ix - ax) * (ay - by) !== (ax - bx) * (iy - ay)) return false;
  }
  return true;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
ok(
  checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ]),
);

// Example 2:
ok(
  !checkStraightLine([
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7],
  ]),
);

ok(
  checkStraightLine([
    [0, 0],
    [0, 1],
    [0, -1],
  ]),
);

ok(
  checkStraightLine([
    [1, 2],
    [2, 3],
  ]),
);

ok(
  checkStraightLine([
    [2, 1],
    [4, 2],
    [6, 3],
  ]),
);

ok(
  checkStraightLine([
    [0, 1],
    [1, 3],
    [-4, -7],
    [5, 11],
  ]),
);

ok(
  !checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 5],
  ]),
);
