// 897. Increasing Order Search Tree
// https://leetcode.com/problems/increasing-order-search-tree/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 124 ms, faster than 98.72% of JavaScript online submissions
// Memory Usage: 43.2 MB, less than 50.00% of JavaScript online submissions

// const serializeBinaryTreeAsInorderArray = root => {
//   const a = [];
//   const fillInorder = root => {
//     if (!root) return;
//     fillInorder(root.left);
//     a.push(root.val);
//     fillInorder(root.right);
//   };
//   fillInorder(root);
//   return a;
// };

// const deserializeArrayAsRightOnlyTree = queue => {
//   const root = new TreeNode(null);
//   let current = root;
//   for (let i = 0; i < queue.length; i++) {
//     current = current.right = new TreeNode(queue[i]);
//   }
//   return root.right;
// };

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {TreeNode}
//  */
// const increasingBST = root => {
//   if (!root) return [];
//   const a = serializeBinaryTreeAsInorderArray(root);
//   // console.log(a);
//   const t = deserializeArrayAsRightOnlyTree(a);
//   // console.log(t);
//   return t;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const serializeBinaryTreeAsInorderArray = root => {
  const a = [];
  const fillInorder = root => {
    if (!root) return;
    fillInorder(root.left);
    a.push(root.val);
    fillInorder(root.right);
  };
  fillInorder(root);
  return a;
};

const deserializeArrayAsRightOnlyTree = queue => {
  const root = new TreeNode(null);
  let current = root;
  for (let i = 0; i < queue.length; i++) {
    current = current.right = new TreeNode(queue[i]);
  }
  return root.right;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const increasingBST = root => {
  console.log(root);
  if (!root) return [];
  const a = serializeBinaryTreeAsInorderArray(root);
  console.log(a);
  // console.log(a);
  const t = deserializeArrayAsRightOnlyTree(a);
  console.log(t);
  // console.log(t);
  return t;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const createTree = (...vals) => {
  if (1 === vals.length && Array.isArray(vals[0]))
    return createTree(...vals[0]);
  if (0 === vals.length) return null;
  const nodes = vals.map(val => {
    if (null === val) return null;
    return new TreeNode(val);
  });
  for (let i = 0; i < vals.length; i++) {
    if (null === nodes[i]) continue;
    if (nodes[i * 2 + 1]) nodes[i].left = nodes[i * 2 + 1];
    if (nodes[i * 2 + 2]) nodes[i].right = nodes[i * 2 + 2];
  }
  return nodes[0];
};

const serializeTree = root => {
  const a = [];
  const q = [root];
  while (q.length) {
    const { val, left, right } = q.shift();
    if (null !== left) q.push(left);
    else a.push(null);
    if (null !== right) q.push(right);
    a.push(val);
  }
  return a;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// console.log(createTree(5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9));
// console.log(
//   serializeTree(createTree(5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9)),
// );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//       5
//      / \
//     3    6
//    / \    \
//   2   4    8
//  /        / \
// 1        7   9

deepStrictEqual(
  serializeTree(
    increasingBST(
      createTree([5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9]),
    ),
  ),
  [1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9],
);
