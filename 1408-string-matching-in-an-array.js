// 1408. String Matching in an Array
// https://leetcode.com/problems/string-matching-in-an-array/

/*

Given an array of string words. Return all strings in words which is substring
of another word in any order.

String words[i] is substring of words[j], if can be obtained removing some
characters to left and/or right side of words[j].

Constraints:
- 1 <= words.length <= 100
- 1 <= words[i].length <= 30
- words[i] contains only lowercase English letters.
- It's guaranteed that words[i] will be unique.

*/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 51.50% of JavaScript online submissions
// Memory Usage: 34.8 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string[]} words
 * @return {string[]}
 */
const stringMatching = words =>
  words.filter(n => words.some(h => h !== n && h.includes(n)));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
deepStrictEqual(stringMatching(['mass', 'as', 'hero', 'superhero']), [
  'as',
  'hero',
]);
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.

// Example 2:
deepStrictEqual(stringMatching(['leetcode', 'et', 'code']), ['et', 'code']);
// Explanation: "et", "code" are substring of "leetcode".

// Example 3:
deepStrictEqual(stringMatching(['blue', 'green', 'bu']), []);
