// 1299. Replace Elements with Greatest Element on Right
// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 628 ms, faster than 13.19% of JavaScript online submissions
// Memory Usage: 42.7 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = arr =>
  arr.map((_, i) =>
    arr.length - 1 === i ? -1 : Math.max(...arr.slice(i + 1, arr.length)),
  );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(replaceElements([17, 18, 5, 4, 6, 1]), [18, 6, 6, 6, 1, -1]);
