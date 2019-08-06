<?php

// 1137. N-th Tribonacci Number
// https://leetcode.com/problems/n-th-tribonacci-number/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 0 ms, faster than 100.00% of PHP online submissions
// for N-th Tribonacci Number.
// Memory Usage: 14.7 MB, less than 100.00% of PHP online submissions
// for N-th Tribonacci Number.

// class Solution
// {

//     /**
//      * @param Integer $n
//      * @return Integer
//      */
//     function tribonacci($n)
//     {
//         list($x, $y, $z) = [0, 1, 1];
//         if ($n < 3) return [$x, $y, $z][$n];
//         for ($i = 3; $i < $n; $i++) list($x, $y, $z) = [$y, $z, $x + $y + $z];
//         return $x + $y + $z;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 50.00% of PHP online submissions
// for N-th Tribonacci Number.
// Memory Usage: 14.6 MB, less than 100.00% of PHP online submissions
// for N-th Tribonacci Number.

class Solution
{

    /**
     * @param Integer $n
     * @return Integer
     */
    function tribonacci($n)
    {
        $a = [0, 1, 1];
        for ($i = 3; $i <= $n; $i++) $a[$i] = $a[$i - 3] + $a[$i - 2] + $a[$i - 1];
        return $a[$n];
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// t0 = 0 + 1 + 1 = 0
// t1 = 0 + 1 + 1 = 1
// t2 = 0 + 1 + 1 = 1
// t3 = 0 + 1 + 1 = 2
// t4 = 1 + 1 + 2 = 4
// t5 = 1 + 2 + 4 = 7
// t6 = 2 + 4 + 7 = 13

$tests = [
    [
        'input' => 0,
        'expected' => 0,
    ],

    [
        'input' => 1,
        'expected' => 1,
    ],

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
        'expected' => 4,
    ],

    [
        'input' => 5,
        'expected' => 7,
    ],

    [
        'input' => 6,
        'expected' => 13,
    ],

    [
        'input' => 25,
        'expected' => 1389537,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $result = $s->tribonacci($input);
    if ($expected === $result) {
        echo "✅ {$input}<br>";
    } else {
        echo "🔴 {$input}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$result}</b></i><br>";
    }
    echo '<hr>';
}
