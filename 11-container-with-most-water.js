// 11. Container With Most Water
// https://leetcode.com/problems/container-with-most-water/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} heights
//  * @return {number}
//  */
// const maxArea = heights => {
//   const map = new Map();
//   for (let i = 0; i < heights.length; i++)
//     for (let j = i + 1; j < heights.length; j++)
//       map.set([], (j - i) * Math.min(heights[i], heights[j]));
//   return Math.max(...map.values());
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} heights
//  * @return {number}
//  */
// const maxArea = heights => {
//   const map = new Map();
//   for (let i = 0; i < heights.length; i++)
//     for (let j = i + 1; j < heights.length; j++) {
//       const [span, min] = [j - i, Math.min(heights[i], heights[j])];
//       if (!map.has([span, min])) map.set([span, min], span * min);
//     }
//   return Math.max(...map.values());
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 4312 ms, faster than 5.09% of JavaScript online submissions
// Memory Usage: 42.1 MB, less than 6.06% of JavaScript online submissions

/**
 * @param {number[]} heights
 * @return {number}
 */
const maxArea = heights => {
  const seen = new Set();
  let max = 0;
  for (let i = 0; i < heights.length; i++)
    for (let j = i + 1; j < heights.length; j++) {
      const [span, min] = [j - i, Math.min(heights[i], heights[j])];
      if (!seen.has([span, min]) && max < span * min) max = span * min;
    }
  return max;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
strictEqual(maxArea([1, 1]), 1);

/*

    | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| 0 |   | 🁢 |   |   |   |   | 🁢 |   |   |
| 1 |   | 🁢 |   |   |   |   | 🁢 |   | 🁢 |
| 2 |   | 🁢 | 🁢 |   |   |   | 🁢 |   | 🁢 |
| 3 |   | 🁢 | 🁢 |   | 🁢 |   | 🁢 |   | 🁢 |
| 4 |   | 🁢 | 🁢 |   | 🁢 | 🁢 | 🁢 |   | 🁢 |
| 5 |   | 🁢 | 🁢 |   | 🁢 | 🁢 | 🁢 | 🁢 | 🁢 |
| 6 |   | 🁢 | 🁢 | 🁢 | 🁢 | 🁢 | 🁢 | 🁢 | 🁢 |
| 7 | 🁢 | 🁢 | 🁢 | 🁢 | 🁢 | 🁢 | 🁢 | 🁢 | 🁢 |

*/
