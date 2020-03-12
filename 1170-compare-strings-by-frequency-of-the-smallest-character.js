// 1170. Compare Strings by Frequency of the Smallest Character
//       https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/

/*

Let's define a function f(s) over a non-empty string s, which calculates the
frequency of the smallest character in s. For example, if s = "dcce" then f(s) =
2 because the smallest character is "c" and its frequency is 2.

Now, given string arrays queries and words, return an integer array answer,
where each answer[i] is the number of words such that f(queries[i]) < f(W),
where W is a word in words.

Constraints:
- 1 <= queries.length <= 2000
- 1 <= words.length <= 2000
- 1 <= queries[i].length, words[i].length <= 10
- queries[i][j], words[i][j] are English lowercase letters.

*/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 1796 ms, faster than 10.87% of JavaScript online submissions
// Memory Usage: 51.4 MB, less than 100.00% of JavaScript online submissions

const f = s => {
  const cnts = new Array(26).fill(0);
  for (const c of s) cnts[c.charCodeAt(0) - 97]++;
  for (const cnt of cnts) if (0 < cnt) return cnt;
};

/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
const numSmallerByFrequency = (queries, words) =>
  queries.map(f).map(q => words.map(f).filter(w => q < w).length);

// console.log(words.map(f));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
deepStrictEqual(numSmallerByFrequency(['cbd'], ['zaaaz']), [1]);
// Explanation: On the first query we have f("cbd") = 1, f("zaaaz") = 3 so
// f("cbd") < f("zaaaz").

// Example 2:
deepStrictEqual(
  numSmallerByFrequency(['bbb', 'cc'], ['a', 'aa', 'aaa', 'aaaa']),
  [1, 2],
);
// Explanation: On the first query only f("bbb") < f("aaaa"). On the second
// query both f("aaa") and f("aaaa") are both > f("cc").
