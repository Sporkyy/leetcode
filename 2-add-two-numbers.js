// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 104 ms, faster than 100.00% of JavaScript online submissions for Add Two Numbers.
// Memory Usage: 38.8 MB, less than 24.00% of JavaScript online submissions for Add Two Numbers.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  const dummyHead = new ListNode(0);
  let resultCurr = dummyHead;
  let l1Curr = l1;
  let l2Curr = l2;
  let carry = 0;

  while (null !== l1Curr || null !== l2Curr || 0 < carry) {
    const l1Val = l1Curr && l1Curr.val ? l1Curr.val : 0;
    const l2Val = l2Curr && l2Curr.val ? l2Curr.val : 0;
    const sum = l1Val + l2Val + carry;

    resultCurr = resultCurr.next = new ListNode(sum % 10);
    carry = Math.trunc(sum / 10);

    if (null !== l1Curr) l1Curr = l1Curr.next;
    if (null !== l2Curr) l2Curr = l2Curr.next;
  }

  return dummyHead.next;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    return this;
  }
}

const intToListNode = n => {
  const a = ('' + n).split('').map(d => new ListNode(parseInt(d, 10)));
  for (let i = a.length - 1; 0 < i; i--) {
    a[i].next = a[i - 1];
  }
  return a[a.length - 1];
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(
  addTwoNumbers(intToListNode(342), intToListNode(465)),
  intToListNode(807),
);

deepStrictEqual(
  addTwoNumbers(intToListNode(999), intToListNode(999)),
  intToListNode(1998),
);
