// 496. Next Greater Element I
// https://leetcode.com/problems/next-greater-element-i/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const nextNumbers = (num, arr) => arr.slice(arr.indexOf(num) + 1);

const nextGreaterNumber = (num, arr) =>
  arr.reduce((acc, curr) => (undefined === acc && num < curr ? curr : acc), undefined) || -1;

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = (nums1, nums2) =>
  nums1.map(num => nextGreaterNumber(num, nextNumbers(num, nums2)));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 92 ms, faster than 9.03% of JavaScript online submissions for Next Greater Element I.
// Memory Usage: 39.3 MB, less than 6.45% of JavaScript online submissions for Next Greater Element I.

const tests = [
  {
    name: 'Example 1',
    input: {
      nums1: [4, 1, 2],
      nums2: [1, 3, 4, 2],
    },
    expected: [-1, 3, -1],
  },
  {
    name: 'Example 2',
    input: {
      nums1: [2, 4],
      nums2: [1, 2, 3, 4],
    },
    expected: [3, -1],
  },
];

const areArraysEqual = (a, b) => a.length === b.length && a.join() === b.join();

tests.forEach(({ name, input: { nums1, nums2 }, expected }) => {
  const output = nextGreaterElement(nums1, nums2);
  if (areArraysEqual(expected, output)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log('Expected the below');
    console.log(expected);
    console.log('But got the below instead');
    console.log(output);
  }
});
