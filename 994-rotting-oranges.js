// 994. Rotting Oranges
// https://leetcode.com/problems/rotting-oranges/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 91.22% of JavaScript online submissions
// for Rotting Oranges.
// Memory Usage: 36.4 MB, less than 59.55% of JavaScript online submissions
// for Rotting Oranges.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const w = grid[0].length;
  const h = grid.length;
  // console.log(`${w}x${h}`);
  let linear = new Array(w * h);
  for (let i = 0, z = 0; i < h; i++)
    for (let j = 0; j < w && z < w * h; j++, z++) linear[z] = grid[i][j];
  // console.log(linear);
  if (!linear.includes(1)) return 0;
  if (!linear.includes(2)) return -1;
  let maxTime = w * h;
  let flag = true;
  while (maxTime-- && flag) {
    if (!linear.includes(1)) break;
    let newlyRotted = 0;
    const copy = linear.slice(0);
    for (let i = 0; i < linear.length; i++) {
      const val = linear[i];
      // console.log(val);
      let iU, iR, iD, iL;
      if (0 < Math.trunc(i / w)) iU = i - w;
      if (i % w < w - 1) iR = i + 1;
      if (Math.trunc(i / w) < h - 1) iD = i + w;
      if (0 < i % w) iL = i - 1;
      // console.log(`${i}: i⬆${iU} i➡${iR} i⬇${iD} i⬅${iL}`);
      let [u, r, d, l] = [0, 0, 0, 0];
      if ('undefined' !== typeof iU) u = linear[iU];
      if ('undefined' !== typeof iR) r = linear[iR];
      if ('undefined' !== typeof iD) d = linear[iD];
      if ('undefined' !== typeof iL) l = linear[iL];
      // console.log(`${val}: ⬆${u} ➡${r} ⬇${d} ⬅${l}`);
      if (1 < val) {
        copy[i]++;
        if (1 === u) {
          copy[iU]++;
          newlyRotted++;
        }
        if (1 === r) {
          copy[iR]++;
          newlyRotted++;
        }
        if (1 === d) {
          copy[iD]++;
          newlyRotted++;
        }
        if (1 === l) {
          copy[iL]++;
          newlyRotted++;
        }
      }
    }
    // console.log(copy);
    linear = copy;
    flag = 0 < newlyRotted;
  }
  // console.log(maxTime);
  return linear.includes(1) ? -1 : w * h - maxTime - 1;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  // | 2 | 1 | 1 |
  // | 1 | 1 | 0 |
  // | 0 | 1 | 1 |

  // 0: 2, 1, 1, 1, 1, 0, 0, 1, 1
  // 1: 3, 2, 1, 2, 1, 0, 0, 1, 1
  // 2: 4, 3, 2, 3, 2, 0, 0, 1, 1
  // 3: 5, 4, 3, 4, 3, 0, 0, 2, 1
  // 4: 6, 5, 4, 5, 4, 0, 0, 3, 2

  {
    input: [[2, 1, 1], [1, 1, 0], [0, 1, 1]],
    expected: 4,
  },

  // | 2 | 1 | 1 |
  // | 0 | 1 | 1 |
  // | 1 | 0 | 1 |

  {
    input: [[2, 1, 1], [0, 1, 1], [1, 0, 1]],
    expected: -1,
  },

  // | 0 | 2 |

  {
    input: [[0, 2]],
    expected: 0,
  },

  {
    input: [[0]],
    expected: 0,
  },

  // | 1 | 2 |

  // 0: 1, 2
  // 1: 2, 3

  {
    input: [[1], [2]],
    expected: 1,
  },

  // | 0 | 1 | 2 |
  // | 3 | 4 | 5 |

  {
    input: [[0, 2, 2], [0, 1, 0]],
    expected: 1,
  },

  // | 0 | 1 | 2 | 3 |
  // | 4 | 5 | 6 | 7 |

  {
    input: [[2, 2, 0, 2], [2, 1, 2, 2]],
    expected: 1,
  },
];

for ({ input, expected } of tests) {
  const output = orangesRotting(input);
  const name = input.join(', ');
  if (expected === output) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
}
