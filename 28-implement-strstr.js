// 28. Implement strStr()
// https://leetcode.com/problems/implement-strstr/

/*

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle
is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question
to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty
string. This is consistent to C's strstr() and Java's indexOf().

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 3184 ms, faster than 5.15% of JavaScript online submissions
// Memory Usage: 35.1 MB, less than 39.29% of JavaScript online submissions

// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// const strStr = (haystack, needle) => {
//   if (0 === needle.length) return 0;
//   if (haystack.length < needle.length) return -1;
//   let [hI, nI] = [0, 0];
//   while (hI < haystack.length) {
//     if (nI === needle.length) return hI;
//     if (haystack[hI + nI] === needle[nI]) nI++;
//     else hI++, (nI = 0);
//   }
//   return -1;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 3184 ms, faster than 5.15% of JavaScript online submissions
// Memory Usage: 35.1 MB, less than 39.29% of JavaScript online submissions

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (haystack.length < needle.length) return -1;
  if (0 === needle.length) return 0;
  let [hI, nI] = [0, 0];
  while (hI <= haystack.length - needle.length) {
    if (nI === needle.length) return hI;
    if (haystack[hI + nI] === needle[nI]) nI++;
    else hI++, (nI = 0);
  }
  return -1;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

strictEqual(strStr('hello', 'll'), 2);

strictEqual(strStr('aaaaa', 'bba'), -1);

strictEqual(strStr('a', ''), 0);

strictEqual(strStr('', 'a'), -1);

strictEqual(strStr('aaa', 'aaa'), 0);

strictEqual(strStr('aaa', 'aaaa'), -1);

strictEqual(strStr('mississippi', 'issip'), 4);
