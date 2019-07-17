// 1051. Height Checker
// https://leetcode.com/problems/height-checker/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 96.50% of JavaScript online submissions
// for Height Checker.
// Memory Usage: 34.9 MB, less than 100.00% of JavaScript online submissions
// for Height Checker.

/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = heights => {
  let id10ts = 0;
  const counts = new Array(101).fill(0);
  for (h of heights) counts[h]++;
  for (let i = 0, z = 0; i < 101; i++)
    for (let j = counts[i]; 0 < j; j--, z++) if (heights[z] !== i) id10ts++;
  return id10ts;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: [1, 1, 4, 2, 1, 3],
    expected: 3,
  },

  // Explanation: Students with heights 4, 3 and the last 1 are not
  // standing in the right positions.

  {
    input: [1, 2, 3, 4, 5],
    expected: 0,
  },

  {
    input: [5, 4, 3, 2, 1],
    expected: 4,
  },

  {
    input: [1, 1, 1, 1, 1],
    expected: 0,
  },

  {
    input: [1, 1, 2, 2],
    expected: 0,
  },

  {
    input: [2, 2, 1, 1],
    expected: 4,
  },

  {
    input: [2, 1, 1, 2],
    expected: 2,
  },

  {
    input: [1, 2, 2, 1],
    expected: 2,
  },

  {
    input: [1, 2, 1, 2],
    expected: 2,
  },

  {
    input: [2, 1, 2, 1],
    expected: 2,
  },

  {
    input: [2, 1, 1, 1],
    expected: 2,
  },

  {
    input: [2, 2, 2, 1],
    expected: 2,
  },

  {
    input: [2, 1, 2, 1, 1, 2, 2, 1],
    expected: 4,
  },

  {
    input: [
      31,
      81,
      41,
      78,
      48,
      2,
      83,
      48,
      21,
      20,
      43,
      15,
      26,
      78,
      96,
      55,
      5,
      46,
      35,
      89,
      85,
      54,
      76,
      64,
      71,
      36,
      98,
      94,
      100,
      7,
      88,
      92,
      80,
      43,
      24,
      89,
      50,
      61,
      59,
      20,
      94,
      57,
      99,
      62,
      82,
      46,
      28,
      57,
      66,
      62,
      56,
      15,
      12,
      63,
      19,
      35,
      12,
      26,
      15,
      59,
      8,
      44,
      46,
      45,
      33,
      20,
      27,
      31,
      85,
      15,
      92,
      63,
      63,
      40,
      35,
      95,
      91,
      1,
      4,
      57,
      55,
      68,
      53,
      28,
      15,
      94,
      74,
      89,
      77,
      7,
      25,
      63,
      77,
      24,
      76,
      44,
    ],
    expected: 95,
  },
];

for ({ input, expected } of tests) {
  const name = input.join(', ');
  const output = heightChecker(input);
  if (expected === output) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
}
