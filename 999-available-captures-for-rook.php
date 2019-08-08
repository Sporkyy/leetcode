<?php

// 999. Available Captures for Rook
// https://leetcode.com/problems/available-captures-for-rook/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 50.00% of PHP online submissions
// for Available Captures for Rook.
// Memory Usage: 14.9 MB, less than 100.00% of PHP online submissions
// for Available Captures for Rook.

// class Solution
// {

//     /**
//      * @param String[][] $board
//      * @return Integer
//      */
//     function numRookCaptures($board)
//     {
//         for ($r = 0; $r < 8; $r++)
//             for ($c = 0; $c < 8; $c++)
//                 if ('R' === $board[$r][$c]) {
//                     list($rookRow, $rookCol) = [$r, $c];
//                     break 2;
//                 }

//         $result = 0;

//         for ($r = $rookRow - 1; 0 <= $r; $r--)
//             if ('.' !== $board[$r][$rookCol]) {
//                 $above = $board[$r][$rookCol];
//                 break;
//             }
//         if (isset($above) && 'p' === $above) $result++;

//         for ($c = $rookCol + 1; $c < 8; $c++)
//             if ('.' !== $board[$rookRow][$c]) {
//                 $right = $board[$rookRow][$c];
//                 break;
//             }
//         if (isset($right) && 'p' === $right) $result++;

//         for ($r = $rookRow + 1; $r < 8; $r++)
//             if ('.' !== $board[$r][$rookCol]) {
//                 $below = $board[$r][$rookCol];
//                 break;
//             }
//         if (isset($below) && 'p' === $below) $result++;

//         for ($c = $rookCol - 1; 0 <= $c; $c--)
//             if ('.' !== $board[$rookRow][$c]) {
//                 $left = $board[$rookRow][$c];
//                 break;
//             }
//         if (isset($left) && 'p' === $left) $result++;

//         return $result;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 50.00% of PHP online submissions
// for Available Captures for Rook.
// Memory Usage: 14.8 MB, less than 100.00% of PHP online submissions
// for Available Captures for Rook.

class Solution
{

    /**
     * @param String[][] $board
     * @return Integer
     */
    function numRookCaptures($board)
    {
        for ($r = 0; $r < 8; $r++)
            for ($c = 0; $c < 8; $c++)
                if ('R' === $board[$r][$c]) {
                    list($rookRow, $rookCol) = [$r, $c];
                    break 2;
                }

        $result = 0;

        for ($r = $rookRow - 1; 0 <= $r; $r--)
            switch ($board[$r][$rookCol]) {
                case '.':
                    continue 2;
                case 'p':
                    $result++;
                default:
                    break 2;
            }

        for ($c = $rookCol + 1; $c < 8; $c++)
            switch ($board[$rookRow][$c]) {
                case '.':
                    continue 2;
                case 'p':
                    $result++;
                default:
                    break 2;
            }

        for ($r = $rookRow + 1; $r < 8; $r++)
            switch ($board[$r][$rookCol]) {
                case '.':
                    continue 2;
                case 'p':
                    $result++;
                default:
                    break 2;
            }

        for ($c = $rookCol - 1; 0 <= $c; $c--)
            switch ($board[$rookRow][$c]) {
                case '.':
                    continue 2;
                case 'p':
                    $result++;
                default:
                    break 2;
            }

        return $result;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', 'p', '.', '.', '.', '.'],
            ['.', '.', '.', 'R', '.', '.', '.', 'p'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', 'p', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
        ],
        'expected' => 3,
    ],
    [
        'input' => [
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
            ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
            ['.', 'p', 'B', 'R', 'B', 'p', '.', '.'],
            ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
            ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
        ],
        'expected' => 0,
    ],
    [
        'input' => [
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', 'p', '.', '.', '.', '.'],
            ['.', '.', '.', 'p', '.', '.', '.', '.'],
            ['p', 'p', '.', 'R', '.', 'p', 'B', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', 'B', '.', '.', '.', '.'],
            ['.', '.', '.', 'p', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.'],
        ],
        'expected' => 3,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $result = $s->numRookCaptures($input);
    $name = '<pre>' . implode("\n", array_map(function ($row) {
        return implode('', $row);
    }, $input)) . '</pre>';
    if ($expected === $result) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "Got {$result} but expected {$expected}<br>";
    }
    echo '<hr>';
}
