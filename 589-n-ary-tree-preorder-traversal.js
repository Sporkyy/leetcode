// 589. N-ary Tree Preorder Traversal
// https://leetcode.com/problems/n-ary-tree-preorder-traversal/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const nestedArrayAnswer = root => !!!root ? [] : 0 === root.children.length ? [root.val] : [root.val, ...root.children.map(c => nestedArrayAnswer(c))];

const flat = a => a.reduce((acc, curr) => Array.isArray(curr) ? [...acc, ...flat(curr)] : [...acc, curr], [])

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
const preorder = root => flat(nestedArrayAnswer(root));

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const run = {
//   "$id": "1",
//   "children": [{
//     "$id": "2",
//     "children": [{
//       "$id": "5",
//       "children": [],
//       "val": 5
//     }, {
//       "$id": "6",
//       "children": [],
//       "val": 6
//     }],
//     "val": 3
//   }, {
//     "$id": "3",
//     "children": [],
//     "val": 2
//   }, {
//     "$id": "4",
//     "children": [],
//     "val": 4
//   }],
//   "val": 1
// }

const run = {
  "$id": "1",
  "children": [],
  "val": 44
}

// const run = null;

console.log(preorder(run));