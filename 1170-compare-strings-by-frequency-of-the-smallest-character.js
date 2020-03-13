// 1170. Compare Strings by Frequency of the Smallest Character
//       https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/

/*

Let's define a function f(s) over a non-empty string s, which calculates the
frequency of the smallest character in s. For example, if s = "dcce" then f(s) =
2 because the smallest character is "c" and its frequency is 2.

Now, given string arrays queries and words, return an integer array answer,
where each answer[i] is the number of words such that f(queries[i]) < f(W),
where W is a word in words.

Constraints:
- 1 <= queries.length <= 2000
- 1 <= words.length <= 2000
- 1 <= queries[i].length, words[i].length <= 10
- queries[i][j], words[i][j] are English lowercase letters.

*/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 1796 ms, faster than 10.87% of JavaScript online submissions
// Memory Usage: 51.4 MB, less than 100.00% of JavaScript online submissions

// const f = s => {
//   const cnts = new Array(26).fill(0);
//   for (const c of s) cnts[c.charCodeAt(0) - 97]++;
//   for (const cnt of cnts) if (0 < cnt) return cnt;
// };

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (queries, words) =>
//   queries.map(f).map(q => words.map(f).filter(w => q < w).length);

// console.log(words.map(f));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 224 ms, faster than 35.51% of JavaScript online submissions
// Memory Usage: 43.5 MB, less than 100.00% of JavaScript online submissions

// const memo = new Map();

