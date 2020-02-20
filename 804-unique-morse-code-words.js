// 804. Unique Morse Code Words
// https://leetcode.com/problems/unique-morse-code-words/

/*

International Morse Code defines a standard encoding where each letter
is mapped to a series of dots and dashes, as follows:
  - "a" maps to ".-"
  - "b" maps to "-..."
  - "c" maps to "-.-."
and so on.

For convenience, the full table for the 26 letters of the English alphabet
is given below:

[
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--.."
]

Now, given a list of words, each word can be written as a concatenation
of the Morse code of each letter. For example, "cba" can be written
as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-").
We'll call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 96 ms, faster than 5.78% of JavaScript online submissions
// Memory Usage: 35.9 MB, less than 25.00% of JavaScript online submissions

// /**
//  * @param {string[]} words
//  * @return {number}
//  */
// var uniqueMorseRepresentations = function(words) {
//   const codes = [
//     '.-',
//     '-...',
//     '-.-.',
//     '-..',
//     '.',
//     '..-.',
//     '--.',
//     '....',
//     '..',
//     '.---',
//     '-.-',
//     '.-..',
//     '--',
//     '-.',
//     '---',
//     '.--.',
//     '--.-',
//     '.-.',
//     '...',
//     '-',
//     '..-',
//     '...-',
//     '.--',
//     '-..-',
//     '-.--',
//     '--..',
//   ];
//   const toMorseCode = s =>
//     s
//       .split('')
//       .map(l => codes[l.charCodeAt(0) - 97])
//       .join('');
//   return new Set(words.map(word => toMorseCode(word))).size;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 35.4 MB, less than 55.00% of JavaScript online submissions

// const codes = [
//   '.-',
//   '-...',
//   '-.-.',
//   '-..',
//   '.',
//   '..-.',
//   '--.',
//   '....',
//   '..',
//   '.---',
//   '-.-',
//   '.-..',
//   '--',
//   '-.',
//   '---',
//   '.--.',
//   '--.-',
//   '.-.',
//   '...',
//   '-',
//   '..-',
//   '...-',
//   '.--',
//   '-..-',
//   '-.--',
//   '--..',
// ];

// const toMorseCode = s => {
//   let result = '';
//   for (let i = s.length - 1; 0 <= i; --i) {
//     result = `${codes[s[i].charCodeAt(0) - 97]}${result}`;
//   }
//   return result;
// };

// /**
//  * @param {string[]} words
//  * @return {number}
//  */
// const uniqueMorseRepresentations = words => {
//   const result = new Set();
//   for (let i = words.length - 1; 0 <= i; --i) {
//     result.add(toMorseCode(words[i]));
//   }
//   return result.size;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 94.39% of JavaScript online submissions
// Memory Usage: 35.6 MB, less than 57.72% of JavaScript online submissions

// /**
//  * @param {string[]} words
//  * @return {number}
//  */
// const uniqueMorseRepresentations = words => {
//   const codes = [
//     '.-',
//     '-...',
//     '-.-.',
//     '-..',
//     '.',
//     '..-.',
//     '--.',
//     '....',
//     '..',
//     '.---',
//     '-.-',
//     '.-..',
//     '--',
//     '-.',
//     '---',
//     '.--.',
//     '--.-',
//     '.-.',
//     '...',
//     '-',
//     '..-',
//     '...-',
//     '.--',
//     '-..-',
//     '-.--',
//     '--..',
//   ];
//   m = new Array(words.length).fill('');
//   for (i = 0; i < words.length; i++)
//     for (j = 0; j < words[i].length; j++)
//       m[i] += codes[words[i].charCodeAt(j) - 97];
//   o = {};
//   for (const word of m) o[word] = 0;
//   return Object.keys(o).length;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 84.77% of JavaScript online submissions
// Memory Usage: 34.9 MB, less than 96.75% of JavaScript online submissions

// /**
//  * @param {string[]} words
//  * @return {number}
//  */
// const uniqueMorseRepresentations = words => {
//   const codes = [
//     '.-',
//     '-...',
//     '-.-.',
//     '-..',
//     '.',
//     '..-.',
//     '--.',
//     '....',
//     '..',
//     '.---',
//     '-.-',
//     '.-..',
//     '--',
//     '-.',
//     '---',
//     '.--.',
//     '--.-',
//     '.-.',
//     '...',
//     '-',
//     '..-',
//     '...-',
//     '.--',
//     '-..-',
//     '-.--',
//     '--..',
//   ];
//   const set = new Set();
//   for (let i = 0, word; i < words.length && !(word = ''); set.add(word), i++)
//     for (let j = 0; j < words[i].length; j++)
//       word += codes[words[i].charCodeAt(j) - 97];
//   return set.size;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 33.87% of JavaScript online submissions
// Memory Usage: 36.6 MB, less than 27.78% of JavaScript online submissions

/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = words =>
  new Set(
    words.map(word =>
      [...word]
        .map(
          c =>
            [
              /* a */ '.-',
              /* b */ '-...',
              /* c */ '-.-.',
              /* d */ '-..',
              /* e */ '.',
              /* f */ '..-.',
              /* g */ '--.',
              /* h */ '....',
              /* i */ '..',
              /* j */ '.---',
              /* k */ '-.-',
              /* l */ '.-..',
              /* m */ '--',
              /* n */ '-.',
              /* o */ '---',
              /* p */ '.--.',
              /* q */ '--.-',
              /* r */ '.-.',
              /* s */ '...',
              /* t */ '-',
              /* u */ '..-',
              /* v */ '...-',
              /* w */ '.--',
              /* x */ '-..-',
              /* y */ '-.--',
              /* z */ '--..',
            ][c.charCodeAt(0) - 97],
        )
        .join(''),
    ),
  ).size;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

strictEqual(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']), 2);

strictEqual(uniqueMorseRepresentations([]), 0);

strictEqual(uniqueMorseRepresentations(['xyzzy']), 1);

strictEqual(uniqueMorseRepresentations(['larry', 'moe', 'curly']), 3);
