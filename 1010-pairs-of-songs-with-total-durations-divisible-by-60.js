// 1010. Pairs of Songs With Total Durations Divisible by 60
// https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 5484 ms, faster than 22.00% of JavaScript online submissions
// for Pairs of Songs With Total Durations Divisible by 60.
// Memory Usage: 37.7 MB, less than 58.87% of JavaScript online submissions
// for Pairs of Songs With Total Durations Divisible by 60.

/**
 * @param {number[]} time
 * @return {number}
 */
// const numPairsDivisibleBy60 = time => {
//   let result = 0;
//   for (let i = 0; i < time.length; i++)
//     for (let j = i + 1; j < time.length; j++) if (0 === (time[i] + time[j]) % 60) result++;
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} time
 * @return {number}
 */
const numPairsDivisibleBy60 = time => {
  const table = {};
  for (let i = 0, j = 60; i <= 60; i++, j--) table[i] = j;
  console.log(table);
  const modded = time.map(n => n % 60);
  console.log(modded);
  let result = 0;
  for (let i = 0; i < modded.length; i++)
    for (let j = i + 1; j < modded.length; j++)
      if (60 === modded[i] + modded[j] result++;
  return result;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: [30, 20, 150, 100, 40],
    expected: 3,
  },
  {
    input: [60, 60, 60],
    expected: 3,
  },
];

tests.forEach(({ input, expected }) => {
  const output = numPairsDivisibleBy60(input);
  if (expected === output) {
    console.log(`✅ ${input.join(', ')}`);
  } else {
    console.log(`🔴 ${input.join(', ')}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
});
