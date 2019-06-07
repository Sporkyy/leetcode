<?php

// 13. Roman to Integer
// https://leetcode.com/problems/roman-to-integer/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 12 ms, faster than 95.54% of PHP online submissions
// for Roman to Integer.
// Memory Usage: 14.8 MB, less than 52.87% of PHP online submissions
// for Roman to Integer.

// class Solution
// {

//     /**
//      * @param String $s
//      * @return Integer
//      */
//     function romanToInt($s)
//     {
//         $sum = 0;
//         $dict = [
//             'I' => 1,
//             'IV' => 4,
//             'V' => 5,
//             'IX' => 9,
//             'X' => 10,
//             'XL' => 40,
//             'L' => 50,
//             'XC' => 90,
//             'C' => 100,
//             'CD' => 400,
//             'D' => 500,
//             'CM' => 900,
//             'M' => 1000,
//         ];
//         for ($i = strlen($s) - 1; 0 <= $i; $i--) {
//             list($c, $n) = [$s[$i], $s[$i - 1] . $s[$i]];
//             if (0 < $i && isset($dict[$n])) {
//                 $sum += $dict[$n];
//                 $i--;
//                 continue;
//             }
//             $sum += $dict[$c];
//         }
//         return $sum;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 24 ms, faster than 80.67% of PHP online submissions
// for Roman to Integer.
// Memory Usage: 14.8 MB, less than 70.69% of PHP online submissions
// for Roman to Integer.

// class Solution
// {

//     /**
//      * @param String $s
//      * @return Integer
//      */
//     function romanToInt($s)
//     {
//         foreach ([
//             'IV' => 4,
//             'IX' => 9,
//             'XL' => 40,
//             'XC' => 90,
//             'CD' => 400,
//             'CM' => 900,
//             'I' => 1,
//             'V' => 5,
//             'X' => 10,
//             'L' => 50,
//             'C' => 100,
//             'D' => 500,
//             'M' => 1000,
//         ] as $r => $a) $s = str_replace($r, "$a,", $s);
//         return array_sum(explode(',', $s));
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 40 ms, faster than 33.83% of PHP online submissions
// for Roman to Integer.
// Memory Usage: 14.8 MB, less than 72.99% of PHP online submissions
// for Roman to Integer.

class Solution
{

    /**
     * @param String $s
     * @return Integer
     */
    function romanToInt($s)
    {
        foreach ([
            'IV' => 4,
            'IX' => 9,
            'XL' => 40,
            'XC' => 90,
            'CD' => 400,
            'CM' => 900,
            'I' => 1,
            'V' => 5,
            'X' => 10,
            'L' => 50,
            'C' => 100,
            'D' => 500,
            'M' => 1000,
        ] as $r => $a) $s = str_replace($r, "{$a}+", $s);
        return eval("return {$s}0;");
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => 'III',
        'expected' => 3,
    ],
    [
        'input' => 'IV',
        'expected' => 4,
    ],
    [
        'input' => 'IX',
        'expected' => 9,
    ],
    [
        'input' => 'LVIII',
        'expected' => 58,
    ],
    [
        'input' => 'MCMXCIV',
        'expected' => 1994,
    ],
    [
        'input' => 'MCDLXXVI',
        'expected' => 1476,
    ],
    [
        'input' => 'MMMCDXC',
        'expected' => 3490,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->romanToInt($input);
    if ($expected === $output) {
        echo "✅ {$input}<br>";
    } else {
        echo "🔴 {$input}";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$output}</b></i>";
    }
    echo '<hr>';
}
