// 1051. Height Checker
// https://leetcode.com/problems/height-checker/

/*

Students are asked to stand in non-decreasing order of heights for an annual
photo.

Return the minimum number of students that must move in order for all students
to be standing in non-decreasing order of height.

Notice that when a group of students is selected they can reorder in any
possible way between themselves and the non selected students remain on their
seats.

## Constraints
- 1 <= heights.length <= 100
- 1 <= heights[i] <= 100

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 73.44% of JavaScript online submissions
// Memory Usage: 35.1 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} heights
//  * @return {number}
//  */
// const heightChecker = heights =>
//   heights
//     .slice()
//     .sort((a, b) => a - b)
//     .reduce((acc, curr, idx) => (curr !== heights[idx] ? acc + 1 : acc), 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 86.84% of JavaScript online submissions
// Memory Usage: 35.1 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} heights
//  * @return {number}
//  */
// const heightChecker = heights => {
//   let moves = 0;
//   const counts = new Array(101).fill(0);
//   for (const h of heights) counts[h]++;
//   for (let i = 0, z = 0; i < 101; i++)
//     for (let j = counts[i]; 0 < j; j--, z++) if (heights[z] !== i) moves++;
//   return moves;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 92.67% of JavaScript online submissions
// Memory Usage: 38.6 MB, less than 10.27% of JavaScript online submissions

/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = heights =>
  heights
    .reduce(
      (acc, curr) => {
        acc[curr].push(curr);
        return acc;
      },
      new Array(101).fill().map(_ => []),
    )
    .flat()
    .reduce((acc, curr, idx) => acc + (curr === heights[idx] ? 0 : 1), 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(heightChecker([1, 1, 4, 2, 1, 3]), 3);
// Explanation: Students with heights 4, 3 and the last 1 are not
// standing in the right positions.

strictEqual(heightChecker([1, 2, 3, 4, 5]), 0);

strictEqual(heightChecker([5, 4, 3, 2, 1]), 4);

strictEqual(heightChecker([1, 1, 1, 1, 1]), 0);

strictEqual(heightChecker([1, 1, 2, 2]), 0);

strictEqual(heightChecker([2, 2, 1, 1]), 4);

strictEqual(heightChecker([2, 1, 1, 2]), 2);

strictEqual(heightChecker([1, 2, 2, 1]), 2);

strictEqual(heightChecker([1, 2, 1, 2]), 2);

strictEqual(heightChecker([2, 1, 2, 1]), 2);

strictEqual(heightChecker([2, 1, 1, 1]), 2);

strictEqual(heightChecker([2, 2, 2, 1]), 2);

strictEqual(heightChecker([2, 1, 2, 1, 1, 2, 2, 1]), 4);

strictEqual(
  heightChecker([
    31,
    81,
    41,
    78,
    48,
    2,
    83,
    48,
    21,
    20,
    43,
    15,
    26,
    78,
    96,
    55,
    5,
    46,
    35,
    89,
    85,
    54,
    76,
    64,
    71,
    36,
    98,
    94,
    100,
    7,
    88,
    92,
    80,
    43,
    24,
    89,
    50,
    61,
    59,
    20,
    94,
    57,
    99,
    62,
    82,
    46,
    28,
    57,
    66,
    62,
    56,
    15,
    12,
    63,
    19,
    35,
    12,
    26,
    15,
    59,
    8,
    44,
    46,
    45,
    33,
    20,
    27,
    31,
    85,
    15,
    92,
    63,
    63,
    40,
    35,
    95,
    91,
    1,
    4,
    57,
    55,
    68,
    53,
    28,
    15,
    94,
    74,
    89,
    77,
    7,
    25,
    63,
    77,
    24,
    76,
    44,
  ]),
  95,
);

strictEqual(
  heightChecker([
    10,
    6,
    6,
    10,
    10,
    9,
    8,
    8,
    3,
    3,
    8,
    2,
    1,
    5,
    1,
    9,
    5,
    2,
    7,
    4,
    7,
    7,
  ]),
  22,
);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*

1, 1, 4, 2, 1, 3

|  x | min | max | wrong |
| -: | --: | --: | ----: |
|  1 |   1 |   4 |       |
|  1 |   1 |   4 |       |
|  4 |   1 |   4 |     x |
|  2 |   1 |   4 |       |
|  1 |   1 |   4 |     x |
|  3 |   1 |   4 |     x |

=-=-=-=-=-=-=-=-=-=-=-=

2, 2, 1, 1

| 2 | max = 2
| 2 | max = 2
| 1 | max = 2
| 1 | max = 2

| 1 | min = 1
| 1 | min = 1
| 2 | min = 1
| 2 | min = 1

*/
