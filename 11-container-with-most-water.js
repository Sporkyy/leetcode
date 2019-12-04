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

/**
 * @param {number[]} heights
 * @return {number}
 */
const maxArea = heights => {
  const map = new Map();
  for (let i = 0; i < heights.length; i++)
    for (let j = i + 1; j < heights.length; j++) {
      const [span, min] = [j - i, Math.min(heights[i], heights[j])];
      if (!map.has([span, min])) map.set([span, min], span * min);
    }
  return Math.max(...map.values());
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
