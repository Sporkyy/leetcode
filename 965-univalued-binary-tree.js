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

// Runtime: 52 ms, faster than 79.55% of JavaScript online submissions
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
  const rootVal = root.val;
  const stk = [root];
  while (stk.length) {
    const { val, left, right } = stk.pop();
    if (val !== rootVal) return false;
    if (left) stk.push(left);
    if (right) stk.push(right);
  }
  return true;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class TreeNode {
  constructor(val = null, left = null, right = null) {
    this.val = val;
    if (null !== val) {
      this.left = left;
      this.right = right;
    }
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
    if (0 === vals.length) return;
    const a = vals.map(v => (null === v ? null : new TreeNode(v)));
    for (let i = 0; i < vals.length; i++) {
      if (null === vals[i]) continue;
      a[i].left = a[i * 2 + 1] || null;
      a[i].right = a[i * 2 + 2] || null;
    }
    this.root = a[0];
    return this;
  }
}

const tests = [
  //      1
  //    /   \
  //   1     1
  //  / \     \
  // 1  1      1

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

  // 1
  //  \
  //   1

  {
    input: [1, null, 1],
    expected: true,
  },
];

for ({ input, expected } of tests) {
  r = new BinaryTree(...input).root;
  // console.log(r);
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
