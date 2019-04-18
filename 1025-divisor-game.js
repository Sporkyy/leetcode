// 1025. Divisor Game
// https://leetcode.com/problems/divisor-game/

// Choosing any x with 0 < x < N and N % x == 0.

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// |  N |  A |  N |  B |  N |  A |  N |  B |  N |  A |  N | W |
// | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | - |
// |  1 |    |    |    |    |    |    |    |    |    |    | B |
// |  2 |  1 |  1 |    |    |    |    |    |    |    |    | A |
// |  3 |  1 |  2 |  1 |  1 |    |    |    |    |    |    | B |
// |  4 |  1 |  3 |  1 |  2 |  1 |  1 |    |    |    |    | A |
// |  5 |  1 |  4 |  1 |  3 |  1 |  2 |  1 |  1 |    |    | B |
// |  6 |  1 |  5 |  1 |  4 |  1 |  3 |  1 |  2 |  1 |  1 | A |

/**
 * @param {number} N
 * @return {boolean}
 */
const divisorGame = N => 0 === N % 2;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'One',
    input: 1,
    expected: false,
  },
  {
    name: 'Two',
    input: 2,
    expected: true,
  },
  {
    name: 'Three',
    input: 3,
    expected: false,
  },
  {
    name: 'Four',
    input: 4,
    expected: true,
  },
  {
    name: 'Five',
    input: 5,
    expected: false,
  },
  {
    name: 'Six',
    input: 6,
    expected: true,
  },
  {
    name: 'Seven',
    input: 7,
    expected: false,
  },
  {
    name: 'Eight',
    input: 8,
    expected: true,
  },
  {
    name: 'Nine',
    input: 9,
    expected: false,
  },
];

tests.forEach(({ name, input, expected }) => {
  const result = divisorGame(input);
  if (result === expected) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
