<?php

// 297. Serialize and Deserialize Binary Tree
// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

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
//      * @return String
//      */
//     function Codec($root)
//     { }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// This appears to be neither complete nor completable
// Both a serialize and deserialize function are required
// See: https://leetcode.com/problems/serialize-and-deserialize-binary-tree/discuss/359935/PHP-not-working

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
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    function serialize($root)
    {
        //   if (!root || !root.val) return '[]';
        //   const a = [];
        //   const q = [root];
        //   while (q.length) {
        //     const { val, left, right } = q.shift();
        //     a.push(null === val ? 'null' : val);
        //     if (left) q.push(left);
        //     if (right) q.push(right);
        //   }
        //   return `[${a.join(',')}]`;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    function deserialize($data)
    {
        //   data = data.slice(1, data.length - 1).split(',');
        //   if (1 === data.length && 0 === data[0].length) return new TreeNode(null);
        //   data = data.map(v => ('null' === v ? null : parseInt(v)));
        //   const nodes = data.map(val => new TreeNode(val));
        //   for (let i = 0; i < nodes.length; i++) {
        //     if (!nodes[i]) continue;
        //     nodes[i].left = nodes[i * 2 + 1] || null;
        //     nodes[i].right = nodes[i * 2 + 2] || null;
        //   }
        //   return nodes[0];
    }

    /**
     * @param TreeNode $root
     * @return String
     */
    function Codec($root)
    {
        if (!$root || !$root->val) return '[]';
        $a = [];
        $q = [$root];
        while (count($q)) {
            $current = array_shift($q);
            array_push($a, (null === $current->val ? 'null' : $current->val));
            if ($current->left) array_push($q, $current->left);
            if ($current->right) array_push($q, $current->right);
        }
        return '[' . implode(',', $a) . ']';
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
        $nodes = array_map(function ($v) {
            new TreeNode($v);
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
        'input' => [],
    ],

    [
        'input' => [1, 2, 3, null, null, 4, 5],
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $name = json_encode($input);
    $root = (new Tree(...$input))->root;
}
