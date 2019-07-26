// 575. Distribute Candies
// https://leetcode.com/problems/distribute-candies/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 132 ms, faster than 96.63% of JavaScript online submissions for Distribute Candies.
// Memory Usage: 43.7 MB, less than 78.57% of JavaScript online submissions for Distribute Candies.

/**
 * @param {number[]} candies
 * @return {number}
 */
// const distributeCandies = candies => {
//   // 1. Count the total candies and cleave it in twain
//   const portionSize = candies.length / 2;
//   // 2. Count the unique candies
//   const uniqueCandiesCount = new Set(candies).size;
//   // 3. If the unique candies count
//   //    is greater than or equal to half the total candies count,
//   //    return half the total candies count
//   if (portionSize <= uniqueCandiesCount) return portionSize;
//   // 4. If not, return the unique candies count
//   return uniqueCandiesCount;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 108 ms, faster than 99.61% of JavaScript online submissions
// for Distribute Candies.
// Memory Usage: 43.8 MB, less than 60.42% of JavaScript online submissions
// for Distribute Candies.

/**
 * @param {number[]} candies
 * @return {number}
 */
const distributeCandies = candies => Math.min(candies.length / 2, new Set(candies).size);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: [1, 1, 2, 2, 3, 3],
    expected: 3,
  },
  {
    name: 'Example 2',
    input: [1, 1, 2, 3],
    expected: 2,
  },
  {
    name: 'All the same',
    input: [1, 1, 1, 1, 1, 1],
    expected: 1,
  },
  {
    name: 'All different',
    input: [1, 2, 3, 4, 5, 6],
    expected: 3,
  },
];

tests.forEach(({ name, input, expected }) => {
  const output = distributeCandies(input);
  if (expected === output) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}" but got "${output}"`);
  }
});
