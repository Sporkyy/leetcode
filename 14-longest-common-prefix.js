// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 80.12% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 35 MB, less than 50.54% of JavaScript online submissions for Longest Common Prefix.

/**
 * @param {string[]} strs
 * @return {string}
 */
// const longestCommonPrefix = strs => {
//   let prefix = '';

//   const charAtInStrs = n => strs.map(s => s.slice(n, n + 1));

//   const isArrayHomogeneous = a =>
//     a.reduce((acc, curr, i) => acc && (curr === a[i + 1] || 'undefined' === typeof a[i + 1]), true);

//   const isArrayFull = a => a.length === a.join('').length;

//   let slicePoint = 0;

//   while (true) {
//     const chars = charAtInStrs(slicePoint);
//     if (0 < chars.length && isArrayFull(chars) && isArrayHomogeneous(chars)) {
//       prefix += chars[0];
//       slicePoint++;
//     } else {
//       break;
//     }
//   }

//   return prefix;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 80.12% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 35.1 MB, less than 44.45% of JavaScript online submissions for Longest Common Prefix.

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  if (0 === strs.length) return '';
  if (1 === strs.length) return strs[0];
  let prefix = '';
  let tmp = '';
  let i = 0;
  while (true) {
    const c = strs[0][i];
    if ('undefined' === typeof c) break;
    tmp += c;
    for (let j = 1; j < strs.length; j++) {
      if (!strs[j].startsWith(tmp)) return prefix;
    }
    prefix += c;
    i++;
  }
  return prefix;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: ['flower', 'flow', 'flight'],
    expected: 'fl',
  },
  {
    name: 'Example 2',
    input: ['dog', 'racecar', 'car'],
    expected: '',
  },
  {
    name: 'Many repeats',
    input: ['wwwwwww', 'wwwwww', 'wwwww', 'wwww', 'www'],
    expected: 'www',
  },
  {
    name: 'Empty array',
    input: [],
    expected: '',
  },
  {
    name: 'abca, abc',
    input: ['abca', 'abc'],
    expected: 'abc',
  },
  {
    name: 'a',
    input: ['a'],
    expected: 'a',
  },
];

tests.forEach(({ name, input, expected }) => {
  const output = longestCommonPrefix(input);
  if (expected === output) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
});
