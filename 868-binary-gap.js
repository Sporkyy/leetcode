// 868. Binary Gap
// https://leetcode.com/problems/binary-gap/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 35.42% of JavaScript online submissions
// Memory Usage: 33.9 MB, less than 14.29% of JavaScript online submissions

// /**
//  * @param {number} N
//  * @return {number}
//  */
// const binaryGap = N => {
//   inBinary = (N >>> 0).toString(2);
//   const gaps = [0];
//   let gap;
//   for (let bit of inBinary) {
//     // The first 1 seen starts the fist gap
//     if ('undefined' === typeof gap && '1' === bit) {
//       gap = 0;
//       // After the first 1 has been seen, each non-1 increases the size of the gap
//     } else if ('undefined' !== typeof gap && '1' !== bit) {
//       gap++;
//       // The next time a 1 is seen, store the gap in the array
//     } else if ('undefined' !== typeof gap && '1' === bit) {
//       gaps.push(gap + 1);
//       gap = 0;
//     }
//   }
//   // console.log(gaps);
//   return Math.max(...gaps);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 48 ms, faster than 95.29% of JavaScript online submissions
// Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number} N
 * @return {number}
 */
const binaryGap = N =>
  Math.max(
    0,
    ...N.toString(2)
      .split('1')
      .slice(1, -1)
      .map(gap => gap.length + 1),
  );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 86.67% of JavaScript online submissions
// Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number} N
//  * @return {number}
//  */
// const binaryGap = N => {
//   let maxGap = 0;
//   const bin = (N >>> 0).toString(2);
//   for (let p1 = 0, p2 = 1; p2 < bin.length; p2++) {
//     if ('1' === bin[p2]) {
//       if (maxGap < p2 - p1) maxGap = p2 - p1;
//       p1 = p2;
//     }
//   }
//   return maxGap;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

strictEqual(binaryGap(0), 0);

strictEqual(binaryGap(5), 2);

strictEqual(binaryGap(6), 1);

strictEqual(binaryGap(8), 0);

strictEqual(binaryGap(13), 2);

strictEqual(binaryGap(22), 2);
