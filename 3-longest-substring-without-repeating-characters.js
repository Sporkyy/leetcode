// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * Runtime: 96 ms, faster than 87.05% of JavaScript online submissions
//  * Memory Usage: 45.1 MB, less than 17.31% of JavaScript online submissions
//  *
//  * @param {string} s
//  * @return {number}
//  */
// const lengthOfLongestSubstring = s => {
//   if (s.length < 2) return s.length;
//   let current = s[0];
//   const possibilities = [];
//   for (let i = 1; i < s.length; i++) {
//     if (current.includes(s[i])) {
//       possibilities.push(current);
//       current = current.split(s[i])[1] + s[i];
//       continue;
//     }
//     current += s[i];
//   }
//   possibilities.push(current);
//   // console.log(possibilities);
//   return Math.max(...possibilities.map(p => p.length));
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * Runtime: 80 ms, faster than 100.00% of JavaScript online submissions
//  * Memory Usage: 39.8 MB, less than 70.51% of JavaScript online submissions
//  *
//  * @param {string} s
//  * @return {number}
//  */
// const lengthOfLongestSubstring = s => {
//   if (0 === s.length) return 0;
//   if (1 === s.length) return 1;
//   let candidate = s[0];
//   let longest = 0;
//   for (let i = 1; i < s.length; i++) {
//     const char = s[i];
//     const index = candidate.indexOf(char);
//     if (-1 < index) {
//       const length = candidate.length;
//       if (longest < length) {
//         longest = length;
//       }
//       candidate = candidate.slice(index + 1) + char;
//     } else {
//       candidate += char;
//     }
//   }
//   if (longest < candidate.length) return candidate.length;
//   return longest;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * Runtime: 68 ms, faster than 100.00% of JavaScript online submissions
//  * Memory Usage: 39.8 MB, less than 70.51% of JavaScript online submissions
//  *
//  * @param {string} s
//  * @return {number}
//  */
// const lengthOfLongestSubstring = s => {
//   if (0 === s.length) return 0;
//   if (1 === s.length) return 1;
//   let candidate = s[0];
//   let longest = 0;
//   for (let i = 1; i < s.length; i++) {
//     const char = s[i];
//     const index = candidate.indexOf(char);
//     if (-1 === index) {
//       candidate += char;
//       continue;
//     }
//     const length = candidate.length;
//     if (longest < length) {
//       longest = length;
//     }
//     candidate = candidate.slice(index + 1) + char;
//   }
//   return longest < candidate.length ? candidate.length : longest;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const beginIndices = (n, a = [...'0'.repeat(n)].map(Number)) =>
  n < 1 ? [] : a.concat(beginIndices(n - 1, a.slice(1).map(i => i + 1)));

const endIndices = (n, a = [...new Array(n).keys()].map(i => i + 1)) =>
  n < 1 ? [] : a.concat(endIndices(n - 1, a.slice(1)));

const isUnique = s => {
  const map = new Map();
  for (const char of [...s])
    if (map.has(char)) return false;
    else map.set(char, true);
  return true;
};

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  if (s.length <= 1) return s.length;
  const starts = beginIndices(s.length);
  // console.log(starts);
  const ends = endIndices(s.length);
  // console.log(ends);
  const res = [];
  for (let i = 0; i < starts.length; i++)
    res.push(s.slice(starts[i], ends[i] + 1));
  // console.log(res);
  for (const substring of res.sort(
    ({ length: aLen }, { length: bLen }) => bLen - aLen,
  ))
    if (isUnique(substring)) return substring.length;
  return 0;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// console.log(beginIndices(0));
// console.log(endIndices(0));

// console.log(beginIndices(1));
// console.log(endIndices(1));

// console.log(beginIndices(2));
// console.log(endIndices(2));

// console.log(beginIndices(3));
// console.log(endIndices(3));

// console.log(beginIndices(4));
// console.log(endIndices(4));

// console.log(beginIndices(5));
// console.log(endIndices(5));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(lengthOfLongestSubstring('abcabcbb'), 3);

strictEqual(lengthOfLongestSubstring('bbbbb'), 1);

strictEqual(lengthOfLongestSubstring('pwwkew'), 3);

strictEqual(lengthOfLongestSubstring(''), 0);

strictEqual(lengthOfLongestSubstring('au'), 2);

strictEqual(lengthOfLongestSubstring('dvdf'), 3);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*

| 0 |
|:-:|
| 0 |

Start: 0
End : 0

| 0 | 1 |
|:-:|:-:|
| 0 |   |
| 0---1 |
|   | 1 |

Start: 0, 0, 1
  End: 0, 1, 1

| 0 | 1 | 2 |
|:-:|:-:|:-:|
| 0 |   |   |
| 0---1 |   |
| 0-------2 |
|   | 1 |   |
|   | 1---2 |
|   |   | 2 |

Start: 0, 0, 0, 1, 1, 2
  End: 0, 1, 2, 1, 2, 2

| 0 | 1 | 2 | 3 |
|:-:|:-:|:-:|:-:|
| 0 |   |   |   |
| 0---1 |   |   |
| 0-------2 |   |
| 0-----------3 |
|   | 1 |   |   |
|   | 1---2 |   |
|   | 1-------3 |
|   |   | 2 |   |
|   |   | 2---3 |
|   |   |   | 3 |

Start: 0, 0, 0, 0, 1, 1, 1, 2, 2, 3
  End: 0, 1, 2, 3, 1, 2, 3, 2, 2, 3

| 0 | 1 | 2 | 3 | 4 |
|:-:|:-:|:-:|:-:|:-:|
| 0 |   |   |   |   |
| 0---1 |   |   |   |
| 0-------2 |   |   |
| 0-----------3 |   |
| 0---------------4 |
|   | 1 |   |   |   |
|   | 1---2 |   |   |
|   | 1-------3 |   |
|   | 1-----------4 |
|   |   | 2 |   |   |
|   |   | 2---3 |   |
|   |   | 2-------4 |
|   |   |   | 3 |   |
|   |   |   | 3---4 |
|   |   |   |   | 4 |

Start: 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4
  End: 0, 1, 2, 3, 4, 1, 2, 3, 4, 2, 3, 4, 3, 4, 4

*/
