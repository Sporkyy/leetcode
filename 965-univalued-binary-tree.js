// 965. Univalued Binary Tree
// https://leetcode.com/problems/univalued-binary-tree/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 44 ms, faster than 98.63% of JavaScript online submissions
// for Univalued Binary Tree.
// Memory Usage: 33.9 MB, less than 57.14% of JavaScript online submissions
// for Univalued Binary Tree.

// const allTreeNodesEqual = (t, v) => {
//   // console.log(t.val);
//   return (
//     null === t || (v === t.val && allTreeNodesEqual(t.left, v) && allTreeNodesEqual(t.right, v))
//   );
// };

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
// var isUnivalTree = root => allTreeNodesEqual(root, root.val);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 56.91% of JavaScript online submissions
// for Univalued Binary Tree.
// Memory Usage: 34.1 MB, less than 14.29% of JavaScript online submissions
// for Univalued Binary Tree.

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
var isUnivalTree = root => {
  const v = root.val;
  const stk = [root];
  while (stk.length) {
    const { val, left, right } = stk.pop();
    // Why this exta check? Why isn't the if left+right enough?
    // It has something to do with the way my tree is constructed.
    // if (null === val) continue;
    if (val !== v) return false;
    if (left) stk.push(left);
    if (right) stk.push(right);
  }
  return true;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

class BinaryTree {
  constructor(...vals) {
    this.root = null;
    if (0 === vals.length) return;
    const a = vals.map(v => new TreeNode(v));
    for (let i = 0; i < vals.length; i++) {
      // if (!vals[i]) continue;
      a[i].left = a[i * 2 + 1] || null;
      a[i].right = a[i * 2 + 2] || null;
    }
    this.root = a[0];
  }
}

const tests = [
  //      1
  //    /   \
  //   1     1
  //  / \     \
  // 1  1      1

  //           0
  //       /        \
  //     1            2
  //    / \         /    \
  //   3   4       5      6
  //  /\   /\     / \    / \
  // 7 8  9 10   11 12  13 14

  {
    input: [1, 1, 1, 1, 1, null, 1],
    expected: true,
  },

  {
    input: [2, 2, 2, 5, 2],
    expected: false,
  },

  {
    input: [1],
    expected: true,
  },
];

for ({ input, expected } of tests) {
  r = new BinaryTree(...input).root;
  const result = isUnivalTree(r);
  // console.log(result);
  const name = JSON.stringify(input);
  // console.log(name);
  if (result === expected) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}" but got "${result}"`);
  }
}
