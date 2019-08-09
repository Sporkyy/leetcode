<?php

// 1002. Find Common Characters
// https://leetcode.com/problems/find-common-characters/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 16 ms, faster than 76.92% of PHP online submissions
// for Find Common Characters.
// Memory Usage: 14.9 MB, less than 100.00% of PHP online submissions
// for Find Common Characters.

class Solution
{

    /**
     * @param String[] $A
     * @return String[]
     */
    function commonChars($A)
    {
        $cnts = array_fill(0, count($A), array_fill(97, 26, 0));
        for ($i = 0; $i < count($A); $i++)
            for ($j = 0; $j < strlen($A[$i]); $j++)
                $cnts[$i][ord($A[$i][$j])]++;
        $commonCnts = array_fill(97, 26, 0);
        for ($i = 97; $i < 123; $i++) {
            $instances = array_fill(0, count($cnts), 0);
            for ($j = 0; $j < count($cnts); $j++)
                $instances[$j] = $cnts[$j][$i];
            $commonCnts[$i] = min($instances);
        }
        $result = [];
        foreach ($commonCnts as $code => $cnt)
            while ($cnt--) $result[] = chr($code);
        return $result;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => ['bellr', 'label', 'roller'],
        'expected' => ['e', 'l', 'l'],
    ],

    [
        'input' => ['cool', 'lock', 'cook'],
        'expected' => ['c', 'o'],
    ],

    [
        'input' => [
            'bbddabab',
            'cbcddbdd',
            'bbcadcab',
            'dabcacad',
            'cddcacbc',
            'ccbdbcba',
            'cbddaccc',
            'accdcdbb',
        ],
        'expected' => ['b', 'd'],
    ]
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $result = $s->commonChars($input);
    echo '<pre>', print_r($result, true), '</pre>';
    $stringifiedExpected = json_encode($expected);
    $stringifiedResult = json_encode($result);
    $name = implode('<br>', $input);
    if (json_encode(sort($result)) === json_encode(sort($expected))) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "<i>Expected <b>{$stringifiedExpected}</b>, but got <b>{$stringifiedResult}</b> instead</i><br>";
    }
    echo '<hr>';
};
