// 872. Leaf-Similar Trees
// https://leetcode.com/problems/leaf-similar-trees/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 70.77% of JavaScript online submissions
// Memory Usage: 35 MB, less than 25.00% of JavaScript online submissions

// const leafNodesVals = root => {
//   const vals = [];
//   const depthFirst = node => {
//     if (!node) return;
//     depthFirst(node.left);
//     depthFirst(node.right);
//     if (!node.val || node.left || node.right) return;
//     vals.push(node.val);
//   };
//   depthFirst(root);
//   return vals;
// };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// /**
//  * @param {TreeNode} root1
//  * @param {TreeNode} root2
//  * @return {boolean}
//  */
// var leafSimilar = (root1, root2) => leafNodesVals(root1).join() === leafNodesVals(root2).join();

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 70.77% of JavaScript online submissions
// Memory Usage: 34.8 MB, less than 25.00% of JavaScript online submissions

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root1
//  * @param {TreeNode} root2
//  * @return {boolean}
//  */
// var leafSimilar = (root1, root2) => {
//   const [leaves1, leaves2] = [[], []];
//   const stk = [root1];
//   while (stk.length) {
//     const { val, left, right } = stk.pop();
//     if (!left && !right) leaves1.push(val);
//     if (left) stk.push(left);
//     if (right) stk.push(right);
//   }
//   stk.push(root2);
//   while (stk.length) {
//     const { val, left, right } = stk.pop();
//     if (!left && !right) leaves2.push(val);
//     if (left) stk.push(left);
//     if (right) stk.push(right);
//   }
//   return leaves1.join() === leaves2.join();
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 6.47% of JavaScript online submissions
// Memory Usage: 35 MB, less than 25.00% of JavaScript online submissions

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = (root1, root2) => {
  const serializeLeaves = root => {
    const stk = [root];
    let str = '';
    while (stk.length) {
      const { val, left, right } = stk.pop();
      if (!left && !right) {
        str = `${str} ${val}`;
        continue;
      }
      if (left) stk.push(left);
      if (right) stk.push(right);
    }
    return str;
  };
  return serializeLeaves(root1) === serializeLeaves(root2);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const fromLevelOrder = vals => {
  this.root = null;
  if (0 === vals.length) return this;
  const nodes = vals.map(val => (val ? new TreeNode(val) : null));
  nodes.forEach((node, i) => {
    if (!node) return;
    node.left = nodes[i * 2 + 1] || null;
    node.right = nodes[i * 2 + 2] || null;
  });
  this.root = nodes[0];
  return this;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

console.log(fromLevelOrder([1, 2, 3]));

console.log(fromLevelOrder([1, 2, 3, 4, 5]));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*

     3      |        3
   /   \    |      /   \
  5     1   |    5      1
 / \   / \  |   / \    / \
6  2  9  8  |  6  7   4  2
  / \       |           / \
 7   4      |          9   8

 */

strictEqual(
  leafSimilar(
    fromLevelOrder([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]),
    fromLevelOrder([
      3,
      5,
      1,
      6,
      7,
      4,
      2,
      null,
      null,
      null,
      null,
      null,
      null,
      9,
      8,
    ]),
  ),
  true,
);

/*

        3      |         3
       / \     |        / \
      5   1    |       5   1
    / \  / \   |     / \  / \
   6  2  9  8  |    6  2  9  8
 / \           |  / \
7   4          | 4   7

*/

strictEqual(
  leafSimilar(
    fromLevelOrder([3, 5, 1, 6, 2, 9, 8, 7, 4]),
    fromLevelOrder([3, 5, 1, 6, 2, 9, 8, 4, 7]),
  ),
  false,
);

strictEqual(leafSimilar(fromLevelOrder([1, 2]), fromLevelOrder([2, 2])), true);

strictEqual(leafSimilar(fromLevelOrder([1], [1]), fromLevelOrder(true)));

strictEqual(leafSimilar(fromLevelOrder([1]), fromLevelOrder([2])), false);
