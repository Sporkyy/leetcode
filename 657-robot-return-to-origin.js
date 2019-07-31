// 657. Robot Return to Origin
// https://leetcode.com/problems/robot-return-to-origin/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 35.63% of JavaScript online submissions
// for Robot Return to Origin.
// Memory Usage: 41.6 MB, less than 5.59% of JavaScript online submissions
// for Robot Return to Origin.

/**
 * @param {string} moves
 * @return {boolean}
 */
// const judgeCircle = moves => {
//   if (0 === moves.length) return true;
//   if (1 === moves.length % 2) return false;
//   const movesArray = moves.split('');
//   if (1 === new Set(movesArray).size % 2) return false;
//   const compare = (a, b) =>
//     a && b && a.length === b.length && a.map((n, i) => n === b[i]).reduce((a, c) => a && c, true);
//   return compare(
//     [0, 0],
//     movesArray.reduce(
//       (answer, move) => {
//         switch (move) {
//           case 'U':
//             return [answer[0], answer[1] + 1];
//           case 'D':
//             return [answer[0], answer[1] - 1];
//           case 'L':
//             return [answer[0] + 1, answer[1]];
//           case 'R':
//             return [answer[0] - 1, answer[1]];
//         }
//       },
//       [0, 0]
//     )
//   );
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 51.16% of JavaScript online submissions
// for Robot Return to Origin.
// Memory Usage: 37.2 MB, less than 39.09% of JavaScript online submissions
// for Robot Return to Origin.

/**
 * @param {string} moves
 * @return {boolean}
 */
// const judgeCircle = moves => {
//   return (
//     0 ===
//     moves.split('').reduce((answer, move) => {
//       switch (move) {
//         case 'U':
//           return answer + 1;
//         case 'D':
//           return answer - 1;
//         case 'L':
//           return answer + 2;
//         case 'R':
//           return answer - 2;
//       }
//     }, 0)
//   );
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 51.16% of JavaScript online submissions
// for Robot Return to Origin.
// Memory Usage: 36.2 MB, less than 67.01% of JavaScript online submissions
// for Robot Return to Origin.

/**
 * @param {string} moves
 * @return {boolean}
 */
// const judgeCircle = moves => {
//   let n = 0;
//   for (let i = moves.length; 0 < i; i--) {
//     n +=
//       'U' === moves[i - 1]
//         ? 1
//         : 'D' === moves[i - 1]
//         ? -1
//         : 'L' === moves[i - 1]
//         ? 2
//         : 'R' === moves[i - 1]
//         ? -2
//         : 0;
//   }
//   return 0 === n;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 51.03% of JavaScript online submissions
// for Robot Return to Origin.
// Memory Usage: 35.7 MB, less than 91.55% of JavaScript online submissions
// for Robot Return to Origin.

/**
 * @param {string} moves
 * @return {boolean}
 */
// const judgeCircle = moves => {
//   let n = 0;
//   for (let i = moves.length; 0 < i; i--) {
//     switch (moves[i - 1]) {
//       case 'U':
//         n++;
//         n++;
//         break;
//       case 'D':
//         n--;
//         n--;
//         break;
//       case 'R':
//         n++;
//         break;
//       case 'L':
//         n--;
//         break;
//     }
//   }
//   return 0 === n;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 84.18% of JavaScript online submissions
// for Robot Return to Origin.
// Memory Usage: 36 MB, less than 76.06% of JavaScript online submissions
// for Robot Return to Origin.

/**
 * @param {string} moves
 * @return {boolean}
 */
// const judgeCircle = moves => {
//   const len = moves.length;
//   if (1 === len % 2) return false;
//   let n = 0;
//   for (let i = 0, j = len - 1; i < len / 2; i++, j--) {
//     switch (moves[i]) {
//       case 'U':
//         n += 2;
//         break;
//       case 'D':
//         n -= 2;
//         break;
//       case 'R':
//         n++;
//         break;
//       case 'L':
//         n--;
//         break;
//     }
//     switch (moves[j]) {
//       case 'U':
//         n += 2;
//         break;
//       case 'D':
//         n -= 2;
//         break;
//       case 'R':
//         n++;
//         break;
//       case 'L':
//         n--;
//         break;
//     }
//   }
//   return 0 === n;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 35.57% of JavaScript online submissions
// for Robot Return to Origin.
// Memory Usage: 40.8 MB, less than 9.86% of JavaScript online submissions
// for Robot Return to Origin.

/**
 * @param {string} moves
 * @return {boolean}
 */
// const judgeCircle = moves =>
//   moves.replace(/[^DLR]/g, '').length === moves.replace(/[^ULR]/g, '').length &&
//   moves.replace(/[^UDR]/g, '').length === moves.replace(/[^UDL]/g, '').length;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 51.16% of JavaScript online submissions
// for Robot Return to Origin.
// Memory Usage: 38.6 MB, less than 12.19% of JavaScript online submissions
// for Robot Return to Origin.

