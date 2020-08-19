// 1544. Make The String Great
// https://leetcode.com/problems/make-the-string-great/

/*

Given a string s of lower and upper case English letters.

A good string is a string which doesn't have **two adjacent characters** s[i]
and s[i + 1] where:

- 0 <= i <= s.length - 2
- s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case
  or **vice-versa**.

To make the string good, you can choose **two adjacent** characters that make
the string bad and remove them. You can keep doing this until the string becomes
good.

Return the string after making it good. The answer is guaranteed to be unique
under the given constraints.

Notice that an empty string is also good.

## Constraints:
- 1 <= s.length <= 100
- s contains only lower and upper case English letters.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 132 ms, faster than 21.50% of JavaScript online submissions
// Memory Usage: 41.6 MB, less than 12.46% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {string}
//  */
// const makeGood = s => {
//   const opCase = Object.fromEntries(
//     new Array(26).fill().reduce(
//       (acc, _, idx) =>
//         acc.concat([
//           [String.fromCharCode(idx + 65), String.fromCharCode(idx + 97)],
//           [String.fromCharCode(idx + 97), String.fromCharCode(idx + 65)],
//         ]),
//       [],
//     ),
//   );
//   // console.log(opCase);
//   const arr = [...s];
//   // console.log(arr);
//   let [slow, fast] = [0, 1];
//   while (slow < arr.length - 1 && fast < arr.length) {
//     // console.log(`[${arr.join('][')}]`);
//     // console.log(`[${slow},${fast}]`);
//     // console.log(`[${arr[slow]},${arr[fast]}]`);
//     if (arr[slow] === opCase[arr[fast]]) {
//       arr[slow] = ' ';
//       arr[fast] = ' ';
//       while (fast < arr.length && ' ' === arr[fast]) fast++;
//       while (0 < slow && ' ' === arr[slow]) slow--;
//     } else {
//       fast++;
//       slow = fast - 1;
//     }
//   }
//   // console.log(arr);
//   // console.log(arr.filter(c => ' ' !== c).join(''));
//   return arr.filter(c => ' ' !== c).join('');
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 92 ms, faster than 58.57% of JavaScript online submissions
// Memory Usage: 38.8 MB, less than 59.19% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {string}
//  */
// const makeGood = s => {
//   const revCase = {
//     A: 'a',
//     a: 'A',
//     B: 'b',
//     b: 'B',
//     C: 'c',
//     c: 'C',
//     D: 'd',
//     d: 'D',
//     E: 'e',
//     e: 'E',
//     F: 'f',
//     f: 'F',
//     G: 'g',
//     g: 'G',
//     H: 'h',
//     h: 'H',
//     I: 'i',
//     i: 'I',
//     J: 'j',
//     j: 'J',
//     K: 'k',
//     k: 'K',
//     L: 'l',
//     l: 'L',
//     M: 'm',
//     m: 'M',
//     N: 'n',
//     n: 'N',
//     O: 'o',
//     o: 'O',
//     P: 'p',
//     p: 'P',
//     Q: 'q',
//     q: 'Q',
//     R: 'r',
//     r: 'R',
//     S: 's',
//     s: 'S',
//     T: 't',
//     t: 'T',
//     U: 'u',
//     u: 'U',
//     V: 'v',
//     v: 'V',
//     W: 'w',
//     w: 'W',
//     X: 'x',
//     x: 'X',
//     Y: 'y',
//     y: 'Y',
//     Z: 'z',
//     z: 'Z',
//   };
//   const arr = [...s];
//   let [slow, fast] = [0, 1];
//   while (slow < arr.length - 1 && fast < arr.length) {
//     if (arr[slow] === revCase[arr[fast]]) {
//       [arr[slow], arr[fast]] = ['', ''];
//       fast++;
//       while (0 < slow && !arr[slow].length) slow--;
//     } else {
//       fast++;
//       slow = fast - 1;
//     }
//   }
//   return arr.join('');
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 88 ms, faster than 74.77% of JavaScript online submissions
// Memory Usage: 42.3 MB, less than 11.22% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {string}
//  */
// const makeGood = s =>
//   [...s]
//     .reduce((acc, curr) => {
//       if (
//         acc[acc.length - 1] ===
//         {
//           A: 'a',
//           a: 'A',
//           B: 'b',
//           b: 'B',
//           C: 'c',
//           c: 'C',
//           D: 'd',
//           d: 'D',
//           E: 'e',
//           e: 'E',
//           F: 'f',
//           f: 'F',
//           G: 'g',
//           g: 'G',
//           H: 'h',
//           h: 'H',
//           I: 'i',
//           i: 'I',
//           J: 'j',
//           j: 'J',
//           K: 'k',
//           k: 'K',
//           L: 'l',
//           l: 'L',
//           M: 'm',
//           m: 'M',
//           N: 'n',
//           n: 'N',
//           O: 'o',
//           o: 'O',
//           P: 'p',
//           p: 'P',
//           Q: 'q',
//           q: 'Q',
//           R: 'r',
//           r: 'R',
//           S: 's',
//           s: 'S',
//           T: 't',
//           t: 'T',
//           U: 'u',
//           u: 'U',
//           V: 'v',
//           v: 'V',
//           W: 'w',
//           w: 'W',
//           X: 'x',
//           x: 'X',
//           Y: 'y',
//           y: 'Y',
//           Z: 'z',
//           z: 'Z',
//         }[curr]
//       )
//         acc.pop();
//       else acc.push(curr);
//       return acc;
//     }, [])
//     .join('');

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 104 ms, faster than 33.96% of JavaScript online submissions
// Memory Usage: 37.6 MB, less than 99.38% of JavaScript online submissions

