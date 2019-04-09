// 344. Reverse String
// https://leetcode.com/problems/reverse-string/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = s => {
  return s.reverse();
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  { name: 'Example 1', input: ['h', 'e', 'l', 'l', 'o'], expected: ['o', 'l', 'l', 'e', 'h'] },
  {
    name: 'Example 2',
    input: ['H', 'a', 'n', 'n', 'a', 'h'],
    expected: ['h', 'a', 'n', 'n', 'a', 'H'],
  },
];

const areArraysEqual = (a1, a2) =>
  a1.length === a2.length &&
  a1.reduce(
    (acc, curr, i) => ('undefined' === typeof acc ? curr === a2[i] : acc && curr === a2[i]),
    undefined,
  );

tests.forEach(({ name, input, expected }) => {
  const result = reverseString(input);
  if (areArraysEqual(result, expected)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
