# JavaScript Recursive Solution

Solving problems that are based on objects like trees and lists requires more preparation, so I'll go over that first.

I develop solutions locally using [Visual Studio Code](https://code.visualstudio.com/) with the [Quokka plugin](https://quokkajs.com/docs/index.html). (Plus a bunch of other plugins.)

## Define the Class

Locally, I rewrote the ListNode function delaration as a modern class declartion.

```js
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    return this;
  }
}
```

## Create List Nodes

I find local testing useful, so a function to quickly create ListNodes is helpful.

We can create ListNodes from integers; that makes sense.

```js
const intToListNode = n => {
  if (!n) return null;
  const node = new ListNode(n % 10);
  node.next = intToListNode(Math.trunc(n / 10));
  return node;
};
```

But it won't work with really big numbers. So, instead, we can use arrays of digits.

```js
const arrayToListNode = a => {
  if (!a.length) return null;
  const node = new ListNode(a.pop());
  node.next = arrayToListNode(a);
  return node;
};
```

Another option we could use is strings.

```js
const stringToListNode = s => {
  if (!s.length) return null;
  const node = new ListNode(Number.parseInt(s.slice(-1)));
  node.next = stringToListNode(s.slice(0, -1));
  return node;
};
```

## Write Tests

Quokka uses the version of [Node.js](https://nodejs.org/) installed on our machine. Node.js has an [assert module](https://nodejs.org/api/assert.html) we can use for quick and easy local testing.

We can now easily turn the problem in the description, `342 + 465 = 807`, into a test that works with Node.js.

```js
import { deepStrictEqual } from 'assert';

deepStrictEqual(
  addTwoNumbers(intToListNode(342), intToListNode(465)),
  intToListNode(807),
);
```

## Code the Solution

And then, finally, we can code the solution to the problem.

```js
const addTwoNumbers = (l1, l2, carry = 0) => {
  // 1. When there are no nodes and nothing to carry, terminate the list
  if (!l1 && !l2 && !carry) return null;
  // 2. Sum what's carried and the node values (whatever is missing is zero)
  const sum = carry + (l1 && l1.val) + (l2 && l2.val);
  // 3. Make a new list node with the value of the last digit of sum
  const node = new ListNode(sum % 10);
  // 4. Recurse with the next nodes, carrying the other digits of the sum
  node.next = addTwoNumbers(l1 && l1.next, l2 && l2.next, Math.trunc(sum / 10));
  return node;
};
```

That's not just how to solve the problem, it's _how to solve_ how to solve the problem. Because that's something I've been working on a well. This is the best way I've been able to come up with so far.
