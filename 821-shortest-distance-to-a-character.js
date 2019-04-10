// 821. Shortest Distance to a Character
// https://leetcode.com/problems/shortest-distance-to-a-character/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
const shortestToChar = (S, C) => {
  const answer = new Array(S.length);

  // forwardCounter starts high to ensure overwrites
  for (let i = 0, forwardCounter = Infinity; i < answer.length; i++) {
    // If the sought character is found
    if (S[i] === C) {
      // Fill current
      answer[i] = 0;
      // Fill backwards; overwrite where needed
      for (let j = 1; j <= i; j++) {
        // But don't overwrite closer answers
        if (answer[i - j] < j) break;
        answer[i - j] = j;
      }
      // Reset forwardCounter
      forwardCounter = 1;
    } else {
      // Otherwise just answer current
      answer[i] = forwardCounter++;
    }
  }

  return answer;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'a, a',
    input: { S: 'a', C: 'a' },
    expected: [0],
  },
  {
    name: 'ab, a',
    input: { S: 'ab', C: 'a' },
    expected: [0, 1],
  },
  {
    name: 'ba, a',
    input: { S: 'ba', C: 'a' },
    expected: [1, 0],
  },
  {
    name: 'aba, c',
    input: { S: 'aba', C: 'a' },
    expected: [0, 1, 0],
  },
  {
    name: 'Example 1',
    input: { S: 'loveleetcode', C: 'e' },
    expected: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0],
  },
];

const areArraysEqual = (a1, a2) => {
  if (a1.length !== a2.length) return false;
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
};

tests.forEach(({ name, input: { S, C }, expected }) => {
  const result = shortestToChar(S, C);
  if (areArraysEqual(result, expected)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
