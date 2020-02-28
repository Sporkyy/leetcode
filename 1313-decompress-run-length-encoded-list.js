// 1313. Decompress Run-Length Encoded List
// https://leetcode.com/problems/decompress-run-length-encoded-list/

/*

We are given a list nums of integers representing a list compressed with
run-length encoding.

Consider each adjacent pair of elements [a, b] = [nums[2*i], nums[2*i+1]] (with
i >= 0).  For each such pair, there are a elements with value b in the
decompressed list.

Return the decompressed list.

*/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 89.07% of JavaScript online submissions
// Memory Usage: 37.3 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// const decompressRLElist = nums => {
//   const inflated = [];
//   for (let i = 0; i < nums.length - 1; i += 2)
//     inflated.push(...new Array(nums[i]).fill(nums[i + 1]));
//   return inflated;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 55.51% of JavaScript online submissions
// Memory Usage: 41.5 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLElist = (deflated, inflated = []) =>
  !deflated.length
    ? inflated
    : decompressRLElist(
        deflated.slice(2),
        inflated.concat(new Array(deflated[0]).fill(deflated[1])),
      );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
deepStrictEqual(decompressRLElist([1, 2, 3, 4]), [2, 4, 4, 4]);
// Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we
// generate the array [2]. The second pair [3,4] means we have freq = 3 and val
// = 4 so we generate [4,4,4]. At the end the concatenation [2] + [4,4,4] is
// [2,4,4,4].
