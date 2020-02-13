// 937. Reorder Log Files
// https://leetcode.com/problems/reorder-data-in-log-files/

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

// Runtime: 64 ms, faster than 73.59% of JavaScript online submissions
// Memory Usage: 38.6 MB, less than 28.57% of JavaScript online submissions

/**
 * @param {string[]} logs
 * @return {string[]}
 */
const reorderLogFiles = logs => {
  const letterLogs = [];
  const digitLogs = [];

  const isLetterLog = log => {
    const iofs = log.indexOf(' ');
    return 71 < log.charCodeAt(iofs + 1, iofs + 2);
  };

  for (const log of logs)
    if (isLetterLog(log)) letterLogs.push(log);
    else digitLogs.push(log);

  const sortLetterLogs = (a, b) => {
    const [aPos, bPos] = [a.indexOf(' '), b.indexOf(' ')];
    const [aRound1, bRound1] = [a.substring(aPos + 1), b.substring(bPos + 1)];
    const cmpResult = aRound1.localeCompare(bRound1);
    if (0 !== cmpResult) return cmpResult;
    return a.substring(0, aPos).localeCompare(b.substring(0, bPos));
  };

  return letterLogs.sort(sortLetterLogs).concat(digitLogs);
};

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
