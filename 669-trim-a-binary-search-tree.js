// 669. Trim a Binary Search Tree
// https://leetcode.com/problems/trim-a-binary-search-tree/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 87.39% of JavaScript online submissions
// for Trim a Binary Search Tree.
// Memory Usage: 39.4 MB, less than 55.88% of JavaScript online submissions
// for Trim a Binary Search Tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
const trimBST = (root, L, R) => {
  const recurse = leaf => {
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

class TreeNode {
  constructor(val = null, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  serialize() {
    const vals = [];
    const stk = [this];
    let node;
    while ((node = stk.shift())) {
      vals.push(node.val);
      if (node.left) stk.push(node.left);
      if (node.right) stk.push(node.right);
    }
    return vals;
  }
}

class BinaryTree {
  constructor(...vals) {
    const nodes = vals.map(value => (null === value ? null : new TreeNode(value)));
    for (let i = 0; 'undefined' !== typeof nodes[i * 2 + 1]; i++)
      if (null !== nodes[i]) nodes[i].left = nodes[i * 2 + 1];
    for (let i = 0; 'undefined' !== typeof nodes[i * 2 + 2]; i++)
      if (null !== nodes[i]) nodes[i].right = nodes[i * 2 + 2];
    this.root = nodes[0];
    return nodes[0];
  }
}

const tests = [
  //   1
  //  / \
  // 0   2
  //
  //   1
  //    \
  //     2

  {
    input: {
      tree: [1, 0, 2],
      L: 1,
      R: 2,
    },
    expected: [1, null, 2],
  },

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

  {
    input: {
      tree: [3, 0, 4, null, 2, null, null, null, null, 1],
      L: 1,
      R: 3,
    },
    expected: [3, 2, null, 1],
  },
];

const areArraysEqual = (a1, a2) => a1.length === a2.length && a1.join() === a2.join();

tests.forEach(({ input: { tree, L, R }, expected }) => {
  const output = trimBST(new BinaryTree(...tree), L, R);
  const name = `[${tree.join(', ')}] L = {$L} R = ${R}`;
  expected = new BinaryTree(...expected);
  if (JSON.stringify(expected.serialize()) === JSON.stringify(output.serialize())) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
});
