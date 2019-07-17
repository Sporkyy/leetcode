<?php

// 840. Magic Squares In Grid
// https://leetcode.com/problems/magic-squares-in-grid/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 100.00% of PHP online submissions
// for Magic Squares In Grid.
// Memory Usage: 14.8 MB, less than 100.00% of PHP online submissions
// for Magic Squares In Grid.

// class Solution
// {

//     /**
//      * @param Integer[][] $grid
//      * @return Integer
//      */
//     function numMagicSquaresInside($grid)
//     {
//         list($cols, $rows) = [count($grid[0]), count($grid)];
//         if ($cols < 3 || $rows < 3) return 0;
//         $result = 0;
//         for ($i = 0; $i < $rows; $i++) {
//             for ($j = 0; $j < $cols; $j++) {
//                 list($a0, $b0, $c0) = [
//                     $grid[($i + 1) % $rows][($j + 1) % $cols],
//                     $grid[($i + 1) % $rows][($j + 2) % $cols],
//                     $grid[($i + 1) % $rows][($j + 3) % $cols],
//                 ];
//                 if (15 !== $a0 + $b0 + $c0) continue;
//                 list($a1, $b1, $c1) = [
//                     $grid[($i + 2) % $rows][($j + 1) % $cols],
//                     $grid[($i + 2) % $rows][($j + 2) % $cols],
//                     $grid[($i + 2) % $rows][($j + 3) % $cols],
//                 ];
//                 if (15 !== $a1 + $b1 + $c1) continue;
//                 list($a2, $b2, $c2) = [
//                     $grid[($i + 3) % $rows][($j + 1) % $cols],
//                     $grid[($i + 3) % $rows][($j + 2) % $cols],
//                     $grid[($i + 3) % $rows][($j + 3) % $cols],
//                 ];
//                 if (15 !== $a2 + $b2 + $c2) continue;
//                 if (
//                     15 !== $a0 + $a1 + $a2 ||
//                     15 !== $b0 + $b1 + $b2 ||
//                     15 !== $c0 + $c1 + $c2 ||
//                     15 !== $a0 + $b1 + $c2 ||
//                     15 !== $c0 + $b1 + $a2
//                 )
//                     continue;
//                 if (1 !== ($a0 ^ $b0 ^ $c0 ^ $a1 ^ $b1 ^ $c1 ^ $a2 ^ $b2 ^ $c2)) continue;
//                 $result++;
//             }
//         }
//         return $result;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 100.00% of PHP online submissions
// for Magic Squares In Grid.
// Memory Usage: 14.8 MB, less than 100.00% of PHP online submissions
// for Magic Squares In Grid.

// class Solution
// {

//     /**
//      * @param Integer[][] $grid
//      * @return Integer
//      */
//     function numMagicSquaresInside($grid)
//     {
//         list($cols, $rows) = [count($grid[0]), count($grid)];
//         if ($cols < 3 || $rows < 3) return 0;
//         $result = 0;
//         for ($i = 0; $i < $rows; $i++) {
//             for ($j = 0; $j < $cols; $j++) {
//                 $s = $grid[($i + 1) % $rows][($j + 1) % $cols] .
//                     $grid[($i + 1) % $rows][($j + 2) % $cols] .
//                     $grid[($i + 1) % $rows][($j + 3) % $cols] .
//                     $grid[($i + 2) % $rows][($j + 1) % $cols] .
//                     $grid[($i + 2) % $rows][($j + 2) % $cols] .
//                     $grid[($i + 2) % $rows][($j + 3) % $cols] .
//                     $grid[($i + 3) % $rows][($j + 1) % $cols] .
//                     $grid[($i + 3) % $rows][($j + 2) % $cols] .
//                     $grid[($i + 3) % $rows][($j + 3) % $cols];
//                 if (
//                     $s === '294753618' ||
//                     $s === '672159834' ||
//                     $s === '816357492' ||
//                     $s === '438951276' ||
//                     $s === '276951438' ||
//                     $s === '492357816' ||
//                     $s === '834159672' ||
//                     $s === '618753294'
//                 ) $result++;
//             }
//         }
//         return $result;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 12 ms, faster than 100.00% of PHP online submissions
// for Magic Squares In Grid.
// Memory Usage: 14.8 MB, less than 100.00% of PHP online submissions
// for Magic Squares In Grid.

