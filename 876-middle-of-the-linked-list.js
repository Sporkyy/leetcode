// 876. Middle of the Linked List
// https://leetcode.com/problems/middle-of-the-linked-list/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const listLength = head => {
  let length = 0;
  tmp = head;
  while (tmp) {
    length++;
    tmp = tmp.next;
  }
  return length;
};

const listMiddle = length => Math.floor(length / 2);

const listFfwd = (head, begin) => {
  let pos = 0;
  tmp = head;
  while (tmp) {
    if (begin === pos) {
      return tmp;
    }
    pos++;
    tmp = tmp.next;
  }
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = head => {
  const length = listLength(head);
  // console.log(length);
  const middle = listMiddle(length);
  // console.log(middle);
  const answer = listFfwd(head, middle);
  // console.log(answer);
  return answer;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const toListNode = a => {
  const tmp = a.map(n => new ListNode(n));
  // console.log(tmp);
  for (i = 0; i < tmp.length; i++) {
    if ('undefined' !== typeof tmp[i + 1]) {
      tmp[i].next = tmp[i + 1];
    }
  }
  return tmp[0];
};

const serializeList = head => {
  const a = [];
  let tmp = head;
  while (tmp) {
    a.push(tmp.val);
    tmp = tmp.next;
  }
  return a;
};

const areArraysEqual = (a1, a2) => {
  if (a1.length !== a2.length) return false;
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
};

const tests = [
  {
    name: 'Example 1',
    input: [1, 2, 3, 4, 5],
    expected: [3, 4, 5],
  },
  {
    name: 'Example 2',
    input: [1, 2, 3, 4, 5, 6],
    expected: [4, 5, 6],
  },
];

tests.forEach(({ name, input, expected }) => {
  // console.log(input);
  const result = middleNode(toListNode(input));
  // console.log(result);
  // console.log(serialize(result));
  if (areArraysEqual(expected, serializeList(result))) {
    console.log(`✅ ${name}`);
  } else {
    console.log(`🔴 ${name}`);
    console.log(`Expected "${expected}", but got "${result}"`);
  }
});
