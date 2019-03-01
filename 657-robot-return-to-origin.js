// 657. Robot Return to Origin
// https://leetcode.com/problems/robot-return-to-origin/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

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

/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = moves => {
  let n = 0;
  for (let i = moves.length; 0 < i; i--) {
    switch (moves[i - 1]) {
      case 'U':
        n++;
        n++;
        break;
      case 'D':
        n--;
        n--;
        break;
      case 'R':
        n++;
        break;
      case 'L':
        n--;
        break;
    }
  }
  return 0 === n;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  { name: 'Example 1', input: 'UD', expected: true },
  { name: 'Example 2', input: 'LL', expected: false },
  { name: 'A circle', input: 'LDRRUULLDR', expected: true },
  { name: 'Fitts Law', input: '', expected: true },
  { name: 'One move', input: 'U', expected: false },
  { name: 'Wrong Test 1', input: 'LDRRLRUULR', expected: false },
  { name: 'Wrong Test 2', input: 'RLUURDDDLU', expected: true }
];

tests.forEach(({ name, input, expected }) => {
  const result = judgeCircle(input);
  console.log(`if (${expected} === ${result}) {`);
  if (expected === result) {
    console.log(`✅ ${name}: ${input}`);
  } else {
    console.log(`🔴 ${name}: expected "${expected}", but got "${result}"`);
  }
});
