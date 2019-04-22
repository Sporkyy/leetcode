// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/

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
 * @return {number}
 */
const maxDepth = root => {
  let answer = 0;
  const recurse = (leaf, level) => {
    if (!leaf) return;
    if (answer < level) answer = level;
    if (leaf.left) recurse(leaf.left, level + 1);
    if (leaf.right) recurse(leaf.right, level + 1);
  };
  recurse(root, 1);
  return answer;
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
  {
    name: 'Example',
    //    3
    //   / \
    //  9  20
    //    /  \
    //   15   7
    input: new BinaryTree(3, 9, 20, null, null, 15, 7),
    expected: 3,
  },
];

tests.forEach(({ name, input, expected }) => {
  const output = maxDepth(input);
  if (expected === output) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
});
