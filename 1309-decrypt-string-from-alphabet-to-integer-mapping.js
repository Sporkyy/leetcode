// 1309. Decrypt String from Alphabet to Integer Mapping
//       https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/

/*

Given a string s formed by digits ('0' - '9') and '#' . We want to map s to
English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.

Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.

Return the string formed after mapping.

It's guaranteed that a unique mapping will always exist.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 48 ms, faster than 94.08% of JavaScript online submissions
// Memory Usage: 34.1 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {string}
//  */
// const freqAlphabets = s => {
//   for (let i = 26; 0 < i; i--)
//     s = s.replace(
//       new RegExp(`${i}${9 < i ? '#' : ''}`, 'g'),
//       String.fromCharCode(96 + i),
//     );
//   return s;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 40.69% of JavaScript online submissions
// Memory Usage: 35.7 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} s
 * @return {string}
 */
const freqAlphabets = (cypherText, clearText = '') =>
  !cypherText.length
    ? clearText
    : '#' === cypherText[2]
    ? freqAlphabets(
        cypherText.slice(3),
        `${clearText}${String.fromCharCode(
          96 + Number.parseInt(cypherText[0] + cypherText[1], 10),
        )}`,
      )
    : freqAlphabets(
        cypherText.slice(1),
        `${clearText}${String.fromCharCode(
          96 + Number.parseInt(cypherText[0], 10),
        )}`,
      );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(freqAlphabets('10#11#12'), 'jkab');
// Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".

// Example 2:
strictEqual(freqAlphabets('1326#'), 'acz');

// Example 3:
strictEqual(freqAlphabets('25#'), 'y');

// Example 4:
strictEqual(
  freqAlphabets('12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#'),
  'abcdefghijklmnopqrstuvwxyz',
);

// Tests
strictEqual(freqAlphabets('824#15#826#'), 'hxohz');

strictEqual(freqAlphabets('1'), 'a');
