// 500. Keyboard Row
// https://leetcode.com/problems/keyboard-row/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 7.93% of JavaScript online submissions
// for Keyboard Row.
// Memory Usage: 35.3 MB, less than 5.08% of JavaScript online submissions
// for Keyboard Row.

/**
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

// Runtime: 48 ms, faster than 92.07% of JavaScript online submissions
// for Keyboard Row.
// Memory Usage: 33.9 MB, less than 16.95% of JavaScript online submissions
// for Keyboard Row.

// const rows = ['qwertyuiop'.split(''), 'asdfghjkl'.split(''), 'zxcvbnm'.split('')];

// const includesAny = (s, a) => a.reduce((acc, curr) => (acc = acc || s.includes(curr)), false);

// /**
//  * @param {string[]} words
//  * @return {string[]}
//  */
// const findWords = words =>
//   words.filter(word => 1 === rows.filter(row => includesAny(word, row)).length);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 76.38% of JavaScript online submissions
// for Keyboard Row.
// Memory Usage: 33.8 MB, less than 46.61% of JavaScript online submissions
// for Keyboard Row.

/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = words => {
  const rowMasks = [2232170, 39698560, 25178133];
  return words.filter(word => {
    word = word.toLowerCase();
    let wordMask = new Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
      wordMask[word[i].charCodeAt(0) - 97] = 1;
    }
    wordMask = parseInt(wordMask.join(''), 2);
    for (let rowMask of rowMasks) {
      if (!(wordMask & ~rowMask)) return true;
    }
    return false;
  });
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example',
    input: ['Hello', 'Alaska', 'Dad', 'Peace'],
    expected: ['Alaska', 'Dad'],
  },
];

tests.forEach(({ name, input, expected }) => {
  const result = findWords(input);
  if (JSON.stringify(expected) === JSON.stringify(result)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
