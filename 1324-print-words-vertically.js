// 1324. Print Words Vertically
// https://leetcode.com/problems/print-words-vertically/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} s
 * @return {string[]}
 */
const printVertically = s => {
  const words = s.split(' ');
  const max = Math.max(...words.map(w => w.length));
  // console.log(max);
  const padded = words.map(w => w.padEnd(max));
  // console.log(padded);
  const rows = new Array(max).fill('');
  // console.log(rows);
  for (let i = 0; i < rows.length; i++)
    for (let j = 0; j < padded.length; j++) rows[i] += padded[j][i];
  // console.log(rows);
  const trimmed = rows.map(r => r.trimEnd());
  return trimmed;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(printVertically('HOW ARE YOU'), ['HAY', 'ORO', 'WEU']);

// Explanation: Each word is printed vertically.
// "HAY"
// "ORO"
// "WEU"

deepStrictEqual(printVertically('TO BE OR NOT TO BE'), [
  'TBONTB',
  'OEROOE',
  '   T',
]);

// Explanation: Trailing spaces is not allowed.
// "TBONTB"
// "OEROOE"
// "   T"

deepStrictEqual(printVertically('CONTEST IS COMING'), [
  'CIC',
  'OSO',
  'N M',
  'T I',
  'E N',
  'S G',
  'T',
]);
