// 1103. Distribute Candies to People
// https://leetcode.com/problems/distribute-candies-to-people/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 78.95% of JavaScript online submissions
// for Distribute Candies to People.
// Memory Usage: 34.6 MB, less than 100.00% of JavaScript online submissions
// for Distribute Candies to People.

/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
const distributeCandies = (candies, num_people) => {
  const result = new Array(num_people).fill(0);
  for (let i = 1; 0 < candies; candies -= i, i++) {
    const person = (i - 1) % num_people;
    if (candies < i) {
      result[person] += candies;
      break;
    }
    result[person] += i;
  }
  return result;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: {
      candies: 7,
      num_people: 4,
    },
    expected: [1, 2, 3, 1],
  },

  // Explanation:
  // On the first turn, ans[0] += 1, and the array is [1,0,0,0].
  // On the second turn, ans[1] += 2, and the array is [1,2,0,0].
  // On the third turn, ans[2] += 3, and the array is [1,2,3,0].
  // On the fourth turn, ans[3] += 1 (because there is only one candy left), and the final array is [1,2,3,1].

  {
    input: {
      candies: 10,
      num_people: 3,
    },
    expected: [5, 2, 3],
  },

  // Explanation:
  // On the first turn, ans[0] += 1, and the array is [1,0,0].
  // On the second turn, ans[1] += 2, and the array is [1,2,0].
  // On the third turn, ans[2] += 3, and the array is [1,2,3].

  {
    input: {
      candies: 60,
      num_people: 4,
    },
    expected: [15, 18, 15, 12],
  },
];

const areArraysEqual = (a, b) => a.length === b.length && a.join() === b.join();

tests.forEach(({ input: { candies, num_people }, expected }) => {
  const output = distributeCandies(candies, num_people);
  const name = `candies = ${candies}, num_people = ${num_people}`;
  if (areArraysEqual(expected, output)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected.join(', ')}", but got "${output.join(', ')}"`);
  }
});
