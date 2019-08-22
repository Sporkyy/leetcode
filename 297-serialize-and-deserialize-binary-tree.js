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
const serialize = root => {
  if (null === root) return '[]';
  const a = [];
  const q = [root];
  while (q.length) {
    const { val, left, right } = q.shift();
    a.push(val ? val : 'null');
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
  // console.log(data);
  if (0 === data[0].length) return null;
  // console.log(data);
  data = data.map(v => ('null' === v ? null : parseInt(v)));
  // console.log(data);
  const nodes = data.map(val => new TreeNode(val));
  for (let i = 0; i < nodes.length; i++) {
    if (null === nodes[i]) continue;
    nodes[i].left = nodes[i * 2 + 1] || null;
    nodes[i].right = nodes[i * 2 + 2] || null;
  }
  // console.log(nodes);
  return nodes[0];
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const tests = [
  {
    input: '[]',
  },

  {
    input: '[1,2,3,null,null,4,5]',
  },
];

for (const { input } of tests) {
  // console.log(deserialize(input));
  console.log(serialize(deserialize(input)));
  console.log(input === serialize(deserialize(input)));
}
