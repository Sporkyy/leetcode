// 1025. Divisor Game
// https://leetcode.com/problems/divisor-game/

// Choosing any x with 0 < x < N and N % x == 0.

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 48 ms, faster than 90.08% of JavaScript online submissions
// Memory Usage: 34 MB, less than 46.67% of JavaScript online submissions

/**
 * | N | A | N | B | N | A | N | B | N | A | N | W |
 * | - | - | - | - | - | - | - | - | - | - | - | - |
 * | 1 |   |   |   |   |   |   |   |   |   |   | B |
 * | 2 | 1 | 1 |   |   |   |   |   |   |   |   | A |
 * | 3 | 1 | 2 | 1 | 1 |   |   |   |   |   |   | B |
 * | 4 | 1 | 3 | 1 | 2 | 1 | 1 |   |   |   |   | A |
 * | 5 | 1 | 4 | 1 | 3 | 1 | 2 | 1 | 1 |   |   | B |
 * | 6 | 1 | 5 | 1 | 4 | 1 | 3 | 1 | 2 | 1 | 1 | A |
 *
 * @param {number} N
 * @return {boolean}
 */
const divisorGame = N => 0 === N % 2;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(divisorGame(1), false);

strictEqual(divisorGame(2), true);

strictEqual(divisorGame(3), false);

strictEqual(divisorGame(4), true);

strictEqual(divisorGame(5), false);

strictEqual(divisorGame(6), true);

strictEqual(divisorGame(7), false);

strictEqual(divisorGame(8), true);

strictEqual(divisorGame(9), false);
