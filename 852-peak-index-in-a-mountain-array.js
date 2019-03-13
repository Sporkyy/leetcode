// 852. Peak Index in a Mountain Array
// https://leetcode.com/problems/peak-index-in-a-mountain-array/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} A
 * @return {number}
 */
const peakIndexInMountainArray = A => A.reduce((acc, curr, i) => ('undefined' === typeof acc || A[acc] < curr ? i : acc), undefined);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [{
    name: 'Example 1',
    input: [0, 1, 0],
    expected: 1
  },
  {
    name: 'Example 2',
    input: [0, 2, 1, 0],
    expected: 1
  },
  {
    name: 'Example 2 Modified A Little',
    input: [0, 1, 2, 0],
    expected: 2
  },
  {
    name: 'Peak First',
    input: [3, 1, 2, 0],
    expected: 0
  },
  {
    name: 'Peak Last',
    input: [1, 2, 0, 3],
    expected: 3
  },
  {
    name: 'One Number',
    input: [999],
    expected: 0
  }
];

tests.forEach(({
  name,
  input,
  expected
}) => {
  const result = peakIndexInMountainArray(input);
  console.log(result);
  if (expected === result) {
    console.log(`✅ "${name}"`);
  } else {
    console.log(`🔴 "${name}"`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
})