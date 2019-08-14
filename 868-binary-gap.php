<?php

// 868. Binary Gap
// https://leetcode.com/problems/binary-gap/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 4 ms, faster than 66.67% of PHP online submissions
// for Binary Gap.
// Memory Usage: 14.9 MB, less than 100.00% of PHP online submissions
// for Binary Gap.

class Solution
{

    /**
     * @param Integer $N
     * @return Integer
     */
    function binaryGap($N)
    {
        $maxGap = 0;
        $bin = decbin($N);
        for ($p1 = 0, $p2 = 1; $p2 < strlen($bin); $p2++) {
            if ('1' === $bin[$p2]) {
                if ($maxGap < $p2 - $p1) $maxGap = $p2 - $p1;
                $p1 = $p2;
            }
        }
        return $maxGap;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => 0,
        'expected' => 0,
    ],

    [
        'input' => 5,
        'expected' => 2,
    ],

    [
        'input' => 6,
        'expected' => 1,
    ],

    [
        'input' => 8,
        'expected' => 0,
    ],

    [
        'input' => 13,
        'expected' => 2,
    ],

    [
        'input' => 22,
        'expected' => 2,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $result = $s->binaryGap($input);
    if ($result === $expected) {
        echo "✅ {$input}<br>";
    } else {
        echo "🔴 {$input}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$result}</b></i><br>";
    }
    echo '<hr>';
}
