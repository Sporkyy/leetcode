<?php

// 766. Toeplitz Matrix
// https://leetcode.com/problems/toeplitz-matrix/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 28 ms, faster than 85.71% of PHP online submissions
// for Toeplitz Matrix.
// Memory Usage: 15 MB, less than 100.00% of PHP online submissions
// for Toeplitz Matrix.

class Solution
{

    /**
     * @param Integer[][] $matrix
     * @return Boolean
     */
    function isToeplitzMatrix($matrix)
    {
        for ($i = 0; $i < count($matrix) - 1; $i++)
            for ($j = 0; $j < count($matrix[0]) - 1; $j++)
                if ($matrix[$i][$j] !== $matrix[$i + 1][$j + 1]) return false;
        return true;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [

    // 1 2 3 4
    // 5 1 2 3
    // 9 5 1 2

    [
        'input' => [[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]],
        'expected' => true,
    ],

    // 1 2
    // 2 2

    [
        'input' => [[1, 2], [2, 2]],
        'expected' => false,
    ],

    // 1 2 3
    // 2 1 5
    // 5 7 1
    // 3 6 9

    [
        'input' => [[1, 2, 3], [2, 1, 5], [5, 7, 1], [3, 6, 9]],
        'expected' => false,
    ],

    // 11 74  0 93
    // 40 11 74  7

    [
        'input' => [[11, 74, 0, 93], [40, 11, 74, 7]],
        'expected' => false,
    ],

    // 1 2 3 4
    // 9 1 2 3
    // 9 9 1 2
    // 9 9 9 1

    [
        'input' => [[1, 2, 3, 4], [9, 1, 2, 3], [9, 9, 1, 2], [9, 9, 9, 1]],
        'expected' => true,
    ],

    // 36 59 71 15 26 82 87
    // 56 36 59 71 15 26 82
    // 15  0 36 59 71 15 26

    [
        'input' => [
            [36, 59, 71, 15, 26, 82, 87],
            [56, 36, 59, 71, 15, 26, 82],
            [15, 0, 36, 59, 71, 15, 26],
        ],
        'expected' => false,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->isToeplitzMatrix($input);
    $name = json_encode($input);
    if ($output === $expected) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$output}</b></i><br>";
    }
    echo '<hr>';
};
