// 7. Reverse Integer
// https://leetcode.com/problems/reverse-integer/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 87.63% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 35.8 MB, less than 68.32% of JavaScript online submissions for Reverse Integer.

/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  // console.log(x);
  const s = '' + x;
  let result = '';
  let isNegative = false;
  for (let i = s.length - 1; 0 <= i; --i) {
    if (i === 0 && '-' === s[i]) {
      isNegative = true;
    } else {
      result += s[i];
    }
  }
  result = parseInt(result, 10);
  // console.log(result);
  if (isNegative) result *= -1;
  if (result < Math.pow(-2, 31) || Math.pow(2, 31) < result) return 0;
  return result;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: 123,
    expected: 321,
  },
  {
    name: 'Example 2',
    input: -123,
    expected: -321,
  },
  {
    name: 'Example 3',
    input: 120,
    expected: 21,
  },
  {
    name: 'Almost overflow high',
    input: parseInt(('' + Math.pow(2, 30)).split().reverse(), 10),
    expected: 0,
  },
  {
    name: 'Almost overflow low',
    input: -1 * parseInt(('' + Math.pow(2, 30)).split().reverse(), 10),
    expected: 0,
  },
  {
    name: 'Overflow high',
    input: parseInt(('' + Math.pow(2, 32)).split().reverse(), 10),
    expected: 0,
  },
  {
    name: 'Overflow low',
    input: -1 * parseInt(('' + Math.pow(2, 32)).split().reverse(), 10),
    expected: 0,
  },
];

tests.forEach(({ name, input, expected }) => {
  const output = reverse(input);
  if (output === expected) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
});
