// 1385. Find the Distance Value Between Two Arrays
// https://leetcode.com/problems/find-the-distance-value-between-two-arrays/

/*

Given two integer arrays arr1 and arr2, and the integer d, return the distance
value between the two arrays.

The distance value is defined as the number of elements arr1[i] such that there
is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

Constraints:
- 1 <= arr1.length, arr2.length <= 500
- -10^3 <= arr1[i], arr2[j] <= 10^3
- 0 <= d <= 100

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 124 ms, faster than 13.66% of JavaScript online submissions
// Memory Usage: 38.2 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
const findTheDistanceValue = (arr1, arr2, d) =>
  arr1.reduce((acc, curr) => acc + +arr2.every(n => d < Math.abs(curr - n)), 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2), 2);
// Explanation:
// For arr1[0]=4 we have:
// |4 - 10| = 6 > d=2
// |4 -  9| = 5 > d=2
// |4 -  1| = 3 > d=2
// |4 -  8| = 4 > d=2
// For arr1[1]=5 we have:
// |5 - 10| = 5 > d=2
// |5 -  9| = 4 > d=2
// |5 -  1| = 4 > d=2
// |5 -  8| = 3 > d=2
// For arr1[2]=8 we have:
// |8 - 10| = 2 <= d=2
// |8 -  9| = 1 <= d=2
// |8 -  1| = 7 > d=2
// |8 -  8| = 0 <= d=2

// Example 2:
strictEqual(findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3), 2);

// Example 3:
strictEqual(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6), 1);
