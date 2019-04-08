// 1021. Remove Outermost Parentheses
// https://leetcode.com/problems/remove-outermost-parentheses/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} S
 * @return {string}
 */
const removeOuterParentheses = S => {
  let answer = '';
  for (let level = i = 0; i < S.length; i++) {
    const char = S[i];
    if ('(' === char) level++;
    if (1 < level) answer += char;
    if (')' === char) level--;
  }
  return answer;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [{
    name: 'Example 1',
    input: "(()())(())",
    expected: "()()()"
  },
  {
    name: 'Example 2',
    input: "(()())(())(()(()))",
    expected: "()()()()(())"
  },
  {
    name: 'Example 3',
    input: "()()",
    expected: ""
  },
  {
    name: 'One',
    input: '()',
    expected: ''
  },
  {
    name: 'One, Deeply Nested',
    input: '((((()))))',
    expected: '(((())))'
  }
];

tests.forEach(({
  name,
  input,
  expected
}) => {
  const result = removeOuterParentheses(input);
  if (result === expected) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
})