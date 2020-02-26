<?php

// 476. Number Complement
// https://leetcode.com/problems/number-complement/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 0 ms, faster than 100.00% of PHP online submissions
// Memory Usage: 14.7 MB, less than 100.00% of PHP online submissions

class Solution
{

    /**
     * @param Integer $num
     * @return Integer
     */
    function findComplement($num)
    {
        $bin = decbin($num);
        for ($i = 0; $i < strlen($bin); $i++) $bin[$i] = '0' === $bin[$i] ? 1 : 0;
        return bindec($bin);
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => 5,
        'expected' => 2,
    ],
    [
        'input' => 1,
        'expected' => 0,
    ],
    [
        'input' => 2,
        'expected' => 1,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $result = $s->findComplement($input);
    if ($result === $expected) {
        echo "✅ {$input}";
    } else {
        echo "🔴 {$input}";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$result}</b></i>";
    }
    echo '<hr>';
}
