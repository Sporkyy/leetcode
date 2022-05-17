// 2273. Find Resultant Array After Removing Anagrams
// https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/

/*

You are given a **0-indexed** string array `words`, where `words[i]` consists
of lowercase English letters.

In one operation, select any index `i` such that `0 < i < words.length` and
`words[i - 1]` and `words[i]` are **anagrams**, and **delete** `words[i]`
from `words`. Keep performing this operation as long as you can select an index
that satisfies the conditions.

Return `words` *after performing all operations*. It can be shown that
selecting the indices for each operation in **any** arbitrary order will lead
to the same result.

An **Anagram** is a word or phrase formed by rearranging the letters of a
different word or phrase using all the original letters exactly once.
For example, `"dacb"` is an anagram of `"abdc"`.

## Constraints
- `1 <= words.length <= 100`
- `1 <= words[i].length <= 10`
- `words[i]` consists of lowercase English letters.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {string[]} words
//  * @return {string[]}
//  */
// var removeAnagrams = words => {
//   const map = {};
//   const result = [];
//   for (const word of words) {
//     const sorted = word.split('').sort().join('');
//     if (!map[sorted]) {
//       map[sorted] = true;
//       result.push(word);
//     }
//   }
//   return result;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {string[]} words
//  * @return {string[]}
//  */
// const removeAnagrams = words =>
//   [
//     ...words
//       .reduceRight(
//         (acc, curr, idx) => acc.set([...curr].sort().join(''), idx),
//         new Map(),
//       )
//       .values(),
//   ]
//     .map(wordIdx => words[wordIdx])
//     .reverse();

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 63 ms, faster than 99.58% of JavaScript online submissions
// Memory Usage: 48.1 MB, less than 81.78% of JavaScript online submissions

/**
 * @param {string[]} words
 * @return {string[]}
 */
const removeAnagrams = words =>
  [
    ...words
      .map(word => [...word].sort().join(''))
      .reduce(
        (acc, curr, idx, arr) => (arr[idx - 1] !== curr ? acc.add(idx) : acc),
        new Set(),
      ),
  ].map(wordIdx => words[wordIdx]);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { deepStrictEqual } from 'assert';

// Example 1:
deepStrictEqual(removeAnagrams(['abba', 'baba', 'bbaa', 'cd', 'cd']), [
  'abba',
  'cd',
]);
// Explanation:
// One of the ways we can obtain the resultant array is by using the following
// operations:
// - Since words[2] = "bbaa" and words[1] = "baba" are anagrams, we choose
//   index 2 and delete words[2].
//   Now words = ["abba","baba","cd","cd"].
// - Since words[1] = "baba" and words[0] = "abba" are anagrams, we choose
//   index 1 and delete words[1].
//   Now words = ["abba","cd","cd"].
// - Since words[2] = "cd" and words[1] = "cd" are anagrams, we choose
//   index 2 and delete words[2].
//   Now words = ["abba","cd"].
// We can no longer perform any operations, so ["abba","cd"] is the final
// answer.

// Example 2:
deepStrictEqual(removeAnagrams(['a', 'b', 'c', 'd', 'e']), [
  'a',
  'b',
  'c',
  'd',
  'e',
]);
// Explanation:
// No two adjacent strings in words are anagrams of each other, so no operations are performed.

deepStrictEqual(removeAnagrams(['a', 'b', 'a']), ['a', 'b', 'a']);
