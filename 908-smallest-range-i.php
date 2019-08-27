<?php

// 908. Smallest Range I
// https://leetcode.com/problems/smallest-range-i/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// class Solution
// {

//     /**
//      * @param Integer[] $A
//      * @param Integer $K
//      * @return Integer
//      */
//     function smallestRangeI($A, $K)
//     { }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 32 ms, faster than 100.00% of PHP online submissions
// for Smallest Range I.
// Memory Usage: 16.3 MB, less than 100.00% of PHP online submissions
// for Smallest Range I.

class Solution
{

    /**
     * @param Integer[] $A
     * @param Integer $K
     * @return Integer
     */
    function smallestRangeI($A, $K)
    {
        return max(max($A) - $K - (min($A) + $K), 0);
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [
            'A' => [1],
            'K' => 0,
        ],
        'expected' => 0,
    ],
    [
        'input' => [
            'A' => [0, 10],
            'K' => 2,
        ],
        'expected' => 6,
    ],
    [
        'input' => [
            'A' => [1, 3, 6],
            'K' => 3,
        ],
        'expected' => 0,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    extract($input);
    $stringifiedA = json_encode($A);
    $name = "A: {$stringifiedA}, K: {$K}";
    $result = $s->smallestRangeI($A, $K);
    if ($expected === $result) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$result}</b></i><br>";
    }
    echo '<hr>';
}
