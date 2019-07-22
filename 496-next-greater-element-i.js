// 496. Next Greater Element I
// https://leetcode.com/problems/next-greater-element-i/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 92 ms, faster than 9.03% of JavaScript online submissions
// for Next Greater Element I.
// Memory Usage: 39.3 MB, less than 6.45% of JavaScript online submissions
// for Next Greater Element I.

// const nextNumbers = (num, arr) => arr.slice(arr.indexOf(num) + 1);

// const nextGreaterNumber = (num, arr) =>
//   arr.reduce((acc, curr) => (undefined === acc && num < curr ? curr : acc), undefined) || -1;

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// const nextGreaterElement = (nums1, nums2) =>
//   nums1.map(num => nextGreaterNumber(num, nextNumbers(num, nums2)));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 128 ms, faster than 5.51% of JavaScript online submissions
// for Next Greater Element I.
// Memory Usage: 42.4 MB, less than 6.45% of JavaScript online submissions
// for Next Greater Element I.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// const nextGreaterElement = (nums1, nums2) => {
//   const answer = new Map(nums1.map(e => [e, undefined]));

//   for (let i = 0; i < nums2.length; i++) {
//     if (answer.has(nums2[i])) answer.set(nums2[i], i);
//   }

//   for ([num1, position] of answer.entries()) {
//     answer.set(num1, nums2.slice(position + 1).filter(num2 => num1 < num2)[0] || -1);
//   }

//   return Array.from(answer.values());
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 81.06% of JavaScript online submissions
// for Next Greater Element I.
// Memory Usage: 35.3 MB, less than 58.06% of JavaScript online submissions
// for Next Greater Element I.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// const nextGreaterElement = (nums1, nums2) => {
//   const result = new Array(nums1.length).fill(-1);
//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0, ffwd = true; j < nums2.length; j++) {
//       if (!ffwd && nums1[i] < nums2[j]) {
//         result[i] = nums2[j];
//         break;
//       } else if (nums1[i] === nums2[j]) {
//         ffwd = false;
//       }
//     }
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 92 ms, faster than 10.85% of JavaScript online submissions
// for Next Greater Element I.
// Memory Usage: 40.9 MB, less than 16.05% of JavaScript online submissions
// for Next Greater Element I.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = (nums1, nums2) =>
  nums1.map(n => nums2.slice(nums2.indexOf(n) + 1).filter(m => n < m)[0] || -1);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: {
      nums1: [4, 1, 2],
      nums2: [1, 3, 4, 2],
    },
    expected: [-1, 3, -1],
  },

  {
    input: {
      nums1: [2, 4],
      nums2: [1, 2, 3, 4],
    },
    expected: [3, -1],
  },
];

const areArraysEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

for ({
  input: { nums1, nums2 },
  expected,
} of tests) {
  const output = nextGreaterElement(nums1, nums2);
  const name = `${JSON.stringify(nums1)} ${JSON.stringify(nums2)}`;
  if (areArraysEqual(expected, output)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log('Expected the below');
    console.log(expected);
    console.log('But got the below instead');
    console.log(output);
  }
}
