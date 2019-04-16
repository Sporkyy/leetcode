// 682. Baseball Game
// https://leetcode.com/problems/baseball-game/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = ops => {
  // Integer (one round's score): Directly represents the number of points you get in this round.
  // "+" (one round's score): Represents that the points you get in this round are the sum of the last two valid round's points.
  // "D" (one round's score): Represents that the points you get in this round are the doubled data of the last valid round's points.
  // "C" (an operation, which isn't a round's score): Represents the last valid round's points you get were invalid and should be removed.

  const rounds = [];
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    switch (op) {
      case 'C':
        rounds.pop();
        break;
      case 'D':
        rounds.push(2 * rounds[rounds.length - 1]);
        break;
      case '+':
        rounds.push(rounds[rounds.length - 1] + rounds[rounds.length - 2]);
        break;
      default:
        rounds.push(parseInt(op, 10));
        break;
    }
  }

  // console.log(rounds);

  return rounds.reduce((acc, curr) => acc + curr, 0);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: ['5', '2', 'C', 'D', '+'],
    expected: 30,
  },
  {
    name: 'Example 2',
    input: ['5', '-2', '4', 'C', 'D', '9', '+', '+'],
    expected: 27,
  },
];

tests.forEach(({ name, input, expected }) => {
  const result = calPoints(input);
  if (expected === result) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
