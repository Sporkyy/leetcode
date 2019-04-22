// 771. Jewels and Stones
// https://leetcode.com/problems/jewels-and-stones/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
// const numJewelsInStones = (J, S) => {
//   const occurrences = (n, h) => h.split('').filter(s => s === n).length;
//   if (0 === J.length || 0 === S.length) {
//     return 0;
//   }
//   return J.split('').reduce((acc, curr) => acc + occurrences(curr, S), 0);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const countCharInString = (needle, haystack) => {
//   let count = 0;
//   for (let i = 0; i < haystack.length; i++) {
//     if (needle === haystack[i]) count++;
//   }
//   return count;
// };

// /**
//  * @param {string} J
//  * @param {string} S
//  * @return {number}
//  */
// const numJewelsInStones = (J, S) => {
//   let count = 0;
//   for (let i = 0; i < J.length; i++) {
//     count += countCharInString(J[i], S);
//   }
//   return count;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
// const numJewelsInStones = (J, S) => {
//   let count = 0;
//   for (let i = 0; i < J.length; i++) {
//     for (let j = 0; j < S.length; j++) {
//       if (J[i] === S[j]) count++;
//     }
//   }
//   return count;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 80.29% of JavaScript online submissions for Jewels and Stones.
// Memory Usage: 33.9 MB, less than 65.18% of JavaScript online submissions for Jewels and Stones.

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
// const numJewelsInStones = (J, S) => {
//   let count = 0;
//   for (let i = S.length - 1; 0 <= i; --i) {
//     if (-1 < J.indexOf(S[i])) {
//       ++count;
//     }
//   }
//   return count;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 100.00% of JavaScript online submissions for Jewels and Stones.
// Memory Usage: 33.8 MB, less than 92.71% of JavaScript online submissions for Jewels and Stones.

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = (J, S) => {
  const jLen = J.length;
  const sLen = S.length;
  if (0 === jLen || 0 === sLen) return 0;
  let count = 0;
  for (let i = sLen - 1; 0 <= i; --i) {
    if (J.includes(S[i])) ++count;
  }
  return count;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 80.29% of JavaScript online submissions for Jewels and Stones.
// Memory Usage: 33.8 MB, less than 90.08% of JavaScript online submissions for Jewels and Stones.

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
// function numJewelsInStones(J, S) {
//   let count = 0;
//   for (let i = S.length - 1; 0 <= i; --i) {
//     if (J.includes(S[i])) ++count;
//   }
//   return count;
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 100.00% of JavaScript online submissions for Jewels and Stones.
// Memory Usage: 33.8 MB, less than 81.17% of JavaScript online submissions for Jewels and Stones.

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
// function numJewelsInStones(J, S) {
//   if (0 === J.length || 0 === S.length) return 0;
//   let count = 0;
//   for (let i = S.length - 1; 0 <= i; --i) {
//     if (J.includes(S[i])) ++count;
//   }
//   return count;
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: {
      J: 'aA',
      S: 'aAAbbbb',
    },
    expected: 3,
  },
  {
    name: 'Example 2',
    input: {
      J: 'z',
      S: 'ZZ',
    },
    expected: 0,
  },
  {
    name: 'No jewels',
    input: {
      J: '',
      S: 'a',
    },
    expected: 0,
  },
  {
    name: 'No stones',
    input: {
      J: 'a',
      S: '',
    },
    expected: 0,
  },
  {
    name: 'Neither jewels no stones',
    input: {
      J: '',
      S: '',
    },
    expected: 0,
  },
  {
    name: 'All jewels',
    input: {
      J: 'a',
      S: 'aaa',
    },
    expected: 3,
  },
];

tests.forEach(({ name, input: { J, S }, expected }) => {
  const output = numJewelsInStones(J, S);
  if (expected === output) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
});
