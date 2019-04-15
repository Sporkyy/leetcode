// 500. Keyboard Row
// https://leetcode.com/problems/keyboard-row/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Instead of a functional programming approach, I tried to make an optomized solution
 * But this isn't better.
 *
 * @param {string[]} words
 * @return {string[]}
 */
// const findWords = words => {
//   const keyboard = [
//     ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
//     ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
//     ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
//   ];
//   const oneLineWords = [];
//   for (let i = 0; i < words.length; i++) {
//     let didMatchRow1 = false;
//     let didMatchRow2 = false;
//     let didMatchRow3 = false;
//     for (let j = 0; j < words[i].length; j++) {
//       for (let k = 0; k < keyboard.length; k++) {
//         for (let l = 0; l < keyboard[k].length; l++) {
//           if (words[i][j].toLowerCase() === keyboard[k][l]) {
//             switch (k) {
//               case 0:
//                 didMatchRow1 = true;
//                 break;
//               case 1:
//                 didMatchRow2 = true;
//                 break;
//               case 2:
//                 didMatchRow3 = true;
//                 break;
//             }
//           }
//           if (
//             (didMatchRow1 && didMatchRow2) ||
//             (didMatchRow2 && didMatchRow3) ||
//             (didMatchRow1 && didMatchRow3)
//           ) {
//             break;
//           }
//         }
//         if (
//           (didMatchRow1 && didMatchRow2) ||
//           (didMatchRow2 && didMatchRow3) ||
//           (didMatchRow1 && didMatchRow3)
//         ) {
//           break;
//         }
//       }
//       if (
//         (didMatchRow1 && didMatchRow2) ||
//         (didMatchRow2 && didMatchRow3) ||
//         (didMatchRow1 && didMatchRow3)
//       ) {
//         break;
//       }
//     }
//     if (
//       (didMatchRow1 && !didMatchRow2 && !didMatchRow3) ||
//       (!didMatchRow1 && didMatchRow2 && !didMatchRow3) ||
//       (!didMatchRow1 && !didMatchRow2 && didMatchRow3)
//     ) {
//       oneLineWords.push(words[i]);
//     }
//   }
//   return oneLineWords;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const rows = ['qwertyuiop'.split(''), 'asdfghjkl'.split(''), 'zxcvbnm'.split('')];

const includesAny = (s, a) => a.reduce((acc, curr) => (acc = acc || s.includes(curr)), false);

/**
 * See? This is faster and uses less memory even though it's easier to understand
 *
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = words =>
  words.filter(word => 1 === rows.filter(row => includesAny(word, row)).length);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example',
    input: ['Hello', 'Alaska', 'Dad', 'Peace'],
    expected: ['Alaska', 'Dad'],
  },
];

const areArraysEqual = (a1, a2) => a1.length === a2.length && a1.join() === a2.join();

tests.forEach(({ name, input, expected }) => {
  const result = findWords(input);
  if (areArraysEqual(expected, result)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
