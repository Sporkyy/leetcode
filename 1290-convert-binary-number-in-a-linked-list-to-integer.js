// 1290. Convert Binary Number in a Linked List to Integer
//       https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

/*

Given head which is a reference node to a singly-linked list. The value of each
node in the linked list is either 0 or 1. The linked list holds the binary
representation of a number.

Return the decimal value of the number in the linked list.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 84.38% of JavaScript online submissions
// Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = (head, s = '') =>
  !head ? Number.parseInt(s, 2) : getDecimalValue(head.next, s + head.val);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const createList = vals => {
  const nodes = vals.map(val => new ListNode(val));
  nodes.forEach((node, idx, nodes) => {
    if (idx + 1 < vals.length) node.next = nodes[idx + 1];
  });
  return nodes[0];
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(getDecimalValue(createList([1, 0, 1])), 5);
// Explanation: (101) in base 2 = (5) in base 10

// Example 2:
strictEqual(getDecimalValue(createList([0])), 0);

// Example 3:
strictEqual(getDecimalValue(createList([1])), 1);

// Example 4:
strictEqual(
  getDecimalValue(createList([1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0])),
  18880,
);

// Example 5:
strictEqual(getDecimalValue(createList([0, 0])), 0);
