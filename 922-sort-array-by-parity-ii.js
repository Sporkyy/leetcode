// 922. Sort Array By Parity II
// https://leetcode.com/problems/sort-array-by-parity-ii/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const isEven = n => 0 === n % 2;
const isOdd = n => 1 === n % 2;

/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParityII = A => {
  const evens = A.filter(n => isEven(n));
  // console.log(evens);
  const odds = A.filter(n => isOdd(n));
  // console.log(odds);
  const answer = [];
  for (let i = (e = o = 0); i < A.length; i++) {
    if (isEven(i)) {
      answer.push(evens[e++]);
    } else {
      answer.push(odds[o++]);
    }
  }
  return answer;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: [4, 2, 5, 7],
  },
];

const sortArrayByParityIICheck = a =>
  a.every((n, i) => (isEven(n) && isEven(i)) || (isOdd(n) && isOdd(i)));

tests.forEach(({ name, input }) => {
  const result = sortArrayByParityII(input);
  console.log(result);
  if (sortArrayByParityIICheck(result)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
  }
});
