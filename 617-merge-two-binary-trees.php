<?php

// 617. Merge Two Binary Trees
// https://leetcode.com/problems/merge-two-binary-trees/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 20 ms, faster than 78.57% of PHP online submissions
// for Merge Two Binary Trees.
// Memory Usage: 15.6 MB, less than 33.33% of PHP online submissions
// for Merge Two Binary Trees.

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
     * @param TreeNode $t1
     * @param TreeNode $t2
     * @return TreeNode
     */
    function mergeTrees($t1, $t2)
    {
        if (!$t1) return $t2;
        if (!$t2) return $t1;
        $merged = new TreeNode($t1->val + $t2->val);
        $merged->left = $this->mergeTrees($t1->left, $t2->left);
        $merged->right = $this->mergeTrees($t1->right, $t2->right);
        return $merged;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [
            'a1' => [1, 3, 2, 5],
            'a2' => [2, 1, 3, null, 4, null, 7],
        ],
        'expected' => [3, 4, 5, 5, 4, null, 7],
    ],
];

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
        $q = [$this];
        $a = [];

        while (0 < count($q)) {
            $curr = array_shift($q);
            array_push($a, $curr->val);
            if ($curr->left) array_push($q, $curr->left);
            if ($curr->right) array_push($q, $curr->right);
        }

        return $a;
    }
}

class BinaryTree
{
    public $root = null;

    function __construct(...$vals)
    {
        $nodes = array_map(function ($val) {
            return new TreeNode($val);
        }, $vals);
        for ($i = 0; array_key_exists($i * 2 + 1, $nodes); $i++)
            $nodes[$i]->left = $nodes[$i * 2 + 1];
        for ($i = 0; array_key_exists($i * 2 + 2, $nodes); $i++)
            $nodes[$i]->right = $nodes[$i * 2 + 2];
        $this->root = $nodes[0];
    }
}

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    extract($input);
    $expected = (new BinaryTree(...$expected))->root;
    // echo '<pre>', print_r($expected->serialize(), true), '</pre>';
    $t1 = (new BinaryTree(...$a1))->root;
    // echo '<pre>', print_r($t1, true), '</pre>';
    $t2 = (new BinaryTree(...$a2))->root;
    // echo '<pre>', print_r($t2, true), '</pre>';
    $output = $s->mergeTrees($t1, $t2);
    // echo '<pre>', print_r($output, true), '</pre>';
    $name = json_encode($a1) . ', ' . json_encode($a2);
    if ($expected->serialize() === $output->serialize()) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo 'Got the below<br>';
        echo '<pre>', print_r($output, true), '</pre>';
        echo 'But expected the below<br>';
        echo '<pre>', print_r($expected, true), '</pre>';
    }
}
