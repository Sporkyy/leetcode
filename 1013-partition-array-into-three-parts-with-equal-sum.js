// 1013. Partition Array Into Three Parts With Equal Sum
// https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Time Limit Exceeded

/**
 * @param {number[]} A
 * @return {boolean}
 */
// const canThreePartsEqualSum = A => {
//   if (A.length < 3) return false;
//   const sumArray = a => a.reduce((a, c) => a + c, 0);
//   if (0 !== sumArray(A) % 3) return false;
//   for (i = 1; i < A.length - 1; i++) {
//     for (j = A.length - 1; i < j; j--) {
//       const part1 = A.slice(0, i);
//       const part2 = A.slice(i, j);
//       const part3 = A.slice(j, A.length);

//       // console.log(part1, part2, part3);

//       const sum1 = sumArray(part1);
//       const sum2 = sumArray(part2);
//       const sum3 = sumArray(part3);

//       // console.log(sum1, sum2, sum3);

//       if (sum1 === sum2 && sum2 === sum3) return true;
//     }
//   }
//   return false;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 49.69% of JavaScript online submissions for
// Partition Array Into Three Parts With Equal Sum.
// Memory Usage: 40.4 MB, less than 28.21% of JavaScript online submissions for
// Partition Array Into Three Parts With Equal Sum.

/**
 * @param {number[]} A
 * @return {boolean}
 */
// const canThreePartsEqualSum = A => {
//   const sum = A.reduce((arr, curr) => arr + curr, 0);
//   if (0 !== sum % 3) return false;
//   const target = A.reduce((arr, curr) => arr + curr, 0) / 3;
//   // console.log(target);
//   let [lsum, rsum] = [0, 0];
//   // console.log(lsum, rsum);
//   for (i = 0; i < A.length - 2; i++) {
//     lsum += A[i];
//     // console.log(`${i} = ${lsum}`);
//     if (lsum !== target) continue;
//     for (j = A.length - 1; i < j; j--) {
//       rsum += A[j];
//       // console.log(`${j} = ${rsum}`);
//       if (rsum !== target) continue;
//       const msum = A.slice(i + 1, j).reduce((arr, curr) => arr + curr, 0);
//       // console.log(msum);
//       if (msum === target) return true;
//     }
//   }
//   return false;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 83.23% of JavaScript online submissions
// for Partition Array Into Three Parts With Equal Sum.
// Memory Usage: 39.7 MB, less than 67.31% of JavaScript online submissions
// for Partition Array Into Three Parts With Equal Sum.

/**
 * @param {number[]} A
 * @return {boolean}
 */
// const canThreePartsEqualSum = A => {
//   const total = A.reduce((arr, curr) => arr + curr, 0);
//   if (0 !== total % 3) return false;
//   const target = total / 3;
//   let [sum, count, pos] = [0, 0, -1];
//   while (pos < A.length - 1) {
//     sum += A[++pos];
//     if (target === sum) [sum, count] = [0, count + 1];
//   }
//   return 3 === count;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 89.31% of JavaScript online submissions
// for Partition Array Into Three Parts With Equal Sum.
// Memory Usage: 39.7 MB, less than 69.55% of JavaScript online submissions
// for Partition Array Into Three Parts With Equal Sum.

/**
 * @param {number[]} A
 * @return {boolean}
 */
// const canThreePartsEqualSum = A => {
//   const target = A.reduce((arr, curr) => arr + curr, 0) / 3;
//   let sum = 0;
//   for (let i = 0; i < A.length; i++) {
//     sum += A[i];
//     if (target === sum) sum = 0;
//   }
//   return 0 === sum;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 89.31% of JavaScript online submissions
// for Partition Array Into Three Parts With Equal Sum.
// Memory Usage: 39.7 MB, less than 68.59% of JavaScript online submissions
// for Partition Array Into Three Parts With Equal Sum.

/**
 * @param {number[]} A
 * @return {boolean}
 */
// const canThreePartsEqualSum = A => {
//   const target = A.reduce((arr, curr) => arr + curr, 0) / 3;
//   let [left, right] = [0, A.length - 1];
//   for (let sum = A[left]; left < right && sum !== target; left++, sum += A[left]) {}
//   for (let sum = A[right]; left < right && sum !== target; right--, sum += A[right]) {}
//   return left < right;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 83.23% of JavaScript online submissions
// for Partition Array Into Three Parts With Equal Sum.
// Memory Usage: 39.7 MB, less than 70.83% of JavaScript online submissions
// for Partition Array Into Three Parts With Equal Sum.

/**
 * @param {number[]} A
 * @return {boolean}
 */
// const canThreePartsEqualSum = A => {
//   const target = A.reduce((arr, curr) => arr + curr, 0) / 3;
//   let [left, right] = [0, A.length - 1];
//   let [lsum, rsum] = [A[left], A[right]];
//   let i = -1;
//   while (left < right && i++ < A.length - 1) {
//     if (target !== lsum) lsum += A[++left];
//     if (target !== rsum) rsum += A[--right];
//   }
//   return left < right;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 89.31% of JavaScript online submissions
// for Partition Array Into Three Parts With Equal Sum.
// Memory Usage: 39.9 MB, less than 40.06% of JavaScript online submissions
// for Partition Array Into Three Parts With Equal Sum.

/**
 * @param {number[]} A
 * @return {boolean}
 */
const canThreePartsEqualSum = A => {
  const total = A.reduce((arr, curr) => arr + curr, 0);
  if (0 !== total % 3) return false;
  const target = total / 3;
  let left;
  for (let i = 0, sum = 0; i < A.length - 2; i++) {
    sum += A[i];
    if (target === sum) {
      left = i;
      break;
    }
  }
  if ('undefined' === typeof left) return false;
  let right;
  for (let i = A.length - 1, sum = 0; left + 1 < i; i--) {
    sum += A[i];
    if (target === sum) {
      right = i;
      break;
    }
  }
  if ('undefined' === typeof right) return false;
  return left < right;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1],
    expected: true,
  },
  // [0, 2, 1] = 3
  // [-6, 6, -7, 9, 1] = 3
  // [2, 0, 1] = 3
  {
    input: [0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1],
    expected: false,
  },
  {
    input: [3, 3, 6, 5, -2, 2, 5, 1, -9, 4],
    expected: true,
  },
  // [3, 3] = 6
  // [6] = 6
  // [5, -2, 2, 5, 1, -9, 4] = 6
  {
    input: [3, 3, 6, 5, -2, 2, 5, 1, -9, 3],
    expected: false,
  },
  {
    input: [1, 3, 5],
    expected: false,
  },
  {
    input: [18, 12, -18, 18, -19, -1, 10, 10],
    expected: true,
  },
  // [18, 12, -18, 18, -19, -1] = 10
  // [10] = 10
  // [10] = 10
  {
    input: [0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1],
    expected: false,
  },
  {
    input: [14, 6, -10, 2, 18, -7, -4, 11],
    expected: false,
  },
  {
    input: [12, -4, 16, -5, 9, -3, 3, 8, 0],
    expected: true,
  },
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
