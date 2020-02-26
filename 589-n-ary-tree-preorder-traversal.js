// 589. N-ary Tree Preorder Traversal
// https://leetcode.com/problems/n-ary-tree-preorder-traversal/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Definition for a Node.
function Node(val, children) {
  this.val = val;
  this.children = children;
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const preorderNested = root =>
  !root
    ? []
    : root.children.length === 0
    ? [root.val]
    : [root.val, ...root.children.map(c => preorderNested(c))];

const flattened = a =>
  a.reduce(
    (acc, curr) =>
      Array.isArray(curr) ? [...acc, ...flattened(curr)] : [...acc, curr],
    [],
  );

/**
 * @param {Node} root
 * @return {number[]}
 */
const preorder = root => flattened(preorderNested(root));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

deepStrictEqual(
  preorder(
    new Node(1, [
      new Node(3, [new Node(5, []), new Node(6, [])]),
      new Node(2, []),
      new Node(4, []),
    ]),
  ),
  [1, 3, 5, 6, 2, 4],
);

deepStrictEqual(
  preorder(
    new Node(1, [
      new Node(2, []),
      new Node(3, [
        new Node(6, []),
        new Node(7, [new Node(11, [new Node(14, [])])]),
      ]),
      new Node(4, [new Node(8, [new Node(12, [])])]),
      new Node(5, [new Node(9, [new Node(13, [])]), new Node(10, [])]),
    ]),
  ),
  [1, 2, 3, 6, 7, 11, 14, 4, 8, 12, 5, 9, 13, 10],
);
