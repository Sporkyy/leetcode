// 1389. Create Target Array in the Given Order
// https://leetcode.com/problems/create-target-array-in-the-given-order/

/*

Given two arrays of integers nums and index. Your task is to create target array
under the following rules:

Initially target array is empty.

From left to right read nums[i] and index[i], insert at index index[i] the value
nums[i] in target array.

Repeat the previous step until there are no elements to read in nums and index.

Return the target array.

It is guaranteed that the insertion operations will be valid.

Constraints:
- 1 <= nums.length, index.length <= 100
- nums.length == index.length
- 0 <= nums[i] <= 100
- 0 <= index[i] <= i

*/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 74.00% of JavaScript online submissions
// Memory Usage: 33.1 MB, less than 97.85% of JavaScript online submissions

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = (nums, indices) =>
  nums.reduce(
    (acc, curr, idx) => acc.splice([indices[idx]], 0, curr) && acc,
    [],
  );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
deepStrictEqual(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]), [
  0,
  4,
  1,
  3,
  2,
]);
// Explanation:
// nums       index     target
// 0            0        [0]
// 1            1        [0,1]
// 2            2        [0,1,2]
// 3            2        [0,1,3,2]
// 4            1        [0,4,1,3,2]

// Example 2:
deepStrictEqual(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]), [
  0,
  1,
  2,
  3,
  4,
]);
// Explanation:
// nums       index     target
// 1            0        [1]
// 2            1        [1,2]
// 3            2        [1,2,3]
// 4            3        [1,2,3,4]
// 0            0        [0,1,2,3,4]

// Example 3:
deepStrictEqual(createTargetArray([1], [0]), [1]);

deepStrictEqual(createTargetArray([4, 2, 4, 3, 2], [0, 0, 1, 3, 1]), [
  2,
  2,
  4,
  4,
  3,
]);
