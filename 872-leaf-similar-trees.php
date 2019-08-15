<?php

// 872. Leaf-Similar Trees
// https://leetcode.com/problems/leaf-similar-trees/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 83.33% of PHP online submissions
// for Leaf-Similar Trees.
// Memory Usage: 15 MB, less than 100.00% of PHP online submissions
// for Leaf-Similar Trees.

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($value) { $this->val = $value; }
 * }
 */
// class Solution
// {

//     /**
//      * @param TreeNode $root1
//      * @param TreeNode $root2
//      * @return Boolean
//      */
//     function leafSimilar($root1, $root2)
//     {
//         list($leaves1, $leaves2) = [[], []];
//         $stk = [$root1];
//         while (count($stk)) {
//             extract((array) array_pop($stk));
//             if (!$left && !$right) array_push($leaves1, $val);
//             if ($left) array_push($stk, $left);
//             if ($right) array_push($stk, $right);
//         }
//         array_push($stk, $root2);
//         while (count($stk)) {
//             extract((array) array_pop($stk));
//             if (!$left && !$right) array_push($leaves2, $val);
//             if ($left) array_push($stk, $left);
//             if ($right) array_push($stk, $right);
//         }
//         return $leaves1 === $leaves2;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 4 ms, faster than 100.00% of PHP online submissions
// for Leaf-Similar Trees.
// Memory Usage: 14.9 MB, less than 100.00% of PHP online submissions
// for Leaf-Similar Trees.

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

    function getLeaves($root)
    {
        $stk = [$root];
        $leaves = [];
        while (count($stk)) {
            extract((array) array_pop($stk));
            if (!$left && !$right) {
                array_push($leaves, $val);
                continue;
            }
            if ($left) array_push($stk, $left);
            if ($right) array_push($stk, $right);
        }
        return $leaves;
    }

    /**
     * @param TreeNode $root1
     * @param TreeNode $root2
     * @return Boolean
     */
    function leafSimilar($root1, $root2)
    {
        return $this->getLeaves($root1) === $this->getLeaves($root2);
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

class Tree
{
    public $root = null;

    function __construct(...$vals)
    {
        if (0 === count($vals)) return;
        $nodes = array_map(function ($val) {
            if (null !== $val) return new TreeNode($val);
            else return null;
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
    //      3
    //    /   \
    //   5     1
    //  / \   / \
    // 6  2  9  8
    //    / \
    //   7   4

    //         3
    //       /   \
    //     5       1
    //    / \     / \
    //   6   7   4   2
    //              / \
    //             9   8

    [
        'input' => [
            'root1' => [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4],
            'root2' => [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8],
        ],
        'expected' => true,
    ],

    [
        'input' => [
            'root1' => [3, 5, 1, 6, 2, 9, 8, 7, 4],
            'root2' => [3, 5, 1, 6, 2, 9, 8, 4, 7],
        ],
        'expected' => false,
    ],

    [
        'input' => [
            'root1' => [1, 2],
            'root2' => [2, 2],
        ],
        'expected' => true,
    ],

    [
        'input' => [
            'root1' => [1],
            'root2' => [1],
        ],
        'expected' => true,
    ],

    [
        'input' => [
            'root1' => [1],
            'root2' => [2],
        ],
        'expected' => false,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    extract($input);
    $name = json_encode($root1) . ' and ' . json_encode($root2);
    $root1 = (new Tree(...$root1))->root;
    // echo '<pre>', print_r($root1, true), '</pre>';
    $root2 = (new Tree(...$root2))->root;
    // echo '<pre>', print_r($root2, true), '</pre>';
    $result = $s->leafSimilar($root1, $root2);
    if ($expected === $result) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$result}</b></i><br>";
    }
}
