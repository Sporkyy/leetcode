<?php

// 1078. Occurrences After Bigram
// https://leetcode.com/problems/occurrences-after-bigram/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 25.00% of PHP online submissions
// for Occurrences After Bigram.
// Memory Usage: 14.7 MB, less than 100.00% of PHP online submissions
// for Occurrences After Bigram.

class Solution
{

    /**
     * @param String $text
     * @param String $first
     * @param String $second
     * @return String[]
     */
    function findOcurrences($text, $first, $second)
    {
        $arr = explode(' ', $text);
        $occurrences = [];
        for ($i = 2; $i < count($arr); $i++) {
            if ($first === $arr[$i - 2] && $second === $arr[$i - 1]) {
                array_push($occurrences, $arr[$i]);
            }
        }
        return $occurrences;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [
            'text' => 'alice is a good girl she is a good student',
            'first' => 'a',
            'second' => 'good',
        ],
        'expected' => ['girl', 'student'],
    ],
    [
        'input' => [
            'text' => 'we will we will rock you',
            'first' => 'we',
            'second' => 'will',
        ],
        'expected' => ['we', 'rock'],
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    extract($input);
    $output = $s->findOcurrences($text, $first, $second);
    if ($expected === $output) {
        echo "✅ {$text}<br>";
    } else {
        echo "🔴 {$text}<br>";
        echo 'Expected the below';
        echo '<pre>', print_r($expected, true), '</pre>';
        echo 'But got the below instead';
        echo '<pre>', print_r($output, true), '</pre>';
    }
}
