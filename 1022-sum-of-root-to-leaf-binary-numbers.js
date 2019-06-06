// 1022. Sum of Root To Leaf Binary Numbers
// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 87.39% of JavaScript online submissions
// for Sum of Root To Leaf Binary Numbers.
// Memory Usage: 37.7 MB, less than 9.41% of JavaScript online submissions
// for Sum of Root To Leaf Binary Numbers.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var sumRootToLeaf = function(root) {
//   const stack = [[root, '']];
//   const binVals = [];
//   while (0 < stack.length) {
//     let [{ val, left, right }, acc] = stack.pop();
//     acc += val;
//     if (left) stack.push([left, acc]);
//     if (right) stack.push([right, acc]);
//     if (!left && !right) binVals.push(acc);
//   }
//   return binVals.map(b => parseInt(b, 2)).reduce((curr, acc) => acc + curr);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
  let answer = 0;
  const stack = [[root, '']];
  while (0 < stack.length) {
    let [{ val, left, right }, acc] = stack.pop();
    acc += val;
    if (left) stack.push([left, acc]);
    if (right) stack.push([right, acc]);
    if (!left && !right) answer += parseInt(acc, 2);
  }
  return answer;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const deserializeLevelOrderArrayAsBinaryTree = a => {
  const nodeArray = [...a].map(e => new TreeNode(e));
  nodeArray.forEach((e, i) => {
    if ('undefined' === typeof e) return;
    const childIndex = (i + 1) * 2;
    e.left = nodeArray[childIndex - 1] || null;
    e.right = nodeArray[childIndex] || null;
  });
  return nodeArray[0];
};

const tests = [
  {
    //      1
    //     / \
    //   0     1
    //  / \   / \
    // 0   1 0   1
    input: [1, 0, 1, 0, 1, 0, 1],
    expected: 22,
    // Explanation:
    // (100) + (101) + (110) + (111)
    //    4  +    5  +    6  +    7 = 22
  },
  {
    //         1
    //        / \
    //      0     1
    //     / \   / \
    //    0   1 0   1
    //  /
    // 1
    input: [1, 0, 1, 0, 1, 0, 1, 1],
    expected: 27,
    // Explanation:
    // (1001) + (101) + (110) + (111)
    //    9  +    5  +    6  +    7 = 27
  },
];

tests.forEach(({ input, expected }) => {
  const output = sumRootToLeaf(deserializeLevelOrderArrayAsBinaryTree(input));
  if (expected === output) {
    console.log(`✅ ${input.join(', ')}`);
  } else {
    console.log(`🔴 ${input.join(', ')}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
});
