// 12. Integer to Roman
// https://leetcode.com/problems/integer-to-roman/submissions/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 144 ms, faster than 86.75% of JavaScript online submissions
// Memory Usage: 43.9 MB, less than 9.92% of JavaScript online submissions

/**
 * @param {number} num
 * @return {string}
 */
// const intToRoman = num => {
//   const dict = {
//     0: '',
//     1: 'I',
//     2: 'II',
//     3: 'III',
//     4: 'IV',
//     5: 'V',
//     6: 'VI',
//     7: 'VII',
//     8: 'VIII',
//     9: 'IX',
//     10: 'X',
//     20: 'XX',
//     30: 'XXX',
//     40: 'XL',
//     50: 'L',
//     60: 'LX',
//     70: 'LXX',
//     80: 'LXXX',
//     90: 'XC',
//     100: 'C',
//     200: 'CC',
//     300: 'CCC',
//     400: 'CD',
//     500: 'D',
//     600: 'DC',
//     700: 'DCC',
//     800: 'DCCC',
//     900: 'CM',
//     1000: 'M',
//     2000: 'MM',
//     3000: 'MMM',
//   };
//   let k, h, da;
//   [k, num] = [Math.trunc(num / 1000) * 1000, num % 1000];
//   [h, num] = [Math.trunc(num / 100) * 100, num % 100];
//   [da, num] = [Math.trunc(num / 10) * 10, num % 10];
//   return dict[k] + dict[h] + dict[da] + dict[num];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 156 ms, faster than 78.85% of JavaScript online submissions
// Memory Usage: 40.2 MB, less than 63.66% of JavaScript online submissions

// /**
//  * @param {number} num
//  * @return {string}
//  */
// const intToRoman = num => {
//   const dict = [
//     ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
//     ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
//     ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
//     ['', 'M', 'MM', 'MMM'],
//   ];
//   return (
//     dict[3][Math.trunc(num / 1000)] +
//     dict[2][Math.trunc((num % 1000) / 100)] +
//     dict[1][Math.trunc((num % 100) / 10)] +
//     dict[0][num % 10]
//   );
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 320 ms, faster than 5.29% of JavaScript online submissions
// Memory Usage: 44 MB, less than 10.00% of JavaScript online submissions

/**
 * @param {number} int
 * @param {string} [rom='']
 * @param {number} [f=1000]
 * @returns {string}
 */
const intToRoman = (int, rom = '', f = 1000) => {
  if (f < 1) return rom;
  let [i, j, k] = {
    1: ['I', 'V', 'X'],
    10: ['X', 'L', 'C'],
    100: ['C', 'D', 'M'],
    1000: ['M'],
  }[f];
  const letters = [
    /* 0 */ [],
    /* 1 */ [i],
    /* 2 */ [i, i],
    /* 3 */ [i, i, i],
    /* 4 */ [i, j],
    /* 5 */ [j],
    /* 6 */ [j, i],
    /* 7 */ [j, i, i],
    /* 8 */ [j, i, i, i],
    /* 9 */ [i, k],
  ][Math.trunc(int / f)];
  return intToRoman(int % f, `${rom}${letters.join('')}`, f / 10);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(intToRoman(3), 'III');

strictEqual(intToRoman(4), 'IV');

strictEqual(intToRoman(9), 'IX');

strictEqual(intToRoman(58), 'LVIII');

strictEqual(intToRoman(1994), 'MCMXCIV');

strictEqual(intToRoman(10), 'X');

strictEqual(intToRoman(1986), 'MCMLXXXVI');
