// 1022. Sum of Root To Leaf Binary Numbers
// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 87.39% of JavaScript online submissions
// Memory Usage: 37.7 MB, less than 9.41% of JavaScript online submissions

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

// Runtime: 76 ms, faster than 28.74% of JavaScript online submissions
// Memory Usage: 37.1 MB, less than 21.56% of JavaScript online submissions

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
//   let answer = 0;
//   const stack = [[root, '']];
//   while (0 < stack.length) {
//     let [{ val, left, right }, acc] = stack.pop();
//     acc += val;
//     if (left) stack.push([left, acc]);
//     if (right) stack.push([right, acc]);
//     if (!left && !right) answer += parseInt(acc, 2);
//   }
//   return answer;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 60 ms, faster than 93.84% of JavaScript online submissions
// Memory Usage: 36 MB, less than 56.47% of JavaScript online submissions

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
const sumRootToLeaf = ({ val, left, right }, acc = '') =>
  !left && !right
    ? parseInt(acc + val, 2)
    : (left ? sumRootToLeaf(left, acc + val) : 0) +
      (right ? sumRootToLeaf(right, acc + val) : 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {number} val
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Deserialize a Level Order Array as a Binary Tree
 *
 * @param {number[]} a
 * @returns
 */
const deserialize = a => {
  const nodeArray = [...a].map(e => new TreeNode(e));
  nodeArray.forEach((e, i) => {
    if ('undefined' === typeof e) return;
    const childIndex = (i + 1) * 2;
    e.left = nodeArray[childIndex - 1] || null;
    e.right = nodeArray[childIndex] || null;
  });
  return nodeArray[0];
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

//      1
//     / \
//   0     1
//  / \   / \
// 0   1 0   1
strictEqual(sumRootToLeaf(deserialize([1, 0, 1, 0, 1, 0, 1])), 22);
// Explanation:
// (100) + (101) + (110) + (111)
//    4  +    5  +    6  +    7 = 22

//         1
//        / \
//      0     1
//     / \   / \
//    0   1 0   1
//  /
// 1
strictEqual(sumRootToLeaf(deserialize([1, 0, 1, 0, 1, 0, 1, 1])), 27);
// Explanation:
// (1001) + (101) + (110) + (111)
//    9  +    5  +    6  +    7 = 27
