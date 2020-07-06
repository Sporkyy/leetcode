// 1502. Can Make Arithmetic Progression From Sequence
// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/

/*

Given an array of numbers arr. A sequence of numbers is called an arithmetic
progression if the difference between any two consecutive elements is the same.

Return true if the array can be rearranged to form an arithmetic progression,
otherwise, return false.

Constraints:
- 2 <= arr.length <= 1000
- -10^6 <= arr[i] <= 10^6

*/

import { ok } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 112 ms, faster than 22.89% of JavaScript online submissions
// Memory Usage: 39 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
// const canMakeArithmeticProgression = arr => {
//   if (2 === arr.length) return true;
//   let [uMin, pMin] = [arr[0], Infinity];
//   for (const n of arr) {
//     if (n < uMin) [pMin, uMin] = [uMin, n];
//     else if (uMin < n && n < pMin) pMin = n;
//   }
//   // console.log(uMin, pMin);
//   const uMax = Math.max(...arr);
//   if (uMin === uMax) return true;
//   const d = Math.abs(pMin - uMin);
//   // console.log(d);
//   const set = new Set(arr);
//   for (const n of arr.map(n => n + d)) {
//     set.delete(n);
//   }
//   // console.log(set);
//   return 1 === set.size && set.has(uMin);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 98.19% of JavaScript online submissions
// Memory Usage: 34.2 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
// const canMakeArithmeticProgression = arr => {
//   if (2 === arr.length) return true;
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);
//   // console.log(min, max);
//   const step = Math.abs(max - min) / (arr.length - 1);
//   // console.log(step);
//   const set = new Set(arr);
//   if (1 === set.size) return true;
//   set.delete(min);
//   set.delete(max);
//   for (let i = min + step; i < max; i += step) {
//     // console.log(i);
//     if (!set.delete(i)) return false;
//   }
//   return 0 === set.size;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 88 ms, faster than 59.64% of JavaScript online submissions
// Memory Usage: 33.5 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canMakeArithmeticProgression = arr => {
  if (2 === arr.length) return true;
  const [min, max] = [Math.min(...arr), Math.max(...arr)];
  const set = new Set(arr);
  if (1 === set.size) return true;
  set.delete(max);
  const step = Math.abs(max - min) / (arr.length - 1);
  for (let i = min; i < max; i += step) if (!set.delete(i)) return false;
  return 0 === set.size;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
ok(canMakeArithmeticProgression([3, 5, 1]));
// Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with
// differences 2 and -2 respectively, between each consecutive elements.

// Example 2:
ok(!canMakeArithmeticProgression([1, 2, 4]));
// Explanation: There is no way to reorder the elements to obtain an arithmetic
// progression.

ok(canMakeArithmeticProgression([0, 0, 0, 0]));

ok(canMakeArithmeticProgression([1, 100]));

ok(canMakeArithmeticProgression([-96, -68, -40, -12, 16]));

ok(canMakeArithmeticProgression([-68, -96, -12, -40, 16]));

ok(
  canMakeArithmeticProgression([
    126,
    183,
    259,
    31,
    145,
    202,
    221,
    278,
    50,
    107,
    164,
    12,
    88,
    -7,
    240,
    69,
  ]),
);

ok(canMakeArithmeticProgression([6, 11, 56, 16, 26, 31, 21, 41, 46, 51, 36]));

ok(canMakeArithmeticProgression([11, 6, 56, 16, 26, 31, 21, 41, 46, 51, 36]));

ok(
  canMakeArithmeticProgression([
    -4,
    4,
    12,
    20,
    28,
    36,
    44,
    52,
    60,
    68,
    76,
    84,
    92,
    100,
    108,
    116,
    124,
    132,
    140,
    148,
  ]),
);

ok(
  canMakeArithmeticProgression([
    140,
    132,
    28,
    92,
    84,
    76,
    52,
    44,
    100,
    -4,
    20,
    36,
    116,
    12,
    148,
    60,
    4,
    108,
    68,
    124,
  ]),
);

ok(
  !canMakeArithmeticProgression([
    13,
    12,
    -12,
    9,
    9,
    16,
    7,
    -10,
    -20,
    0,
    18,
    -1,
    -20,
    -10,
    -8,
    15,
    15,
    16,
    2,
    15,
  ]),
);

ok(
  !canMakeArithmeticProgression([
    -20,
    -20,
    -12,
    -10,
    -10,
    -8,
    -1,
    0,
    2,
    7,
    9,
    9,
    12,
    13,
    15,
    15,
    15,
    16,
    16,
    18,
  ]),
);

ok(!canMakeArithmeticProgression([-17, -13, -6, 0, 3, 5, 9, 9, 11, 19]));

ok(!canMakeArithmeticProgression([9, 5, -13, -17, 11, 3, 9, 19, 0, -6]));
