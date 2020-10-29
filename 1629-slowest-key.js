// 1629. Slowest Key
// https://leetcode.com/problems/slowest-key/

/*

A newly designed keypad was tested, where a tester pressed a sequence of n keys,
one at a time.

You are given a string keysPressed of length n, where keysPressed[i] was the ith
key pressed in the testing sequence, and a sorted list releaseTimes, where
releaseTimes[i] was the time the ith key was released. Both arrays are
0-indexed. The 0th key was pressed at the time 0, and every subsequent key was
pressed at the exact time the previous key was released.

The tester wants to know the key of the keypress that had the longest duration.
The ith keypress had a duration of releaseTimes[i] - releaseTimes[i - 1], and
the 0th keypress had a duration of releaseTimes[0].

Note that the same key could have been pressed multiple times during the test,
and these multiple presses of the same key may not have had the same duration.

Return the key of the keypress that had the longest duration. If there are
multiple such keypresses, return the lexicographically largest key of the
keypresses.

## Constraints

- releaseTimes.length == n
- keysPressed.length == n
- 2 <= n <= 1000
- 1 <= releaseTimes[i] <= 109
- releaseTimes[i] < releaseTimes[i+1]
- keysPressed contains only lowercase English letters.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {number[]} releaseTimes
//  * @param {string} keysPressed
//  * @return {character}
//  */
// const slowestKey = (releaseTimes, keysPressed) => {
//   // console.log(
//   //   releaseTimes
//   //     .map((t, idx) => [t - releaseTimes[idx - 1] || t, keysPressed[idx]])
//   //     .sort(([aT, aC], [bT, bC]) =>
//   //       `${('' + bT).padStart(10, 0)}${bC}`.localeCompare(
//   //         `${('' + aT).padStart(10, 0)}${aC}`,
//   //       ),
//   //     ),
//   // );
//   return releaseTimes
//     .map((t, idx) => [t - releaseTimes[idx - 1] || t, keysPressed[idx]])
//     .sort(([aT, aC], [bT, bC]) =>
//       `${('' + bT).padStart(10, 0)}${bC}`.localeCompare(
//         `${('' + aT).padStart(10, 0)}${aC}`,
//       ),
//     )[0][1];
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 120 ms, faster than 8.15% of JavaScript online submissions
// Memory Usage: 45 MB, less than 5.43% of JavaScript online submissions

// /**
//  * @param {number[]} releaseTimes
//  * @param {string} keysPressed
//  * @return {character}
//  */
// const slowestKey = (releaseTimes, keysPressed) =>
//   releaseTimes
//     .map(
//       (t, idx) =>
//         `${('' + (t - releaseTimes[idx - 1] || t)).padStart(10, 0)}|${
//           keysPressed[idx]
//         }`,
//     )
//     .sort((a, b) => b.localeCompare(a))[0]
//     .split('|')[1];

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 84 ms, faster than 66.85% of JavaScript online submissions
// Memory Usage: 45.6 MB, less than 5.43% of JavaScript online submissions

// /**
//  * @param {number[]} releaseTimes
//  * @param {string} keysPressed
//  * @return {character}
//  */
// const slowestKey = (releaseTimes, keysPressed) =>
//   releaseTimes
//     .map(
//       (t, idx) =>
//         `${('' + (t - releaseTimes[idx - 1] || t)).padStart(10, 0)}|${
//           keysPressed[idx]
//         }`,
//     )
//     .reduce((slowest, combo) =>
//       0 < combo.localeCompare(slowest) ? combo : slowest,
//     )
//     .split('|')[1];

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 88 ms, faster than 51.63% of JavaScript online submissions
// Memory Usage: 45.7 MB, less than 5.43% of JavaScript online submissions

// /**
//  * @param {number[]} releaseTimes
//  * @param {string} keysPressed
//  * @return {character}
//  */
// const slowestKey = (releaseTimes, keysPressed) =>
//   releaseTimes
//     .reduce(
//       (slowest, t, idx) =>
//         0 <
//         `${('' + (t - releaseTimes[idx - 1] || t)).padStart(10, 0)}|${
//           keysPressed[idx]
//         }`.localeCompare(slowest)
//           ? `${('' + (t - releaseTimes[idx - 1] || t)).padStart(10, 0)}|${
//               keysPressed[idx]
//             }`
//           : slowest,
//       0,
//     )
//     .split('|')
//     .pop();

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 96 ms, faster than 28.80% of JavaScript online submissions
// Memory Usage: 45.1 MB, less than 5.43% of JavaScript online submissions

// /**
//  * @param {number[]} rt
//  * @param {string} kp
//  * @return {character}
//  */
// const slowestKey = (rt, kp) =>
//   rt.reduce(
//     (slowest, t, idx) =>
//       (combo => (0 < combo.localeCompare(slowest) ? combo : slowest))(
//         `${t - rt[idx - 1] || t}${kp[idx]}`.padStart(10, 0),
//       ),
//     0,
//   )[9];

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 92 ms, faster than 37.50% of JavaScript online submissions
// Memory Usage: 48.9 MB, less than 5.43% of JavaScript online submissions

