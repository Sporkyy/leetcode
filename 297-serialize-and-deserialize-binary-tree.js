// 297. Serialize and Deserialize Binary Tree
// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// const serialize = root => {
//   if (!root || !root.val) return '[]';
//   const a = [];
//   const q = [root];
//   while (q.length) {
//     const { val, left, right } = q.shift();
//     a.push(null === val ? 'null' : val);
//     if (left) q.push(left);
//     if (right) q.push(right);
//   }
//   return `[${a.join(',')}]`;
// };

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
// const deserialize = data => {
//   data = data.slice(1, data.length - 1).split(',');
//   if (1 === data.length && 0 === data[0].length) return new TreeNode(null);
//   data = data.map(v => (!v ? null : parseInt(v)));
//   const nodes = data.map(val => new TreeNode(val));
//   for (let i = 0; i < nodes.length; i++) {
//     if (!nodes[i]) continue;
//     nodes[i].left = nodes[i * 2 + 1] || null;
//     nodes[i].right = nodes[i * 2 + 2] || null;
//   }
//   return nodes[0];
// };

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = root => {
  if (!root || !root.val) return '[]';
  const a = [];
  const q = [root];
  while (q.length) {
    const { val, left, right } = q.shift();
    a.push(null === val ? 'null' : val);
    if (left) q.push(left);
    if (right) q.push(right);
  }
  return `[${a.join(',')}]`;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = data => {
  data = data.slice(1, data.length - 1).split(',');
  if (1 === data.length && 0 === data[0].length) return new TreeNode(null);
  data = data.map(v => ('null' === v ? null : parseInt(v)));
  const nodes = data.map(val => new TreeNode(val));
  for (let i = 0; i < nodes.length; i++) {
    if (!nodes[i]) continue;
    nodes[i].left = nodes[i * 2 + 1] || null;
    nodes[i].right = nodes[i * 2 + 2] || null;
  }
  return nodes[0];
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
    return this;
  }
}

class Tree {
  constructor(...vals) {
    this.root = null;
    if (0 === vals.length) return this;
    const nodes = vals.map(v => new TreeNode(v));
    for (let i = 0; i < nodes.length; i++) {
      if (null === nodes[i]) continue;
      nodes[i].left = nodes[i * 2 + 1] || null;
      nodes[i].right = nodes[i * 2 + 2] || null;
    }
    this.root = nodes[0];
    return this;
  }
}

const tests = [
  {
    input: [],
  },

  {
    input: [1, 2, 3, null, null, 4, 5],
  },
];

for (const { input } of tests) {
  const name = JSON.stringify(input);
  const root = new Tree(...input).root;

  // console.log(root);

  // console.log(serialize(root));
  // console.log(deserialize(serialize(input)));

  // console.log(serialize(deserialize(input)));
  // console.log(serialize(deserialize(serialize(deserialize(input)))));

  const r1 = serialize(root);
  // console.log(r1);
  // console.log(deserialize(serialize(root)));
  const r2 = serialize(deserialize(serialize(root)));
  // console.log(r2);

  if (r1 === r2) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
  }
}
