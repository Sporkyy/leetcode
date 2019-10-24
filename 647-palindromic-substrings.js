// 647. Palindromic Substrings
// https://leetcode.com/problems/palindromic-substrings/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 556 ms, faster than 17.15% of JavaScript online submissions
// Memory Usage: 37.4 MB, less than 66.67% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @returns {boolean}
//  */
// const isPalindrome = s => {
//   for (let i = 0; i < s.length; i++)
//     if (s[i] !== s[s.length - i - 1]) return false;
//   return true;
// };

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const countSubstrings = s => {
//   let memo = new Map();
//   let cnt = 0;
//   // for (let i = 0; i < s.length; i++) {
//   //   // const t = new Array(s.length - i).fill(s[i]);
//   //   for (let j = 0; j < s.length; j++) {
//   //     // console.log(i, j);
//   //     const sub = s.slice(i, j);
//   //     console.log(sub);
//   //   }
//   // }
//   for (let p1 = 0, p2 = 1; p1 < s.length; p2++) {
//     if (s.length < p2) {
//       p1++;
//       p2 = p1 + 1;
//     }
//     if (s.length <= p1) break;
//     const sub = s.slice(p1, p2);
//     // console.log(`${p1}|${p2} = "${sub}"`);
//     if (memo.has(sub)) cnt++;
//     else if (isPalindrome(sub)) {
//       memo.set(sub, true);
//       cnt++;
//     }
//   }
//   // console.log(memo);
//   return cnt;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} s
 * @returns {boolean}
 */
const isPalindrome = s => {
  for (let i = 0; i < s.length; i++)
    if (s[i] !== s[s.length - i - 1]) return false;
  return true;
};

/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = s => {
  let memo = new Map();
  let cnt = 0;
  for (let p1 = 0, p2 = 1; ; p2++) {
    if (s.length < p2) {
      p1++;
      p2 = p1 + 1;
    }
    if (s.length <= p1) break;
    const sub = s.slice(p1, p2);
    if (memo.has(sub)) cnt++;
    else if (isPalindrome(sub)) {
      memo.set(sub, true);
      cnt++;
    }
  }
  return cnt;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// console.time();

// console.log(countSubstrings('abcba'));

// console.log(countSubstrings('abccba'));

// console.log(
//   countSubstrings(
//     'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
//       'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
//       'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
//       'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
//       'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
//       'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
//       'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
//       'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
//       'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
//       'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
//       'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
//       'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
//       'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
//       'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
//       'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
//       'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
//       'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
//       'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
//       'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
//       'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
//   ),
// );

// console.timeEnd();

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

console.time();

// Example 1:
strictEqual(countSubstrings('abc'), 3);
// Explanation: Three palindromic strings: "a", "b", "c".

// Example 2:
strictEqual(countSubstrings('aaa'), 6);
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

strictEqual(countSubstrings('abcba'), 7);

strictEqual(countSubstrings('abccba'), 9);

strictEqual(
  countSubstrings(
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  ),
  499500,
);

console.timeEnd();
