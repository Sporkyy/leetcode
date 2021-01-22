// 763. Partition Labels
// https://leetcode.com/problems/partition-labels/

/*

A string S of lowercase English letters is given. We want to partition this
string into as many parts as possible so that each letter appears in at most one
part, and return a list of integers representing the size of these parts.

## Note

- S will have length in range [1, 500].
- S will consist of lowercase English letters ('a' to 'z') only.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 80 ms, faster than 95.22% of JavaScript online submissions
// Memory Usage: 39.6 MB, less than 87.75% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {number[]}
//  */
// const partitionLabels = s => {
//   const indices = new Array(s.length).fill(-1);
//   for (let i = 0; i < s.length; i++) indices[s.charCodeAt(i) - 97] = i;
//   // console.log(indices.join());
//   const res = [];
//   for (let i = 0, iMax = -1, sum = 1; i < s.length; i++, sum++) {
//     // console.log(`i=${i} iMax=${iMax}`);
//     iMax = Math.max(iMax, indices[s.charCodeAt(i) - 97]);
//     if (i === iMax) {
//       res.push(sum);
//       // console.log(i, sum);
//       sum = 0;
//     }
//   }
//   // console.log(res);
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 88 ms, faster than 70.13% of JavaScript online submissions
// Memory Usage: 39.9 MB, less than 76.66% of JavaScript online submissions

/**
 * @param {string} s
 * @return {number[]}
 */
const partitionLabels = s => {
  const lastIndices = new Array(s.length).fill(-1);
  for (let i = 0; i < s.length; i++) lastIndices[s.charCodeAt(i) - 97] = i;
  const res = [];
  for (let i = 0, liMax = -1, sum = 1; i < s.length; i++, sum++) {
    liMax = Math.max(liMax, lastIndices[s.charCodeAt(i) - 97]);
    if (i === liMax) {
      res.push(sum);
      sum = 0;
    }
  }
  return res;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { deepStrictEqual } from 'assert';

// Example 1:
deepStrictEqual(partitionLabels('ababcbacadefegdehijhklij'), [9, 7, 8]);
// - The partition is "ababcbaca", "defegde", "hijhklij".
// - This is a partition so that each letter appears in at most one part.
// - A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it
//   splits S into less parts.

deepStrictEqual(partitionLabels('eccbbbbdec'), [10]);

deepStrictEqual(partitionLabels('caedbdedda'), [1, 9]);
// |0|1|2|3|4|5|6|7|8|9|
// |c|a|e|d|b|d|e|d|d|a|
// |0|9|6|8|4|8|6|8|8|9|

deepStrictEqual(partitionLabels('eaaaabaaec'), [9, 1]);
// |0|1|2|3|4|5|6|7|8|9|
// |e|a|a|a|a|b|a|a|e|c|
// |8|7|7|7|7|5|7|7|8|9|
