// 13. Roman to Integer
// https://leetcode.com/problems/roman-to-integer/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 168 ms, faster than 81.22% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 39.8 MB, less than 72.31% of JavaScript online submissions for Roman to Integer.

/**
 * @param {string} s
 * @return {number}
 */
// const romanToInt = s => {
//   let int = 0;

//   for (let i = s.length - 1; 0 <= i; --i) {
//     switch (s[i - 1] + s[i]) {
//       case 'IV':
//         int += 4;
//         --i;
//         continue;
//       case 'IX':
//         int += 9;
//         --i;
//         continue;
//       case 'XL':
//         int += 40;
//         --i;
//         continue;
//       case 'XC':
//         int += 90;
//         --i;
//         continue;
//       case 'CD':
//         int += 400;
//         --i;
//         continue;
//       case 'CM':
//         int += 900;
//         --i;
//         continue;
//     }
//     switch (s[i]) {
//       case 'I':
//         int += 1;
//         continue;
//       case 'V':
//         int += 5;
//         continue;
//       case 'X':
//         int += 10;
//         continue;
//       case 'L':
//         int += 50;
//         continue;
//       case 'C':
//         int += 100;
//         continue;
//       case 'D':
//         int += 500;
//         continue;
//       case 'M':
//         int += 1000;
//         continue;
//     }
//   }

//   return int;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 164 ms, faster than 97.37% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 40.2 MB, less than 35.83% of JavaScript online submissions for Roman to Integer.

/**
 * @param {string} s
 * @return {number}
 */
// const romanToInt = s => {
//   let sum = 0;
//   for (let i = s.length - 1; 0 <= i; i--) {
//     const curr = s[i];
//     const next = s[i - 1]; // Next is right-to-left
//     let twoLetterOperand = 0;
//     let oneLetterOperand = 0;
//     if ('undefined' !== typeof next) {
//       switch (`${next}${curr}`) {
//         case 'IV':
//           twoLetterOperand = 4;
//           break;
//         case 'IX':
//           twoLetterOperand = 9;
//           break;
//         case 'XL':
//           twoLetterOperand = 40;
//           break;
//         case 'XC':
//           twoLetterOperand = 90;
//           break;
//         case 'CD':
//           twoLetterOperand = 400;
//           break;
//         case 'CM':
//           twoLetterOperand = 900;
//           break;
//       }
//     }
//     if (0 === twoLetterOperand) {
//       switch (s[i]) {
//         case 'I':
//           oneLetterOperand = 1;
//           break;
//         case 'V':
//           oneLetterOperand = 5;
//           break;
//         case 'X':
//           oneLetterOperand = 10;
//           break;
//         case 'L':
//           oneLetterOperand = 50;
//           break;
//         case 'C':
//           oneLetterOperand = 100;
//           break;
//         case 'D':
//           oneLetterOperand = 500;
//           break;
//         case 'M':
//           oneLetterOperand = 1000;
//           break;
//       }
//     }
//     sum += oneLetterOperand + twoLetterOperand;
//     if (0 < twoLetterOperand) i--;
//   }
//   return sum;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 168 ms, faster than 81.22% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 39.9 MB, less than 71.34% of JavaScript online submissions for Roman to Integer.

/**
 * @param {string} s
 * @return {number}
 */
// const romanToInt = s => {
//   let sum = 0;
//   for (let i = s.length - 1; 0 <= i; i--) {
//     const curr = s[i];
//     const next = s[i - 1]; // Next is right-to-left
//     switch (`${next}${curr}`) {
//       case 'IV':
//         sum += 4;
//         i--;
//         continue;
//       case 'IX':
//         sum += 9;
//         i--;
//         continue;
//       case 'XL':
//         sum += 40;
//         i--;
//         continue;
//       case 'XC':
//         sum += 90;
//         i--;
//         continue;
//       case 'CD':
//         sum += 400;
//         i--;
//         continue;
//       case 'CM':
//         sum += 900;
//         i--;
//         continue;
//     }
//     switch (s[i]) {
//       case 'I':
//         sum += 1;
//         continue;
//       case 'V':
//         sum += 5;
//         continue;
//       case 'X':
//         sum += 10;
//         continue;
//       case 'L':
//         sum += 50;
//         continue;
//       case 'C':
//         sum += 100;
//         continue;
//       case 'D':
//         sum += 500;
//         continue;
//       case 'M':
//         sum += 1000;
//         continue;
//     }
//   }
//   return sum;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 172 ms, faster than 62.65% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 40.5 MB, less than 25.08% of JavaScript online submissions for Roman to Integer.

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = s => {
  let sum = 0;
  const dict = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  for (let i = s.length - 1; 0 <= i; i--) {
    const curr = s[i];
    const nextAndCurr = s[i - 1] + curr; // Next is right-to-left
    if (dict[nextAndCurr]) {
      sum += dict[nextAndCurr];
      i--;
      continue;
    }
    sum += dict[curr];
  }
  return sum;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'III',
    input: 'III',
    expected: 3,
  },
  {
    name: 'IV',
    input: 'IV',
    expected: 4,
  },
  {
    name: 'IX',
    input: 'IX',
    expected: 9,
  },
  {
    name: 'LVIII',
    input: 'LVIII',
    expected: 58,
  },
  {
    name: 'MCMXCIV',
    input: 'MCMXCIV',
    expected: 1994,
  },
  {
    name: 'MCDLXXVI',
    input: 'MCDLXXVI',
    expected: 1476,
  },
];

tests.forEach(({ name, input, expected }) => {
  const output = romanToInt(input);
  if (expected === output) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
});
