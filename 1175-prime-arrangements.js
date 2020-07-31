// 1175. Prime Arrangements
// https://leetcode.com/problems/prime-arrangements/

/*

Return the number of permutations of 1 to n so that prime numbers are at prime
indices (1-indexed.)

(Recall that an integer is prime if and only if it is greater than 1, and cannot
be written as a product of two positive integers both smaller than it.)

Since the answer may be large, return the answer modulo 10^9 + 7.

Constraints:
- 1 <= n <= 100

*/

import { ok, strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 92 ms, faster than 27.59% of JavaScript online submissions
// Memory Usage: 38.9 MB, less than 25.00% of JavaScript online submissions

// /**
//  * @param {number} n
//  * @returns {number}
//  */
// const isPrime = n =>
//   1 < n &&
//   new Array(Math.trunc(Math.sqrt(n)) - 1)
//     .fill()
//     .map((_, i) => i + 2)
//     .every(i => n % i !== 0);

// /**
//  * @param {number} n
//  * @returns {number}
//  */
// const factorial = n =>
//   new Array(n)
//     .fill()
//     .map((_, i) => i + 1)
//     .reduce((a, c) => (a *= BigInt(c)), BigInt(1));

// /**
//  * @param {number} n
//  * @return {number}
//  */
// const numPrimeArrangements = n => {
//   let cntPrimes = 0;
//   for (let i = 1; i <= n; i++) if (isPrime(i)) cntPrimes++;
//   const cntNonPrimes = n - cntPrimes;
//   // console.log(cntNonPrimes, cntPrimes);
//   // 2 * 1  = 2
//   // 3 * 2 * 1 = 6
//   // console.log(factorial(cntPrimes));
//   return +(
//     (factorial(cntPrimes) * factorial(cntNonPrimes)) %
//     BigInt(10 ** 9 + 7)
//   ).toString();
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 37.93% of JavaScript online submissions
// Memory Usage: 38 MB, less than 25.00% of JavaScript online submissions

// /**
//  * @param {number} n
//  * @returns {number}
//  */
// const isPrime = n =>
//   1 < n &&
//   new Array(Math.trunc(Math.sqrt(n)) - 1)
//     .fill()
//     .map((_, i) => i + 2)
//     .every(i => n % i !== 0);

// /**
//  * @param {number} n
//  * @returns {number}
//  */
// const factorial = n =>
//   new Array(n)
//     .fill()
//     .map((_, i) => i + 1)
//     .reduce((a, c) => (a *= BigInt(c)), BigInt(1));

// /**
//  * @param {number} n
//  * @return {number}
//  */
// const numPrimeArrangements = n => {
//   const cntPrimes = [...new Array(n + 1).keys()]
//     .slice(1)
//     .filter(pc => isPrime(pc)).length;
//   return Number(
//     (factorial(cntPrimes) * factorial(n - cntPrimes)) % BigInt(10 ** 9 + 7),
//   );
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 37.93% of JavaScript online submissions
// Memory Usage: 39 MB, less than 25.00% of JavaScript online submissions

// /**
//  * @param {number} n
//  * @returns {number}
//  */
// const isPrime = n =>
//   1 < n &&
//   new Array(Math.trunc(Math.sqrt(n)) - 1)
//     .fill()
//     .map((_, i) => i + 2)
//     .every(i => n % i !== 0);

// /**
//  * @param {number} n
//  * @returns {number}
//  */
// const factorial = n =>
//   new Array(n)
//     .fill()
//     .map((_, i) => i + 1)
//     .reduce((a, c) => (a *= BigInt(c)), BigInt(1));

// /**
//  * @param {number} n
//  * @return {number}
//  */
// const numPrimeArrangements = n =>
//   [
//     new Array(n)
//       .fill()
//       .map((_, i) => i + 1)
//       .filter(isPrime).length,
//   ].reduce(
//     (_, p) => Number((factorial(p) * factorial(n - p)) % BigInt(10 ** 9 + 7)),
//     1,
//   );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 96 ms, faster than 17.24% of JavaScript online submissions
// Memory Usage: 39 MB, less than 25.00% of JavaScript online submissions

/**
 * @param {number} n
 * @returns {number}
 */
const isPrime = n =>
  1 < n &&
  new Array(Math.trunc(Math.sqrt(n)) - 1)
    .fill()
    .map((_, i) => i + 2)
    .every(i => n % i !== 0);

/**
 * @param {number} n
 * @returns {number}
 */
const bigFactorial = n =>
  n <= 1 ? BigInt(1) : BigInt(n) * bigFactorial(n - 1);

/**
 * @param {number} n
 * @return {number}
 */
const numPrimeArrangements = (n, cntPrimes = 0, cntNonPrimes = 0) =>
  !n
    ? Number(
        (bigFactorial(cntPrimes) * bigFactorial(cntNonPrimes)) %
          BigInt(10 ** 9 + 7),
      )
    : isPrime(n)
    ? numPrimeArrangements(n - 1, cntPrimes + 1, cntNonPrimes)
    : numPrimeArrangements(n - 1, cntPrimes, cntNonPrimes + 1);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(numPrimeArrangements(5), 12);
// Explanation: For example [1,2,5,4,3] is a valid permutation, but [5,2,3,4,1]
// is not because the prime number 5 is at index 1.

// Example 2:
strictEqual(numPrimeArrangements(100), 682289015);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*

|(\)| P | P |(\)| P |
| 1 | 2 | 3 | 4 | 5 |
| 1 | 2 | 5 | 4 | 3 |
| 1 | 3 | 2 | 4 | 5 |
| 1 | 3 | 5 | 4 | 2 |
| 1 | 5 | 2 | 4 | 3 |
| 1 | 5 | 3 | 4 | 2 |

*/
