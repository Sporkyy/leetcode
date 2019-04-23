// 961. N-Repeated Element in Size 2N Array
// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 116 ms, faster than 16.78% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
// Memory Usage: 43.3 MB, less than 5.38% of JavaScript online submissions for N-Repeated Element in Size 2N Array.

/**
 * @param {number[]} A
 * @return {number}
 */
// const repeatedNTimes = A =>
//   Object.entries(
//     A.reduce((acc, curr) => {
//       acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
//       return acc;
//     }, {}),
//   ).reduce((answer, [currKey, currValue]) => {
//     if (currValue === A.length / 2) {
//       answer = parseInt(currKey);
//     }
//     return answer;
//   }, undefined);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 96 ms, faster than 37.14% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
// Memory Usage: 42.3 MB, less than 5.38% of JavaScript online submissions for N-Repeated Element in Size 2N Array.

/**
 * @param {number[]} A
 * @return {number}
 */
const repeatedNTimes = A => {
  const counts = new Map(Array.from(new Set(A)).map(v => [v, 0]));
  for (let i = A.length - 1; 0 <= i; --i) {
    counts.set(A[i], 1 + counts.get(A[i]));
  }
  for (let [key, value] of counts) {
    if (A.length / 2 === value) return key;
  }
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: [1, 2, 3, 3],
    expected: 3,
  },
  {
    name: 'Example 2',
    input: [2, 1, 2, 5, 3, 2],
    expected: 2,
  },
  {
    name: 'Example 3',
    input: [5, 1, 5, 2, 5, 3, 5, 4],
    expected: 5,
  },
];

tests.forEach(({ input, name, expected }) => {
  const result = repeatedNTimes(input);
  if (result === expected) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected ${expected} but got ${result}`);
  }
});
