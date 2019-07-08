<?php

// 1009. Complement of Base 10 Integer
// https://leetcode.com/problems/complement-of-base-10-integer/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 75.00% of PHP online submissions
// for Complement of Base 10 Integer.
// Memory Usage: 14.8 MB, less than 100.00% of PHP online submissions
// for Complement of Base 10 Integer.

class Solution
{

    /**
     * @param Integer $N
     * @return Integer
     */
    function bitwiseComplement($N)
    {
        return bindec(implode('', array_map(function ($c) {
            return [1, 0][$c];
        }, str_split(decbin($N)))));
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => 5,
        'expected' => 2,
    ],
    // Explanation: 5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.

    [
        'input' => 7,
        'expected' => 0,
    ],
    // Explanation: 7 is "111" in binary, with complement "000" in binary, which is 0 in base-10.

    [
        'input' => 10,
        'expected' => 5,
    ],
    // Explanation: 10 is "1010" in binary, with complement "0101" in binary, which is 5 in base-10.
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->bitwiseComplement($input);
    if ($output === $expected) {
        echo ("✅ {$input}<br>");
    } else {
        echo "🔴 {$input}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$output}</b></i><br>";
    }
    echo '<hr>';
}
