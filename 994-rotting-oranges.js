// 994. Rotting Oranges
// https://leetcode.com/problems/rotting-oranges/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 91.22% of JavaScript online submissions
// Memory Usage: 36.4 MB, less than 59.55% of JavaScript online submissions

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// var orangesRotting = function(grid) {
//   const w = grid[0].length;
//   const h = grid.length;
//   // console.log(`${w}x${h}`);
//   let linear = new Array(w * h);
//   for (let i = 0, z = 0; i < h; i++)
//     for (let j = 0; j < w && z < w * h; j++, z++) linear[z] = grid[i][j];
//   // console.log(linear);
//   if (!linear.includes(1)) return 0;
//   if (!linear.includes(2)) return -1;
//   let maxTime = w * h;
//   let flag = true;
//   while (maxTime-- && flag) {
//     if (!linear.includes(1)) break;
//     let newlyRotted = 0;
//     const copy = linear.slice(0);
//     for (let i = 0; i < linear.length; i++) {
//       const val = linear[i];
//       // console.log(val);
//       let iU, iR, iD, iL;
//       if (0 < Math.trunc(i / w)) iU = i - w;
//       if (i % w < w - 1) iR = i + 1;
//       if (Math.trunc(i / w) < h - 1) iD = i + w;
//       if (0 < i % w) iL = i - 1;
//       // console.log(`${i}: i⬆${iU} i➡${iR} i⬇${iD} i⬅${iL}`);
//       let [u, r, d, l] = [0, 0, 0, 0];
//       if ('undefined' !== typeof iU) u = linear[iU];
//       if ('undefined' !== typeof iR) r = linear[iR];
//       if ('undefined' !== typeof iD) d = linear[iD];
//       if ('undefined' !== typeof iL) l = linear[iL];
//       // console.log(`${val}: ⬆${u} ➡${r} ⬇${d} ⬅${l}`);
//       if (1 < val) {
//         copy[i]++;
//         if (1 === u) {
//           copy[iU]++;
//           newlyRotted++;
//         }
//         if (1 === r) {
//           copy[iR]++;
//           newlyRotted++;
//         }
//         if (1 === d) {
//           copy[iD]++;
//           newlyRotted++;
//         }
//         if (1 === l) {
//           copy[iL]++;
//           newlyRotted++;
//         }
//       }
//     }
//     // console.log(copy);
//     linear = copy;
//     flag = 0 < newlyRotted;
//   }
//   // console.log(maxTime);
//   return linear.includes(1) ? -1 : w * h - maxTime - 1;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 82.06% of JavaScript online submissions
// Memory Usage: 36.8 MB, less than 48.31% of JavaScript online submissions

// const gridToArray = grid => {
//   const [w, h] = [grid[0].length, grid.length];
//   const arr = [];
//   for (let i = 0, z = 0; i < h; i++)
//     for (let j = 0; j < w && z < w * h; j++, z++) arr[z] = grid[i][j];
//   return arr;
// };

// const gridToArrayIndices = grid => {
//   const [w, h] = [grid[0].length, grid.length];
//   return new Array(w * h).fill(0).map((n, i) => {
//     const indices = {};
//     if (0 < Math.trunc(i / w)) indices['u'] = i - w;
//     if (i % w < w - 1) indices['r'] = i + 1;
//     if (Math.trunc(i / w) < h - 1) indices['d'] = i + w;
//     if (0 < i % w) indices['l'] = i - 1;
//     return indices;
//   });
// };

/**
 * @param {number[][]} grid
 * @return {number}
 */
