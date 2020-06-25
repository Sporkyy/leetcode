// 1488. Avoid Flood in The City
// https://leetcode.com/problems/avoid-flood-in-the-city/

/*

Your country has an infinite number of lakes. Initially, all the lakes are
empty, but when it rains over the nth lake, the nth lake becomes full of water.
If it rains over a lake which is full of water, there will be a flood. Your goal
is to avoid the flood in any lake.

Given an integer array rains where:
- rains[i] > 0 means there will be rains over the rains[i] lake.
- rains[i] == 0 means there are no rains this day and you can choose one lake
  this day and dry it.

Return an array ans where:
- ans.length == rains.length
- ans[i] == -1 if rains[i] > 0.
- ans[i] is the lake you choose to dry in the ith day if rains[i] == 0.
- If there are multiple valid answers return any of them. If it is impossible to
  avoid flood return an empty array.

Notice that if you chose to dry a full lake, it becomes empty, but if you chose
to dry an empty lake, nothing changes. (see example 4)

Constraints:
- 1 <= rains.length <= 10^5
- 0 <= rains[i] <= 10^9

*/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Time Limit Exceeded

// /**
//  * @param {number[]} rains
//  * @return {number[]}
//  */
// const avoidFlood = rains => {
//   let str = `#${rains.join('##')}#`;
//   const regex = /(.*)(#[1-9]\d*#)(.*)(#0#)(.*)(\2)(.*)/;
//   while (regex.test(str)) str = str.replace(regex, '$1#-1#$3$2$5#-1#$7');
//   if (/(#[1-9]\d*#)(.*)\1/.test(str)) return [];
//   const ans = str.slice(1, -1).split('##').map(Number);
//   for (let i = 0; i < rains.length; i++) {
//     if (0 === ans[i]) ans[i] = 1;
//     if (rains[i] === ans[i]) ans[i] = -1;
//   }
//   return ans;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Faster, but wrong

// /**
//  * @param {number[]} rains
//  * @return {number[]}
//  */
// const avoidFlood = rains => {
//   let str = `#${rains.join('##')}#`;
//   const regex = /(#[1-9]\d*#)(.*)#0#(.*)\1/g;
//   while (regex.test(str)) str = str.replace(regex, '#-1#$2$1$3#-1#');
//   console.log(str);
//   if (/(#[1-9]\d*#)(.*)\1/.test(str)) return [];
//   const ans = str.slice(1, -1).split('##').map(Number);
//   for (let i = 0; i < rains.length; i++) {
//     if (0 === ans[i]) ans[i] = 1;
//     if (rains[i] === ans[i]) ans[i] = -1;
//   }
//   console.log(ans);
//   return ans;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
// deepStrictEqual(avoidFlood([1, 2, 3, 4]), [-1, -1, -1, -1]);
// Explanation: After the first day full lakes are [1]
// After the second day full lakes are [1,2]
// After the third day full lakes are [1,2,3]
// After the fourth day full lakes are [1,2,3,4]
// There's no day to dry any lake and there is no flood in any lake.

// Example 2:
// deepStrictEqual(avoidFlood([1, 2, 0, 0, 2, 1]), [-1, -1, 2, 1, -1, -1]);
// Explanation: After the first day full lakes are [1]
// After the second day full lakes are [1,2]
// After the third day, we dry lake 2. Full lakes are [1]
// After the fourth day, we dry lake 1. There is no full lakes.
// After the fifth day, full lakes are [2].
// After the sixth day, full lakes are [1,2].
// It is easy that this scenario is flood-free. [-1,-1,1,2,-1,-1] is another
// acceptable scenario.

// Example 3:
// deepStrictEqual(avoidFlood([1, 2, 0, 1, 2]), []);
// Explanation: After the second day, full lakes are  [1,2]. We have to dry one
// lake in the third day.

// After that, it will rain over lakes [1,2]. It's easy to prove that no matter
// which lake you choose to dry in the 3rd day, the other one will flood.

// Example 4:
// deepStrictEqual(avoidFlood([69, 0, 0, 0, 69]), [-1, 69, 1, 1, -1]);
// Explanation: Any solution on one of the forms [-1,69,x,y,-1], [-1,x,69,y,-1]
// or [-1,x,y,69,-1] is acceptable where 1 <= x,y <= 10^9

// Example 5:
// deepStrictEqual(avoidFlood([10, 20, 20]), []);
// Explanation: It will rain over lake 20 two consecutive days. There is no
// chance to dry any lake.

// deepStrictEqual(avoidFlood([0, 1, 1]), []);

// deepStrictEqual(avoidFlood([1, 0, 2, 3, 0, 1, 2]), [-1, 1, -1, -1, 2, -1, -1]);

// deepStrictEqual(avoidFlood([1, 0, 2, 0, 2, 1]), [-1, 1, -1, 2, -1, -1]);

