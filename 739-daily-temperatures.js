// 739. Daily Temperatures
// https://leetcode.com/problems/daily-temperatures/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * Runtime: 1116 ms, faster than 23.56% of JavaScript online submissions
//  * Memory Usage: 41.9 MB, less than 100.00% of JavaScript online submissions
//  *
//  * @param {number[]} T
//  * @return {number[]}
//  */
// const dailyTemperatures = T => {
//   const res = new Array(T.length).fill(0);
//   loop: for (let i = 0; i < T.length; i++) {
//     let days = 0;
//     for (let j = i; j < T.length; j++) {
//       if (T[i] < T[j]) {
//         res[i] = days;
//         continue loop;
//       } else days++;
//     }
//   }
//   return res;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * Runtime: 1116 ms, faster than 23.56% of JavaScript online submissions
//  * Memory Usage: 41.9 MB, less than 100.00% of JavaScript online submissions
//  *
//  * @param {number[]} T
//  * @return {number[]}
//  */
// const dailyTemperatures = T => {
//   const res = new Array(T.length).fill(0);
//   loop: for (let i = 0, days = 0; i < T.length; i++, days = 0) {
//     for (let j = i; j < T.length; j++) {
//       if (T[i] < T[j]) {
//         res[i] = days;
//         continue loop;
//       } else days++;
//     }
//   }
//   return res;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Runtime: 1100 ms, faster than 24.13% of JavaScript online submissions
 * Memory Usage: 42 MB, less than 100.00% of JavaScript online submissions
 *
 * @param {number[]} T
 * @return {number[]}
 */
const dailyTemperatures = T => {
  const res = new Array(T.length).fill(0);
  for (let i = 0; i < T.length; i++)
    for (let j = i; j < T.length && 0 === res[i]; j++)
      if (T[i] < T[j]) res[i] = j - i;
  return res;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [
  1,
  1,
  4,
  2,
  1,
  1,
  0,
  0,
]);
