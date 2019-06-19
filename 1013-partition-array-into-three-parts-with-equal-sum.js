// 1013. Partition Array Into Three Parts With Equal Sum
// https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[]} A
 * @return {boolean}
 */
const canThreePartsEqualSum = A => {
  if (A.length < 3) return false;
  const sumArray = a => a.reduce((a, c) => a + c, 0);
  if (0 !== sumArray(A) % 3) return false;
  for (i = 1; i < A.length - 1; i++) {
    for (j = A.length - 1; i < j; j--) {
      const part1 = A.slice(0, i);
      const part2 = A.slice(i, j);
      const part3 = A.slice(j, A.length);

      // console.log(part1, part2, part3);

      const sum1 = sumArray(part1);
      const sum2 = sumArray(part2);
      const sum3 = sumArray(part3);

      // console.log(sum1, sum2, sum3);

      if (sum1 === sum2 && sum2 === sum3) return true;
    }
  }
  return false;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1],
    expected: true,
  },
  // Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
  {
    input: [0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1],
    expected: false,
  },
  {
    input: [3, 3, 6, 5, -2, 2, 5, 1, -9, 4],
    expected: true,
  },
  // Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
  {
    input: [3, 3, 6, 5, -2, 2, 5, 1, -9, 3],
    expected: false,
  },
  {
    input: [3, 3],
    expected: false,
  },
  {
    input: [18, 12, -18, 18, -19, -1, 10, 10],
    expected: true,
  },
  // [18, 12, -18, 18, -19, -1] = 10
  // [10] = 10
  // [10] = 10
];

tests.forEach(({ input, expected }) => {
  const output = canThreePartsEqualSum(input);
  if (expected === output) {
    console.log(`✅ ${input.join(', ')}`);
  } else {
    console.log(`🔴 ${input.join(', ')}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
});
