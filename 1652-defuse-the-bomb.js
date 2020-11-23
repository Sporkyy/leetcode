// 1652. Defuse the Bomb
// https://leetcode.com/problems/defuse-the-bomb/

/*

You have a bomb to defuse, and your time is running out! Your informer will
provide you with a **circular** array code of length of n and a key k.

To decrypt the code, you must replace every number. All the numbers are replaced
**simultaneously**.

- If `k > 0`, replace the `ith` number with the sum of the **next** `k` numbers.
- If `k < 0`, replace the `ith` number with the sum of the **previous** `k`
  numbers.
- If `k == 0`, replace the `ith` number with `0`.

As code is circular, the next element of code[n-1] is code[0], and the previous
element of code[0] is code[n-1].

Given the **circular** array code and an integer key k, return the decrypted
code to defuse the bomb!

## Constraints

- `n == code.length`
- `1 <= n <= 100`
- `1 <= code[i] <= 100`
- `-(n - 1) <= k <= n - 1`

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 92.31% of JavaScript online submissions
// Memory Usage: 38.6 MB, less than 82.05% of JavaScript online submissions

// /**
//  * @param {number[]} code
//  * @param {number} k
//  * @return {number[]}
//  */
// const decrypt = (code, k, rev = false) => {
//   // console.log(code, k);
//   if (k < 0) return decrypt(code.reverse(), Math.abs(k), true);
//   // console.log(code, k);
//   const res = new Array(code.length);
//   for (let i = 0, x = k, sum = 0; i < code.length; i++, x = k, sum = 0) {
//     while (x--) sum += code[(i + x) % code.length]; //
//     // console.log(sum);
//     res[(i + code.length - 1) % code.length] = sum;
//   }
//   // console.log(res);
//   if (rev) res.reverse();
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 84 ms, faster than 58.48% of JavaScript online submissions
// Memory Usage: 38.6 MB, less than 69.01% of JavaScript online submissions

// /**
//  * @param {number[]} code
//  * @param {number} k
//  * @return {number[]}
//  */
// const decrypt = (code, k) => {
//   const [res, rev] = [new Array(code.length), k < 0];
//   if (rev) [code, k] = [code.reverse(), Math.abs(k)];
//   for (let i = 0, sum = 0; i < code.length + k; i++) {
//     sum += code[i % code.length];
//     if (i < k) continue;
//     sum -= code[i - k];
//     res[i - k] = sum;
//   }
//   return rev ? res.reverse() : res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 91.81% of JavaScript online submissions
// Memory Usage: 38.8 MB, less than 52.63% of JavaScript online submissions

// /**
//  * @param {number[]} code
//  * @param {number} k
//  * @return {number[]}
//  */
// const decrypt = (code, k) => {
//   if (k < 0) return decrypt(code.reverse(), -k).reverse();
//   const res = new Array(code.length);
//   for (let i = 0, sum = 0; i < code.length + k; i++) {
//     sum += code[i % code.length];
//     if (i < k) continue;
//     sum -= code[i - k];
//     res[i - k] = sum;
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 80 ms, faster than 81.87% of JavaScript online submissions
// Memory Usage: 38.9 MB, less than 46.20% of JavaScript online submissions

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
const decrypt = (code, k) => {
  if (k < 0) return decrypt(code.reverse(), -k).reverse();
  const res = new Array(code.length);
  for (let i = 0, sum = 0; i < code.length + k; i++) {
    sum += code[i % code.length];
    if (i < k) continue;
    res[i - k] = sum -= code[i - k];
  }
  return res;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { deepStrictEqual } from 'assert';

// Example 1:
deepStrictEqual(decrypt([5, 7, 1, 4], 3), [12, 10, 16, 13]);
// Explanation: Each number is replaced by the sum of the next 3 numbers. The
// decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap
// around.

// Example 2:
deepStrictEqual(decrypt([1, 2, 3, 4], 0), [0, 0, 0, 0]);
// Explanation: When k is zero, the numbers are replaced by 0.

// Example 3:
deepStrictEqual(decrypt([2, 4, 9, 3], -2), [12, 5, 6, 13]);
// Explanation: The decrypted code is [3+9, 2+3, 4+2, 9+4]. Notice that the
// numbers wrap around again. If k is negative, the sum is of the previous
// numbers.

deepStrictEqual(decrypt([5, 2, 2, 3, 1], 3), [7, 6, 9, 8, 9]);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

/*

|   | 5 | 2 | 2 | 3 | 1 |
| 0 | s | a | a | a |   |
| 1 |   | s | a | a | a |
| 2 | a |   | s | a | a |
| 3 | a | a |   | s | a |
| 4 | a | a | a |   | s |

|   | 2 | 4 | 9 | 3 |
| 0 | s |   | a | a |
| 1 | a | s |   | a |
| 2 | a | a | s |   |
| 3 |   | a | a | s |

*/