class Solution
{

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function numMagicSquaresInside($grid)
    {
        list($cols, $rows) = [count($grid[0]), count($grid)];
        if ($cols < 3 || $rows < 3) return 0;
        $result = 0;
        $window = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];
        for ($i = 0; $i < $rows - 2; $i++) {
            $window[0][0] = $window[1][0] = $window[2][0] = $i;
            $window[3][0] = $window[4][0] = $window[5][0] = $i + 1;
            $window[6][0] = $window[7][0] = $window[8][0] = $i + 2;
            for ($j = 0; $j < $cols - 2; $j++) {
                $window[0][1] = $window[3][1] = $window[6][1] = $j;
                $window[1][1] = $window[4][1] = $window[7][1] = $j + 1;
                $window[2][1] = $window[5][1] = $window[8][1] = $j + 2;
                if (5 !== $grid[$window[4][0]][$window[4][1]]) continue;
                $perimiter =
                    $grid[$window[0][0]][$window[0][1]] .
                    $grid[$window[1][0]][$window[1][1]] .
                    $grid[$window[2][0]][$window[2][1]] .
                    $grid[$window[3][0]][$window[3][1]] .
                    $grid[$window[5][0]][$window[5][1]] .
                    $grid[$window[6][0]][$window[6][1]] .
                    $grid[$window[7][0]][$window[7][1]] .
                    $grid[$window[8][0]][$window[8][1]];
                if (
                    $perimiter === '29473618' ||
                    $perimiter === '67219834' ||
                    $perimiter === '81637492' ||
                    $perimiter === '43891276' ||
                    $perimiter === '27691438' ||
                    $perimiter === '49237816' ||
                    $perimiter === '83419672' ||
                    $perimiter === '61873294'
                )
                    $result++;
            }
        }
        return $result;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [[4, 3, 8, 4], [9, 5, 1, 9], [2, 7, 6, 2]],
        'expected' => 1,
    ],

    [
        'input' => [[8]],
        'expected' => 0,
    ],

    [
        'input' => [[5, 5, 5], [5, 5, 5], [5, 5, 5]],
        'expected' => 0,
    ],

    [
        'input' => [[10, 3, 5], [1, 6, 11], [7, 9, 2]],
        'expected' => 0,
    ],

    [
        'input' => [[7, 0, 5], [2, 4, 6], [3, 8, 1]],
        'expected' => 0,
    ],

    [
        'input' => [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        'expected' => 1,
    ],

    [
        'input' => [[4, 7, 8], [9, 5, 1], [2, 3, 6]],
        'expected' => 0,
    ],

    [
        'input' => [[9, 5, 6], [2, 8, 7], [1, 4, 3]],
        'expected' => 0,
    ],

    [
        'input' => [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        'expected' => 1,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->numMagicSquaresInside($input);
    $name = json_encode($input);
    if ($output === $expected) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$output}</b></i><br>";
    }
    echo '<hr>';
}

// 2 9 4
// 7 5 3
// 6 1 8
// 294753618

// 6 7 2
// 1 5 9
// 8 3 4
// 672159834

// 8 1 6
// 3 5 7
// 4 9 2
// 816357492

// 4 3 8
// 9 5 1
// 2 7 6
// 438951276

// =-=-=-=-=-=-=-=-=

// 2 7 6
// 9 5 1
// 4 3 8
// 276951438

// 4 9 2
// 3 5 7
// 8 1 6
// 492357816

// 8 3 4
// 1 5 9
// 6 7 2
// 834159672

// 6 1 8
// 7 5 3
// 2 9 4
// 618753294
