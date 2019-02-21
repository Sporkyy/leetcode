// 804. Unique Morse Code Words
// https://leetcode.com/problems/unique-morse-code-words/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
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
    '--..'
  ];
  const toMorseCode = s =>
    s
      .split('')
      .map(l => codes[l.charCodeAt(0) - 97])
      .join('');
  return new Set(words.map(word => toMorseCode(word))).size;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example',
    input: ['gin', 'zen', 'gig', 'msg'],
    output: 2
  },
  {
    name: 'Empty array',
    input: [],
    output: 0
  },
  {
    name: 'One word',
    input: ['xyzzy'],
    output: 1
  },
  {
    name: 'Words different lengths',
    input: ['larry', 'moe', 'curly'],
    output: 3
  }
];

tests.forEach(test => {
  const result = uniqueMorseRepresentations(test.input);
  if (test.output === result) {
    console.log(`${test.name}: okay`);
  } else {
    console.log(`${test.name}: got ${result}; expected ${test.output}`);
  }
});
