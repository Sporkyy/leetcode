<?php

// 709. To Lower Case
// https://leetcode.com/problems/to-lower-case/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 4 ms, faster than 87.25% of PHP online submissions
// for To Lower Case.
// Memory Usage: 14.7 MB, less than 100.00% of PHP online submissions
// for To Lower Case.

class Solution
{

    /**
     * @param String $str
     * @return String
     */
    function toLowerCase($str)
    {
        return strtolower($str);
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => 'Hello',
        'expected' => 'hello',
    ],

    [
        'input' => 'here',
        'expected' => 'here',
    ],

    [
        'input' => 'LOVELY',
        'expected' => 'lovely',
    ],

    [
        'input' => '',
        'expected' => '',
    ],

    [
        'input' => 'a',
        'expected' => 'a',
    ],

    [
        'input' => 'A',
        'expected' => 'a',
    ],

    [
        'input' => '1',
        'expected' => '1',
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->toLowerCase($input);
    if ($output === $expected) {
        echo "✅ {$input}<br>";
    } else {
        echo "🔴 {$input}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$output}</b></i><br>";
    }
    echo '<hr>';
};
