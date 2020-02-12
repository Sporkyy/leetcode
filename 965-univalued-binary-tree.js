// 965. Univalued Binary Tree
// https://leetcode.com/problems/univalued-binary-tree/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 44 ms, faster than 98.63% of JavaScript online submissions
// Memory Usage: 33.9 MB, less than 57.14% of JavaScript online submissions

// const allTreeNodesEqual = (t, v) => {
//   // console.log(t.val);
//   return (
//     null === t ||
//     (v === t.val &&
//       allTreeNodesEqual(t.left, v) &&
//       allTreeNodesEqual(t.right, v))
//   );
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
//  * @return {boolean}
//  */
// var isUnivalTree = root => allTreeNodesEqual(root, root.val);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 79.55% of JavaScript online submissions
// Memory Usage: 34.1 MB, less than 14.29% of JavaScript online submissions

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// var isUnivalTree = root => {
//   const rootVal = root.val;
//   const stk = [root];
//   while (stk.length) {
//     const { val, left, right } = stk.pop();
//     if (val !== rootVal) return false;
//     if (left) stk.push(left);
//     if (right) stk.push(right);
//   }
//   return true;
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
 * @return {boolean}
 */
var isUnivalTree = (root, unival = root.val) =>
  null === root
    ? true
    : unival !== root.val
    ? false
    : isUnivalTree(root.left, unival) && isUnivalTree(root.right, unival);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class TreeNode {
  constructor(val = null, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
    return this;
  }
}

//           0
//       /       \
//     1           2
//    / \         /  \
//   3   4      5      6
//  /\   /\    / \    / \
// 7 8  9 10  11 12  13 14

class BinaryTree {
  constructor(...vals) {
    this.root = null;
    if (0 === vals.length) return this;
    const nodes = vals.map(val => (null === val ? null : new TreeNode(val)));
    for (let i = 0; i < nodes.length; i++) {
      if (null === nodes[i]) continue;
      nodes[i].left = nodes[i * 2 + 1] || null;
      nodes[i].right = nodes[i * 2 + 2] || null;
    }
    this.root = nodes[0];
    return this;
  }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

/*

1

*/

strictEqual(isUnivalTree(new BinaryTree(1).root), true);

/*

1
 \
  1

*/

strictEqual(isUnivalTree(new BinaryTree(1, null, 1).root), true);

/*

     1
   /   \
  1     1
 / \     \
1  1      1

*/

strictEqual(isUnivalTree(new BinaryTree(1, 1, 1, 1, 1, null, 1).root), true);

/*

     2
   /   \
  2     2
 / \
5  2

*/

strictEqual(isUnivalTree(new BinaryTree(2, 2, 2, 5, 2).root), false);
