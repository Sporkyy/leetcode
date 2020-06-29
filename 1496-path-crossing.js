// 1496. Path Crossing
// https://leetcode.com/problems/path-crossing/

/*

Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing
moving one unit north, south, east, or west, respectively. You start at the
origin (0, 0) on a 2D plane and walk on the path specified by path.

Return True if the path crosses itself at any point, that is, if at any time you
are on a location you've previously visited. Return False otherwise.

Constraints:
- 1 <= path.length <= 10^4
- path will only consist of characters in {'N', 'S', 'E', 'W}

*/

import { ok } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 70.94% of JavaScript online submissions
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} path
//  * @return {boolean}
//  */
// const isPathCrossing = path => {
//   const points = new Set([JSON.stringify([0, 0])]);
//   let lastPoint = [0, 0];
//   const directions = new Map([
//     ['N', [0, 1]],
//     ['E', [1, 0]],
//     ['S', [0, -1]],
//     ['W', [-1, 0]],
//   ]);
//   for (let i = 0; i < path.length; i++) {
//     const direction = directions.get(path[i]);
//     const nextPoint = [
//       lastPoint[0] + direction[0],
//       lastPoint[1] + direction[1],
//     ];
//     // console.log(nextPoint);
//     // console.log(points);
//     if (points.has(JSON.stringify(nextPoint))) return true;
//     points.add(JSON.stringify(nextPoint));
//     lastPoint = nextPoint;
//   }
//   return false;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 90.60% of JavaScript online submission
// Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submission

// /**
//  * @param {string} path
//  * @return {boolean}
//  */
// const isPathCrossing = path => {
//   const set = new Set([JSON.stringify([0, 0])]);
//   const map = new Map([
//     ['N', [0, 1]],
//     ['E', [1, 0]],
//     ['S', [0, -1]],
//     ['W', [-1, 0]],
//   ]);
//   let lastPoint = [0, 0];
//   for (let move of path) {
//     move = map.get(move);
//     const point = [lastPoint[0] + move[0], lastPoint[1] + move[1]];
//     const str = JSON.stringify(point);
//     if (set.has(str)) return true;
//     set.add(str);
//     lastPoint = point;
//   }
//   return false;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 108 ms, faster than 20.51% of JavaScript online submissions
// Memory Usage: 34.2 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} path
//  * @return {boolean}
//  */
// const isPathCrossing = (path, x = 0, y = 0, hist = new Set(['0,0'])) => {
//   if ('string' === typeof path) return isPathCrossing([...path]);
//   if (!path.length) return false;
//   const dir = path.shift();
//   'N' === dir ? y++ : 'E' === dir ? x++ : 'S' === dir ? y-- : x--;
//   if (hist.has(`${x},${y}`)) return true;
//   hist.add(`${x},${y}`);
//   return isPathCrossing(path, x, y, hist);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 80.34% of JavaScript online submissions
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} path
 * @return {boolean}
 */
const isPathCrossing = path => {
  let [x, y] = [0, 0];
  const hist = new Set(['0,0']);
  for (const move of path) {
    'N' === move ? y++ : 'E' === move ? x++ : 'S' === move ? y-- : /* W */ x--;
    if (hist.has(`${x},${y}`)) return true;
    hist.add(`${x},${y}`);
  }
  return false;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
ok(!isPathCrossing('NES'));
// Explanation: Notice that the path doesn't cross any point more than once.

// Example 2:
ok(isPathCrossing('NESWW'));
// Explanation: Notice that the path visits the origin twice.

ok(isPathCrossing('NNSWWEWSSESSWENNW'));
