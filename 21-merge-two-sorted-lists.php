<?php

// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 92.31% of PHP online submissions
// for Merge Two Sorted Lists.
// Memory Usage: 14.9 MB, less than 36.78% of PHP online submissions
// for Merge Two Sorted Lists.

/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val) { $this->val = $val; }
 * }
 */
// class Solution
// {

//     /**
//      * @param ListNode $l1
//      * @param ListNode $l2
//      * @return ListNode
//      */
//     function mergeTwoLists($l1, $l2)
//     {
//         $m = [];
//         while (isset($l1) || isset($l2)) {
//             if (isset($l1) && isset($l2)) {
//                 if ($l1->val < $l2->val) {
//                     array_push($m, $l1);
//                     $l1 = $l1->next;
//                 } else {
//                     array_push($m, $l2);
//                     $l2 = $l2->next;
//                 }
//             } else {
//                 if (isset($l1)) {
//                     array_push($m, $l1);
//                     $l1 = $l1->next;
//                 } else if (isset($l2)) {
//                     array_push($m, $l2);
//                     $l2 = $l2->next;
//                 }
//             }
//         }
//         for ($i = 0; $i < count($m) - 1; $i++) {
//             $m[$i]->next = $m[$i + 1];
//         }
//         // echo '<pre>', print_r($m), '</pre>';
//         return $m[0];
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 4 ms, faster than 96.92% of PHP online submissions
// for Merge Two Sorted Lists.
// Memory Usage: 14.8 MB, less than 62.07% of PHP online submissions
// for Merge Two Sorted Lists.

/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val) { $this->val = $val; }
 * }
 */
// class Solution
// {

//     /**
//      * @param ListNode $l1
//      * @param ListNode $l2
//      * @return ListNode
//      */
//     function mergeTwoLists($l1, $l2)
//     {
//         if (!isset($l1)) return $l2;
//         if (!isset($l2)) return $l1;
//         if ($l1->val < $l2->val) {
//             $l1->next = $this->mergeTwoLists($l1->next, $l2);
//             return $l1;
//         } else {
//             $l2->next = $this->mergeTwoLists($l2->next, $l1);
//             return $l2;
//         }
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val) { $this->val = $val; }
 * }
 */
// class Solution
// {

//     /**
//      * @param ListNode $l1
//      * @param ListNode $l2
//      * @return ListNode
//      */
//     function mergeTwoLists($l1, $l2)
//     {
//         $head = $root = new ListNode(null);
//         while (isset($l1) && isset($l2)) {
//             if ($l1->val < $l2->val) list($head->next, $l1) = [$l1, $l1->next];
//             else list($head->next, $l2) = [$l2, $l2->next];
//             $head = $head->next;
//             $head = $head->next;
//         }
//         if (!isset($l1)) $head->next = $l2;
//         if (!isset($l2)) $head->next = $l1;
//         return $root->next;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 4 ms, faster than 96.92% of PHP online submissions
// for Merge Two Sorted Lists.
// Memory Usage: 14.8 MB, less than 67.82% of PHP online submissions
// for Merge Two Sorted Lists.

/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val) { $this->val = $val; }
 * }
 */
// class Solution
// {

//     /**
//      * @param ListNode $l1
//      * @param ListNode $l2
//      * @return ListNode
//      */
//     function mergeTwoLists($l1, $l2)
//     {
//         $head = $dummy = new ListNode(null);
//         while (isset($l1) && isset($l2)) {
//             if ($l1->val < $l2->val) {
//                 $head->next = $l1;
//                 $l1 = $l1->next;
//             } else {
//                 $head->next = $l2;
//                 $l2 = $l2->next;
//             }
//             $head = $head->next;
//         }
//         if (!isset($l1)) $head->next = $l2;
//         if (!isset($l2)) $head->next = $l1;
//         return $dummy->next;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 0 ms, faster than 100.00% of PHP online submissions
// for Merge Two Sorted Lists.
// Memory Usage: 14.8 MB, less than 67.82% of PHP online submissions
// for Merge Two Sorted Lists.

// https://leetcode.com/problems/merge-two-sorted-lists/discuss/276162/what-is-wrong-of-my-php-code

// class Solution
// {

