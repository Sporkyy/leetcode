<?php

// 669. Trim a Binary Search Tree
// https://leetcode.com/problems/trim-a-binary-search-tree/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 16 ms, faster than 100.00% of PHP online submissions
// for Trim a Binary Search Tree.
// Memory Usage: 18.2 MB, less than 100.00% of PHP online submissions
// for Trim a Binary Search Tree.

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
     * @param Integer $L
     * @param Integer $R
     * @return TreeNode
     */
    function trimBST($root, $L, $R)
    {
        $recurse = function ($leaf) use (&$recurse, $L, $R) {
            if (!$leaf) return null;
            if ($leaf->val < $L) return $recurse($leaf->right);
            if ($R < $leaf->val) return $recurse($leaf->left);
            $leaf->left = $recurse($leaf->left);
            $leaf->right = $recurse($leaf->right);
            return $leaf;
        };
        return $recurse($root);
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

    function serialize()
    {
        $vals = [];
        $stk = [$this];
        while ($node = array_shift($stk)) {
            array_push($vals, $node->val);
            if ($node->left) array_push($stk, $node->left);
            if ($node->right) array_push($stk, $node->right);
        }
        return $vals;
    }
}

class BinaryTree
{
    public $root = null;

    function __construct(...$vals)
    {
        $nodes = array_map(function ($val) {
            if (!is_null($val)) return new TreeNode($val);
        }, $vals);
        for ($i = 0; array_key_exists($i * 2 + 1, $nodes); $i++)
            if (!is_null($nodes[$i])) $nodes[$i]->left = $nodes[$i * 2 + 1];
        for ($i = 0; array_key_exists($i * 2 + 2, $nodes); $i++)
            if (!is_null($nodes[$i])) $nodes[$i]->right = $nodes[$i * 2 + 2];
        $this->root = $nodes[0];
    }
}

$s = new Solution();

$tests = [
    [
        'input' => [
            'tree' => [1, 0, 2],
            'L' => 1,
            'R' => 2,
        ],
        'expected' => [1, null, 2],
    ],
    [
        'input' => [
            'tree' => [3, 0, 4, null, 2, null, null, null, null, 1],
            'L' => 1,
            'R' => 3,
        ],
        'expected' => [3, 2, null, 1],
    ],
];

foreach ($tests as $test) {
    extract($test);
    extract($input);
    $name = '[' . implode(', ', $tree) . "] L = {$L} R = {$R}";
    $root = (new BinaryTree(...$tree))->root;
    // echo '<pre>', print_r($root, true), '</pre>';
    // echo '<pre>', print_r($root->serialize(), true), '</pre>';
    $output = $s->trimBST($root, $L, $R);
    $expected = (new BinaryTree(...$expected))->root;
    if ($expected->serialize() === $output->serialize()) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo '<i>Expected the below</i><br>';
        // echo '<b>', implode(', ', $expected->serialize()), '</b><br>';
        echo '<pre>', print_r($expected, true), '</pre><br>';
        echo '<i>But got</i><br>';
        // echo '<b>', implode(', ', $output->serialize()), '</b><br>';
        echo '<pre>', print_r($output, true), '</pre><br>';
    }
    echo '<hr>';
};
