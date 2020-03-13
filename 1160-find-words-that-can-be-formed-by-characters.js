// 1160. Find Words That Can Be Formed by Characters
// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/

/*

You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character
can only be used once).

Return the sum of lengths of all good strings in words.

Note:
- 1 <= words.length <= 1000
- 1 <= words[i].length, chars.length <= 100
- All strings contain lowercase English letters only.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 184 ms, faster than 66.24% of JavaScript online submissions
// Memory Usage: 43.9 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string[]} words
//  * @param {string} chars
//  * @return {number}
//  */
// const countCharacters = (words, chars) =>
//   words.reduce((cnt, word, idx) => {
//     for (const c of [...chars]) word = word.replace(c, '');
//     return 0 === word.length ? cnt + words[idx].length : cnt;
//   }, 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 188 ms, faster than 63.52% of JavaScript online submissions
// Memory Usage: 43.9 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
const countCharacters = (words, chars) =>
  words.reduce((cnt, word, idx) => {
    for (const c of [...chars]) word = word.replace(c, '');
    return cnt + (0 === word.length ? words[idx].length : 0);
  }, 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach'), 6);
// Explanation:
// The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

// Example 2:
strictEqual(
  countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr'),
  10,
);
// Explanation:
// The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

strictEqual(
  countCharacters(
    [
      'dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin',
      'ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb',
      'ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl',
      'boygirdlggnh',
      'xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx',
      'nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop',
      'hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx',
      'juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr',
      'lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo',
      'oxgaskztzroxuntiwlfyufddl',
      'tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp',
      'qnagrpfzlyrouolqquytwnwnsqnmuzphne',
      'eeilfdaookieawrrbvtnqfzcricvhpiv',
      'sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz',
      'yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue',
      'hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv',
      'cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo',
      'teyygdmmyadppuopvqdodaczob',
      'qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs',
      'qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs',
    ],
    'usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp',
  ),
  0,
);
