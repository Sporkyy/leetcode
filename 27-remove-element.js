// 27. Remove Element
// https://leetcode.com/problems/remove-element/

/*

Given an array nums and a value val, remove all instances of that value in-place
and return the new length.

Do not allocate extra space for another array, you must do this by modifying the
input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond
the new length.

Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means modification to
the input array will be known to the caller as well.

Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy) int len =
removeElement(nums, val);

// any modification to nums in your function would be known by the caller. //
using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {print(nums[i]);
}

*/

import { deepStrictEqual, strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 59.78% of JavaScript online submissions
// Memory Usage: 34 MB, less than 5.55% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
// const removeElement = (nums, val) => {
//   const cnt = nums.length;
//   for (let i = 0; i < cnt; i++)
//     if (val === nums[0]) nums.shift();
//     else nums.push(nums.shift());
//   return nums.length;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 59.78% of JavaScript online submissions
// Memory Usage: 34 MB, less than 5.55% of JavaScript online submissions

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  let write = 0;
  for (let read = 0; read < nums.length; read++)
    if (nums[read] !== val) nums[write++] = nums[read];
  nums.length = write;
  return write;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
const nums1 = [3, 2, 2, 3];
strictEqual(removeElement(nums1, 3), 2);
deepStrictEqual(nums1, [2, 2]);
// It doesn't matter what you leave beyond the returned length.

// Example 2:
const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
strictEqual(removeElement(nums2, 2), 5);
deepStrictEqual(nums2, [0, 1, 3, 0, 4]);
// Note that the order of those five elements can be arbitrary.
// It doesn't matter what values are set beyond the returned length.

const nums3 = [3, 3, 2, 2];
strictEqual(removeElement(nums3, 3), 2);
deepStrictEqual(nums3, [2, 2]);

const nums4 = [2];
strictEqual(removeElement(nums4, 3), 1);
deepStrictEqual(nums4, [2]);

const nums5 = [4, 2, 0, 2, 2, 1, 4, 4, 1, 4, 3, 2];
strictEqual(removeElement(nums5, 4), 8);
deepStrictEqual(nums5.slice().sort(), [2, 2, 0, 2, 2, 1, 3, 1].slice().sort());
