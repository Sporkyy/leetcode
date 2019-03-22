// 509. Fibonacci Number
// https://leetcode.com/problems/fibonacci-number/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} N
 * @return {number}
 */
const fib = N => (N <= 1 ? N : fib(N - 1) + fib(N - 2));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: 2,
    expected: 1
  },
  {
    name: 'Example 2',
    input: 3,
    expected: 2
  },
  {
    name: 'Example 3',
    input: 4,
    expected: 3
  },
  {
    name: '0',
    input: 0,
    expected: 0
  },
  {
    name: '1',
    input: 1,
    expected: 1
  }
];

tests.forEach(({ name, input, expected }) => {
  const result = fib(input);
  if (result === expected) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
