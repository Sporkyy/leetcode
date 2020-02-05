// 1009. Complement of Base 10 Integer
// https://leetcode.com/problems/complement-of-base-10-integer/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 79.18% of JavaScript online submissions
// Memory Usage: 33.9 MB, less than 37.17% of JavaScript online submissions

/**
 * @param {number} N
 * @return {number}
 */
const bitwiseComplement = N =>
  parseInt(
    N.toString(2)
      .split('')
      .map(c => [1, 0][c])
      .join(''),
    2,
  );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(bitwiseComplement(5), 2);
// Explanation: 5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.

strictEqual(bitwiseComplement(7), 0);
// Explanation: 7 is "111" in binary, with complement "000" in binary, which is 0 in base-10.

strictEqual(bitwiseComplement(10), 5);
// Explanation: 10 is "1010" in binary, with complement "0101" in binary, which is 5 in base-10.
