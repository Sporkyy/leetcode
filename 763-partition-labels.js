// 763. Partition Labels
// https://leetcode.com/problems/partition-labels/

/*

A string S of lowercase English letters is given. We want to partition this
string into as many parts as possible so that each letter appears in at most one
part, and return a list of integers representing the size of these parts.

## Note

- S will have length in range [1, 500].
- S will consist of lowercase English letters ('a' to 'z') only.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 80 ms, faster than 95.22% of JavaScript online submissions
// Memory Usage: 39.6 MB, less than 87.75% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {number[]}
//  */
// const partitionLabels = s => {
//   const indices = new Array(s.length).fill(-1);
//   for (let i = 0; i < s.length; i++) indices[s.charCodeAt(i) - 97] = i;
//   // console.log(indices.join());
//   const res = [];
//   for (let i = 0, iMax = -1, sum = 1; i < s.length; i++, sum++) {
//     // console.log(`i=${i} iMax=${iMax}`);
//     iMax = Math.max(iMax, indices[s.charCodeAt(i) - 97]);
//     if (i === iMax) {
//       res.push(sum);
//       // console.log(i, sum);
//       sum = 0;
//     }
//   }
//   // console.log(res);
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 88 ms, faster than 70.13% of JavaScript online submissions
// Memory Usage: 39.9 MB, less than 76.66% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {number[]}
//  */
// const partitionLabels = s => {
//   const lastIndices = new Array(s.length).fill(-1);
//   for (let i = 0; i < s.length; i++) lastIndices[s.charCodeAt(i) - 97] = i;
//   const res = [];
//   for (let i = 0, liMax = -1, sum = 1; i < s.length; i++, sum++) {
//     liMax = Math.max(liMax, lastIndices[s.charCodeAt(i) - 97]);
//     if (i === liMax) {
//       res.push(sum);
//       sum = 0;
//     }
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 112 ms, faster than 17.41% of JavaScript online submissions
// Memory Usage: 43.5 MB, less than 6.99% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {number[]}
//  */
// const partitionLabels = s => {
//   let indCnts = new Array(26).fill().map(() => [-1, -1, 0]);
//   for (let i = 0; i < s.length; i++) {
//     const code = s.charCodeAt(i) - 97;
//     if (-1 === indCnts[code][0]) indCnts[code][0] = i;
//     indCnts[code][1] = i;
//     indCnts[code][2]++;
//   }
//   indCnts.sort(([a, c], [b, d]) => a - b || c - d);
//   // console.log(indices);
//   let [partMin, partMax, partCnt] = [Infinity, -Infinity, 0];
//   // for (let i = 0; i < indices.length; i++) {
//   //   console.log(indices[i]);
//   //   min = Math.min(min, indices[i][0]); // ?
//   //   max = Math.max(max, indices[i][1]); // ?
//   // }
//   const res = [];
//   for (const [charMin, charMax, charCnt] of indCnts) {
//     // console.log([charMin, charMax, charCnt]);
//     if (partMax < charMin) {
//       // console.log(`here ${partCnt}`);
//       res.push(partCnt);
//       partCnt = 0;
//     }
//     partMin = Math.min(partMin, charMin);
//     partMax = Math.max(partMax, charMax);
//     partCnt += charCnt;
//   }
//   res.push(partCnt);
//   console.log(res);
//   while (0 === res[0]) res.shift();
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 168 ms, faster than 5.15% of JavaScript online submissions
// Memory Usage: 48.2 MB, less than 5.16% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {number[]}
//  */
// const partitionLabels = s => {
//   const cMap = new Map();
//   for (let i = 0; i < s.length; i++) {
//     const [minIdx, , cnt] = cMap.get(s[i]) || [Infinity, , 0];
//     cMap.set(s[i], [Math.min(i, minIdx), i, cnt + 1]);
//   }
//   let [partMin, partMax] = [Infinity, -Infinity];
//   const res = [];
//   for (const [charMin, charMax, charCnt] of cMap.values()) {
//     if (partMax < charMin) res.push(0);
//     partMin = Math.min(partMin, charMin);
//     partMax = Math.max(partMax, charMax);
//     res[res.length - 1] += charCnt;
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 152 ms, faster than 5.15% of JavaScript online submissions
// Memory Usage: 45.9 MB, less than 5.16% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {number[]}
//  */
// const partitionLabels = s => {
//   const cMap = new Map();
//   for (const [idx, char] of [...s].entries()) {
//     const [minIdx, , cnt] = cMap.get(char) || [Infinity, , 0];
//     cMap.set(char, [Math.min(idx, minIdx), idx, cnt + 1]);
//   }
//   let [partMin, partMax] = [Infinity, -Infinity];
//   const res = [];
//   for (const [charMin, charMax, charCnt] of cMap.values()) {
//     if (partMax < charMin) res.push(0);
//     partMin = Math.min(partMin, charMin);
//     partMax = Math.max(partMax, charMax);
//     res[res.length - 1] += charCnt;
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 104 ms, faster than 21.99% of JavaScript online submissions
// Memory Usage: 41.7 MB, less than 19.36% of JavaScript online submissions

