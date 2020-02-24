// 617. Merge Two Binary Trees
// https://leetcode.com/problems/merge-two-binary-trees/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 92 ms, faster than 61.58% of JavaScript online submissions
// Memory Usage: 41.5 MB, less than 13.69% of JavaScript online submissions

// /**
//  * @param {TreeNode} t1
//  * @param {TreeNode} t2
//  * @return {TreeNode}
//  */
// const mergeTrees = (t1, t2) => {
//   // console.log(t1);
//   // console.log(t2);

//   let v1 = null,
//     l1 = null,
//     r1 = null,
//     v2 = null,
//     l2 = null,
//     r2 = null;

//   if ('undefined' !== typeof t1 && null !== t1) {
//     v1 = t1.val;
//     l1 = t1.left;
//     r1 = t1.right;
//   }

//   if ('undefined' !== typeof t2 && null !== t2) {
//     v2 = t2.val;
//     l2 = t2.left;
//     r2 = t2.right;
//   }

//   if (null === v1 && null === v2) return null;

//   // console.log({
//   //   v1,
//   //   l1,
//   //   r1,
//   //   v2,
//   //   l2,
//   //   r2
//   // });

//   return {
//     val: null !== v1 && null === v2 ? v1 : null === v1 && null !== v2 ? v2 : v1 + v2,
//     left: mergeTrees(l1, l2),
//     right: mergeTrees(r1, r2),
//   };
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 92 ms, faster than 61.58% of JavaScript online submissions
// Memory Usage: 40.4 MB, less than 39.29% of JavaScript online submissions

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
const mergeTrees = (t1, t2) => {
  if (!t1) return t2;
  if (!t2) return t1;
  const merged = new TreeNode(t1.val + t2.val);
  merged.left = mergeTrees(t1.left, t2.left);
  merged.right = mergeTrees(t1.right, t2.right);
  return merged;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*

                  ____________ 00 ____________
                /                             \
         ____ 01 ____                   _____ 02 _____
       /              \               /               \
     __03__          __04__          __05__          __06__
    /      \        /      \        /      \        /      \
  07       08      09      10      11      12      13      14
 /  \     / \     / \     / \     / \     / \     / \     / \
15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30

val: 00, left: 01 (val * 2 + 1), right: 02 (val * 2 + 2)
val: 01, left: 03 (val * 2 + 1), right: 04 (val * 2 + 2)
val: 02, left: 05 (val * 2 + 1), right: 06 (val * 2 + 2)
val: 03, left: 07 (val * 2 + 1), right: 08 (val * 2 + 2)
val: 04, left: 09 (val * 2 + 1), right: 10 (val * 2 + 2)

*/

const createTree = (...vals) => {
  const nodes = vals.map(val => new TreeNode(val));
  for (let i = 0; nodes[i * 2 + 1]; i++) nodes[i].left = nodes[i * 2 + 1];
  for (let i = 0; nodes[i * 2 + 2]; i++) nodes[i].right = nodes[i * 2 + 2];
  this.root = nodes[0];
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

deepStrictEqual(
  mergeTrees(createTree(1, 3, 2, 5), createTree(2, 1, 3, null, 4, null, 7)),
  createTree(3, 4, 5, 5, 4, null, 7),
);
