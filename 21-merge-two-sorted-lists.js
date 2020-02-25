// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 86.83% of JavaScript online submissions
// Memory Usage: 35.7 MB, less than 27.44% of JavaScript online submissions

// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var mergeTwoLists = function(l1, l2) {
//   if (!l1 || !l2) return l1 || l2;
//   if (l2.val < l1.val) [l1, l2] = [l2, l1];
//   l1.next = mergeTwoLists(l1.next, l2);
//   return l1;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 50.70% of JavaScript online submissions
// Memory Usage: 35.6 MB, less than 46.15% of JavaScript online submissions

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  if (!l1 || !l2) return l1 || l2;
  if (l2.val < l1.val) [l1, l2] = [l2, l1];
  l1.next = mergeTwoLists(l1.next, l2);
  return l1;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const deserializeList = s => {
  const a = s.split('->').map(sub => new ListNode(sub));
  for (let i = 0; i < a.length - 1; i++) a[i].next = a[i + 1];
  return a[0];
};

deepStrictEqual(
  mergeTwoLists(deserializeList('1->2->4'), deserializeList('1->3->4')),
  deserializeList('1->1->2->3->4->4'),
);

deepStrictEqual(
  mergeTwoLists(deserializeList('1->2->4'), deserializeList('1->3->4->5')),
  deserializeList('1->1->2->3->4->4->5'),
);

deepStrictEqual(
  mergeTwoLists(deserializeList('1'), deserializeList('1')),
  deserializeList('1->1'),
);

deepStrictEqual(
  mergeTwoLists(deserializeList('1->2'), deserializeList('1')),
  deserializeList('1->1->2'),
);
