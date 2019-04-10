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

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) =>
  nums
    .map((n1, i1) =>
      nums.reduce((answer, n2, i2) => (i1 !== i2 && target === n1 + n2 ? i2 : answer), undefined),
    )
    .reduce(
      (answer, i2, i1) =>
        'undefined' === typeof answer && 'undefined' !== typeof i2 ? [i1, i2] : answer,
      undefined,
    );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Given example',
    input: {
      nums: [2, 7, 11, 15],
      target: 9,
    },
    expected: [0, 1],
  },
  {
    name: 'Given example reversed',
    input: {
      nums: [15, 11, 7, 2],
      target: 9,
    },
    expected: [2, 3],
  },
  {
    name: 'Two nums',
    input: {
      nums: [2, 7],
      target: 9,
    },
    expected: [0, 1],
  },
  {
    name: 'Two nums',
    input: {
      nums: [2, 7],
      target: 9,
    },
    expected: [0, 1],
  },
  {
    name: 'Two zeroes',
    input: {
      nums: [0, 1, 2, 0],
      target: 0,
    },
    expected: [0, 3],
  },
];

const areArraysEqual = (a1, a2) => {
  if (a1.length !== a2.length) return false;
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
};

tests.forEach(({ name, input: { nums, target }, expected }) => {
  const result = twoSum(nums, target);
  if (areArraysEqual(expected, result)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected: ${expected}`);
    console.log(`Result: ${result}`);
  }
});
