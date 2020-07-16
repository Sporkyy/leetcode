// 1423. Maximum Points You Can Obtain from Cards
// https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/

/*

There are several cards arranged in a row, and each card has an associated
number of points The points are given in the integer array cardPoints.

In one step, you can take one card from the beginning or from the end of the
row. You have to take exactly k cards.

Your score is the sum of the points of the cards you have taken.

Given the integer array cardPoints and the integer k, return the maximum score
you can obtain.

Constraints:
- 1 <= cardPoints.length <= 10^5
- 1 <= cardPoints[i] <= 10^4
- 1 <= k <= cardPoints.length

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 9220 ms, faster than 5.00% of JavaScript online submissions
// Memory Usage: 46.5 MB, less than 9.68% of JavaScript online submissions

// /**
//  * @param {number[]} cardPoints
//  * @param {number} k
//  * @return {number}
//  */
// const maxScore = (cardPoints, k) => {
//   const window = cardPoints.slice(0, k);
//   // console.log(window);
//   let maxSum = Math.max(
//     window.reduce((acc, curr) => acc + curr),
//     cardPoints.slice(-k).reduce((acc, curr) => acc + curr),
//   );
//   for (let i = 0; i < k; i++) {
//     window.pop();
//     window.unshift(cardPoints.pop());
//     // console.log(window);
//     maxSum = Math.max(
//       maxSum,
//       window.reduce((acc, curr) => acc + curr),
//     );
//   }
//   return maxSum;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {number[]} cardPoints
//  * @param {number} k
//  * @return {number}
//  */
// const maxScore = (cardPoints, k) => {
//   console.log(cardPoints.slice(0, k));
//   console.log(cardPoints.slice(-k).reverse());
//   console.log(
//     cardPoints.slice(0, k).reverse().concat(cardPoints.slice(-k).reverse()),
//   );
//   const x = cardPoints
//     .slice(0, k)
//     .reverse()
//     .concat(cardPoints.slice(-k).reverse());

//   console.log(
//     x.reduce((acc, curr, i) => {
//       acc = acc + curr;
//     }, 0),
//   );
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Time Limit Exceeded

// /**
//  * @param {number[]} cardPoints
//  * @param {number} k
//  * @return {number}
//  */
// const maxScore = (cardPoints, k) =>
//   Math.max(
//     ...cardPoints
//       .slice(-k)
//       .reverse()
//       .reduce(
//         (acc, curr, i) =>
//           acc.concat([acc[acc.length - 1] - cardPoints[k - i - 1] + curr]),
//         [cardPoints.slice(0, k).reduce((acc, curr) => acc + curr)],
//       ),
//   );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 204 ms, faster than 8.75% of JavaScript online submissions
// Memory Usage: 57.3 MB, less than 6.45% of JavaScript online submissions

// /**
//  * @param {number[]} cardPoints
//  * @param {number} k
//  * @return {number}
//  */
// const maxScore = (cardPoints, k) => {
//   let indices = [...new Array(k).keys()].reverse();
//   indices = indices.concat(
//     indices
//       .slice()
//       .reverse()
//       .map(i => cardPoints.length - 1 - i),
//   );
//   // console.log(indices);
//   const values = indices.map(i => cardPoints[i]);
//   // console.log(values);
//   const sums = [];
//   for (let i = 0, sum = 0; i < values.length; i++) {
//     if (k <= i) {
//       // console.log(i);
//       sum -= values[i - k];
//     }
//     sum += values[i];
//     sums.push(sum);
//   }
//   // console.log(sums);
//   return Math.max(...sums);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 144 ms, faster than 12.50% of JavaScript online submissions
// Memory Usage: 55.9 MB, less than 6.45% of JavaScript online submissions

// /**
//  * @param {number[]} cardPoints
//  * @param {number} k
//  * @return {number}
//  */
// const maxScore = (cardPoints, k) => {
//   const scores = cardPoints
//     .slice(0, k)
//     .reverse()
//     .concat(cardPoints.slice(-k).reverse());
//   // console.log(scores);
//   const sums = [];
//   for (let i = 0; i < scores.length; i++)
//     sums[i] = scores[i] + (sums[i - 1] || 0) - (scores[i - k] || 0);
//   // console.log(sums);
//   return Math.max(...sums);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Time Limit Exceeded

// /**
//  * @param {number[]} cardPoints
//  * @param {number} k
//  * @return {number}
//  */
// const maxScore = (cardPoints, k) =>
//   Math.max(
//     ...cardPoints
//       .slice(0, k)
//       .reverse()
//       .concat(cardPoints.slice(-k).reverse())
//       .reduce(
//         (acc, curr, idx, arr) => [
//           ...acc,
//           curr + (acc[idx - 1] || 0) - (arr[idx - k] || 0),
//         ],
//         [],
//       ),
//   );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 156 ms, faster than 10.00% of JavaScript online submissions
// Memory Usage: 55 MB, less than 6.45% of JavaScript online submissions

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
const maxScore = (cardPoints, k) =>
  Math.max(
    ...cardPoints
      .slice(0, k)
      .reverse()
      .concat(cardPoints.slice(-k).reverse())
      .reduce((acc, curr, idx, arr) => {
        acc.push(curr + (acc[idx - 1] || 0) - (arr[idx - k] || 0));
        return acc;
      }, []),
  );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(maxScore([1, 2, 3, 4, 5, 6, 1], 3), 12);
// Explanation: After the first step, your score will always be However,
// choosing the rightmost card first will maximize your total score. The optimal
// strategy is to take the three cards on the right, giving a final score of 1 +
// 6 + 5 = 12.

// Example 2:
strictEqual(maxScore([2, 2, 2], 2), 4);
// Explanation: Regardless of which two cards you take, your score will always
// be 4.

// Example 3:
strictEqual(maxScore([9, 7, 7, 9, 7, 7, 9], 7), 55);
// Explanation: You have to take all the cards. Your score is the sum of points
// of all cards.

// Example 4:
strictEqual(maxScore([1, 1000, 1], 1), 1);
// Explanation: You cannot take the card in the middle. Your best score is 1.

// Example 5:
strictEqual(maxScore([1, 79, 80, 1, 1, 1, 200, 1], 3), 202);

strictEqual(maxScore([1, 2, 1, 1, 1, 3], 3), 6);

strictEqual(maxScore([100, 40, 17, 9, 73, 75], 3), 248);

/*

0,1,2,3,4,5

0,1,2

0,4,5

*/
