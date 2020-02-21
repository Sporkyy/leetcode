// 669. Trim a Binary Search Tree
// https://leetcode.com/problems/trim-a-binary-search-tree/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 87.39% of JavaScript online submissions
// Memory Usage: 39.4 MB, less than 55.88% of JavaScript online submissions

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
    if (!leaf) return null;
    if (leaf.val < L) return recurse(leaf.right);
    if (R < leaf.val) return recurse(leaf.left);
    leaf.left = recurse(leaf.left);
    leaf.right = recurse(leaf.right);
    return leaf;
  };
  return recurse(root);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

    null === value ? null : new TreeNode(value),
  );
  for (let i = 0; 'undefined' !== typeof nodes[i * 2 + 1]; i++)
    if (null !== nodes[i]) nodes[i].left = nodes[i * 2 + 1];
  for (let i = 0; 'undefined' !== typeof nodes[i * 2 + 2]; i++)
    if (null !== nodes[i]) nodes[i].right = nodes[i * 2 + 2];
  this.root = nodes[0];
  return nodes[0];
};

//   1
//  / \
// 0   2
//
//   1
//    \
//     2

deepStrictEqual(trimBST(toBinaryTree(1, 0, 2), 1, 2), toBinaryTree(1, null, 2));

//      3
//     / \
//    0   4
//     \
//      2
//     /
//    1
//
//      3
//     /
//   2
//  /
// 1

deepStrictEqual(
  trimBST(toBinaryTree(3, 0, 4, null, 2, null, null, null, null, 1), 1, 3),
  toBinaryTree(3, 2, null, 1),
);
