// 617. Merge Two Binary Trees
// https://leetcode.com/problems/merge-two-binary-trees/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

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
  // console.log(t1);
  // console.log(t2);

  let v1 = null,
    l1 = null,
    r1 = null,
    v2 = null,
    l2 = null,
    r2 = null;

  if ('undefined' !== typeof t1 && null !== t1) {
    v1 = t1.val;
    l1 = t1.left;
    r1 = t1.right;
  }

  if ('undefined' !== typeof t2 && null !== t2) {
    v2 = t2.val;
    l2 = t2.left;
    r2 = t2.right;
  }

  if (null === v1 && null === v2) return null;

  // console.log({
  //   v1,
  //   l1,
  //   r1,
  //   v2,
  //   l2,
  //   r2
  // });

  return {
    val: null !== v1 && null === v2 ? v1 : null === v1 && null !== v2 ? v2 : v1 + v2,
    left: mergeTrees(l1, l2),
    right: mergeTrees(r1, r2),
  };
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
    name: '"Run Code" example',
    input: {
      //      1
      //     / \
      //   3    2
      //  /
      // 5
      t1: [1, 3, 2, 5],
      //      2
      //     / \
      //    1   3
      //     \   \
      //      4   7
      t2: [2, 1, 3, null, 4, null, 7],
    },
    //     3
    //    / \
    //   4   5
    //  / \   \
    // 5   4   7
    expected: [3, 4, 5, 5, 4, null, 7],
  },
];

// const areArraysEqual = (a1, a2) =>
//   a1.length === a2.length &&
//   a1.reduce(
//     (acc, curr, i) => ('undefined' === typeof acc ? curr === a2[i] : acc && curr === a2[i]),
//     undefined,
//   );

const TreeNode = (val, left = null, right = null) => ({
  val,
  left,
  right,
});

const arrayToTree = (a, i = 0) => {
  if (a.length <= i) {
    return null;
  }
  return TreeNode(a[i], arrayToTree(a, i * 2 + 1) || null, arrayToTree(a, i * 2 + 2) || null);
};

tests.forEach(({ name, input, expected }) => {
  const t1 = arrayToTree(input.t1);
  const t2 = arrayToTree(input.t2);
  // console.log(t1);
  // console.log(arrayToTree(t1));
  // console.log(t2);
  // console.log(arrayToTree(t2));
  console.log(mergeTrees(t1, t2));
  // const output = mergeTrees(t1, t2);
  // if (areArraysEqual(expected, output)) {
  //   console.log(`✅ ${name}`);
  // } else {
  //   console.log(`🔴 ${name}`);
  //   console.log(`Output "${output}", but expected "${expected}"`);
  // }
});
