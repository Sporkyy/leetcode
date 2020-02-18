// 297. Serialize and Deserialize Binary Tree
// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 88.99% of JavaScript online submissions
// Memory Usage: 44.2 MB, less than 17.65% of JavaScript online submissions

// /**
//  * Encodes a tree to a single string.
//  *
//  * @param {TreeNode} root
//  * @return {string}
//  */
// const serialize = root => JSON.stringify(root);

// /**
//  * Decodes your encoded data to tree.
//  *
//  * @param {string} data
//  * @return {TreeNode}
//  */
// const deserialize = data => JSON.parse(data);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {object} root
 */
const serialize = root => {
  if (null === root.val && null === root.left && null === root.right)
    return '[]';
  const queue = [root];
  const vals = [];
  while (queue.length) {
    const curr = queue.shift();
    vals.push(null === curr || null === curr.val ? 'null' : curr.val);
    // vals.push(null === curr || null === curr.val ? null : curr.val);
    if (null !== curr) queue.push(curr.left, curr.right);
  }
  while ('null' === vals[vals.length - 1]) vals.pop();
  // return `[${vals.join(',')}]`;
  return `[${vals.toString()}]`;
};

/**
 * @param {string} data
 */
const deserialize = data => {
  if ('[]' === data) return new TreeNode(null);
  data = data
    .slice(1)
    .slice(0, data.length - 2)
    .split(',');
  for (let i = 0; i < data.length; i++) {
    if ('null' === data[i]) data[i] = null;
    else data[i] = Number(data[i]);
    data[i] = new TreeNode(data[i]);
  }
  for (let i = 0; i < data.length; i++) {
    if (null === data[i]) continue;
    if (data[i * 2 + 1]) data[i].left = data[i * 2 + 1];
    if (data[i * 2 + 2]) data[i].right = data[i * 2 + 2];
  }
  // console.log(data);
  return data[0];
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//    1
//  /  \
// 2    3
// console.log(deserialize('[1,2,3]'));
// console.log(serialize(deserialize('[1,2,3]')));

// 1
//  \
//   2
// console.log(deserialize('[1,null,2]'));
// console.log(serialize(deserialize('[1,null,2]')));

//      1
//    /
//   2
//  /
// 3
// console.log(deserialize('[1,2,null,3]'));
// console.log(serialize(deserialize('[1,2,null,3]')));

//   1
//  / \
// 2   3
//    / \
//   4   5
// console.log(deserialize('[1,2,3,null,null,4,5]'));
// console.log(serialize(deserialize('[1,2,3,null,null,4,5]')));

//                   1
//             /          \
//          10             n
//        /    \         /  \
//      9      11       n     8
//     / \     / \    / \    / \
//    n   8  12   n  7   n  n   13
//    et. al.
// console.log(
//   serialize(
//     deserialize(
//       '[1,10,null,9,11,null,8,12,null,7,null,null,13,null,6,14,null,5,null,null,15,null,4,16,null,3,null,null,17,null,2,18,null,1,null,null,19]',
//     ),
//   ),
// );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

deepStrictEqual(deserialize(serialize(deserialize('[]'))), deserialize('[]'));

deepStrictEqual(
  deserialize(serialize(deserialize('[1,null,2]'))),
  deserialize('[1,null,2]'),
);

deepStrictEqual(
  deserialize(serialize(deserialize('[1,2,3,null,null,4,5]'))),
  deserialize('[1,2,3,null,null,4,5]'),
);

deepStrictEqual(
  deserialize(
    serialize(
      deserialize(
        '[1,10,null,9,11,null,8,12,null,7,null,null,13,null,6,14,null,5,null,null,15,null,4,16,null,3,null,null,17,null,2,18,null,1,null,null,19]',
      ),
    ),
  ),
  deserialize(
    '[1,10,null,9,11,null,8,12,null,7,null,null,13,null,6,14,null,5,null,null,15,null,4,16,null,3,null,null,17,null,2,18,null,1,null,null,19]',
  ),
);
