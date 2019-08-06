<?php

// 852. Peak Index in a Mountain Array
// https://leetcode.com/problems/peak-index-in-a-mountain-array/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 28 ms, faster than 46.67% of PHP online submissions
// for Peak Index in a Mountain Array.
// Memory Usage: 16.3 MB, less than 100.00% of PHP online submissions
// for Peak Index in a Mountain Array.

class Solution
{

    /**
     * @param Integer[] $A
     * @return Integer
     */
    function peakIndexInMountainArray($A)
    {
        $indexOfMax = 0;
        for ($i = 1; $i < count($A); $i++) {
            if ($A[$indexOfMax] < $A[$i]) $indexOfMax = $i;
        }
        return $indexOfMax;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [0, 1, 0],
        'expected' => 1,
    ],
    [
        'input' => [0, 2, 1, 0],
        'expected' => 1,
    ],
    [
        'input' => [0, 1, 2, 0],
        'expected' => 2,
    ],
    [
        'input' => [3, 1, 2, 0],
        'expected' => 0,
    ],
    [
        'input' => [1, 2, 0, 3],
        'expected' => 3,
    ],
    [
        'input' => [999],
        'expected' => 0,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $result = $s->peakIndexInMountainArray($input);
    $name = json_encode($input);
    if ($expected === $result) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$result}</b></i><br>";
    }
};
