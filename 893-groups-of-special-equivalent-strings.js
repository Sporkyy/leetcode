// 893. Groups of Special-Equivalent Strings
// https://leetcode.com/problems/groups-of-special-equivalent-strings/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const evenChars = s =>
  s
    .split('')
    .filter((c, i) => 0 === i % 2)
    .join('');

// console.log(evenChars('abcd'));

const oddChars = s =>
  s
    .split('')
    .filter((c, i) => 1 === i % 2)
    .join('');

// console.log(oddChars('abcd'));

const sortedString = s =>
  s
    .split('')
    .sort()
    .join('');

const normalized = s => `${sortedString(evenChars(s))}${sortedString(oddChars(s))}`;

// console.log(normalized('abc'));
// console.log(normalized('cba'));

/**
 * @param {string[]} A
 * @return {number}
 */
const numSpecialEquivGroups = A => new Set(A.map(s => normalized(s))).size;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: ['a', 'b', 'c', 'a', 'c', 'c'],
    expected: 3,
    // Explanation: 3 groups ["a","a"], ["b"], ["c","c","c"]
  },
  {
    name: 'Example 2',
    input: ['aa', 'bb', 'ab', 'ba'],
    expected: 4,
    // Explanation: 4 groups ["aa"], ["bb"], ["ab"], ["ba"]
  },
  {
    name: 'Example 3',
    input: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'],
    expected: 3,
    // Explanation: 3 groups ["abc","cba"], ["acb","bca"], ["bac","cab"]
  },
  {
    name: 'Example 4',
    input: ['abcd', 'cdab', 'adcb', 'cbad'],
    expected: 1,
    // Explanation: 1 group ["abcd","cdab","adcb","cbad"]
  },
];

tests.forEach(({ name, input, expected }) => {
  const result = numSpecialEquivGroups(input);
  if (expected === result) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
