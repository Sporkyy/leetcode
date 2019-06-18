<?php

// 1089. Duplicate Zeros
// https://leetcode.com/problems/duplicate-zeros/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 372 ms, faster than 50.00% of PHP online submissions
// for Duplicate Zeros.
// Memory Usage: 16.3 MB, less than 100.00% of PHP online submissions
// for Duplicate Zeros.

class Solution
{

    /**
     * @param Integer[] $arr
     * @return NULL
     */
    function duplicateZeros(&$arr)
    {
        for ($i = 0; $i < count($arr); $i++) {
            if (0 === $arr[$i]) {
                for ($j = count($arr) - 1; $i < $j; $j--) {
                    $arr[$j] = $arr[$j - 1];
                }
                $arr[$i++] = 0;
            }
        }
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [1, 0, 2, 3, 0, 4, 5, 0],
        'expected' => [1, 0, 0, 2, 3, 0, 0, 4],
    ],
    [
        'input' => [1, 2, 3],
        'expected' => [1, 2, 3],
    ],
    [
        'input' => [1, 0, 1],
        'expected' => [1, 0, 0],
    ],
    [
        'input' => [1, 0, 0],
        'expected' => [1, 0, 0],
    ],
    [
        'input' => [1, 0, 1, 2],
        'expected' => [1, 0, 0, 1],
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $s->duplicateZeros($input);
    if ($expected === $input) {
        echo '✅ ', implode(', ', $input), '<br>';
    } else {
        echo '🔴 ', implode(', ', $input), '<br>';
        echo '<i>Expected <b>', implode(', ', $expected), '</b> but got <b>', implode(', ', $input), '</b></i>';
    }
    echo '<hr>';
}
