// 13. Roman to Integer
// https://leetcode.com/problems/roman-to-integer/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 168 ms, faster than 81.22% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 39.8 MB, less than 72.31% of JavaScript online submissions for Roman to Integer.

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = s => {
  let int = 0;

  for (let i = s.length - 1; 0 <= i; --i) {
    switch (s[i - 1] + s[i]) {
      case 'IV':
        int += 4;
        --i;
        continue;
      case 'IX':
        int += 9;
        --i;
        continue;
      case 'XL':
        int += 40;
        --i;
        continue;
      case 'XC':
        int += 90;
        --i;
        continue;
      case 'CD':
        int += 400;
        --i;
        continue;
      case 'CM':
        int += 900;
        --i;
        continue;
    }
    switch (s[i]) {
      case 'I':
        int += 1;
        continue;
      case 'V':
        int += 5;
        continue;
      case 'X':
        int += 10;
        continue;
      case 'L':
        int += 50;
        continue;
      case 'C':
        int += 100;
        continue;
      case 'D':
        int += 500;
        continue;
      case 'M':
        int += 1000;
        continue;
    }
  }

  return int;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: 'III',
    expected: 3,
  },
  {
    name: 'Example 2',
    input: 'IV',
    expected: 4,
  },
  {
    name: 'Example 3',
    input: 'IX',
    expected: 9,
  },
  {
    name: 'Example 4',
    input: 'LVIII',
    expected: 58,
  },
  {
    name: 'Example 5',
    input: 'MCMXCIV',
    expected: 1994,
  },
];

tests.forEach(({ name, input, expected }) => {
  const output = romanToInt(input);
  if (expected === output) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
});
