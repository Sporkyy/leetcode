// 937. Reorder Data in Log Files
// https://leetcode.com/problems/reorder-data-in-log-files/

/*

You have an array of logs. Each log is a space delimited string of words.

For each log, the first word in each log is an alphanumeric identifier.
Then, either:

- Each word after the identifier will consist only of lowercase letters, or;
- Each word after the identifier will consist only of digits.
- We will call these two varieties of logs letter-logs and digit-logs.
  It is guaranteed that each log has at least one word after its identifier.

Reorder the logs so that all of the letter-logs come before any digit-log.
The letter-logs are ordered lexicographically ignoring identifier,
with the identifier used in case of ties.
The digit-logs should be put in their original order.

Return the final order of the logs.

*/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 87.60% of JavaScript online submissions
// Memory Usage: 37.1 MB, less than 50.00% of JavaScript online submissions

// const logIdentifier = log => log.slice(0, log.indexOf(' '));

// const logMinusIdentifier = log => log.slice(log.indexOf(' ') + 1);

// const isDigitLog = log => /\d/.test(logMinusIdentifier(log));

// const sortableLog = log => `${logMinusIdentifier(log)} ${logIdentifier(log)}`;

// /**
//  * @param {string[]} logs
//  * @return {string[]}
//  */
// const reorderLogFiles = logs => {
//   const letterLogs = [];
//   const digitLogs = [];

//   for (let i = 0; i < logs.length; i++) {
//     if (isDigitLog(logs[i])) {
//       digitLogs.push(logs[i]);
//     } else {
//       letterLogs.push(logs[i]);
//     }
//   }

//   return letterLogs
//     .sort((a, b) => {
//       const sortableA = sortableLog(a);
//       const sortableB = sortableLog(b);
//       return sortableA < sortableB ? -1 : sortableB === sortableA ? 0 : 1;
//     })
//     .concat(digitLogs);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 99.61% of JavaScript online submissions
// Memory Usage: 36.7 MB, less than 83.33% of JavaScript online submissions

// /**
//  * @param {string[]} logs
//  * @return {string[]}
//  */
// const reorderLogFiles = logs => {
//   const logsWithInfo = logs.map(original => {
//     const identifier = original.slice(0, original.indexOf(' '));
//     const body = original.slice(original.indexOf(' ') + 1);
//     const type = /\d/.test(body) ? 'digit' : 'letter';
//     const sortable = `${body} ${identifier}`;

//     return {
//       original,
//       sortable,
//       type,
//     };
//   });

//   return logsWithInfo
//     .filter(({ type }) => 'letter' === type)
//     .sort(({ sortable: a }, { sortable: b }) => (a < b ? -1 : b === a ? 0 : 1))
//     .map(({ original }) => original)
//     .concat(logsWithInfo.filter(({ type }) => 'digit' === type).map(({ original }) => original));
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 99.61% of JavaScript online submissions
// Memory Usage: 36.5 MB, less than 83.33% of JavaScript online submissions

// /**
//  * @param {string[]} logs
//  * @return {string[]}
//  */
// const reorderLogFiles = logs => {
//   const letterLogs = [];
//   const digitLogs = [];

//   for (let i = 0; i < logs.length; i++) {
//     const body = logs[i].slice(logs[i].indexOf(' ') + 1);
//     if (/\d/.test(body)) {
//       digitLogs.push(logs[i]);
//     } else {
//       letterLogs.push({
//         original: logs[i],
//         sortable: `${body} ${logs[i].slice(0, logs[i].indexOf(' '))}`,
//       });
//     }
//   }

//   return letterLogs
//     .sort(({ sortable: a }, { sortable: b }) => (a < b ? -1 : b === a ? 0 : 1))
//     .map(({ original }) => original)
//     .concat(digitLogs);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 24.23% of JavaScript online submissions
// Memory Usage: 37.3 MB, less than 71.43% of JavaScript online submissions

// /**
//  * @param {string[]} logs
//  * @return {string[]}
//  */
// const reorderLogFiles = logs => {
//   const letterLogs = [];
//   const digitLogs = [];

//   for (log of logs) {
//     iofs = log.indexOf(' ');
//     if (/\d/.test(log.substring(iofs + 1, iofs + 2))) {
//       digitLogs.push(log);
//     } else {
//       letterLogs.push({
//         original: log,
//         sortable: log.slice(iofs + 1) + log.slice(0, iofs),
//       });
//     }
//   }

