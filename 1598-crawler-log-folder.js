// 1598. Crawler Log Folder
// https://leetcode.com/problems/crawler-log-folder/

/*

The Leetcode file system keeps a log each time some user performs a change
folder operation.

The operations are described below:

- "../" : Move to the parent folder of the current folder. (If you are already
  in the main folder, remain in the same folder).
- "./" : Remain in the same folder.
- "x/" : Move to the child folder named x (This folder is guaranteed to always
  exist).

You are given a list of strings logs where logs[i] is the operation performed by
the user at the ith step.

The file system starts in the main folder, then the operations in logs are
performed.

Return the minimum number of operations needed to go back to the main folder
after the change folder operations.

## Constraints
- 1 <= `logs.length` <= 103
- 2 <= `logs[i].length` <= 10
- `logs[i]` contains lowercase English letters, digits, '.', and '/'.
- `logs[i]` follows the format described in the statement.
- Folder names consist of lowercase English letters and digits.

*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 38.9 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {string[]} logs
//  * @return {number}
//  */
// const minOperations = logs =>
//   Math.abs(
//     logs.reduce(
//       (acc, curr) =>
//         Math.min(0, acc + ('../' === curr ? 1 : './' === curr ? 0 : -1)),
//       0,
//     ),
//   );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {string[]} logs
//  * @return {number}
//  */
// const minOperations = (logs, depth = 0) =>
//   !logs.length
//     ? Math.abs(depth)
//     : minOperations(
//         logs,
//         Math.min(
//           0,
//           depth +
//             (op => ('../' === op ? 1 : './' === op ? 0 : -1))(logs.shift()),
//         ),
//       );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 80 ms, faster than 100.00% of JavaScript online submissions
// Memory Usage: 44.8 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {string[]} logs
 * @return {number}
 */
const minOperations = (logs, depth = 0) =>
  !logs.length
    ? Math.abs(depth)
    : minOperations(
        logs.slice(1),
        Math.min(
          0,
          depth + ('../' === logs[0] ? 1 : './' === logs[0] ? 0 : -1),
        ),
      );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

// Example 1:
strictEqual(minOperations(['d1/', 'd2/', '../', 'd21/', './']), 2);
// Explanation: Use this change folder operation "../" 2 times and go back to
// the main folder.

// Example 2:
strictEqual(minOperations(['d1/', 'd2/', './', 'd3/', '../', 'd31/']), 3);

// Example 3:
strictEqual(minOperations(['d1/', '../', '../', '../']), 0);
