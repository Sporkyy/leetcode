// 832. Flipping an Image
// https://leetcode.com/problems/flipping-an-image/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 54.50% of JavaScript online submissions
// for Flipping an Image.
// Memory Usage: 36.7 MB, less than 5.80% of JavaScript online submissions
// for Flipping an Image.

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = A => {
  const [rows, cols] = [A.length, A[0].length];
  for (i = 0; i < rows; i++) {
    if (1 === cols % 2) {
      A[i][Math.trunc(cols / 2)] = 0 === A[i][Math.trunc(cols / 2)] ? 1 : 0;
    }
    for (j = 0; j <= cols / 2 - 1; j++) {
      [A[i][j], A[i][cols - j - 1]] = [0 === A[i][cols - j - 1] ? 1 : 0, 0 === A[i][j] ? 1 : 0];
    }
  }
  return A;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    input: [[1, 1, 0], [1, 0, 1], [0, 0, 0]],
    expected: [[1, 0, 0], [0, 1, 0], [1, 1, 1]],
  },

  {
    input: [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]],
    expected: [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]],
  },
];

for (let { input, expected } of tests) {
  const result = flipAndInvertImage(input);
  const name = JSON.stringify(input);
  if (JSON.stringify(expected) === JSON.stringify(result)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
  }
}