//     /**
//      * @param ListNode $l1
//      * @param ListNode $l2
//      *
//      * @return ListNode
//      */
//     function mergeTwoLists($l1, $l2)
//     {
//         /* ---    $result = $current = $l1; */
//         /* +++ */
//         $result = $current = new ListNode(null);
//         while ($l1 != null || $l2 != null) {
//             var_dump($l1->val);
//             if ($l1 == null || $l2 == null) {
//                 $current->next = $l1 ?: $l2;
//                 break;
//             }
//             if ($l1->val <= $l2->val) {
//                 $current->next = $l1;
//                 $current = $current->next;
//                 $l1 = $l1->next;
//             } else {
//                 $current->next = $l2;
//                 $current = $current->next;
//                 $l2 = $l2->next;
//             }
//         }
//         /* ---    return $result; */
//         /* +++ */
//         return $result->next;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val) { $this->val = $val; }
 * }
 */
// class Solution
// {

//     /**
//      * @param ListNode $l1
//      * @param ListNode $l2
//      * @return ListNode
//      */
//     function mergeTwoLists($l1, $l2)
//     {
//         $mergedHead = $merged = new ListNode(null);
//         while (isset($l1) && isset($l2)) {
//             if ($l1->val < $l2->val) {
//                 $mergedHead->next = $l1;
//                 $l1 = $l1->next;
//             } else {
//                 $mergedHead->next = $l2;
//                 $l2 = $l2->next;
//             }
//             $mergedHead = $mergedHead->next;
//         }
//         $mergedHead->next = $l1 ?? $l2;
//         return $merged->next;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 0 ms, faster than 100.00% of PHP online submissions
// for Merge Two Sorted Lists.
// Memory Usage: 14.7 MB, less than 96.55% of PHP online submissions
// for Merge Two Sorted Lists.

/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val) { $this->val = $val; }
 * }
 */
// class Solution
// {

//     /**
//      * @param ListNode $l1
//      * @param ListNode $l2
//      * @return ListNode
//      */
//     function mergeTwoLists($h1, $h2)
//     {
//         if (!isset($h1) || !isset($h2)) return $h1 ?? $h2;
//         if ($h2->val < $h1->val) list($h1, $h2) = [$h2, $h1];
//         $h1->next = $this->mergeTwoLists($h1->next, $h2);
//         return $h1;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 12 ms, faster than 42.31% of PHP online submissions
// for Merge Two Sorted Lists.
// Memory Usage: 14.9 MB, less than 58.62% of PHP online submissions
// for Merge Two Sorted Lists.

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
     * @param ListNode $l1
     * @param ListNode $l2
     * @return ListNode
     */
    function mergeTwoLists($l1, $l2)
    {
        $mergedHead = $mergedRoot = new ListNode(null);
        while (isset($l1) && isset($l2)) {
            if ($l2->val < $l1->val) list($l1, $l2) = [$l2, $l1];
            $mergedHead->next = $l1;
            list($l1, $mergedHead) = [$l1->next, $mergedHead->next];
        }
        $mergedHead->next = $l1 ?? $l2;
        return $mergedRoot->next;
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
}

function deserializeList($s)
{
    $a = array_map(function ($n) {
        return new ListNode($n);
    }, explode('->', $s));
    for ($i = 0; $i < count($a) - 1; $i++) {
        $a[$i]->next = $a[$i + 1];
    }
    return $a[0];
}

function serializeListNode($n)
{
    $s = '';
    while (isset($n)) {
        $s .= $n->val;
        if (isset($n->next)) $s .= '->';
        $n = $n->next;
    }
    return $s;
}

$tests = [
    [
        'input' => ['1->2->4', '1->3->4'],
        'expected' => '1->1->2->3->4->4',
    ],
    [
        'input' => ['1->2->4', '1->3->4->5'],
        'expected' => '1->1->2->3->4->4->5',
    ],
    [
        'input' => ['1', '1'],
        'expected' => '1->1',
    ],
    [
        'input' => ['1->2', '1'],
        'expected' => '1->1->2',
    ],
];

function areListsEqual($l1, $l2)
{
    if (!isset($l1) && !isset($l2)) return true;
    if (!isset($l1) || !isset($l2) || $l1->val !== $l2->val) return false;
    return areListsEqual($l1->next, $l2->next);
}

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $name = "{$input[0]}, {$input[1]}";
    $inputLists = array_map(function ($s) {
        return deserializeList($s);
    }, $input);
    $expectedList = deserializeList($expected);
    // echo '<pre>', print_r($inputLists, true), '</pre>';
    $output = $s->mergeTwoLists($inputLists[0], $inputLists[1]);
    $serializedOutput = serializeListNode($output);
    if (areListsEqual($expectedList, $output)) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$serializedOutput}</b></li><br>";
    }
    echo '<hr>';
}
