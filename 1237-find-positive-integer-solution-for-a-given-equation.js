// 1237. Find Positive Integer Solution for a Given Equation
//       https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/

/*

Given a function  f(x, y) and a value z, return all positive integer pairs x and
y where f(x,y) == z.

The function is constantly increasing, i.e.:

- f(x, y) < f(x + 1, y)
- f(x, y) < f(x, y + 1)

The function interface is defined like this:

```
interface CustomFunction {
public:
  // Returns positive integer f(x, y) for any given positive integer x and y.
  int f(int x, int y);
};
```

For custom testing purposes you're given an integer function_id and a target z
as input, where function_id represent one function from an secret internal list,
on the examples you'll know only two functions from the list.

You may return the solutions in any order.

Constraints:

- 1 <= function_id <= 9
- 1 <= z <= 100
- It's guaranteed that the solutions of f(x, y) == z will be on the range 1 <=
  x, y <= 1000
- It's also guaranteed that f(x, y) will fit in 32 bit signed integer if 1 <=
  x, y <= 1000

*/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 47.22% of JavaScript online submissions
// Memory Usage: 41.4 MB, less than 100.00% of JavaScript online submissions

// /**
//  * // This is the CustomFunction's API interface.
//  * // You should not implement it, or speculate about its implementation
//  * function CustomFunction() {
//  *
//  *     @param {integer, integer} x, y
//  *     @return {integer}
//  *     this.f = function(x, y) {
//  *         ...
//  *     };
//  *
//  * };
//  */
// /**
//  * @param {CustomFunction} customfunction
//  * @param {integer} z
//  * @return {integer[][]}
//  */
// const findSolution = (customfunction, z) => {
//   const res = [...new Array(z ** 2).keys()]
//     .map((n, idx, arr) => [Math.trunc(n / z) + 1, arr[z - (idx % z) - 1] + 1])
//     .filter(([x, y]) => z === customfunction.f(x, y));
//   // console.log(res);
//   return res;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 31.25% of JavaScript online submissions
// Memory Usage: 41.5 MB, less than 100.00% of JavaScript online submissions

// /**
//  * // This is the CustomFunction's API interface.
//  * // You should not implement it, or speculate about its implementation
//  * function CustomFunction() {
//  *
//  *     @param {integer, integer} x, y
//  *     @return {integer}
//  *     this.f = function(x, y) {
//  *         ...
//  *     };
//  *
//  * };
//  */
// /**
//  * @param {CustomFunction} customfunction
//  * @param {integer} z
//  * @return {integer[][]}
//  */
// const findSolution = (customfunction, z) =>
//   [...new Array(z ** 2).keys()]
//     .map((n, idx, arr) => [Math.trunc(n / z) + 1, arr[z - (idx % z) - 1] + 1])
//     .filter(([x, y]) => z === customfunction.f(x, y));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 33.33% of JavaScript online submissions
// Memory Usage: 39.6 MB, less than 100.00% of JavaScript online submissions

/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 *
 * };
 */
/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
const findSolution = (customfunction, z) =>
  new Array(z ** 2)
    .fill()
    .map((_, idx) => [Math.trunc(idx / z) + 1, (idx % z) + 1])
    .filter(([x, y]) => z === customfunction.f(x, y));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
deepStrictEqual(findSolution({ f: (x, y) => x + y }, 5), [
  [1, 4],
  [2, 3],
  [3, 2],
  [4, 1],
]);
// Explanation: function_id = 1 means that f(x, y) = x + y

// Example 2:
deepStrictEqual(findSolution({ f: (x, y) => x * y }, 5), [
  [1, 5],
  [5, 1],
]);
// Explanation: function_id = 2 means that f(x, y) = x * y
