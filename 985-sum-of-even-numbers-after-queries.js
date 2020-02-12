// 985. Sum of Even Numbers After Queries
// https://leetcode.com/problems/sum-of-even-numbers-after-queries/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const sumEvens = a => a.reduce((acc, curr) => (0 === curr % 2 ? acc + curr : acc), 0)

// /**
//  * @param {number[]} A
//  * @param {number[][]} queries
//  * @return {number[]}
//  */
// const sumEvenAfterQueries = (A, queries) => queries.reduce((acc, curr) => {
//   // console.log(A);
//   const [value, index] = curr;
//   // console.log(`value: ${value} and index: ${index}`);
//   A[index] += value;
//   const evensSum = sumEvens(A);
//   // console.log(evensSum);
//   return [...acc, evensSum];
// }, []);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8348 ms, faster than 27.49% of JavaScript online submissions
// Memory Usage: 47.3 MB, less than 60.00% of JavaScript online submissions

// const sumEvens = a => a.reduce((acc, curr) => (0 === curr % 2 ? acc + curr : acc), 0);

// /**
//  * @param {number[]} A
//  * @param {number[][]} queries
//  * @return {number[]}
//  */
// const sumEvenAfterQueries = (A, queries) => {
//   const answer = [];
//   for (let i = 0; i < queries.length; i++) {
//     // console.log(A);
//     const [value, index] = queries[i];
//     // console.log(`value: ${value} and index: ${index}`);
//     A[index] += value;
//     const evensSum = sumEvens(A);
//     // console.log(evensSum);
//     answer.push(evensSum);
//   }
//   return answer;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 108 ms, faster than 93.05% of JavaScript online submissions
// Memory Usage: 47.8 MB, less than 20.00% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @param {number[][]} queries
//  * @return {number[]}
//  */
// const sumEvenAfterQueries = (A, queries) => {
//   const isEven = n => 0 === n % 2;
//   let acc = A.reduce((acc, curr) => (isEven(curr) ? acc + curr : acc), 0);
//   return queries.map(([addend, index]) => {
//     const [oldValue, newValue] = [A[index], A[index] + addend];
//     A[index] = newValue;
//     const [wasEven, isNowEven] = [isEven(oldValue), isEven(newValue)];
//     if (wasEven && isNowEven) acc += newValue - oldValue;
//     else if (wasEven && !isNowEven) acc -= oldValue;
//     else if (isNowEven) acc += newValue;
//     return acc;
//   });
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 140 ms, faster than 48.03% of JavaScript online submissions
// Memory Usage: 46.6 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
const sumEvenAfterQueries = (A, queries) => {
  let cumSum = A.reduce((acc, curr) => (!(curr & 1) ? acc + curr : acc), 0);
  return queries.map(([addend, index]) => {
    const oldValue = A[index];
    const newValue = oldValue + addend;
    if (!(oldValue & 1)) cumSum -= oldValue;
    if (!(newValue & 1)) cumSum += newValue;
    A[index] = newValue;
    return cumSum;
  });
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

// [ 1,  2, 3, 4] = 6
// [ 2,  2, 3, 4] = 8
// [ 2, -1, 3, 4] = 6
// [-2, -1, 3, 4] = 2
// [-2, -1, 3, 6] = 4

deepStrictEqual(
  sumEvenAfterQueries(
    [1, 2, 3, 4],
    [
      [1, 0],
      [-3, 1],
      [-4, 0],
      [2, 3],
    ],
  ),
  [8, 6, 2, 4],
);

deepStrictEqual(sumEvenAfterQueries([1], [[4, 0]]), [0]);
