// 1021. Remove Outermost Parentheses
// https://leetcode.com/problems/remove-outermost-parentheses/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 72.50% of JavaScript online submissions
// Memory Usage: 36.4 MB, less than 31.58% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {string}
//  */
// const removeOuterParentheses = S => {
//   let result = '';
//   for (let [i, level] = [0, 0]; i < S.length; i++) {
//     const char = S[i];
//     if ('(' === char) level++;
//     if (1 < level) result += char;
//     if (')' === char) level--;
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 24.86% of JavaScript online submissions
// Memory Usage: 36.3 MB, less than 42.10% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {string}
//  */
// const removeOuterParentheses = S => {
//   let result = '';
//   for (let [i, level] = [0, 0]; i < S.length; i++) {
//     if ('(' === S[i]) level++;
//     if (1 < level) result += S[i];
//     if (')' === S[i]) level--;
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 51.99% of JavaScript online submissions
// Memory Usage: 35.5 MB, less than 73.68% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {string}
//  */
// const removeOuterParentheses = S => {
//   let result = '';
//   for (let [t, h, d] = [0, 1, 1]; h < S.length; h++) {
//     if (S[h] === '(') d++;
//     else if (S[h] === ')') d--;
//     if (0 === d) [result, t] = [result + S.slice(t + 1, h), h + 1];
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 86.77% of JavaScript online submissions
// Memory Usage: 35.4 MB, less than 73.68% of JavaScript online submissions

// /**
//  * @param {string} S
//  * @return {string}
//  */
// const removeOuterParentheses = S => {
//   let result = '';
//   for (let [begin, end, depth] = [0, 1, 1]; end < S.length; end++) {
//     if (S[end] === '(') depth++;
//     else if (S[end] === ')') depth--;
//     if (0 === depth) {
//       result += S.slice(begin + 1, end);
//       begin = end + 1;
//     }
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 70.75% of JavaScript online submissions
// Memory Usage: 38.5 MB, less than 11.11% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @param {string} [res='']
//  * @param {number} [depth=0]
//  */
// const removeOuterParentheses = (s, res = '', depth = 0) =>
//   0 === s.length
//     ? res
//     : removeOuterParentheses(
//         s.slice(1),
//         0 === depth || (1 === depth && ')' === s[0]) ? res : res + s[0],
//         '(' === s[0] ? depth + 1 : depth - 1,
//       );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 20.33% of JavaScript online submissions
// Memory Usage: 38.4 MB, less than 11.11% of JavaScript online submissions

/**
 * @param {string} s
 * @param {string} [res='']
 * @param {number} [depth=0]
 */
const removeOuterParentheses = (s, res = '', depth = 0) =>
  0 === s.length
    ? res
    : removeOuterParentheses(
        s.slice(1),
        res + (0 === depth || (1 === depth && ')' === s[0]) ? '' : s[0]),
        depth + ('(' === s[0] ? 1 : -1),
      );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(removeOuterParentheses('(()())(())'), '()()()');

strictEqual(removeOuterParentheses('(()())(())(()(()))'), '()()()()(())');

strictEqual(removeOuterParentheses('()()'), '');

strictEqual(removeOuterParentheses('()'), '');

strictEqual(removeOuterParentheses('((((()))))'), '(((())))');
