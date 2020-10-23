// 1625. Lexicographically Smallest String After Applying Operations
// https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/

/*

You are given a string s of even length consisting of digits from 0 to 9, and
two integers a and b.

You can apply either of the following two operations any number of times and in
any order on s:

- Add a to all odd indices of s (0-indexed). Digits post 9 are cycled back to 0.
  For example, if s = "3456" and a = 5, s becomes "3951".
- Rotate s to the right by b positions. For example, if s = "3456" and b = 1, s
  becomes "6345".

Return the lexicographically smallest string you can obtain by applying the
above operations any number of times on s.

A string a is lexicographically smaller than a string b (of the same length) if
in the first position where a and b differ, string a has a letter that appears
earlier in the alphabet than the corresponding letter in b. For example, "0158"
is lexicographically smaller than "0190" because the first position they differ
is at the third letter, and '5' comes before '9'.

## Constraints

- 2 <= s.length <= 100
- s.length is even.
- s consists of digits from 0 to 9 only.
- 1 <= a <= 9
- 1 <= b <= s.length - 1

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 364 ms, faster than 60.56% of JavaScript online submissions
// Memory Usage: 57 MB, less than 5.63% of JavaScript online submissions

// /**
//  * @param {string} str
//  * @param {string} n
//  * @returns {string}
//  */
// const add = (str, n) =>
//   [...str]
//     .map((char, idx) => (0 === idx % 2 ? char : (Number(char) + n) % 10))
//     .join('');

// /**
//  * @param {string} str
//  * @param {number} n
//  * @returns {string}
//  */
// const rotate = (str, n) => `${str}${str}`.slice(n, str.length + n);

// /**
//  * @param {string} s
//  * @param {number} a
//  * @param {number} b
//  * @return {string}
//  */
// const findLexSmallestString = (s, a, b) => {
//   const stk = [s];
//   const done = new Set();
//   let min = s;
//   while (stk.length) {
//     const curr = stk.pop();
//     const [added, rotated] = [add(curr, a), rotate(curr, b)];
//     min = [min, added, rotated].sort((a, b) => a.localeCompare(b))[0];
//     if (!done.has(added)) stk.push(added) && done.add(added);
//     if (!done.has(rotated)) stk.push(rotated) && done.add(rotated);
//   }
//   return min;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 452 ms, faster than 40.84% of JavaScript online submissions
// Memory Usage: 57.2 MB, less than 5.63% of JavaScript online submissions

// /**
//  * @param {string} str
//  * @param {string} n
//  * @returns {string}
//  */
// const add = (str, n) =>
//   [...str]
//     .map((char, idx) => (0 === idx % 2 ? char : (Number(char) + n) % 10))
//     .join('');

// /**
//  * @param {string} str
//  * @param {number} n
//  * @returns {string}
//  */
// const rotate = (str, n) => `${str}${str}`.slice(n, str.length + n);

// /**
//  * @param {string} s
//  * @param {number} a
//  * @param {number} b
//  * @return {string}
//  */
// const findLexSmallestString = (s, a, b) => {
//   const stk = [s];
//   const done = new Set();
//   while (stk.length) {
//     const curr = stk.pop();
//     const [added, rotated] = [add(curr, a), rotate(curr, b)];
//     if (!done.has(added)) stk.push(added) && done.add(added);
//     if (!done.has(rotated)) stk.push(rotated) && done.add(rotated);
//   }
//   return [...done].sort((a, b) => a.localeCompare(b))[0];
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 336 ms, faster than 70.42% of JavaScript online submissions
// Memory Usage: 56.3 MB, less than 5.63% of JavaScript online submissions

// /**
//  * @param {string} str
//  * @param {string} n
//  * @returns {string}
//  */
// const add = (str, n) =>
//   [...str]
//     .map((char, idx) => (0 === idx % 2 ? char : (Number(char) + n) % 10))
//     .join('');

// /**
//  * @param {string} str
//  * @param {number} n
//  * @returns {string}
//  */
// const rotate = (str, n) => `${str}${str}`.slice(n, str.length + n);

