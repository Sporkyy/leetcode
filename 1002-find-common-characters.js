// 1002. Find Common Characters
// https://leetcode.com/problems/find-common-characters/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string[]} A
 * @return {string[]}
 */
const commonChars = A => {
  const arrayMaps = A.map(word =>
    word
      .split('')
      .reduce(
        (acc, curr) => (acc.has(curr) ? acc.set(curr, acc.get(curr) + 1) : acc.set(curr, 1)),
        new Map(),
      ),
  );
  const theFirst = arrayMaps[0];
  // console.log(theFirst);
  const theRest = arrayMaps.slice(1);
  // console.log(theRest);
  for ([letter, count] of theFirst.entries()) {
    for (theMap of theRest) {
      // console.log(`${Array.from(theMap.keys())}.has(${letter}) = ${theMap.has(letter)}`);
      if (!theMap.has(letter)) {
        theFirst.delete(letter);
      }
      if (theMap.has(letter) && theMap.get(letter) < theFirst.get(letter)) {
        // console.log(`Reducing "${letter}" to ${theMap.get(letter)}`);
        theFirst.set(letter, theMap.get(letter));
      }
    }
  }
  // console.log(theFirst);
  let answer = [];
  for ([letter, count] of theFirst.entries()) {
    for (let i = 0; i < count; i++) {
      answer.push(letter);
    }
  }
  // console.log(answer);
  return answer;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1:',
    input: ['bella', 'label', 'roller'],
    expected: ['e', 'l', 'l'],
  },
  {
    name: 'Example 2',
    input: ['cool', 'lock', 'cook'],
    expected: ['c', 'o'],
  },
  {
    name: 'Wrong answer',
    input: [
      'bbddabab',
      'cbcddbdd',
      'bbcadcab',
      'dabcacad',
      'cddcacbc',
      'ccbdbcba',
      'cbddaccc',
      'accdcdbb',
    ],
    expected: ['b', 'd'],
  },
];

const doArraysHaveSameElements = (a1, a2) => {
  if (a1.length !== a2.length) return false;
  for (let i = a1.length - 1; 0 <= i; --i) {
    if (a2.indexOf(a1[i]) < 0) return false;
    if (a1.indexOf(a2[i]) < 0) return false;
  }
  return true;
};

tests.forEach(({ name, input, expected }) => {
  const result = commonChars(input);
  if (doArraysHaveSameElements(result, expected)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}" instead`);
  }
});
