// 1037. Valid Boomerang
// https://leetcode.com/problems/valid-boomerang/

/*

A boomerang is a set of 3 points that are all distinct and not in a
straight line.

Given a list of three points in the plane, return whether these points are
a boomerang.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 52 ms, faster than 96.23% of JavaScript online submissions
// Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[][]} points
//  * @return {boolean}
//  */
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

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 56 ms, faster than 88.70% of JavaScript online submissions
// Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[][]} points
//  * @return {boolean}
//  */
// var isBoomerang = points =>
//   !(
//     (points[0][0] === points[1][0] && points[0][1] === points[1][1]) ||
//     (points[1][0] === points[2][0] && points[1][1] === points[2][1]) ||
//     (points[2][0] === points[0][0] && points[2][1] === points[0][1]) ||
//     (points[0][0] === points[1][0] &&
//       points[1][0] === points[2][0] &&
//       points[2][0] === points[0][0]) ||
//     (points[0][1] === points[1][1] &&
//       points[1][1] === points[2][1] &&
//       points[2][1] === points[0][1]) ||
//     (points[0][0] - points[1][0] === points[0][1] - points[1][1] &&
//       points[1][0] - points[2][0] === points[1][1] - points[2][1] &&
//       points[2][0] - points[0][0] === points[2][1] - points[0][1])
//   );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 56 ms, faster than 71.64% of JavaScript online submissions
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[][]} points
//  * @return {boolean}
//  */
// const isBoomerang = ([[a, b], [c, d], [e, f]]) =>
//   !(
//     (a === c && b === d) ||
//     (c === e && d === f) ||
//     (e === a && f === b) ||
//     (a === c && c === e && e === a) ||
//     (b === d && d === f && f === b) ||
//     (a - c === b - d && c - e === d - f && e - a === f - b)
//   );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 56 ms, faster than 71.64% of JavaScript online submissions
// Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[][]} points
//  * @return {boolean}
//  */
// const isBoomerang = ([[ax, ay], [bx, by], [cx, cy]]) =>
//   !(
//     (ax === bx && ay === by) ||
//     (bx === cx && by === cy) ||
//     (cx === ax && cy === ay) ||
//     (ax === bx && bx === cx && cx === ax) ||
//     (ay === by && by === cy && cy === ay) ||
//     (ax - bx === ay - by && bx - cx === by - cy && cx - ax === cy - ay)
//   );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 154 ms, faster than 5.36% of JavaScript online submissions
// Memory Usage: 39.9 MB, less than 26.79% of JavaScript online submissions

// /**
//  * @param {number[][]} points
//  * @return {boolean}
//  */
// const isBoomerang = ([[ax, ay], [bx, by], [cx, cy]]) => {
//   const s1 = (ax - bx) / (ay - by); // ?
//   const s2 = (bx - cx) / (by - cy); // ?
//   const s3 = (ax - cx) / (ay - cy); // ?
//   const s = [s1, s2, s3];
//   if (s.every(v => v === s[0])) return false;
//   if (s.some(v => Number.isNaN(v))) return false;
//   if (s.every(v => Infinity === Math.abs(v))) return false;
//   return true;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 93 ms, faster than 12.50% of JavaScript online submissions
// Memory Usage: 39.8 MB, less than 26.79% of JavaScript online submissions

// /**
//  * @param {number[][]} points
//  * @return {boolean}
//  */
// const isBoomerang = ([[ax, ay], [bx, by], [cx, cy]]) =>
//   (slopes =>
//     !(
//       slopes.every(slope => slope === slopes[0]) ||
//       slopes.some(slope => Number.isNaN(slope)) ||
//       slopes.every(slope => Infinity === Math.abs(slope))
//     ))([(ax - bx) / (ay - by), (bx - cx) / (by - cy), (ax - cx) / (ay - cy)]);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 132 ms, faster than 5.36% of JavaScript online submissions
// Memory Usage: 39.5 MB, less than 39.29% of JavaScript online submissions

// /**
//  * @param {number[][]} points
//  * @return {boolean}
//  */
// const isBoomerang = ([[ax, ay], [bx, by], [cx, cy]]) =>
//   (slopes =>
//     !(
//       slopes.some(slope => Number.isNaN(slope)) ||
//       slopes.every(slope => slope === slopes[0]) ||
//       slopes.every(slope => !Number.isFinite(slope))
//     ))([(ax - bx) / (ay - by), (bx - cx) / (by - cy), (ax - cx) / (ay - cy)]);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 109 ms, faster than 8.93% of JavaScript online submissions
// Memory Usage: 39.3 MB, less than 44.64% of JavaScript online submissions

/**
 * @param {number[][]} points
 * @return {boolean}
 */
const isBoomerang = ([[ax, ay], [bx, by], [cx, cy]]) =>
  (ay - by) * (bx - cx) !== (by - cy) * (ax - bx);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { ok } from 'assert';

ok(
  isBoomerang([
    [1, 1],
    [2, 3],
    [3, 2],
  ]),
);

//    0123
//   +----+
// 0 |....| 0
// 1 |.X..| 1
// 2 |...X| 2
// 3 |..X.| 3
//   +----+
//    0123

ok(
  !isBoomerang([
    [1, 1],
    [2, 2],
    [3, 3],
  ]),
);

//    0123
//   +----+
// 0 |....| 0
// 1 |.X..| 1
// 2 |..X.| 2
// 3 |...X| 3
//   +----+
//    0123

ok(
  !isBoomerang([
    [1, 2],
    [2, 3],
    [4, 5],
  ]),
);

ok(
  isBoomerang([
    [1, 2],
    [2, 3],
    [5, 5],
  ]),
);

//    012345
//   +------+
// 0 |......| 0
// 1 |..X...| 1
// 2 |...X..| 2
// 3 |......| 3
// 4 |......| 4
// 5 |.....X| 5
//   +------+
//    012345

ok(
  isBoomerang([
    [0, 0],
    [0, 2],
    [2, 1],
  ]),
);

ok(
  !isBoomerang([
    [0, 0],
    [2, 1],
    [2, 1],
  ]),
);

//    012345
//   +------+
// 0 |X.....| 0
// 1 |......| 1
// 2 |.X....| 2
// 3 |......| 3
// 4 |......| 4
// 5 |......| 5
//   +------+
//    012345

ok(
  !isBoomerang([
    [0, 0],
    [1, 2],
    [2, 4],
  ]),
);

//    01234
//   +-----+
// 0 |X....| 0
// 1 |..X..| 1
// 2 |....X| 2
//   +-----+
//    01234

ok(
  !isBoomerang([
    [92, 72],
    [12, 40],
    [27, 46],
  ]),
);

ok(
  !isBoomerang([
    [1, 0],
    [0, 0],
    [2, 0],
  ]),
);

//    01234
//   +-----+
// 0 |X....| 0
// 1 |X....| 1
// 2 |X....| 2
//   +-----+
//    01234

ok(
  isBoomerang([
    [0, 0],
    [1, 0],
    [2, 2],
  ]),
);

//    01234
//   +-----+
// 0 |X....| 0
// 1 |X....| 1
// 2 |..X..| 2
//   +-----+
//    01234
