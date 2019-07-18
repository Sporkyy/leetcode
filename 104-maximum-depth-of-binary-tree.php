<?php

// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 12 ms, faster than 65.45% of PHP online submissions
// Memory Usage: 18.6 MB, less than 13.04% of PHP online submissions

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
//      * @param TreeNode $root
//      * @return Integer
//      */
//     function maxDepth($root)
//     {
//         $nodes = [[$root, 1]];
//         $deepestDepth = 0;
//         while (0 < count($nodes)) {
//             list($leaf, $depth) = array_pop($nodes);
//             if (null === $leaf) continue;
//             if ($deepestDepth < $depth) $deepestDepth = $depth;
//             if ($leaf->left) array_push($nodes, [$leaf->left, $depth + 1]);
//             if ($leaf->right) array_push($nodes, [$leaf->right, $depth + 1]);
//         }
//         return $deepestDepth;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 12 ms, faster than 65.45% of PHP online submissions
// Memory Usage: 16.8 MB, less than 34.78% of PHP online submissions

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
//      * @param TreeNode $root
//      * @return Integer
//      */
//     function maxDepth($root, $depth = 0)
//     {
//         return $root ? max($this->maxDepth($root->left, $depth + 1), $this->maxDepth($root->right, $depth + 1)) : $depth;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 12 ms, faster than 65.45% of PHP online submissions
// Memory Usage: 16.7 MB, less than 82.61% of PHP online submissions

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
     * @return Integer
     */
    function maxDepth($root)
    {
        return !$root ? 0 : 1 + max($this->maxDepth($root->left), $this->maxDepth($root->right));
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class TreeNode
{
    public $val = null;
    public $left = null;
    public $right = null;
    function __construct($val = null, $left = null, $right = null)
    {
        $this->$val = $val;
        $this->$left = $left;
        $this->$right = $right;
    }
}

class BinaryTree
{
    public $root = null;
    function __construct(...$levelOrderValues)
    {
        if (0 === count($levelOrderValues)) return;
        $nodeArray = array_map(function ($value) {
            return null === $value ? null : new TreeNode($value);
        }, $levelOrderValues);
        // echo '<pre>', print_r($nodeArray), '</pre>';
        foreach ($nodeArray as $i => $node) {
            if (!$node) continue;
            $childIndex = ($i + 1) * 2;
            $node->left = $nodeArray[$childIndex - 1] ?? null;
            $node->right = $nodeArray[$childIndex] ?? null;
        }
        // echo '<pre>', print_r($nodeArray), '</pre>';
        $this->root = $nodeArray[0];
    }
}

$tests = [
    [
        'input' => [3, 9, 20, null, null, 15, 7],
        'expected' => 3,
    ],

    [
        'input' => [],
        'expected' => 0,
    ],

    [
        'input' => [1, 2],
        'expected' => 2,
    ],

    [
        'input' => [3, 9, 20, null, null, 15, 7],
        'expected' => 3,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $t = new BinaryTree(...$input);
    // echo '<pre>', print_r($t), '</pre>';
    $output = $s->maxDepth($t->root);
    $name = implode(', ', $input);
    if ($expected === $output) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$output}</b></i><br>";
    }
    echo '<hr>';
}
