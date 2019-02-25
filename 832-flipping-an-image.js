// 832. Flipping an Image
// https://leetcode.com/problems/flipping-an-image/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = A =>
  // First reverse each row
  A.map(row =>
    row
      .reverse()
      // Then, invert the image
      .map(bit => bit ^ (1 << 0))
  );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: [[1, 1, 0], [1, 0, 1], [0, 0, 0]],
    expected: [[1, 0, 0], [0, 1, 0], [1, 1, 1]]
  },
  {
    name: 'Example 2',
    input: [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]],
    expected: [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]]
  }
];

tests.forEach(({ name, input, expected }) => {
  const result = flipAndInvertImage(input);
  console.log(name);
  console.log(expected);
  console.log(result);
});
