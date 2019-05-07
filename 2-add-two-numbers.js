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
  for (i = a.length - 1; 0 < i; i--) {
    a[i].next = a[i - 1];
  }
  return a[a.length - 1];
};

const listNodeToInt = l => {
  let n = '';
  let curr = l;
  while (null !== curr) {
    n = n + curr.val;
    curr = curr.next;
  }
  return parseInt(n, 10);
};

const tests = [
  {
    name: '342 + 465 = 807',
    input: {
      l1: intToListNode(342),
      l2: intToListNode(465),
    },
    expected: intToListNode(807),
  },
  {
    name: '999 + 999 = 1998',
    input: {
      l1: intToListNode(999),
      l2: intToListNode(999),
    },
    expected: intToListNode(1998),
  },
];

tests.forEach(({ name, input: { l1, l2 }, expected }) => {
  const output = addTwoNumbers(l1, l2);
  if (listNodeToInt(expected) === listNodeToInt(addTwoNumbers(l1, l2))) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log('Expected the below');
    console.log(JSON.stringify(expected, null, 4));
    console.log('But got the below instead');
    console.log(JSON.stringify(output, null, 4));
  }
});
