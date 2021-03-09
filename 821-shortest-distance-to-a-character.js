// 821. Shortest Distance to a Character
// https://leetcode.com/problems/shortest-distance-to-a-character/

/*

Given a string s and a character c that occurs in s, return an array of integers
answer where answer.length == s.length and answer[i] is the distance from index
i to the closest occurrence of character c in s.

The distance between two indices i and j is abs(i - j), where abs is the
absolute value function.

## Constraints

- 1 <= s.length <= 104
- s[i] and c are lowercase English letters.
- It is guaranteed that c occurs at least once in s.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 72 ms, faster than 45.77% of JavaScript online submissions
// Memory Usage: 36.2 MB, less than 25.00% of JavaScript online submissions

// /**
//  * @param {string} S
//  * @param {character} C
//  * @return {number[]}
//  */
// const shortestToChar = (S, C) => {
//   const result = new Array(S.length).fill(Infinity);
//   for (let i = 0; i < S.length; i++) {
//     if (S[i] === C) {
//       result[i] = 0;
//       for (let j = 1; 0 <= i - j && C !== S[i - j] && j < result[i - j]; j++)
//         result[i - j] = j;
//       for (
//         let j = 1;
//         i + j < S.length && C !== S[i + j] && j < result[i + j];
//         j++
//       )
//         result[i + j] = j;
//     }
//   }
//   return result;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 48 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 35.1 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} S
//  * @param {character} C
//  * @return {number[]}
//  */
// const shortestToChar = (S, C) => {
//   const result = new Array(S.length);

//   // forwardCounter starts high to ensure overwrites
//   for (let i = 0, forwardCounter = Infinity; i < result.length; i++) {
//     // If the sought character is found
//     if (S[i] === C) {
//       // Fill current
//       result[i] = 0;
//       // Fill backwards; overwrite where needed
//       for (let j = 1; j <= i; j++) {
//         // But don't overwrite closer results
//         if (result[i - j] < j) break;
//         result[i - j] = j;
//       }
//       // Reset forwardCounter
//       forwardCounter = 1;
//     } else {
//       // Otherwise result is just current
//       result[i] = forwardCounter++;
//     }
//   }

//   return result;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 80 ms, faster than 97.55% of JavaScript online submissions
// Memory Usage: 40.6 MB, less than 67.01% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @param {character} c
//  * @return {number[]}
//  */
// const shortestToChar = (s, c) => {
//   const res = new Array(s.length).fill(Infinity);
//   for (
//     let li = 0, ld = Infinity, ri = s.length - 1, rd = Infinity;
//     li < s.length;
//     li++, ri--, ld++, rd++
//   ) {
//     if (s[li] === c) ld = 0;
//     if (s[ri] === c) rd = 0;
//     res[li] = Math.min(res[li], ld);
//     res[ri] = Math.min(res[ri], rd);
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 92 ms, faster than 51.38% of JavaScript online submissions
// Memory Usage: 40.8 MB, less than 58.84% of JavaScript online submissions

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
const shortestToChar = (s, c) => {
  // Create an array to hold the distances the same length as the string
  // And fill it with `Infinity` because `Math.min` gets used below
  // But filling with `s.length` or `104` (from Constraints) would also work.
  const res = new Array(s.length).fill(Infinity);
  for (
    // Create some variables to use while looping through the string
    // - `li` Left Index: Traverse the string from left to right
    // - `ld` Left Distance: Reset to `0` every time `c` is seen in the string
    // - `ri` Right Index: Traverse the string from right to left
    // - `rd` Right Distance: Reset to `0` every time `c` is seen in the string
    let li = 0, ld = Infinity, ri = s.length - 1, rd = Infinity;
    // Stop the loop before the Left Index goes off the right end of the string
    // This also stops the loop before the Right Index goes off the left end
    li < s.length;
    // After every iteration:
    // - The left index moves `1` place to the left
    // - The left distance increases by `1`
    // - The right index moves `1` place to the right
    // - The right distance increases by `1`
    li++, ld++, ri--, rd++
  ) {
    // If the character at the left index is the character we're looking for,
    // reset the left distance to `0`
    if (s[li] === c) ld = 0;
    // As we move left, set the `res` array value to the lesser distance:
    // - `res[li]` The default value, `Infinity` or, passed the halfway point,
    //   the previously set Right Distance to the sought character
    // - `ld` Distance to the sought character looking left
    res[li] = Math.min(res[li], ld);
    // If the character at the right index is the character we're looking for,
    // reset the right distance to `0`
    if (s[ri] === c) rd = 0;
    // As we move right, set the `res` array value to the lesser distance:
    // - `res[ri]` The default value, `Infinity` or, passed the halfway point,
    //   the previously set Left Distance to the sought character
    // - `rd` Distance to the sought character looking right
    res[ri] = Math.min(res[ri], rd);
  }
  return res;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { deepStrictEqual } from 'assert';

deepStrictEqual(shortestToChar('a', 'a'), [0]);

deepStrictEqual(shortestToChar('ab', 'a'), [0, 1]);

deepStrictEqual(shortestToChar('ba', 'a'), [1, 0]);

deepStrictEqual(shortestToChar('aba', 'a'), [0, 1, 0]);

deepStrictEqual(shortestToChar('aba', 'b'), [1, 0, 1]);

/*

|  0 |  1 |  2 |
|  a |  b |  a |
| ♾ | ♾ | ♾ |

*/

deepStrictEqual(shortestToChar('aab', 'b'), [2, 1, 0]);

/*

|  0 |  1 |  2 |
|  a |  a |  b |
| ♾ | ♾ | ♾ |
|  2 |  1 |  0 |

*/

deepStrictEqual(shortestToChar('loveleetcode', 'e'), [
  3,
  2,
  1,
  0,
  1,
  0,
  0,
  1,
  2,
  2,
  1,
  0,
]);
