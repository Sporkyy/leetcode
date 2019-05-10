// 4. Median of Two Sorted Arrays
// https://leetcode.com/problems/median-of-two-sorted-arrays/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 *
 * Runtime: 132 ms, faster than 69.43% of JavaScript online submissions for Median of Two Sorted Arrays.
 * Memory Usage: 40.2 MB, less than 17.29% of JavaScript online submissions for Median of Two Sorted Arrays.
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) =>
  [...nums1, ...nums2]
    .sort((a, b) => (a < b ? -1 : a === b ? 0 : 1))
    .slice(
      1 === (nums1.length + nums2.length) % 2
        ? Math.trunc((nums1.length + nums2.length) / 2)
        : Math.floor((nums1.length + nums2.length) / 2 - 1),
      1 === (nums1.length + nums2.length) % 2
        ? Math.trunc((nums1.length + nums2.length) / 2) + 1
        : Math.ceil((nums1.length + nums2.length) / 2 + 1),
    )
    .reduce((acc, curr) => acc + curr, 0) / (1 === (nums1.length + nums2.length) % 2 ? 1 : 2);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: '[1, 3] & [2]',
    input: {
      nums1: [1, 3],
      nums2: [2],
    },
    expected: 2.0,
    // Explanation: The median is 2.0
  },
  {
    name: '[1, 2] & [3, 4]',
    input: {
      nums1: [1, 2],
      nums2: [3, 4],
    },
    expected: 2.5,
    // Explanation: The median is (2 + 3)/2 = 2.5
  },
  {
    name: '[1, 2] & []',
    input: {
      nums1: [1, 2],
      nums2: [],
    },
    expected: 1.5,
  },
  {
    name: '[3] & [-2, -1]',
    input: {
      nums1: [3],
      nums2: [-2, -1],
    },
    expected: -1.0,
  },
];

tests.forEach(({ name, input: { nums1, nums2 }, expected }) => {
  const output = findMedianSortedArrays(nums1, nums2);
  if (expected === output) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
});
