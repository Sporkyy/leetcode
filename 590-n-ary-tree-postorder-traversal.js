// 590. N-ary Tree Postorder Traversal
// https://leetcode.com/problems/n-ary-tree-postorder-traversal/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const postorderNested = root =>
  !root
    ? []
    : root.children.length === 0
    ? [root.val]
    : [...root.children.map(c => postorderNested(c)), root.val];

const flattened = a =>
  a.reduce(
    (acc, curr) => (Array.isArray(curr) ? [...acc, ...flattened(curr)] : [...acc, curr]),
    [],
  );

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
const postorder = root => flattened(postorderNested(root));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class Node {
  constructor(val = null, children = []) {
    this.val = val;
    this.children = children;
    return this;
  }
}

const tests = [
  {
    name: 'Example',
    input: new Node(1, [new Node(3, [new Node(5), new Node(6)]), new Node(2), new Node(4)]),
    expected: [5, 6, 3, 2, 4, 1],
  },
];

const areArraysEqual = (a1, a2) => a1.length === a2.length && a1.join() === a2.join();

tests.forEach(({ name, input, expected }) => {
  const result = postorder(input);
  if (areArraysEqual(result, expected)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
