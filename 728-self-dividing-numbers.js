// 728. Self Dividing Numbers
// https://leetcode.com/problems/self-dividing-numbers/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
// const selfDividingNumbers = (left, right) => {
//   const a = [];
//   for (let i = left, x = 0; i <= right; i++) {
//     if (i <= 9) {
//       a[x++] = i;
//       continue;
//     }
//     // console.log(i);
//     const digits = `${i}`.split('').map(s => parseInt(s, 10));
//     // console.log(digits);
//     if (-1 !== digits.indexOf(0)) continue;
//     let isSelfDividing = true
//     for (let j = digits.length - 1; 0 <= j; --j) {
//       // console.log(digits[j]);
//       isSelfDividing = isSelfDividing && 0 === i % digits[j];
//     }
//     if (isSelfDividing) {
//       a[x++] = i;
//       continue;
//     }
//   }
//   // console.log(a);
//   return a;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const isSelfDividing = i =>
  String(i)
    .split('')
    .map(s => parseInt(s, 10))
    .reduce((answer, digit) => answer && 0 !== digit && 0 === i % digit, true);

const arraryRange = (start, end) => Array.from(Array(end - start + 1), (x, i) => start + i);

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = (left, right) =>
  arraryRange(left, right).filter(n => isSelfDividing(n));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: {
      left: 1,
      right: 22,
    },
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22],
  },
  {
    name: 'One Number',
    input: {
      left: 1,
      right: 1,
    },
    expected: [1],
  },
  {
    name: '128',
    input: {
      left: 127,
      right: 129,
    },
    expected: [128],
  },
  // {
  //   name: 'From 50 to 100',
  //   input: {
  //     left: 1,
  //     right: 1000
  //   },
  //   expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22, 24, 33, 36, 44, 48, 55, 66, 77, 88, 99, 111, 112, 115, 122, 124, 126, 128, 132, 135, 144, 155, 162, 168, 175, 184, 212, 216, 222, 224, 244, 248, 264, 288, 312, 315, 324, 333, 336, 366, 384, 396, 412, 424, 432, 444, 448, 488, 515, 555, 612, 624, 636, 648, 666, 672, 728, 735, 777, 784, 816, 824, 848, 864, 888, 936, 999]
  // }
];

const doArraysHaveSameElements = (a1, a2) => {
  if (a1.length !== a2.length) return false;
  for (let i = a1.length - 1; 0 <= i; --i) {
    if (a2.indexOf(a1[i]) < 0) return false;
    if (a1.indexOf(a2[i]) < 0) return false;
  }
  return true;
};

tests.forEach(({ name, input: { left, right }, expected }) => {
  const output = selfDividingNumbers(left, right);
  // console.log(output);
  if (doArraysHaveSameElements(expected, output)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Got ${output}, but expected ${expected}`);
  }
});
