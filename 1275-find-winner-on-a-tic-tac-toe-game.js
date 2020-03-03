// 1275. Find Winner on a Tic Tac Toe Game
// https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/

/*

Tic-tac-toe is played by two players A and B on a 3 x 3 grid.

Here are the rules of Tic-Tac-Toe:

Players take turns placing characters into empty squares (" "). The first player
A always places "X" characters, while the second player B always places "O"
characters. "X" and "O" characters are always placed into empty squares, never
on filled ones. The game ends when there are 3 of the same (non-empty) character
filling any row, column, or diagonal. The game also ends if all squares are
non-empty. No more moves can be played if the game is over. Given an array moves
where each element is another array of size 2 corresponding to the row and
column of the grid where they mark their respective character in the order in
which A and B play.

Return the winner of the game if it exists (A or B), in case the game ends in a
draw return "Draw", if there are still movements to play return "Pending".

You can assume that moves is valid (It follows the rules of Tic-Tac-Toe), the
grid is initially empty and A will play first.

*/

import { strictEqual } from 'assert';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 76.38% of JavaScript online submissions
// Memory Usage: 34.1 MB, less than 100.00% of JavaScript online submissions

/**
 * @param {number[][]} moves
 * @return {string}
 */
const tictactoe = moves => {
  const board = new Array(3).fill().map(_ => new Array(3).fill(''));
  moves.forEach(([row, col], idx) => {
    board[row][col] = 0 === idx % 2 ? 'A' : 'B';
  });
  const runs = [
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
  ];
  for (const run of runs)
    if (/([AB])\1{2}/.test(run.map(([row, col]) => board[row][col]).join('')))
      return board[run[0][0]][run[0][1]];

  return 9 === moves.length ? 'Draw' : 'Pending';
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Example 1:
strictEqual(
  tictactoe([
    [0, 0],
    [2, 0],
    [1, 1],
    [2, 1],
    [2, 2],
  ]),
  'A',
);
// Explanation: "A" wins, he always plays first.
// "A  "    "A  "    "A  "    "A  "    "A  "
// "   " -> "   " -> " A " -> " A " -> " A "
// "   "    "B  "    "B  "    "BB "    "BBA"

// Example 2:
strictEqual(
  tictactoe([
    [0, 0],
    [1, 1],
    [0, 1],
    [0, 2],
    [1, 0],
    [2, 0],
  ]),
  'B',
);
// Explanation: "B" wins.
// "A  "    "A  "    "AA "    "AAB"    "AAB"    "AAB"
// "   " -> " B " -> " B " -> " B " -> "AB " -> "AB "
// "   "    "   "    "   "    "   "    "   "    "B  "

// Example 3:
strictEqual(
  tictactoe([
    [0, 0],
    [1, 1],
    [2, 0],
    [1, 0],
    [1, 2],
    [2, 1],
    [0, 1],
    [0, 2],
    [2, 2],
  ]),
  'Draw',
);
// Explanation: The game ends in a draw since there are no moves to make.
// "AAB"
// "BBA"
// "ABA"

// Example 4:
strictEqual(
  tictactoe([
    [0, 0],
    [1, 1],
  ]),
  'Pending',
);
// Explanation: The game has not finished yet.
// "A  "
// " B "
// "   "
