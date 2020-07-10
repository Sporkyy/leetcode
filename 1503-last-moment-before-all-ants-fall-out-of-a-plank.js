// 1503. Last Moment Before All Ants Fall Out of a Plank
// https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/

/*

We have a wooden plank of the length n units. Some ants are walking on the
plank, each ant moves with speed 1 unit per second. Some of the ants move to the
left, the other move to the right.

When two ants moving in two different directions meet at some point, they change
their directions and continue moving again. Assume changing directions doesn't
take any additional time.

When an ant reaches one end of the plank at a time t, it falls out of the plank
imediately.

Given an integer n and two integer arrays left and right, the positions of the
ants moving to the left and the right. Return the moment when the last ant(s)
fall out of the plank.

Constraints:
- 1 <= n <= 10^4
- 0 <= left.length <= n + 1
- 0 <= left[i] <= n
- 0 <= right.length <= n + 1
- 0 <= right[i] <= n
- 1 <= left.length + right.length <= n + 1
- All values of left and right are unique, and each value can appear only in one
  of the two arrays.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number} n
//  * @param {number[]} left
//  * @param {number[]} right
//  * @return {number}
//  */
// const getLastMoment = (n, left, right) => {
//   const plank = new Array(n).fill('_');
//   for (const i of left) plank[i] = 'l';
//   for (const i of right) plank[i] = 'r';
//   let s = plank.join('');
//   // console.log(s);
//   // return Math.max(...left, ...right);
//   for (let i = 0; i < 50; i++) {
//     console.log(s);
//     // Ants falling off the ends of the plank
//     s = s.replace(/^l/g, '_');
//     s = s.replace(/r$/g, '_');
//     // Ants stacking
//     s = s.replace(/r_l/g, '_X_');
//     s = s.replace(/rxl/g, 'LXR');
//     // Ants turning
//     s = s.replace(/rl/g, 'LR');
//     // Ants marching (Red and black antennae waving...)
//     s = s.replace(/(r+)_/g, (a, x) => `_${x.toUpperCase()}`);
//     s = s.replace(/_(l+)/g, (a, x) => `${x.toUpperCase()}_`);
//     // Ants unstacking
//     s = s.replace(/_x_/g, 'L_R');
//     // console.log(`${i}`.padStart(2), s);
//     if (!/[LXR]/.test(s)) return i;
//     // console.log(s);
//     s = s.toLowerCase();
//     // console.log(s);
//   }
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 86.23% of JavaScript online submissions
// Memory Usage: 40.9 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number} n
 * @param {number[]} l
 * @param {number[]} r
 * @return {number}
 */
const getLastMoment = (n, l, r) => Math.max(...l, ...r.map(m => n - m));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(getLastMoment(4, [4, 3], [0, 1]), 4);
// Explanation: In the image above:
// -The ant at index 0 is named A and going to the right.
// -The ant at index 1 is named B and going to the right.
// -The ant at index 3 is named C and going to the left.
// -The ant at index 4 is named D and going to the left.
// Note that the last moment when an ant was on the plank is t = 4 second,
// after that it falls imediately out of the plank.
// (i.e. We can say that at t = 4.0000000001, there is no ants on the plank).

/*

   |0|1|2|3|4|
0: |r|r| |l|l|
1: | |r|x|l| |
2: | |l|x|r| |
3: |l|l| |r|r|
4: |l| | | |r|

*/

// Example 2:
strictEqual(getLastMoment(7, [], [0, 1, 2, 3, 4, 5, 6, 7]), 7);
// Explanation: All ants are going to the right, the ant at index 0 needs 7
// seconds to fall.

// Example 3:
strictEqual(getLastMoment(7, [0, 1, 2, 3, 4, 5, 6, 7], []), 7);
// Explanation: All ants are going to the left, the ant at index 7 needs 7
// seconds to fall.

// Example 4:
strictEqual(getLastMoment(9, [5], [4]), 5);
// Explanation: At t = 1 second, both ants will be at the same intial position
// but with different direction.

// Example 5:
strictEqual(getLastMoment(6, [6], [0]), 6);

strictEqual(getLastMoment(20, [4, 7, 15], [9, 3, 13, 10]), 17);

/*

    |0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9|
00: | | | |r|l| | |l| |r|r| | |r| |l| | | | | ​​​​
01: | | | |l|r| |l| | | |r|r| | |x| | | | | |
02: | | |l| | |x| | | | | |r|r|l| |r| | | | |
03: | |l| | |l| |r| | | | |r|l|r| | |r| | | |
04: |l| | |l| | | |r| | | |l|r| |r| | |r| | |
05: | | |l| | | | | |r| |l| | |r| |r| | |r| |
06: | |l| | | | | | | |x| | | | |r| |r| | |r|
07: |l| | | | | | | |l| |r| | | | |r| |r| | |
08: | | | | | | | |l| | | |r| | | | |r| |r| |
09: | | | | | | |l| | | | | |r| | | | |r| |r|
10: | | | | | |l| | | | | | | |r| | | | |r| |
11: | | | | |l| | | | | | | | | |r| | | | |r|
12: | | | |l| | | | | | | | | | | |r| | | | |
13: | | |l| | | | | | | | | | | | | |r| | | |
14: | |l| | | | | | | | | | | | | | | |r| | |
15: |l| | | | | | | | | | | | | | | | | |r| |
16: | | | | | | | | | | | | | | | | | | | |r|

*/
