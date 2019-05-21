// 1037. Valid Boomerang
// https://leetcode.com/problems/valid-boomerang/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 96.23% of JavaScript online submissions
// for Valid Boomerang.
// Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions
// for Valid Boomerang.

/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
  // If all points align vertically
  if (
    points[0][0] === points[1][0] &&
    points[1][0] === points[2][0] &&
    points[2][0] === points[0][0]
  )
    return false;
  // If all points align horizontally
  if (
    points[0][1] === points[1][1] &&
    points[1][1] === points[2][1] &&
    points[2][1] === points[0][1]
  )
    return false;
  // If any points are the same
  if (
    (points[0][0] === points[1][0] && points[0][1] === points[1][1]) ||
    (points[1][0] === points[2][0] && points[1][1] === points[2][1]) ||
    (points[2][0] === points[0][0] && points[2][1] === points[0][1])
  )
    return false;
  // If all points align diagonally
  if (
    points[0][0] - points[1][0] === points[0][1] - points[1][1] &&
    points[1][0] - points[2][0] === points[1][1] - points[2][1] &&
    points[2][0] - points[0][0] === points[2][1] - points[0][1]
  )
    return false;
  // Assume it is valid since all the tests were passed
  return true;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    // |X|-|-|
    // |-|-|X|
    // |-|X|-|
    name: '[[1, 1], [2, 3], [3, 2]]',
    input: [[1, 1], [2, 3], [3, 2]],
    expected: true,
  },
  {
    // |X|-|-|
    // |-|X|-|
    // |-|-|X|
    name: '[[1, 1], [2, 2], [3, 3]]',
    input: [[1, 1], [2, 2], [3, 3]],
    expected: false,
  },
  {
    // |-|-|-|-|-|
    // |X|-|-|-|-|
    // |-|X|-|-|-|
    // |-|-|-|-|-|
    // |-|-|-|X|-|
    name: '[[1, 2], [2, 3], [4, 5]]',
    input: [[1, 2], [2, 3], [4, 5]],
    expected: false,
  },
  {
    // |-|-|-|-|-|
    // |X|-|-|-|-|
    // |-|X|-|-|-|
    // |-|-|-|-|-|
    // |-|-|-|-|X|
    name: '[[1, 2], [2, 3], [4, 5]]',
    input: [[1, 2], [2, 3], [5, 5]],
    expected: true,
  },
  {
    // |X|-|-|
    // |-|-|X|
    // |X|-|-|
    name: '[[0, 0], [0, 2], [2, 1]]',
    input: [[0, 0], [0, 2], [2, 1]],
    expected: true,
  },
  {
    // |X|-|-|
    // |-|X|-|
    // |-|-|-|
    name: '[[0, 0], [2, 1], [2, 1]]',
    input: [[0, 0], [2, 1], [2, 1]],
    expected: false,
  },
];

tests.forEach(({ name, input, expected }) => {
  const output = isBoomerang(input);
  if (expected === output) {
    console.log(`✅ {name}`);
  } else {
    console.log(`🔴 {name}`);
    console.log(`Expected "{expected}", but got "{output}"`);
  }
});
