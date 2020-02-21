// 682. Baseball Game
// https://leetcode.com/problems/baseball-game/

import { strictEqual } from 'assert';

/*

Integer (one round's score):
  Directly represents the number of points you get in this round.

+ (one round's score):
  Represents that the points you get in this round are the sum of
  the last two valid round's points.

D (one round's score):
  Represents that the points you get in this round are the
  doubled data of the last valid round's points.

C (an operation, which isn't a round's score)
  Represents the last valid round's points you get were invalid
  and should be removed.

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 77.42% of JavaScript online submissions
// Memory Usage: 35.3 MB, less than 50.00% of JavaScript online submissions

// /**
//  * @param {string[]} ops
//  * @return {number}
//  */
// const calPoints = ops => {
//   const rounds = [];
//   for (let i = 0; i < ops.length; i++) {
//     const op = ops[i];
//     switch (op) {
//       case 'C':
//         rounds.pop();
//         break;
//       case 'D':
//         rounds.push(2 * rounds[rounds.length - 1]);
//         break;
//       case '+':
//         rounds.push(rounds[rounds.length - 1] + rounds[rounds.length - 2]);
//         break;
//       default:
//         rounds.push(parseInt(op, 10));
//         break;
//     }
//   }

//   // console.log(rounds);

//   return rounds.reduce((acc, curr) => acc + curr, 0);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 12.33% of JavaScript online submissions
// Memory Usage: 62.3 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = (ops, rounds = []) =>
  !ops.length
    ? rounds.reduce((acc, curr) => acc + curr, 0)
    : calPoints(
        ops.slice(1),
        'C' === ops[0]
          ? rounds.slice(0, rounds.length - 1)
          : 'D' === ops[0]
          ? rounds.concat(2 * rounds[rounds.length - 1])
          : '+' === ops[0]
          ? rounds.concat(rounds[rounds.length - 1] + rounds[rounds.length - 2])
          : rounds.concat(parseInt(ops[0], 10)),
      );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

strictEqual(calPoints(['5', '2', 'C', 'D', '+']), 30);

strictEqual(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+']), 27);
