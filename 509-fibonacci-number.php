<?php

// 509. Fibonacci Number
// https://leetcode.com/problems/fibonacci-number/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 240 ms, faster than 6.02% of PHP online submissions
// for Fibonacci Number.
// Memory Usage: 14.7 MB, less than 90.48% of PHP online submissions
// for Fibonacci Number.

class Solution
{

    /**
     * @param Integer $N
     * @return Integer
     */
    function fib($N)
    {
        return ($N <= 1 ? $N : $this->fib($N - 1) + $this->fib($N - 2));
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => 2,
        'expected' => 1,
    ],
    [
        'input' => 3,
        'expected' => 2,
    ],
    [
        'input' => 4,
        'expected' => 3,
    ],
    [
        'input' => 0,
        'expected' => 0,
    ],
    [
        'input' => 1,
        'expected' => 1,
    ]
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $result = $s->fib($input);
    if ($result === $expected) {
        echo "✅ {$input}<br>";
    } else {
        echo "🔴 {$input}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$result}</b></i><br>";
    }
    echo '<hr>';
}
