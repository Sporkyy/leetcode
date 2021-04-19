// 1534. Count Good Triplets
// https://leetcode.com/problems/count-good-triplets/

/*

Given an array of integers arr, and three integers a, b and c. You need to find
the number of good triplets.

A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:
- 0 <= i < j < k < arr.length
- |arr[i] - arr[j]| <= a
- |arr[j] - arr[k]| <= b
- |arr[i] - arr[k]| <= c

Where |x| denotes the absolute value of x.

Return the number of good triplets.

Constraints:
- 3 <= arr.length <= 100
- 0 <= arr[i] <= 1000
- 0 <= a, b, c <= 1000

*/

import { strictEqual } from 'assert';

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 80 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 37 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const countGoodTriplets = (arr, a, b, c) => {
  let cnt = 0;
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++)
      for (let k = j + 1; k < arr.length; k++)
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        )
          cnt++;
  return cnt;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 92 ms, faster than 40.33% of JavaScript online submissions
// Memory Usage: 38.6 MB, less than 77.86% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @param {number} a
//  * @param {number} b
//  * @param {number} c
//  * @return {number}
//  */
// const countGoodTriplets = (arr, a, b, c) => {
//   // const [mins, maxes] = [new Array(arr.length - 1), new Array(arr.length - 1)];
//   // for (
//   //   let i = arr.length - 2,
//   //     min = arr[arr.length - 1],
//   //     max = arr[arr.length - 1];
//   //   0 <= i;
//   //   i--
//   // ) {
//   //   mins[i] = min = Math.min(min, arr[i]);
//   //   maxes[i] = max = Math.max(max, arr[i]);
//   // }
//   // console.log(mins, maxes);
//   let cnt = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // const [minX, maxX] = [7 + arr[i], -7 + arr[i]].sort((a, b) => a - b);
//     // console.log(minX, maxX);
//     for (let j = i + 1; j < arr.length; j++) {
//       // console.log(arr[j]);
//       if (!(arr[j] <= a + arr[i] || arr[j] <= a + arr[i])) continue;
//       // const y = arr[j];
//       for (let k = j + 1; k < arr.length; k++) {
//         if (!(arr[k] <= b + arr[j] || arr[k] <= b + arr[j])) continue;
//         if (!(arr[k] <= c + arr[i] || arr[k] <= c + arr[i])) continue;
//         // const z = arr[k];
//         if (
//           Math.abs(arr[i] - arr[j]) <= a &&
//           Math.abs(arr[j] - arr[k]) <= b &&
//           Math.abs(arr[i] - arr[k]) <= c
//         )
//           cnt++;
//       }
//     }
//   }
//   return cnt;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Example 1:
strictEqual(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3), 4);
// Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].

/*

|x - y| <= a
|y - z| <= b
|x - z| <= c

x - y <= a | x - y <= -a
y - z <= b | y - z <= -b
x - z <= c | x - z <= -c

x - y <= 7 | x - y <= -7
y - z <= 2 | y - z <= -2
x - z <= 3 | x - z <= -3

x - y + x <= 7 + x | x - y + x <= -7 + x
y - z + y <= 2 + y | y - z + y <= -2 + y
x - z + x <= 3 + x | x - z + x <= -3 + x

y <= 7 + x | y <= -7 + x
z <= 2 + y | z <= -2 + y
z <= 3 + x | z <= -3 + x

7 + y <= x | 7 - y <= x
2 + z <= y | 2 - z <= y
3 + z <= x | 3 - z <= x

🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮

|arr[i] - arr[j]| <= a
|arr[j] - arr[k]| <= b
|arr[i] - arr[k]| <= c

3 - 0 <= 7 | 3 - 0 <= -7
0 - 1 <= 2 | 0 - 1 <= -2
3 - 1 <= 3 | 3 - 1 <= -3

3 - 0 + 0 <= 7 + 0 | 3 - 0 + 0 <= -7 + 0
0 - 1 + 1 <= 2 + 1 | 0 - 1 + 1 <= -2 + 1
3 - 1 + 1 <= 3 + 1 | 3 - 1 + 1 <= -3 + 1

3 <= 7 | 3 <= -7
0 <= 3 | 0 <= -1
3 <= 4 | 3 <= -2

🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮

i   = | 0 | 1 | 2 | 3 | 4 | 5 |
n   = | 3 | 0 | 1 | 1 | 9 | 7 |
min = | 0 | 1 | 1 | 7 | 7 | 7 |
max = | 9 | 9 | 9 | 9 | 7 | 7 |

🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮

| 0 | 1 | 2 | 3 | 4 | 5 |
+---+---+---+---+---+---+
| 3 | 0 | 1 | 1 | 9 | 7 |

0, 1, 2
0, 1, 3
0, 1, 4
0, 1, 5

🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮 🌮

7, 2, 3

<= 7
-----------
7 = |7 - 0|
6 = |7 - 1|
5 = |7 - 2|
4 = |7 - 3|
3 = |7 - 4|
2 = |7 - 5|
1 = |7 - 6|
0 = |7 - 7|
1 = |6 - 7|
5 = |2 - 7|
2 = |5 - 7|
3 = |4 - 7|
4 = |3 - 7|
6 = |1 - 7|
7 = |0 - 7|

<= 2
-----------
2 = |2 - 0|
1 = |2 - 1|
0 = |2 - 2|
1 = |1 - 2|
2 = |0 - 2|

<= 3
-----------
3 = |3 - 0|
2 = |3 - 1|
1 = |3 - 2|
0 = |3 - 3|
1 = |2 - 3|
2 = |1 - 3|
3 = |0 - 3|

*/

// Example 2:
// strictEqual(countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1), 0);
// Explanation: No triplet satisfies all conditions.

strictEqual(countGoodTriplets([7, 3, 7, 3, 12, 1, 12, 2, 3], 5, 8, 1), 12);

/*

|arr[i] - arr[j]| <= a
|arr[j] - arr[k]| <= b
|arr[i] - arr[k]| <= c

arr[i] - arr[j] + arr[j] <= a + arr[j] || arr[i] - arr[j] <= -a + arr[j]
arr[j] - arr[k] + arr[k] <= b + arr[k] || arr[j] - arr[k] <= -b + arr[k]
arr[i] - arr[k] + arr[k] <= c + arr[k] || arr[i] - arr[k] <= -c + arr[k]

*/
