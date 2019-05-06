<?php
/**
 * PHP version 7.2
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
        // print('<pre>');
        // print_r($l1);
        // print_r($l2);
        // print('</pre>');

        $answerHead = new ListNode(0);
        $carry = 0;
        $p = $l1;
        $q = $l2;

        while (null !== $p || null !== $q) {
            $x = $p->val ?? 0;
            $y = $q->val ?? 0;
            $sum = $x + $y + $carry;
            $carry = intdiv($sum, 10);
            // print_r("$carry<br>");
            $answerHead->next = new ListNode($sum % 10);

            print('<pre>');
            print_r($answerHead);
            print('</pre>');

            $answerHead = $answerHead->next;

            // print('<pre>');
            // print_r($answerHead);
            // print('</pre>');

            if (null !== $p) {
                $p = $p->next;
            }
            if (null !== $q) {
                $q = $q->next;
            }
        }

        // print('<pre>');
        // print_r($answerHead);
        // print('</pre>');

        if (0 < $carry) {
            $answerHead->next = new ListNode($carry);
        }

        // print('<pre>');
        // print_r($answerHead);
        // print('</pre>');

        return $answerHead->next;
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
 * @return ListNode the first ListNode
 */
function createNodeList()
{
    $args = func_get_args();
    $listNodes = [];

    for ($i = 0; $i < count($args); $i++) {
        $listNodes[$i] = new ListNode($args[$i]);
    }

    // print('<pre>');
    // print_r($listNodes);
    // print('</pre>');

    for ($i = 0; $i < count($listNodes) - 1; $i++) {
        $listNodes[$i]->next = $listNodes[$i + 1];
    }

    // print('<pre>');
    // print_r($listNodes);
    // print('</pre>');

    // print('<pre>');
    // print_r($listNodes[0]);
    // print('</pre>');

    return $listNodes[0];
}

$tests = [
    [
        'name' => '(2 -> 4 -> 3) + (5 -> 6 -> 4)',
        'input' => [createNodeList(2, 4, 3), createNodeList(5, 6, 4)],
        'expected' => createNodeList(7, 0, 8),
        // Explanation: 342 + 465 = 807.
    ]
];

$solution = new Solution();

foreach ($tests as $test) {
    // echo $test['name'];
    $output = $solution->addTwoNumbers($test['input'][0], $test['input'][1]);
}
