// 997. Find the Town Judge
// https://leetcode.com/problems/find-the-town-judge/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 100 ms, faster than 84.68% of JavaScript online submissions
// Memory Usage: 42.9 MB, less than 93.24% of JavaScript online submissions

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
// const findJudge = (N, trust) => {
//   const trusts = new Array(N).fill(0);
//   const trustedBy = new Array(N).fill(0);
//   trust.forEach(([p, c]) => {
//     trusts[p - 1]++;
//     trustedBy[c - 1]++;
//   });
//   const candidates = [];
//   for (let i = 0; i < N; i++) if (0 === trusts[i] && N - 1 === trustedBy[i]) candidates.push(i);
//   return 1 === candidates.length ? candidates[0] + 1 : -1;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 104 ms, faster than 74.40% of JavaScript online submissions
// Memory Usage: 43.7 MB, less than 52.70% of JavaScript online submissions

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
// const findJudge = (N, trust) => {
//   const p = new Array(N).fill(0);
//   trust.forEach(([x, y]) => ([p[x - 1], p[y - 1]] = [p[x - 1] + 1, p[y - 1] - 1]));
//   return p.reduce((a, c, i) => (-N + 1 === c ? i : a), -2) + 1;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 96 ms, faster than 90.81% of JavaScript online submissions
// Memory Usage: 43.7 MB, less than 52.70% of JavaScript online submissions

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
// const findJudge = (N, trust) => {
//   const a = new Array(N + 1).fill(0);
//   for (let [x, y] of trust) [a[x], a[y]] = [a[x] + 1, a[y] - 1];
//   for (let i = 1; i <= N; i++) if (-N + 1 === a[i]) return i;
//   return -1;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 104 ms, faster than 74.40% of JavaScript online submissions
// Memory Usage: 43.3 MB, less than 82.43% of JavaScript online submissions

// /**
//  * @param {number} N
//  * @param {number[][]} trust
//  * @return {number}
//  */
// const findJudge = (N, trust) => {
//   const a = new Array(N + 1).fill(0);
//   for (let [x, y] of trust) {
//     a[x]++;
//     a[y]--;
//   }
//   for (let i = 1; i <= N; i++) if (-N + 1 === a[i]) return i;
//   return -1;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 100 ms, faster than 71.60% of JavaScript online submissions
// Memory Usage: 43.9 MB, less than 20.00% of JavaScript online submissions

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = (N, trust) => {
  const a = new Array(N + 1).fill(0);
  for (let [x, y] of trust) [a[x], a[y]] = [a[x] + 1, a[y] - 1];
  for (let i = 1; i <= N; i++) if (-N + 1 === a[i]) return i;
  return -1;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(findJudge(2, [[1, 2]]), 2);

strictEqual(
  findJudge(3, [
    [1, 3],
    [2, 3],
  ]),
  3,
);

strictEqual(
  findJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1],
  ]),
  -1,
);

strictEqual(
  findJudge(3, [
    [1, 2],
    [2, 3],
  ]),
  -1,
);

strictEqual(
  findJudge(4, [
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [4, 3],
  ]),
  3,
);

strictEqual(
  findJudge(4, [
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 3],
    [1, 4],
    [4, 3],
    [4, 1],
  ]),
  3,
);

strictEqual(findJudge(1, []), 1);
