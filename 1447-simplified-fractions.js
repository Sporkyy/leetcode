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

/**
 * @param {number} n
 * @return {string[]}
 */
const simplifiedFractions = n => {
  const res = [];
  for (let denominator = 2; denominator <= n; denominator++) {
    // console.log(denominator);
    outer: for (let numerator = n - 1; 0 < numerator; numerator--) {
      // console.log(numerator);
      // console.log(`${numerator}/${denominator}`);
      // console.log('✨✨✨✨✨✨✨✨');
      // console.log(1 < numerator && Number.isInteger(denominator / numerator));
      // console.log(`${numerator}/${denominator}`);
      if (denominator <= numerator) continue;
      if (!(numerator % 2) && !(denominator % 2)) continue;
      if (1 < numerator && Number.isInteger(denominator / numerator)) continue;
      for (let i = 3; i < numerator; i += 1) {
        if (!(numerator % i) && !(denominator % i)) continue outer;
      }
      res.push(`${numerator}/${denominator}`);
    }
  }
  // console.log(res);
  return res;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { deepStrictEqual } from 'assert';

// deepStrictEqual(simplifiedFractions(1).sort(), [].sort());

// deepStrictEqual(simplifiedFractions(2), ['1/2']);
// Explanation: "1/2" is the only unique fraction with a denominator
// less-than-or-equal-to 2.

// deepStrictEqual(simplifiedFractions(3).sort(), ['1/2', '1/3', '2/3'].sort());

// deepStrictEqual(
//   simplifiedFractions(4).sort(),
//   ['1/2', '1/3', '1/4', '2/3', '3/4'].sort(),
// );
// Explanation: "2/4" is not a simplified fraction because it can be simplified
// to "1/2".

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
