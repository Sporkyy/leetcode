// 944. Delete Columns to Make Sorted
// https://leetcode.com/problems/delete-columns-to-make-sorted/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const extractColumn = (a, i) => a.reduce((acc, curr) => [...acc, curr[i]], []);

const isArrayNonDecreasing = a => {
  if (a.length < 2) return undefined;
  let answer = true;
  for (let i = 0; i < a.length - 1; i++) {
    const curr = a[i];
    const next = a[i + 1];
    // console.log(`${curr} then ${next}`);
    answer = answer && curr <= next;
  }
  return answer;
};

/**
 * @param {string[]} A
 * @return {number}
 */
const minDeletionSize = A => {
  if (0 == A.length) return undefined;
  const colCount = A[0].length;
  let nonIncreasingColCount = 0;
  for (let i = 0; i < colCount; i++) {
    const col = extractColumn(A, i);
    // console.log(`${col} = ${isArrayIncreasing(col)}`);
    if (!isArrayNonDecreasing(col)) {
      nonIncreasingColCount++;
    }
  }
  return nonIncreasingColCount;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  { name: 'Example 1', input: ['cba', 'daf', 'ghi'], expected: 1 },
  { name: 'Example 2', input: ['a', 'b'], expected: 0 },
  { name: 'Example 3', input: ['zyx', 'wvu', 'tsr'], expected: 3 },
  { name: 'Rectangular', input: ['abcdef', 'abcdef', 'abcdef'], expected: 0 },
  { name: 'Wrong Answer', input: ['rrjk', 'furt', 'guzm'], expected: 2 }
];

const inColumns = a =>
  a.reduce(
    (acc, curr) => `${acc}| ${curr.split('').join(' | ')} |\n`,
    `| ${a[0]
      .split('')
      .map((s, i) => i)
      .join(' | ')} |\n| ${a[0]
      .split('')
      .map(() => '-')
      .join(' | ')} |\n`
  );

tests.forEach(({ name, input, expected }) => {
  const result = minDeletionSize(input);
  if (expected === result) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
  console.log(inColumns(input));
});
