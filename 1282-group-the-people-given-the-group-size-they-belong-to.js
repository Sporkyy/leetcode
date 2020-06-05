// 1282. Group the People Given the Group Size They Belong To
// https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/

/*

There are n people whose IDs go from 0 to n - 1 and each person belongs exactly
to one group. Given the array groupSizes of length n telling the group size each
person belongs to, return the groups there are and the people's IDs each group
includes.

You can return any solution in any order and the same applies for IDs. Also, it
is guaranteed that there exists at least one solution.

Constraints:
- groupSizes.length == n
- 1 <= n <= 500
- 1 <= groupSizes[i] <= n

*/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 100 ms, faster than 23.71% of JavaScript online submissions
// Memory Usage: 41.2 MB, less than 18.96% of JavaScript online submissions

// /**
//  * @param {number[]} groupSizes
//  * @return {number[][]}
//  */
// const groupThePeople = groupSizes => {
//   // console.log(groupSizes);
//   // const ids = [...new Array(groupSizes.length).keys()].slice(1);
//   // console.log(ids);
//   const largest = Math.max(...groupSizes);
//   // console.log(largest);
//   // const groupedGroups = new Array(largest + 1).fill(0);
//   // console.log(groupedGroups);
//   // for (const size of groupSizes) groupedGroups[size]++;
//   // console.log(groupedGroups);
//   const grouped = new Array(largest + 1).fill().map(_ => []);
//   // console.log(grouped);
//   for (let i = 0; i < groupSizes.length; i++) grouped[groupSizes[i]].push(i);
//   // console.log(grouped);
//   const res = [];
//   for (let i = 0; i < grouped.length; i++) {
//     if (!grouped[i].length) continue;
//     // console.log(i);
//     while (grouped[i].length) res.push(grouped[i].splice(0, i));
//   }
//   return res;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 96 ms, faster than 28.57% of JavaScript online submissions
// Memory Usage: 43.3 MB, less than 5.17% of JavaScript online submissions

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
const groupThePeople = groupSizes => {
  const grouped = new Array(500).fill().map(_ => []);
  for (let i = 0; i < groupSizes.length; i++) grouped[groupSizes[i]].push(i);
  const res = [];
  for (let i = 0; i < grouped.length; i++)
    while (grouped[i].length) res.push(grouped[i].splice(0, i));
  return res;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
deepStrictEqual(groupThePeople([3, 3, 3, 3, 3, 1, 3]), [
  [5],
  [0, 1, 2],
  [3, 4, 6],
]);
// Explanation:
// Other possible solutions are [[2,1,6],[5],[0,4,3]] and [[5],[0,6,2],[4,3,1]].

// Example 2:
deepStrictEqual(groupThePeople([2, 1, 3, 3, 3, 2]), [[1], [0, 5], [2, 3, 4]]);
