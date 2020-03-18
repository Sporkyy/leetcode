// 1332. Remove Palindromic Subsequences
// https://leetcode.com/problems/remove-palindromic-subsequences/

/*

Given a string s consisting only of letters 'a' and 'b'. In a single step you
can remove one palindromic subsequence from s.

Return the minimum number of steps to make the given string empty.

A string is a subsequence of a given string, if it is generated by deleting some
characters of a given string without changing its order.

A string is called palindrome if is one that reads the same backward as well as
forward.

Constraints:
- 0 <= s.length <= 1000
- s only consists of letters 'a' and 'b'

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 84.19% of JavaScript online submissions
// Memory Usage: 35 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const removePalindromeSub = s => {
//   if (!s.length) return 0;
//   const rev = [...s].reverse().join('');
//   if (s === rev) return 1;
//   return 2;
//   // console.log(s.replace(/a/g, '+1').replace(/b/g, -1));
//   // console.log(s.split('a'));
//   // console.log(s.split('b'));
//   // console.log(s.split(/a+/));
//   // console.log(s.split(/b+/));
//   // return Math.abs(s.split(/a+/).length - s.split(/b+/).length);
//   // console.log(rev.split('a'));
//   // console.log(rev.split('b'));
//   // return Math.max(
//   //   ...s.split('a').map(sub => sub.length),
//   //   ...s.split('b').map(sub => sub.length),
//   // );
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 44.02% of JavaScript online submissions
// Memory Usage: 34.8 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} s
 * @return {number}
 */
const removePalindromeSub = s =>
  !s.length ? 0 : s === [...s].reverse().join('') ? 1 : 2;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
// strictEqual(removePalindromeSub('ababa'), 1);
// Explanation: String is already palindrome

// // Example 2:
// strictEqual(removePalindromeSub('abb'), 2);
// Explanation: "abb" -> "bb" -> "".
// Remove palindromic subsequence "a" then "bb".

// Example 3:
// strictEqual(removePalindromeSub('baabb'), 2);
// Explanation: "baabb" -> "b" -> "".
// Remove palindromic subsequence "baab" then "b".

// Example 4:
// strictEqual(removePalindromeSub(''), 0);

strictEqual(removePalindromeSub('aabaa'), 1);
