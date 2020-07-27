// 1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
// https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/

/*

Given a rectangular cake with height h and width w, and two arrays of integers
horizontalCuts and verticalCuts where horizontalCuts[i] is the distance from the
top of the rectangular cake to the ith horizontal cut and similarly,
verticalCuts[j] is the distance from the left of the rectangular cake to the jth
vertical cut.

Return the maximum area of a piece of cake after you cut at each horizontal and
vertical position provided in the arrays horizontalCuts and verticalCuts. Since
the answer can be a huge number, return this modulo 10^9 + 7.

Constraints:
- 2 <= h, w <= 10^9
- 1 <= horizontalCuts.length < min(h, 10^5)
- 1 <= verticalCuts.length < min(w, 10^5)
- 1 <= horizontalCuts[i] < h
- 1 <= verticalCuts[i] < w
- It is guaranteed that all elements in horizontalCuts are distinct.
- It is guaranteed that all elements in verticalCuts are distinct.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 132 ms, faster than 83.54% of JavaScript online submissions
// Memory Usage: 51.5 MB, less than 5.17% of JavaScript online submissions

// const maxGap = (...arr) => {
//   arr.sort((a, b) => b - a);
//   let res = -Infinity;
//   for (let i = 1; i < arr.length; i++)
//     if (res < arr[i - 1] - arr[i]) res = arr[i - 1] - arr[i];
//   return res;
// };

// /**
//  * @param {number} h
//  * @param {number} w
//  * @param {number[]} horizontalCuts
//  * @param {number[]} verticalCuts
//  * @return {number}
//  */
// const maxArea = (h, w, horizontalCuts, verticalCuts) => {
//   // console.log(maxGap(0, ...horizontalCuts, h));
//   return (
//     (maxGap(0, ...horizontalCuts, h) * maxGap(0, ...verticalCuts, w)) %
//     (10 ** 9 + 7)
//   );
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const maxGap = (...arr) => {
//   arr.sort((a, b) => b - a);
//   let res = -Infinity;
//   for (let i = 1; i < arr.length; i++)
//     if (res < arr[i - 1] - arr[i]) res = arr[i - 1] - arr[i];
//   return res;
// };

// /**
//  * @param {number} h
//  * @param {number} w
//  * @param {number[]} horizontalCuts
//  * @param {number[]} verticalCuts
//  * @return {number}
//  */
// const maxArea = (h, w, horizontalCuts, verticalCuts) => {
//   // console.log(maxGap(0, ...horizontalCuts, h));
//   return (
//     (maxGap(0, ...horizontalCuts, h) * maxGap(0, ...verticalCuts, w)) %
//     (10 ** 9 + 7)
//   );
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 136 ms, faster than 73.84% of JavaScript online submissions
// Memory Usage: 51.4 MB, less than 5.17% of JavaScript online submissions

/**
 * @param  {...number} arr
 */
const maxGap = (...arr) =>
  arr
    .sort((a, b) => b - a)
    .reduce(
      (mg, n, i) =>
        arr.length - 2 < i || n - arr[i + 1] <= mg ? mg : arr[i] - arr[i + 1],
      -Infinity,
    );

/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
const maxArea = (h, w, horizontalCuts, verticalCuts) =>
  (maxGap(0, ...horizontalCuts, h) * maxGap(0, ...verticalCuts, w)) %
  (10 ** 9 + 7);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Time Limit Exceeded

// /**
//  * @param {number} h
//  * @param {number} w
//  * @param {number[]} horizontalCuts
//  * @param {number[]} verticalCuts
//  * @return {number}
//  */
// const maxArea = (h, w, horizontalCuts, verticalCuts) => {
//   const hArr = new Array(h + 1);
//   hArr[0] = '✂️';
//   hArr[hArr.length - 1] = '✂️';
//   // horizontalCuts; //?
//   for (const n of horizontalCuts) hArr[n] = '✂️';
//   // hArr; //?
//   let [hGap, maxHGap] = [0, 0];
//   for (const n of hArr) {
//     if ('✂️' === n) [maxHGap, hGap] = [Math.max(maxHGap, hGap + 1), 0];
//     else hGap++;
//   }
//   // maxHGap; //?

//   const vArr = new Array(w + 1);
//   vArr[0] = '✂️';
//   vArr[vArr.length - 1] = '✂️';
//   // verticalCuts; //?
//   for (const n of verticalCuts) vArr[n] = '✂️';
//   // vArr; //?
//   let [vGap, maxVGap] = [0, 0];
//   for (const n of vArr) {
//     if ('✂️' === n) [maxVGap, vGap] = [Math.max(maxVGap, vGap + 1), 0];
//     else vGap++;
//   }
//   // maxVGap; //?

//   return (maxHGap * maxVGap) % (10 ** 9 + 7);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(maxArea(5, 4, [1, 2, 4], [1, 3]), 4);

/*

0|00|0
-|--|-
0|00|0
-|--|-
0|##|0
0|##|0
-|--|-
0|00|0

*/

// Explanation: The figure above represents the given rectangular cake. Red
// lines are the horizontal and vertical cuts. After you cut the cake, the green
// piece of cake has the maximum area.

// Example 2:
strictEqual(maxArea(5, 4, [3, 1], [1]), 6);

/*

0|000
-|---
0|###
0|###
-|---
0|XXX
0|XXX

*/

// Explanation: The figure above represents the given rectangular cake. Red
// lines are the horizontal and vertical cuts. After you cut the cake, the green
// and yellow pieces of cake have the maximum area.

// Example 3:
strictEqual(maxArea(5, 4, [3], [3]), 9);

/*

###|0
###|0
###|0
-----
$$$|0
$$$|0
$$$|0

*/
