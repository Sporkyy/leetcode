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

// const summ = n => (n < 0 ? -1 : n === 0 ? 1 : n + summ(n - 1));

const a000217 = [
  0,
  1,
  3,
  6,
  10,
  15,
  21,
  28,
  36,
  45,
  55,
  66,
  78,
  91,
  105,
  120,
  136,
  153,
  171,
  190,
  210,
  231,
  253,
  276,
  300,
  325,
  351,
  378,
  406,
  435,
  465,
  496,
  528,
  561,
  595,
  630,
  666,
  703,
  741,
  780,
  820,
  861,
  903,
  946,
  990,
  1035,
  1081,
  1128,
  1176,
  1225,
  1275,
  1326,
  1378,
  1431,
];

// Index of the number inthe sorted array without going over
// const bobdex = (a, n) => {
//   for (let i = 0; i < a.length; i++) {
//     if (n < a[i]) return i - 1;
//   }
//   return undefined;
// };

// const pir = (a, n) => {
//   for (let i = 0; i < a.length; i++) {
//     if (n < a[i]) return a[i - 1];
//   }
//   return undefined;
// };

const sumTo = n => (n * (n + 1)) / 2;

const underOverOrEquals = (a, n, s) => {
  for (let i = a.indexOf(sumTo(s)); i < a.length; i += s) {
    if (n <= a[i]) return [a[i - s], a[i]];
  }
  return [undefined, undefined];
};

const under = (a, n, s) => {
  for (let i = a.indexOf(sumTo(s)); i < a.length; i += s) {
    if (n <= a[i]) return a[i - s];
  }
  return undefined;
};

/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
const distributeCandies = (candies, num_people) => {
  // const [u, o] = underOverOrEquals(a000217, candies, num_people);
  // console.log(u, o);
  // const [ur, or] = [];
  // console.log(ur, or);
  const u = under(a000217, candies, num_people);
  console.log(u);
  const ur = Math.trunc(a000217.indexOf(u) / num_people) - 1;
  console.log(ur);
  const [un, on] = [
    new Array(num_people).fill(null).map(x => x),
    new Array(num_people).fill(null).map(x => x),
  ];
  console.log(un, on);
  // const b = bobdex(a000217, candies);
  // console.log(b);
  // const r = Math.trunc(b / num_people);
  // console.log(r);
  //   Two: n * ((2 * n - 0) / 2)
  // Three: n * ((3 * n - 1) / 2)
  //  Five: n * ((5 * n - 3) / 2)
  // const y = 2;
  // console.log(y * ((num_people * y - 1) / 2));
  return [];
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// One
// 0 | 1 = 1
// 1 | 2 = 2
// 2 | 3 = 3

// Two
// 0 | 1  2 =  3 (6)
// 1 | 4  6 = 10 (15)
// 2 | 9 12 = 21

// Three
// 0 |  1  2  3 =  6 (10, 15)
// 1 |  5  7  9 = 21 (28, 36)
// 2 | 12 15 18 = 45

// Four
// 0 |  1  2  3  4 = 10 (15, 21, 28)
// 1 |  6  8 10 12 = 36 (45, 55, 66)
// 2 | 15 18 21 24 = 78

// Five
// 0 |  1  2  3  4  5 =  15 (21, 28, 36,  45)
// 1 |  7  9 11 13 15 =  55 (66, 78, 91, 105)
// 2 | 18 21 24 27 30 = 120

const tests = [
  // {
  //   input: {
  //     candies: 7,
  //     num_people: 4,
  //   },
  //   expected: [1, 2, 3, 1],
  // },

  // 0 | (1) (2) (3) (4-3) = 10

  // {
  //   input: {
  //     candies: 10,
  //     num_people: 3,
  //   },
  //   expected: [5, 2, 3],
  // },

  // 0 |  1  (2) (3) =  6 (10, 15)
  // 1 | (5)  7   9  = 21

  {
    input: {
      candies: 60,
      num_people: 4,
    },
    expected: [15, 18, 15, 12],
  },

  // 0 |   1    2    3      4  = 10 (15, 21, 28)
  // 1 |   6    8  (10+5) (12) = 36 (45, 55, 66)
  // 2 | (15) (18)  21     24  = 78
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
