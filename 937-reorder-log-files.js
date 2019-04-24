// 937. Reorder Log Files
// https://leetcode.com/problems/reorder-log-files/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 87.60% of JavaScript online submissions for Reorder Log Files.
// Memory Usage: 37.1 MB, less than 50.00% of JavaScript online submissions for Reorder Log Files.

// const logIdentifier = log => log.slice(0, log.indexOf(' '));

// const logMinusIdentifier = log => log.slice(log.indexOf(' ') + 1);

// const isDigitLog = log => /\d/.test(logMinusIdentifier(log));

// const sortableLog = log => `${logMinusIdentifier(log)} ${logIdentifier(log)}`;

/**
 * @param {string[]} logs
 * @return {string[]}
 */
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
//       return sortableA < sortableB ? -1 : sortableB < sortableA ? 1 : 0;
//     })
//     .concat(digitLogs);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 99.61% of JavaScript online submissions for Reorder Log Files.
// Memory Usage: 36.7 MB, less than 83.33% of JavaScript online submissions for Reorder Log Files.

/**
 * @param {string[]} logs
 * @return {string[]}
 */
const reorderLogFiles = logs => {
  logsWithInfo = logs.map(original => {
    const identifier = original.slice(0, original.indexOf(' '));
    const body = original.slice(original.indexOf(' ') + 1);
    const type = /\d/.test(body) ? 'digit' : 'letter';
    const sortable = `${body} ${identifier}`;

    return {
      original,
      sortable,
      type,
    };
  });

  return logsWithInfo
    .filter(({ type }) => 'letter' === type)
    .sort(({ sortable: a }, { sortable: b }) => (a < b ? -1 : b < a ? 1 : 0))
    .map(({ original }) => original)
    .concat(logsWithInfo.filter(({ type }) => 'digit' === type).map(({ original }) => original));
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: ['a1 9 2 3 1', 'g1 act car', 'zo4 4 7', 'ab1 off key dog', 'a8 act zoo'],
    expected: ['g1 act car', 'a8 act zoo', 'ab1 off key dog', 'a1 9 2 3 1', 'zo4 4 7'],
  },
  {
    name: 'Tiebreaker',
    input: ['a1 9 2 3 1', 'g1 act car', 'zo4 4 7', 'ab1 off key dog', 'a8 act zoo', 'a2 act car'],
    expected: [
      'a2 act car',
      'g1 act car',
      'a8 act zoo',
      'ab1 off key dog',
      'a1 9 2 3 1',
      'zo4 4 7',
    ],
  },
];

const areArraysEqual = (a, b) => a.length === b.length && a.join() === b.join();

tests.forEach(({ name, input, expected }) => {
  const output = reorderLogFiles(input);
  if (areArraysEqual(expected, output)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log('Expected');
    console.log(expected);
    console.log('But got');
    console.log(output);
  }
});
