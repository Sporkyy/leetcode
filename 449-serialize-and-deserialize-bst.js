// 449. Serialize and Deserialize BST
// https://leetcode.com/problems/serialize-and-deserialize-bst/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 84 ms, faster than 68.64% of JavaScript online submissions
// for Serialize and Deserialize BST.
// Memory Usage: 40.3 MB, less than 57.89% of JavaScript online submissions
// for Serialize and Deserialize BST.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = root => JSON.stringify(root);

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = data => JSON.parse(data);

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class TreeNode {
  constructor(val = null, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const tests = [
  //   0
  //  /
  // 1

  // '[0,1]',

  //   2
  //  / \
  // 1   3

  // '[2,1,3]',

  //         _ 3 _
  //       /       \
  //      0         4
  //    /  \       / \
  //   n    2     n   n
  //  / \  / \
  // n  n  n  9

  // '[3,0,4,null,2,null,null,null,null,null,null,9]',

  //         _ 5 _
  //       /       \
  //      3         6
  //    /  \       / \
  //   2    4     n   n
  //  /
  // 1

  // '[5,3,6,2,4,null,null,1]',

  '[41,37,44,24,39,42,48,1,35,38,40,null,43,46,49,0,2,30,36,null,null,null,null,null,null,99]',

  '[41,37,44,24,39,42,48,1,35,38,40,null,43,46,49,0,2,30,36,null,null,null,null,null,null,45]',

  '[41,37,44,24,39,42,48,1,35,38,40,null,43,46,49,0,2,30,36,null,null,null,null,null,null,45,47,null,null,null,null,null,4,29,32,null,null,null,null,null,null,3,9,26,null,31,34,null,null,7,11,25,27,null,null,33,null,6,8,10,16,null,null,null,28,null,null,5,null,null,null,null,null,15,19,null,null,null,null,12,null,18,20,null,13,17,null,null,22,null,14,null,null,21,23]',
];

for (input of tests) {
  const root1 = deserialize(input);
  // console.log(JSON.stringify(root1));
  const root2 = deserialize(serialize(root1));
  // console.log(JSON.stringify(root2));
  const output1 = serialize(root1);
  const output2 = serialize(root2);
  if (output1 === output2) {
    console.log(`✅ ${input}`);
  } else {
    console.log(`🔴 ${input}`);
    console.log('Expected the below');
    console.log(output1);
    console.log('But got the below');
    console.log(output2);
  }
}
