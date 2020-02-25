// 344. Reverse String
// https://leetcode.com/problems/reverse-string/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseString = s => {
//   return s.reverse();
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 108 ms, faster than 91.37% of JavaScript online submissions
// Memory Usage: 46.7 MB, less than 72.24% of JavaScript online submissions

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = s => s.reverse();

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

deepStrictEqual(reverseString(['h', 'e', 'l', 'l', 'o']), [
  'o',
  'l',
  'l',
  'e',
  'h',
]);

deepStrictEqual(reverseString(['H', 'a', 'n', 'n', 'a', 'h']), [
  'h',
  'a',
  'n',
  'n',
  'a',
  'H',
]);