const flipCase = {
  A: 'a',
  a: 'A',
  B: 'b',
  b: 'B',
  C: 'c',
  c: 'C',
  D: 'd',
  d: 'D',
  E: 'e',
  e: 'E',
  F: 'f',
  f: 'F',
  G: 'g',
  g: 'G',
  H: 'h',
  h: 'H',
  I: 'i',
  i: 'I',
  J: 'j',
  j: 'J',
  K: 'k',
  k: 'K',
  L: 'l',
  l: 'L',
  M: 'm',
  m: 'M',
  N: 'n',
  n: 'N',
  O: 'o',
  o: 'O',
  P: 'p',
  p: 'P',
  Q: 'q',
  q: 'Q',
  R: 'r',
  r: 'R',
  S: 's',
  s: 'S',
  T: 't',
  t: 'T',
  U: 'u',
  u: 'U',
  V: 'v',
  v: 'V',
  W: 'w',
  w: 'W',
  X: 'x',
  x: 'X',
  Y: 'y',
  y: 'Y',
  Z: 'z',
  z: 'Z',
};

/**
 * @param {string} s
 * @return {string}
 */
const makeGood = s =>
  [...s]
    .reduce((acc, curr) => {
      if (acc[acc.length - 1] === flipCase[curr]) acc.pop();
      else acc.push(curr);
      return acc;
    }, [])
    .join('');

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { deepStrictEqual } from 'assert';

// Example 1:
deepStrictEqual(makeGood('leEeetcode'), 'leetcode');
// // Explanation: In the first step, either you choose i = 1 or i = 2, both will
// result "leEeetcode" to be reduced to "leetcode".

//-  Example 2:
deepStrictEqual(makeGood('abBAcC'), '');
// Explanation: We have many possible scenarios, and all lead to the same
// answer.
// ## For example
// - "abBAcC" --> "aAcC" --> "cC" --> ""
// - "abBAcC" --> "abBA" --> "aA" --> ""

// Example 3:
deepStrictEqual(makeGood('s'), 's');

deepStrictEqual(makeGood('MHTLuuHhUUlthmQwUWq'), 'QwUWq');

deepStrictEqual(makeGood('QwUWqMHTLuuHhUUlthm'), 'QwUWq');

deepStrictEqual(makeGood('aAccBb'), 'cc');

deepStrictEqual(makeGood('aAcdDcBb'), 'cc');

deepStrictEqual(makeGood('NAanorRoOrROwnTNW'), 'wnTNW');

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

/*

97	61	a
98	62	b
99	63	c

65	41	A
66	42	B
67	43	C

97 - 65 = 32
65 - 97 = -32

*/
