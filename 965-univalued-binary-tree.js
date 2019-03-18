// 965. Univalued Binary Tree
// https://leetcode.com/problems/univalued-binary-tree/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const allTreeNodesEqual = (t, v) => {
  // console.log(t);
  return null === t || v === t.val && allTreeNodesEqual(t.left, v) && allTreeNodesEqual(t.right, v);
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = root => allTreeNodesEqual(root, root.val);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const TreeNode = (val, left = null, right = null) => {
//   this.val = val;
//   this.left = left;
//   this.right = right;
// };

// const setTreeNodeValue = (t, l, n, v) => {}

// // 1: 0
// // 2: 1, 2
// // 3: 3, 4, 5, 6
// // 4: 7, 8, 9, 10, 11, 12, 13, 14
// // 5: 15
// const treeHeight = a => {
//   for (let i = 0; i <= a.length; i++) {
//     console.log(i);
//     if ('undefined' === typeof a[Math.pow(i, 2)]) {
//       return i;
//     }
//   }
// };

// const toBinaryTree = a => {
//   const t = {};

//   for (let i = 0; i < a.length; i++) {
//     console.log(i);
//     // setTreeNodeValue(t, i % 2, )
//     const level = i;
//     console.log(Math.ceil(Math.pow(i, 2) / 2));
//     const node = i;
//     console.log(node);
//   }

//   return t;
// }

// const tests = [{
//   name: 'Example 1',
//   input: [1, 1, 1, 1, 1, null, 1],
//   expected: true
// }, {
//   name: 'Example 2',
//   input: [2, 2, 2, 5, 2],
//   expected: false
// }, {
//   name: 'One level',
//   input: [7],
//   expected: true
// }];

// tests.forEach(({
//   name,
//   input,
//   expected
// }) => {
//   console.log(name);
//   console.log(treeHeight(input));
//   // toBinaryTree(input);
// });

const test = {
  val: 1,
  left: null,
  right: null
}

console.log(isUnivalTree(test));