// /**
//  * @param {string} s
//  * @returns
//  */
// const f = s => {
//   if (memo.has(s)) return memo.get(s);
//   const cnts = new Array(26).fill(0);
//   for (const c of s) cnts[c.charCodeAt(0) - 97]++;
//   for (const cnt of cnts)
//     if (0 < cnt) {
//       memo.set(s, cnt);
//       return cnt;
//     }
// };

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (queries, words) => {
//   [queries, words] = [queries.map(f), words.map(f)];
//   return queries.map(q => words.filter(w => q < w).length);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 236 ms, faster than 31.40% of JavaScript online submissions
// Memory Usage: 42.5 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @returns
//  */
// const f = s => {
//   const cnts = new Array(26).fill(0);
//   for (const c of s) cnts[c.charCodeAt(0) - 97]++;
//   for (const cnt of cnts) if (0 < cnt) return cnt;
// };

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (queries, words) => {
//   [queries, words] = [queries.map(f), words.map(f)];
//   return queries.map(q => words.filter(w => q < w).length);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 5312 ms, faster than 5.08% of JavaScript online submissions
// Memory Usage: 67.5 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @returns
//  */
// const f = s =>
//   s.match(
//     new RegExp(
//       `(${String.fromCharCode(Math.min(...[...s].map(c => c.charCodeAt(0))))})`,
//       'g',
//     ),
//   ).length;

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (queries, words) =>
//   queries.map(f).map(q => words.map(f).filter(w => q < w).length);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 2856 ms, faster than 8.94% of JavaScript online submissions
// Memory Usage: 50.6 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @returns
//  */
// const f = s => {
//   const cnts = new Array(26).fill(0);
//   for (const c of s) cnts[c.charCodeAt(0) - 97]++;
//   for (const cnt of cnts) if (0 < cnt) return cnt;
// };

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (queries, words) =>
//   queries.map(q => words.filter(w => f(q) < f(w)).length);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 132 ms, faster than 50.48% of JavaScript online submissions
// Memory Usage: 38.6 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @returns
//  */
// const f = s => {
//   const cnts = new Array(26).fill(0);
//   for (const c of s) cnts[c.charCodeAt(0) - 97]++;
//   for (const cnt of cnts) if (0 < cnt) return cnt;
// };

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (queries, words) => {
//   [queries, words] = [queries.map(f), words.map(f)];
//   return queries.map(q => words.reduce((cnt, w) => cnt + (q < w ? 1 : 0), 0));
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 104 ms, faster than 70.77% of JavaScript online submissions
// Memory Usage: 41.5 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @returns
//  */
// const f = s => {
//   const a = [...s].map(c => c.charCodeAt(0));
//   a.sort((a, b) => a - b);
//   return a.lastIndexOf(a[0]) + 1;
// };

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (queries, words) => {
//   const [qVals, wVals] = [queries.map(f), words.map(f)];
//   wVals.sort((a, b) => b - a);
//   return qVals.map(qVal => {
//     let i = 0;
//     while (qVal < wVals[i]) i++;
//     return i;
//   });
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 232 ms, faster than 32.61% of JavaScript online submissions
// Memory Usage: 42.3 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @returns
//  */
// const f = s => {
//   const cnts = new Array(26).fill(0);
//   for (const c of s) cnts[c.charCodeAt(0) - 97]++;
//   for (const cnt of cnts) if (0 < cnt) return cnt;
// };

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (queries, words) => {
//   [queries, words] = [queries.map(f), words.map(f)];
//   return queries.map(q => words.filter(w => q < w).length);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 248 ms, faster than 28.50% of JavaScript online submissions
// Memory Usage: 42.9 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @returns
//  */
// const f = s => {
//   const a = [...s].map(c => c.charCodeAt(0));
//   a.sort((a, b) => a - b);
//   return a.lastIndexOf(a[0]) + 1;
// };

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (queries, words) => {
//   [queries, words] = [queries.map(f), words.map(f)];
//   return queries.map(q => words.filter(w => q < w).length);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 100 ms, faster than 73.43% of JavaScript online submissions
// Memory Usage: 42.2 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @returns
//  */
// const f = s => {
//   const a = [...s].map(c => c.charCodeAt(0));
//   a.sort((a, b) => a - b);
//   return a.lastIndexOf(a[0]) + 1;
// };

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (queries, words) => {
//   const wFreqs = words.map(f);
//   wFreqs.sort((a, b) => b - a);
//   return queries.map(query => {
//     const qFreq = f(query);
//     let i = 0;
//     while (qFreq < wFreqs[i]) i++;
//     return i;
//   });
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 88 ms, faster than 85.27% of JavaScript online submissions
// Memory Usage: 38.6 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @returns
//  */
// const f = s => {
//   const cnts = new Array(26).fill(0);
//   for (const c of s) cnts[c.charCodeAt(0) - 97]++;
//   for (const cnt of cnts) if (0 < cnt) return cnt;
// };

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (queries, words) => {
//   const wFreqs = words.map(f);
//   wFreqs.sort((a, b) => b - a);
//   return queries.map(query => {
//     const qFreq = f(query);
//     let i = 0;
//     while (qFreq < wFreqs[i]) i++;
//     return i;
//   });
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 120 ms, faster than 59.90% of JavaScript online submissions
// Memory Usage: 38.3 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @returns
//  */
// const f = s => {
//   const cnts = new Array(26).fill(0);
//   for (const c of s) cnts[c.charCodeAt(0) - 97]++;
//   for (const cnt of cnts) if (0 < cnt) return cnt;
// };

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (queries, words) => {
//   const wFreqs = words.map(f);
//   return queries.map(query => {
//     const qFreq = f(query);
//     return wFreqs.reduce((cnt, wFreq) => cnt + (qFreq < wFreq ? 1 : 0), 0);
//   });
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 96 ms, faster than 78.26% of JavaScript online submissions
// Memory Usage: 38.5 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @returns
//  */
// const f = s => {
//   const cnts = new Array(26).fill(0);
//   for (const c of s) cnts[c.charCodeAt(0) - 97]++;
//   for (const cnt of cnts) if (0 < cnt) return cnt;
// };

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (queries, words) => {
//   const wFreqs = words.map(f);
//   return queries.map(query => {
//     const qFreq = f(query);
//     return wFreqs.reduce((cnt, wFreq) => cnt + (qFreq < wFreq), 0);
//   });
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 104 ms, faster than 70.77% of JavaScript online submissions
// Memory Usage: 38.8 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} s
 * @returns
 */
const f = s => {
  const cnts = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) cnts[s.charCodeAt(i) - 97]++;
  for (const cnt of cnts) if (0 < cnt) return cnt;
};

/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
const numSmallerByFrequency = (queries, words) => {
  const wFreqs = words.map(f);
  return queries.map(query => {
    const qFreq = f(query);
    return wFreqs.reduce((cnt, wFreq) => cnt + (qFreq < wFreq), 0);
  });
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
deepStrictEqual(numSmallerByFrequency(['cbd'], ['zaaaz']), [1]);
// Explanation: On the first query we have f("cbd") = 1, f("zaaaz") = 3 so
// f("cbd") < f("zaaaz").

// Example 2:
deepStrictEqual(
  numSmallerByFrequency(['bbb', 'cc'], ['a', 'aa', 'aaa', 'aaaa']),
  [1, 2],
);
// Explanation: On the first query only f("bbb") < f("aaaa"). On the second
// query both f("aaa") and f("aaaa") are both > f("cc").
