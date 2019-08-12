<?php

// 1018. Binary Prefix Divisible By 5
// https://leetcode.com/problems/binary-prefix-divisible-by-5/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 40 ms, faster than 100.00% of PHP online submissions
// for Binary Prefix Divisible By 5.
// Memory Usage: 18.9 MB, less than 100.00% of PHP online submissions
// for Binary Prefix Divisible By 5.

// class Solution
// {

//     /**
//      * @param Integer[] $A
//      * @return Boolean[]
//      */
//     function prefixesDivBy5($A)
//     {
//         $result = [];
//         for ($i = 0, $s = ''; $i < count($A); $i++) {
//             $s .= $A[$i];
//             if (0 === bindec($s) % 5) {
//                 array_push($result, true);
//                 $s = '';
//             } else {
//                 array_push($result, false);
//             }
//         }
//         return $result;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 32 ms, faster than 100.00% of PHP online submissions
// for Binary Prefix Divisible By 5.
// Memory Usage: 18.6 MB, less than 100.00% of PHP online submissions
// for Binary Prefix Divisible By 5.

// class Solution
// {

//     /**
//      * @param Integer[] $A
//      * @return Boolean[]
//      */
//     function prefixesDivBy5($A)
//     {
//         list($result, $curr) = [[], 0];
//         foreach ($A as $digit) {
//             $curr = ($curr * 2 + $digit) % 5;
//             array_push($result, !$curr);
//         }
//         return $result;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 36 ms, faster than 100.00% of PHP online submissions
// for Binary Prefix Divisible By 5.
// Memory Usage: 18.4 MB, less than 100.00% of PHP online submissions
// for Binary Prefix Divisible By 5.

// class Solution
// {

//     /**
//      * @param Integer[] $A
//      * @return Boolean[]
//      */
//     function prefixesDivBy5($A, $acc = 0)
//     {
//         return array_map(function ($digit) use (&$acc) {
//             $acc = ($acc * 2 + $digit) % 5;
//             return !$acc;
//         }, $A);
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 32 ms, faster than 100.00% of PHP online submissions
// for Binary Prefix Divisible By 5.
// Memory Usage: 18.3 MB, less than 100.00% of PHP online submissions
// for Binary Prefix Divisible By 5.

class Solution
{

    /**
     * @param Integer[] $A
     * @param Integer $acc
     * @return Boolean[]
     */
    function prefixesDivBy5($A, $acc = 0)
    {
        return array_map(function ($digit) use (&$acc) {
            return !($acc = ($acc * 2 + $digit) % 5);
        }, $A);
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [0, 1, 1],
        'expected' => [true, false, false],
    ],

    [
        'input' => [1, 1, 1],
        'expected' => [false, false, false],
    ],

    [
        'input' => [0, 1, 1, 1, 1, 1],
        'expected' => [true, false, false, false, true, false],
    ],

    [
        'input' => [1, 1, 1, 0, 1],
        'expected' => [false, false, false, false, false],
    ],

    [
        'input' => [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1],
        'expected' => [
            false,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
        ],
    ],
    [
        'input' => [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1],
        'expected' => [
            false,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
        ],
    ],

    [
        'input' => [
            1,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            1,
            0,
            0,
            1,
            0,
            1,
            1,
            1,
            1,
            1,
            1,
            0,
            0,
            0,
            1,
            0,
            1,
            1,
            1,
            1,
            0,
            1,
            1,
            0,
            1,
            0,
            1,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            1,
            1,
            0,
            0,
            1,
            1,
            1,
        ],
        'expected' => [
            false,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            true,
            true,
            false,
            false,
            false,
            true,
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            true,
            true,
            true,
            false,
            false,
            false,
        ],
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->prefixesDivBy5($input);
    $stringifiedInput = json_encode($input);
    $stringifiedExpected = json_encode($expected);
    $stringifiedOutput = json_encode($output);
    if ($expected === $output) {
        echo "✅ {$stringifiedInput}<br>";
    } else {
        echo "🔴 {$stringifiedInput}<br>";
        echo '<i>Expected the below</i><br>';
        echo "<b>{$stringifiedExpected}</b><br>";
        echo '<i>But got the below</i><br>';
        echo "<b>{$stringifiedOutput}</b><br>";
    }
    echo '<hr>';
}
