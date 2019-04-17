// 884. Uncommon Words from Two Sentences
// https://leetcode.com/problems/uncommon-words-from-two-sentences/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const instances = (haystack, needle) =>
//   haystack.reduce((count, word) => count + (needle === word ? 1 : 0), 0);

// const uniqueElements = a => a.filter(word => 1 === instances(a, word));

// const allWords = (...strings) =>
//   strings.reduce((words, string) => [...words, ...string.split(' ')], []);

// const uniqueWords = (...strings) =>
//   Array.from(new Set(uniqueElements(allWords(...strings))).values());

// const xorWord = (haystack1, haystack2, word) =>
//   haystack1.split(' ').indexOf(word) !== haystack2.split(' ').indexOf(word);

// /**
//  * @param {string} A
//  * @param {string} B
//  * @return {string[]}
//  */
// const uncommonFromSentences = (A, B) => uniqueWords(A, B).filter(word => xorWord(A, B, word));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const uncommonFromSentences = (A, B) => {
  const answer = [];

  A = A.split(' ');
  B = B.split(' ');
  AB = A.concat(B);

  for (let i = 0; i < AB.length; i++) {
    if (
      A.indexOf(AB[i]) === A.lastIndexOf(AB[i]) &&
      B.indexOf(AB[i]) === B.lastIndexOf(AB[i]) &&
      (-1 === A.indexOf(AB[i])) !== (-1 === B.indexOf(AB[i]))
    ) {
      answer.push(AB[i]);
    }
  }

  return answer;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: {
      A: 'this apple is sweet',
      B: 'this apple is sour',
    },
    expected: ['sweet', 'sour'],
  },
  {
    name: 'Example 2',
    input: {
      A: 'apple apple',
      B: 'banana',
    },
    expected: ['banana'],
  },
  {
    name: 'Wrong answer',
    input: {
      A: 'fd kss fd',
      B: 'fd fd kss',
    },
    expected: [],
  },
];

const areArraysEqual = (a1, a2) => a1.length === a2.length && a1.join() === a2.join();

tests.forEach(({ name, input: { A, B }, expected }) => {
  const result = uncommonFromSentences(A, B);
  if (areArraysEqual(result, expected)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}" but got "${result}"`);
  }
});
