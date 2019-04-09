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

  for (let i = 0; i < answer.length; i++) {
    if (S[i] === C) {
      // Fill ccurrent
      answer[i] = 0;
      // Fill backwards
      for (let j = 1; j <= i; j++) {
        // Don't overwrite closer answers
        if (answer[i - j] < j) break;
        answer[i - j] = j;
      }
      // Fill forwards
      for (let j = 1; j < answer.length - i; j++) {
        answer[i + j] = j;
      }
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

const areArraysEqual = (a1, a2) =>
  a1.length === a2.length &&
  a1.reduce(
    (acc, curr, i) => ('undefined' === typeof acc ? curr === a2[i] : acc && curr === a2[i]),
    undefined,
  );

tests.forEach(({ name, input: { S, C }, expected }) => {
  const result = shortestToChar(S, C);
  if (areArraysEqual(result, expected)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
