// 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
// https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/

/*

Given a sentence that consists of some words separated by a single space, and a
searchWord.

You have to check if searchWord is a prefix of any word in sentence.

Return the index of the word in sentence where searchWord is a prefix of this
word (1-indexed).

If searchWord is a prefix of more than one word, return the index of the first
word (minimum index). If there is no such word return -1.

A prefix of a string S is any leading contiguous substring of S.

Constraints:
- 1 <= sentence.length <= 100
- 1 <= searchWord.length <= 10
- sentence consists of lowercase English letters and spaces.
- searchWord consists of lowercase English letters.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 83.90% of JavaScript online submissions
// Memory Usage: 33.4 MB, less than 5.51% of JavaScript online submissions

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
const isPrefixOfWord = (sentence, searchWord, cnt = 0) =>
  !sentence.length
    ? -1
    : 'string' === typeof sentence
    ? isPrefixOfWord(sentence.split(' '), searchWord)
    : new RegExp(`^${searchWord}`).test(sentence.shift())
    ? cnt + 1
    : isPrefixOfWord(sentence, searchWord, cnt + 1);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(isPrefixOfWord('i love eating burger', 'burg'), 4);
// Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.

// Example 2:
strictEqual(isPrefixOfWord('this problem is an easy problem', 'pro'), 2);
// Explanation: "pro" is prefix of "problem" which is the 2nd and the 6th word in the sentence, but we return 2 as it's the minimal index.

// Example 3:
strictEqual(isPrefixOfWord('i am tired', 'you'), -1);
// Explanation: "you" is not a prefix of any word in the sentence.

// Example 4:
strictEqual(isPrefixOfWord('i use triple pillow', 'pill'), 4);

// Example 5:
strictEqual(isPrefixOfWord('hello from the other side', 'they'), -1);

strictEqual(isPrefixOfWord('leetcode corona', 'leetco'), 1);
