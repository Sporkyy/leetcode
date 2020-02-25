// 590. N-ary Tree Postorder Traversal
// https://leetcode.com/problems/n-ary-tree-postorder-traversal/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Definition for a Node.
function Node(val, children) {
  this.val = val;
  this.children = children;
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 81.36% of JavaScript online submissions
// Memory Usage: 37.4 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {Node} root
//  * @return {number[]}
//  */
// const postorder = root => {
//   const [res, stk] = [[], [root]];
//   while (
//     stk.length &&
//     null !== stk[0] &&
//     'undefined' !== typeof stk[0] &&
//     'undefined' !== typeof stk[0].val
//   ) {
//     const curr = stk.pop();
//     if (curr.children && curr.children.length) stk.push(...curr.children);
//     res.unshift(curr.val);
//   }
//   return res;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 48.87% of JavaScript online submissions
// Memory Usage: 37.6 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {Node} root
 * @return {number[]}
 */
const postorder = root => {
  const [res, stk] = [[], [root]];
  while (stk.length && null !== stk[0]) {
    const curr = stk.pop();
    if (curr.children && curr.children.length) stk.push(...curr.children);
    res.push(curr.val);
  }
  return res.reverse();
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

deepStrictEqual(
  postorder(
    new Node(1, [
      new Node(3, [new Node(5), new Node(6)]),
      new Node(2),
      new Node(4),
    ]),
  ),
  [5, 6, 3, 2, 4, 1],
);

deepStrictEqual(
  postorder(
    new Node(1, [
      new Node(2),
      new Node(3, [
        new Node(6, []),
        new Node(7, [new Node(11, [new Node(14)])]),
      ]),
      new Node(4, [new Node(8, [new Node(12)])]),
      new Node(5, [new Node(9, [new Node(13)]), new Node(10)]),
    ]),
  ),
  [2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10, 5, 1],
);

deepStrictEqual(postorder(null), []);
