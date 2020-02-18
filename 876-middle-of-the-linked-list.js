// 876. Middle of the Linked List
// https://leetcode.com/problems/middle-of-the-linked-list/

/*

Given a non-empty, singly linked list with head node head, return a
middle node of linked list.

If there are two middle nodes, return the second middle node.

*/

import { deepStrictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 52 ms, faster than 67.88% of JavaScript online submissions
// Memory Usage: 33.8 MB, less than 33.33% of JavaScript online submissions

const listLength = head => {
  let length = 0;
  let tmp = head;
  while (tmp) {
    length++;
    tmp = tmp.next;
  }
  return length;
};

const listMiddle = length => Math.floor(length / 2);

const listFfwd = (head, begin) => {
  let pos = 0;
  let tmp = head;
  while (tmp) {
    if (begin === pos) {
      return tmp;
    }
    pos++;
    tmp = tmp.next;
  }
};

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

const toList = a => {
  const tmp = a.map(n => new ListNode(n));
  // console.log(tmp);
  for (let i = 0; i < tmp.length; i++) {
    if ('undefined' !== typeof tmp[i + 1]) {
      tmp[i].next = tmp[i + 1];
    }
  }
  return tmp[0];
};

deepStrictEqual(middleNode(toList([1, 2, 3, 4, 5])), toList([3, 4, 5]));

deepStrictEqual(middleNode(toList([1, 2, 3, 4, 5, 6])), toList([4, 5, 6]));
