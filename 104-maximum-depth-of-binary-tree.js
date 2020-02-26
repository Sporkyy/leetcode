// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 88 ms, faster than 8.25% of JavaScript online submissions
// Memory Usage: 37.4 MB, less than 5.14% of JavaScript online submissions

// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// const maxDepth = root => {
//   let answer = 0;
//   const recurse = (leaf, level) => {
//     if (!leaf) return;
//     if (answer < level) answer = level;
//     if (leaf.left) recurse(leaf.left, level + 1);
//     if (leaf.right) recurse(leaf.right, level + 1);
//   };
//   recurse(root, 1);
//   return answer;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 47.99% of JavaScript online submissions
// Memory Usage: 37.2 MB, less than 14.02% of JavaScript online submissions

// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// const maxDepth = root => {
//   const nodes = [[root, 1]];
//   let deepestDepth = 0;
//   while (0 < nodes.length) {
//     const [leaf, depth] = nodes.pop();
//     if (null === leaf) continue;
//     if (deepestDepth < depth) deepestDepth = depth;
//     if (leaf.left) nodes.push([leaf.left, depth + 1]);
//     if (leaf.right) nodes.push([leaf.right, depth + 1]);
//   }
//   return deepestDepth;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 65.49% of JavaScript online submissions
// Memory Usage: 37.1 MB, less than 38.50% of JavaScript online submissions

// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// const maxDepth = root => {
//   if (!root) return 0;
//   [leftDepth, rightDepth] = [maxDepth(root.left), maxDepth(root.right)];
//   return leftDepth < rightDepth ? rightDepth + 1 : leftDepth + 1;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 92.94% of JavaScript online submissions
// Memory Usage: 37.2 MB, less than 20.10% of JavaScript online submissions

// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// const maxDepth = (root, depth = 0) =>
//   root ? Math.max(maxDepth(root.left, depth + 1), maxDepth(root.right, depth + 1)) : depth;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 48 ms, faster than 99.69% of JavaScript online submissions
// Memory Usage: 36.9 MB, less than 87.89% of JavaScript online submissions

// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// const maxDepth = root => (root ? 1 + Math.max(maxDepth(root.left), maxDepth(root.right)) : 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 65.49% of JavaScript online submissions
// Memory Usage: 36.9 MB, less than 73.00% of JavaScript online submissions

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = root =>
  !root ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const createTree = (...vals) => {
  if (!vals.length) return null;
  const nodes = vals.map(value =>
    null === value ? null : new TreeNode(value),
  );
  nodes.forEach((node, i) => {
    if (!node) return;
    const childIndex = (i + 1) * 2;
    node.left = nodes[childIndex - 1] || null;
    node.right = nodes[childIndex] || null;
  });
  return nodes[0];
};

//    3
//   / \
//  9  20
//    /  \
//   15   7

strictEqual(maxDepth(createTree(3, 9, 20, null, null, 15, 7)), 3);

strictEqual(maxDepth(createTree()), 0);

strictEqual(maxDepth(createTree(1, 2)), 2);

strictEqual(maxDepth(createTree(3, 9, 20, null, null, 15, 7)), 3);
