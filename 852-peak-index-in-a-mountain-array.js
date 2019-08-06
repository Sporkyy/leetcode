// 852. Peak Index in a Mountain Array
// https://leetcode.com/problems/peak-index-in-a-mountain-array/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 22.20% of JavaScript online submissions
// for Peak Index in a Mountain Array.
// Memory Usage: 34.9 MB, less than 60.98% of JavaScript online submissions
// for Peak Index in a Mountain Array.

/**
 * @param {number[]} A
 * @return {number}
 */
// const peakIndexInMountainArray = A =>
//   A.reduce((acc, curr, i) => ('undefined' === typeof acc || A[acc] < curr ? i : acc), undefined);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 67.36% of JavaScript online submissions
// for Peak Index in a Mountain Array.
// Memory Usage: 35.1 MB, less than 46.15% of JavaScript online submissions
// for Peak Index in a Mountain Array.

/**
 * @param {number[]} A
 * @return {number}
 */
const peakIndexInMountainArray = A => A.reduce((acc, curr, i) => (A[acc] < curr ? i : acc), 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: [0, 1, 0],
    expected: 1,
  },
  {
    input: [0, 2, 1, 0],
    expected: 1,
  },
  {
    input: [0, 1, 2, 0],
    expected: 2,
  },
  {
    input: [3, 1, 2, 0],
    expected: 0,
  },
  {
    input: [1, 2, 0, 3],
    expected: 3,
  },
  {
    input: [999],
    expected: 0,
  },
];

tests.forEach(({ input, expected }) => {
  const result = peakIndexInMountainArray(input);
  const name = JSON.stringify(input);
  if (expected === result) {
    console.log(`✅ "${name}"`);
  } else {
    console.log(`🔴 "${name}"`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
