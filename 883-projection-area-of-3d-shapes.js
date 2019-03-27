// 883. Projection Area of 3D Shapes
// https://leetcode.com/problems/projection-area-of-3d-shapes/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const flattened = a =>
  a.reduce((acc, curr) => (Array.isArray(curr) ? [...acc, ...flattened(curr)] : [...acc, curr]), []);

const rotated = a => {
  const rotated = [...a.map(a2 => [...a2])];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0, r = a.length - 1; j < a[i].length; j++, r--) {
      rotated[i][j] = a[r][i];
    }
  }
  return rotated;
};

const max = a => a.reduce((acc, curr) => acc < curr ? curr : acc);

const x = g => g.reduce((acc, curr) => acc + max(curr), 0);
const y = g => x(rotated(g));
const z = g => flattened(g).reduce((acc, curr) => 0 < curr ? acc + 1 : acc, 0);

/**
 * @param {number[][]} grid
 * @return {number}
 */
const projectionArea = grid => x(grid) + y(grid) + z(grid);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*
  | 1 | 2 | => | 3 | 1 |
  | 3 | 4 | => | 4 | 2 |

  [0][0] => [1][0]
  [0][1] => [0][0]
  [1][0] => [1][1]
  [1][1] => [0][1]

  | 1 | 2 | 3 | => | 7 | 4 | 1 |
  | 4 | 5 | 6 | => | 8 | 5 | 2 |
  | 7 | 8 | 9 | => | 9 | 6 | 3 |

  [0][0] => [2][0]
  [0][1] => [1][0]
  [0][2] => [0][0]
  [1][0] => [2][1]
  [1][1] => [1][1]
  [1][2] => [0][1]
  [2][0] => [2][2]
  [2][1] => [1][2]
  [2][2] => [0][2]
*/

// console.log(rotated([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]));

const tests = [{
    name: 'Example 1',
    input: [
      [2]
    ],
    expected: 5
  },
  {
    name: 'Example 2',
    input: [
      [1, 2],
      [3, 4]
    ],
    expected: 17
  },
  {
    name: 'Example 3',
    input: [
      [1, 0],
      [0, 2]
    ],
    expected: 8
  },
  {
    name: 'Example 4',
    input: [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1]
    ],
    expected: 14
  },
  {
    name: 'Example 5',
    input: [
      [2, 2, 2],
      [2, 1, 2],
      [2, 2, 2]
    ],
    expected: 21
  },
];

tests.forEach(({
  name,
  input,
  expected
}) => {
  const result = projectionArea(input);
  if (result === expected) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});