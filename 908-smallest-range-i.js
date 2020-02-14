// 908. Smallest Range I
// https://leetcode.com/problems/smallest-range-i/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 65.08% of JavaScript online submissions
// Memory Usage: 35.2 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const smallestRangeI = (A, K) =>
  Math.max(Math.max(...A) - K - (Math.min(...A) + K), 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(smallestRangeI([1], 0), 0);

strictEqual(smallestRangeI([0, 10], 2), 6);

strictEqual(smallestRangeI([1, 3, 6], 3), 0);
