// 1576. Replace All ?'s to Avoid Consecutive Repeating Characters
// https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/

/*

Given a string s containing only lower case English letters and the '?'
character, convert all the '?' characters into lower case letters such that the
final string does not contain any consecutive repeating characters. You cannot
modify the non '?' characters.

It is guaranteed that there are no consecutive repeating characters in the given
string except for '?'.

Return the final string after all the conversions (possibly zero) have been
made. If there is more than one solution, return any of them. It can be shown
that an answer is always possible with the given constraints.

Constraints:
- 1 <= s.length <= 100
- s contains only lower case English letters and '?'.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 72 ms, faster than 88.81% of JavaScript online submissions
// Memory Usage: 36.9 MB, less than 24.48% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {string}
//  */
// const modifyString = s => {
//   const a = [...s];
//   for (let i = 0; i < a.length; i++) {
//     // console.log(a[i]);
//     if ('?' === a[i]) {
//       // console.log(a);
//       const [l, r] = [
//         (a[i - 1] || '').charCodeAt(0),
//         (a[i + 1] || '').charCodeAt(0),
//       ];
//       // console.log(l, r);
//       let m = 97;
//       while (m === l || m === r) m++;
//       a[i] = String.fromCharCode(m);
//     }
//   }
//   return a.join('');
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 72 ms, faster than 88.81% of JavaScript online submissions
// Memory Usage: 36.9 MB, less than 24.48% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {string}
//  */
// const modifyString = s => {
//   const a = [...s];
//   for (let i = 0; i < a.length; i++) {
//     if ('?' === a[i]) {
//       const [l, r] = [
//         (a[i - 1] || '').charCodeAt(0),
//         (a[i + 1] || '').charCodeAt(0),
//       ];
//       let m = 97;
//       while (m === l || m === r) m++;
//       a[i] = String.fromCharCode(m);
//     }
//   }
//   return a.join('');
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 72 ms, faster than 88.81% of JavaScript online submissions
// Memory Usage: 36.7 MB, less than 51.05% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {string}
//  */
// const modifyString = s => {
//   // Spread string into an array to ease replacing each `?`
//   const a = [...s];
//   // Loop through each array item with `i`
//   // Loop through each character code up from `a` (97) with `j`
//   for (let i = 0, j = 97; i < a.length; i++, j = 97) {
//     // Only the `?` characters are affected; skip all others
//     if ('?' !== a[i]) continue;
//     // Get and store the codes for the left and right characters
//     const [left, right] = [
//       (a[i - 1] || '\0').charCodeAt(0), // When at the beginning or the end
//       (a[i + 1] || '\0').charCodeAt(0), // of the array, store code `0`
//     ];
//     // Increment the code for `a` (97) until it is unique amongst neighbors
//     while (j === left || j === right) j++;
//     // Store the new unique character back in the array
//     a[i] = String.fromCharCode(j);
//   }
//   // Turn the array back into a string
//   return a.join('');
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 75.76% of JavaScript online submissions
// Memory Usage: 36.6 MB, less than 73.94% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {string}
//  */
// const modifyString = s => {
//   const a = [...s];
//   for (let i = 0, char = 'a'; i < a.length; i++, char = 'a') {
//     if ('?' !== a[i]) continue;
//     // console.log(a.join(''));
//     const neighbors = `${a[i - 1] || ''}${a[i + 1] || ''}`;
//     // console.log(neighbors);
//     if (neighbors.includes('a') && !neighbors.includes('b')) char = 'b';
//     else if (neighbors.includes('b') && !neighbors.includes('c')) char = 'c';
//     a[i] = char;
//   }
//   // console.log(a.join(''));
//   return a.join('');
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 68 ms, faster than 95.15% of JavaScript online submissions
// Memory Usage: 36.9 MB, less than 24.24% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {string}
//  */
// const modifyString = s => {
//   const a = [...s];
//   for (let i = 0; i < a.length; i++) {
//     if ('?' !== a[i]) continue;
//     const neighbors = `${a[i - 1] || ''}${a[i + 1] || ''}`;
//     a[i] =
//       neighbors.includes('a') && !neighbors.includes('b')
//         ? 'b'
//         : neighbors.includes('b') && !neighbors.includes('c')
//         ? 'c'
//         : 'a';
//   }
//   return a.join('');
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 64 ms, faster than 99.39% of JavaScript online submissions
// Memory Usage: 35.8 MB, less than 99.39% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {string}
//  */
// const modifyString = s =>
//   !s.includes('?')
//     ? s
//     : modifyString(
//         s.replace('?', (_, i) =>
//           (neighbors =>
//             neighbors.includes('a') && !neighbors.includes('b')
//               ? 'b'
//               : neighbors.includes('b') && !neighbors.includes('c')
//               ? 'c'
//               : 'a')(`${s[i - 1] || ''}${s[i + 1] || ''}`),
//         ),
//       );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 68 ms, faster than 95.15% of JavaScript online submissions
// Memory Usage: 36.8 MB, less than 51.51% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {string}
//  */
// const modifyString = s =>
//   !s.includes('?')
//     ? s
//     : modifyString(
//         s.replace(/(.?)\?(.?)/, (_, left, right) =>
//           'a' !== left && 'a' !== right
//             ? `${left}a${right}`
//             : 'b' !== left && 'b' !== right
//             ? `${left}b${right}`
//             : `${left}c${right}`,
//         ),
//       );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 75.76% of JavaScript online submissions
// Memory Usage: 36.8 MB, less than 40.00% of JavaScript online submissions

