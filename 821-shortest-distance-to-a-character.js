// 821. Shortest Distance to a Character
// https://leetcode.com/problems/shortest-distance-to-a-character/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 45.77% of JavaScript online submissions
// for Shortest Distance to a Character.
// Memory Usage: 36.2 MB, less than 25.00% of JavaScript online submissions
// for Shortest Distance to a Character.

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
// const shortestToChar = (S, C) => {
//   const result = new Array(S.length).fill(Infinity);
//   for (let i = 0; i < S.length; i++) {
//     if (S[i] === C) {
//       result[i] = 0;
//       for (let j = 1; 0 <= i - j && C !== S[i - j] && j < result[i - j]; j++) result[i - j] = j;
//       for (let j = 1; i + j < S.length && C !== S[i + j] && j < result[i + j]; j++)
//         result[i + j] = j;
//     }
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 84.58% of JavaScript online submissions
// for Shortest Distance to a Character.
// Memory Usage: 35.2 MB, less than 95.00% of JavaScript online submissions
// for Shortest Distance to a Character.

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
const shortestToChar = (S, C) => {
  const result = new Array(S.length);

  // forwardCounter starts high to ensure overwrites
  for (let i = 0, forwardCounter = Infinity; i < result.length; i++) {
    // If the sought character is found
    if (S[i] === C) {
      // Fill current
      result[i] = 0;
      // Fill backwards; overwrite where needed
      for (let j = 1; j <= i; j++) {
        // But don't overwrite closer results
        if (result[i - j] < j) break;
        result[i - j] = j;
      }
      // Reset forwardCounter
      forwardCounter = 1;
    } else {
      // Otherwise result is just current
      result[i] = forwardCounter++;
    }
  }

  return result;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: { S: 'a', C: 'a' },
    expected: [0],
  },
  {
    input: { S: 'ab', C: 'a' },
    expected: [0, 1],
  },
  {
    input: { S: 'ba', C: 'a' },
    expected: [1, 0],
  },
  {
    input: { S: 'aba', C: 'a' },
    expected: [0, 1, 0],
  },
  {
    input: { S: 'loveleetcode', C: 'e' },
    expected: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0],
  },
];

tests.forEach(({ input: { S, C }, expected }) => {
  const result = shortestToChar(S, C);
  const name = `S = ${S}, C = ${C}`;
  if (JSON.stringify(result) === JSON.stringify(expected)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
