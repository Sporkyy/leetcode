// 136. Single Number
// https://leetcode.com/problems/single-number/

/*
Given a non-empty array of integers, every element appears twice except for one.
Find that single one.

## Note
Your algorithm should have a linear runtime complexity. Could you implement it
without using extra memory?
*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 780 ms, faster than 5.30% of JavaScript online submissions for Single Number.
// Memory Usage: 38.4 MB, less than 9.89% of JavaScript online submissions for Single Number.

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const singleNumber = nums => {
//   const haystack = ` ${nums.join(' ')} `;
//   for (let i = nums.length - 1; 0 <= i; --i) {
//     const needle = ` ${nums[i]} `;
//     if (haystack.indexOf(needle) === haystack.lastIndexOf(needle)) {
//       return nums[i];
//     }
//   }
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 73.56% of JavaScript online submissions for Single Number.
// Memory Usage: 37.9 MB, less than 20.15% of JavaScript online submissions for Single Number.

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const singleNumber = nums => {
//   const map = new Map();
//   for (let i = nums.length - 1; 0 <= i; --i) {
//     if (map.has(nums[i])) {
//       map.set(nums[i], map.get(nums[i]) + 1);
//     } else {
//       map.set(nums[i], 1);
//     }
//   }
//   for (let [num, count] of map.entries()) {
//     if (1 === count) {
//       return num;
//     }
//   }
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 35.78% of JavaScript online submissions for Single Number.
// Memory Usage: 38.6 MB, less than 6.59% of JavaScript online submissions for Single Number.

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const singleNumber = nums => {
//   const map = Object(null);
//   for (let i = nums.length - 1; 0 <= i; --i) {
//     if (map.hasOwnProperty(nums[i])) {
//       map[nums[i]] = map[nums[i]] + 1;
//     } else {
//       map[nums[i]] = 1;
//     }
//   }
//   for (let key in map) {
//     if (1 === map[key]) {
//       return parseInt(key, 10);
//     }
//   }
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 63.75% of JavaScript online submissions
// Memory Usage: 38.2 MB, less than 15.69% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const singleNumber = nums => {
//   const map = {};
//   for (let i = 0; i < nums.length; i++) {
//     if ('undefined' === typeof map[nums[i]]) map[nums[i]] = 1;
//     else map[nums[i]]++;
//   }
//   for (let key in map) if (1 === map[key]) return parseInt(key, 10);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 72.32% of JavaScript online submissions
// Memory Usage: 36.8 MB, less than 53.85% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const singleNumber = nums => {
//   let res = nums.pop();
//   for (const num of nums) res ^= num;
//   return res;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 87.12% of JavaScript online
// Memory Usage: 35.2 MB, less than 100.00% of JavaScript online

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => nums.reduce((acc, curr) => (acc ^= curr));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// ## Example 1
strictEqual(singleNumber([2, 2, 1]), 1);

// ## Example 2
strictEqual(singleNumber([4, 1, 2, 1, 2]), 4);
