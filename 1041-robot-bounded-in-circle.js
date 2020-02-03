// 1041. Robot Bounded In Circle
// https://leetcode.com/problems/robot-bounded-in-circle/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 16.90% of JavaScript online submissions
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} ins
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

// Runtime: 36 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 34.2 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} instructions
//  * @return {boolean}
//  */
// const isRobotBounded = instructions => {
//   let [distance, orientation] = [0, 0];
//   for (i = 0; i < instructions.length; i++) {
//     switch (instructions[i]) {
//       case 'G':
//         distance += [1, 2, -1, -2][orientation];
//         break;
//       case 'L':
//         orientation = (orientation + 1) % 4;
//         break;
//       case 'R':
//         orientation = (orientation + 3) % 4;
//         break;
//     }
//   }
//   return 0 === distance || 0 !== orientation;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * @param {string} instructions
//  * @return {boolean}
//  */
// const isRobotBounded = instructions => {
//   let [distance, orientation] = [0, 0];
//   for (let i = 0; i < instructions.length; i++) {
//     switch (instructions[i]) {
//       case 'G':
//         distance += [1, 2, -1, -2][orientation];
//         break;
//       case 'L':
//         orientation = (orientation + 1) % 4;
//         break;
//       case 'R':
//         orientation = (orientation + 3) % 4;
//         break;
//     }
//   }
//   return 0 === distance || 0 !== orientation;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 80.77% of JavaScript online submissions
// Memory Usage: 34.9 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} instructions
//  * @return {boolean}
//  */
// const isRobotBounded = instructions => {
//   let [distance, orientation] = [0, 0];
//   for (const i of [...instructions]) {
//     ({
//       G: () => (distance += [1, 2, -1, -2][orientation]),
//       L: () => (orientation = (orientation + 1) % 4),
//       R: () => (orientation = (orientation + 3) % 4),
//     }[i]());
//   }
//   return 0 === distance || 0 !== orientation;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 80.77% of JavaScript online submissions
// Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} instructions
//  * @param {number} [distance=0]
//  * @param {number} [orientation=0]
//  * @returns {boolean}
//  */
// const isRobotBounded = (instructions, distance = 0, orientation = 0) => {
//   if (0 === instructions.length) return 0 === distance || 0 !== orientation;
//   if ('G' === instructions[0]) distance += [1, 2, -1, -2][orientation];
//   else if ('L' === instructions[0]) orientation = (orientation + 1) % 4;
//   else if ('R' === instructions[0]) orientation = (orientation + 3) % 4;
//   return isRobotBounded(instructions.slice(1), distance, orientation);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 53.85% of JavaScript online submissions
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string} instructions
//  * @param {number} [distance=0]
//  * @param {number} [orientation=0]
//  * @returns {boolean}
//  */
// const isRobotBounded = (instructions, distance = 0, orientation = 0) => {
//   if (0 === instructions.length) return 0 === distance || 0 !== orientation;
//   if ('G' === instructions[0]) distance += [1, 2, -1, -2][orientation];
//   else orientation = (orientation + { L: 1, R: 3 }[instructions[0]]) % 4;
//   return isRobotBounded(instructions.slice(1), distance, orientation);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 53.85% of JavaScript online submissions
// Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string} ins
 * @param {number} [dis=0]
 * @param {number} [ori=0]
 * @returns {boolean}
 */
const isRobotBounded = (ins, dis = 0, ori = 0) =>
  0 === ins.length
    ? 0 === dis || 0 !== ori
    : isRobotBounded(
        ins.slice(1),
        'G' === ins[0] ? dis + [1, 2, -1, -2][ori] : dis,
        'G' !== ins[0] ? (ori + { L: 1, R: 3 }[ins[0]]) % 4 : ori,
      );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(isRobotBounded('GGLLGG'), true);

strictEqual(isRobotBounded('GG'), false);

strictEqual(isRobotBounded('GL'), true);

strictEqual(isRobotBounded('LLL'), true);

strictEqual(isRobotBounded('LLGRL'), true);

strictEqual(isRobotBounded('GLGLGGLGL'), false);

strictEqual(
  isRobotBounded(
    'LLLRLLLRLLGLLGGRGLLLGGLRRRRRGLRLRLRLGGRGRGRLLLLLLGLLRLGLGLRLGGGRR',
  ),
  false,
);

strictEqual(isRobotBounded('RRLRRRRRRRRLRRRLLRLL'), true);

strictEqual(isRobotBounded('LRG'), false);

strictEqual(isRobotBounded('GGRGGRGGRGGR'), true);

strictEqual(isRobotBounded('GLRLLGLL'), true);

strictEqual(isRobotBounded('GRGL'), false);
