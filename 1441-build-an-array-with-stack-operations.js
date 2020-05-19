// 1441. Build an Array With Stack Operations
// https://leetcode.com/problems/build-an-array-with-stack-operations/

/*

Given an array target and an integer n. In each iteration, you will read a
number from  list = {1,2,3..., n}.

Build the target array using the following operations:

- Push: Read a new element from the beginning list, and push it in the array.
- Pop: delete the last element of the array.
- If the target array is already built, stop reading more elements.
- You are guaranteed that the target array is strictly increasing, only
  containing numbers between 1 to n inclusive.

Return the operations to build the target array.

You are guaranteed that the answer is unique.

Constraints:
- 1 <= target.length <= 100
- 1 <= target[i] <= 100
- 1 <= n <= 100
- target is strictly increasing.

*/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 45.40% of JavaScript online submissions
// Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
const buildArray = (target, n) => {
  const set = new Set(target);
  const ans = [];
  for (let i = 1; i < target[target.length - 1] + 1; i++) {
    ans.push('Push');
    if (!set.has(i)) ans.push('Pop');
  }
  return ans;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
deepStrictEqual(buildArray([1, 3], 3), ['Push', 'Push', 'Pop', 'Push']);
// Explanation:
// Read number 1 and automatically push in the array -> [1]
// Read number 2 and automatically push in the array then Pop it -> [1]
// Read number 3 and automatically push in the array -> [1,3]

// Example 2:
deepStrictEqual(buildArray([1, 2, 3], 3), ['Push', 'Push', 'Push']);

// Example 3:
deepStrictEqual(buildArray([1, 2], 4), ['Push', 'Push']);
// Explanation: You only need to read the first 2 numbers and stop.

// Example 4:
deepStrictEqual(buildArray([2, 3, 4], 4), [
  'Push',
  'Pop',
  'Push',
  'Push',
  'Push',
]);
