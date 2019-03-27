// 589. N-ary Tree Preorder Traversal
// https://leetcode.com/problems/n-ary-tree-preorder-traversal/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const preorderNested = root =>
  !root
    ? []
    : 0 === root.children.length
    ? [root.val]
    : [root.val, ...root.children.map(c => preorderNested(c))];

const flatten = a =>
  a.reduce((acc, curr) => (Array.isArray(curr) ? [...acc, ...flatten(curr)] : [...acc, curr]), []);

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
const preorder = root => flatten(preorderNested(root));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const tests = [
  {
    name: 'Example 1',
    input: {
      $id: '1',
      children: [
        {
          $id: '2',
          children: [
            {
              $id: '5',
              children: [],
              val: 5
            },
            {
              $id: '6',
              children: [],
              val: 6
            }
          ],
          val: 3
        },
        {
          $id: '3',
          children: [],
          val: 2
        },
        {
          $id: '4',
          children: [],
          val: 4
        }
      ],
      val: 1
    },
    expected: [1, 3, 5, 6, 2, 4]
  },
  {
    name: 'No children',
    input: {
      $id: '1',
      children: [],
      val: 44
    },
    expected: [44]
  },
  {
    name: 'Null',
    input: null,
    expected: []
  }
];

const check = (a1, a2) => a1.reduce((acc, curr, i) => acc && curr === a2[i], true);

tests.forEach(({ name, input, expected }) => {
  const result = preorder(input);
  if (check(result, expected)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
