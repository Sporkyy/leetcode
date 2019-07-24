// 557. Reverse Words in a String III
// https://leetcode.com/problems/reverse-words-in-a-string-iii/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 40.02% of JavaScript online submissions
// for Reverse Words in a String III.
// Memory Usage: 42.2 MB, less than 45.07% of JavaScript online submissions
// for Reverse Words in a String III.

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = s =>
  s
    .split(' ')
    .map(w =>
      w
        .split('')
        .reverse()
        .join(''),
    )
    .join(' ');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: "Let's take LeetCode contest",
    expected: "s'teL ekat edoCteeL tsetnoc",
  },
];

tests.forEach(({ input, expected }) => {
  const result = reverseWords(input);
  if (expected === result) {
    console.log(`✅ ${input}`);
  } else {
    console.log(`🔴 ${input}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
