// 461. Hamming Distance
// https://leetcode.com/problems/hamming-distance/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 22.95% of JavaScript online submissions
// for Hamming Distance.
// Memory Usage: 33.8 MB, less than 85.26% of JavaScript online submissions
// for Hamming Distance.

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// const hammingDistance = (x, y) => {
//   const bin = (x ^ y).toString(2);
//   let distance = 0;
//   for (let i = bin.length - 1; 0 <= i; i--) if ('1' === bin[i]) distance++;
//   return distance;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 84.85% of JavaScript online submissions
// for Hamming Distance.
// Memory Usage: 33.8 MB, less than 67.73% of JavaScript online submissions
// for Hamming Distance.

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// const hammingDistance = (x, y) =>
//   (x ^ y)
//     .toString(2)
//     .split('')
//     .reduce((acc, curr) => acc + ('1' === curr ? 1 : 0), 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 84.85% of JavaScript online submissions
// for Hamming Distance.
// Memory Usage: 33.7 MB, less than 97.21% of JavaScript online submissions
// for Hamming Distance.

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// const hammingDistance = (x, y) => (x ^ y).toString(2).replace(/0/g, '').length;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 84.85% of JavaScript online submissions
// for Hamming Distance.
// Memory Usage: 33.8 MB, less than 80.88% of JavaScript online submissions
// for Hamming Distance.

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// const hammingDistance = (x, y) =>
//   (x ^ y)
//     .toString(2)
//     .split('0')
//     .join('').length;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 48 ms, faster than 95.56% of JavaScript online submissions
// for Hamming Distance.
// Memory Usage: 33.9 MB, less than 45.42% of JavaScript online submissions
// for Hamming Distance.

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// const hammingDistance = (x, y) =>
//   (x ^ y)
//     .toString(2)
//     .split('')
//     .reduce((acc, curr) => ('1' === curr ? acc + 1 : acc), 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 44 ms, faster than 98.70% of JavaScript online submissions
// for Hamming Distance.
// Memory Usage: 33.9 MB, less than 31.87% of JavaScript online submissions
// for Hamming Distance.

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) =>
  (x ^ y)
    .toString(2)
    .split('')
    .reduce((acc, curr) => acc + parseInt(curr, 10), 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: {
      x: 1,
      y: 4,
    },
    expected: 2,
  },

  {
    input: {
      x: 93,
      y: 73,
    },
    expected: 2,
  },
];

tests.forEach(({ input: { x, y }, expected }) => {
  const result = hammingDistance(x, y);
  const name = `${x}, ${y}`;
  if (expected === result) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected ${expected} but got ${result}`);
  }
});
