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

// /**
//  * @param {number[][]} coordinates
//  * @return {boolean}
//  */
// const checkStraightLine = coordinates => {
//   const [ix, iy] = [coordinates[0][0], coordinates[0][1]];
//   for (let i = 1; i < coordinates.length - 1; i++) {
//     const [ax, ay] = [coordinates[i][0], coordinates[i][1]];
//     const [bx, by] = [coordinates[i + 1][0], coordinates[i + 1][1]];
//     if ((ix - ax) * (ay - by) !== (ax - bx) * (iy - ay)) return false;
//   }
//   return true;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 104 ms, faster than 5.20% of JavaScript online submissions
// Memory Usage: 39.2 MB, less than 5.02% of JavaScript online submissions

// /**
//  * @param {number[][]} coordinates
//  * @return {boolean}
//  */
// const checkStraightLine = coordinates => {
//   if (2 === coordinates.length) return true;
//   const [ax, ay] = coordinates.pop().reduce((x, y) => [x, y]);
//   const [bx, by] = coordinates.pop().reduce((x, y) => [x, y]);
//   for (let i = 0; i < coordinates.length; i++) {
//     const [cx, cy] = [coordinates[i][0], coordinates[i][1]];
//     if ((ax - bx) * (by - cy) !== (bx - cx) * (ay - by)) return false;
//   }
//   return true;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[][]} coordinates
//  * @return {boolean}
//  */
// const checkStraightLine = (
//   coordinates,
//   slope = coordinates
//     .pop()
//     .reduce((x1, y1) => coordinates[1][1] - y1 / coordinates[1][0] - x1),
// ) => {
//   if (0 === coordinates.length) return true;
//   if (
//     slope !==
//     coordinates
//       .pop()
//       .reduce((x1, y1) => coordinates[1][1] - y1 / coordinates[1][0] - x1)
//   )
//     return false;
//   console.log(coordinates, slope);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[][]} coordinates
//  * @return {boolean}
//  */
// const checkStraightLine = (
//   coordinates,
//   slope = [coordinates.pop()]
//     .concat([coordinates[0]])
//     .reduce(([x1, y1], [x2, y2]) => (y2 - y1) / (x2 - x1)),
// ) => {
//   console.log(coordinates);
//   console.log(slope);
//   if (Infinity === slope)
//     console.log(
//       coordinates.reduce(
//         (acc, [x, y]) => [acc[0].concat([x]), acc[1].concat([y])],
//         [[], []],
//       ),
//     );
//   if (1 === coordinates.length) return true;
//   if (
//     slope !==
//     [coordinates.pop()]
//       .concat([coordinates[0]])
//       .reduce(([x1, y1], [x2, y2]) => (y2 - y1) / (x2 - x1))
//   )
//     return false;
//   return checkStraightLine(coordinates, slope);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 9.12% of JavaScript online submissions
// Memory Usage: 37.6 MB, less than 5.21% of JavaScript online submissions

// /**
//  * Do the slope formula
//  *
//  * @param {number} x1
//  * @param {number} y1
//  * @param {number} x2
//  * @param {number} y2
//  */
// const calcSlope = (x1, y1, x2, y2) => (y2 - y1) / (x2 - x1);

// /**
//  * @param {number[][]} coords
//  * @return {boolean}
//  */
// const checkStraightLine = coords => {
//   if (coords.map(([x]) => x).every(x => x === coords[0][0])) return true;
//   if (coords.map(([, y]) => y).every(y => y === coords[0][1])) return true;
//   const [x1, y1] = coords.pop();
//   const slope = coords.pop().reduce((x2, y2) => calcSlope(x1, y1, x2, y2));
//   return coords.every(([x2, y2]) => slope === calcSlope(x1, y1, x2, y2));
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 120 ms, faster than 5.20% of JavaScript online submissions
// Memory Usage: 37.6 MB, less than 5.21% of JavaScript online submissions

// /**
//  * @param {number[][]} coords
//  * @return {boolean}
//  */
// const checkStraightLine = coords => {
//   if (coords.map(([x]) => x).every(x => x === coords[0][0])) return true;
//   if (coords.map(([, y]) => y).every(y => y === coords[0][1])) return true;
//   const [x1, y1] = coords.pop();
//   const calcSlope = (x1, y1, x2, y2) => (y2 - y1) / (x2 - x1);
//   const slope = coords.pop().reduce((x2, y2) => calcSlope(x1, y1, x2, y2));
//   return coords.every(([x2, y2]) => slope === calcSlope(x1, y1, x2, y2));
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 10.97% of JavaScript online submissions
// Memory Usage: 38.4 MB, less than 5.02% of JavaScript online submissions

// /**
//  * @param {number[][]} coords
//  * @return {boolean}
//  */
// const checkStraightLine = coords => {
//   if (coords.every(([x]) => x === coords[0][0])) return true;
//   if (coords.every(([, y]) => y === coords[0][1])) return true;
//   const [x1, y1] = coords.pop();
//   const calcSlope = (x1, y1, x2, y2) => (y2 - y1) / (x2 - x1);
//   const slope = coords.pop().reduce((x2, y2) => calcSlope(x1, y1, x2, y2));
//   return coords.every(([x2, y2]) => slope === calcSlope(x1, y1, x2, y2));
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 108 ms, faster than 5.20% of JavaScript online submissions
// Memory Usage: 37.8 MB, less than 5.17% of JavaScript online submissions

// /**
//  * @param {number[][]} coords
//  * @return {boolean}
//  */
// const checkStraightLine = coords => {
//   // const calcSlope = (x1, y1, x2, y2) => (y2 - y1) / (x2 - x1);
//   // const slope = calcSlope(...coords.pop(), ...coords[0]);
//   // console.log(slope);
//   const [x1, y1] = coords.pop();
//   // console.log(x1, y1);
//   const slopes = coords.map(([x2, y2]) => (y2 - y1) / (x2 - x1));
//   // console.log(slopes);
//   return slopes.every(s => slopes[0] === s);

//   // const slope = coords.pop().reduce((x2, y2) => calcSlope(x1, y1, x2, y2));
//   // return coords.every(([x2, y2]) => slope === calcSlope(x1, y1, x2, y2));
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 9.12% of JavaScript online submissions
// Memory Usage: 37.7 MB, less than 5.17% of JavaScript online submissions

/**
 * @param {number[][]} coords
 * @return {boolean}
 */
const checkStraightLine = coords => {
  const calcSlope = (x1, y1, x2, y2) => (y2 - y1) / (x2 - x1);
  const [x1, y1] = coords.pop();
  const slope = calcSlope(x1, y1, ...coords.pop());
  return coords.every(([x2, y2]) => slope === calcSlope(x1, y1, x2, y2));
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
