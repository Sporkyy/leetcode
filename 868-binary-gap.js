// 868. Binary Gap
// https://leetcode.com/problems/binary-gap/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 35.42% of JavaScript online submissions
// for Binary Gap.
// Memory Usage: 33.9 MB, less than 14.29% of JavaScript online submissions
// for Binary Gap.

/**
 * @param {number} N
 * @return {number}
 */
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

// Runtime: 60 ms, faster than 100.00% of JavaScript online submissions
// for Binary Gap.
// Memory Usage: 33.8 MB, less than 19.05% of JavaScript online submissions
// for Binary Gap.

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
// for Binary Gap.
// Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions
// for Binary Gap.

/**
 * @param {number} N
 * @return {number}
 */
// const binaryGap = N => {
//   let maxGap = 0;
//   bin = (N >>> 0).toString(2);
//   for (let p1 = 0, p2 = 1; p2 < bin.length; p2++) {
//     if ('1' === bin[p2]) {
//       if (maxGap < p2 - p1) maxGap = p2 - p1;
//       p1 = p2;
//     }
//   }
//   return maxGap;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: 0,
    expected: 0,
  },

  {
    input: 5,
    expected: 2,
  },

  {
    input: 6,
    expected: 1,
  },

  {
    input: 8,
    expected: 0,
  },

  {
    input: 13,
    expected: 2,
  },

  {
    input: 22,
    expected: 2,
  },
];

for ({ input, expected } of tests) {
  const output = binaryGap(input);
  if (expected === output) {
    console.log(`✅ ${input}`);
  } else {
    console.log(`🔴 ${input}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
}
