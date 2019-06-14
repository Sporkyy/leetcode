// 1078. Occurrences After Bigram
// https://leetcode.com/problems/occurrences-after-bigram/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 48 ms, faster than 91.64% of JavaScript online submissions
// for Occurrences After Bigram.
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions
// for Occurrences After Bigram.

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
const findOcurrences = (text, first, second) =>
  text.split(' ').reduce((acc, curr, i, t) => {
    if (i < 2) return acc;
    if (first === t[i - 2] && second === t[i - 1]) acc.push(curr);
    return acc;
  }, []);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: {
      text: 'alice is a good girl she is a good student',
      first: 'a',
      second: 'good',
    },
    expected: ['girl', 'student'],
  },
  {
    input: {
      text: 'we will we will rock you',
      first: 'we',
      second: 'will',
    },
    expected: ['we', 'rock'],
  },
];

const areArraysEqual = (a, b) => a.length === b.length && a.join() === b.join();

tests.forEach(({ input: { text, first, second }, expected }) => {
  const output = findOcurrences(text, first, second);
  if (areArraysEqual(expected, output)) {
    console.log(`✅ ${text}`);
  } else {
    console.log(`🔴 ${text}`);
    console.log('Expected the below');
    console.log(expected);
    console.log('But got the below instead');
    console.log(output);
  }
});