/**
 * @param {string} s
 * @return {string}
 */
const modifyString = s =>
  !s.includes('?')
    ? s
    : modifyString(
        s.replace(
          /(.?)\?(.?)/,
          (_, left, right) =>
            `${left}${
              'a' !== left && 'a' !== right
                ? 'a'
                : 'b' !== left && 'b' !== right
                ? 'b'
                : 'c'
            }${right}`,
        ),
      );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 68 ms, faster than 95.15% of JavaScript online submissions
// Memory Usage: 37.2 MB, less than 9.69% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {string}
//  */
// const modifyString = s =>
//   !s.includes('?')
//     ? s
//     : modifyString(
//         s.replace('?', (_, idx) =>
//           ((left, right) =>
//             'a' !== left && 'a' !== right
//               ? 'a'
//               : 'b' !== left && 'b' !== right
//               ? 'b'
//               : 'c')(s[idx - 1], s[idx + 1]),
//         ),
//       );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 75.76% of JavaScript online submissions
// Memory Usage: 36.8 MB, less than 47.27% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {string}
//  */
// const modifyString = s => {
//   const a = [...s];
//   for (let i = 0; i < a.length; i++) {
//     if ('?' !== a[i]) continue;
//     const [left, right] = [a[i - 1], a[i + 1]];
//     a[i] =
//       'a' !== left && 'a' !== right
//         ? 'a'
//         : 'b' !== left && 'b' !== right
//         ? 'b'
//         : 'c';
//   }
//   return a.join('');
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { ok } from 'assert';

const test = s => {
  const res = modifyString(s);
  console.log(`${s}\n${res}`);
  return !/(.)\1/.test(res) && s.length === res.length;
};

// Example 1:
ok(test('?zs'));
// Explanation: There are 25 solutions for this problem. From "azs" to "yzs",
// all are valid. Only "z" is an invalid modification as the string will consist
// of consecutive repeating characters in "zzs".

// Example 2:
ok(test('ubv?w'));
// Explanation: There are 24 solutions for this problem. Only "v" and "w" are
// invalid modifications as the strings will consist of consecutive repeating
// characters in "ubvvw" and "ubvww".

// Example 3:
ok(test('j?qg??b'));

// Example 4:
ok(test('??yw?ipkj?'));

ok(test('o?m'));

ok(test('?qe?'));

ok(test('???'));

ok(test('???cid???c?q?a?d?d'));

ok(test('??????bfi????p?k?'));

ok(test('a?a'));
ok(test('b?b'));
ok(test('c?c'));
ok(test('a?b'));
ok(test('b?a'));
ok(test('a?c'));
ok(test('c?a'));
ok(test('b?a'));

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

/*

a?a = aba
a?b = acb
b?a = bca
.?. = .a.

*/