//   return letterLogs
//     .sort(({ sortable: a }, { sortable: b }) => a.localeCompare(b))
//     .map(({ original }) => original)
//     .concat(digitLogs);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 91.72% of JavaScript online submissions
// Memory Usage: 38.4 MB, less than 42.86% of JavaScript online submissions

// /**
//  * @param {string[]} logs
//  * @return {string[]}
//  */
// const reorderLogFiles = logs => {
//   const letterLogs = [];
//   const digitLogs = [];

//   const isLetterLog = log => {
//     const iofs = log.indexOf(' ');
//     return 71 < log.charCodeAt(iofs + 1, iofs + 2);
//   };

//   for (const log of logs)
//     if (isLetterLog(log)) letterLogs.push(log);
//     else digitLogs.push(log);

//   const sortLetterLogs = (a, b) => {
//     const [aPos, bPos] = [a.indexOf(' '), b.indexOf(' ')];
//     const [aRound1, bRound1] = [a.substring(aPos + 1), b.substring(bPos + 1)];
//     const cmpResult = aRound1.localeCompare(bRound1);
//     if (0 !== cmpResult) return cmpResult;
//     return a.substring(0, aPos).localeCompare(b.substring(0, bPos));
//   };

//   return letterLogs.sort(sortLetterLogs).concat(digitLogs);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 81.72% of JavaScript online submissions
// Memory Usage: 37.8 MB, less than 42.86% of JavaScript online submissions

// /**
//  * @param {string[]} logs
//  * @return {string[]}
//  */
// const reorderLogFiles = logs => {
//   let letterLogs = [];
//   const digitLogs = [];

//   for (const log of logs)
//     if (/\d$/.test(log)) digitLogs.push(log);
//     else letterLogs.push(log);

//   letterLogs = letterLogs.sort((a, b) =>
//     a
//       .replace(/^(\S+)\s(.*)/, '$2$1')
//       .localeCompare(b.replace(/^(\S+)\s(.*)/, '$2$1')),
//   );

//   return letterLogs.concat(digitLogs);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 38.75% of JavaScript online submissions
// Memory Usage: 37.8 MB, less than 42.86% of JavaScript online submissions

// /**
//  * @param {string[]} logs
//  * @return {string[]}
//  */
// const reorderLogFiles = logs =>
//   logs
//     .filter(log => /[a-z]$/.test(log))
//     .sort((a, b) =>
//       a
//         .replace(/^(\S+)\s(.*)/, '$2$1')
//         .localeCompare(b.replace(/^(\S+)\s(.*)/, '$2$1')),
//     )
//     .concat(logs.filter(log => /\d$/.test(log)));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 95.71% of JavaScript online submissions
// Memory Usage: 44 MB, less than 19.38% of JavaScript online submissions

// /**
//  * @param {string[]} logs
//  * @return {string[]}
//  */
// const reorderLogFiles = logs =>
//   logs
//     .filter(log => /[a-z]$/.test(log))
//     .sort((a, b) =>
//       ((aId, aWords, bId, bWords) =>
//         aWords.localeCompare(bWords) || aId.localeCompare(bId))(
//         a.slice(0, a.indexOf(' ')),
//         a.slice(a.indexOf(' ')),
//         b.slice(0, b.indexOf(' ')),
//         b.slice(b.indexOf(' ')),
//       ),
//     )
//     .concat(logs.filter(log => /\d$/.test(log)));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 92 ms, faster than 47.17% of JavaScript online submissions
// Memory Usage: 45.8 MB, less than 9.09% of JavaScript online submissions

// /**
//  * @param {string[]} logs
//  * @return {string[]}
//  */
// const reorderLogFiles = logs =>
//   logs
//     .filter(log => /[a-z]$/.test(log))
//     .sort((a, b) =>
//       ((aId, aWords, _, bId, bWords) =>
//         aWords.localeCompare(bWords) || aId.localeCompare(bId))(
//         ...a.split(/\s(.+)/),
//         ...b.split(/\s(.+)/),
//       ),
//     )
//     .concat(logs.filter(log => /\d$/.test(log)));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 88 ms, faster than 70.15% of JavaScript online submissions
// Memory Usage: 45.1 MB, less than 14.41% of JavaScript online submissions

