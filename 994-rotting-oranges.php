<?php

// 994. Rotting Oranges
// https://leetcode.com/problems/rotting-oranges/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 16 ms, faster than 66.67% of PHP online submissions
// for Rotting Oranges.
// Memory Usage: 14.8 MB, less than 50.00% of PHP online submissions
// for Rotting Oranges.

class Solution
{

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function orangesRotting($grid, $minutes = 0)
    {
        while (false !== strpos(json_encode($grid), '1') && ++$minutes) {
            $copy = $grid;
            for ($i = 0; $i < count($copy); $i++) {
                for ($j = 0; $j < count($copy[$i]); $j++) {
                    if (2 !== $grid[$i][$j]) continue;
                    if (isset($grid[$i - 1]) && 1 === $grid[$i - 1][$j]) $copy[$i - 1][$j] = 2;
                    if (isset($grid[$i + 1]) && 1 === $grid[$i + 1][$j]) $copy[$i + 1][$j] = 2;
                    if (isset($grid[$i][$j - 1]) && 1 === $grid[$i][$j - 1]) $copy[$i][$j - 1] = 2;
                    if (isset($grid[$i][$j + 1]) && 1 === $grid[$i][$j + 1]) $copy[$i][$j + 1] = 2;
                }
            }
            if ($grid === $copy) break;
            $grid = $copy;
        }
        return false !== strpos(json_encode($grid), '1') ? -1 : $minutes;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [[2, 1, 1], [1, 1, 0], [0, 1, 1]],
        'expected' => 4,
    ],

    [
        'input' => [[2, 1, 1], [0, 1, 1], [1, 0, 1]],
        'expected' => -1,
    ],

    [
        'input' => [[0, 2]],
        'expected' => 0,
    ],

    [
        'input' => [[0]],
        'expected' => 0,
    ],

    [
        'input' => [[1], [2]],
        'expected' => 1,
    ],

    [
        'input' => [[0, 2, 2], [0, 1, 0]],
        'expected' => 1,
    ],

    [
        'input' => [[2, 2, 0, 2], [2, 1, 2, 2]],
        'expected' => 1,
    ],
];

$s = new Solution();

//   for ({ input, expected } of tests) {
foreach ($tests as $test) {
    extract($test);
    $output = $s->orangesRotting($input);
    $name = json_encode($input);
    if ($expected === $output) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$output}</b></i><br>";
    }
    echo '<hr>';
}
