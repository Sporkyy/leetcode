// 884. Uncommon Words from Two Sentences
// https://leetcode.com/problems/uncommon-words-from-two-sentences/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 20.84% of JavaScript online submissions for Uncommon Words from Two Sentences.
// Memory Usage: 35.1 MB, less than 6.90% of JavaScript online submissions for Uncommon Words from Two Sentences.

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

// Runtime: 60 ms, faster than 89.18% of JavaScript online submissions for Uncommon Words from Two Sentences.
// Memory Usage: 34.5 MB, less than 20.69% of JavaScript online submissions for Uncommon Words from Two Sentences.

// /**
//  * @param {string} A
//  * @param {string} B
//  * @return {string[]}
//  */
// const uncommonFromSentences = (A, B) => {
//   const answer = [];

//   A = A.split(' ');
//   B = B.split(' ');
//   const AB = A.concat(B);

//   for (let i = 0; i < AB.length; i++) {
//     const word = AB[i];
//     const ai = A.indexOf(word);
//     const ali = A.lastIndexOf(word);
//     if (ai !== ali) {
//       continue;
//     }
//     const bi = B.indexOf(word);
//     const bli = B.lastIndexOf(word);
//     if (bi !== bli || (-1 !== ai) === (-1 !== bi)) {
//       continue;
//     }
//     answer.push(word);
//   }

//   return answer;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 89.18% of JavaScript online submissions for Uncommon Words from Two Sentences.
// Memory Usage: 35 MB, less than 10.34% of JavaScript online submissions for Uncommon Words from Two Sentences.

// /**
//  * @param {string} A
//  * @param {string} B
//  * @return {string[]}
//  */
// const uncommonFromSentences = (A, B) => {
//   A = A.split(' ');
//   B = B.split(' ');

//   const AB = A.concat(B);
//   const answer = [];
//   const map = new Object(null);

//   for (let i = 0; i < AB.length; i++) {
//     const word = AB[i];
//     if (map.hasOwnProperty(word)) continue;
//     map[word] = {
//       aIndex: A.indexOf(word),
//       aLastIndex: A.lastIndexOf(word),
//       bIndex: B.indexOf(word),
//       bLastIndex: B.lastIndexOf(word),
//     };
//   }

//   for (let word in map) {
//     if (
//       map[word].aIndex !== map[word].aLastIndex ||
//       map[word].bIndex !== map[word].bLastIndex ||
//       (-1 !== map[word].aIndex) === (-1 !== map[word].bIndex)
//     ) {
//       continue;
//     }
//     answer.push(word);
//   }

//   return answer;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 100.00% of JavaScript online submissions for Uncommon Words from Two Sentences.
// Memory Usage: 33.9 MB, less than 79.31% of JavaScript online submissions for Uncommon Words from Two Sentences.

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
const uncommonFromSentences = (A, B) => {
  const answer = [];
  let haystack = `${A} ${B}`;
  const words = haystack.split(' ');
  haystack = ` ${haystack} `;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const needle = ' ' + word + ' ';
    if (haystack.indexOf(needle) !== haystack.lastIndexOf(needle)) continue;
    answer.push(word);
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
    name: 'Wrong answer 1',
    input: {
      A: 'fd kss fd',
      B: 'fd fd kss',
    },
    expected: [],
  },
  {
    name: 'Wrong answer 2',
    input: {
      A: 'd b zu d t',
      B: 'udb zu ap',
    },
    expected: ['b', 't', 'udb', 'ap'],
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