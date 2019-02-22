// 905. Sort Array By Parity
// https://leetcode.com/problems/sort-array-by-parity/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = A => A.filter(n => 0 === n % 2).concat(A.filter(n => 1 === n % 2));

// I don't know what's wrong with this
// const sortArrayByParity = A => A.sort((n1, n2) => (0 === n1 % 2 ? (0 === n2 % 2 ? -1 : 0) : 1));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Given example',
    input: [3, 1, 2, 4],
    expected: [2, 4, 3, 1]
  },
  {
    name: 'Even first',
    input: [2, 3, 1, 4],
    expected: [2, 4, 3, 1]
  },
  {
    name: 'All evens',
    input: [0, 2, 4, 6],
    expected: [0, 2, 4, 6]
  },
  {
    name: 'All odds',
    input: [1, 3, 5, 7],
    expected: [1, 3, 5, 7]
  },
  {
    name: 'Odd number of numbers',
    input: [1, 3, 2, 5, 7],
    expected: [2, 1, 3, 5, 7]
  },
  {
    name: 'Alternating',
    input: [1, 2, 3, 4, 5],
    expected: [2, 4, 1, 3, 5]
  },
  {
    name: 'Errored out data',
    input: [
      4016,
      2240,
      402,
      1600,
      2540,
      4665,
      545,
      2756,
      3533,
      2737,
      4073,
      2701,
      4820,
      3016,
      2938,
      2225,
      2982,
      1924,
      2878,
      1451
    ],
    expected: [
      4820,
      1600,
      2540,
      2878,
      1924,
      402,
      2982,
      2938,
      2240,
      3016,
      2756,
      4073,
      4016,
      1451,
      4665,
      545,
      3533,
      2225,
      2737,
      2701
    ]
  }
];

// Gave up on an FP solution for this
const evensFirst = A => {
  let firstOddIndex;
  for (let i = 0; i < A.length; i++) {
    const isEven = 0 === A[i] % 2;
    if ('undefined' === typeof firstOddIndex && !isEven) {
      firstOddIndex = i;
    }
    if ('undefined' !== typeof firstOddIndex && isEven && firstOddIndex < i) {
      return false;
    }
  }
  return true;
};

tests.forEach(({ name, input, expected }) => {
  const result = sortArrayByParity(input);
  if (expected.length === result.length && evensFirst(expected) && evensFirst(result)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", got "${result}"`);
  }
});
