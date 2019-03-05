// 461. Hamming Distance
// https://leetcode.com/problems/hamming-distance/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

const toBinary = n => (n >>> 0).toString(2);

const longestArrayItem = a =>
  a.reduce(
    (answer, currentItem) => (!answer || answer.length < currentItem.length ? currentItem : answer),
    undefined
  );

const padStartsToEqualLengths = (s, ...n) => {
  const targetLength = longestArrayItem(n).length;
  return n.map(curr => curr.padStart(targetLength, s));
};

const countStringDifferences = (a, b) =>
  a.split('').reduce((answer, currA, iA) => (currA !== b[iA] ? answer + 1 : answer), 0);

const hammingDistance = (x, y) => {
  const [binX, binY] = padStartsToEqualLengths('0', toBinary(x), toBinary(y));
  return countStringDifferences(binX, binY);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example',
    input: {
      x: 1,
      y: 4
    },
    expected: 2
  }
];

tests.forEach(({ name, input: { x, y }, expected }) => {
  const result = hammingDistance(x, y);
  if (expected === result) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected ${expected} but got ${result}`);
  }
});
