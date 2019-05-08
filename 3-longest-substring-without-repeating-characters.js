// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: 'abcabcbb',
    expected: 3,
    // Explanation: The answer is "abc", with the length of 3.
  },
  {
    name: 'Example 2',
    input: 'bbbbb',
    expected: 1,
    // Explanation: The answer is "b", with the length of 1.
  },
  {
    name: 'Example 3',
    input: 'pwwkew',
    expected: 3,
    // Explanation: The answer is "wke", with the length of 3.
  },
];

tests.forEach(({ name, input, expected }) => {
  const output = lengthOfLongestSubstring(input);
  if (expected === output) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
});
