<?php

// 12. Integer to Roman
// https://leetcode.com/problems/integer-to-roman/submissions/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 12 ms, faster than 96.51% of PHP online submissions
// for Integer to Roman.
// Memory Usage: 14.8 MB, less than 71.67% of PHP online submissions
// for Integer to Roman.

class Solution
{

    /**
     * @param Integer $num
     * @return String
     */
    function intToRoman($num)
    {
        $d = [
            '3000' => 'MMM',
            '2000' => 'MM',
            '1000' => 'M',
            '900' => 'CM',
            '800' => 'DCCC',
            '700' => 'DCC',
            '600' => 'DC',
            '500' => 'D',
            '400' => 'CD',
            '300' => 'CCC',
            '200' => 'CC',
            '100' => 'C',
            '90' => 'XC',
            '80' => 'LXXX',
            '70' => 'LXX',
            '60' => 'LX',
            '50' => 'L',
            '40' => 'XL',
            '30' => 'XXX',
            '20' => 'XX',
            '10' => 'X',
            '9' => 'IX',
            '8' => 'VIII',
            '7' => 'VII',
            '6' => 'VI',
            '5' => 'V',
            '4' => 'IV',
            '3' => 'III',
            '2' => 'II',
            '1' => 'I',
            '0' => '',
        ];
        list($k, $num) = [intdiv($num, 1000) * 1000, $num % 1000];
        list($h, $num) = [intdiv($num, 100) * 100, $num % 100];
        list($da, $num) = [intdiv($num, 10) * 10, $num % 10];
        return $d[$k] . $d[$h] . $d[$da] . $d[$num];
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => 3,
        'expected' => 'III',
    ],
    [
        'input' => 4,
        'expected' => 'IV',
    ],
    [
        'input' => 9,
        'expected' => 'IX',
    ],
    [
        'input' => 58,
        'expected' => 'LVIII',
        // Explanation: L = 50, V = 5, III = 3.
    ],
    [
        'input' => 1994,
        'expected' => 'MCMXCIV',
        // Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
    ],
    [
        'input' => 10,
        'expected' => 'X',
    ],
    [
        'input' => 1986,
        'expected' => 'MCMLXXXVI',
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->intToRoman($input);
    if ($expected === $output) {
        echo "✅ {$input}<br>";
    } else {
        echo "🔴 {$input}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$output}</b></i><br>";
    }
}
