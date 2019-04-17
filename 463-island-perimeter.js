// 463. Island Perimeter
// https://leetcode.com/problems/island-perimeter/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = grid => {};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example',
    input: [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]],
    expected: 16,
  },
];

tests.forEach(({ name, input, expected }) => {
  const result = islandPerimeter(input);
  if (result === expected) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`✅ ${name}`);
  }
});
