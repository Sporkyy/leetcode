// 709. To Lower Case
// https://leetcode.com/problems/to-lower-case/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 48 ms, faster than 88.27% of JavaScript online submissions
// Memory Usage: 33.8 MB, less than 69.79% of JavaScript online submissions

/**
 * @param {string} str
 * @return {string}
 */
const toLowerCase = str => str.toLowerCase();

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

strictEqual(toLowerCase('Hello'), 'hello');

strictEqual(toLowerCase('here'), 'here');

strictEqual(toLowerCase('LOVELY'), 'lovely');

strictEqual(toLowerCase(''), '');

strictEqual(toLowerCase('a'), 'a');

strictEqual(toLowerCase('A'), 'a');

strictEqual(toLowerCase('1'), '1');
