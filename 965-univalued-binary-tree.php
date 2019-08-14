<?php

// 965. Univalued Binary Tree
// https://leetcode.com/problems/univalued-binary-tree/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 45.45% of PHP online submissions
// for Univalued Binary Tree.
// Memory Usage: 15.1 MB, less than 100.00% of PHP online submissions
// for Univalued Binary Tree.

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($value) { $this->val = $value; }
 * }
 */
class Solution
{

    /**
     * @param TreeNode $root
     * @return Boolean
     */
    function isUnivalTree($root)
    {
        $rootVal = $root->val;
        $stk = [$root];
        while (count($stk)) {
            extract(get_object_vars(array_pop($stk)));
            if ($val !== $rootVal) return false;
            if ($left) array_push($stk, $left);
            if ($right) array_push($stk, $right);
        }
        return true;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class TreeNode
{
    public $val = null;
    public $left = null;
    public $right = null;
    function __construct($value)
    {
        $this->val = $value;
    }
}

//           0
//       /       \
//     1           2
//    / \         /  \
//   3   4      5      6
//  /\   /\    / \    / \
// 7 8  9 10  11 12  13 14

class BinaryTree
{
    public $root = null;
    function __construct(...$vals)
    {
        if (0 === count($vals)) return;
        $nodes = array_map(function ($val) {
            if (null === $val) return null;
            return new TreeNode($val);
        }, $vals);
        for ($i = 0; $i < count($nodes); $i++) {
            if (null === $nodes[$i]) continue;
            $nodes[$i]->left = $nodes[$i * 2 + 1] ?? null;
            $nodes[$i]->right = $nodes[$i * 2 + 2] ?? null;
        }
        $this->root = $nodes[0];
    }
}

$tests = [
    [
        'input' => [1],
        'expected' => true,
    ],

    // 1
    //  \
    //   1

    [
        'input' => [1, null, 1],
        'expected' => true,
    ],

    //      1
    //    /   \
    //   1     1
    //  / \     \
    // 1  1      1

    [
        'input' => [1, 1, 1, 1, 1, null, 1],
        'expected' => true,
    ],

    //      2
    //    /   \
    //   2     2
    //  / \
    // 5  2

    [
        'input' => [2, 2, 2, 5, 2],
        'expected' => false,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $root = (new BinaryTree(...$input))->root;
    $result = $s->isUnivalTree($root);
    $name = json_encode($input);
    if ($result === $expected) {
        echo "✅ {$name}";
    } else {
        echo "🔴 {$name}";
        echo "<i>Expected <b>{$expected}</b> but got <b>{$result}</b></i>";
    }
    echo '<hr>';
}
