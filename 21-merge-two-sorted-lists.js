// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 86.83% of JavaScript online submissions
// for Merge Two Sorted Lists.
// Memory Usage: 35.7 MB, less than 27.44% of JavaScript online submissions
// for Merge Two Sorted Lists.

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
var mergeTwoLists = function(l1, l2) {
  if (!l1 || !l2) return l1 || l2;
  if (l2.val < l1.val) [l1, l2] = [l2, l1];
  l1.next = mergeTwoLists(l1.next, l2);
  return l1;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const deserializeList = s => {
  const a = s.split('->').map(sub => new ListNode(sub));
  for (i = 0; i < a.length - 1; i++) a[i].next = a[i + 1];
  return a[0];
};

const serializeList = l => (l ? l.val + (l.next ? '->' : '') + serializeList(l.next) : '');

const tests = [
  {
    inputs: ['1->2->4', '1->3->4'],
    expected: '1->1->2->3->4->4',
  },
  {
    inputs: ['1->2->4', '1->3->4->5'],
    expected: '1->1->2->3->4->4->5',
  },
  {
    inputs: ['1', '1'],
    expected: '1->1',
  },
  {
    inputs: ['1->2', '1'],
    expected: '1->1->2',
  },
];

const areListsEqual = ($l1, $l2) => {
  if (!$l1 && !$l2) return true;
  if (!$l1 || !$l2 || $l1.val !== $l2.val) return false;
  return areListsEqual($l1.next, $l2.next);
};

tests.forEach(({ inputs, expected }) => {
  const name = `${inputs[0]}, ${inputs[1]}`;
  const inputLists = inputs.map(input => deserializeList(input));
  // console.log(inputLists);
  const expectedList = deserializeList(expected);
  // console.log(expectedList);
  const output = mergeTwoLists(inputLists[0], inputLists[1]);
  const serializedOutput = serializeList(output);
  // console.log(serializeList(output));
  if (areListsEqual(expectedList, output)) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`"Expected "${expected}", but got "${serializedOutput}"`);
  }
});
