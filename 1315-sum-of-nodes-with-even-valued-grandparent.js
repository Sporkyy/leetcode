// 1315. Sum of Nodes with Even-Valued Grandparent
// https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/

/*

Given a binary tree, return the sum of values of nodes with even-valued
grandparent. (A grandparent of a node is the parent of its parent, if it
exists.)

If there are no nodes with an even-valued grandparent, return 0.

Constraints:
- The number of nodes in the tree is between 1 and 10^4.
- The value of nodes is between 1 and 100.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 104 ms, faster than 37.09% of JavaScript online submissions
// Memory Usage: 46.1 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumEvenGrandparent = root => {
  const stk = [root];
  let sum = 0;
  while (stk.length) {
    const { val, left, right } = stk.pop();
    if (left) stk.push(left);
    if (right) stk.push(right);
    if (null === val || 1 === val % 2) continue;
    if (left && left.left) sum += left.left.val;
    if (left && left.right) sum += left.right.val;
    if (right && right.left) sum += right.left.val;
    if (right && right.right) sum += right.right.val;
  }
  return sum;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * @param {array} a
 */
const toTree = a => {
  const nodes = a.map(n => (null !== n ? new TreeNode(n) : n));
  // console.log(nodes);
  for (let i = 0; i < nodes.length; i++) {
    if (null === nodes[i]) continue;
    nodes[i].left = undefined === nodes[i * 2 + 1] ? null : nodes[i * 2 + 1];
    nodes[i].right = undefined === nodes[i * 2 + 2] ? null : nodes[i * 2 + 2];
  }
  // console.log(nodes);
  return nodes[0];
};

// Example 1:
strictEqual(
  sumEvenGrandparent(
    toTree([6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5]),
  ),
  18,
);
/*

       6
      / \
    7     8
   / \   / \
  2  7  1  3
 /  / \     \
9  1  4      5

*/
// Explanation: The red nodes are the nodes with even-value grandparent
// while the blue nodes are the even-value grandparents.
