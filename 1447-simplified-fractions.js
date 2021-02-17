// 1447. Simplified Fractions
// https://leetcode.com/problems/simplified-fractions/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

/*

Given an integer n, return a list of all simplified fractions between 0 and 1
(exclusive) such that the denominator is less-than-or-equal-to n. The fractions
can be in any order.

## Constraints

- 1 <= n <= 100

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 120 ms, faster than 91.43% of JavaScript online submissions
// Memory Usage: 45.5 MB, less than 45.71% of JavaScript online submissions

// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// const simplifiedFractions = n => {
//   const res = [];
//   for (let denominator = 2; denominator <= n; denominator++) {
//     // console.log(denominator);
//     outer: for (let numerator = n - 1; 0 < numerator; numerator--) {
//       // console.log(numerator);
//       // console.log(`${numerator}/${denominator}`);
//       // console.log('✨✨✨✨✨✨✨✨');
//       // console.log(1 < numerator && Number.isInteger(denominator / numerator));
//       // console.log(`${numerator}/${denominator}`);
//       if (denominator <= numerator) continue;
//       if (!(numerator % 2) && !(denominator % 2)) continue;
//       if (1 < numerator && Number.isInteger(denominator / numerator)) continue;
//       for (let i = 3; i < numerator; i += 1) {
//         if (!(numerator % i) && !(denominator % i)) continue outer;
//       }
//       res.push(`${numerator}/${denominator}`);
//     }
//   }
//   // console.log(res);
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 116 ms, faster than 94.29% of JavaScript online submissions
// Memory Usage: 44.6 MB, less than 85.71% of JavaScript online submissions

/**
 * @param {number} n
 * @return {string[]}
 */
const simplifiedFractions = n => {
  const gcd = (a, b) => (!b ? a : gcd(b, a % b));
  const res = [];
  for (let de = 2; de <= n; de++)
    for (let nu = 1; nu < de; nu += 1 + !(de % 2))
      if (1 === gcd(nu, de)) res.push(`${nu}/${de}`);
  return res;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { deepStrictEqual } from 'assert';

deepStrictEqual(simplifiedFractions(1).sort(), [].sort());

deepStrictEqual(simplifiedFractions(2), ['1/2']);

deepStrictEqual(simplifiedFractions(3).sort(), ['1/2', '1/3', '2/3'].sort());

deepStrictEqual(
  simplifiedFractions(4).sort(),
  ['1/2', '1/3', '1/4', '2/3', '3/4'].sort(),
);

deepStrictEqual(
  simplifiedFractions(6).sort(),
  [
    '1/2',
    '1/3',
    '1/4',
    '1/5',
    '1/6',
    '2/3',
    '2/5',
    '3/4',
    '3/5',
    '4/5',
    '5/6',
  ].sort(),
);

/*

3 ** 6 = 729
6 ** 3 = 216

*/

deepStrictEqual(
  simplifiedFractions(9).sort(),
  [
    '1/2',
    '1/3',
    '1/4',
    '1/5',
    '1/6',
    '1/7',
    '1/8',
    '1/9',
    '2/3',
    '2/5',
    '2/7',
    '2/9',
    '3/4',
    '3/5',
    '3/7',
    '3/8',
    '4/5',
    '4/7',
    '4/9',
    '5/6',
    '5/7',
    '5/8',
    '5/9',
    '6/7',
    '7/8',
    '7/9',
    '8/9',
  ].sort(),
);

/*

3 / 8  = 8 % 3 = 2

*/

deepStrictEqual(
  simplifiedFractions(10).sort(),
  [
    '1/2',
    '1/3',
    '1/4',
    '1/5',
    '1/6',
    '1/7',
    '1/8',
    '1/9',
    '1/10',
    '2/3',
    '2/5',
    '2/7',
    '2/9',
    '3/4',
    '3/5',
    '3/7',
    '3/8',
    '3/10',
    '4/5',
    '4/7',
    '4/9',
    '5/6',
    '5/7',
    '5/8',
    '5/9',
    '6/7',
    '7/8',
    '7/9',
    '7/10',
    '8/9',
    '9/10',
  ].sort(),
);

/*

3/9
6/9
9/9

2/10
4/10
5/10
6/10
8/10
10/10

|   1/3 | 1/3 |   3 |
|   2/3 | 2/3 |   6 |
|  3/15 | 1/5 |   5 |
|  5/15 | 1/3 |  75 |
| 10/15 | 2/3 | 150 |

*/

deepStrictEqual(
  simplifiedFractions(12).sort(),
  [
    '1/2',
    '1/3',
    '1/4',
    '1/5',
    '1/6',
    '1/7',
    '1/8',
    '1/9',
    '1/10',
    '1/11',
    '1/12',
    '2/3',
    '2/5',
    '2/7',
    '2/9',
    '2/11',
    '3/4',
    '3/5',
    '3/7',
    '3/8',
    '3/10',
    '3/11',
    '4/5',
    '4/7',
    '4/9',
    '4/11',
    '5/6',
    '5/7',
    '5/8',
    '5/9',
    '5/11',
    '5/12',
    '6/7',
    '6/11',
    '7/8',
    '7/9',
    '7/10',
    '7/11',
    '7/12',
    '8/9',
    '8/11',
    '9/10',
    '9/11',
    '10/11',
    '11/12',
  ].sort(),
);