// /**
//  * @param {string[]} logs
//  * @return {string[]}
//  */
// const reorderLogFiles = logs =>
//   ((lLogs, dLogs) => [
//     ...lLogs
//       .sort(
//         ([aId, aWords], [bId, bWords]) =>
//           aWords.localeCompare(bWords) || aId.localeCompare(bId),
//       )
//       .map(([id, s]) => `${id} ${s}`),
//     ...dLogs,
//   ])(
//     ...logs.reduce(
//       ([lLogs, dLogs], curr) =>
//         Number.isInteger(+curr[curr.length - 1])
//           ? [lLogs, [...dLogs, curr]]
//           : [
//               [
//                 ...lLogs,
//                 [
//                   curr.slice(0, curr.indexOf(' ')),
//                   curr.slice(curr.indexOf(' ') + 1),
//                 ],
//               ],
//               dLogs,
//             ],
//       [[], []],
//     ),
//   );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 96 ms, faster than 31.56% of JavaScript online submissions
// Memory Usage: 43.8 MB, less than 24.70% of JavaScript online submissions

// /**
//  * @param {string[]} logs
//  * @return {string[]}
//  */
// const reorderLogFiles = logs => {
//   const [lLogs, dLogs] = [[], []];
//   for (const log of logs)
//     if (Number.isInteger(+log[log.length - 1])) dLogs.push(log);
//     else
//       lLogs.push([
//         log.slice(0, log.indexOf(' ')),
//         log.slice(log.indexOf(' ') + 1),
//       ]);
//   lLogs.sort(
//     ([aId, aWords], [bId, bWords]) =>
//       aWords.localeCompare(bWords) || aId.localeCompare(bId),
//   );
//   return [...lLogs.map(([id, words]) => `${id} ${words}`), ...dLogs];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 129 ms, faster than 17.34% of JavaScript online submissions
// Memory Usage: 48.2 MB, less than 18.73% of JavaScript online submissions

// /**
//  * @param {string[]} logs
//  * @return {string[]}
//  */
// const reorderLogFiles = logs => {
//   logs.sort((a, b) => {
//     // ({ a, b }); // ?
//     // ({ a: a.replace(/(\S+)\s(.+)/, '$2 $1'), b: b.replace(/(\S+)\s(.+)/, '$2 $1') }) //?
//     if (/^\S+[\d\s]+$/.test(a)) {
//       // ({ a, b }); // ?
//       return 1;
//     }
//     if (/^\S+[\d\s]+$/.test(b)) {
//       // ({ a, b }); // ?
//       return -1;
//     }
//     // return a.replace(/(\S+)\s(.+)/, '$2 $1').localeCompare(b.replace(/(\S+)\s(.+)/, '$2 $1'));
//     return a.replace(/\S+\s(.+)/, '$1').localeCompare(b.replace(/\S+\s(.+)/, '$1')) || a.localeCompare(b);
//   });
//   return logs; // ?
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 115 ms, faster than 32.97% of JavaScript online submissions
// Memory Usage: 48 MB, less than 19.97% of JavaScript online submissions

// /**
//  * @param {string[]} logs
//  * @return {string[]}
//  */
// const reorderLogFiles = logs =>
//   logs.sort((a, b) =>
//     /^\S+[\d\s]+$/.test(a) ? 1 :
//       /^\S+[\d\s]+$/.test(b) ? -1 :
//         a.replace(/\S+\s(.+)/, '$1').localeCompare(
//           b.replace(/\S+\s(.+)/, '$1')) || a.localeCompare(b)
//   );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(
  reorderLogFiles([
    'a1 9 2 3 1',
    'g1 act car',
    'zo4 4 7',
    'ab1 off key dog',
    'a8 act zoo',
  ]),
  ['g1 act car', 'a8 act zoo', 'ab1 off key dog', 'a1 9 2 3 1', 'zo4 4 7'],
);

deepStrictEqual(
  reorderLogFiles([
    'a1 9 2 3 1',
    'g1 act car',
    'zo4 4 7',
    'ab1 off key dog',
    'a8 act zoo',
    'a2 act car',
  ]),
  [
    'a2 act car',
    'g1 act car',
    'a8 act zoo',
    'ab1 off key dog',
    'a1 9 2 3 1',
    'zo4 4 7',
  ],
);

deepStrictEqual(
  reorderLogFiles([
    'dig1 8 1 5 1',
    'let1 art zero can',
    'dig2 3 6',
    'let2 own kit dig',
    'let3 art zero',
  ]),
  [
    'let3 art zero',
    'let1 art zero can',
    'let2 own kit dig',
    'dig1 8 1 5 1',
    'dig2 3 6',
  ],
);
