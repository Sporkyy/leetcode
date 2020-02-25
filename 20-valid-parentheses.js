// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/

import { ok } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 87.22% of JavaScript online submissions
// Memory Usage: 33.9 MB, less than 67.84% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {
//   const values = {
//     '(': 1,
//     ')': -1,
//     '{': 2,
//     '}': -2,
//     '[': 3,
//     ']': -3,
//   };
//   const stack = [];
//   for (i = 0; i < s.length; i++) {
//     const v = values[s[i]];
//     if (0 < v) {
//       stack.push(v);
//     } else {
//       if (0 !== stack.pop() + v) return false;
//     }
//   }
//   return 0 === stack.length;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 94.35% of JavaScript online submissions
// Memory Usage: 35.1 MB, less than 25.74% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {
//   const dict = {
//     ']': '[',
//     '}': '{',
//     ')': '(',
//   };
//   const stack = [];
//   for (let i = 0; i < s.length; i++) {
//     if ('[' === s[i] || '{' === s[i] || '(' === s[i]) {
//       stack.push(s[i]);
//     } else {
//       if (stack.pop() !== dict[s[i]]) return false;
//     }
//   }
//   return 0 === stack.length;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 87.47% of JavaScript online submissions
// Memory Usage: 33.8 MB, less than 78.33% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// const isValid = s => {
//   if (1 === s.length % 2) return false;
//   const dict = {
//     ']': '[',
//     '}': '{',
//     ')': '(',
//   };
//   const stk = [];
//   for (let i = 0; i < s.length; i++) {
//     if ('[' === s[i] || '{' === s[i] || '(' === s[i]) stk.push(s[i]);
//     else if (stk.pop() !== dict[s[i]]) return false;
//   }
//   return 0 === stk.length;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 87.47% of JavaScript online submissions
// Memory Usage: 37.1 MB, less than 6.67% of JavaScript online submissions

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  if (1 === s.length % 2) return false;
  const dict = new Map([
    [']', '['],
    ['}', '{'],
    [')', '('],
  ]);
  const stk = [];
  for (const c of [...s]) {
    if ([...dict.values()].includes(c)) stk.push(c);
    else if (stk.pop() !== dict.get(c)) return false;
  }
  return 0 === stk.length;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

ok(isValid('()'));

ok(isValid('()[]{}'));

ok(!isValid('(]'));

ok(isValid('([])'));

ok(!isValid('([)]'));

ok(isValid('{[]}'));

ok(isValid(''));

ok(!isValid('({)'));

ok(isValid('([{}]){[()]}'));

ok(!isValid('[])'));
