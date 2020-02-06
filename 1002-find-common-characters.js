// 1002. Find Common Characters
// https://leetcode.com/problems/find-common-characters/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 51.34% of JavaScript online submissions
// Memory Usage: 38 MB, less than 57.14% of JavaScript online submissions

// /**
//  * @param {string[]} A
//  * @return {string[]}
//  */
// const commonChars = A => {
//   const arrayMaps = A.map(word =>
//     word
//       .split('')
//       .reduce(
//         (acc, curr) => (acc.has(curr) ? acc.set(curr, acc.get(curr) + 1) : acc.set(curr, 1)),
//         new Map(),
//       ),
//   );
//   const theFirst = arrayMaps[0];
//   // console.log(theFirst);
//   const theRest = arrayMaps.slice(1);
//   // console.log(theRest);
//   for ([letter, count] of theFirst.entries()) {
//     for (theMap of theRest) {
//       // console.log(`${Array.from(theMap.keys())}.has(${letter}) = ${theMap.has(letter)}`);
//       if (!theMap.has(letter)) {
//         theFirst.delete(letter);
//       }
//       if (theMap.has(letter) && theMap.get(letter) < theFirst.get(letter)) {
//         // console.log(`Reducing "${letter}" to ${theMap.get(letter)}`);
//         theFirst.set(letter, theMap.get(letter));
//       }
//     }
//   }
//   // console.log(theFirst);
//   let answer = [];
//   for ([letter, count] of theFirst.entries()) {
//     for (let i = 0; i < count; i++) {
//       answer.push(letter);
//     }
//   }
//   // console.log(answer);
//   return answer;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 95.12% of JavaScript online submissions
// Memory Usage: 37 MB, less than 85.71% of JavaScript online submissions

/**
 * @param {string[]} A
 * @return {string[]}
 */
const commonChars = A => {
  const cnts = new Array(A.length).fill(0).map(i => new Array(26).fill(0));
  for (let i = 0; i < A.length; i++)
    for (let j = 0; j < A[i].length; j++) cnts[i][A[i].charCodeAt(j) - 97]++;
  const commonCnts = new Array(26).fill(0);
  for (let i = 0; i < 26; i++) {
    const instances = new Array(cnts.length);
    for (let j = 0; j < cnts.length; j++) instances[j] = cnts[j][i];
    commonCnts[i] = Math.min(...instances);
  }
  const result = [];
  for (let i = 0; i < 26; i++)
    while (commonCnts[i]--) result.push(String.fromCharCode(i + 97));
  return result;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(commonChars(['bella', 'label', 'roller']), ['e', 'l', 'l']);

deepStrictEqual(commonChars(['cool', 'lock', 'cook']), ['c', 'o']);

deepStrictEqual(
  commonChars([
    'bbddabab',
    'cbcddbdd',
    'bbcadcab',
    'dabcacad',
    'cddcacbc',
    'ccbdbcba',
    'cbddaccc',
    'accdcdbb',
  ]),
  ['b', 'd'],
);
