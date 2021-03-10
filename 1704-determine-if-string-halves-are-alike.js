// 1704. Determine if String Halves Are Alike
// https://leetcode.com/problems/determine-if-string-halves-are-alike/

/*

You are given a string s of even length. Split this string into two halves of
equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i',
'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and
lowercase letters.

Return true if a and b are alike. Otherwise, return false.

## Constraints
- 2 <= s.length <= 1000
- s.length is even.
- s consists of uppercase and lowercase letters.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 80 ms, faster than 85.82% of JavaScript online submissions
// Memory Usage: 41.2 MB, less than 10.31% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// const halvesAreAlike = s => {
//   return (
//     '[0,0]' ===
//     JSON.stringify(
//       [...s].reduce(
//         (acc, curr, idx) => {
//           if (/[aeiou]/i.test(curr)) {
//             acc[0] += idx < s.length / 2 ? 1 : -1;
//           } else {
//             acc[1] += idx < s.length / 2 ? 1 : -1;
//           }
//           return acc;
//         },
//         [0, 0],
//       ),
//     )
//   );
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 80 ms, faster than 85.93% of JavaScript online submissions
// Memory Usage: 44.4 MB, less than 5.32% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// const halvesAreAlike = s =>
//   ![...s].reduce(
//     (acc, curr, idx) =>
//       acc +
//       [
//         [1, 2],
//         [-1, -2],
//       ][+(idx < s.length / 2)][+/[aeiou]/i.test(curr)],
//     0,
//   );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 88 ms, faster than 45.02% of JavaScript online submissions
// Memory Usage: 41.5 MB, less than 9.08% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// const halvesAreAlike = s => {
//   s = s.replace(/[aeiou]/gi, '1').replace(/[^1aeiou]/gi, '0');
//   let [l, r] = [0, 0];
//   for (let i = 0; i < s.length / 2; i++)
//     [l, r] = [l + +s[i], r + +s[s.length - 1 - i]];
//   return l === r;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 84 ms, faster than 69.12% of JavaScript online submissions
// Memory Usage: 43.4 MB, less than 5.21% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// const halvesAreAlike = s => {
//   s = s.replace(/[aeiou]/gi, '1').replace(/[^1aeiou]/gi, '0');
//   let sum = 0;
//   for (let i = 0; i < s.length / 2; i++)
//     sum += [
//       [0, 1],
//       [-1, 0],
//     ][+s[i]][+s[s.length - 1 - i]];
//   return !sum;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 80 ms, faster than 86.65% of JavaScript online submissions
// Memory Usage: 39.1 MB, less than 85.23% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// const halvesAreAlike = s => {
//   let sum = 0;
//   const vowels = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);
//   for (let i = 0; i < s.length / 2; i++)
//     sum += vowels.has(s[i]) - vowels.has(s[s.length - 1 - i]);
//   return !sum;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 96 ms, faster than 25.36% of JavaScript online submissions
// Memory Usage: 45.2 MB, less than 5.21% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// const halvesAreAlike = (s, sum = 0, vowels = new Set([...'AEIOUaeiou'])) =>
//   !s.length
//     ? !sum
//     : halvesAreAlike(
//         s.slice(1, s.length - 1),
//         sum + vowels.has(s[0]) - vowels.has(s[s.length - 1]),
//       );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 84 ms, faster than 69.12% of JavaScript online submissions
// Memory Usage: 39.7 MB, less than 47.79% of JavaScript online submissions

/**
 * @param {string} s
 * @return {boolean}
 */
const halvesAreAlike = (
  s,
  vowels = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']),
) =>
  ![...s].reduce(
    (acc, curr, idx) =>
      acc + +(vowels.has(curr) ? (idx < s.length / 2 ? 1 : -1) : 0),
    0,
  );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { ok } from 'assert';

// Example 1:
ok(halvesAreAlike('book'));
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel.
// Therefore, they are alike.

// Example 2:
ok(!halvesAreAlike('textbook'));
// Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2.
// Therefore, they are not alike.
// Notice that the vowel o is counted twice.

// Example 3:
ok(!halvesAreAlike('MerryChristmas'));

// Example 4:
ok(halvesAreAlike('AbCdEfGh'));
//  A b C d | E f G h

ok(halvesAreAlike('Uo'));

ok(halvesAreAlike('Ieai'));

ok(!halvesAreAlike('tkPAdxpMfJiltOerItiv'));

/*

| t | k | P |(A)| d | x | p | M | f | J |
|(i)| l | t |(O)|(e)| r |(I)| t |(i)| v |

*/
