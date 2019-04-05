// 557. Reverse Words in a String III
// https://leetcode.com/problems/reverse-words-in-a-string-iii/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = s => s.split(' ').map(w => w.split('').reverse().join('')).join(' ');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [{
  name: 'Example 1',
  input: "Let's take LeetCode contest",
  expected: "s'teL ekat edoCteeL tsetnoc"
}];

tests.forEach(({
  name,
  input,
  expected
}) => {
  const result = reverseWords(input);
  if (expected === result) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});