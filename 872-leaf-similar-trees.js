// 872. Leaf-Similar Trees
// https://leetcode.com/problems/leaf-similar-trees/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const leafNodesVals = root => {
  const vals = [];
  const recur = node => {
    if (!node) return;
    recur(node.left);
    recur(node.right);
    if (!node.val || (node.left && node.left.val) || (node.right && node.right.val)) return;
    vals.push(node.val);
  };
  recur(root);
  return vals;
};

const areArraysEqual = (a1, a2) => {
  if (a1.length !== a2.length) return false;
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
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
var leafSimilar = (root1, root2) => areArraysEqual(leafNodesVals(root1), leafNodesVals(root2));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class TreeNode {
  constructor(val = null, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const deserializeLevelOrderArrayAsBinaryTree = a => {
  const nodeArray = [...a].map(e => new TreeNode(e));
  nodeArray.forEach((e, i) => {
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
  // console.log(tree1);
  // console.log(tree2);
  const result = leafSimilar(tree1, tree2);
  if (expected === result) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
