// 709. To Lower Case
// https://leetcode.com/problems/to-lower-case/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} str
 * @return {string}
 */
const toLowerCase = str => str.toLowerCase();

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    title: 'Example 1',
    input: 'Hello',
    output: 'hello'
  },
  {
    title: 'Example 2',
    input: 'here',
    output: 'here'
  },
  {
    title: 'Example 3',
    input: 'LOVELY',
    output: 'lovely'
  },
  {
    title: 'Empty string',
    input: '',
    output: ''
  },
  {
    title: 'Single lowercase',
    input: 'a',
    output: 'a'
  },
  {
    title: 'Single Uppercase',
    input: 'A',
    output: 'a'
  },
  {
    title: 'A digit',
    input: '1',
    output: '1'
  }
];

tests.forEach(test => {
  console.log(`${test.title}: ${test.output === toLowerCase(test.input)}`);
});
