// 977. Squares of a Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = A => A.map(n => Math.pow(n, 2)).sort((a, b) => (b < a ? 1 : a < b ? -1 : 0));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: [-4, -1, 0, 3, 10],
    expected: [0, 1, 9, 16, 100],
  },
  {
    name: 'Example 2',
    input: [-7, -3, 2, 3, 11],
    expected: [4, 9, 9, 49, 121],
  },
  {
    name: 'Test data',
    input: [-20, -19, -14, -12, -7, -5, 2, 2, 4, 6, 6, 7, 8, 9, 10, 12, 17, 17, 18, 18],
    expected: [
      4,
      4,
      16,
      25,
      36,
      36,
      49,
      49,
      64,
      81,
      100,
      144,
      144,
      196,
      289,
      289,
      324,
      324,
      361,
      400,
    ],
  },
];

const areArraysEqual = (a1, a2) => {
  if (a1.length !== a2.length) return false;
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
};

tests.forEach(({ name, input, expected }) => {
  const result = sortedSquares(input);
  if (areArraysEqual(expected, result)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expected}`);
    console.log(`'Received: ${result}`);
  }
});
