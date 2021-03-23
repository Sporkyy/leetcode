/*

You are given two strings s1 and s2 of equal length. A string swap is an
operation where you choose two indices in a string (not necessarily different)
and swap the characters at these indices.

Return true if it is possible to make both strings equal by performing at most
one string swap on exactly one of the strings. Otherwise, return false.

## Constraints
- 1 <= s1.length, s2.length <= 100
- s1.length == s2.length
- s1 and s2 consist of only lowercase English letters.

 */

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 92 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 41 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
// const areAlmostEqual = (s1, s2) => {
//   let [i, j] = [0, 0];
//   const [x, y] = [new Array(26).fill(0), new Array(26).fill(0)];
//   while (i < s1.length && i < s2.length) {
//     if (s1[i] !== s2[i]) {
//       j++;
//     }
//     x[s1.charCodeAt(i) - 97]++;
//     y[s2.charCodeAt(i) - 97]++;
//     i++;
//     if (2 < j) return false;
//   }
//   // console.log(j);
//   // console.log(x.join(''), y.join(''));
//   return x.join('') === y.join('');
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 92 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 41 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
// const areAlmostEqual = (s1, s2) => {
//   let [i, j] = [0, 0];
//   const [x, y] = [new Array(26).fill(0), new Array(26).fill(0)];
//   while (i < s1.length && i < s2.length) {
//     if (s1[i] !== s2[i]) {
//       j++;
//     }
//     x[s1.charCodeAt(i) - 97]++;
//     y[s2.charCodeAt(i) - 97]++;
//     i++;
//     if (2 < j) return false;
//   }
//   // console.log(j);
//   // console.log(x.join(''), y.join(''));
//   return x.join('') === y.join('');
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 80 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 39.6 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
// const areAlmostEqual = (s1, s2) => {
//   const [x, y] = [new Array(26).fill(0), new Array(26).fill(0)];
//   for (let i = 0, j = 0; i < s1.length && i < s2.length; i++) {
//     if (s1[i] !== s2[i]) j++;
//     if (2 < j) return false;
//     x[s1.charCodeAt(i) - 97]++;
//     y[s2.charCodeAt(i) - 97]++;
//   }
//   return x.join('') === y.join('');
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 84 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 39.7 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
// const areAlmostEqual = (s1, s2) => {
//   const cnt = new Array(26).fill(0);
//   let sum = 0;
//   for (let i = 0, cntDiff = 0; i < s1.length; i++) {
//     if (s1[i] !== s2[i]) cntDiff++;
//     if (2 < cntDiff) return false;
//     const [c1, c2] = [s1.charCodeAt(i) - 97, s2.charCodeAt(i) - 97];
//     cnt[c1]++;
//     cnt[c2]--;
//     sum += c1 - c2;
//   }
//   if (sum) return false;
//   return cnt.every(c => !c);
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
// const areAlmostEqual = (s1, s2) => {
//   const cnt = new Array(26).fill(0);
//   let sum = 0;
//   for (let i = 0, cntDiff = 0; i < s1.length; i++) {
//     if (s1[i] !== s2[i]) cntDiff++;
//     if (2 < cntDiff) return false;
//     const [c1, c2] = [s1.charCodeAt(i) - 97, s2.charCodeAt(i) - 97];
//     cnt[c1]++;
//     cnt[c2]--;
//     sum += c1 - c2;
//   }
//   return !sum || cnt.every(c => !c);
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 96 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 39.4 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
// const areAlmostEqual = (s1, s2) => {
//   const cnt = new Array(26).fill(0);
//   const cnt2 = new Array(s1.length).fill(0);
//   for (let i = 0, cntDiff = 0; i < s1.length; i++) {
//     cnt[s1.charCodeAt(i) - 97]++;
//     cnt[s2.charCodeAt(i) - 97]--;
//     cnt2[i] += s1.charCodeAt(i);
//     cnt2[i] -= s2.charCodeAt(i);
//   }
//   return cnt2.reduce((acc, curr) => acc + !!curr, 0) < 3 && cnt.every(c => !c);
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 38.5 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
// const areAlmostEqual = (s1, s2) => {
//   const cntChars = new Array(26).fill(0);
//   for (let i = 0, cntDiff = 0; i < s1.length; i++) {
//     if (s1[i] !== s2[i]) {
//       cntChars[s1.charCodeAt(i) - 97]++;
//       cntChars[s2.charCodeAt(i) - 97]--;
//       cntDiff++;
//     }
//     if (2 < cntDiff) return false;
//   }
//   return cntChars.every(c => !c);
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 80 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 39 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
// const areAlmostEqual = (s1, s2) => {
//   const [a1, a2] = [[], []];
//   for (let i = 0; i < s1.length; i++) {
//     if (s1[i] !== s2[i]) {
//       a1.push(s1[i]);
//       a2.push(s2[i]);
//     }
//     if (2 < a1.length) return false;
//   }
//   return a1[0] === a2[1] && a1[1] === a2[0];
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 41.5 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
// const areAlmostEqual = (s1, s2) =>
//   (([a, b, ...c], [x, y, ...z]) =>
//     (!a && !x) || (!c.length && !z.length && a === y && b === x))(
//     ...[...s1].reduce(
//       (acc, curr, idx) =>
//         curr === s2[idx]
//           ? acc
//           : [
//               [...acc[0], curr],
//               [...acc[1], s2[idx]],
//             ],
//       [[], []],
//     ),
//   );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 80 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 38.6 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const areAlmostEqual = (s1, s2) => {
  const [a1, a2] = [[], []];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (2 === a1.length) return false;
      a1.push(s1[i]);
      a2.push(s2[i]);
    }
  }
  return a1[0] === a2[1] && a1[1] === a2[0];
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { ok } from 'assert';

// Example 1:
ok(areAlmostEqual('bank', 'kanb'));
// Explanation: For example, swap the first character with the last character of
// s2 to make "bank".

// Example 2:
ok(!areAlmostEqual('attack', 'defend'));
// Explanation: It is impossible to make them equal with one string swap.

// Example 3:
ok(areAlmostEqual('kelb', 'kelb'));
// Explanation: The two strings are already equal, so no string swap operation
// is required.

// Example 4:
ok(!areAlmostEqual('abcd', 'dcba'));

ok(!areAlmostEqual('aa', 'ac'));

ok(!areAlmostEqual('caa', 'aaz'));

ok(!areAlmostEqual('bf', 'dd'));
