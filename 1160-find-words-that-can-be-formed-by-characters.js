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

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

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

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 188 ms, faster than 63.52% of JavaScript online submissions
// Memory Usage: 43.9 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string[]} words
//  * @param {string} chars
//  * @return {number}
//  */
// const countCharacters = (words, chars) =>
//   words.reduce((cnt, word, idx) => {
//     for (const c of [...chars]) word = word.replace(c, '');
//     return cnt + (0 === word.length ? words[idx].length : 0);
//   }, 0);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 164 ms, faster than 72.81% of JavaScript online submissions
// Memory Usage: 46.9 MB, less than 42.60% of JavaScript online submissions

// /**
//  * @param {string} str
//  * @return {number[]}
//  */
// const strToCntArr = str => {
//   const arr = new Array(52).fill(0);
//   for (let i = 0; i < str.length; i++) {
//     const idx = str.charCodeAt(i);
//     arr[idx - (idx < 97 ? 65 : 97)]++;
//   }
//   return arr;
// };

// /**
//  * @param {string[]} words
//  * @param {string} chars
//  * @return {number}
//  */
// const countCharacters = (words, chars) => {
//   let sum = 0;
//   const have = strToCntArr(chars);
//   outer: for (const word of words) {
//     const need = strToCntArr(word);
//     for (let i = 0; i < 52; i++) if (have[i] < need[i]) continue outer;
//     sum += word.length;
//   }
//   return sum;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 116 ms, faster than 87.61% of JavaScript online submissions
// Memory Usage: 46 MB, less than 89.12% of JavaScript online submissions

// /**
//  * @param {string} str
//  * @return {number[]}
//  */
// const strToCntArr = str => {
//   const arr = new Array(52).fill(0);
//   for (let i = 0; i < str.length; i++) {
//     const idx = str.charCodeAt(i);
//     arr[idx - (idx < 97 ? 65 : 97)]++;
//   }
//   return arr;
// };

// /**
//  * @param {string[]} words
//  * @param {string} chars
//  * @return {number}
//  */
// const countCharacters = (words, chars) => {
//   let sum = 0;
//   const have = strToCntArr(chars);
//   outer: for (const word of words) {
//     if (chars.length < word.length) continue;
//     const need = strToCntArr(word);
//     for (let i = 0; i < 52; i++) if (have[i] < need[i]) continue outer;
//     sum += word.length;
//   }
//   return sum;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 128 ms, faster than 80.66% of JavaScript online submissions
// Memory Usage: 44.7 MB, less than 99.40% of JavaScript online submissions

/**
 * Count all the instances of each lowercase character in the given string
 * and return an array with those counts in an array with indices of the
 * alphabetical index of that character i.e. 0-25 = a-z
 *
 * @param {string} str
 * @return {number[]}
 */
const strToCntArr = str => {
  // Create the array of all the character counts
  const arr = new Array(26).fill(0);
  // Increment the count for each character in the string
  for (let i = 0; i < str.length; i++) arr[str.charCodeAt(i) - 97]++;
  // Return the array with all the counts
  return arr;
};

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
const countCharacters = (words, chars) => {
  // The sum of length of the valid words
  let sum = 0;
  // Get the array with the counts of the characters we have
  const have = strToCntArr(chars);
  // Loop through the words
  outer: for (const word of words) {
    // Continue if we need more more total characters than we have
    if (chars.length < word.length) continue;
    // Get the array with the counts of the characters we need
    const need = strToCntArr(word);
    // Continue the outer loop when we need more characters than we have
    for (let i = 0; i < 26; i++) if (have[i] < need[i]) continue outer;
    // Any word that reaches this point is valid, so add the length to sum
    sum += word.length;
  }
  // Return the sum of the lengths of all the valid words
  return sum;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Example 1:
strictEqual(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach'), 6);
// ### Explanation
// The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 =
// 6.

// Example 2:
strictEqual(
  countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr'),
  10,
);
// ### Explanation
// The strings that can be formed are "hello" and "world" so the answer is 5 + 5
// = 10.

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
