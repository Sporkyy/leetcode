// 1573. Number of Ways to Split a String
// https://leetcode.com/problems/number-of-ways-to-split-a-string/

/*

Given a binary string s (a string consisting only of '0's and '1's), we can
split s into 3 non-empty strings s1, s2, s3 (s1+ s2+ s3 = s).

Return the number of ways s can be split such that the number of characters '1'
is the same in s1, s2, and s3.

Since the answer may be too large, return it modulo 10^9 + 7.

## Constraints
- 3 <= s.length <= 10^5
- s[i] is '0' or '1'.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 196 ms, faster than 11.84% of JavaScript online submissions
// Memory Usage: 44.3 MB, less than 27.63% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const numWays = s => {
//   if (s.length < 3) return 0;
//   let [l, r] = [0, s.length - 1];
//   let [l1Cnt, r1Cnt] = [0, 0];
//   let [l0Map, r0Map] = [new Map([[0, 0]]), new Map([[0, 0]])];
//   while (l <= r) {
//     if (l1Cnt <= r1Cnt) {
//       if ('1' === s[l]) l1Cnt++;
//       else if (0 < l1Cnt) l0Map.set(l1Cnt, (l0Map.get(l1Cnt) || 0) + 1);
//       l++;
//     } else {
//       if ('1' === s[r]) r1Cnt++;
//       else if (0 < r1Cnt) r0Map.set(r1Cnt, (r0Map.get(r1Cnt) || 0) + 1);
//       r--;
//     }
//   }
//   // console.log(`${l1Cnt}|${r1Cnt}`);
//   if (0 !== (l1Cnt + r1Cnt) % 3) return 0;
//   if (0 === l1Cnt + r1Cnt)
//     return (((s.length - 1) ** 2 - (s.length - 1)) / 2) % (10 ** 9 + 7);
//   const [lGap, rGap] = [
//     l0Map.get((l1Cnt + r1Cnt) / 3) || 0,
//     r0Map.get((l1Cnt + r1Cnt) / 3) || 0,
//   ];
//   // console.log(`${lGap}|${rGap} `);
//   // return (lGap ** 2 - lGap) / 2;
//   // if (!lGap && !rGap) {
//   //   return ((s.length - 1) ** 2 - (s.length - 1)) / 2;
//   // }
//   // if (0 < l1Cnt + r1Cnt && !lGap && !rGap) return s.length - 2;
//   // if (lGap && rGap) return lGap + rGap + 2;
//   // if (lGap && !rGap) return lGap + 1;
//   return ((lGap + 1) * (rGap + 1)) % (10 ** 9 + 7);
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 192 ms, faster than 11.84% of JavaScript online submissions
// Memory Usage: 45.1 MB, less than 19.74% of JavaScript online submissions

/**
 * @param {string} s
 * @return {number}
 */
