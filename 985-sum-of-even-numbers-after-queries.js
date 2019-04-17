// 985. Sum of Even Numbers After Queries
// https://leetcode.com/problems/sum-of-even-numbers-after-queries/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const sumEvens = a => a.reduce((acc, curr) => (0 === curr % 2 ? acc + curr : acc), 0)

// /**
//  * @param {number[]} A
//  * @param {number[][]} queries
//  * @return {number[]}
//  */
// const sumEvenAfterQueries = (A, queries) => queries.reduce((acc, curr) => {
//   // console.log(A);
//   const [value, index] = curr;
//   // console.log(`value: ${value} and index: ${index}`);
//   A[index] += value;
//   const evensSum = sumEvens(A);
//   // console.log(evensSum);
//   return [...acc, evensSum];
// }, []);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const sumEvens = a => a.reduce((acc, curr) => (0 === curr % 2 ? acc + curr : acc), 0);

// const sumEvens = a => {
//   let answer = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (0 === a[i] % 2) {
//       answer += a[i];
//     }
//   }
//   return answer;
// };

/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
const sumEvenAfterQueries = (A, queries) => {
  const answer = [];
  for (let i = 0; i < queries.length; i++) {
    // console.log(A);
    const [value, index] = queries[i];
    // console.log(`value: ${value} and index: ${index}`);
    A[index] += value;
    const evensSum = sumEvens(A);
    // console.log(evensSum);
    answer.push(evensSum);
  }
  return answer;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: {
      A: [1, 2, 3, 4],
      queries: [[1, 0], [-3, 1], [-4, 0], [2, 3]],
    },
    expected: [8, 6, 2, 4],
  },
];

const areArraysEqual = (a1, a2) => a1.length === a2.length && a1.join() === a2.join();

tests.forEach(({ name, input: { A, queries }, expected }) => {
  const result = sumEvenAfterQueries(A, queries);
  console.log(result);
  if (areArraysEqual(expected, result)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}, but got "${result}"`);
  }
});
