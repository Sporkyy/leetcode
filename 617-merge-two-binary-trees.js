// 617. Merge Two Binary Trees
// https://leetcode.com/problems/merge-two-binary-trees/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 92 ms, faster than 61.58% of JavaScript online submissions
// for Merge Two Binary Trees.
// Memory Usage: 41.5 MB, less than 13.69% of JavaScript online submissions
// for Merge Two Binary Trees.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
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
// for Merge Two Binary Trees.
// Memory Usage: 40.4 MB, less than 39.29% of JavaScript online submissions
// for Merge Two Binary Trees.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
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

//                   ____________ 00 ____________
//                 /                             \
//          ____ 01 ____                   _____ 02 _____
//        /              \               /               \
//      __03__          __04__          __05__          __06__
//     /      \        /      \        /      \        /      \
//   07       08      09      10      11      12      13      14
//  /  \     / \     / \     / \     / \     / \     / \     / \
// 15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30

// val: 00, left: 01 (val * 2 + 1), right: 02 (val * 2 + 2)
// val: 01, left: 03 (val * 2 + 1), right: 04 (val * 2 + 2)
// val: 02, left: 05 (val * 2 + 1), right: 06 (val * 2 + 2)
// val: 03, left: 07 (val * 2 + 1), right: 08 (val * 2 + 2)
// val: 04, left: 09 (val * 2 + 1), right: 10 (val * 2 + 2)

const tests = [
  {
    input: {
      a1: [1, 3, 2, 5],
      a2: [2, 1, 3, null, 4, null, 7],
    },
    expected: [3, 4, 5, 5, 4, null, 7],
  },
];

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }

  serialize() {
    const q = [this];
    const a = [];
    while (0 < q.length) {
      const curr = q.shift();
      a.push(curr.val);
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }
    return a;
  }
}

class BinaryTree {
  constructor(...vals) {
    const nodes = vals.map(val => new TreeNode(val));
    for (let i = 0; nodes[i * 2 + 1]; i++) nodes[i].left = nodes[i * 2 + 1];
    for (let i = 0; nodes[i * 2 + 2]; i++) nodes[i].right = nodes[i * 2 + 2];
    this.root = nodes[0];
  }
}

// const arrayToTree = (a, i = 0) => {
//   if (a.length <= i) {
//     return null;
//   }
//   return TreeNode(a[i], arrayToTree(a, i * 2 + 1) || null, arrayToTree(a, i * 2 + 2) || null);
// };

tests.forEach(({ input: { a1, a2 }, expected }) => {
  const t1 = new BinaryTree(...a1).root;
  // console.log(t1);
  // console.log(t1.serialize());
  const t2 = new BinaryTree(...a2).root;
  // console.log(t2);
  // console.log(t2.serialize());
  const name = `${JSON.stringify(a1)}, ${JSON.stringify(a2)}`;
  const output = mergeTrees(t1, t2).serialize();
  // console.log(output);
  // console.log(output.serialize());
  if (JSON.stringify(expected) === JSON.stringify(output)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Got "${output}", but expected "${expected}"`);
  }
});
