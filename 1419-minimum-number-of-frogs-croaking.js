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

/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
const minNumberOfFrogs = croakOfFrogs => {
  const obj = [...'croak'].reduce((a, c, i) => ({ ...a, [c]: i }), {});
  let [cnts, cntMaxSimC] = [new Array(5).fill(0), 0];
  for (let i = 0; i < croakOfFrogs.length; i++) {
    cnts[obj[croakOfFrogs[i]]]++;
    if (!(cnts[4] <= cnts[3] <= cnts[2] <= cnts[1] <= cnts[0])) return -1;
    if ('c' === croakOfFrogs[i]) cntMaxSimC = Math.max(cntMaxSimC, cnts[0]);
    if ('k' === croakOfFrogs[i]) cnts = cnts.map(cnt => cnt - 1);
  }
  return cnts.some(n => 0 !== n) ? -1 : cntMaxSimC;
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
