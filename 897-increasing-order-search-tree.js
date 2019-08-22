// 897. Increasing Order Search Tree
// https://leetcode.com/problems/increasing-order-search-tree/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 124 ms, faster than 95.37% of JavaScript online submissions
// for Increasing Order Search Tree.
// Memory Usage: 43.2 MB, less than 50.00% of JavaScript online submissions
// for Increasing Order Search Tree.

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

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  serialize() {
    const a = [];
    const q = [this];
    while (q.length) {
      // console.log(stk.pop());
      const { val, left, right } = q.shift();
      console.log(val);
      console.log(left);
      // console.log({ val, left, right });
      // if (null === val) data.push(null);
      if (null !== left) q.push(left);
      // else a.push(null);
      if (null !== right) q.push(right);
      // else a.push(null);
      a.push(val);
    }
    return a;
  }
}

// 0
// 1, 2
// 3, 4, 5, 6
// 7, 8, 9, 10, 11, 12, 13, 14

class Tree {
  constructor(...vals) {
    this.root = null;
    if (0 === vals.length) return this;
    const nodes = vals.map(val => {
      if (null === val) return null;
      return new TreeNode(val);
    });
    for (let i = 0; i < vals.length; i++) {
      if (null === nodes[i]) continue;
      if (nodes[i * 2 + 1]) nodes[i].left = nodes[i * 2 + 1];
      if (nodes[i * 2 + 2]) nodes[i].right = nodes[i * 2 + 2];
    }
    this.root = nodes[0];
    return this;
  }
}

// const serializeBinaryTreeAsLevelOrderArray = root => {
//   if (!root) return [];
//   const q = [root];
//   const a = [];

//   while (q.length > 0) {
//     const curr = q.shift();
//     a.push(curr.val);
//     if (curr.left) q.push(curr.left);
//     if (curr.right) q.push(curr.right);
//   }

//   return a;
// };

// const deserializeLevelOrderArrayAsBinaryTree = a => {
//   const nodeArray = [...a].map(e => (e ? new TreeNode(e) : null));
//   nodeArray.forEach((e, i) => {
//     if (!e) return;
//     const childIndex = (i + 1) * 2;
//     e.left = nodeArray[childIndex - 1] || null;
//     e.right = nodeArray[childIndex] || null;
//   });
//   return nodeArray[0];
// };

const tests = [
  //       5
  //      / \
  //     3    6
  //    / \    \
  //   2   4    8
  //  /        / \
  // 1        7   9

  {
    input: [5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9],
    expected: [1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9],
  },
];

for (let { input, expected } of tests) {
  input = new Tree(...input).root;
  // console.log(input);
  console.log(input.serialize());
  // expected = new Tree(...expected).root;
  // console.log(expected);
  // console.log(expected.serializeInorder());
  // const root = deserializeLevelOrderArrayAsBinaryTree(input);
  // const expected = serializeBinaryTreeAsLevelOrderArray(referenceSolution(root));
  // const result = increasingBST(input);
  // console.log(serializeBinaryTreeAsInorderArray(root));
  // const stringifiedResult = JSON.stringify(result.serializeInorder());
  // console.log(stringifiedResult);
  // if (areArraysEqual(expected, result)) {
  //   console.log(`✅ ${name}`);
  // } else {
  //   console.log(`🔴 ${name}`);
  //   console.log(`Got "${result}", but expected "${expected}"`);
  // }
}
