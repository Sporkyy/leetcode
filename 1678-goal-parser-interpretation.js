// 1678 | Goal Parser Interpretation
// https://leetcode.com/problems/goal-parser-interpretation/

/*

You own a Goal Parser that can interpret a string command. The command consists
of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will
interpret "G" as the string "G", "()" as the string "o", and "(al)" as the
string "al". The interpreted strings are then concatenated in the original
order.

Given the string command, return the Goal Parser's interpretation of command.

## Constraints

- 1 <= command.length <= 100
- command consists of "G", "()", and/or "(al)" in some order.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 68 ms, faster than 99.62% of JavaScript online submissions
// Memory Usage: 38.7 MB, less than 29.70% of JavaScript online submissions

/**
 * @param {string} command
 * @return {string}
 */
const interpret = command =>
  command.replace(/\(\)/g, 'o').replace(/[\(\)]/g, '');

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(interpret('G()(al)'), 'Goal');
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".

// Example 2:
strictEqual(interpret('G()()()()(al)'), 'Gooooal');

// Example 3:
strictEqual(interpret('(al)G(al)()()G'), 'alGalooG');
