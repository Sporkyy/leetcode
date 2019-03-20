// 700. Search in a Binary Search Tree
// https://leetcode.com/problems/search-in-a-binary-search-tree/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} leaf
 * @param {number} needle
 * @return {TreeNode}
 */
const searchBST = (leaf, needle) => {
  if (null === leaf) return null;
  const { val, left, right } = leaf;
  return needle === val ? leaf : needle < val ? searchBST(left, needle) : searchBST(right, needle);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const TreeNode = (val, left = null, right = null) => ({ val, left, right });

//                0
//         /            \
//       1               2
//    /     \          /    \
//   3       4        5      6
//  / \     /  \    /  \   /  \
// 7   8   9   10  11  12  13  14
// 0: ~nothing~
// 1: left
// 2: right
// 3: left, left
// 4: left, right
// 5: right, left
// 6: right, right
// 7: left, left, left
// 8: left, left, right
// 9: left, right, left
// 10: left, right, right
// 11: right, left, left
// 12: right, left, right
// 13: right, right, left
// 14: right, right, right
const directions = i => {};

const sideByIndex = i => (1 === i % 2 ? 'left' : 'right');

const leafByIndex = (t, i) => {};

const arrayToTree = a => {
  let root;
  a.forEach((n, i) => {
    const leaf = TreeNode(a[i]);
    // leaf.left = TreeNode(a[i + 1]);
    // leaf.right = TreeNode(a[i + 2]);
    if (0 === i) {
      root = leaf;
    }
  });
  console.log(root);
  return root;
};

//     4
//    / \
//   2   7
//  / \
// 1   3
console.log(arrayToTree([4, 2, 7, 1, 3]));

//   2
//  / \
// 1   3
// [2, 1, 3]
