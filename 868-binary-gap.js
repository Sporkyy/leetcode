// 868. Binary Gap
// https://leetcode.com/problems/binary-gap/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 35.42% of JavaScript online submissions for Binary Gap.
// Memory Usage: 33.9 MB, less than 14.29% of JavaScript online submissions for Binary Gap.

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

// Runtime: 60 ms, faster than 100.00% of JavaScript online submissions for Binary Gap.
// Memory Usage: 33.8 MB, less than 19.05% of JavaScript online submissions for Binary Gap.

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

const tests = [
  { name: 'Example 1', input: 22, expected: 2 },
  { name: 'Example 2', input: 5, expected: 2 },
  { name: 'Example 3', input: 6, expected: 1 },
  { name: 'Example 4', input: 8, expected: 0 },
  { name: '0', input: 0, expected: 0 },
];

tests.forEach(({ name, input, expected }) => {
  const output = binaryGap(input);
  if (expected === output) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
});
