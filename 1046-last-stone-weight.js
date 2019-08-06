// 1046. Last Stone Weight
// https://leetcode.com/problems/last-stone-weight/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 61.28% of JavaScript online submissions
// for Last Stone Weight.
// Memory Usage: 35 MB, less than 100.00% of JavaScript online submissions
// for Last Stone Weight.

/**
 * @param {number[]} stones
 * @return {number}
 */
// const lastStoneWeight = stones => {
//   let count = stones.length;
//   while (1 < count) {
//     stones.sort((a, b) => a - b);
//     stones[--count - 1] = stones.pop() - stones[count - 1];
//   }
//   return Math.max(stones);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 43.26% of JavaScript online submissions
// for Last Stone Weight.
// Memory Usage: 34.9 MB, less than 100.00% of JavaScript online submissions
// for Last Stone Weight.

/**
 * @param {number[]} stones
 * @return {number}
 */
// const lastStoneWeight = stones => {
//   while (1 < stones.sort((a, b) => a - b).length) {
//     stones.push(stones.pop() - stones.pop());
//   }
//   return stones[0];
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 19.19% of JavaScript online submissions
// for Last Stone Weight.
// Memory Usage: 35.8 MB, less than 100.00% of JavaScript online submissions
// for Last Stone Weight.

/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = stones => {
  const arrayDeleteByIndex = (a, i) => [...a.slice(0, i), ...a.slice(i + 1, a.length)];
  const biggestTwo = a => {
    let fbi = 0;
    for (let i = 0; i < a.length; i++) if (a[fbi] < a[i]) fbi = i;
    const fb = a[fbi];
    a = arrayDeleteByIndex(a, fbi);
    let sbi = 0;
    for (let i = 0; i < a.length; i++) if (a[sbi] < a[i] && a[i] <= fb) sbi = i;
    const sb = a[sbi];
    a = arrayDeleteByIndex(a, sbi);
    return [fb, sb, a];
  };
  while (1 < stones.length) {
    let [dummyThicc, thicc, remainder] = biggestTwo(stones);
    if (dummyThicc !== thicc) remainder.push(dummyThicc - thicc);
    stones = remainder;
  }
  return stones[0] || 0;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  // Explanation:
  // We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
  // we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
  // we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
  // we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

  {
    input: [2, 7, 4, 1, 8, 1],
    expected: 1,
  },

  {
    input: [1],
    expected: 1,
  },

  {
    input: [1, 1],
    expected: 0,
  },

  {
    input: [1, 2],
    expected: 1,
  },

  {
    input: [1, 3],
    expected: 2,
  },

  {
    input: [4, 3, 4, 3, 2],
    expected: 2,
  },
];

for (let { input, expected } of tests) {
  output = lastStoneWeight(input);
  name = JSON.stringify(input);
  if (expected === output) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${output}"'`);
  }
}
