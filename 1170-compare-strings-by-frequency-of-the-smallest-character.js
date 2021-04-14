// 1170. Compare Strings by Frequency of the Smallest Character
// https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/

/*

Let the function `f(s)` be the **frequency of the lexicographically smallest
character** in a non-empty string `s`. For example, if `s = "dcce"` then `f(s) =
2` because the lexicographically smallest character is 'c', which has a
frequency of 2.

You are given an array of strings `words` and another array of query strings
`queries`. For each query `queries[i]`, count the **number of words** in `words`
such that `f(queries[i]) < f(W)` for each `W` in `words`.

Return an integer array `answer`, where each `answer[i]` is the answer to the
`ith` query.

## Constraints

- `1 <= queries.length <= 2000`
- `1 <= words.length <= 2000`
- `1 <= queries[i].length, words[i].length <= 10`
- `queries[i][j], words[i][j]` consist of lowercase English letters.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

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

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

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

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

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

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

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

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

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

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

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

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

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

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

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

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

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

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

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

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

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

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

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

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

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

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 104 ms, faster than 70.77% of JavaScript online submissions
// Memory Usage: 38.8 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @returns
//  */
// const f = s => {
//   const cnts = new Array(26).fill(0);
//   for (let i = 0; i < s.length; i++) cnts[s.charCodeAt(i) - 97]++;
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

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {string} s
//  * @returns {number}
//  */
// const f = s => {
//   const cnts = new Array(26).fill(0);
//   for (let i = 0; i < s.length; i++) cnts[s.charCodeAt(i) - 97]++;
//   for (const cnt of cnts) if (0 < cnt) return cnt;
// };

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @returns {number[]}
//  */
// const numSmallerByFrequency = (queries, words) => {
//   const wFreqs = words.map(f);
//   return queries.map(query => {
//     const qFreq = f(query);
//     return wFreqs.reduce((cnt, wFreq) => cnt + (qFreq < wFreq), 0);
//   });
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 152 ms, faster than 29.79% of JavaScript online submissions
// Memory Usage: 46 MB, less than 21.28% of JavaScript online submissions

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (queries, words) =>
//   ((qFreqs, wFreqs) =>
//     qFreqs.map(qFreq =>
//       wFreqs.reduce((cnt, wFreq) => cnt + (qFreq < wFreq), 0),
//     ))(
//     ...[queries, words].map(a =>
//       a.map(
//         s =>
//           [...s].reduce(
//             ([cnts, minChar], char) => [
//               cnts.set(char, (cnts.get(char) || 0) + 1),
//               !minChar || char < minChar ? char : minChar,
//               cnts.get(!minChar || char < minChar ? char : minChar),
//             ],
//             [new Map()],
//           )[2],
//       ),
//     ),
//   );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 152 ms, faster than 29.79% of JavaScript online submissions
// Memory Usage: 45.8 MB, less than 27.66% of JavaScript online submissions

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (queries, words) =>
//   ((qFreqs, wFreqs) =>
//     qFreqs.map(qFreq =>
//       wFreqs.reduce((cnt, wFreq) => cnt + (qFreq < wFreq), 0),
//     ))(
//     ...[queries, words].map(a =>
//       a.map(s =>
//         ((cnts, minChar) => cnts.get(minChar))(
//           ...[...s].reduce(
//             ([cnts, minChar], char) => [
//               cnts.set(char, (cnts.get(char) || 0) + 1),
//               !minChar || char < minChar ? char : minChar,
//             ],
//             [new Map()],
//           ),
//         ),
//       ),
//     ),
//   );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (
//   queries,
//   words,
//   letters = [...'abcdefghijklmnopqrstuvwxyz'],
// ) => {
//   ((queriesMin, wordsMin, queriesCnts, wordsCnts) => {
//     // console.log(queriesMin, wordsMin);
//     // console.log(queriesCnts, wordsCnts);
//     console.log(
//       queriesCnts.map((cnt, idx) => cnt.get(queriesMin[idx])),
//       wordsCnts.map((cnt, idx) => cnt.get(wordsMin[idx])),
//     );
//   })(
//     ...[queries, words].map(a =>
//       a.map(s => letters.find(letter => s.includes(letter))),
//     ),
//     ...[queries, words].map(a =>
//       a.map(s =>
//         [...s].reduce(
//           (cnts, char) => cnts.set(char, (cnts.get(char) || 0) + 1),
//           new Map(),
//         ),
//       ),
//     ),
//   );
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 144 ms, faster than 34.04% of JavaScript online submissions
// Memory Usage: 43.9 MB, less than 48.94% of JavaScript online submissions

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (
//   queries,
//   words,
//   letters = [...'abcdefghijklmnopqrstuvwxyz'],
// ) =>
//   ((qFreqs, wFreqs) =>
//     qFreqs.map(qFreq =>
//       wFreqs.reduce((cnt, wFreq) => cnt + (qFreq < wFreq), 0),
//     ))(
//     ...[queries, words].map(a =>
//       a.map(s =>
//         [...s]
//           .reduce(
//             (cnts, char) => cnts.set(char, (cnts.get(char) || 0) + 1),
//             new Map(),
//           )
//           .get(letters.find(letter => s.includes(letter))),
//       ),
//     ),
//   );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 148 ms, faster than 31.91% of JavaScript online submissions
// Memory Usage: 42 MB, less than 70.21% of JavaScript online submissions

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (
//   queries,
//   words,
//   aToZ = [...'abcdefghijklmnopqrstuvwxyz'],
// ) =>
//   ((qFreqs, wFreqs) =>
//     qFreqs.map(qFreq =>
//       wFreqs.reduce((cnt, wFreq) => cnt + (qFreq < wFreq), 0),
//     ))(
//     ...[queries, words].map(a =>
//       a.map(
//         s =>
//           s.replace(new RegExp(`[^${aToZ.find(c => s.includes(c))}]`, 'g'), '')
//             .length,
//       ),
//     ),
//   );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 152 ms, faster than 29.79% of JavaScript online submissions
// Memory Usage: 44.8 MB, less than 44.68% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @returns {number}
//  */
// const f = s =>
//   s.replace(
//     new RegExp(
//       `[^${[...'abcdefghijklmnopqrstuvwxyz'].find(c => s.includes(c))}]`,
//       'g',
//     ),
//     '',
//   ).length;

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (
//   queries,
//   words,
//   qFreqs = queries.map(query => f(query)),
//   wFreqs = words.map(word => f(word)),
// ) =>
//   qFreqs.map(qFreq => wFreqs.reduce((cnt, wFreq) => cnt + (qFreq < wFreq), 0));

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 148 ms, faster than 32.61% of JavaScript online submissions
// Memory Usage: 45.4 MB, less than 36.96% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @returns {number}
//  */
// const f = (
//   s,
//   sSet = new Set([...s]),
//   minChar = [...'abcdefghijklmnopqrstuvwxyz'].find(c => sSet.has(c)),
// ) => s.replace(new RegExp(`[^${minChar}]`, 'g'), '').length;

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (
//   queries,
//   words,
//   qFreqs = queries.map(query => f(query)),
//   wFreqs = words.map(word => f(word)),
// ) =>
//   qFreqs.map(qFreq => wFreqs.reduce((cnt, wFreq) => cnt + (qFreq < wFreq), 0));

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 160 ms, faster than 28.26% of JavaScript online submissions
// Memory Usage: 45.8 MB, less than 28.26% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @param {number[]} codes
//  * @param {string} smallest
//  * @returns {number}
//  */
// const f = (
//   s,
//   codes = [...new Set([...s])].map(c => c.charCodeAt(0)),
//   smallest = String.fromCharCode(Math.min(...codes)),
// ) => s.replace(new RegExp(`[^${smallest}]`, 'g'), '').length;

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @param {number[]} qFreqs
//  * @param {number[]} wFreqs
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (
//   queries,
//   words,
//   qFreqs = queries.map(query => f(query)),
//   wFreqs = words.map(word => f(word)),
// ) =>
//   qFreqs.map(qFreq => wFreqs.reduce((cnt, wFreq) => cnt + (qFreq < wFreq), 0));

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 136 ms, faster than 41.30% of JavaScript online submissions
// Memory Usage: 43.9 MB, less than 50.00% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @returns {number}
//  */
// const f = s => {
//   let [cnts, min] = [new Array(26).fill(0), Infinity];
//   for (let i = 0; i < s.length; i++) {
//     const cntIdx = s.charCodeAt(i) - 97;
//     cnts[cntIdx]++;
//     min = Math.min(min, cntIdx);
//   }
//   return cnts[min];
// };

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (queries, words) => {
//   const qFreqs = queries.map(query => f(query));
//   const wFreqs = words.map(word => f(word));
//   return qFreqs.map(qFreq =>
//     wFreqs.reduce((cnt, wFreq) => cnt + (qFreq < wFreq), 0),
//   );
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 140 ms, faster than 36.96% of JavaScript online submissions
// Memory Usage: 45.2 MB, less than 41.30% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @returns {number}
//  */
// const f = s =>
//   [...s].reduce(
//     ([min, cnt], c) =>
//       c < min ? [c, 1] : c === min ? [min, cnt + 1] : [min, cnt],
//     ['{', 0],
//   )[1];

// /**
//  * @param {string[]} queries
//  * @param {string[]} words
//  * @return {number[]}
//  */
// const numSmallerByFrequency = (queries, words) => {
//   const qFreqs = queries.map(query => f(query));
//   const wFreqs = words.map(word => f(word));
//   return qFreqs.map(qFreq =>
//     wFreqs.reduce((cnt, wFreq) => cnt + (qFreq < wFreq), 0),
//   );
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 136 ms, faster than 39.53% of JavaScript online submissions
// Memory Usage: 45.4 MB, less than 32.56% of JavaScript online submissions

/**
 * @param {string} s
 * @returns {number}
 */
const f = s =>
  [...s].reduce(
    ([min, cnt], c) =>
      c < min ? [c, 1] : c === min ? [min, cnt + 1] : [min, cnt],
    ['{', 0],
  )[1];

/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
const numSmallerByFrequency = (queries, words) => {
  if (Number.isInteger(queries[0])) {
    return numSmallerByFrequency(
      queries.map(f),
      words.map(f).sort((a, b) => a - b),
    );
  }
  return queries.map(qFreq =>
    qFreq < words[words.length - 1]
      ? words.length
      : words[0] < qFreq
      ? 0
      : words.findIndex(wFreq => wFreq <= qFreq),
  );
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { deepStrictEqual } from 'assert';

// Example 1:
deepStrictEqual(numSmallerByFrequency(['cbd'], ['zaaaz']), [1]);
// Explanation: On the first query we have `f("cbd") = 1, f("zaaaz") = 3`
// so `f("cbd") < f("zaaaz")`.

// // Example 2:
deepStrictEqual(
  numSmallerByFrequency(['bbb', 'cc'], ['a', 'aa', 'aaa', 'aaaa']),
  [1, 2],
);
// // Explanation: On the first query only `f("bbb") < f("aaaa")`.
// // On the second query both `f("aaa")` and `f("aaaa")` are both `> f("cc")`.

deepStrictEqual(
  numSmallerByFrequency(
    [
      'bba',
      'abaaaaaa',
      'aaaaaa',
      'bbabbabaab',
      'aba',
      'aa',
      'baab',
      'bbbbbb',
      'aab',
      'bbabbaabb',
    ],
    [
      'aaabbb',
      'aab',
      'babbab',
      'babbbb',
      'b',
      'bbbbbbbbab',
      'a',
      'bbbbbbbbbb',
      'baaabbaab',
      'aa',
    ],
  ),
  [6, 1, 1, 2, 3, 3, 3, 1, 3, 2],
);

deepStrictEqual(
  numSmallerByFrequency(
    [
      'aabbabbb',
      'abbbabaa',
      'aabbbabaa',
      'aabba',
      'abb',
      'a',
      'ba',
      'aa',
      'ba',
      'baabbbaaaa',
      'babaa',
      'bbbbabaa',
    ],
    [
      'b',
      'aaaba',
      'aaaabba',
      'aa',
      'aabaabab',
      'aabbaaabbb',
      'ababb',
      'bbb',
      'aabbbabb',
      'aab',
      'bbaaababba',
      'baaaaa',
    ],
  ),
  [6, 5, 0, 6, 11, 11, 11, 8, 11, 0, 6, 6],
);
