// 500. Keyboard Row
// https://leetcode.com/problems/keyboard-row/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 7.93% of JavaScript online submissions
// Memory Usage: 35.3 MB, less than 5.08% of JavaScript online submissions

// /**
//  * @param {string[]} words
//  * @return {string[]}
//  */
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
// Memory Usage: 33.9 MB, less than 16.95% of JavaScript online submissions

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
// Memory Usage: 33.8 MB, less than 46.61% of JavaScript online submissions

// /**
//  * @param {string[]} words
//  * @return {string[]}
//  */
// const findWords = words => {
//   const rowMasks = [2232170, 39698560, 25178133];
//   return words.filter(word => {
//     word = word.toLowerCase();
//     let wordMask = new Array(26).fill(0);
//     for (let i = 0; i < word.length; i++) {
//       wordMask[word[i].charCodeAt(0) - 97] = 1;
//     }
//     wordMask = parseInt(wordMask.join(''), 2);
//     for (let rowMask of rowMasks) {
//       if (!(wordMask & ~rowMask)) return true;
//     }
//     return false;
//   });
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 48 ms, faster than 92.07% of JavaScript online submissions
// Memory Usage: 33.7 MB, less than 88.14% of JavaScript online submissions

// /**
//  * @param {string[]} words
//  * @return {string[]}
//  */
// const findWords = words =>
//   words.filter(word => {
//     word = word.toLowerCase();
//     let bits = new Array(26).fill(0);
//     for (let i = 0; i < word.length; i++) bits[word.charCodeAt(i) - 97] = 1;
//     bits = parseInt(bits.join(''), 2);
//     return !(bits & -2232171 && bits & -39698561 && bits & -25178134);
//   });

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 44 ms, faster than 97.42% of JavaScript online submissions
// Memory Usage: 33.7 MB, less than 97.46% of JavaScript online submissions

// /**
//  * @param {string[]} words
//  * @return {string[]}
//  */
// const findWords = words =>
//   words.filter(word => {
//     word = word.toLowerCase();
//     let prevRow;
//     for (let c of word) {
//       const row = {
//         q: 0,
//         w: 0,
//         e: 0,
//         r: 0,
//         t: 0,
//         y: 0,
//         u: 0,
//         i: 0,
//         o: 0,
//         p: 0,
//         a: 1,
//         s: 1,
//         d: 1,
//         f: 1,
//         g: 1,
//         h: 1,
//         j: 1,
//         k: 1,
//         l: 1,
//         z: 2,
//         x: 2,
//         c: 2,
//         v: 2,
//         b: 2,
//         n: 2,
//         m: 2,
//       }[c];
//       if ('undefined' !== typeof prevRow && prevRow !== row) return false;
//       prevRow = row;
//     }
//     return true;
//   });

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 57.99% of JavaScript online submissions
// Memory Usage: 33.9 MB, less than 20.75% of JavaScript online submissions

/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = words =>
  words.filter(word => {
    let prevRow;
    for (let c of word.toLowerCase()) {
      const row = {
        q: 0,
        w: 0,
        e: 0,
        r: 0,
        t: 0,
        y: 0,
        u: 0,
        i: 0,
        o: 0,
        p: 0,
        a: 1,
        s: 1,
        d: 1,
        f: 1,
        g: 1,
        h: 1,
        j: 1,
        k: 1,
        l: 1,
        z: 2,
        x: 2,
        c: 2,
        v: 2,
        b: 2,
        n: 2,
        m: 2,
      }[c];
      if ('undefined' !== typeof prevRow && prevRow !== row) return false;
      prevRow = row;
    }
    return true;
  });

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

deepStrictEqual(findWords(['Hello', 'Alaska', 'Dad', 'Peace']), [
  'Alaska',
  'Dad',
]);

deepStrictEqual(findWords(['abdfs', 'cccd', 'a', 'qwwewm']), ['a']);
