// https://leetcode.com/problems/squares-of-a-sorted-array/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = A => A.map(n => n * n).sort((a, b) => (b < a ? 1 : a < b ? -1 : 0));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: [-4, -1, 0, 3, 10],
    expected: [0, 1, 9, 16, 100]
  },
  {
    name: 'Example 2',
    input: [-7, -3, 2, 3, 11],
    expected: [4, 9, 9, 49, 121]
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
      400
    ]
  }
];

const compare = (a, b) =>
  a.length === b.length && a.map((n, i) => n === b[i]).reduce((a, c) => a && c, true);

tests.forEach(({ name, input, expected }) => {
  const result = sortedSquares(input);
  if (compare(expected, result)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expected}`);
    console.log(`'Received: ${result}`);
  }
});
