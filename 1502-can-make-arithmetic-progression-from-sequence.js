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

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canMakeArithmeticProgression = arr => {
  if (2 === arr.length) return true;
  let [uMin, pMin] = [arr[0], Infinity];
  for (const n of arr) {
    if (n < uMin) [pMin, uMin] = [uMin, n];
    else if (uMin < n && n < pMin) pMin = n;
  }
  // console.log(uMin, pMin);
  const uMax = Math.max(...arr);
  if (uMin === uMax) return true;
  const d = Math.abs(pMin - uMin);
  // console.log(d);
  const set = new Set(arr);
  for (const n of arr.map(n => n + d)) {
    set.delete(n);
  }
  // console.log(set);
  return 1 === set.size && set.has(uMin);
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