// /**
//  * @param {number[]} releaseTimes
//  * @param {string} keysPressed
//  * @return {character}
//  */
// const slowestKey = (releaseTimes, keysPressed) =>
//   releaseTimes.reduce(
//     (slowest, t, idx) =>
//       [
//         slowest,
//         `${t - releaseTimes[idx - 1] || t}${keysPressed[idx]}`.padStart(10, 0),
//       ].sort((a, b) => b.localeCompare(a))[0],
//     '',
//   )[9];

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 88 ms, faster than 51.63% of JavaScript online submissions
// Memory Usage: 41.1 MB, less than 5.43% of JavaScript online submissions

// /**
//  * @param {number[]} rt
//  * @param {string} kp
//  * @return {character}
//  */
// const slowestKey = (rt, kp) =>
//   String.fromCharCode(
//     rt.reduce(
//       (acc, curr, idx) =>
//         Math.max(
//           acc,
//           Number(
//             (curr - rt[idx - 1] || curr) +
//               String(kp.charCodeAt(idx)).padStart(3, 0),
//           ),
//         ),
//       0,
//     ) % 1000,
//   );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 84 ms, faster than 66.85% of JavaScript online submissions
// Memory Usage: 41.1 MB, less than 5.43% of JavaScript online submissions

// /**
//  * @param {number[]} releaseTimes
//  * @param {string} keysPressed
//  * @return {character}
//  */
// const slowestKey = (releaseTimes, keysPressed) =>
//   String.fromCharCode(
//     releaseTimes.reduce(
//       (acc, curr, idx) =>
//         Math.max(
//           acc,
//           (curr - releaseTimes[idx - 1] || curr) +
//             String(keysPressed.charCodeAt(idx)).padStart(3, 0),
//         ),
//       0,
//     ) % 1000,
//   );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 92.78% of JavaScript online submissions
// Memory Usage: 41.1 MB, less than 5.67% of JavaScript online submissions

/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
const slowestKey = (releaseTimes, keysPressed) =>
  String.fromCharCode(
    Math.max(
      ...releaseTimes.map(
        (t, idx) =>
          `${t - releaseTimes[idx - 1] || t}${String(
            keysPressed.charCodeAt(idx),
          ).padStart(3, 0)}`,
      ),
    ) % 1000,
  );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(slowestKey([9, 29, 49, 50], 'cbcd'), 'c');
// Explanation: The keypresses were as follows:
// - Keypress for 'c' had a duration of 9 (pressed at time 0 and released at
//   time 9).
// - Keypress for 'b' had a duration of 29 - 9 = 20 (pressed at time 9 right
//   after the release of the previous character and released at time 29).
// - Keypress for 'c' had a duration of 49 - 29 = 20 (pressed at time 29 right
//   after the release of the previous character and released at time 49).
// - Keypress for 'd' had a duration of 50 - 49 = 1 (pressed at time 49 right
//   after the release of the previous character and released at time 50).
// - The longest of these was the keypress for 'b' and the second keypress for
//   'c', both with duration 20.
// - 'c' is lexicographically larger than 'b', so the answer is 'c'.

// Example 2:
strictEqual(slowestKey([12, 23, 36, 46, 62], 'spuda'), 'a');
// Explanation: The keypresses were as follows:
// - Keypress for 's' had a duration of 12.
// - Keypress for 'p' had a duration of 23 - 12 = 11.
// - Keypress for 'u' had a duration of 36 - 23 = 13.
// - Keypress for 'd' had a duration of 46 - 36 = 10.
// - Keypress for 'a' had a duration of 62 - 46 = 16.
// - The longest of these was the keypress for 'a' with duration 16.

strictEqual(slowestKey([18, 37, 47, 61], 'razf'), 'a');

strictEqual(slowestKey([9, 29, 49, 50], 'cbcd'), 'c');

strictEqual(slowestKey([23, 34, 43, 59, 62, 80, 83, 92, 97], 'qgkzzihfc'), 'q');

strictEqual(
  slowestKey(
    [
      2617870,
      2804499,
      5643587,
      29854678,
      33689351,
      47117672,
      49265310,
      54401474,
      63835109,
      75314868,
      89496205,
      104531346,
      119148965,
      131727186,
      142061168,
      150394587,
      151232201,
      163283843,
      185878491,
      222421860,
      314965990,
      316627847,
      331577426,
      354962258,
      356406157,
      359281165,
      363143605,
      363302376,
      376203516,
      377981134,
      394576444,
      462843763,
      483468977,
      489791607,
      493213166,
      517429527,
      547321211,
      552790953,
      559222715,
      563692599,
      582389645,
      584627552,
      602969065,
      615152939,
      623243285,
      631299439,
      640289631,
      681903140,
      704312281,
      717112352,
      721931865,
      739764340,
      741431444,
      815342968,
      817384001,
      863806407,
      866488526,
      891066073,
      893637303,
      899913710,
      905103579,
      907430499,
      909354456,
      927761024,
      933220688,
      944912621,
      977206620,
      988813942,
      998503052,
    ],
    'snngwnabhoiztkvqimbbpdrnjtkylnjckiswueyrjveeyrtgzducyykadsrbeerdwdibe',
  ),
  'p',
);
