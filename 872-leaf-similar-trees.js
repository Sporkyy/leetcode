// 872. Leaf-Similar Trees
// https://leetcode.com/problems/leaf-similar-trees/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const leafNodesVals = root => {
  const vals = [];
  const depthFirst = node => {
    if (!node) return;
    depthFirst(node.left);
    depthFirst(node.right);
    if (!node.val || node.left || node.right) return;
    vals.push(node.val);
  };
  depthFirst(root);
  return vals;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = (root1, root2) => leafNodesVals(root1).join() === leafNodesVals(root2).join();

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class TreeNode {
  constructor(val = null, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const deserializeLevelOrderArrayAsBinaryTree = a => {
  const nodeArray = [...a].map(e => (e ? new TreeNode(e) : null));
  nodeArray.forEach((e, i) => {
    if (!e) return;
    const childIndex = (i + 1) * 2;
    e.left = nodeArray[childIndex - 1] || null;
    e.right = nodeArray[childIndex] || null;
  });
  return nodeArray[0];
};

const tests = [
  {
    name: 'Problem Example, True',
    input: {
      //      3
      //    /   \
      //   5     1
      //  / \   / \
      //  6  2  9  8
      //    / \
      //   7   4
      tree1: deserializeLevelOrderArrayAsBinaryTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]),
      //         3
      //       /   \
      //     5       1
      //    / \     / \
      //   6   7   4   2
      //              / \
      //             9   8
      tree2: deserializeLevelOrderArrayAsBinaryTree([
        3,
        5,
        1,
        6,
        7,
        4,
        2,
        null,
        null,
        null,
        null,
        null,
        null,
        9,
        8,
      ]),
    },
    expected: true,
  },
  {
    name: 'Problem Example, False',
    input: {
      tree1: deserializeLevelOrderArrayAsBinaryTree([3, 5, 1, 6, 2, 9, 8, 7, 4]),
      tree2: deserializeLevelOrderArrayAsBinaryTree([3, 5, 1, 6, 2, 9, 8, 4, 7]),
    },
    expected: false,
  },
  {
    name: 'Run Code; Wrong Answer',
    input: {
      tree1: deserializeLevelOrderArrayAsBinaryTree([1, 2]),
      tree2: deserializeLevelOrderArrayAsBinaryTree([2, 2]),
    },
    expected: true,
  },
];

tests.forEach(({ name, input: { tree1, tree2 }, expected }) => {
  const result = leafSimilar(tree1, tree2);
  if (expected === result) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
