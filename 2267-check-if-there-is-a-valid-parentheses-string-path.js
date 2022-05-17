// 2267. Check if There Is a Valid Parentheses String Path
// https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/

/*

A parentheses string is a **non-empty** string consisting only of `'('` and
`')'`. It is **valid** if **any** of the following conditions is **true**:

- It is `()`.
- It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are
  valid parentheses strings.
- It can be written as `(A)`, where `A` is a valid parentheses string.

You are given an `m x n` matrix of parentheses `grid`. A
**valid parentheses string path** in the grid is a path satisfying **all** of
the following conditions:

- The path starts from the upper left cell `(0, 0)`.
- The path ends at the bottom-right cell `(m - 1, n - 1)`.
- The path only ever moves down or right.
- The resulting parentheses string formed by the path is valid.

Return `true` *if there exists a* **valid parentheses string path** in the
grid. Otherwise, return `false`.

Constraints:
- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 100
- grid[i][j] is either '(' or ')'.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {character[][]} grid
//  * @return {boolean}
//  */
// const hasValidPath = grid => {
//   const pValue = { '(': 1, ')': -1 };
//   const move = (x, y, s, xt = 0, yt = 0) => {
//     [x, y]; // ?
//     if (x === grid[x].length - 1 && y === grid.length - 1) {
//       return s === 0;
//     } else {
//       x += xt;
//       y += yt;
//       if (grid[x] && grid[x][y]) {
//         s += pValue[grid[x][y]];
//         if (0 <= s) {
//           return true;
//         }
//       }
//       if (grid[x][y]) {
//         move(x, y, s, 1, 0);
//       }
//       if (grid[x]) {
//         move(x, y, s, 0, 1);
//       }
//     }
//   };
//   return move(0, 0, 0);
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {character[][]} grid
//  * @return {boolean}
//  */
// const hasValidPath = grid => {
//   const [w, h] = [grid[0].length, grid.length];
//   const o = { '(': 1, ')': -1 };
//   const move = (x, y, t) => {
//     if (x === w - 1 && y === h - 1) {
//       return t === 0;
//     }
//     t += o[grid[y][x]];
//     if (0 <= t) {
//     }
//   };
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {character[][]} grid
//  * @return {boolean}
//  */
// const hasValidPath = grid => {
//   const [w, h] = [grid[0].length, grid.length];
//   console.log({ w, h });
//   // const o = { '(': 1, ')': -1 };
//   // const move = (x, y, t) => {
//   //   if (x === w - 1 && y === h - 1) {
//   //     return t === 0;
//   //   }
//   //   t += o[grid[y][x]];
//   //   if (0 <= t) {
//   //   }
//   // };
//   const o = { '(': 1, ')': -1 };
//   const recurse = (x, y, t) => {
//     console.log({ x, y, t });
//     if (w - 1 < x || h - 1 < y) return;
//     t += o[grid[y][x]];
//     if (t < 0) return;
//     if (x === w - 1 && y === h - 1 && 0 === t) return true;
//     recurse(x + 1, y, t);
//     recurse(x, y + 1, t);
//   };
//   return recurse(0, 0, 0);
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Time Limit Exceeded

// /**
//  * @param {character[][]} grid
//  * @return {boolean}
//  */
// const hasValidPath = grid => {
//   const [w, h] = [grid[0].length, grid.length];
//   // console.log({ w, h });
//   const o = { '(': 1, ')': -1 };
//   const recurse = (x, y, t) => {
//     // console.log({ x, y, t });
//     if (x < w && y < h) t += o[grid[y][x]];
//     // console.log({ x, y, t });
//     if (x === w - 1 && y === h - 1 && 0 === t) {
//       console.log('here');
//       return true;
//     } else if (x < w && y < h && 0 <= t) {
//       return recurse(x + 1, y, t) || recurse(x, y + 1, t);
//     }
//   };
//   return !!recurse(0, 0, 0);
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

/**
 * @param {character[][]} grid
 * @return {boolean}
 */
