// 559. Maximum Depth of N-ary Tree
// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 612 ms, faster than 37.87% of JavaScript online submissions
// for Maximum Depth of N-ary Tree.
// Memory Usage: 81 MB, less than 28.95% of JavaScript online submissions
// for Maximum Depth of N-ary Tree.

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
const maxDepth = root =>
  !root ? 0 : root.children.reduce((acc, curr) => Math.max(acc, maxDepth(curr)), 0) + 1;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
    return this;
  }
}

class NaryTree {
  constructor(n, ...vals) {
    if (!vals || (1 === vals.length && !vals[0])) return null;
    const nodes = vals.map(v => new Node(v));
    // console.log(nodes);
    for (let i = 0; nodes[i * n + 1]; i++) {
      nodes[i].children = nodes.slice(i * n + 1, i * n + n);
    }
    // console.log(nodes);
    this.root = nodes[0];
  }
}

const tests = [
  // 0 = 1, 2
  // =-=-=-=-=-=-=-
  // 1 = 3, 4
  // 2 = 5, 6
  // =-=-=-=-=-=-=-
  // 3 = 7

  {
    input: {
      vals: '0,1,2,3,4,5,6,7',
      n: 2,
    },
    expected: 4,
  },

  // 0 =  1,  2,  3
  // =-=-=-=-=-=-=-
  // 1 =  4,  5,  6
  // 2 =  7,  8,  9
  // 3 = 10, 11, 12
  // =-=-=-=-=-=-=-
  // 4 = 13

  {
    input: {
      vals: '0,1,2,3,4,5,6,7,8,9,10,11,12,13',
      n: 3,
    },
    expected: 4,
  },

  // 1 = 3, 2, 4
  // =-=-=-=-=-=-=-
  // 3 = 5, 6

  {
    input: {
      vals: '1,3,2,4,5,6',
      n: 3,
    },
    expected: 3,
  },

  {
    input: {
      vals: '',
      n: 2,
    },
    expected: 0,
  },

  {
    input: {
      vals: '1',
      n: 2,
    },
    expected: 1,
  },
];

tests.forEach(({ input: { vals, n }, expected }) => {
  const root = new NaryTree(n, ...vals.split(',')).root;
  const result = maxDepth(root);
  const name = `${n} 👉 ${vals}`;
  if (expected === result) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
