<?php

// 905. Sort Array By Parity
// https://leetcode.com/problems/sort-array-by-parity/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 28 ms, faster than 50.00% of PHP online submissions
// for Sort Array By Parity.
// Memory Usage: 15.9 MB, less than 100.00% of PHP online submissions
// for Sort Array By Parity.

class Solution
{

    /**
     * @param Integer[] $A
     * @return Integer[]
     */
    function sortArrayByParity($A)
    {
        usort($A, function ($a, $b) {
            return ($a & 1) - ($b & 1);
        });
        return $A;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [3, 1, 2, 4],
        'expected' => [2, 4, 3, 1],
    ],

    [
        'input' => [2, 3, 1, 4],
        'expected' => [2, 4, 3, 1],
    ],

    [
        'input' => [0, 2, 4, 6],
        'expected' => [0, 2, 4, 6],
    ],

    [
        'input' => [1, 3, 5, 7],
        'expected' => [1, 3, 5, 7],
    ],

    [
        'input' => [1, 3, 2, 5, 7],
        'expected' => [2, 1, 3, 5, 7],
    ],

    [
        'input' => [1, 2, 3, 4, 5],
        'expected' => [2, 4, 1, 3, 5],
    ],

    [
        'input' => [
            4016,
            2240,
            402,
            1600,
            2540,
            4665,
            545,
            2756,
            3533,
            2737,
            4073,
            2701,
            4820,
            3016,
            2938,
            2225,
            2982,
            1924,
            2878,
            1451,
        ],
        'expected' => [
            4016,
            2240,
            402,
            1600,
            2540,
            2756,
            4820,
            3016,
            2938,
            2982,
            1924,
            2878,
            4665,
            545,
            3533,
            2737,
            4073,
            2701,
            2225,
            1451,
        ],
    ],
];

function areEvensFirst($a)
{
    $foundOdd = false;
    for ($i = 0; $i < count($a); $i++) {
        if ($a[$i] & 1) $foundOdd = true;
        else if ($foundOdd) return false;
    }
    return true;
}

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $result = $s->sortArrayByParity($input);
    // echo '<pre>', print_r($result, true), '</pre>';
    $name = json_encode($input);
    if (areEvensFirst($result)) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo '<i>Expected the Below</i><br>';
        echo '<pre>', print_r(expected, true), "</pre>";
        echo 'But got the Below<br>';
        echo '<pre>', print_r($result), "</pre>";
    }
    echo '<hr>';
}
