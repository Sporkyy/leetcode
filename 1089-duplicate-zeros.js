// 1089. Duplicate Zeros
// https://leetcode.com/problems/duplicate-zeros/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 60.48% of JavaScript online submissions
// Memory Usage: 35.4 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (0 === arr[i]) {
      for (let j = arr.length - 1; i < j; j--) arr[j] = arr[j - 1];
      arr[i++] = 0;
    }
  }
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

let a;

a = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(a);
deepStrictEqual(a, [1, 0, 0, 2, 3, 0, 0, 4]);

a = [1, 2, 3];
duplicateZeros(a);
deepStrictEqual(a, [1, 2, 3]);

a = [1, 0, 1];
duplicateZeros(a);
deepStrictEqual(a, [1, 0, 0]);

a = [1, 0, 0];
duplicateZeros(a);
deepStrictEqual(a, [1, 0, 0]);

a = [1, 0, 1, 2];
duplicateZeros(a);
deepStrictEqual(a, [1, 0, 0, 1]);
