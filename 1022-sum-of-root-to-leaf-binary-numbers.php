<?php

// 1022. Sum of Root To Leaf Binary Numbers
// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 100.00% of PHP online submissions
// for Sum of Root To Leaf Binary Numbers.
// Memory Usage: 16.6 MB, less than 100.00% of PHP online submissions\
// for Sum of Root To Leaf Binary Numbers.

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
//     function sumRootToLeaf($root)
//     {
//         $stack = [[$root, '']];
//         $binVals = [];
//         while (0 < count($stack)) {
//             list($leaf, $acc) = array_pop($stack);
//             extract((array)$leaf);
//             $acc .= $val;
//             if ($left) array_push($stack, [$left, $acc]);
//             if ($right) array_push($stack, [$right, $acc]);
//             if (!$left && !$right) array_push($binVals, $acc);
//         }
//         return array_sum(array_map(function ($bin) {
//             return bindec($bin);
//         }, $binVals));
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

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
    function sumRootToLeaf($root)
    {
        $answer = 0;
        $stack = [[$root, '']];
        while (0 < count($stack)) {
            list($leaf, $acc) = array_pop($stack);
            extract((array)$leaf);
            $acc .= $val;
            if ($left) array_push($stack, [$left, $acc]);
            if ($right) array_push($stack, [$right, $acc]);
            if (!$left && !$right) $answer += bindec($acc);
        }
        return $answer;
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


function deserializeLevelOrderArrayAsBinaryTree($a)
{
    $nodes = array_map(function ($v) {
        return new TreeNode($v);
    }, $a);
    for ($i = 0; $i < count($nodes); $i++) {
        if (!isset($nodes[$i])) continue;
        $childIndex = ($i + 1) * 2;
        $nodes[$i]->left = $nodes[$childIndex - 1] ?? null;
        $nodes[$i]->right = $nodes[$childIndex] ?? null;
    }
    return $nodes[0];
};

$tests = [
    [
        //      1
        //     / \
        //   0     1
        //  / \   / \
        // 0   1 0   1
        'input' => [1, 0, 1, 0, 1, 0, 1],
        'expected' => 22,
        // Explanation:
        // (100) + (101) + (110) + (111)
        //    4  +    5  +    6  +    7 = 22
    ],
    [
        //         1
        //        / \
        //      0     1
        //     / \   / \
        //    0   1 0   1
        //  /
        // 1
        'input' => [1, 0, 1, 0, 1, 0, 1, 1],
        'expected' => 27,
        // Explanation:
        // (1001) + (101) + (110) + (111)
        //    9  +    5  +    6  +    7 = 27
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->sumRootToLeaf(deserializeLevelOrderArrayAsBinaryTree($input));
    if ($expected === $output) {
        echo '✅ ', implode(', ', $input), '<br>';
    } else {
        echo '🔴 ', implode(', ', $input), '<br>';
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$output}</b></i>";
    }
    echo '<hr>';
}
