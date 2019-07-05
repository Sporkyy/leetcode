// 1103. Distribute Candies to People
// https://leetcode.com/problems/distribute-candies-to-people/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 78.95% of JavaScript online submissions
// for Distribute Candies to People.
// Memory Usage: 34.6 MB, less than 100.00% of JavaScript online submissions
// for Distribute Candies to People.

/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
// const distributeCandies = (candies, num_people) => {
//   const result = new Array(num_people).fill(0);
//   for (let i = 1; 0 < candies; candies -= i, i++) {
//     const person = (i - 1) % num_people;
//     if (candies < i) {
//       result[person] += candies;
//       break;
//     }
//     result[person] += i;
//   }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 40.22% of JavaScript online submissions
// for Distribute Candies to People.
// Memory Usage: 36.6 MB, less than 100.00% of JavaScript online submissions
// for Distribute Candies to People.

// 0 |  1  2  3  4  5 =  15
// 1 |  7  9 11 13 15 =  55
// 2 | 18 21 24 27 30 = 120
// 3 | 34 38 42 46 50 = 210
// 4 | 55 60 65 70 75 = 325

// (n / 2) * (a1 + aN)

//  1, 5 = (Math.ceil (1 / 5) / 2) * (1 +  1) =  1
//  2, 5 = (Math.ceil (2 / 5) / 2) * (2 +  2) =  2
//  6, 5 = (Math.ceil( 6 / 5) / 2) * (1 +  6) =  7
//  7, 5 = (Math.ceil( 7 / 5) / 2) * (2 +  7) =  9
// 11, 5 = (Math.ceil(11 / 5) / 2) * (1 + 11) = 18
// 16, 5 = (Math.ceil(16 / 5) / 2) * (1 + 16) = 34
// 21, 5 = (Math.ceil(21 / 5) / 2) * (1 + 21) = 55

// const sumTo = (n, s = 1) => (Math.ceil(n / s) / 2) * ((n % s || s) + n);

// console.log(sumTo(1, 5));
// console.log(sumTo(2, 5));
// console.log(sumTo(3, 5));
// console.log(sumTo(4, 5));
// console.log(sumTo(5, 5));
// ----------------------
// console.log(sumTo(6, 5));
// console.log(sumTo(7, 5));
// console.log(sumTo(8, 5));
// console.log(sumTo(9, 5));
// console.log(sumTo(10, 5));
// -----------------------
// console.log(sumTo(11, 5));
// console.log(sumTo(16, 5));
// console.log(sumTo(21, 5));

// 5 * n * (5 * n + 1) / 2
// 1, 5 = (5 * 1) * ((5 * 1) + 1) / 2 =  15
// 2, 5 = (5 * 2) * ((5 * 2) + 1) / 2 =  55
// 3, 5 = (5 * 3) * ((5 * 3) + 1) / 2 = 120
// 4, 5 = (5 * 4) * ((5 * 4) + 1) / 2 = 210
// 5, 5 = (5 * 5) * ((5 * 5) + 1) / 2 = 325
// const getTriangularNumber = (n, s = 1) => (s * n * (s * n + 1)) / 2;
// console.log(getTriangularNumber(1, 5));
// console.log(getTriangularNumber(2, 5));
// console.log(getTriangularNumber(3, 5));
// console.log(getTriangularNumber(4, 5));
// console.log(getTriangularNumber(5, 5));

// arraySum = a => a.reduce((acc, curr) => acc + curr);

/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
// const distributeCandies = (candies, num_people) => {
//   let [tn, tni] = [0, 0];
//   while (tn < candies) tn = getTriangularNumber(tni++, num_people);

//   // console.log(tn);
//   // console.log(tni - 2);
//   // console.log((tni - 2) * num_people + 1);

//   const start = (tni - 2) * num_people + 1;
//   // console.log(start);

//   const result = new Array(num_people).fill(0).map((x, i) => sumTo(start + i, num_people));
//   // console.log(result);

//   if (candies === arraySum(result)) return result;

//   const under = new Array(num_people)
//     .fill(0)
//     .map((x, i) => (start < num_people ? 0 : sumTo(start - num_people + i, num_people)));
//   // console.log(under);

//   let cursor = result.length - 1;
//   // console.log(cursor);
//   while (candies < arraySum(result)) {
//     result[cursor] = under[cursor];
//     cursor--;
//   }

//   // console.log(result);

//   if (arraySum(result) < candies) {
//     // console.log('here');
//     // console.log(cursor + 1);
//     result[cursor + 1] += candies - arraySum(result);
//   }

//   // console.log(result);

//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const sumTo = (n, s = 1) => (Math.ceil(n / s) / 2) * ((n % s || s) + n);
// const getTriangularNumber = (n, s = 1) => (s * n * (s * n + 1)) / 2;

// console.log(getTriangularNumber(3, 3));

/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
// const distributeCandies = (candies, num_people) => {
//   let result = new Array(num_people).fill(0);

//   let start = (prev = undefined);
//   for (let i = 0, curr; 'undefined' === typeof start; i++) {
//     [prev, curr] = [curr, getTriangularNumber(i, num_people)];
//     if (candies < curr) start = Math.trunc(candies / (i * num_people));
//   }

