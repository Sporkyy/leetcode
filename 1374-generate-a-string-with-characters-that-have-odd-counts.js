// 1374. Generate a String With Characters That Have Odd Counts
//       https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/

/*

Given an integer n, return a string with n characters such that each character
in such string occurs an odd number of times.

The returned string must contain only lowercase English letters. If there are
multiples valid strings, return any of them.

Constraints:

1 <= n <= 500

*/

import { ok } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 48 ms, faster than 97.33% of JavaScript online submissions
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number} n
 * @return {string}
 */
const generateTheString = n => {
  const stock = new Array(26).fill(0);
  for (let i = 0; i < 26 && 0 < n; i++, n--) stock[i]++;
  stock[25] += n;
  if (0 === stock[25] % 2) {
    stock[24] += stock[25];
    stock[25] = 0;
  }
  return stock
    .map((n, idx) => String.fromCharCode(97 + idx).repeat(n))
    .join('');
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

console.log(generateTheString(1));
console.log(generateTheString(2));
console.log(generateTheString(3));
console.log(generateTheString(4));
console.log(generateTheString(5));
console.log(generateTheString(26));
console.log(generateTheString(27));
console.log(generateTheString(28));
console.log(generateTheString(500));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// // Example 1:
// ok(generateTheString(4));
// // Explanation: "pppz" is a valid string since the character 'p' occurs three times and the character 'z' occurs once. Note that there are many other valid strings such as "ohhh" and "love".

// // Example 2:
// ok(generateTheString(2));
// // Explanation: "xy" is a valid string since the characters 'x' and 'y' occur once. Note that there are many other valid strings such as "ag" and "ur".

// // Example 3:
// ok(generateTheString(7));
