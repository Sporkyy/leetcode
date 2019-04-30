// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 268 ms, faster than 59.92% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 46.1 MB, less than 7.87% of JavaScript online submissions for Palindrome Number.

// const reverseString = s =>
//   s
//     .split('')
//     .reverse()
//     .join('');

/**
 * @param {number} x
 * @return {boolean}
 */
// const isPalindrome = x => reverseString('' + x) === '' + x;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 264 ms, faster than 64.45% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 45.6 MB, less than 46.07% of JavaScript online submissions for Palindrome Number.

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
  const s = '' + x;
  for (let i = 0, j = s.length - 1; 0 <= j; i++, --j) {
    if (s[i] !== s[j]) return false;
  }
  return true;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: 121,
    expected: true,
  },
  {
    name: 'Example 2',
    input: -121,
    expected: false,
  },
  {
    name: 'Example 3',
    input: 10,
    expected: false,
  },
  {
    name: 'Wrong answer',
    input: 1000021,
    expected: false,
  },
];

tests.forEach(({ name, input, expected }) => {
  const output = isPalindrome(input);
  if (expected === output) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
});
