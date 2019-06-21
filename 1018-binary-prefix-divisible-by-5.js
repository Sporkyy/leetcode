// 1018. Binary Prefix Divisible By 5
// https://leetcode.com/problems/binary-prefix-divisible-by-5/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Limited by 53-big numbers

/**
 * @param {number[]} A
 * @return {boolean[]}
 */
// var prefixesDivBy5 = function(A) {
//   const s = A.join('');
//   const d = new Array(A.length);
//   const b2d = b => parseInt(b, 2);
//   const isM5 = n => 0 === n % 5;
//   for (let i = 0, a = ''; i < s.length; i++) d[i] = isM5(b2d((a += s[i])));
//   return d;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Works in all reasonable cases

/**
 * @param {number[]} A
 * @return {boolean[]}
 */
const prefixesDivBy5 = A =>
  A.map((n, i) => BigInt(0) === BigInt(`0b${A.slice(0, i).join('')}${n}`) % BigInt(5));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: [0, 1, 1],
    expected: [true, false, false],
  },
  {
    input: [1, 1, 1],
    expected: [false, false, false],
  },
  {
    input: [0, 1, 1, 1, 1, 1],
    expected: [true, false, false, false, true, false],
  },
  {
    input: [1, 1, 1, 0, 1],
    expected: [false, false, false, false, false],
  },
  {
    input: [
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
    ],
    expected: [
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      true,
      false,
      false,
      false,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      true,
      true,
      false,
      false,
      false,
    ],
  },
];

const areArraysEqual = (a, b) => a.length === b.length && a.join() === b.join();

tests.forEach(({ input, expected }) => {
  const output = prefixesDivBy5(input);
  if (areArraysEqual(expected, output)) {
    console.log(`✅ ${input.join(', ')}`);
  } else {
    console.log(`🔴 ${input.join(', ')}`);
    console.log(`Expected "[${expected.join(', ')}]", but got "[${output.join(', ')}]"`);
  }
});
