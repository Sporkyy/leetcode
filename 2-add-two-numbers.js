// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * Runtime: 104 ms, faster than 100.00% of JavaScript online submissions
//  * Memory Usage: 38.8 MB, less than 24.00% of JavaScript online submissions
//  *
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// const addTwoNumbers = (l1, l2) => {
//   const dummyHead = new ListNode(0);
//   let resultCurr = dummyHead;
//   let l1Curr = l1;
//   let l2Curr = l2;
//   let carry = 0;

//   while (null !== l1Curr || null !== l2Curr || 0 < carry) {
//     const l1Val = l1Curr && l1Curr.val ? l1Curr.val : 0;
//     const l2Val = l2Curr && l2Curr.val ? l2Curr.val : 0;
//     const sum = l1Val + l2Val + carry;

//     resultCurr = resultCurr.next = new ListNode(sum % 10);
//     carry = Math.trunc(sum / 10);

//     if (null !== l1Curr) l1Curr = l1Curr.next;
//     if (null !== l2Curr) l2Curr = l2Curr.next;
//   }

//   return dummyHead.next;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// /**
//  * Runtime: 120 ms, faster than 44.38% of JavaScript online submissions
//  * Memory Usage: 38.1 MB, less than 91.67% of JavaScript online submissions
//  *
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @param {number} [carry=0]
//  * @return {ListNode}
//  */
// const addTwoNumbers = (l1, l2, carry = 0) => {
//   if (!l1 && !l2 && !carry) return null;
//   const sum = carry + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
//   const node = new ListNode(sum % 10);
//   node.next = addTwoNumbers(
//     l1 ? l1.next : null,
//     l2 ? l2.next : null,
//     Math.trunc(sum / 10),
//   );
//   return node;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * Runtime: 112 ms, faster than 75.84% of JavaScript online submissions
 * Memory Usage: 38.2 MB, less than 80.56% of JavaScript online submissions
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @param {number} [carry=0]
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2, carry = 0) => {
  // 1. When there are no nodes and nothing to carry, terminate the list
  if (!l1 && !l2 && !carry) return null;
  // 2. Sum what's carried and the node values (anything missing becomes zero)
  const sum = carry + (l1 && l1.val) + (l2 && l2.val);
  // 3. Make a new list node with the value of the last digit of sum
  const node = new ListNode(sum % 10);
  // 4. Recurse with the next nodes, carrying the other digits of the sum
  node.next = addTwoNumbers(l1 && l1.next, l2 && l2.next, Math.trunc(sum / 10));
  return node;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/**
 * A singly-linked list node
 *
 * @class ListNode
 */
class ListNode {
  /**
   * Creates an instance of ListNode.
   *
   * @param {number} val
   * @memberof ListNode
   */
  constructor(val) {
    this.val = val;
    this.next = null;
    return this;
  }
}

/**
 * @param {number[]} a
 * @returns {ListNode}
 */
const arrayToListNode = a => {
  if (!a.length) return null;
  const node = new ListNode(a.pop());
  node.next = arrayToListNode(a);
  return node;
};

/**
 * @param {number} n
 * @returns {ListNode}
 */
const intToListNode = n => {
  if (!n) return null;
  const node = new ListNode(n % 10);
  node.next = intToListNode(Math.trunc(n / 10));
  return node;
};

/**
 * @param {ListNode} node
 * @param {number} [i=1]
 * @returns {number}
 */
const listNodeToInt = (node, i = 1) =>
  !node ? 0 : node.val * i + listNodeToInt(node.next, i * 10);

/**
 * @param {ListNode} node
 * @param {string} [s='']
 * @returns {string}
 */
const listNodeToString = (node, s = '') =>
  node ? `${listNodeToString(node.next, '')}${node.val}` : '';

/**
 * @param {string} n
 * @returns {ListNode}
 */
const stringToListNode = s => {
  if (!s.length) return null;
  const node = new ListNode(Number.parseInt(s.slice(-1)));
  node.next = stringToListNode(s.slice(0, -1));
  return node;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// console.log(JSON.stringify(intToListNode(123)));
// console.log(JSON.stringify(arrayToListNode([1, 2, 3])));
// console.log(JSON.stringify(stringToListNode('123')));

// deepStrictEqual(intToListNode(123), arrayToListNode([1, 2, 3]));

// console.log(JSON.stringify(intToListNode(102)));
// console.log(JSON.stringify(arrayToListNode([1, 0, 2])));

// deepStrictEqual(intToListNode(102), arrayToListNode([1, 0, 2]));

// console.log(listNodeToInt(intToListNode(123)));
// console.log(listNodeToString(arrayToListNode([1, 2, 3])));

// console.log(listNodeToInt(intToListNode(102)));
// console.log(listNodeToInt(arrayToListNode([1, 0, 2])));

// console.log(JSON.stringify(intToListNode(0)));
// console.log(listNodeToInt(intToListNode(0)));
// console.log(JSON.stringify(intToListNode(243)));
// console.log(JSON.stringify(intToListNode(564)));
// console.log(
//   JSON.stringify(
//     arrayToListNode([
//       1,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       1,
//     ]),
//   ),
// );

// console.log(
//   listNodeToString(
//     arrayToListNode([
//       1,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       0,
//       1,
//     ]),
//   ),
// );

// console.log(addTwoNumbers(intToListNode(342), intToListNode(465)));

// console.log(
//   listNodeToInt(addTwoNumbers(intToListNode(999), intToListNode(999))),
// );

// console.log(listNodeToInt(addTwoNumbers(intToListNode(10), intToListNode(10))));

// console.log(
//   listNodeToInt(addTwoNumbers(intToListNode(9001), intToListNode(9001))),
// );

// console.log(
//   listNodeToString(
//     addTwoNumbers(
//       arrayToListNode([
//         1,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         1,
//       ]),
//       arrayToListNode([4, 6, 5]),
//     ),
//   ),
// );

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(
  addTwoNumbers(intToListNode(342), intToListNode(465)),
  intToListNode(807),
);

deepStrictEqual(
  addTwoNumbers(stringToListNode('50'), stringToListNode('505')),
  stringToListNode('555'),
);

deepStrictEqual(
  addTwoNumbers(intToListNode(999), intToListNode(999)),
  intToListNode(1998),
);

deepStrictEqual(
  addTwoNumbers(intToListNode(0), intToListNode(0)),
  intToListNode(0),
);

deepStrictEqual(
  addTwoNumbers(intToListNode(243), intToListNode(564)),
  intToListNode(807),
);

deepStrictEqual(
  addTwoNumbers(
    arrayToListNode([
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
    ]),
    arrayToListNode([4, 6, 5]),
  ),
  arrayToListNode([
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    6,
    6,
  ]),
);
