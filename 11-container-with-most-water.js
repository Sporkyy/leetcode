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

// Runtime: 796 ms, faster than 12.59% of JavaScript online submissions
// Memory Usage: 35.5 MB, less than 66.67% of JavaScript online submissions

// /**
//  * @param {number[]} heights
//  * @return {number}
//  */
// const maxArea = heights => {
//   let maxArea = 0;
//   for (let i = 0; i < heights.length; i++)
//     for (let j = i + 1; j < heights.length; j++) {
//       const area = (j - i) * Math.min(heights[i], heights[j]);
//       maxArea = Math.max(area, maxArea);
//     }
//   return maxArea;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 42.91% of JavaScript online submissions
// Memory Usage: 35.3 MB, less than 96.97% of JavaScript online submissions

// /**
//  * @param {number[]} heights
//  * @return {number}
//  */
// const maxArea = heights => {
//   let [l, r, maxArea] = [0, heights.length - 1, 0];
//   while (l < r) {
//     maxArea = Math.max(maxArea, (r - l) * Math.min(heights[l], heights[r]));
//     if (heights[l] < heights[r]) l++;
//     else r--;
//   }
//   return maxArea;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 136 ms, faster than 41.18% of JavaScript online submissions
// Memory Usage: 37.3 MB, less than 9.09% of JavaScript online submissions

/**
 * @param {number[]} heights
 * @return {number}
 */
const maxArea = heights => {
  let [lPos, rPos, maxArea] = [0, heights.length - 1, 0];
  while (lPos < rPos) {
    const [lHeight, rHeight] = [heights[lPos], heights[rPos]];
    const [width, height] = [rPos - lPos, Math.min(lHeight, rHeight)];
    const area = width * height;
    maxArea = Math.max(maxArea, area);
    heights[lPos] < heights[rPos] ? lPos++ : rPos--;
  }
  return maxArea;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);

strictEqual(maxArea([1, 1]), 1);

strictEqual(maxArea([1, 1, 2, 1, 2, 1, 1]), 6);

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

    | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| 0 |   |   | 🁢 |   | 🁢 |   |   |
| 1 | 🁢 | 🁢 | 🁢 | 🁢 | 🁢 | 🁢 | 🁢 |

*/
