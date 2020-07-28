// 1419. Minimum Number of Frogs Croaking
// https://leetcode.com/problems/minimum-number-of-frogs-croaking/

/*

Given the string croakOfFrogs, which represents a combination of the string
"croak" from different frogs, that is, multiple frogs can croak at the same
time, so multiple “croak” are mixed. Return the minimum number of different
frogs to finish all the croak in the given string.

A valid "croak" means a frog is printing 5 letters ‘c’, ’r’, ’o’, ’a’, ’k’
sequentially. The frogs have to print all five letters to finish a croak. If the
given string is not a combination of valid "croak" return -1.

Constraints:
- 1 <= croakOfFrogs.length <= 10^5
- All characters in the string are: 'c', 'r', 'o', 'a' or 'k'.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 104 ms, faster than 35.71% of JavaScript online submissions
// Memory Usage: 44 MB, less than 50.00% of JavaScript online submissions

// /**
//  * @param {string} croakOfFrogs
//  * @return {number}
//  */
// const minNumberOfFrogs = croakOfFrogs => {
//   const obj = [...'croak'].reduce((a, c, i) => ({ ...a, [c]: i }), {});
//   let [cnts, cntMaxSimC] = [new Array(5).fill(0), 0];
//   for (let i = 0; i < croakOfFrogs.length; i++) {
//     cnts[obj[croakOfFrogs[i]]]++;
//     if (!(cnts[4] <= cnts[3] <= cnts[2] <= cnts[1] <= cnts[0])) return -1;
//     if ('c' === croakOfFrogs[i]) cntMaxSimC = Math.max(cntMaxSimC, cnts[0]);
//     if ('k' === croakOfFrogs[i]) cnts = cnts.map(cnt => cnt - 1);
//   }
//   return cnts.some(n => 0 !== n) ? -1 : cntMaxSimC;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 92 ms, faster than 50.00% of JavaScript online submissions
// Memory Usage: 40.2 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} croakOfFrogs
//  * @return {number}
//  */
// const minNumberOfFrogs = croakOfFrogs => {
//   let [c, r, o, a, k, maxSimCs] = [0, 0, 0, 0, 0, 0];
//   const incSound = {
//     c: () => c++,
//     r: () => r++,
//     o: () => o++,
//     a: () => a++,
//     k: () => k++,
//   };
//   for (const sound of croakOfFrogs) {
//     incSound[sound]();
//     if ('c' === sound) maxSimCs = Math.max(maxSimCs, c);
//     if ('k' === sound) c--, r--, o--, a--, k--;
//     if (c < r || r < o || o < a || a < k) return -1;
//   }
//   return 0 !== c || 0 !== r || 0 !== o || 0 !== a || 0 !== k ? -1 : maxSimCs;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 120 ms, faster than 25.00% of JavaScript online submissions
// Memory Usage: 39.8 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} croakOfFrogs
//  * @return {number}
//  */
// const minNumberOfFrogs = croakOfFrogs => {
//   let [c, r, o, a, k, maxSimCs] = [0, 0, 0, 0, 0, 0];
//   for (const sound of croakOfFrogs) {
//     switch (sound) {
//       case 'c':
//         c++;
//         break;
//       case 'r':
//         r++;
//         break;
//       case 'o':
//         o++;
//         break;
//       case 'a':
//         a++;
//         break;
//       case 'k':
//         k++;
//         break;
//     }
//     if ('c' === sound) maxSimCs = Math.max(maxSimCs, c);
//     if ('k' === sound) c--, r--, o--, a--, k--;
//     if (c < r || r < o || o < a || a < k) return -1;
//   }
//   return 0 !== c + r + o + a + k ? -1 : maxSimCs;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 112 ms, faster than 32.14% of JavaScript online submissions
// Memory Usage: 39.8 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} croakOfFrogs
//  * @return {number}
//  */
// const minNumberOfFrogs = croakOfFrogs => {
//   let [c, r, o, a, maxSimCs] = [0, 0, 0, 0, 0];
//   for (const sound of croakOfFrogs) {
//     if ('c' === sound) [c, maxSimCs] = [c + 1, Math.max(maxSimCs, c + 1)];
//     else if ('r' === sound) r++;
//     else if ('o' === sound) o++;
//     else if ('a' === sound) a++;
//     else if ('k' === sound) c--, r--, o--, a--;
//     if (c < r || r < o || o < a) return -1;
//   }
//   return 0 !== c + r + o + a ? -1 : maxSimCs;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 88 ms, faster than 60.71% of JavaScript online submissions
// Memory Usage: 39.8 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
const minNumberOfFrogs = croakOfFrogs => {
  let [c, r, o, a, maxSimCs] = [0, 0, 0, 0, 0];
  for (const sound of croakOfFrogs) {
    if ('c' === sound) c++, (maxSimCs = Math.max(maxSimCs, c));
    else if ('r' === sound) r++;
    else if ('o' === sound) o++;
    else if ('a' === sound) a++;
    else if ('k' === sound) c--, r--, o--, a--;
    if (c < r || r < o || o < a) return -1;
  }
  return c || r || o || a ? -1 : maxSimCs;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(minNumberOfFrogs('croakcroak'), 1);
// Explanation: One frog yelling "croak" twice.

// Example 2:
strictEqual(minNumberOfFrogs('crcoakroak'), 2);
// Explanation: The minimum number of frogs is two.
// The first frog could yell "crcoakroak".
// The second frog could yell later "crcoakroak".

// Example 3:
strictEqual(minNumberOfFrogs('croakcrook'), -1);
// Explanation: The given string is an invalid combination of "croak" from different frogs.

// Example 4:
strictEqual(minNumberOfFrogs('croakcroa'), -1);

strictEqual(minNumberOfFrogs('aoocrrackk'), -1);

strictEqual(minNumberOfFrogs('crocracokrakoak'), 3);