const numWays = s => {
  let [l, r] = [0, s.length - 1];
  let [l1Cnt, r1Cnt] = [0, 0];
  let [l0Map, r0Map] = [new Map([[0, 0]]), new Map([[0, 0]])];
  while (l <= r) {
    if (l1Cnt <= r1Cnt) {
      if ('1' === s[l]) l1Cnt++;
      else l0Map.set(l1Cnt, (l0Map.get(l1Cnt) || 0) + 1);
      l++;
    } else {
      if ('1' === s[r]) r1Cnt++;
      else r0Map.set(r1Cnt, (r0Map.get(r1Cnt) || 0) + 1);
      r--;
    }
  }
  if (0 !== (l1Cnt + r1Cnt) % 3) return 0;
  if (0 === l1Cnt + r1Cnt)
    return (((s.length - 1) ** 2 - (s.length - 1)) / 2) % (10 ** 9 + 7);
  const [lGap, rGap] = [
    l0Map.get((l1Cnt + r1Cnt) / 3) || 0,
    r0Map.get((l1Cnt + r1Cnt) / 3) || 0,
  ];
  return ((lGap + 1) * (rGap + 1)) % (10 ** 9 + 7);
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(numWays('10101'), 4);
// Explanation: There are four ways to split s in 3 parts where each part
// contain the same number of letters '1'.
// - "1|010|1"
// - "1|01|01"
// - "10|10|1"
// - "10|1|01"

/*

+---+---+---+---+---+
| 1 | 0 | 1 | 0 | 1 |
+---+---+---+---+---+
| - | --------- | - |
| - | ----- | ----- |
| ----- | ----- | - |
| ----- | - | ----- |

*/

// Example 2:
strictEqual(numWays('1001'), 0);

// Example 4:
strictEqual(numWays('100100010100110'), 12);

/*

| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 |
| 1 | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 0 | 1 |  0 |  0 |  1 |  1 |  0 |
| ------------- | ------------------------------- | ------------ |
| ----------------- | --------------------------- | ------------ |
| --------------------- | ----------------------- | ------------ |
| ------------------------- | ------------------- | ------------ |
| ------------- | -------------------------- | ----------------- |
| ----------------- | ---------------------- | ----------------- |
| --------------------- | ------------------ | ----------------- |
| ------------------------- | -------------- | ----------------- |
| ------------- | --------------------- | ---------------------- |
| ---------------- | ------------------ | ---------------------- |
| --------------------- | ------------- | ---------------------- |
| ------------------------- | --------- | ---------------------- |

*/

strictEqual(numWays('0'), 0);

strictEqual(numWays('00'), 0);

strictEqual(numWays('000'), 1);

/*

| 0 | 1 | 2 |
| 0 | 0 | 0 |
| - | - | - |

*/

// Example 3:
strictEqual(numWays('0000'), 3);
// Explanation: There are three ways to split s in 3 parts.
// - "0|0|00"
// - "0|00|0"
// - "00|0|0"

strictEqual(numWays('00000'), 6);
// /*

// | 0 | 1 | 2 | 3 | 4 |
// | 0 | 0 | 0 | 0 | 0 |
// | - | - | --------- |
// | ----- | - | ----- |
// | --------- | - | - |
// | - | ----- | ----- |
// | - | --------- | - |
// | ----- | ----- | - |

// */

strictEqual(numWays('000000'), 10);
// /*

// | 0 | 1 | 2 | 3 | 4 | 5 |
// | 0 | 0 | 0 | 0 | 0 | 0 |
// | - | - | ------------- |
// | - | ----- | --------- |
// | - | --------- | ----- |
// | - | ------------- | - |
// | ----- | - | --------- |
// | ----- | ----- | ----- |
// | ----- | --------- | - |
// | --------- | ----- | - |
// | --------- | - | ----- |
// | ------------- | - | - |

// */

strictEqual(numWays('0000000'), 15);
// /*

// | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
// | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
// | - | - | ----------------- |
// | - | ----- | ------------- |
// | - | --------- | --------- |
// | - | ------------- | ----- |
// | - | ----------------- | - |
// | ----- | - | ------------- |
// | ----- | ----- | --------- |
// | ----- | --------- | ----- |
// | ----- | ------------- | - |
// | --------- | - | --------- |
// | --------- | ----- | ----- |
// | --------- | --------- | - |
// | ------------- | - | ----- |
// | ------------- | ----- | - |
// | ----------------- | - | - |

// */

strictEqual(numWays('00000000'), 21);
/*

| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

*/

strictEqual(numWays('111'), 1);

strictEqual(numWays('101100111111'), 3);

/*

| 1 | 0 |1 | 1 | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 1 |
| ------------ | ----------------- | ----------|
| ---------------- | ------------- | ----------|
| -------------------- | --------- | ----------|

*/

strictEqual(numWays('101100111111'), 3);

/*

| 1 | 0 | 1 | 0 | 0 | 1 |
| - | ----- | --------- |
| ----- | - | --------- |
| ----- | --------- | - |
| ----- | ----- | ----- |
| ----- | - | --------- |

// */

strictEqual(numWays('1011'), 2);

/*

| 1 | 0 | 1 | 1 |
| - | ----- | - |
| ----- | - | - |

*/

strictEqual(numWays('10011'), 3);

/*

| 1 | 0 | 0 | 1 | 1 |
| - | --------- | - |
| ----- | ----- | - |
| --------- | - | - |

*/

strictEqual(numWays('100011'), 4);

/*

| 1 | 0 | 0 | 0 | 1 | 1 |
| - | ------------- | - |
| ----- | --------- | - |
| --------- | ----- | - |
| ------------- | - | - |

*/

strictEqual(numWays('1000011'), 5);

/*

| 1 | 0 | 0 | 0 | 0 | 1 | 1 |
| - | ----------------- | - |
| ----- | ------------- | - |
| --------- | --------- | - |
| ------------- | ----- | - |
| ----------------- | - | - |

*/