// /**
//  * @param {string} s
//  * @param {number} a
//  * @param {number} b
//  * @return {string}
//  */
// const findLexSmallestString = (s, a, b) => {
//   const stk = [s];
//   const done = new Set();
//   let min = s;
//   while (stk.length) {
//     const curr = stk.pop();
//     min = min.localeCompare(curr) < 0 ? min : curr;
//     const [added, rotated] = [add(curr, a), rotate(curr, b)];
//     if (!done.has(added)) stk.push(added) && done.add(added);
//     if (!done.has(rotated)) stk.push(rotated) && done.add(rotated);
//   }
//   return min;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 528 ms, faster than 32.88% of JavaScript online submissions
// Memory Usage: 63.1 MB, less than 5.48% of JavaScript online submissions

/**
 * @param {string} str
 * @param {string} n
 * @returns {string}
 */
const add = (str, n) =>
  [...str].reduce(
    (incremented, char, idx) =>
      (incremented += 0 === idx % 2 ? char : (Number(char) + n) % 10),
    '',
  );

/**
 * @param {string} str
 * @param {number} n
 * @returns {string}
 */
const rotate = (str, n) => `${str}${str}`.slice(n, str.length + n);

/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
const findLexSmallestString = (s, a, b) => {
  const stk = [s];
  const done = new Set();
  let min = s;
  while (stk.length) {
    const curr = stk.pop();
    min = min.localeCompare(curr) < 0 ? min : curr;
    const [added, rotated] = [add(curr, a), rotate(curr, b)];
    if (!done.has(added)) stk.push(added) && done.add(added);
    if (!done.has(rotated)) stk.push(rotated) && done.add(rotated);
  }
  return min;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(findLexSmallestString('5525', 9, 2), '2050');
// Explanation: We can apply the following operations:
//
// - Start:  "5525"
// - Rotate: "2555"
// - Add:    "2454"
// - Add:    "2353"
// - Rotate: "5323"
// - Add:    "5222"
// - ​​​​​​​Add:    "5121"
// - ​​​​​​​Rotate: "2151"
// - ​​​​​​​Add:    "2050"​​​​​​​​​​​​
//
// There is no way to obtain a string that is lexicographically smaller then
// "2050".

// Example 2:
strictEqual(findLexSmallestString('74', 5, 1), '24');
// Explanation: We can apply the following operations:
//
// - Start:  "74"
// - Rotate: "47"
// - ​​​​​​​Add:    "42"
// - ​​​​​​​Rotate: "24"​​​​​​​​​​​​
//
// There is no way to obtain a string that is lexicographically smaller then
// "24".

// Example 3:
strictEqual(findLexSmallestString('0011', 4, 2), '0011');
// Explanation: There are no sequence of operations that will give us a
// lexicographically smaller string than "0011".

// Example 4:
strictEqual(findLexSmallestString('43987654', 7, 3), '00553311');

/*
  | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
  | - | - | - | - | - | - | - | - |
  | 4 | 3 | 9 | 8 | 7 | 6 | 5 | 4 |
*/

strictEqual(
  findLexSmallestString('9198949703855659134317033067801314', 1, 31),
  '0001888581849072434600300490275477',
);

strictEqual(
  findLexSmallestString(
    '0455375520793030656513274404425581385590504256159054738879',
    9,
    55,
  ),
  '0000353583971474122551082560201226856024435849742507259049',
);

strictEqual(findLexSmallestString('12345', 1, 1), '00001');
strictEqual(findLexSmallestString('12345', 1, 2), '00001');
strictEqual(findLexSmallestString('12345', 2, 1), '01011');
strictEqual(findLexSmallestString('12345', 2, 2), '01011');
strictEqual(findLexSmallestString('12345', 2, 3), '01011');
strictEqual(findLexSmallestString('12345', 3, 2), '00001');
strictEqual(findLexSmallestString('12345', 3, 3), '00001');
