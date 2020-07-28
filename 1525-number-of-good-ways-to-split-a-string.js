// 1525. Number of Good Ways to Split a String
// https://leetcode.com/problems/number-of-good-ways-to-split-a-string/

/*

You are given a string s, a split is called good if you can split s into 2
non-empty strings p and q where its concatenation is equal to s and the number
of distinct letters in p and q are the same.

Return the number of good splits you can make in s.

Constraints:
- s contains only lowercase English letters.
- 1 <= s.length <= 10^5

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Time Limit Exceeded

/**
 * @param {string} s
 * @return {number}
 */
const numSplits = s =>
  [...s].reduce(
    (acc, _, idx, arr) =>
      idx === arr.length - 1 ||
      new Set(arr.slice(0, idx + 1)).size !== new Set(arr.slice(idx + 1)).size
        ? acc
        : acc + 1,
    0,
  );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(numSplits('aacaba'), 2);
// Explanation:
// - There are 5 ways to split "aacaba" and 2 of them are good.
// - ("a", "acaba") Left string and right string contains 1 and 3 different
//   letters respectively.
// - ("aa", "caba") Left string and right string contains 1 and 3 different
//   letters respectively.
// - ("aac", "aba") Left string and right string contains 2 and 2 different
//   letters respectively (good split).
// - ("aaca", "ba") Left string and right string contains 2 and 2 different
//   letters respectively (good split).
// - ("aacab", "a") Left string and right string contains 3 and 1 different
//   letters respectively.

// Example 2:
strictEqual(numSplits('abcd'), 1);
// Explanation: Split the string as follows ("ab", "cd").

// Example 3:
strictEqual(numSplits('aaaaa'), 4);
// Explanation: All possible splits are good.

// Example 4:
strictEqual(numSplits('acbadbaada'), 2);
