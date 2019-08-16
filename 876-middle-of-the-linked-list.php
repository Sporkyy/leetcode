<?php

// 876. Middle of the Linked List
// https://leetcode.com/problems/middle-of-the-linked-list/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val) { $this->val = $val; }
 * }
 */
class Solution
{

    /**
     * @param ListNode $head
     * @return ListNode
     */
    function middleNode($head)
    {
        // echo '<pre>', print_r($head, true), '</pre>';
        $slowP = $fastP = $head;
        while ($fastP) {
            $slowP = $slowP->next;
            $fastP = $fastP->next;
            // if (isset($fastP->next)) $fastP = $fastP->next;
        }
        echo '<pre>', print_r($fastP, true), '</pre>';
        return $slowP;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


class ListNode
{
    public $val = 0;
    public $next = null;

    function __construct($val)
    {
        $this->val = $val;
    }

    function serialize()
    {
        $a = [];
        $tmp = $this->next;
        while ($tmp) {
            array_push($a, $tmp->val);
            $tmp = $tmp->next;
        }
        return json_encode($a);
    }
}

class LList
{
    public $head = null;
    function __construct(...$vals)
    {
        $nodes = array_map(function ($val) {
            return new ListNode($val);
        }, $vals);
        // echo '<pre>', print_r($nodes, true), '</pre>';
        for ($i = 0; $i < count($nodes); $i++) {
            if (array_key_exists($i + 1, $nodes)) {
                $nodes[$i]->next = $nodes[$i + 1];
            }
        }
        // echo '<pre>', print_r($nodes, true), '</pre>';
        $this->head = $nodes[0];
    }
}

$tests = [
    [
        'input' => [1, 2, 3, 4, 5],
        'expected' => [3, 4, 5],
    ],

    // [
    //     'input' => [1, 2, 3, 4, 5, 6],
    //     'expected' => [4, 5, 6],
    // ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $expected = (new LList(...$expected))->head;
    $name = json_encode($input);
    $result = $s->middleNode((new LList(...$input))->head);
    $stringifiedResult = json_encode($result->serialize());
    $stringifiedExpected = json_encode($expected);
    if ($expected->serialize() === $result->serialize()) {
        echo "✅ {$name}";
    } else {
        echo "🔴 {$name}";
        echo "<i>Expected <b>{$stringifiedExpected}</b>, but got <b>{$stringifiedResult}</b></i><br>";
    }
    echo '<hr>';
}
