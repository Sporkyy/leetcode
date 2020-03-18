// 1370. Increasing Decreasing String
// https://leetcode.com/problems/increasing-decreasing-string/

/*

Given a string s. You should re-order the string using the following algorithm:

1. Pick the smallest character from s and append it to the result.
2. Pick the smallest character from s which is greater than the last appended
   character to the result and append it.
3. Repeat step 2 until you cannot pick more characters.
4. Pick the largest character from s and append it to the result.
5. Pick the largest character from s which is smaller than the last appended
   character to the result and append it.
6. Repeat step 5 until you cannot pick more characters.
7. Repeat the steps from 1 to 6 until you pick all characters from s.

In each step, If the smallest or the largest character appears more than once
you can choose any occurrence and append it to the result.

Return the result string after sorting s with this algorithm.

Constraints:
- 1 <= s.length <= 500
- s contains only lower-case English letters.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string} s
//  * @return {string}
//  */
// const sortString = s => {
//   let a = [...s];
//   a.sort((a, b) => a.localeCompare(b));
//   console.log(a);
//   let res = '';
//   // while (a.length) {
//   const set = new Set(a);
//   for (const c of set) {
//     console.log(c);
//     res += c;

//   }
//   console.log(res);
//   // }
//   // if (!s.length) return r;
//   // const set = new Set([...s]);
//   // console.log(set);
//   // return sortString(s.)
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 92.70% of JavaScript online submissions
// Memory Usage: 37.5 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {string}
//  */
// const sortString = s => {
//   const cnts = new Array(26).fill(0);
//   for (let i = 0; i < s.length; i++) cnts[s.charCodeAt(i) - 97]++;
//   // console.log(cnts);
//   const res = new Array(Math.max(...cnts)).fill('');
//   // console.log(res);
//   for (let i = 0; i < 26; i++) {
//     // console.log(cnts[i]);
//     for (let j = 0; j < cnts[i]; j++) {
//       // console.log(j);
//       if (0 === j % 2) res[j] += String.fromCharCode(i + 97);
//       else res[j] = String.fromCharCode(i + 97) + res[j];
//     }
//   }
//   // console.log(res);
//   return res.join('');
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 92.70% of JavaScript online submissions
// Memory Usage: 37.4 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} s
 * @return {string}
 */
const sortString = s => {
  const cnts = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) cnts[s.charCodeAt(i) - 97]++;
  const res = new Array(Math.max(...cnts)).fill('');
  for (let i = 0; i < 26; i++)
    for (let j = 0; j < cnts[i]; j++)
      if (0 === j % 2) res[j] += String.fromCharCode(i + 97);
      else res[j] = String.fromCharCode(i + 97) + res[j];
  return res.join('');
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(sortString('aaaabbbbcccc'), 'abccbaabccba');
// Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
// After steps 4, 5 and 6 of the first iteration, result = "abccba"
// First iteration is done. Now s = "aabbcc" and we go back to step 1
// After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
// After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"

// Example 2:
// strictEqual(sortString('rat'), 'art');
// Explanation: The word "rat" becomes "art" after re-ordering it with the
// mentioned algorithm.

// Example 3:
strictEqual(sortString('leetcode'), 'cdelotee');

// Example 4:
strictEqual(sortString('ggggggg'), 'ggggggg');

// Example 5:
strictEqual(sortString('spo'), 'ops');
