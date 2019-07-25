<?php

// 561. Array Partition I
// https://leetcode.com/problems/array-partition-i/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 144 ms, faster than 9.09% of PHP online submissions
// for Array Partition I.
// Memory Usage: 17.9 MB, less than 50.00% of PHP online submissions
// for Array Partition I.

class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function arrayPairSum($nums)
    {
        sort($nums, SORT_NUMERIC);
        $sum = 0;
        for ($i = 0; $i < count($nums); $i += 2) $sum += $nums[$i];
        return $sum;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [1, 4, 3, 2],
        'expected' => 4
    ],

    [
        'input' => [2, 1],
        'expected' => 1
    ],

    [
        'input' => [2, 2, 6, 6, 8, 8],
        'expected' => 16
    ],

    [
        'input' => [1, 1, 1, 1, 1, 1],
        'expected' => 3
    ],

    [
        'input' => [-1, -4, -3, -2],
        'expected' => -6
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->arrayPairSum($input);
    $name = json_encode($input);
    if ($output === $expected) {
        echo "✅ {$name} = {$output}";
    } else {
        echo "🔴 {$name}";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$output}</b></i>";
    }
    echo '<hr>';
}
