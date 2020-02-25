// 412. Fizz Buzz
// https://leetcode.com/problems/fizz-buzz/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 90.08% of JavaScript online submissions
// Memory Usage: 37.1 MB, less than 90.63% of JavaScript online submissions

// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// const fizzBuzz = n => {
//   const result = new Array(n);
//   for (let i = 1; i <= n; i++) {
//     if (0 === i % 3 && 0 === i % 5) {
//       result[i - 1] = 'FizzBuzz';
//     } else if (0 === i % 5) {
//       result[i - 1] = 'Buzz';
//     } else if (0 === i % 3) {
//       result[i - 1] = 'Fizz';
//     } else {
//       result[i - 1] = '' + i;
//     }
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 24.56% of JavaScript online submissions
// Memory Usage: 37.1 MB, less than 89.06% of JavaScript online submissions

// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// const fizzBuzz = n => {
//   const result = new Array(n);
//   while (0 < n) {
//     result[n - 1] = (0 === n % 3 ? 'Fizz' : '') + (0 === n % 5 ? 'Buzz' : '');
//     if (0 === result[n - 1].length) result[n - 1] = `${n}`;
//     --n;
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 24.56% of JavaScript online submissions
// Memory Usage: 37.3 MB, less than 70.31% of JavaScript online submissions

// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// const fizzBuzz = n => {
//   const result = new Array(n).fill().map(e => '');
//   while (0 < n) {
//     if (0 === n % 3) {
//       result[n - 1] += 'Fizz';
//     }
//     if (0 === n % 5) {
//       result[n - 1] += 'Buzz';
//     }
//     if (0 === result[n - 1].length) {
//       result[n - 1] += n;
//     }
//     --n;
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 90.08% of JavaScript online submissions
// Memory Usage: 37.6 MB, less than 5.47% of JavaScript online submissions

// const answerKey = new Array(10001);
// for (let i = 1; i < 10000; i++) {
//   if (0 === i % 15) {
//     answerKey[i] = 'FizzBuzz';
//   } else if (0 === i % 5) {
//     answerKey[i] = 'Buzz';
//   } else if (0 === i % 3) {
//     answerKey[i] = 'Fizz';
//   } else {
//     answerKey[i] = `${i}`;
//   }
// }

// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// const fizzBuzz = n => answerKey.slice(1, n + 1);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 92 ms, faster than 9.87% of JavaScript online submissions
// Memory Usage: 37 MB, less than 91.41% of JavaScript online submissions

// const key = [
//   'FizzBuzz', // ... 0 (15)
//   undefined, // .... 1
//   undefined, // .... 2
//   'Fizz', // ....... 3
//   undefined, // .... 4
//   'Buzz', // ....... 5
//   'Fizz', // ....... 6
//   undefined, // .... 7
//   undefined, // .... 8
//   'Fizz', // ....... 9
//   'Buzz', // ...... 10
//   undefined, // ... 11
//   'Fizz', // ...... 12
//   undefined, // ... 13
//   undefined, // ... 14
// ];

// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// const fizzBuzz = n => {
//   const result = new Array(n);
//   for (let i = 1; i <= n; i++) {
//     result[i - 1] = key[i % 15] || `${i}`;
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 90.08% of JavaScript online submissions
// Memory Usage: 37.2 MB, less than 82.81% of JavaScript online submissions

// const key = {
//   0: 'FizzBuzz',
//   3: 'Fizz',
//   5: 'Buzz',
//   6: 'Fizz',
//   9: 'Fizz',
//   10: 'Buzz',
//   12: 'Fizz',
// };

// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// const fizzBuzz = n => new Array(n).fill().map((e, i) => key[(1 + i) % 15] || '' + (i + 1));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 90.08% of JavaScript online submissions
// Memory Usage: 37.3 MB, less than 78.13% of JavaScript online submissions

// const key = {
//   0: 'FizzBuzz',
//   3: 'Fizz',
//   5: 'Buzz',
//   6: 'Fizz',
//   9: 'Fizz',
//   10: 'Buzz',
//   12: 'Fizz',
// };

// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// const fizzBuzz = n => {
//   const result = new Array(n);
//   while (0 < n) {
//     result[n - 1] = key[n % 15] || '' + n;
//     --n;
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 37 MB, less than 91.41% of JavaScript online submissions

// const key = {
//   3: 'Fizz',
//   5: 'Buzz',
//   6: 'Fizz',
//   9: 'Fizz',
//   10: 'Buzz',
//   12: 'Fizz',
//   15: 'FizzBuzz',
// };

// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// const fizzBuzz = n => {
//   const result = new Array(n);
//   let curr = 1;
//   let iter = 1;
//   while (iter <= n) {
//     if (15 < curr) curr = 1;
//     result[iter - 1] = key[curr] || '' + iter;
//     curr++;
//     iter++;
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 93.91% of JavaScript online submissions
// Memory Usage: 37.3 MB, less than 70.00% of JavaScript online submissions

/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = n =>
  new Array(n + 1)
    .fill('Fizz')
    .map((v, i) =>
      0 == i % 15
        ? 'FizzBuzz'
        : 0 === i % 5
        ? 'Buzz'
        : 0 !== i % 3
        ? `${i}`
        : v,
    )
    .slice(1);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

deepStrictEqual(fizzBuzz(15), [
  '1',
  '2',
  'Fizz',
  '4',
  'Buzz',
  'Fizz',
  '7',
  '8',
  'Fizz',
  'Buzz',
  '11',
  'Fizz',
  '13',
  '14',
  'FizzBuzz',
]);

deepStrictEqual(fizzBuzz(1), ['1']);

deepStrictEqual(fizzBuzz(3), ['1', '2', 'Fizz']);

deepStrictEqual(fizzBuzz(16), [
  '1',
  '2',
  'Fizz',
  '4',
  'Buzz',
  'Fizz',
  '7',
  '8',
  'Fizz',
  'Buzz',
  '11',
  'Fizz',
  '13',
  '14',
  'FizzBuzz',
  '16',
]);
