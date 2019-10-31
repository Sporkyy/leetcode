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

/**
 * Runtime: 68 ms, faster than 100.00% of JavaScript online submissions
 * Memory Usage: 39.8 MB, less than 70.51% of JavaScript online submissions
 *
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  if (0 === s.length) return 0;
  if (1 === s.length) return 1;
  let candidate = s[0];
  let longest = 0;
  for (let i = 1; i < s.length; i++) {
    const char = s[i];
    const index = candidate.indexOf(char);
    if (-1 === index) {
      candidate += char;
      continue;
    }
    const length = candidate.length;
    if (longest < length) {
      longest = length;
    }
    candidate = candidate.slice(index + 1) + char;
  }
  return longest < candidate.length ? candidate.length : longest;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(lengthOfLongestSubstring('abcabcbb'), 3);
strictEqual(lengthOfLongestSubstring('bbbbb'), 1);
strictEqual(lengthOfLongestSubstring('pwwkew'), 3);
strictEqual(lengthOfLongestSubstring(''), 0);
strictEqual(lengthOfLongestSubstring('au'), 2);
strictEqual(lengthOfLongestSubstring('dvdf'), 3);
