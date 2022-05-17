// 2266. Count Number of Texts
// https://leetcode.com/problems/count-number-of-texts/

/*

Alice is texting Bob using her phone. The **mapping** of digits to letters is
shown in the figure below.

+--------+-------+--------+
| 1      | 2 abc | 3 def  |
+--------+-------+--------+
| 4 ghi  | 5 jkl | 6 mno  |
+--------+-------+--------+
| 7 pqrs | 8 tuv | 9 wxyz |
+--------+-------+--------+
| *      | 0     | #      |
+--------+-------+--------+

In order to **add** a letter, Alice has to **press** the key of the
corresponding digit `i` times, where `i` is the position of the letter in the
key.

- For example, to add the letter `'s'`, Alice has to press `'7'` four times.
  Similarly, to add the letter `'k'`, Alice has to press `'5'` twice.
- Note that the digits `'0'` and `'1'` do not map to any letters, so Alice
  **does not** use them.

However, due to an error in transmission, Bob did not receive Alice's text
message but received a **string of pressed** keys instead.

- For example, when Alice sent the message `"bob"`, Bob received the string
  `"2266622"`.

Given a string `pressedKeys` representing the string received by Bob, return
the **total number of possible text messages** Alice could have sent.

Since the answer may be very large, return it modulo `10**9 + 7`.

## Constraints
- 1 <= pressedKeys.length <= 105
- pressedKeys only consists of digits from '2' - '9'.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

/**
 * @param {string} pressedKeys
 * @return {number}
 */
const countTexts = pressedKeys => {
  const MOD = 1e9 + 7; // ?
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  // 3 Keys (2, 3, 4, 5, 6, 8)
  // 1 press = 1 letter
  // 2 presses = 2 first letter, 1 second letter
  // 3 presses
  //  - 3 first letters
  //  - 1 first letter + 2 second letters
  //  - 1 third letter
  // 4 Keys (7, 9)

  // 1 : (1)
  // 2 : (2) + (1) = 3
  // 3 : (3) + (1 + 1) + (1) = 7
  // 4 : 4 + 2 + 2

  /*

  1 | a
  2 | aa, b
  3 | aaa, ab, ba, c

  1 | p
  2 | pp, q
  3 | ppp, pq, qp, r
  4 | pppp, ppqq, pqqp, qqpp,

*/

  const dfs = (pressedKeys, current = []) => {
    if (pressedKeys.length === 0) {
      return 1;
    }
  };
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(countTexts('22233'), 8);
// Input: pressedKeys = "22233"
// Output: 8
// Explanation:
// The possible text messages Alice could have sent are:
// "aaadd", "abdd", "badd", "cdd", "aaae", "abe", "bae", and "ce".
// Since there are 8 possible messages, we return 8.

// Example 2:
strictEqual(countTexts('222222222222222222222222222222222222'), 82876089);
// Input: pressedKeys = "222222222222222222222222222222222222"
// Output: 82876089
// Explanation:
// There are 2082876103 possible text messages Alice could have sent.
// Since we need to return the answer modulo 109 + 7, we return
// 2082876103 % (109 + 7) = 82876089.
