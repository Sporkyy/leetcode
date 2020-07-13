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

   01234
0: rr_ll
1: _rxl_
2: _lxr_
3: ll_rr
4: l___r

*/

// Example 2:
strictEqual(getLastMoment(7, [], [0, 1, 2, 3, 4, 5, 6, 7]), 7);
// Explanation: All ants are going to the right, the ant at index 0 needs 7
// seconds to fall.

/*

0: rrrrrrrr
1: _rrrrrrr
2: __rrrrrr
3: ___rrrrr
4: ____rrrr
5: _____rrr
6: ______rr
7: _______r

*/

// Example 3:
strictEqual(getLastMoment(7, [0, 1, 2, 3, 4, 5, 6, 7], []), 7);
// Explanation: All ants are going to the left, the ant at index 7 needs 7
// seconds to fall.

/*

0: llllllll
1: lllllll_
2: llllll__
3: lllll___
4: llll____
5: lll_____
6: ll______
7: l_______

*/

// Example 4:
strictEqual(getLastMoment(9, [5], [4]), 5);
// Explanation: At t = 1 second, both ants will be at the same intial position
// but with different direction.

/*

0: ____rl___
1: ____lr___
2: ___l__r__
3: __l____r_
4: _l______r
5: l________

*/

// Example 5:
strictEqual(getLastMoment(6, [6], [0]), 6);

/*

0: r_____l
1: _r___l_
2: __r_l__
3: ___x___
4: __l_r__
5: _l___r_
6: l_____r

*/

strictEqual(getLastMoment(18, [12, 16], [4]), 16);

strictEqual(getLastMoment(20, [4, 7, 15], [9, 3, 13, 10]), 17);

/*

    01234567890123456789
00: ___rl__l_rr__r_l_____ 
01: ___lr_l___rr__x______ 
02: __l__x_____rrl_r_____ 
03: _l__l_r____rlr__r____ 
04: l__l___r___lr_r__r___ 
05: __l_____r_l__r_r__r__ 
06: _l_______x____r_r__r_ 
07: l_______l_r____r_r__r 
08: _______l___r____r_r__ 
09: ______l_____r____r_r_ 
10: _____l_______r____r_r 
11: ____l_________r____r_ 
12: ___l___________r____r 
13: __l_____________r____ 
14: _l_______________r___ 
15: l_________________r__ 
16: ___________________r_ 
17: ____________________r 

*/

strictEqual(getLastMoment(20, [9, 3, 13, 10], [4, 7, 15]), 16);

/*

00: ___lr__r_ll__l_r_____ 
01: __l__r__xl__l___r____ 
02: _l____rlrr_l_____r___ 
03: l_____lr_rx_______r__ 
04: _____l__rllr_______r_ 
05: ____l___lrl_r_______r 
06: ___l___l_lr__r_______ 
07: __l___l_l__r__r______ 
08: _l___l_l____r__r_____ 
09: l___l_l______r__r____ 
10: ___l_l________r__r___ 
11: __l_l__________r__r__ 
12: _l_l____________r__r_ 
13: l_l______________r__r 
14: _l________________r__ 
15: l__________________r_ 
16: ____________________r 

*/

strictEqual(getLastMoment(11, [1, 4, 5, 10, 9], [2, 7, 6, 3]), 10);

/*

00:
01:
02:
03:
04:
05:
06:
07:
08:
09:
10:

*/

strictEqual(
  getLastMoment(15, [4, 15, 13, 14, 9, 11, 3], [1, 12, 5, 0, 8, 6, 7]),
  15,
);

/*

 00: rr_llrrrrl_lrlll
 01: _rxl_rrrlrl_lrlr
 02:
 03:
 04:
 05:
 06:
 07:
 08:
 09:
 10:
 11:
 12:
 13:
 14:
 15:



*/
