// 509. Fibonacci Number
// https://leetcode.com/problems/fibonacci-number/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 13.95% of JavaScript online submissions
// for Fibonacci Number.
// Memory Usage: 34.2 MB, less than 32.36% of JavaScript online submissions
// for Fibonacci Number.

/**
 * @param {number} N
 * @return {number}
 */
const fib = N => (N <= 1 ? N : fib(N - 1) + fib(N - 2));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: 2,
    expected: 1,
  },
  {
    input: 3,
    expected: 2,
  },
  {
    input: 4,
    expected: 3,
  },
  {
    input: 0,
    expected: 0,
  },
  {
    input: 1,
    expected: 1,
  },
];

tests.forEach(({ input, expected }) => {
  const result = fib(input);
  if (result === expected) {
    console.log(`✅ ${input}`);
  } else {
    console.log(`🔴 ${input}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
