// 937. Reorder Log Files
// https://leetcode.com/problems/reorder-log-files/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const logIdentifier = log => log.slice(0, log.indexOf(' '));

const logMinusIdentifier = log => log.slice(log.indexOf(' ') + 1);

const isLetterLog = log => !/\d/.test(logMinusIdentifier(log));

const sortableLog = log => `${logMinusIdentifier(log)} ${logIdentifier(log)}`;

/**
 * @param {string[]} logs
 * @return {string[]}
 */
const reorderLogFiles = logs => {
  const letterLogs = [];
  const digitLogs = [];

  for (let i = 0; i < logs.length; i++) {
    if (isLetterLog(logs[i])) {
      letterLogs.push(logs[i]);
    } else {
      digitLogs.push(logs[i]);
    }
  }

  return letterLogs
    .sort((a, b) => {
      const sortableA = sortableLog(a);
      const sortableB = sortableLog(b);
      return sortableA < sortableB ? -1 : sortableB < sortableA ? 1 : 0;
    })
    .concat(digitLogs);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: ['a1 9 2 3 1', 'g1 act car', 'zo4 4 7', 'ab1 off key dog', 'a8 act zoo'],
    expected: ['g1 act car', 'a8 act zoo', 'ab1 off key dog', 'a1 9 2 3 1', 'zo4 4 7'],
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
