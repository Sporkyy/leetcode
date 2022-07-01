/*

A string s is called good if there are no two different characters in s that
have the same frequency.

Given a string s, return the minimum number of characters you need to delete to
make s good.

The frequency of a character in a string is the number of times it appears in
the string. For example, in the string "aab", the frequency of 'a' is 2, while
the frequency of 'b' is 1.

## Constraints
- 1 <= s.length <= 105
- s contains only lowercase English letters.

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const minDeletions = s => {
//   const freq = new Map();
//   for (const c of s) freq.set(c, (freq.get(c) || 0) + 1);

//   // console.log(freq);
//   // console.log(freq.size === new Set(freq.values()));
//   // console.log([...freq.values()].sort((a, b) => a - b));

//   const sorted = [...freq.values()].sort((a, b) => a - b); // ?
//   const used = new Set();

//   let deletions = 0;
//   for (let [min, i] = [Infinity, 0]; i < sorted.length; i++) {
//     // console.log({ i, x: sorted[i], min, deletions });
//     min = Math.min(min, sorted[i]);
//     if (sorted[i] === sorted[i + 1]) {
//       // console.log('deletion');
//       if (min < 2) {
//         deletions += sorted[i];
//       } else {
//         deletions += sorted[i] - min + 1;
//         min = sorted[i] - min - 1;
//       }
//     }
//   }

//   console.log(deletions);
//   return deletions;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 186 ms, faster than 67.33% of JavaScript online submissions
// Memory Usage: 49.3 MB, less than 30.65% of JavaScript online submissions

/**
 * @param {string} s
 * @return {number}
 */
const minDeletions = s => {
  const freq = new Map();
  for (const c of s) freq.set(c, (freq.get(c) || 0) + 1);

  // console.log(freq);
  // console.log(freq.size === new Set(freq.values()));
  // console.log([...freq.values()].sort((a, b) => a - b));

  const sorted = [...freq.values()].sort((a, b) => a - b); // ?
  const used = new Set();

  let deletions = 0;
  for (const x of sorted) {
    if (!used.has(x)) {
      used.add(x);
    } else {
      let tmp = x; // ?
      while (0 < tmp && used.has(tmp)) tmp--;
      console.log(tmp);
      deletions += x - tmp;
      used.add(tmp);
    }
  }

  // console.log(deletions);
  return deletions;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

// Example 1:
// Input: s = "aab"
// Output: 0
// Explanation: s is already good.

strictEqual(minDeletions('aab'), 0);

// Example 2:
// Input: s = "aaabbbcc"
// Output: 2
// Explanation: You can delete two 'b's resulting in the good string "aaabcc".
// Another way it to delete one 'b' and one 'c' resulting in the good string "aaabbc".

strictEqual(minDeletions('aaabbbcc'), 2);

// Example 3:
// Input: s = "ceabaacb"
// Output: 2
// Explanation: You can delete both 'c's resulting in the good string "eabaab".
// Note that we only care about characters that are still in the string at the end (i.e. frequency of 0 is ignored).

// strictEqual(minDeletions('ceabaacb'), 2);

// a: 1, b: 3, c: 3
// a: 1, b: 2, c: 3
strictEqual(minDeletions('abbbccc'), 1);
