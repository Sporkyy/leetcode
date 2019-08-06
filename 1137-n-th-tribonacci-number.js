// 1137. N-th Tribonacci Number
// https://leetcode.com/problems/n-th-tribonacci-number/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 63.26% of JavaScript online submissions
// for N-th Tribonacci Number.
// Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions
// for N-th Tribonacci Number.

/**
 * @param {number} n
 * @return {number}
 */
// const tribonacci = n => {
//   let [x, y, z] = [0, 1, 1];
//   if (n < 3) return [x, y, z][n];
//   for (i = 3; i < n; i++) [x, y, z] = [y, z, x + y + z];
//   return x + y + z;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 34.47% of JavaScript online submissions
// for N-th Tribonacci Number.
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions
// for N-th Tribonacci Number.

const tribonacci = n => {
  a = [0, 1, 1];
  for (i = 3; i <= n; i++) a[i] = a[i - 3] + a[i - 2] + a[i - 1];
  return a[n];
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// t0 = 0 + 1 + 1 = 0
// t1 = 0 + 1 + 1 = 1
// t2 = 0 + 1 + 1 = 1
// t3 = 0 + 1 + 1 = 2
// t4 = 1 + 1 + 2 = 4
// t5 = 1 + 2 + 4 = 7
// t6 = 2 + 4 + 7 = 13

const tests = [
  {
    input: 0,
    expected: 0,
  },

  {
    input: 1,
    expected: 1,
  },

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
    expected: 4,
  },

  {
    input: 5,
    expected: 7,
  },

  {
    input: 6,
    expected: 13,
  },

  {
    input: 25,
    expected: 1389537,
  },
];

for ({ input, expected } of tests) {
  const result = tribonacci(input);
  if (expected === result) {
    console.log(`✅ ${input}`);
  } else {
    console.log(`🔴 ${input}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
}
