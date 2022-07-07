// 2325. Decode the Message
// https://leetcode.com/problems/decode-the-message/

/*

You are given the strings `key` and `message`, which represent a cipher key and
a secret message, respectively. The steps to decode `message` are as follows:

1. Use the **first** appearance of all 26 lowercase English letters in key as
   the **order** of the substitution table.
2. Align the substitution table with the regular English alphabet.
3. Each letter in `message` is then **substituted** using the table.
4. Spaces `' '` are transformed to themselves.

- For example, given `key = "happy boy"`
  (actual key would have at least one instance of each letter in the alphabet),
  we have the partial substitution table of
  (`'h' -> 'a'`, `'a' -> 'b'`, `'p' -> 'c'`, `'y' -> 'd'`, `'b' -> 'e'`,
  `'o' -> 'f'`).

  Return *the decoded message*.

## Constraints

- 26 <= key.length <= 2000
- key consists of lowercase English letters and ' '.
- key contains every letter in the English alphabet ('a' to 'z') at least once.
- 1 <= message.length <= 2000
- message consists of lowercase English letters and ' '.

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 121 ms, faster than 16.94% of JavaScript online submissions
// Memory Usage: 43.9 MB, less than 96.35% of JavaScript online submissions

// /**
//  * @param {string} key
//  * @param {string} message
//  * @return {string}
//  */
// const decodeMessage = (key, message) => {
//   const x = [...key].reduce((acc, curr) => {
//     return ' ' === curr || acc.has(curr) ? acc : acc.set(curr, 97 + acc.size);
//   }, new Map());

//   // console.log(x);

//   const y = [...message].reduce((acc, curr) => {
//     return acc + (' ' === curr ? ' ' : String.fromCharCode(x.get(curr)));
//   }, '');

//   // console.log(y);

//   return y;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 112 ms, faster than 22.59% of JavaScript online submissions
// Memory Usage: 44.3 MB, less than 85.05% of JavaScript online submissions

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
const decodeMessage = (key, message) =>
  (keyMap =>
    [...message].reduce(
      (acc, curr) =>
        acc + (' ' === curr ? ' ' : String.fromCharCode(keyMap.get(curr))),
      '',
    ))(
    [...key].reduce(
      (acc, curr) =>
        ' ' === curr || acc.has(curr) ? acc : acc.set(curr, 97 + acc.size),
      new Map(),
    ),
  );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

// Example 1:
// |t|h|e|q|u|i|c|k|b|r|o|w|n|f|x|j|m|p|s|v|l|a|z|y|d|g|
// |a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|
strictEqual(
  decodeMessage(
    'the quick brown fox jumps over the lazy dog',
    'vkbs bs t suepuv',
  ),
  'this is a secret',
);
// Explanation: The diagram above shows the substitution table.
// It is obtained by taking the first appearance of each letter in
// "the quick brown fox jumps over the lazy dog".

// Example 2:
// |e|l|j|u|x|h|p|w|n|y|r|d|g|t|q|k|v|i|s|z|c|f|m|a|b|o|
// |a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|
strictEqual(
  decodeMessage(
    'eljuxhpwnyrdgtqkviszcfmabo',
    'zwx hnfx lqantp mnoeius ycgk vcnjrdb',
  ),
  'the five boxing wizards jump quickly',
);
// Explanation: The diagram above shows the substitution table.
// It is obtained by taking the first appearance of each letter in
// "eljuxhpwnyrdgtqkviszcfmabo".
