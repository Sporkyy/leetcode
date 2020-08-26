// 739. Daily Temperatures
// https://leetcode.com/problems/daily-temperatures/

/*

Given a list of daily temperatures T, return a list such that, for each day
in the input, tells you how many days you would have to wait until a warmer
temperature. If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures
T = [73, 74, 75, 71, 69, 72, 76, 73]
, your output should be
[1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000].
Each temperature will be an integer in the range [30, 100].

*/

import { deepStrictEqual } from 'assert';

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 1116 ms, faster than 23.56% of JavaScript online submissions
// Memory Usage: 41.9 MB, less than 100.00% of JavaScript online submissions

// /**
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

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 1116 ms, faster than 23.56% of JavaScript online submissions
// Memory Usage: 41.9 MB, less than 100.00% of JavaScript online submissions

// /**
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

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 1260 ms, faster than 20.82% of JavaScript online submissions
// Memory Usage: 41.9 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} T
//  * @return {number[]}
//  */
// const dailyTemperatures = T => {
//   const res = new Array(T.length).fill(0);
//   for (let i = 0; i < T.length; i++)
//     for (let j = i + 1; j < T.length && 0 === res[i]; j++)
//       if (T[i] < T[j]) res[i] = j - i;
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 8372 ms, faster than 5.01% of JavaScript online submissions
// Memory Usage: 86.7 MB, less than 11.11% of JavaScript online submissions

// /**
//  * @param {number[]} T
//  * @return {number[]}
//  */
// const dailyTemperatures = T =>
//   // Store the indicies with the temps, for later
//   T.map((temp, idx) => [idx, temp])
//     // Find the future temp higher than the current temp
//     .map(([, cTemp], idx, a) => a.slice(idx).find(([, fTemp]) => cTemp < fTemp))
//     // Subtract the index of the future temp from the current index
//     .map((el, idx) => ('undefined' === typeof el ? 0 : el[0] - idx));

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 6304 ms, faster than 5.08% of JavaScript online submissions
// Memory Usage: 44.4 MB, less than 94.32% of JavaScript online submissions

// /**
//  * @param {number[]} temps
//  * @return {number[]}
//  */
// const dailyTemperatures = temps => {
//   const res = new Array(temps.length).fill(0);
//   for (let i = 0; i < res.length; i++)
//     for (let j = i; 0 <= j; j--)
//       if (0 === res[j] && temps[j] < temps[i]) res[j] = i - j;
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 156 ms, faster than 77.39% of JavaScript online submissions
// Memory Usage: 46.8 MB, less than 44.38% of JavaScript online submissions

/**
 * @param {number[]} temps
 * @return {number[]}
 */
const dailyTemperatures = temps => {
  const [res, stk] = [new Array(temps.length).fill(0), []];
  for (let i = 0; i < temps.length; stk.push(i), i++)
    while (stk.length && temps[stk[stk.length - 1]] < temps[i])
      (prevIdx => (res[prevIdx] = i - prevIdx))(stk.pop());
  return res;
};

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

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

/*

[73, 74, 75, 71, 69, 72, 76, 73]
[ 1,  1,  4,  2,  1,  1,  0,  0]

[0, 73]
[1, 74]
[2, 75]
[3, 71]
[4, 69]
[5, 72]
[6, 76]
[7, 73]

[4, 69]
[3, 71]
[5, 72]
[0, 73]
[7, 73]
[1, 74]
[2, 75]
[6, 76]

*/
