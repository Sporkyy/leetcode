// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 87.22% of JavaScript online submissions
// for Valid Parentheses.
// Memory Usage: 33.9 MB, less than 67.84% of JavaScript online submissions
// for Valid Parentheses.

/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//   const values = {
//     '(': 1,
//     ')': -1,
//     '{': 2,
//     '}': -2,
//     '[': 3,
//     ']': -3,
//   };
//   const stack = [];
//   for (i = 0; i < s.length; i++) {
//     const v = values[s[i]];
//     if (0 < v) {
//       stack.push(v);
//     } else {
//       if (0 !== stack.pop() + v) return false;
//     }
//   }
//   return 0 === stack.length;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 94.35% of JavaScript online submissions
// for Valid Parentheses.
// Memory Usage: 35.1 MB, less than 25.74% of JavaScript online submissions
// for Valid Parentheses.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const dict = {
    ']': '[',
    '}': '{',
    ')': '(',
  };
  const stack = [];
  for (i = 0; i < s.length; i++) {
    if ('[' === s[i] || '{' === s[i] || '(' === s[i]) {
      stack.push(s[i]);
    } else {
      if (stack.pop() !== dict[s[i]]) return false;
    }
  }
  return 0 === stack.length;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

tests = [
  {
    input: '()',
    expected: true,
  },
  {
    input: '()[]{}',
    expected: true,
  },
  {
    input: '(]',
    expected: false,
  },
  {
    input: '([])',
    expected: true,
  },
  {
    input: '([)]',
    expected: false,
  },
  {
    input: '{[]}',
    expected: true,
  },
  {
    input: '',
    expected: true,
  },
  {
    input: '({)',
    expected: false,
  },
  {
    input: '([{}]){[()]}',
    expected: true,
  },
  {
    input: '[])',
    expected: false,
  },
];

tests.forEach(({ input, expected }) => {
  const output = isValid(input);
  if (expected === output) {
    console.log(`✅ ${input}`);
  } else {
    console.log(`🔴 ${input}`);
    console.log(`Expected "${expected}" but got "${output}"`);
  }
});
