// 1041. Robot Bounded In Circle
// https://leetcode.com/problems/robot-bounded-in-circle/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 16.90% of JavaScript online submissions
// for Robot Bounded In Circle.
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions
// for Robot Bounded In Circle.

/**
 * @param {string} instructions
 * @return {boolean}
 */
// const isRobotBounded = instructions => {
//   let direction = 0;
//   let position = 0;
//   for (i = 0; i < instructions.length; i++) {
//     switch (instructions[i]) {
//       case 'G':
//         position += [1, 2, -1, -2][direction];
//         break;
//       case 'L':
//         direction = (direction + 1) % 4;
//         break;
//       case 'R':
//         direction = (direction + 3) % 4;
//         break;
//     }
//   }
//   return 0 === position || 0 !== direction;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {string} instructions
 * @return {boolean}
 */
const isRobotBounded = instructions => {
  // const cnts = { L: 0, G: 0, R: 0 };
  // for (let i = 0; i < instructions.length; i++) cnts[instructions[i]]++;
  // console.log(cnts);
  // if (0 === cnts['G']) return true;
  // if (4 <= cnts['L'] + cnts['R']) return 0 === (cnts['L'] - cnts['R']) % 4;
  // return 0 !== (cnts['L'] + cnts['R']) % 4;
  let [t, a] = [0, 0];
  // for (let i = 0; i < instructions.length; i++) cnts[instructions[i]]++;
  // console.log(cnts);
  // if (0 === cnts['G']) return true;
  // if (4 <= cnts['L'] + cnts['R']) return 0 === (cnts['L'] - cnts['R']) % 4;
  // return 0 !== (cnts['L'] + cnts['R']) % 4;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: 'GGLLGG',
    expected: true,
  },
  {
    input: 'GG',
    expected: false,
  },
  {
    input: 'GL',
    expected: true,
  },
  {
    input: 'LLL',
    expected: true,
  },
  {
    input: 'LLGRL',
    expected: true,
  },
  {
    input: 'GLGLGGLGL',
    expected: false,
  },
  {
    input: 'LLLRLLLRLLGLLGGRGLLLGGLRRRRRGLRLRLRLGGRGRGRLLLLLLGLLRLGLGLRLGGGRR',
    expected: false,
  },
  {
    input: 'RRLRRRRRRRRLRRRLLRLL',
    expected: true,
  },
  {
    input: 'LRG',
    expected: false,
  },
  // ⬆➡⬇⬅⬆
  {
    input: 'GGRGGRGGRGGR',
    expected: true,
  },
  // ⬆⬅⬆⬅⬇➡⬆
  {
    input: 'GLRLLGLL',
    expected: true,
  },
  // {
  //   input: 'GRGL',
  //   expected: false,
  // },
];

for (let { input, expected } of tests) {
  const output = isRobotBounded(input);
  if (expected === output) {
    console.log(`✅ ${input}`);
  } else {
    console.log(`🔴 ${input}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
}
