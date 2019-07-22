// 476. Number Complement
// https://leetcode.com/problems/number-complement/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 50.94% of JavaScript online submissions
// for Number Complement.
// Memory Usage: 34 MB, less than 17.02% of JavaScript online submissions
// for Number Complement.

// const toBinary = n => {
//   let b = '';
//   do {
//     b = (n % 2) + b;
//     n = parseInt(n / 2, 10);
//   } while (0 < n);
//   return b;
// };

// const flipBits = b =>
//   b
//     .split('')
//     .map(d => ('0' === d ? '1' : '0'))
//     .join('');

// const toDecimal = n =>
//   n
//     .split('')
//     .reverse()
//     .reduce((acc, curr, i) => (acc += '1' === curr ? Math.pow(2, i) : 0), 0);

// /**
//  * @param {number} num
//  * @return {number}
//  */
// const findComplement = num => {
//   // console.log(num);
//   const b = toBinary(num);
//   // console.log(b);
//   const f = flipBits(b);
//   // console.log(f);
//   const c = toDecimal(f);
//   // console.log(c);
//   return c;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 44 ms, faster than 98.82% of JavaScript online submissions
// for Number Complement.
// Memory Usage: 33.8 MB, less than 44.68% of JavaScript online submissions
// for Number Complement.

/**
 * @param {number} num
 * @return {number}
 */
const findComplement = num =>
  parseInt(
    num
      .toString(2)
      .split('')
      .map(b => ('0' === b ? 1 : 0))
      .join(''),
    2,
  );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: 5,
    expected: 2,
  },
  {
    input: 1,
    expected: 0,
  },
  {
    input: 2,
    expected: 1,
  },
];

for (let { input, expected } of tests) {
  const result = findComplement(input);
  if (result === expected) {
    console.log(`✅ ${input}`);
  } else {
    console.log(`🔴 ${input}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
}
