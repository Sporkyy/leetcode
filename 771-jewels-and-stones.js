// 771. Jewels and Stones
// https://leetcode.com/problems/jewels-and-stones/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = (J, S) => {
  if (0 === J.length || 0 === S.length) {
    return 0;
  }
  const occurrences = (n, h) => h.split('').filter(s => s === n).length;
  return J.split('').reduce((acc, curr) => acc + occurrences(curr, S), 0);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const examples = [
  ['aA', 'aAAbbbb', 3],
  ['z', 'ZZ', 0],
  ['', 'a', 0],
  ['a', '', 0],
  ['', '', 0],
  ['a', 'aaa', 3]
];

examples.forEach(example => {
  console.log(example[2] === numJewelsInStones(example[0], example[1]));
});
