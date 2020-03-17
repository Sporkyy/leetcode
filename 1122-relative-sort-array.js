// 1122. Relative Sort Array
// https://leetcode.com/problems/relative-sort-array/

/*

Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all
elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are
the same as in arr2.  Elements that don't appear in arr2 should be placed at the
end of arr1 in ascending order.

Constraints:
- arr1.length, arr2.length <= 1000
- 0 <= arr1[i], arr2[i] <= 1000
- Each arr2[i] is distinct.
- Each arr2[i] is in arr1.

*/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 40 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} arr1
//  * @param {number[]} arr2
//  * @return {number[]}
//  */
// const relativeSortArray = (arr1, arr2) => {
//   // console.log(arr1);
//   // console.log(arr2);
//   const [haves, haveNots, res] = [new Map(), [], []];
//   for (const el of arr1) {
//     if (arr2.includes(el)) {
//       if (haves.has(el)) haves.set(el, haves.get(el) + 1);
//       else haves.set(el, 1);
//     } else haveNots.push(el);
//   }
//   haveNots.sort((a, b) => a - b);
//   // console.log(haves);
//   // console.log(haveNots);
//   for (const el of arr2) res.push(...new Array(haves.get(el)).fill(el));
//   // console.log(res);
//   res.push(...haveNots);
//   return res;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 91.30% of JavaScript online submissions
// Memory Usage: 35.5 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} arr1
//  * @param {number[]} arr2
//  * @return {number[]}
//  */
// const relativeSortArray = (arr1, arr2) => {
//   const [set, cnts, leftovers] = [new Set(arr2), new Map(), []];
//   for (const el of arr1)
//     if (!set.has(el)) leftovers.push(el);
//     else if (!cnts.has(el)) cnts.set(el, 1);
//     else cnts.set(el, cnts.get(el) + 1);
//   leftovers.sort((a, b) => a - b);
//   return arr2
//     .reduce((acc, curr) => acc.concat(new Array(cnts.get(curr)).fill(curr)), [])
//     .concat(leftovers);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 58.70% of JavaScript online submissions
// Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = (arr1, arr2) => {
  const [set, cnts, leftovers, res] = [
    new Set(arr2),
    new Map(),
    [],
    new Array(arr1.length),
  ];
  for (const el of arr1)
    if (!set.has(el)) leftovers.push(el);
    else if (!cnts.has(el)) cnts.set(el, 1);
    else cnts.set(el, cnts.get(el) + 1);
  let z = 0;
  for (let i = 0; i < arr2.length; i++)
    for (let j = 0; j < cnts.get(arr2[i]); j++, z++) res[z] = arr2[i];
  leftovers.sort((a, b) => a - b);
  for (const el of leftovers) res[z++] = el;
  return res;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
deepStrictEqual(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]),
  [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19],
);
// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]

deepStrictEqual(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]), [
  22,
  28,
  8,
  6,
  17,
  44,
]);
