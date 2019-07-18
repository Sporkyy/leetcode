<?php

// 344. Reverse String
// https://leetcode.com/problems/reverse-string/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 56 ms, faster than 93.79% of PHP online submissions
// Memory Usage: 35.4 MB, less than 90.74% of PHP online submissions

class Solution
{

    /**
     * @param String[] $s
     * @return NULL
     */
    function reverseString(&$s)
    {
        $s = array_reverse($s);
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => ['h', 'e', 'l', 'l', 'o'],
        'expected' => ['o', 'l', 'l', 'e', 'h']
    ],

    [
        'input' => ['H', 'a', 'n', 'n', 'a', 'h'],
        'expected' => ['h', 'a', 'n', 'n', 'a', 'H'],
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $s->reverseString($input);
    $name = implode(', ', $input);
    if ($input === $expected) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo 'Expected the below<br>';
        echo '<pre>', print_r($expected, true), '</pre>';
        echo 'but got';
        echo '<pre>', print_r($input, true), '</pre>';
    }
    echo '<hr>';
}
