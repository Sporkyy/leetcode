// 2337. Move Pieces to Obtain a String
// https://leetcode.com/problems/move-pieces-to-obtain-a-string/

/*

You are given two strings `start` and `target`, both of length n. Each string
consists **only** of the characters `'L'`, `'R'`, and `'_'` where:

- The characters `'L'` and `'R'` represent pieces, where a piece `'L'` can move
  to the **left** only if there is a **blank** space directly to its left, and
  a piece `'R'` can move to the **right** only if there is a **blank** space
  directly to its right.
- The character `'_'` represents a blank space that can be occupied by **any**
  of the `'L'` or `'R'` pieces.

Return `true` *if it is possible to obtain the string* `target`  *by moving the
pieces of the string* `start` ***any** number of times*. Otherwise, return
`false`.

## Constraints
- `n == start.length == target.length`
- `1 <= n <= 105`
- `start` and `target` consist of the characters `'L'`, `'R'`, and `'_'`.

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string} start
//  * @param {string} target
//  * @return {boolean}
//  */
// const canChange = (start, target) => {
//   // start.split('L'); // ?
//   // start.split('R'); // ?
//   // target.split('L'); // ?
//   // target.split('R'); // ?
//   // // console.log({ start, target });
//   // target.split('L'); // ?
//   // target.split('R'); // ?
//   // target.split(/(_*L+)+/); // ?
//   // target.split(/(R+_*)+/); // ?
//   // start.split('_'); // ?
//   // /[L_]+_+[R_]+/.test(start); //?
//   // /(?:_*L+)+_*(?:R+_*)+/.test(start); //?
//   // /(?:_*L+)+_+(?:R+_*)+(?:R+_*)+/.test(start); //?
//   // start.replace(/^_*L/g, ''); // ?
//   // start.replace(/R_*$/g, ''); // ?

//   // const sfl = start.indexOf('L'); // ?
//   // const tfl = target.indexOf('L'); // ?
//   // const sfr = start.indexOf('R'); // ?
//   // const tfr = target.indexOf('R'); // ?
//   // const sll = start.lastIndexOf('L'); // ?
//   // const tll = target.lastIndexOf('L'); // ?
//   // const slr = start.lastIndexOf('R'); // ?
//   // const tlr = target.lastIndexOf('R'); // ?

//   // return sfl < sll &&
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string} start
//  * @param {string} target
//  * @return {boolean}
//  */
// const canChange = (start, target) => {
//   const a = start.replace(/_/g, ''); // ?
//   const b = target.replace(/_/g, ''); // ?
//   const c = start.replace(/(_*L)/g, ''); // ?
//   const d = target.replace(/(_*L)/g, ''); // ?
//   const e = start.replace(/(R_*)/g, ''); // ?
//   const f = target.replace(/(R_*)/g, ''); // ?
//   return a === b;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 228 ms, faster than 60.66% of JavaScript online submissions
// Memory Usage: 54 MB, less than 72.13% of JavaScript online submissions

/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
const canChange = (start, target) => {
  const a = start.replace(/_/g, ''); // ?
  const b = target.replace(/_/g, ''); // ?

  const c = target.indexOf('L') <= start.indexOf('L'); // ?
  const f = start.indexOf('R') <= target.indexOf('R'); // ?

  const d = start.lastIndexOf('R') <= target.lastIndexOf('R'); // ?
  const e = target.lastIndexOf('L') <= start.lastIndexOf('L'); // ?
  // const d = start.lastIndexOf('R') < target.lastIndexOf('R'); // ?
  // return a === b && c && d;
  return a === b && c && d && e && f;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { ok } from 'assert';

// Example 1:
// ok(canChange('_L__R__R_', 'L______RR'));
// Input: start = "_L__R__R_", target = "L______RR"
// Output: true
// Explanation: We can obtain the string target from start by doing the
// following moves:
// - Move the first piece one step to the left, start becomes equal to
//   "L___R__R_".
// - Move the last piece one step to the right, start becomes equal to
//   "L___R___R".
// - Move the second piece three steps to the right, start becomes equal to
//   "L______RR".
// Since it is possible to get the string target from start, we return true.

// Example 2:
// ok(!canChange('R_L_', '__LR'));
// Input: start = "R_L_", target = "__LR"
// Output: false
// Explanation: The 'R' piece in the string start can move one step to the
// right to obtain "_RL_".
// After that, no pieces can move anymore, so it is impossible to obtain the
// string target from start.

// Example 3:
// ok(!canChange('_R', 'R_'));
// Input: start = "_R", target = "R_"
// Output: false
// Explanation: The piece in the string start can move only to the right, so it
// is impossible to obtain the string target from start.

// ok(!canChange('_LL__R__R_', 'L___L___RR'));

ok(canChange('___LLL', 'LLL___'));
