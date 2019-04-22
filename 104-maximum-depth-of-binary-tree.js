// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 88 ms, faster than 8.25% of JavaScript online submissions for Maximum Depth of Binary Tree.
// Memory Usage: 37.4 MB, less than 5.14% of JavaScript online submissions for Maximum Depth of Binary Tree.

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

// Runtime: 72 ms, faster than 47.99% of JavaScript online submissions for Maximum Depth of Binary Tree.
// Memory Usage: 37.2 MB, less than 14.02% of JavaScript online submissions for Maximum Depth of Binary Tree.

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
  const nodes = [[root, 1]];
  let deepestDepth = 0;
  while (0 < nodes.length) {
    const [leaf, depth] = nodes.pop();
    if (null === leaf) continue;
    if (deepestDepth < depth) deepestDepth = depth;
    if (leaf.left) nodes.push([leaf.left, depth + 1]);
    if (leaf.right) nodes.push([leaf.right, depth + 1]);
  }
  return deepestDepth;
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
    if (0 === levelOrderValues.length) {
      this.root = null;
    }
    return this;
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
    input: new BinaryTree(3, 9, 20, null, null, 15, 7).root,
    expected: 3,
  },
  {
    name: 'Zero levels',
    input: new BinaryTree().root,
    expected: 0,
  },
  {
    name: 'Two levels',
    input: new BinaryTree(1, 2).root,
    expected: 2,
  },
];

tests.forEach(({ name, input, expected }) => {
  // console.log(input);
  const output = maxDepth(input);
  if (expected === output) {
    console.log(`✅ ${name} (${expected} = ${output})`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${output}"`);
  }
});
