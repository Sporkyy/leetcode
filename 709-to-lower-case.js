// 709. To Lower Case
// https://leetcode.com/problems/to-lower-case/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 48 ms, faster than 88.27% of JavaScript online submissions
// for To Lower Case.
// Memory Usage: 33.8 MB, less than 69.79% of JavaScript online submissions
// for To Lower Case.

/**
 * @param {string} str
 * @return {string}
 */
const toLowerCase = str => str.toLowerCase();

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: 'Hello',
    expected: 'hello',
  },

  {
    input: 'here',
    expected: 'here',
  },

  {
    input: 'LOVELY',
    expected: 'lovely',
  },

  {
    input: '',
    expected: '',
  },

  {
    input: 'a',
    expected: 'a',
  },

  {
    input: 'A',
    expected: 'a',
  },

  {
    input: '1',
    expected: '1',
  },
];

for (let { input, expected } of tests) {
  const output = toLowerCase(input);
  if (expected === output) {
    console.log(`✅ ${input}`);
  } else {
    console.log(`🔴 ${input}`);
    console.log(`<i>Expected <b>${expected}</b>, but got <b>${output}</b></i>`);
  }
}
