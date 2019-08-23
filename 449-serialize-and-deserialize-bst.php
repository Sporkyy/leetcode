<?php

// 449. Serialize and Deserialize BST
// https://leetcode.com/problems/serialize-and-deserialize-bst/

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
// class Solution
// {

//     /**
//      * @param TreeNode $root
//      * @return TreeNode
//      */
//     function CodecDriver($root)
//     {
//         $q = [$root];
//         $a = [];
//         while (0 < count($q)) {
//             $current = array_shift($q);
//             echo '<pre>', print_r($current), '</pre>';
//             if (!$current) {
//                 array_push($a, 'null');
//                 continue;
//             }
//             array_push($a, $current->val);
//             if ($current->left) array_push($q, $current->left);
//             if ($current->right) array_push($q, $current->right);
//         }
//         return implode(',', $a);
//     }

//     /**
//      * Decodes your encoded data to tree.
//      *
//      * @param {string} data
//      * @return {TreeNode}
//      */
//     function deserialize($data)
//     {
//         return $data;
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
     * @return TreeNode
     */
    function CodecDriver($root)
    {
        $result = [];
        function inOrder($node)
        {
            if (!$node) return $node;
            inOrder($node->left);
            array_push($result, $node->val);
            inOrder($node->right);
        }
        return inOrder($root);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    function deserialize($data)
    {
        return $data;
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
            if (null === $val) return null;
            return new TreeNode($val);
        }, $vals);
        for ($i = 0; $i < count($nodes); $i++) {
            if (null === $nodes[$i]) continue;
            if (array_key_exists($i * 2 + 1, $nodes)) $nodes[$i]->left = $nodes[$i * 2 + 1];
            if (array_key_exists($i * 2 + 2, $nodes)) $nodes[$i]->right = $nodes[$i * 2 + 2];
        }
        // echo '<pre>', print_r($nodes, true), '</pre>';
        $this->root = $nodes[0];
    }
}

$tests = [
    // [0, 1],

    // [2, 1, 3],

    //         5
    //      /    \
    //     3       6
    //    /\      /\
    //   2  4    n   n
    //  /
    // 1

    [5, 3, 6, 2, 4, null, null, 1],

    // [3, 0, 4, null, 2, null, null, null, null, null, null, 9],
];

$s = new Solution();

foreach ($tests as $test) {
    $name = json_encode($test);
    // echo $name, '<br>';
    $root = (new Tree(...$test))->root;
    // echo '<pre>', print_r($root, true), '</pre>';
    $serialized = $s->CodecDriver($root);
    echo 'searialized: ', $serialized, '<br>';
    echo '<hr>';
}
