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

// Runtime: 172 ms, faster than 62.65% of JavaScript online submissions
// for Roman to Integer.
// Memory Usage: 40.5 MB, less than 25.08% of JavaScript online submissions
// for Roman to Integer.

/**
 * @param {string} s
 * @return {number}
 */
// const romanToInt = s => {
//   let sum = 0;
//   const dict = {
//     I: 1,
//     IV: 4,
//     V: 5,
//     IX: 9,
//     X: 10,
//     XL: 40,
//     L: 50,
//     XC: 90,
//     C: 100,
//     CD: 400,
//     D: 500,
//     CM: 900,
//     M: 1000,
//   };
//   for (let i = s.length - 1; 0 <= i; i--) {
//     const curr = s[i];
//     const nextAndCurr = s[i - 1] + curr; // Next is right-to-left
//     if (dict[nextAndCurr]) {
//       sum += dict[nextAndCurr];
//       i--;
//       continue;
//     }
//     sum += dict[curr];
//   }
//   return sum;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 236 ms, faster than 6.20% of JavaScript online submissions
// for Roman to Integer.
// Memory Usage: 45.6 MB, less than 5.03% of JavaScript online submissions
// for Roman to Integer.

/**
 * @param {string} s
 * @return {number}
 */
// const romanToInt = s => {
//   const d = {
//     IV: 4,
//     IX: 9,
//     XL: 40,
//     XC: 90,
//     CD: 400,
//     CM: 900,
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   for (k in d) s = s.replace(new RegExp(k, 'g'), `${d[k]}+`);
//   return eval(s + 0);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 152 ms, faster than 83.04% of JavaScript online submissions
// for Roman to Integer.
// Memory Usage: 41.1 MB, less than 16.82% of JavaScript online submissions
// for Roman to Integer.

/**
 * @param {string} s
 * @return {number}
 */
// const romanToInt = s => {
//   const dict = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let sum = 0;
//   for (let i = 0; i < s.length; i++) {
//     [curr, next] = [dict[s[i]], dict[s[i + 1]]];
//     sum += (curr < next ? -1 : 1) * curr;
//   }
//   return sum;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 152 ms, faster than 82.13% of JavaScript online submissions
// for Roman to Integer.
// Memory Usage: 40.8 MB, less than 19.64% of JavaScript online submissions
// for Roman to Integer.

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = s => {
  const dict = {
    I: next => (1 < next ? -1 : 1),
    V: next => (5 < next ? -5 : 5),
    X: next => (10 < next ? -10 : 10),
    L: next => (50 < next ? -50 : 50),
    C: next => (100 < next ? -100 : 100),
    D: next => (500 < next ? -500 : 500),
    M: next => (1000 < next ? -1000 : 1000),
    undefined: () => 0,
  };
  return s.split('').reduce((a, c, i) => a + dict[c](dict[s[i + 1]]()), 0);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: 'III',
    expected: 3,
  },
  {
    input: 'IV',
    expected: 4,
  },
  {
    input: 'IX',
    expected: 9,
  },
  {
    input: 'LVIII',
    expected: 58,
  },
  {
    input: 'MCMXCIV',
    expected: 1994,
  },
  {
    input: 'MCDLXXVI',
    expected: 1476,
  },
  {
    input: 'MMMCDXC',
    expected: 3490,
  },
];

tests.forEach(({ input, expected }) => {
  const output = romanToInt(input);
  if (expected === output) {
    console.log(`✅ ${input}`);
  } else {
    console.log(`🔴 ${input}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
});
