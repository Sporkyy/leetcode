// 1299. Replace Elements with Greatest Element on Right
// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 628 ms, faster than 13.19% of JavaScript online submissions
// Memory Usage: 42.7 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {number[]}
//  */
// const replaceElements = arr =>
//   arr.map((_, i) =>
//     arr.length - 1 === i ? -1 : Math.max(...arr.slice(i + 1, arr.length)),
//   );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 89.90% of JavaScript online submissions
// Memory Usage: 38.3 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {number[]}
//  */
// const replaceElements = arr => {
//   for (let i = arr.length - 1; 0 < i; i--) {
//     // console.log(`${arr[i]} vs ${arr[i - 1]}`);
//     if (arr[i - 1] < arr[i]) arr[i - 1] = arr[i];
//   }
//   // arr[arr.length - 1] = -1;
//   // console.log(arr);
//   arr.shift();
//   arr.push(-1);
//   // console.log(arr);
//   return arr;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 71.74% of JavaScript online submissions
// Memory Usage: 38.5 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {number[]}
//  */
// const replaceElements = arr => {
//   let res = [];
//   for (let i = arr.length - 2, tmp = arr[arr.length - 1]; 0 <= i; i--) {
//     tmp = Math.max(tmp, arr[i + 1]);
//     res.push(tmp);
//   }
//   res = res.reverse();
//   res.push(-1);
//   return res;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 95.43% of JavaScript online submissions
// Memory Usage: 37.8 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {number[]}
//  */
// const replaceElements = arr => {
//   const res = new Array(arr.length);
//   res[arr.length - 1] = -1;
//   for (let i = arr.length - 1; 0 < i; i--)
//     res[i - 1] = Math.max(arr[i], res[i]);
//   return res;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 88 ms, faster than 62.10% of JavaScript online submissions
// Memory Usage: 38.3 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {number[]}
//  */
// const replaceElements = arr => {
//   for (let i = arr.length - 1; 0 < i; i--)
//     if (arr[i - 1] < arr[i]) arr[i - 1] = arr[i];
//   return arr.slice(1).concat(-1);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 88 ms, faster than 62.10% of JavaScript online submissions
// Memory Usage: 37.9 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {number[]}
//  */
// const replaceElements = arr => {
//   for (let i = arr.length - 2, tmp = arr[arr.length - 1]; 0 <= i; i--) {
//     if (tmp < arr[i]) [arr[i], tmp] = [tmp, arr[i]];
//     else arr[i] = tmp;
//   }
//   arr[arr.length - 1] = -1;
//   return arr;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 96 ms, faster than 53.98% of JavaScript online submissions
// Memory Usage: 37.6 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = arr => {
  for (let i = arr.length - 2, tmp = arr[arr.length - 1]; 0 <= i; i--)
    if (tmp < arr[i]) [arr[i], tmp] = [tmp, arr[i]];
    else arr[i] = tmp;
  arr[arr.length - 1] = -1;
  return arr;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// replaceElements([2, 3, 4, 1, 2]);
// [4, 4, 2, 2, -1]

// replaceElements([17, 18, 5, 4, 6, 1]);
// [18, 6, 6, 6, 1, -1]

// replaceElements([17, 18, 5, 24, 6, 1]);
// [24, 24, 24, 6, 1, -1]

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(replaceElements([2, 3, 4, 1, 2]), [4, 4, 2, 2, -1]);

deepStrictEqual(replaceElements([17, 18, 5, 4, 6, 1]), [18, 6, 6, 6, 1, -1]);

deepStrictEqual(replaceElements([17, 18, 5, 24, 6, 1]), [24, 24, 24, 6, 1, -1]);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*

// | 0  | 1  | 2  | 3  |  4 |  5 |
// | -: | -: | -: | -: | -: | -: |
// |  2 |  3 |  4 |  1 |  2 | -1 |
// |  2 |  3 |  4 |  2 |  2 | -1 |
// |  2 |  3 |  4 |  2 |  2 | -1 |
// |  2 |  4 |  2 |  2 |  2 | -1 |
// |  4 |  4 |  2 |  2 |  2 | -1 |
// |  4 |  4 |  2 |  2 |  2 | -1 |

// | 0  | 1  | 2  | 3  |  4 |
// | -: | -: | -: | -: | -: |
// |  2 |  3 |  4 |  1 |  2 |
// |  2 |  3 |  4 |  2 |  2 |
// |  2 |  3 |  4 |  2 |  2 |
// |  2 |  4 |  2 |  2 |  2 |
// |  4 |  4 |  2 |  2 |  2 |
// |  4 |  4 |  2 |  2 |  2 |

*/