//   console.log(start);
//   console.log(prev);
//   console.log(candies);

//   if (0 < prev) {
//     for (let i = 0; i < num_people; i++) {
//       result[i] += sumTo(start + i, num_people);
//     }
//     candies -= prev;
//     start += num_people;
//   }

//   console.log(start);
//   console.log(candies);
//   console.log(result);

//   if (candies < num_people) {
//     for (let i = 0; i < num_people && 0 < candies; i++) {
//       candies -= result[i] += i + 1;
//     }
//   }

//   for (let i = 0; i < num_people && 0 < candies; i++) {
//     if (i + start < candies) {
//       result[i] += i + start;
//       candies -= i + start;
//     } else {
//       result[i] += candies;
//       break;
//     }
//   }

//   // console.log(candies);
//   // console.log(result);

//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 19.08% of JavaScript online submissions
// for Distribute Candies to People.
// Memory Usage: 34.5 MB, less than 100.00% of JavaScript online submissions
// for Distribute Candies to People.

/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
const distributeCandies = (candies, num_people) => {
  const result = new Array(num_people).fill(0);
  for (let i = 1; 0 < candies; candies -= i++)
    result[(i - 1) % num_people] += candies < i ? candies : i;
  return result;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  // {
  //   input: {
  //     candies: 7,
  //     num_people: 4,
  //   },
  //   expected: [1, 2, 3, 1],
  // },

  // 0 |  0   0   0  (0+1) =  0 ( 1,  3,  6)
  // 1 | (1) (2) (3)  4    = 10 (15, 21, 28)

  // {
  //   input: {
  //     candies: 10,
  //     num_people: 3,
  //   },
  //   expected: [5, 2, 3],
  // },

  // 0 |  0   0   0  =  0 ( 1,  3)
  // 1 |  1  (2) (3) =  6 (10, 15)
  // 2 | (5)  7   9  = 21 (28, 36)

  // {
  //   input: {
  //     candies: 60,
  //     num_people: 4,
  //   },
  //   expected: [15, 18, 15, 12],
  // },

  // 0 |   0    0    0      0  =  0 ( 1,   3,   6)
  // 1 |   1    2    3      4  = 10 (15,  21,  28)
  // 2 |   6    8  (10+5) (12) = 36 (45,  55,  66)
  // 3 | (15) (18)  21     24  = 78 (91, 105, 120)

  // {
  //   input: {
  //     candies: 1,
  //     num_people: 2,
  //   },
  //   expected: [1, 0],
  // },

  // 0 | (0+1) 0 = 0 (1)

  {
    input: {
      candies: 80,
      num_people: 4,
    },
    expected: [17, 18, 21, 24],
  },

  // 0 |   0      0     0    0  =  0 ( 1,   3,   6)
  // 1 |   1      2     3    4  = 10 (15,  21,  28)
  // 2 |   6      8    10   12  = 36 (45,  55,  66)
  // 3 | (15+2) (18)  (21) (24) = 78 (91, 105, 120)
];

const areArraysEqual = (a, b) => a.length === b.length && a.join() === b.join();

tests.forEach(({ input: { candies, num_people }, expected }) => {
  const output = distributeCandies(candies, num_people);
  const name = `candies = ${candies}, num_people = ${num_people}`;
  if (areArraysEqual(expected, output)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected.join(', ')}", but got "${output.join(', ')}"`);
  }
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// One
// 0 | 1 = 1
// 1 | 2 = 3
// 2 | 3 = 6

// console.log(sumTo(1, 1));
// console.log(sumTo(2, 1));
// console.log(sumTo(3, 1));

// Two
// 0 | 1  2 =  3 (6)
// 1 | 4  6 = 10 (15)
// 2 | 9 12 = 21

// console.log(sumTo(1, 2));
// console.log(sumTo(3, 2));
// console.log(sumTo(5, 2));

// Three
// 0 |  1  2  3 =  6 (10, 15)
// 1 |  5  7  9 = 21 (28, 36)
// 2 | 12 15 18 = 45

// console.log(sumTo(1, 3));
// console.log(sumTo(4, 3));
// console.log(sumTo(7, 3));

// Four
// 0 |  1  2  3  4 = 10 (15, 21, 28)
// 1 |  6  8 10 12 = 36 (45, 55, 66)
// 2 | 15 18 21 24 = 78

// console.log(sumTo(1, 4));
// console.log(sumTo(5, 4));
// console.log(sumTo(9, 4));

// Five
// 0 |  1  2  3  4  5 =  15 (21,   28,  36,  45)
// 1 |  7  9 11 13 15 =  55 (66,   78,  91, 105)
// 2 | 18 21 24 27 30 = 120 (136, 153, 171, 190)
// 3 | 34 38 42 46 50 = 210 (231, 253, 276, 300)
// 4 | 55 60 65 70 75 = 325

// console.log(sumTo(1, 5));
// console.log(sumTo(6, 5));
// console.log(sumTo(11, 5));
// console.log(sumTo(16, 5));
