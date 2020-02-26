// 559. Maximum Depth of N-ary Tree
// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Definition for a Node.
function Node(val, children) {
  this.val = val;
  this.children = children;
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 612 ms, faster than 37.87% of JavaScript online submissions
// Memory Usage: 81 MB, less than 28.95% of JavaScript online submissions

/**
 * @param {Node} root
 * @return {number}
 */
// const maxDepth = root =>
//   !root
//     ? 0
//     : root.children.reduce((acc, curr) => Math.max(acc, maxDepth(curr)), 0) + 1;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 87.04% of JavaScript online submissions
// Memory Usage: 39.1 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {Node} root
 * @return {number}
 */
const maxDepth = root => {
  if (!root) return 0;
  let max = 0;
  const stk = [[root, 1]];
  while (stk.length) {
    const [curr, depth] = stk.pop();
    max = Math.max(max, depth);
    if (curr.children && 0 < curr.children.length) {
      stk.push(...curr.children.map(child => [child, depth + 1]));
    }
  }
  return max;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const createTree = (n, ...vals) => {
  if (!vals || (1 === vals.length && !vals[0])) return null;
  const nodes = vals.map(v => new Node(v));
  for (let i = 0; nodes[i * n + 1]; i++)
    nodes[i].children = nodes.slice(i * n + 1, i * n + n);
  return nodes[0];
};

// 0 = 1, 2
// =-=-=-=-=-=-=-
// 1 = 3, 4
// 2 = 5, 6
// =-=-=-=-=-=-=-
// 3 = 7

strictEqual(maxDepth(createTree(2, 0, 1, 2, 3, 4, 5, 6, 7)), 4);

// 0 =  1,  2,  3
// =-=-=-=-=-=-=-
// 1 =  4,  5,  6
// 2 =  7,  8,  9
// 3 = 10, 11, 12
// =-=-=-=-=-=-=-
// 4 = 13

strictEqual(
  maxDepth(createTree(3, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13)),
  4,
);

// 1 = 3, 2, 4
// =-=-=-=-=-=-=-
// 3 = 5, 6

strictEqual(maxDepth(createTree(3, 1, 3, 2, 4, 5, 6)), 3);

strictEqual(maxDepth(createTree(2, null)), 0);

strictEqual(maxDepth(createTree(2, 1)), 1);
