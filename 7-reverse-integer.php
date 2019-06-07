<?php

// 7. Reverse Integer
// https://leetcode.com/problems/reverse-integer/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 0 ms, faster than 100.00% of PHP online submissions
// for Reverse Integer.
// Memory Usage: 14.9 MB, less than 20.64% of PHP online submissions
// for Reverse Integer.

class Solution
{

    function is32BitInteger($x)
    {
        return pow(-2, 31) <= $x && $x <= pow(2, 31) - 1;
    }

    /**
     * @param Integer $x
     * @return Integer
     */
    function reverse($x)
    {
        if (!$this->is32BitInteger($x)) {
            return 0;
        } else {
            $rx = ($x <=> 0) * strrev(abs($x));
            return $this->is32BitInteger($rx) ? $rx : 0;
        }
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => 123,
        'expected' => 321,
    ],
    [
        'input' => -123,
        'expected' => -321,
    ],
    [
        'input' => 120,
        'expected' => 21,
    ],
    [
        'input' => 1534236469,
        'expected' => 0,
    ]
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->reverse($input);
    if ($output === $expected) {
        echo "✅ {$input}";
    } else {
        echo "🔴 {$input}<br>";
        echo "Expected \"{$expected}\", but got \"{$output}\"<br>";
    }
    echo '<hr>';
};