// /**
//  * @param {string} s
//  * @return {number[]}
//  */
// const partitionLabels = s => {
//   const indices = new Array(26);
//   for (let i = 0; i < s.length; i++) {
//     const [fi] = indices[s.charCodeAt(i) - 97] || [i];
//     indices[s.charCodeAt(i) - 97] = [fi, i];
//   }
//   indices.sort(([a, c], [b, d]) => a - b || c - d);
//   let [partMin, partMax] = [0, 0];
//   const res = [];
//   for (let i = 0; i < indices.length; i++) {
//     if (!indices[i]) break;
//     const [charMin, charMax] = indices[i];
//     if (partMax < charMin) {
//       res.push(partMax - partMin + 1);
//       partMin = Infinity;
//     }
//     partMax = Math.max(partMax, charMax);
//     partMin = Math.min(partMin, charMin);
//     if (charMax === s.length - 1) {
//       res.push(s.length - partMin);
//       break;
//     }
//   }
//   return res;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 144 ms, faster than 5.84% of JavaScript online submissions
// Memory Usage: 42 MB, less than 13.97% of JavaScript online submissions

/**
 * @param {string} s
 * @return {number[]}
 */
const partitionLabels = s => {
  const liMap = new Map();
  const cnts = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    liMap.set(s[i], i);
    cnts[s.charCodeAt(i) - 97]++;
  }
  let [pMin, pMax] = [Infinity, -Infinity];
  const res = [];
  for (let i = 0; i < s.length && liMap.size; i++) {
    if (!liMap.has(s[i])) continue;
    const [cMin, cMax] = [i, liMap.get(s[i])];
    if (pMax < cMin) res.push(0);
    liMap.delete(s[i]);
    res[res.length - 1] += cnts[s.charCodeAt(i) - 97];
    [pMin, pMax] = [Math.min(pMin, cMin), Math.max(pMax, cMax)];
  }
  return res;
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { deepStrictEqual } from 'assert';

// Example 1:
deepStrictEqual(partitionLabels('ababcbacadefegdehijhklij'), [9, 7, 8]);
// - The partition is "ababcbaca", "defegde", "hijhklij".
// - This is a partition so that each letter appears in at most one part.
// - A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it
//   splits S into less parts.

// |0|1|2|3|4|5|6|7|8| 9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|
// |a|b|a|b|c|b|a|c|a| d| e| f| e| g| d| e| h| i| j| h| k| l| i| j|
// |8|5|8|5|7|5|8|7|8|14|15|11|15|13|14|15|19|22|23|19|20|21|17|23|
// |8|8|8|8|8|8|8|8|8|14|15|15|15|15|15|15|19|22|23|23|23|23|23|23|

deepStrictEqual(partitionLabels('eccbbbbdec'), [10]);
// |0|1|2|3|4|5|6|7|8|9|
// |e|c|c|b|b|b|b|d|e|c|
// |8|9|9|6|6|6|6|7|8|9|

deepStrictEqual(partitionLabels('caedbdedda'), [1, 9]);
// |0|1|2|3|4|5|6|7|8|9|
// |c|a|e|d|b|d|e|d|d|a|
// |0|9|6|8|4|8|6|8|8|9|

deepStrictEqual(partitionLabels('eaaaabaaec'), [9, 1]);
// |0|1|2|3|4|5|6|7|8|9|
// |e|a|a|a|a|b|a|a|e|c|
// |8|7|7|7|7|5|7|7|8|9|

deepStrictEqual(
  partitionLabels(
    'ntswuqqbidunnixxpoxxuuupotaatwdainsotwvpxpsdvdbwvbtdiptwtxnnbtqbdvnbowqitudutpsxsbbsvtipibqpvpnivottsxvoqqaqdxiviidivndvdtbvadnxboiqivpusuxaaqnqaobutdbpiosuitdnopoboivopaapadvqwwnnwvxndpxbapixaspwxxxvppoptqxitsvaaawxwaxtbxuixsoxoqdtopqqivaitnpvutzchkygjjgjkcfzjzrkmyerhgkglcyffezmehjcllmlrjghhfkfylkgyhyjfmljkzglkklykrjgrmzjyeyzrrkymccefggczrjflykclfhrjjckjlmglrmgfzlkkhffkjrkyfhegyykrzgjzcgjhkzzmzyejycfrkkekmhzjgggrmchkeclljlyhjkchmhjlehhejjyccyegzrcrerfzczfelzrlfylzleefgefgmzzlggmejjjygehmrczmkrc',
  ),
  [246, 254],
);
