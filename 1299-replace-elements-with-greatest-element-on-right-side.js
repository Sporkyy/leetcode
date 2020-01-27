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

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = arr => {
  for (let i = arr.length - 1; 0 < i; i--) {
    // console.log(`${arr[i]} vs ${arr[i - 1]}`);
    if (arr[i - 1] < arr[i]) arr[i - 1] = arr[i];
  }
  // arr[arr.length - 1] = -1;
  // console.log(arr);
  arr.shift();
  arr.push(-1);
  // console.log(arr);
  return arr;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// replaceElements([17, 18, 5, 4, 6, 1]);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(replaceElements([17, 18, 5, 4, 6, 1]), [18, 6, 6, 6, 1, -1]);
