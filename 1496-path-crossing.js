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

/**
 * @param {string} path
 * @return {boolean}
 */
const isPathCrossing = path => {
  const points = new Set([JSON.stringify([0, 0])]);
  let lastPoint = [0, 0];
  const directions = new Map([
    ['N', [0, 1]],
    ['E', [1, 0]],
    ['S', [0, -1]],
    ['W', [-1, 0]],
  ]);
  for (let i = 0; i < path.length; i++) {
    const direction = directions.get(path[i]);
    const nextPoint = [
      lastPoint[0] + direction[0],
      lastPoint[1] + direction[1],
    ];
    // console.log(nextPoint);
    // console.log(points);
    if (points.has(JSON.stringify(nextPoint))) return true;
    points.add(JSON.stringify(nextPoint));
    lastPoint = nextPoint;
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
