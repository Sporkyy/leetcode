<?php

// 559. Maximum Depth of N-ary Tree
// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 476 ms, faster than 57.14% of PHP online submissions
// for Maximum Depth of N-ary Tree.
// Memory Usage: 145 MB, less than 75.00% of PHP online submissions
// for Maximum Depth of N-ary Tree.

/*
// Definition for a Node.
class Node {
    public $val;
    public $children;

    @param Integer $val
    @param list<Node> $children
    function __construct($val, $children) {
        $this->val = $val;
        $this->children = $children;
    }
}
*/
// class Solution
// {

//     /**
//      * @param Node $root
//      * @return Integer
//      */
//     function maxDepth($root)
//     {
//         if (!$root) return 0;
//         return array_reduce($root->children, function ($acc, $curr) {
//             return max($acc, $this->maxDepth($curr));
//         }, 0) + 1;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 464 ms, faster than 85.71% of PHP online submissions
// for Maximum Depth of N-ary Tree.
// Memory Usage: 145 MB, less than 75.00% of PHP online submissions
// for Maximum Depth of N-ary Tree.

/*
// Definition for a Node.
class Node {
    public $val;
    public $children;

    @param Integer $val
    @param list<Node> $children
    function __construct($val, $children) {
        $this->val = $val;
        $this->children = $children;
    }
}
*/
class Solution
{

    /**
     * @param Node $root
     * @return Integer
     */
    function maxDepth($root)
    {
        if (!$root) return 0;
        $max = 0;
        $stk = [[$root, 1]];
        while ($stk) {
            [$curr, $depth] = array_pop($stk);
            $max = max($max, $depth);
            array_push($stk, ...array_map(function ($child) use ($depth) {
                return [$child, $depth + 1];
            }, $curr->children));
        }
        return $max;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class Node
{
    public $val;
    public $children;

    /**
     * @param int $val
     * @param array<Node> $children
     */
    function __construct($val, $children = [])
    {
        $this->val = $val;
        $this->children = $children;
    }
}

class NaryTree
{
    public $root = null;

    /**
     * @param int $n
     * @param array<mixed> $vals
     */
    function __construct($n, ...$vals)
    {
        // echo '<pre>', print_r($vals, true), '</pre>';
        if (!$vals || 1 === count($vals) && !$vals[0]) return null;
        $nodes = array_map(function ($v) {
            return new Node($v);
        }, $vals);
        for ($i = 0; array_key_exists($i * $n + 1, $nodes); $i++) {
            $nodes[$i]->children = array_slice($nodes, $i * $n + 1, $n);
        }
        // echo '<pre>', print_r($nodes, true), '</pre>';
        $this->root = $nodes[0];
    }
}

$tests = [

    // 0 = 1, 2
    // =-=-=-=-=-=-=-
    // 1 = 3, 4
    // 2 = 5, 6
    // =-=-=-=-=-=-=-
    // 3 = 7

    [
        'input' => [
            'vals' => '0,1,2,3,4,5,6,7',
            'n' => 2
        ],
        'expected' => 4,
    ],

    // 0 =  1,  2,  3
    // =-=-=-=-=-=-=-
    // 1 =  4,  5,  6
    // 2 =  7,  8,  9
    // 3 = 10, 11, 12
    // =-=-=-=-=-=-=-
    // 4 = 13

    [
        'input' => [
            'vals' => '0,1,2,3,4,5,6,7,8,9,10,11,12,13',
            'n' => 3
        ],
        'expected' => 4,
    ],

    // 1 = 3, 2, 4
    // =-=-=-=-=-=-=-
    // 3 = 5, 6

    [
        'input' => [
            'vals' => '1,3,2,4,5,6',
            'n' => 3,
        ],
        'expected' => 3,
    ],

    [
        'input' => [
            'vals' => '',
            'n' => 2,
        ],
        'expected' => 0,
    ],

    [
        'input' => [
            'vals' => '1',
            'n' => 2,
        ],
        'expected' => 1,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    extract($input);
    $root = (new NaryTree($n, ...explode(',', $vals)))->root;
    // echo '<pre>', print_r($root, true), '</pre>';
    $result = $s->maxDepth($root);
    if ($expected === $result) {
        echo "✅ {$n} 👉 {$vals}<br>";
    } else {
        echo "🔴 {$n} 👉 {$vals}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$result}</b></i><br>";
    }
    echo '<hr>';
}
