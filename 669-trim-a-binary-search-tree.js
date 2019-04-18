// 669. Trim a Binary Search Tree
// https://leetcode.com/problems/trim-a-binary-search-tree/

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
}

class BinaryTree {
  constructor(...levelOrderValues) {
    const nodeArray = levelOrderValues.map(value => (null === value ? null : new TreeNode(value)));
    nodeArray.forEach((node, i) => {
      if (!node) return;
      const childIndex = (i + 1) * 2;
      node.left = nodeArray[childIndex - 1] || null;
      node.right = nodeArray[childIndex] || null;
    });
    this.root = nodeArray[0];
    return nodeArray[0];
  }

  static serializeInLevelOrder(root) {
    const levels = new Map();
    const fill = (leaf, level) => {
      if (!levels.has(level)) levels.set(level, []);
      if (!leaf) {
        levels.set(level, [...levels.get(level), null]);
        return;
      }
      levels.set(level, [...levels.get(level), leaf.val]);
      fill(leaf.left, level + 1);
      fill(leaf.right, level + 1);
    };
    fill(root, 0);
    let vals = [];
    for (const entry of levels.entries()) {
      vals = vals.concat(entry[1]);
    }
    return vals;
  }
}

const tests = [
  // {
  //   name: 'Example 1',
  //   input: {
  //     //   1
  //     //  / \
  //     // 0   2
  //     root: new BinaryTree(1, 0, 2),
  //     L: 1,
  //     R: 2,
  //   },
  //   // 1
  //   //  \
  //   //   2
  //   expected: new BinaryTree(1, null, 2),
  // },
  {
    name: 'Example 2',
    input: {
      //   3
      //  / \
      // 0   4
      //  \
      //   2
      //  /
      // 1
      root: new BinaryTree(3, 0, 4, null, 2, null, null, null, null, 1),
      L: 1,
      R: 3,
    },
    //      3
    //     /
    //   2
    //  /
    // 1
    expected: new BinaryTree(3, 2, null, 1),
  },
];

tests.forEach(({ name, input: { root, L, R }, expected }) => {
  console.log(name);
  // console.log(root);
  console.log(`Input: ${BinaryTree.serializeInLevelOrder(root)}`);
  const result = trimBST(root, L, R);
  console.log(`Output: ${BinaryTree.serializeInLevelOrder(result)}`);
  console.log(`Expected: ${BinaryTree.serializeInLevelOrder(expected)}`);
});
