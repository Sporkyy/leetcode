<?php

// 557. Reverse Words in a String III
// https://leetcode.com/problems/reverse-words-in-a-string-iii/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 16 ms, faster than 55.56% of PHP online submissions
// for Reverse Words in a String III.
// Memory Usage: 15.1 MB, less than 100.00% of PHP online submissions
// for Reverse Words in a String III.

class Solution
{

    /**
     * @param String $s
     * @return String
     */
    function reverseWords($s)
    {
        return implode(' ', array_map(function ($w) {
            return strrev($w);
        }, explode(' ', $s)));
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => "Let's take LeetCode contest",
        'expected' => "s'teL ekat edoCteeL tsetnoc",
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $result = $s->reverseWords($input);
    if ($expected === $result) {
        echo "✅ {$input}<br>";
    } else {
        echo "🔴 {$input}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$result}</b></i><br>";
    }
    echo '<hr>';
};
