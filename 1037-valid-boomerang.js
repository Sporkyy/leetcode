// 1037. Valid Boomerang
// https://leetcode.com/problems/valid-boomerang/

/*

A boomerang is a set of 3 points that are all distinct and not in a
straight line.

Given a list of three points in the plane, return whether these points are
a boomerang.

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 96.23% of JavaScript online submissions
// Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[][]} points
 * @return {boolean}
 */
// const isBoomerang = points => {
//   // If any points are the same
//   if (
//     (points[0][0] === points[1][0] && points[0][1] === points[1][1]) ||
//     (points[1][0] === points[2][0] && points[1][1] === points[2][1]) ||
//     (points[2][0] === points[0][0] && points[2][1] === points[0][1])
//   )
//     return false;
//   // If all points align vertically
//   if (
//     points[0][0] === points[1][0] &&
//     points[1][0] === points[2][0] &&
//     points[2][0] === points[0][0]
//   )
//     return false;
//   // If all points align horizontally
//   if (
//     points[0][1] === points[1][1] &&
//     points[1][1] === points[2][1] &&
//     points[2][1] === points[0][1]
//   )
//     return false;
//   // If all points align diagonally
//   if (
//     points[0][0] - points[1][0] === points[0][1] - points[1][1] &&
//     points[1][0] - points[2][0] === points[1][1] - points[2][1] &&
//     points[2][0] - points[0][0] === points[2][1] - points[0][1]
//   )
//     return false;
//   // Assume it is valid since all the tests were passed
//   return true;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 88.70% of JavaScript online submissions
// Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = points =>
  !(
    (points[0][0] === points[1][0] && points[0][1] === points[1][1]) ||
    (points[1][0] === points[2][0] && points[1][1] === points[2][1]) ||
    (points[2][0] === points[0][0] && points[2][1] === points[0][1]) ||
    (points[0][0] === points[1][0] &&
      points[1][0] === points[2][0] &&
      points[2][0] === points[0][0]) ||
    (points[0][1] === points[1][1] &&
      points[1][1] === points[2][1] &&
      points[2][1] === points[0][1]) ||
    (points[0][0] - points[1][0] === points[0][1] - points[1][1] &&
      points[1][0] - points[2][0] === points[1][1] - points[2][1] &&
      points[2][0] - points[0][0] === points[2][1] - points[0][1])
  );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(
  isBoomerang([
    [1, 1],
    [2, 3],
    [3, 2],
  ]),
  true,
);
// ??????
// ??????
// ??????

strictEqual(
  isBoomerang([
    [1, 1],
    [2, 2],
    [3, 3],
  ]),
  false,
);
// ??????
// ??????
// ??????

strictEqual(
  isBoomerang([
    [1, 2],
    [2, 3],
    [4, 5],
  ]),
  false,
);
// ??????????
// ??????????
// ??????????
// ??????????
// ??????????

strictEqual(
  isBoomerang([
    [1, 2],
    [2, 3],
    [5, 5],
  ]),
  true,
);
// ??????????
// ??????????
// ??????????
// ??????????
// ??????????

strictEqual(
  isBoomerang([
    [0, 0],
    [0, 2],
    [2, 1],
  ]),
  true,
);
// ??????
// ??????
// ??????

strictEqual(
  isBoomerang([
    [0, 0],
    [2, 1],
    [2, 1],
  ]),
  false,
);
// ??????
// ??????
// ??????