const hasValidPath = grid => {
  const [w, h] = [grid[0].length, grid.length];
  const o = { '(': 1, ')': -1 };
  const recurse = (x, y, t) => {
    // console.log({ x, y, t });
    if (x < w && y < h) t += o[grid[y][x]];
    console.log({ x, y, t });
    if (x === w - 1 && y === h - 1 && 0 === t) {
      return true;
    } else if (x < w && y < h && 0 <= t) {
      return recurse(x + 1, y, t) || recurse(x, y + 1, t);
    }
  };
  return !!recurse(0, 0, 0);
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:

/*

+---+---+---+
| ( | ( | ( |
+---+---+---+
| ) | ( | ) |
+---+---+---+
| ( | ( | ) |
+---+---+---+
| ( | ( | ) |
+---+---+---+

+----+----+----+
| +1 | +1 | +1 |
+----+----+----+
| -1 | +1 | -1 |
+----+----+----+
| +1 | +1 | -1 |
+----+----+----+
| +1 | +1 | -1 |
+----+----+----+

+-----+------+------+
| 2/1 |  1/3 | 0/-3 |
+-----+------+------+
| 0/2 | -1/2 | 0/-2 |
+-----+------+------+
| 0/1 | -1/1 | 0/-1 |
+-----+------+------+
| 0/0 | -1/0 |  0/0 |
+-----+------+------+

*/

strictEqual(
  true,
  hasValidPath([[...'((('], [...')()'], [...'(()'], [...'(()']]),
);
// Input: grid = [["(","(","("],[")","(",")"],["(","(",")"],["(","(",")"]]
// Output: true
// Explanation: The above diagram shows two possible paths that form valid parentheses strings.
// The first path shown results in the valid parentheses string "()(())".
// The second path shown results in the valid parentheses string "((()))".
// Note that there may be other valid parentheses string paths.

// Example 2:
strictEqual(false, hasValidPath([[...'))'], [...'((']]));
// Input: grid = [[")",")"],["(","("]]
// Output: false
// Explanation: The two possible paths form the parentheses strings "))(" and ")((". Since neither of them are valid parentheses strings, we return false.

// strictEqual(
//   false,
//   hasValidPath([
//     [...'())(((())()()(((()()('],
//     [...'(())()))()()(()((((()'],
//     [...'))())(()(()())())(())'],
//     [...'(()()()))()(()())()))'],
//     [
//       '(',
//       '(',
//       '(',
//       ')',
//       '(',
//       '(',
//       ')',
//       '(',
//       ')',
//       ')',
//       '(',
//       ')',
//       ')',
//       ')',
//       ')',
//       ')',
//       ')',
//       '(',
//       ')',
//       '(',
//       '(',
//     ],
//     [
//       ')',
//       ')',
//       '(',
//       '(',
//       ')',
//       ')',
//       ')',
//       ')',
//       ')',
//       '(',
//       ')',
//       ')',
//       ')',
//       '(',
//       '(',
//       ')',
//       '(',
//       '(',
//       '(',
//       '(',
//       ')',
//     ],
//     [
//       ')',
//       ')',
//       ')',
//       ')',
//       '(',
//       ')',
//       '(',
//       ')',
//       '(',
//       '(',
//       ')',
//       '(',
//       '(',
//       ')',
//       '(',
//       '(',
//       ')',
//       ')',
//       '(',
//       ')',
//       '(',
//     ],
//     [
//       '(',
//       ')',
//       '(',
//       '(',
//       '(',
//       ')',
//       ')',
//       ')',
//       ')',
//       '(',
//       '(',
//       ')',
//       '(',
//       '(',
//       ')',
//       ')',
//       '(',
//       ')',
//       ')',
//       ')',
//       '(',
//     ],
//     [
//       '(',
//       ')',
//       '(',
//       ')',
//       '(',
//       '(',
//       '(',
//       '(',
//       ')',
//       '(',
//       '(',
//       '(',
//       '(',
//       '(',
//       '(',
//       ')',
//       '(',
//       ')',
//       '(',
//       ')',
//       ')',
//     ],
//     [
//       '(',
//       ')',
//       '(',
//       '(',
//       '(',
//       ')',
//       '(',
//       ')',
//       ')',
//       ')',
//       ')',
//       '(',
//       '(',
//       '(',
//       '(',
//       ')',
//       ')',
//       '(',
//       '(',
//       '(',
//       ')',
//     ],
//     [
//       '(',
//       '(',
//       ')',
//       '(',
//       ')',
//       ')',
//       '(',
//       ')',
//       '(',
//       ')',
//       ')',
//       ')',
//       ')',
//       ')',
//       '(',
//       ')',
//       '(',
//       ')',
//       ')',
//       ')',
//       '(',
//     ],
//     [
//       ')',
//       '(',
//       '(',
//       '(',
//       ')',
//       '(',
//       ')',
//       ')',
//       '(',
//       ')',
//       '(',
//       ')',
//       '(',
//       '(',
//       ')',
//       '(',
//       '(',
//       ')',
//       '(',
//       '(',
//       ')',
//     ],
//     [
//       '(',
//       ')',
//       '(',
//       ')',
//       ')',
//       '(',
//       '(',
//       ')',
//       '(',
//       ')',
//       '(',
//       ')',
//       ')',
//       ')',
//       '(',
//       '(',
//       '(',
//       '(',
//       ')',
//       '(',
//       ')',
//     ],
//     [
//       '(',
//       '(',
//       ')',
//       '(',
//       ')',
//       ')',
//       '(',
//       '(',
//       '(',
//       ')',
//       '(',
//       ')',
//       '(',
//       '(',
//       ')',
//       ')',
//       '(',
//       '(',
//       '(',
//       ')',
//       ')',
//     ],
//     [
//       '(',
//       '(',
//       '(',
//       '(',
//       ')',
//       ')',
//       '(',
//       ')',
//       '(',
//       '(',
//       '(',
//       ')',
//       ')',
//       '(',
//       ')',
//       '(',
//       ')',
//       ')',
//       ')',
//       ')',
//       '(',
//     ],
//     [
//       '(',
//       '(',
//       '(',
//       ')',
//       ')',
//       ')',
//       '(',
//       ')',
//       ')',
//       '(',
//       ')',
//       ')',
//       '(',
//       '(',
//       ')',
//       '(',
//       ')',
//       '(',
//       '(',
//       '(',
//       ')',
//     ],
//     [
//       ')',
//       ')',
//       ')',
//       ')',
//       ')',
//       ')',
//       '(',
//       ')',
//       ')',
//       ')',
//       '(',
//       '(',
//       ')',
//       '(',
//       ')',
//       '(',
//       '(',
//       '(',
//       '(',
//       ')',
//       ')',
//     ],
//   ]),
// );
