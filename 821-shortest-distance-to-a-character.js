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

  for (let i = (distance = 0), flag = false; i < answer.length; i++) {
    // If the sought character is found
    if (S[i] === C) {
      // Fill current and reset distance
      answer[i] = distance = 0;
      // Fill previous
      for (let j = 1; j <= i; j++) {
        // But don't overwrite closer answers
        if (answer[i - j] < j) break;
        answer[i - j] = j;
      }
      // After the first "C" character is found, allow filling forward
      if (!flag) flag = true;
    } else if (flag) {
      // Fill forward, but only once the first "C" char is found
      answer[i] = ++distance;
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