// var orangesRotting = function(grid) {
//   let linear = gridToArray(grid);
//   const indices = gridToArrayIndices(grid);
//   let iterations = 0;
//   while (linear.includes(1)) {
//     const copy = linear.slice(0);
//     for (let i = 0; i < copy.length; i++) {
//       if (2 !== linear[i]) continue;
//       if (1 === copy[indices[i]['u']]) copy[indices[i]['u']] = 2;
//       if (1 === copy[indices[i]['r']]) copy[indices[i]['r']] = 2;
//       if (1 === copy[indices[i]['d']]) copy[indices[i]['d']] = 2;
//       if (1 === copy[indices[i]['l']]) copy[indices[i]['l']] = 2;
//     }
//     if (linear.join() === copy.join()) break;
//     linear = copy;
//     iterations++;
//   }
//   return linear.includes(1) ? -1 : iterations;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 82.06% of JavaScript online submissions
// Memory Usage: 37.2 MB, less than 26.97% of JavaScript online submissions

/**
 * @param {number[][]} grid
 * @return {number}
 */
// var orangesRotting = function(grid) {
//   let minutes = 0;
//   while (JSON.stringify(grid).includes('1')) {
//     const copy = grid.map(a => a.slice(0));
//     for (let i = 0; i < copy.length; i++) {
//       for (let j = 0; j < copy[i].length; j++) {
//         if (2 !== grid[i][j]) continue;
//         if (grid[i - 1] && 1 === grid[i - 1][j]) copy[i - 1][j] = 2;
//         if (grid[i + 1] && 1 === grid[i + 1][j]) copy[i + 1][j] = 2;
//         if (1 === grid[i][j - 1]) copy[i][j - 1] = 2;
//         if (1 === grid[i][j + 1]) copy[i][j + 1] = 2;
//       }
//     }
//     if (JSON.stringify(grid) === JSON.stringify(copy)) break;
//     grid = copy;
//     minutes++;
//   }
//   return JSON.stringify(grid).includes('1') ? -1 : minutes;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 40.08% of JavaScript online submissions
// Memory Usage: 37.2 MB, less than 25.84% of JavaScript online submissions

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid, minutes = 0) {
  while (JSON.stringify(grid).includes('1') && ++minutes) {
    const copy = grid.map(a => a.slice(0));
    for (let i = 0; i < copy.length; i++) {
      for (let j = 0; j < copy[i].length; j++) {
        if (2 !== grid[i][j]) continue;
        if (grid[i - 1] && 1 === grid[i - 1][j]) copy[i - 1][j] = 2;
        if (grid[i + 1] && 1 === grid[i + 1][j]) copy[i + 1][j] = 2;
        if (1 === grid[i][j - 1]) copy[i][j - 1] = 2;
        if (1 === grid[i][j + 1]) copy[i][j + 1] = 2;
      }
    }
    if (JSON.stringify(grid) === JSON.stringify(copy)) break;
    grid = copy;
  }
  return JSON.stringify(grid).includes('1') ? -1 : minutes;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

// | 2 | 1 | 1 |
// | 1 | 1 | 0 |
// | 0 | 1 | 1 |

// 0: 2, 1, 1, 1, 1, 0, 0, 1, 1
// 1: 3, 2, 1, 2, 1, 0, 0, 1, 1
// 2: 4, 3, 2, 3, 2, 0, 0, 1, 1
// 3: 5, 4, 3, 4, 3, 0, 0, 2, 1
// 4: 6, 5, 4, 5, 4, 0, 0, 3, 2

strictEqual(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
  4,
);

// | 2 | 1 | 1 |
// | 0 | 1 | 1 |
// | 1 | 0 | 1 |

strictEqual(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ]),
  -1,
);

// | 0 | 2 |

strictEqual(orangesRotting([[0, 2]]), 0);

strictEqual(orangesRotting([[0]]), 0);

// | 1 | 2 |

// 0: 1, 2
// 1: 2, 3

strictEqual(orangesRotting([[1], [2]]), 1);

// | 0 | 1 | 2 |
// | 3 | 4 | 5 |

strictEqual(
  orangesRotting([
    [0, 2, 2],
    [0, 1, 0],
  ]),
  1,
);

// | 0 | 1 | 2 | 3 |
// | 4 | 5 | 6 | 7 |

strictEqual(
  orangesRotting([
    [2, 2, 0, 2],
    [2, 1, 2, 2],
  ]),
  1,
);
