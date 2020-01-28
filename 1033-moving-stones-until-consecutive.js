// 1033. Moving Stones Until Consecutive
// https://leetcode.com/problems/moving-stones-until-consecutive/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 94.90% of JavaScript online submissions
// Memory Usage: 34 MB, less than 19.13% of JavaScript online submissions

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
// const numMovesStones = (a, b, c) => {
//   let [min, mid, max] = [a, b, c].sort((a, b) => a - b);

//   maxMoves = max - min - 2;

//   minMoves = 0;
//   if (2 === mid - min) {
//     max = mid;
//     mid--;
//     minMoves++;
//   }
//   if (2 === max - mid) {
//     min = mid;
//     mid++;
//     minMoves++;
//   }
//   if (1 < mid - min) minMoves++;
//   if (1 < max - mid) minMoves++;

//   return [minMoves, maxMoves];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 94.27% of JavaScript online submissions
// Memory Usage: 33.7 MB, less than 95.65% of JavaScript online submissions

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
// const numMovesStones = (a, b, c) => {
//   const [min, mid, max] = [a, b, c].sort((a, b) => a - b);

//   let minMoves = 0;
//   if (2 === mid - min || 2 === max - mid) {
//     minMoves = 1;
//   } else {
//     if (2 < mid - min) minMoves++;
//     if (2 < max - mid) minMoves++;
//   }

//   const maxMoves = max - min - 2;

//   return [minMoves, maxMoves];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 94.27% of JavaScript online submissions
// Memory Usage: 34.1 MB, less than 10.43% of JavaScript online submissions

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
// const numMovesStones = (a, b, c) => {
//   const [min, mid, max] = [a, b, c].sort((a, b) => a - b);
//   const [x, y, z] = [mid - min, max - mid, max - min];
//   const maxMoves = z - 2;
//   if (x === 2 || y === 2) return [1, maxMoves];
//   let minMoves = 0;
//   if (x > 2) minMoves++;
//   if (y > 2) minMoves++;
//   return [minMoves, maxMoves];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 7.64% of JavaScript online submissions
// Memory Usage: 33.7 MB, less than 95.65% of JavaScript online submissions

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
// const numMovesStones = (a, b, c) => {
//   const min = Math.min(a, b, c);
//   const max = Math.max(a, b, c);
//   const mid = a ^ b ^ c ^ min ^ max;
//   const [x, y, z] = [mid - min, max - mid, max - min];
//   const maxMoves = z - 2;
//   if (x === 2 || y === 2) return [1, maxMoves];
//   let minMoves = 0;
//   if (x > 2) minMoves++;
//   if (y > 2) minMoves++;
//   return [minMoves, maxMoves];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 94.90% of JavaScript online submissions
// Memory Usage: 33.9 MB, less than 32.17% of JavaScript online submissions

// var minMax = (...arr) => {
//   let min = (max = arr[0]),
//     x;
//     x = arr[i];
//     if (x < min) min = x;
//     if (x > max) max = x;
//   }
//   return [min, max];
// };

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
// const numMovesStones = (a, b, c) => {
//   const [x, y, z] = [Math.abs(a - b), Math.abs(b - c), Math.abs(c - a)];
//   const [min, max] = minMax(x, y, z);
//   return 2 === max ? [0, 0] : min < 3 ? [1, max - 2] : [2, max - 2];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 94.27% of JavaScript online submissions
// Memory Usage: 33.8 MB, less than 80.87% of JavaScript online submissions

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
const numMovesStones = (a, b, c) => {
  const [x, y, z] = [Math.abs(a - b), Math.abs(b - c), Math.abs(c - a)];
  const [min, max] = [Math.min(x, y, z), Math.max(x, y, z)];
  return 2 === max ? [0, 0] : [min < 3 ? 1 : 2, max - 2];
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(numMovesStones(1, 2, 5), [1, 2]);
// Explanation: Move the stone from 5 to 3, or move the stone from 5 to 4 to 3.
//       | 1 | 2 | 3 | 4 | 5 |
// init  | a | b | - | - | c |
// min 1 | a | b | c | - | - |
// max 1 | a | b | - | c | - |
// max 2 | a | b | c | - | - |

deepStrictEqual(numMovesStones(4, 3, 2), [0, 0]);
// Explanation: We cannot make any moves.
//      | 1 | 2 | 3 | 4 |
// init | - | c | b | a |

deepStrictEqual(numMovesStones(3, 5, 1), [1, 2]);
// Explanation: Move the stone from 1 to 4; or move the stone from 1 to 2 to 4.
//       | 1 | 2 | 3 | 4 | 5 |
// init  | c | - | a | - | b |
// min 1 | - | - | a | c | b |
// max 1 | - | c | a | - | b |
// max 2 | - | c | a | b | - |

deepStrictEqual(numMovesStones(1, 3, 6), [1, 3]);
//       | 1 | 2 | 3 | 4 | 5 | 6 |
// init  | a | - | b | - | - | c |
// min 1 | a | c | b | - | - | - |
// max 1 | - | a | b | - | - | c |
// max 2 | - | a | b | - | c | - |
// max 3 | - | a | b | c | - | - |

deepStrictEqual(numMovesStones(2, 4, 1), [1, 1]);
//       | 1 | 2 | 3 | 4 |
// init  | c | a | - | b |
// min 1 | - | a | c | b |
// max 1 | c | a | b | - |

deepStrictEqual(numMovesStones(1, 4, 5), [1, 2]);
// Explanation: Move the stone from 1 to 4; or move the stone from 1 to 2 to 4.
//       | 1 | 2 | 3 | 4 | 5 |
// init  | a | - | - | b | c |
// min 1 | - | - | a | b | c |
// max 1 | - | a | - | b | c |
// max 2 | - | - | a | b | c |
