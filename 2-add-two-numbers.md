# JavaScript Recursive Solution

Problems involving objects like trees and lists require more preparation, so I'll go over that first.

I like to use [Visual Studio Code](https://code.visualstudio.com/) with the [Quokka](https://quokkajs.com/docs/index.html) plugin to work on these problems.

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

Solutions could be shorter if ListNode had a `next` parameter in addition to `val`, like I show below, but that's not how the class is defined in the problem.

```js
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
    return this;
  }
}
```

I find local testing useful, so a funciton to create ListNodes is helpful.

```js
const intToListNode = n => {
  if (!n) return null;
  const node = new ListNode(n % 10);
  node.next = intToListNode(Math.trunc(n / 10));
  return node;
};
```

Quokka uses the version of [Node.js](https://nodejs.org/) installed on your machine.

[Node.js assert module](https://nodejs.org/api/assert.html)

```js
import { deepStrictEqual } from 'assert';

deepStrictEqual(
  addTwoNumbers(intToListNode(342), intToListNode(465)),
  intToListNode(807),
);
```

342 + 465 = 807
