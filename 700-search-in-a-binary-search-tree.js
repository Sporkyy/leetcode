// 700. Search in a Binary Search Tree
// https://leetcode.com/problems/search-in-a-binary-search-tree/

/*

You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree
rooted with that node. If such a node does not exist, return null.

## Constraints

- The number of nodes in the tree is in the range [1, 5000].
- 1 <= Node.val <= 107
- root is a binary search tree.
- 1 <= val <= 107

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 96 ms, faster than 78.84% of JavaScript online submissions
// Memory Usage: 45.2 MB, less than 35.82% of JavaScript online submissions

// /**
//  * @param {TreeNode} leaf
//  * @param {number} needle
//  * @return {TreeNode}
//  */
// const searchBST = (leaf, needle) => {
//   if (null === leaf) return null;
//   const { val, left, right } = leaf || { val: null, left: null, right: null };
//   return needle === val
//     ? leaf
//     : needle < val
//     ? searchBST(left, needle)
//     : searchBST(right, needle);
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 92 ms, faster than 90.43% of JavaScript online submissions
// Memory Usage: 45.3 MB, less than 22.04% of JavaScript online submissions

// /**
//  * @param {TreeNode} leaf
//  * @param {number} needle
//  * @return {TreeNode}
//  */
// const searchBST = (leaf, needle) =>
//   !leaf
//     ? null
//     : needle === leaf.val
//     ? leaf
//     : needle < leaf.val
//     ? searchBST(leaf.left, needle)
//     : searchBST(leaf.right, needle);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 108 ms, faster than 25.99% of JavaScript online submissions
// Memory Usage: 45 MB, less than 57.42% of JavaScript online submissions

/**
 * @param {TreeNode} leaf
 * @param {number} needle
 * @return {TreeNode}
 */
const searchBST = (leaf, needle) =>
  !leaf
    ? null
    : needle === leaf.val
    ? leaf
    : searchBST(leaf.left, needle) || searchBST(leaf.right, needle);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 104 ms, faster than 38.63% of JavaScript online submissions
// Memory Usage: 45.2 MB, less than 35.82% of JavaScript online submissions

// /**
//  * @param {TreeNode} leaf
//  * @param {number} needle
//  * @return {TreeNode}
//  */
// const searchBST = (leaf, needle) =>
//   !leaf
//     ? null
//     : (({ val, left, right }) =>
//         needle === val
//           ? leaf
//           : needle < val
//           ? searchBST(left, needle)
//           : searchBST(right, needle))(leaf);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

class Tree {
  /**
   *Creates an instance of Tree.
   * @param {number[]} vals
   * @memberof Tree
   */
  constructor(...vals) {
    for (let i = vals.length - 1; 0 <= i; i--)
      vals[i] = new TreeNode(vals[i], vals[i * 2 + 1], vals[i * 2 + 2]);
    return vals[0];
  }
}

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { deepStrictEqual } from 'assert';

deepStrictEqual(searchBST(new Tree(4, 2, 7, 1, 3), 2), new Tree(2, 1, 3));

/*

      4
    /  \
   2   7
 /  \
1   3

0 1  2
1 3  4
2 5  6
3 7  8
4 9 10

*/

deepStrictEqual(searchBST(new Tree(4, 2, 7, 1, 3), 5), null);

/*

      4
    /  \
   2    7
 /  \
1    3

*/

deepStrictEqual(searchBST(new Tree([9]), 2), null);

deepStrictEqual(searchBST(new Tree(), Infinity), null);
