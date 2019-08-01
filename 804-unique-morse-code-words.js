// 804. Unique Morse Code Words
// https://leetcode.com/problems/unique-morse-code-words/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 96 ms, faster than 5.78% of JavaScript online submissions
// for Unique Morse Code Words.
// Memory Usage: 35.9 MB, less than 25.00% of JavaScript online submissions
// for Unique Morse Code Words.

/**
 * @param {string[]} words
 * @return {number}
 */
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
// for Unique Morse Code Words.
// Memory Usage: 35.4 MB, less than 55.00% of JavaScript online submissions
// for Unique Morse Code Words.

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
// for Unique Morse Code Words.
// Memory Usage: 35.6 MB, less than 57.72% of JavaScript online submissions
// for Unique Morse Code Words.

/**
 * @param {string[]} words
 * @return {number}
 */
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
//     for (j = 0; j < words[i].length; j++) m[i] += codes[words[i].charCodeAt(j) - 97];
//   o = {};
//   for (const word of m) o[word] = 0;
//   return Object.keys(o).length;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 84.77% of JavaScript online submissions
// for Unique Morse Code Words.
// Memory Usage: 34.9 MB, less than 96.75% of JavaScript online submissions
// for Unique Morse Code Words.

/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = words => {
  const codes = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];
  set = new Set();
  for (let i = 0, word; i < words.length && !(word = ''); set.add(word), i++)
    for (j = 0; j < words[i].length; j++) word += codes[words[i].charCodeAt(j) - 97];
  return set.size;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example',
    input: ['gin', 'zen', 'gig', 'msg'],
    expected: 2,
  },
  {
    name: 'Empty array',
    input: [],
    expected: 0,
  },
  {
    name: 'One word',
    input: ['xyzzy'],
    expected: 1,
  },
  {
    name: 'Words different lengths',
    input: ['larry', 'moe', 'curly'],
    expected: 3,
  },
];

tests.forEach(({ name, input, expected }) => {
  const result = uniqueMorseRepresentations(input);
  if (expected === result) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected ${expected} but got ${result}`);
  }
});
