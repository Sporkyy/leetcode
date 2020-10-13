// 1614. Maximum Nesting Depth of the Parentheses
// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

/*

A string is a valid parentheses string (denoted VPS) if it meets one of the
following:

- It is an empty string `""`, or a single character not equal to `"("` or `")"`,
- It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are
  VPS's, or
- It can be written as (A), where A is a VPS.

We can similarly define the nesting depth depth(S) of any VPS S as follows:

- `depth("") = 0`
- `depth(A + B) = max(depth(A), depth(B))`, where A and B are VPS's
- `depth("(" + A + ")") = 1 + depth(A)`, where A is a VPS.

For example, `""`, `"()()"`, and `"()(()())"` are VPS's (with nesting depths 0,
1, and 2), and `")("` and `"(()"` are not VPS's.

Given a VPS represented as string s, return the nesting depth of s.

Constraints:

- 1 <= s.length <= 100
- s consists of digits 0-9 and characters '+', '-', '*', '/', '(', and ')'.
- It is guaranteed that parentheses expression s is a VPS.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 124 ms, faster than 5.26% of JavaScript online submissions
// Memory Usage: 45.7 MB, less than 57.02% of JavaScript online submissions

/**
 * @param {string} s
 * @return {number}
 */
const maxDepth = s => {
  const a = new Array(50).fill().map(_ => []);
  let max = 0;
  console.log(s);
  for (let i = 0, d = 0; i < s.length; i++) {
    if ('(' === s[i]) d++;
    if (')' === s[i]) d--;
    const n = Number(s[i]);
    if (n) a[d].push(n);
    max = Math.max(max, d);
  }
  console.log(a);
  console.log(max);
  // return Math.max(...a[max]);
  return max;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(maxDepth('(1+(2*3)+((8)/4))+1'), 3);
// Explanation: Digit 8 is inside of 3 nested parentheses in the string.

// Example 2:
strictEqual(maxDepth('(1)+((2))+(((3)))'), 3);

// Example 3:
strictEqual(maxDepth('1+(2*3)/(2-1)'), 1);

// Example 4:
strictEqual(maxDepth('1'), 0);
