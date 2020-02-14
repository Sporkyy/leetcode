// 908. Smallest Range I
// https://leetcode.com/problems/smallest-range-i/

/*

Given an array A of integers, for each integer A[i] we may choose any x with
-K <= x <= K, and add x to A[i].

After this process, we have some array B.

Return the smallest possible difference between the maximum value of B and
the minimum value of B.

*/

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
