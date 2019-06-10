<?php

// 12. Integer to Roman
// https://leetcode.com/problems/integer-to-roman/submissions/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 4 ms, faster than 98.84% of PHP online submissions
// for Integer to Roman.
// Memory Usage: 14.6 MB, less than 100.00% of PHP online submissions
// for Integer to Roman.

// class Solution
// {

//     /**
//      * @param Integer $num
//      * @return String
//      */
//     function intToRoman($num)
//     {
//         $dict = [
//             '0' => '',
//             '1' => 'I',
//             '2' => 'II',
//             '3' => 'III',
//             '4' => 'IV',
//             '5' => 'V',
//             '6' => 'VI',
//             '7' => 'VII',
//             '8' => 'VIII',
//             '9' => 'IX',
//             '10' => 'X',
//             '20' => 'XX',
//             '30' => 'XXX',
//             '40' => 'XL',
//             '50' => 'L',
//             '60' => 'LX',
//             '70' => 'LXX',
//             '80' => 'LXXX',
//             '90' => 'XC',
//             '100' => 'C',
//             '200' => 'CC',
//             '300' => 'CCC',
//             '400' => 'CD',
//             '500' => 'D',
//             '600' => 'DC',
//             '700' => 'DCC',
//             '800' => 'DCCC',
//             '900' => 'CM',
//             '1000' => 'M',
//             '2000' => 'MM',
//             '3000' => 'MMM',
//         ];
//         list($k, $num) = [intdiv($num, 1000) * 1000, $num % 1000];
//         list($h, $num) = [intdiv($num, 100) * 100, $num % 100];
//         list($da, $num) = [intdiv($num, 10) * 10, $num % 10];
//         return $dict[$k] . $dict[$h] . $dict[$da] . $dict[$num];
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 12 ms, faster than 96.51% of PHP online submissions
// for Integer to Roman.
// Memory Usage: 14.7 MB, less than 88.33% of PHP online submissions
// for Integer to Roman.

class Solution
{

    /**
     * @param Integer $num
     * @return String
     */
    function intToRoman($num)
    {
        $dict = [
            ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
            ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
            ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
            ['', 'M', 'MM', 'MMM'],
        ];
        return
            $dict[3][intdiv($num, 1000)] .
            $dict[2][intdiv(($num % 1000), 100)] .
            $dict[1][intdiv(($num % 100), 10)] .
            $dict[0][$num % 10];
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
