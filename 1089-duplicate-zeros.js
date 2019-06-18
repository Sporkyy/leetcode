// 1089. Duplicate Zeros
// https://leetcode.com/problems/duplicate-zeros/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 60.48% of JavaScript online submissions
// for Duplicate Zeros.
// Memory Usage: 35.4 MB, less than 100.00% of JavaScript online submissions
// for Duplicate Zeros.

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (0 === arr[i]) {
      for (let j = arr.length - 1; i < j; j--) arr[j] = arr[j - 1];
      arr[i++] = 0;
    }
  }
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

tests = [
  {
    input: [1, 0, 2, 3, 0, 4, 5, 0],
    expected: [1, 0, 0, 2, 3, 0, 0, 4],
  },
  {
    input: [1, 2, 3],
    expected: [1, 2, 3],
  },
  {
    input: [1, 0, 1],
    expected: [1, 0, 0],
  },
  {
    input: [1, 0, 0],
    expected: [1, 0, 0],
  },
  {
    input: [1, 0, 1, 2],
    expected: [1, 0, 0, 1],
  },
];

const areArraysEqual = (a1, a2) => a1.length === a2.length && a1.join() === a2.join();

tests.forEach(({ input, expected }) => {
  duplicateZeros(input);
  if (areArraysEqual(input, expected)) {
    console.log(`✅ ${input.join(', ')}`);
  } else {
    console.log(`🔴 ${input.join(', ')}`);
    console.log(`Expected "${expected.join(', ')}", but got "${input.join(', ')}"`);
  }
});