/**
 * @param {string} moves
 * @return {boolean}
 */
// const judgeCircle = moves => {
//   const len = moves.length;
//   if (0 === len) return true;
//   if (1 === len % 2) return false;
//   const d = {
//     DD: -4,
//     DL: -3,
//     LD: -3,
//     LL: -2,
//     RD: -1,
//     DR: -1,
//     UD: 0,
//     DU: 0,
//     RL: 0,
//     LR: 0,
//     UL: 1,
//     LU: 1,
//     RR: 2,
//     UR: 3,
//     RU: 3,
//     UU: 4,
//   };
//   let n = 0;
//   for (let i = 0, j = len / 2; j < len; i++, j++) n += d[moves[i] + moves[j]];
//   return 0 === n;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 20.15% of JavaScript online submissions
// for Robot Return to Origin.
// Memory Usage: 39.8 MB, less than 12.19% of JavaScript online submissions
// for Robot Return to Origin.

/**
 * @param {string} moves
 * @return {boolean}
 */
// const judgeCircle = moves =>
//   (moves.match(/U/g) || '').length === (moves.match(/D/g) || '').length &&
//   (moves.match(/R/g) || '').length === (moves.match(/L/g) || '').length;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 69.87% of JavaScript online submissions
// for Robot Return to Origin.
// Memory Usage: 40.8 MB, less than 9.14% of JavaScript online submissions
// for Robot Return to Origin.

/**
 * @param {string} moves
 * @return {boolean}
 */
// const judgeCircle = moves =>
//   moves.replace(/U/g, '').length === moves.replace(/D/g, '').length &&
//   moves.replace(/R/g, '').length === moves.replace(/L/g, '').length;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 84.11% of JavaScript online submissions
// for Robot Return to Origin.
// Memory Usage: 38.5 MB, less than 12.69% of JavaScript online submissions
// for Robot Return to Origin.

/**
 * @param {string} moves
 * @return {boolean}
 */
// const judgeCircle = moves => {
//   const len = moves.length;
//   if (1 === len % 2) return false;
//   let n = 0;
//   for (let i = 0, j = len / 2; j < len; i++, j++) {
//     switch (moves[i] + moves[j]) {
//       case 'DD':
//         n += -4;
//         break;
//       case 'DL':
//       case 'LD':
//         n += -3;
//         break;
//       case 'LL':
//         n += -2;
//         break;
//       case 'RD':
//       case 'DR':
//         n += -1;
//         break;
//       case 'UD':
//       case 'DU':
//       case 'RL':
//       case 'LR':
//         break;
//       case 'UL':
//       case 'LU':
//         n += 1;
//         break;
//       case 'RR':
//         n += 2;
//         break;
//       case 'UR':
//       case 'RU':
//         n += 3;
//         break;
//       case 'UU':
//         n += 4;
//         break;
//     }
//   }
//   return 0 === n;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 51.16% of JavaScript online submissions
// for Robot Return to Origin.
// Memory Usage: 38.6 MB, less than 12.19% of JavaScript online submissions
// for Robot Return to Origin.

/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = moves => {
  const len = moves.length;
  if (0 === len) return true;
  if (1 === len % 2) return false;
  let n = 0;
  for (let i = 0; i < len; i += 2) {
    switch (moves[i] + moves[i + 1]) {
      case 'DD':
        n += -4;
        break;
      case 'DL':
      case 'LD':
        n += -3;
        break;
      case 'LL':
        n += -2;
        break;
      case 'RD':
      case 'DR':
        n += -1;
        break;
      case 'UD':
      case 'DU':
      case 'RL':
      case 'LR':
        break;
      case 'UL':
      case 'LU':
        n += 1;
        break;
      case 'RR':
        n += 2;
        break;
      case 'UR':
      case 'RU':
        n += 3;
        break;
      case 'UU':
        n += 4;
        break;
    }
  }
  return 0 === n;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: 'UD',
    expected: true,
  },
  {
    input: 'LL',
    expected: false,
  },
  {
    input: 'LDRRUULLDR',
    expected: true,
  },
  {
    input: '',
    expected: true,
  },
  {
    input: 'U',
    expected: false,
  },
  {
    input: 'LDRRLRUULR',
    expected: false,
  },
  {
    input: 'RLUURDDDLU',
    expected: true,
  },
];

tests.forEach(({ name, input, expected }) => {
  const result = judgeCircle(input);
  console.log(`if (${expected} === ${result}) {`);
  if (expected === result) {
    console.log(`✅ ${input}`);
  } else {
    console.log(`🔴 ${input}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
