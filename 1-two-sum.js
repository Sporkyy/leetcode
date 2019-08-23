// 1. Two Sum
// https://leetcode.com/problems/two-sum/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// const twoSum = (nums, target) => {
//   let answer;
//   nums.forEach((n1, i1) => {
//     'undefined' === typeof answer &&
//       nums.forEach((n2, i2) => {
//         if ('undefined' === typeof answer && i1 !== i2 && target === n1 + n2) {
//           answer = [i1, i2];
//         }
//       });
//   });
//   return answer;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 360 ms, faster than 5.14% of JavaScript online submissions
// for Two Sum.
// Memory Usage: 36.1 MB, less than 13.64% of JavaScript online submissions
// for Two Sum.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// const twoSum = (nums, target) =>
//   nums
//     .map((n1, i1) =>
//       nums.reduce((answer, n2, i2) => (i1 !== i2 && target === n1 + n2 ? i2 : answer), undefined),
//     )
//     .reduce(
//       (answer, i2, i1) =>
//         'undefined' === typeof answer && 'undefined' !== typeof i2 ? [i1, i2] : answer,
//       undefined,
//     );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 60.17% of JavaScript online submissions
// for Two Sum.
// Memory Usage: 35.8 MB, less than 16.12% of JavaScript online submissions
// for Two Sum.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  dict = {};
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (undefined !== dict[need]) return [dict[need], i];
    dict[nums[i]] = i;
  }
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: {
      nums: [2, 7, 11, 15],
      target: 9,
    },
    expected: [0, 1],
  },
  {
    input: {
      nums: [15, 11, 7, 2],
      target: 9,
    },
    expected: [2, 3],
  },
  {
    input: {
      nums: [2, 7],
      target: 9,
    },
    expected: [0, 1],
  },
  {
    input: {
      nums: [2, 7],
      target: 9,
    },
    expected: [0, 1],
  },
  {
    input: {
      nums: [0, 1, 2, 0],
      target: 0,
    },
    expected: [0, 3],
  },
];

const areArraysEqual = (a1, a2) => a1.length === a2.length && a1.join() === a2.join();

for (const {
  input: { nums, target },
  expected,
} of tests) {
  const name = `target = ${target}, nums = ${JSON.stringify(nums)}`;
  const result = twoSum(nums, target);
  if (areArraysEqual(expected, result)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected: ${expected}`);
    console.log(`Result: ${result}`);
  }
}
