<?php
/**
 * PHP version 7.2
 *
 * 2. Add Two Numbers
 * https://leetcode.com/problems/add-two-numbers/submissions/
 *
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain
 * a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero,
 * except the number 0 itself.
 *
 * @category Professional_Development
 * @package  Leetcode_Problems
 * @author   Todd Sayre <captain.friendly+doccomment@gmail.com>
 * @license  ISC <https://opensource.org/licenses/ISC>
 * @link     https://github.com/Sporkyy
 */

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val) { $this->val = $val; }
 * }
 *
 * Runtime: 28 ms, faster than 94.80% of PHP online submissions for Add Two Numbers.
 * Memory Usage: 14.9 MB, less than 18.60% of PHP online submissions
 * for Add Two Numbers.
 *
 * @category Professional_Development
 * @package  Leetcode_Problems
 * @author   Todd Sayre <captain.friendly+doccomment@gmail.com>
 * @license  ISC <https://opensource.org/licenses/ISC>
 * @link     https://github.com/Sporkyy
 */
class Solution
{

    /**
     * Add the two numbers in both linked lists together
     *
     * @param ListNode $l1 The first linked list
     * @param ListNode $l2 The last linked list
     *
     * @return ListNode
     */
    public function addTwoNumbers($l1, $l2)
    {
        $dummyHead = new ListNode(0);
        $resultCurr = $dummyHead;
        $l1Curr = $l1;
        $l2Curr = $l2;
        $carry = 0;

        while (null !== $l1Curr || null !== $l2Curr) {
            $l1Val = $l1Curr->val ?? 0;
            $l2Val = $l2Curr->val ?? 0;
            $sum = $l1Val + $l2Val + $carry;
            $resultCurr = $resultCurr->next = new ListNode($sum % 10);
            $carry = intdiv($sum, 10);

            if (null !== $l1Curr) {
                $l1Curr = $l1Curr->next;
            }
            if (null !== $l2Curr) {
                $l2Curr = $l2Curr->next;
            }
        }

        if (0 < $carry) {
            $resultCurr->next = new ListNode($carry);
        }

        return $dummyHead->next;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * A singly-linked list
 *
 * @category Professional_Development
 * @package  Leetcode_Problems
 * @author   Todd Sayre <captain.friendly+doccomment@gmail.com>
 * @license  ISC <https://opensource.org/licenses/ISC>
 * @link     https://github.com/Sporkyy
 */
class ListNode
{
    public $val = 0;
    public $next = null;

    /**
     * Construct the node
     *
     * @param value $val This value of this node
     */
    public function __construct($val)
    {
        $this->val = $val;
    }
}

/**
 * Construct the node
 *
 * @param n $n The number from which to construct the nodes
 *
 * @return ListNode the first ListNode
 */
function createNodeList($n)
{
    $listNodes = array_reverse(str_split($n));

    for ($i = 0; $i < count($listNodes); $i++) {
        $listNodes[$i] = new ListNode($listNodes[$i]);
    }

    for ($i = 0; $i < count($listNodes) - 1; $i++) {
        $listNodes[$i]->next = $listNodes[$i + 1];
    }

    return $listNodes[0];
}

/**
 * Turn a node list into an integer
 *
 * @param head $head The head node
 *
 * @return number The numerical representation of the node list
 */
function serializeNodeList($head)
{
    $curr = $head;
    $s = '';
    while (null !== $curr) {
        $s = $curr->val . $s;
        $curr = $curr->next;
    }
    return intval($s);
}

$tests = [
    [
        'name' => '342 + 465 = 807',
        'input' => [createNodeList(342), createNodeList(465)],
        'expected' => createNodeList(807),
    ]
];

$solution = new Solution();

foreach ($tests as $test) {
    extract($test);
    $expected = serializeNodeList($expected);
    $output = serializeNodeList(
        $solution->addTwoNumbers($input[0], $input[1])
    );
    if ($expected === $output) {
        print("✅ {$name}<br>");
    } else {
        print("🔴 {$name}<br>");
        print('Expected the below<br>');
        print_r($expected);
        print('But got the below instead<br>');
        print_r($output);
    }
}
