// 575. Distribute Candies
// https://leetcode.com/problems/distribute-candies/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 132 ms, faster than 96.63% of JavaScript online submissions
// Memory Usage: 43.7 MB, less than 78.57% of JavaScript online submissions

// /**
//  * @param {number[]} candies
//  * @return {number}
//  */
// const distributeCandies = candies => {
//   // 1. Count the total candies and cleave it in twain
//   const portionSize = candies.length / 2;
//   // 2. Count the unique candies
//   const uniqueCandiesCount = new Set(candies).size;
//   // 3. If the unique candies count
//   //    is greater than or equal to half the total candies count,
//   //    return half the total candies count
//   if (portionSize <= uniqueCandiesCount) return portionSize;
//   // 4. If not, return the unique candies count
//   return uniqueCandiesCount;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 108 ms, faster than 99.61% of JavaScript online submissions
// Memory Usage: 43.8 MB, less than 60.42% of JavaScript online submissions

/**
 * @param {number[]} candies
 * @return {number}
 */
const distributeCandies = candies =>
  Math.min(candies.length / 2, new Set(candies).size);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

strictEqual(distributeCandies([1, 1, 2, 2, 3, 3]), 3);

strictEqual(distributeCandies([1, 1, 2, 3]), 2);

strictEqual(distributeCandies([1, 1, 1, 1, 1, 1]), 1);

strictEqual(distributeCandies([1, 2, 3, 4, 5, 6]), 3);
