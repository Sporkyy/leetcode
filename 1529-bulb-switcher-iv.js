// 1529. Bulb Switcher IV
// https://leetcode.com/problems/bulb-switcher-iv/

/*

There is a room with n bulbs, numbered from 0 to n-1, arranged in a row from
left to right. Initially all the bulbs are turned off.

Your task is to obtain the configuration represented by target where target[i]
is '1' if the i-th bulb is turned on and is '0' if it is turned off.

You have a switch to flip the state of the bulb, a flip operation is defined as
follows:

Choose any bulb (index i) of your current configuration. Flip each bulb from
index i to n-1. When any bulb is flipped it means that if it is 0 it changes to
1 and if it is 1 it changes to 0.

Return the minimum number of flips required to form target.

Constraints:
- 1 <= target.length <= 10^5
- target[i] == '0' or target[i] == '1'

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 92 ms, faster than 82.76% of JavaScript online submissions
// Memory Usage: 44.2 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} target
//  * @return {number}
//  */
// const minFlips = target => {
//   // console.log(target.replace(/^0*/, '').match(/(\d)(?!\1)/g).length);
//   return (target.replace(/^0*/, '').match(/(\d)(?!\1)/g) || []).length;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 136 ms, faster than 21.55% of JavaScript online submissions
// Memory Usage: 43.3 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} target
 * @return {number}
 */
const minFlips = t => (t.replace(/^0*/, '').match(/(\d)(?!\1)/g) || []).length;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(minFlips('10111'), 3);
// Explanation: Initial configuration "00000".
// flip from the third bulb:  "00000" -> "00111"
// flip from the first bulb:  "00111" -> "11000"
// flip from the second bulb:  "11000" -> "10111"
// We need at least 3 flip operations to form target.

// Example 2:
strictEqual(minFlips('101'), 3);
// Explanation: "000" -> "111" -> "100" -> "101".

// Example 3:
strictEqual(minFlips('00000'), 0);

// Example 4:
strictEqual(minFlips('001011101'), 5);

/*

000000000
001111111
001000000
001011111
001011101

001011101

*/
