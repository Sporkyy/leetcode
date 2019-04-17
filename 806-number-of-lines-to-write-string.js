// 806. Number of Lines To Write String
// https://leetcode.com/problems/number-of-lines-to-write-string/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const getWidthsMap = widths => {
  const widthsMap = new Map();
  const charCodeLowercaseA = 97;
  for (let i = 0; i < 26; i++) {
    widthsMap.set(String.fromCharCode(i + charCodeLowercaseA), widths[i]);
  }
  return widthsMap;
};

const charTimes = (char, multiplier) => {
  let s = '';
  for (let i = 0; i < multiplier; i++) {
    s += char;
  }
  return s;
};

const getLines = (widths, S) => {
  const lines = [''];
  const widthsMap = getWidthsMap(widths);
  for (let i = 0; i < S.length; i++) {
    const segment = charTimes(S[i], widthsMap.get(S[i]));
    if (lines[lines.length - 1].length + segment.length <= 100) {
      lines[lines.length - 1] = lines[lines.length - 1] += segment;
    } else {
      lines.push(segment);
    }
  }
  console.log(lines);
  return lines;
};

/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
const numberOfLines = (widths, S) => {
  const lines = getLines(widths, S);
  return [lines.length, lines[lines.length - 1].length];
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: {
      widths: [
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
      ],
      S: 'abcdefghijklmnopqrstuvwxyz',
    },
    expected: [3, 60],
  },
  {
    name: 'Example 2',
    input: {
      widths: [
        4,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
      ],
      S: 'bbbcccdddaaa',
    },
    expected: [2, 4],
  },
];

const areArraysEqual = (a1, a2) => a1.length === a2.length && a1.join() === a2.join();

tests.forEach(({ name, input: { widths, S }, expected }) => {
  const result = numberOfLines(widths, S);
  if (areArraysEqual(result, expected)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
