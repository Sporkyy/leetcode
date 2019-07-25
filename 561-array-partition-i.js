// 561. Array Partition I
// https://leetcode.com/problems/array-partition-i/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 116 ms, faster than 70.08% of JavaScript online submissions
// for Array Partition I.
// Memory Usage: 39.1 MB, less than 49.68% of JavaScript online submissions
// for Array Partition I.

// const getN = a => a.length / 2;

// const ufo = (v1, v2) => (v1 < v2 ? -1 : v2 < v1 ? 1 : 0);

// const sortAsc = a => a.sort((n1, n2) => ufo(n1, n2));

/**
 * @param {number[]} nums
 * @return {number}
 */
// const arrayPairSum = nums => {
//   const n = getN(nums);
//   return sortAsc(nums).reduce((acc, curr, i) => (0 === i % 2 ? acc + curr : acc), 0);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 120 ms, faster than 56.49% of JavaScript online submissions
// for Array Partition I.
// Memory Usage: 40.4 MB, less than 10.83% of JavaScript online submissions
// for Array Partition I.

/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = nums =>
  nums
    .sort((a, b) => a - b)
    .filter((n, i) => 0 === i % 2)
    .reduce((acc, curr) => acc + curr);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: [1, 4, 3, 2],
    expected: 4,
  },

  {
    name: 'N = 1',
    input: [2, 1],
    expected: 1,
  },

  {
    name: 'N = 3',
    input: [2, 2, 6, 6, 8, 8],
    expected: 16,
  },

  {
    name: 'All the same',
    input: [1, 1, 1, 1, 1, 1],
    expected: 3,
  },

  {
    name: 'Negative numbers',
    input: [-1, -4, -3, -2],
    expected: -6,
  },
];

tests.forEach(({ input, expected }) => {
  const result = arrayPairSum(input);
  let name = JSON.stringify(input);
  if (result === expected) {
    console.log(`✅ ${name} = ${result}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
