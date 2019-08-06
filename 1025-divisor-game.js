// 1025. Divisor Game
// https://leetcode.com/problems/divisor-game/

// Choosing any x with 0 < x < N and N % x == 0.

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 48 ms, faster than 90.08% of JavaScript online submissions
// for Divisor Game.
// Memory Usage: 34 MB, less than 46.67% of JavaScript online submissions
// for Divisor Game.

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

const tests = [
  {
    input: 1,
    expected: false,
  },
  {
    input: 2,
    expected: true,
  },
  {
    input: 3,
    expected: false,
  },
  {
    input: 4,
    expected: true,
  },
  {
    input: 5,
    expected: false,
  },
  {
    input: 6,
    expected: true,
  },
  {
    input: 7,
    expected: false,
  },
  {
    input: 8,
    expected: true,
  },
  {
    input: 9,
    expected: false,
  },
];

for (let { input, expected } of tests) {
  const result = divisorGame(input);
  if (result === expected) {
    console.log(`✅ ${input}`);
  } else {
    console.log(`🔴 ${input}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
}
