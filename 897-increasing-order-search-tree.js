// 897. Increasing Order Search Tree
// https://leetcode.com/problems/increasing-order-search-tree/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const serializeBinaryTreeAsInorderArray = root => {
  const a = [];
  const fillInorder = root => {
    if (!root) return;
    fillInorder(root.left);
    a.push(root.val);
    fillInorder(root.right);
  };
  fillInorder(root);
  return a;
};

const deserializeArrayAsRightOnlyTree = queue => {
  const root = new TreeNode(null);
  let current = root;
  for (let i = 0; i < queue.length; i++) {
    current = current.right = new TreeNode(queue[i]);
  }
  return root.right;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const increasingBST = root => {
  if (!root) return [];
  const a = serializeBinaryTreeAsInorderArray(root);
  // console.log(a);
  const t = deserializeArrayAsRightOnlyTree(a);
  // console.log(t);
  return t;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const referenceSolution = root => {
  const nodes = [];
  const treeNode = new TreeNode(0);
  const depthFirstInorder = root => {
    if (root != null) {
      depthFirstInorder(root.left);
      nodes.push(root.val);
      depthFirstInorder(root.right);
    }
  };

  let current = treeNode;

  depthFirstInorder(root);

  for (let i = 0; i < nodes.length; i++) {
    current.right = new TreeNode(nodes[i]);
    current = current.right;
  }

  return treeNode.right;
};

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

//              0
//         /         \
//       1            2
//    /     \       /    \
//   3       4     5      6
//  / \     /
// 7   8   9
const serializeBinaryTreeAsLevelOrderArray = root => {
  if (!root) return [];
  const q = [root];
  const a = [];

  while (q.length > 0) {
    const curr = q.shift();
    a.push(curr.val);
    if (curr.left) q.push(curr.left);
    if (curr.right) q.push(curr.right);
  }

  return a;
};

//              0
//         /         \
//       1            2
//    /     \       /    \
//   3       4     5      6
//  / \     /
// 7   8   9
//
// 0: left =  1, right =  2
// 1: left =  3, right =  4
// 2: left =  5, right =  6
// 3: left =  7, right =  8
// 4: left =  9, right = 10
// 5: left = 11, right = 12
// 6: left = 13, right = 14
// 7: left = 15, right = 16
// 8: left = 17, right = 18
// 9: left = 19, right = 20
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
    name: 'Example 1',
    //       5
    //      / \
    //     3    6
    //    / \    \
    //   2   4    8
    //  /        / \
    // 1        7   9
    input: [5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9],
  },
];

const areArraysEqual = (a1, a2) => a1.length === a2.length && a1.join() === a2.join();

tests.forEach(({ name, input }) => {
  const root = deserializeLevelOrderArrayAsBinaryTree(input);
  const expected = serializeBinaryTreeAsLevelOrderArray(referenceSolution(root));
  const result = serializeBinaryTreeAsLevelOrderArray(increasingBST(root));
  // console.log(serializeBinaryTreeAsInorderArray(root));
  if (areArraysEqual(expected, result)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Got "${result}", but expected "${expected}"`);
  }
});