// deepStrictEqual(avoidFlood([1, 2, 0, 2, 3, 0, 1]), [-1, -1, 2, -1, -1, 1, -1]);

deepStrictEqual(avoidFlood([69, 0, 0, 0, 69]), [-1, 69, 1, 1, -1]);

deepStrictEqual(
  avoidFlood([
    16915,
    16915,
    33788,
    0,
    27196,
    0,
    61729,
    18633,
    82973,
    0,
    54573,
    61245,
    3165,
    0,
    61729,
    20861,
    0,
    51721,
    54573,
    0,
    0,
    0,
    0,
    96233,
    27494,
    61729,
    67124,
    0,
    0,
    37758,
    12151,
    0,
    67324,
    0,
    0,
    90196,
    0,
    2907,
    37986,
    75413,
    33788,
    0,
    0,
    0,
    76891,
    0,
    0,
    54573,
    0,
    75585,
    0,
    21901,
    0,
    51721,
    0,
    0,
    0,
    0,
    0,
    0,
    54216,
    0,
    0,
    69994,
    0,
    67124,
    0,
    0,
    90196,
    0,
    0,
    90196,
    0,
    0,
    0,
    51721,
    18633,
    0,
    39856,
    0,
    0,
    76891,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    61729,
    80022,
    0,
    0,
    12151,
    3165,
    42855,
    0,
    18267,
    0,
    66957,
    82973,
    90196,
    0,
    0,
    0,
    0,
    75413,
    61245,
    0,
    21901,
    96233,
    0,
    0,
    0,
    0,
    82580,
    0,
    0,
    0,
    0,
    0,
    0,
    67324,
    21901,
    0,
    0,
    37758,
    0,
    80022,
    14943,
    0,
    87376,
    47333,
    21901,
    0,
    0,
    0,
    0,
    44997,
    82580,
    0,
    0,
    18633,
    53492,
    0,
    20861,
    0,
    0,
    0,
    0,
    44181,
    12125,
    0,
    0,
    0,
    0,
    12125,
    20861,
    37758,
    0,
    36356,
    0,
    0,
    90196,
    96233,
    0,
    27494,
    0,
    67324,
    0,
    0,
    0,
    39856,
    0,
    0,
    0,
    33788,
    33881,
    0,
    0,
    0,
    0,
    75413,
    72005,
    66957,
    21901,
    27196,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2907,
    18633,
    67124,
    0,
    0,
    75413,
    0,
    0,
    0,
    0,
    54573,
    36356,
    75585,
    0,
    0,
    0,
    0,
    0,
    21901,
    0,
    0,
    0,
    0,
    12125,
    0,
    0,
    18633,
    0,
    0,
    0,
    0,
    18267,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    76891,
    0,
    0,
    84217,
    0,
    12125,
    67324,
    0,
    82580,
    33788,
    37758,
    54573,
    51721,
    14002,
    72005,
    18267,
    0,
    0,
    0,
    14943,
    0,
    0,
    0,
    0,
    80022,
    0,
    0,
    0,
    0,
    51721,
    0,
    0,
    39856,
    61245,
    16915,
    87376,
    0,
    61729,
    0,
    54573,
    0,
    54573,
    0,
    61245,
    0,
    0,
    0,
    0,
    67124,
    0,
    0,
    0,
    61245,
    66957,
    18633,
    61729,
    0,
    0,
    84217,
    39856,
    0,
    63244,
    33931,
    0,
    87376,
    87376,
    37986,
    0,
    0,
    27196,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    61662,
    0,
    0,
    44997,
    0,
    0,
    0,
    0,
    0,
    2907,
    33788,
    0,
    12125,
    51721,
    0,
    0,
    0,
    2907,
    0,
    0,
    0,
    61662,
    12125,
    0,
    0,
    0,
    52996,
    0,
    71112,
    33931,
    27196,
    0,
    0,
    0,
    0,
    0,
    0,
    61662,
    27196,
    82580,
    0,
    14943,
    0,
    0,
    0,
    0,
    0,
    0,
    27494,
    75585,
    52996,
    0,
    0,
    0,
    0,
    3165,
    0,
    0,
    0,
    21901,
    0,
    0,
    47333,
    0,
    16915,
    18633,
    3165,
    0,
    0,
    0,
    75413,
    67124,
    0,
    20861,
    0,
    44181,
    72005,
    12125,
    0,
    63244,
    27494,
    61662,
    61662,
    51721,
    27196,
    61662,
    16915,
    67124,
    16915,
    80022,
    0,
    0,
    0,
    0,
    3165,
    0,
    0,
    0,
    0,
    82580,
    0,
    0,
    3165,
    0,
    75585,
    0,
    0,
    0,
    18267,
    0,
    87376,
    0,
    33788,
    0,
    0,
    80022,
    0,
    0,
    37986,
    37758,
    0,
    0,
    0,
    0,
    37986,
    0,
    0,
    0,
    37986,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ]),
  [],
); /* ?. */
