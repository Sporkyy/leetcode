// 1033. Moving Stones Until Consecutive
// https://leetcode.com/problems/moving-stones-until-consecutive/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 94.90% of JavaScript online submissions
// for Moving Stones Until Consecutive.
// Memory Usage: 34 MB, less than 19.13% of JavaScript online submissions
// for Moving Stones Until Consecutive.

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
// const numMovesStones = (a, b, c) => {
//   let [min, mid, max] = [a, b, c].sort((a, b) => a - b);

//   maxMoves = max - min - 2;

//   minMoves = 0;
//   if (2 === mid - min) {
//     max = mid;
//     mid--;
//     minMoves++;
//   }
//   if (2 === max - mid) {
//     min = mid;
//     mid++;
//     minMoves++;
//   }
//   if (1 < mid - min) minMoves++;
//   if (1 < max - mid) minMoves++;

//   return [minMoves, maxMoves];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 94.27% of JavaScript online submissions
// for Moving Stones Until Consecutive.
// Memory Usage: 33.7 MB, less than 95.65% of JavaScript online submissions
// for Moving Stones Until Consecutive.

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
// const numMovesStones = (a, b, c) => {
//   const [min, mid, max] = [a, b, c].sort((a, b) => a - b);

//   let minMoves = 0;
//   if (2 === mid - min || 2 === max - mid) {
//     minMoves = 1;
//   } else {
//     if (2 < mid - min) minMoves++;
//     if (2 < max - mid) minMoves++;
//   }

//   const maxMoves = max - min - 2;

//   return [minMoves, maxMoves];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
const numMovesStones = (a, b, c) => {
  const [min, mid, max] = [a, b, c].sort((a, b) => a - b);
  const minMoves = Math.min(mid - min + (max - mid), 2);
  const maxMoves = max - min - 2;
  return [minMoves, maxMoves];
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

tests = [
  {
    name: 'a=1, b=2, c=5]',
    input: { a: 1, b: 2, c: 5 },
    expected: [1, 2],
    // Explanation: Move the stone from 5 to 3, or move the stone from 5 to 4 to 3.
    //       | 1 | 2 | 3 | 4 | 5 |
    // init  | a | b | - | - | c |
    // min 1 | a | b | c | - | - |
    // max 1 | a | b | - | c | - |
    // max 2 | a | b | c | - | - |
  },
  {
    name: 'a=4, b=3, c=2',
    input: { a: 4, b: 3, c: 2 },
    expected: [0, 0],
    // Explanation: We cannot make any moves.
    //     | 1 | 2 | 3 | 4 |
    // init | - | c | b | a |
  },
  {
    name: 'a=3, b=5, c=1',
    input: { a: 3, b: 5, c: 1 },
    expected: [1, 2],
    // Explanation: Move the stone from 1 to 4; or move the stone from 1 to 2 to 4.
    //       | 1 | 2 | 3 | 4 | 5 |
    // init  | c | - | a | - | b |
    // min 1 | - | - | a | c | b |
    // max 1 | - | c | a | - | b |
    // max 2 | - | c | a | b | - |
  },
  {
    name: 'a=1, b=3, c=6',
    input: { a: 1, b: 3, c: 6 },
    expected: [1, 3],
    //       | 1 | 2 | 3 | 4 | 5 | 6 |
    // init  | a | - | b | - | - | c |
    // min 1 | a | c | b | - | - | - |
    // max 1 | - | a | b | - | - | c |
    // max 2 | - | a | b | - | c | - |
    // max 3 | - | a | b | c | - | - |
  },
  {
    name: 'a=2, b=4, c=1',
    input: { a: 2, b: 4, c: 1 },
    expected: [1, 1],
    //       | 1 | 2 | 3 | 4 |
    // init  | c | a | - | b |
    // min 1 | - | a | c | b |
    // max 1 | c | a | b | - |
  },
];

const numericalArraysAreEqual = (a, b) => a.join() === b.join();

tests.forEach(({ name, input: { a, b, c }, expected }) => {
  output = numMovesStones(a, b, c);
  if (numericalArraysAreEqual(expected, output)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}" but got "${output}"`);
  }
});
