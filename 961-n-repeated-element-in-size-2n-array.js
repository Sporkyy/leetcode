// 961. N-Repeated Element in Size 2N Array
// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} A
 * @return {number}
 */
const repeatedNTimes = A =>
  Object.entries(
    A.reduce((acc, curr) => {
      acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
      return acc;
    }, {})
  ).reduce((answer, [currKey, currValue]) => {
    if (currValue === A.length / 2) {
      answer = parseInt(currKey);
    }
    return answer;
  }, undefined);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: [1, 2, 3, 3],
    output: 3
  },
  {
    name: 'Example 2',
    input: [2, 1, 2, 5, 3, 2],
    output: 2
  },
  {
    name: 'Example 3',
    input: [5, 1, 5, 2, 5, 3, 5, 4],
    output: 5
  }
];

tests.forEach(({ input, name, output }) => {
  const result = repeatedNTimes(input);
  if (result === output) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`😢 ${name}`);
    console.log(`expected ${result}, but got ${output}`);
  }
});
