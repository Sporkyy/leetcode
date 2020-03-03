// 1287. Element Appearing More Than 25% In Sorted Array
// https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/

/*

Given an integer array sorted in non-decreasing order, there is exactly one
integer in the array that occurs more than 25% of the time.

Return that integer.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 67.34% of JavaScript online submissions
// Memory Usage: 38.1 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {number}
//  */
// const findSpecialInteger = arr => {
//   // console.log(arr.join('|'));
//   // console.log(`|${arr.join('||')}|`);
//   // console.log(
//   //   Number(
//   //     arr
//   //       .join(',')
//   //       .match(new RegExp(`(\\d,)\\1{${Math.trunc(arr.length / 4) - 1},}`))[1]
//   //       .split(',')[0],
//   //   ),
//   // );
//   const regex =
//     3 === arr.length
//       ? new RegExp(`(\\|\\d+\\|)\\1`)
//       : new RegExp(`(\\|\\d+\\|)\\1{${Math.trunc(arr.length / 4)},}`);
//   // console.log(regex);
//   // console.log(`|${arr.join('||')}|`.match(regex));
//   return Number(`|${arr.join('||')}|`.match(regex)[1].split('|')[1]);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 52.15% of JavaScript online submissions
// Memory Usage: 38.3 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} arr
 * @return {number}
 */
const findSpecialInteger = arr =>
  Number(
    ` ${arr.join('  ')} `
      .match(
        new RegExp(`( \\d+ )${'\\1'.repeat(Math.trunc(arr.length / 4))}`),
      )[1]
      .trim(),
  );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

strictEqual(findSpecialInteger([1]), 1);

// 2 = impossible
// 3 = impossible

strictEqual(findSpecialInteger([1, 2, 4, 4]), 4);

strictEqual(findSpecialInteger([1, 2, 3, 4, 5, 8, 8, 8]), 8);

// Example 1:
strictEqual(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]), 6);

// Failed tests
strictEqual(findSpecialInteger([6700, 8858, 8858, 8858, 8858]), 8858);
