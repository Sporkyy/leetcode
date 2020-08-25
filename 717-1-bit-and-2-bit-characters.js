// 717. 1-bit and 2-bit Characters
// https://leetcode.com/problems/1-bit-and-2-bit-characters/

/*

We have two special characters. The first character can be represented by one
bit 0. The second character can be represented by two bits (10 or 11).

Now given a string represented by several bits. Return whether the last
character must be a one-bit character or not. The given string will always end
with a zero.

Note:
- 1 <= len(bits) <= 1000.
- bits[i] is always 0 or 1.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {number[]} bits
//  * @return {boolean}
//  */
// const isOneBitCharacter = ({ length: l }) => l % 2;

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {number[]} bits
//  * @return {boolean}
//  */
// const isOneBitCharacter = bits => {
//   let [cntOneBit, cntTwoBit] = [0, 0];
//   for (let i = bits.length - 1; 0 <= i; i--) {
//     if (1 === bits[i] || 1 === bits[i - 1]) {
//       cntTwoBit++;
//       i--;
//     } else cntOneBit++;
//   }
//   console.log(cntOneBit, cntTwoBit);
//   return cntOneBit + cntTwoBit;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {number[]} bits
//  * @return {boolean}
//  */
// const isOneBitCharacter = bits => '00' === `${bits.pop()}${bits.pop()}`;

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 100 ms, faster than 12.63% of JavaScript online submissions
// Memory Usage: 38.6 MB, less than 7.90% of JavaScript online submissions

/**
 * @param {number[]} bits
 * @return {boolean}
 */
const isOneBitCharacter = bits => {
  let i = 0;
  let last;
  while (i < bits.length)
    if (/1[01]/.test(`${bits[i]}${bits[i + 1]}`)) {
      i += 2;
      last = false;
    } else {
      i += 1;
      last = true;
    }
  // console.log(i);
  // console.log(last);
  return last;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { ok } from 'assert';

// Example 1:
ok(isOneBitCharacter([1, 0, 0]));
// ## Explanation
// The only way to decode it is two-bit character and one-bit character. So the
// last character is one-bit character.

// Example 2:
ok(!isOneBitCharacter([1, 1, 1, 0]));
// ## Explanation
// The only way to decode it is two-bit character and two-bit character. So the
// last character is NOT one-bit character.

ok(isOneBitCharacter([0, 0]));

ok(isOneBitCharacter([0]));

ok(isOneBitCharacter([1, 1, 0]));
