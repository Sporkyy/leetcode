// 905. Sort Array By Parity
// https://leetcode.com/problems/sort-array-by-parity/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// I don't know what's wrong with this
// const sortArrayByParity = A => A.sort((n1, n2) => (0 === n1 % 2 ? (0 === n2 % 2 ? -1 : 0) : 1));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 100.00% of JavaScript online submissions
// for Sort Array By Parity.
// Memory Usage: 37 MB, less than 69.01% of JavaScript online submissions
// for Sort Array By Parity.

/**
 * Filter+Concat
 *
 * @param {number[]} A
 * @return {number[]}
 */
// const sortArrayByParity = A => A.filter(n => 0 === n % 2).concat(A.filter(n => 1 === n % 2));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 92.13% of JavaScript online submissions
// for Sort Array By Parity.
// Memory Usage: 37.4 MB, less than 32.65% of JavaScript online submissions
// for Sort Array By Parity.

/**
 * Filter+Spread
 *
 * @param {number[]} A
 * @return {number[]}
 */
// const sortArrayByParity = A => [...A.filter(n => 0 === n % 2), ...A.filter(n => 1 === n % 2)];

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 100.00% of JavaScript online submissions
// for Sort Array By Parity.
// Memory Usage: 37.4 MB, less than 35.54% of JavaScript online submissions
// for Sort Array By Parity.

/**
 * Filter + Push
 *
 * @param {number[]} A
 * @return {number[]}
 */
// const sortArrayByParity = A => {
//   const result = A.filter(n => 0 === n % 2);
//   const tmp = A.filter(n => 1 === n % 2);
//   const start = result.length;
//   result.length = result.length + tmp.length;
//   for (let i = 0; i < tmp.length; i++) {
//     result[start + i] = tmp[i];
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 100.00% of JavaScript online submissions
// for Sort Array By Parity.
// Memory Usage: 37.4 MB, less than 35.54% of JavaScript online submissions
// for Sort Array By Parity.

/**
 * Loop+Push
 *
 * @param {number[]} A
 * @return {number[]}
 */
// const sortArrayByParity = A => {
//   const result = [];
//   const secondary = [];
//   for (let i = 0; i < A.length; i++) {
//     if (0 === A[i] % 2) {
//       result.push(A[i]);
//     } else {
//       secondary.push(A[i]);
//     }
//   }
//   const start = result.length;
//   result.length = result.length + secondary.length;
//   for (let i = 0; i < secondary.length; i++) {
//     result[start + i] = secondary[i];
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 59.67% of JavaScript online submissions
// for Sort Array By Parity.
// Memory Usage: 37.9 MB, less than 8.00% of JavaScript online submissions
// for Sort Array By Parity.

/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = A => A.sort((a, b) => (a & 1) - (b & 1));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: [3, 1, 2, 4],
    expected: [2, 4, 3, 1],
  },

  {
    input: [2, 3, 1, 4],
    expected: [2, 4, 3, 1],
  },

  {
    input: [0, 2, 4, 6],
    expected: [0, 2, 4, 6],
  },

  {
    input: [1, 3, 5, 7],
    expected: [1, 3, 5, 7],
  },

  {
    input: [1, 3, 2, 5, 7],
    expected: [2, 1, 3, 5, 7],
  },

  {
    input: [1, 2, 3, 4, 5],
    expected: [2, 4, 1, 3, 5],
  },

  {
    input: [
      4016,
      2240,
      402,
      1600,
      2540,
      4665,
      545,
      2756,
      3533,
      2737,
      4073,
      2701,
      4820,
      3016,
      2938,
      2225,
      2982,
      1924,
      2878,
      1451,
    ],
    expected: [
      4016,
      2240,
      402,
      1600,
      2540,
      2756,
      4820,
      3016,
      2938,
      2982,
      1924,
      2878,
      4665,
      545,
      3533,
      2737,
      4073,
      2701,
      2225,
      1451,
    ],
  },
];

// Gave up on an FP solution for this
const evensFirst = a => {
  let firstOddIndex;
  for (let i = 0; i < a.length; i++) {
    // Avoid inadvertent cheating
    if ('undefined' === typeof a[i]) return false;
    const isEven = 0 === a[i] % 2;
    if ('undefined' === typeof firstOddIndex && !isEven) {
      firstOddIndex = i;
    }
    if ('undefined' !== typeof firstOddIndex && isEven && firstOddIndex < i) {
      return false;
    }
  }
  return true;
};

for (let { input, expected } of tests) {
  const result = sortArrayByParity(input);
  const name = JSON.stringify(input);
  if (expected.length === result.length && evensFirst(expected) && evensFirst(result)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}"`);
    console.log(`But got "${result}"`);
  }
}
