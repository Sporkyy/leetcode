// 1324. Print Words Vertically
// https://leetcode.com/problems/print-words-vertically/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 7.88% of JavaScript online submissions
// Memory Usage: 33.6 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {string[]}
//  */
// const printVertically = s => {
//   const words = s.split(' ');
//   const max = Math.max(...words.map(w => w.length));
//   // console.log(max);
//   const padded = words.map(w => w.padEnd(max));
//   // console.log(padded);
//   const rows = new Array(max).fill('');
//   // console.log(rows);
//   for (let i = 0; i < rows.length; i++)
//     for (let j = 0; j < padded.length; j++) rows[i] += padded[j][i];
//   // console.log(rows);
//   const trimmed = rows.map(r => r.trimEnd());
//   return trimmed;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 116 ms, faster than 7.88% of JavaScript online submissions
// Memory Usage: 35.3 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} s
 * @return {string[]}
 */
const printVertically = s => {
  const rows = new Array(s.length)
    .fill()
    .map(_u => new Array(s.length).fill(' '));
  let [row, col] = [0, 0];
  let [rowMax, colMax] = [0, 0];
  for (let i = 0; i < s.length; i++) {
    if (' ' === s[i]) {
      row = 0;
      col++;
      continue;
    }
    rows[row][col] = s[i];
    row++;
    [rowMax, colMax] = [Math.max(row, rowMax), Math.max(col, colMax)];
  }
  return rows
    .slice(0, rowMax)
    .map(r => r.slice(0, colMax + 1))
    .map(r => r.reduce((acc, curr) => (acc += curr)).trimRight());
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(printVertically('HOW ARE YOU'), ['HAY', 'ORO', 'WEU']);

// // Explanation: Each word is printed vertically.
// // "HAY"
// // "ORO"
// // "WEU"

deepStrictEqual(printVertically('TO BE OR NOT TO BE'), [
  'TBONTB',
  'OEROOE',
  '   T',
]);

// // Explanation: Trailing spaces is not allowed.
// // "TBONTB"
// // "OEROOE"
// // "   T"

deepStrictEqual(printVertically('CONTEST IS COMING'), [
  'CIC',
  'OSO',
  'N M',
  'T I',
  'E N',
  'S G',
  'T',
]);

deepStrictEqual(printVertically('HOW IS IT GOING'), [
  'HIIG',
  'OSTO',
  'W  I',
  '   N',
  '   G',
]);
