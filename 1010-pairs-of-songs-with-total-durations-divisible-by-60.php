<?php

// 1010. Pairs of Songs With Total Durations Divisible by 60
// https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Time Limit Exceeded

// class Solution
// {

//     /**
//      * @param Integer[] $time
//      * @return Integer
//      */
//     function numPairsDivisibleBy60($time)
//     {
//         $result = 0;
//         for ($i = 0; $i < count($time); $i++)
//             for ($j = $i + 1; $j < count($time); $j++)
//                 if (0 === ($time[$i] + $time[$j]) % 60) $result++;
//         return $result;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Time Limit Exceeded

// class Solution
// {

//     /**
//      * @param Integer[] $time
//      * @return Integer
//      */
//     function numPairsDivisibleBy60($time)
//     {
//         $results = [];
//         for ($i = 0; $i < count($time); $i++)
//             for ($j = $i + 1; $j < count($time); $j++) {
//                 $sum = $time[$i] + $time[$j];
//                 if (isset($results[$sum]))
//                     $results[$sum]++;
//                 else
//                     if (0 === $sum % 60) $results[$sum] = 1;
//             }
//         return array_sum($results);
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 68 ms, faster than 100.00% of PHP online submissions
// for Pairs of Songs With Total Durations Divisible by 60.
// Memory Usage: 21.5 MB, less than 100.00% of PHP online submissions
// for Pairs of Songs With Total Durations Divisible by 60.

class Solution
{

    /**
     * @param Integer[] $time
     * @return Integer
     */
    function numPairsDivisibleBy60($time)
    {
        $modded = array_map(function ($n) {
            return $n % 60;
        }, $time);
        $counts = array_fill(0, 60, 0);
        foreach ($modded as $modTime) $counts[$modTime]++;
        $result = 0;
        for ($i = 1; $i < 30; $i++) {
            list($x, $y) = [$counts[$i], $counts[60 - $i]];
            if (0 < $x && 0 < $y) $result += $x * $y;
        }
        if (1 < $counts[0]) $result += ($counts[0] * ($counts[0] - 1)) / 2;
        if (1 < $counts[30]) $result += ($counts[30] * ($counts[30] - 1)) / 2;
        return $result;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [30, 20, 150, 100, 40],
        'expected' => 3,
    ],
    [
        'input' => [60, 60, 60],
        'expected' => 3,
    ],

    [
        'input' => [20, 40],
        'expected' => 1,
    ],

    [
        'input' => [439, 407, 197, 191, 291, 486, 30, 307, 11],
        'expected' => 0,
    ],

    [
        'input' => [
            269,
            230,
            318,
            468,
            171,
            158,
            350,
            60,
            287,
            27,
            11,
            384,
            332,
            267,
            412,
            478,
            280,
            303,
            242,
            378,
            129,
            131,
            164,
            467,
            345,
            146,
            264,
            332,
            276,
            479,
            284,
            433,
            117,
            197,
            430,
            203,
            100,
            280,
            145,
            287,
            91,
            157,
            5,
            475,
            288,
            146,
            370,
            199,
            81,
            428,
            278,
            2,
            400,
            23,
            470,
            242,
            411,
            470,
            330,
            144,
            189,
            204,
            62,
            318,
            475,
            24,
            457,
            83,
            204,
            322,
            250,
            478,
            186,
            467,
            350,
            171,
            119,
            245,
            399,
            112,
            252,
            201,
            324,
            317,
            293,
            44,
            295,
            14,
            379,
            382,
            137,
            280,
            265,
            78,
            38,
            323,
            347,
            499,
            238,
            110,
            18,
            224,
            473,
            289,
            198,
            106,
            256,
            279,
            275,
            349,
            210,
            498,
            201,
            175,
            472,
            461,
            116,
            144,
            9,
            221,
            473,
        ],
        'expected' => 105,
    ],

    [
        'input' => [
            14,
            161,
            302,
            232,
            270,
            428,
            155,
            64,
            499,
            400,
            25,
            349,
            434,
            427,
            5,
            265,
            20,
            346,
            463,
            10,
            1,
            163,
            189,
            345,
            390,
            212,
            498,
            281,
            308,
            482,
            447,
            217,
            318,
            239,
            374,
            449,
            298,
            213,
            2,
            230,
            5,
            500,
            300,
            390,
            139,
            484,
            464,
            477,
            111,
            88,
            93,
            198,
            181,
            113,
            393,
            283,
            383,
            205,
            42,
            292,
            335,
            392,
            384,
            268,
            361,
            462,
            413,
            176,
            118,
            111,
            143,
            242,
            166,
            286,
            177,
            52,
            126,
            342,
            415,
            302,
            210,
            48,
            369,
            148,
            209,
            87,
            212,
            53,
            296,
            95,
            97,
            45,
            467,
            47,
            373,
            404,
            43,
            439,
            19,
            64,
            289,
            218,
            268,
            460,
            238,
            456,
            490,
            155,
            429,
            218,
            301,
            225,
            228,
            237,
            453,
            267,
            259,
            327,
            427,
            169,
            176,
            322,
            216,
            451,
            29,
            327,
            404,
            177,
            225,
            44,
            248,
            174,
            287,
            326,
            441,
            354,
            110,
            4,
            226,
            324,
            331,
            158,
            454,
            469,
            354,
            383,
            336,
            211,
            133,
            500,
            233,
            330,
            471,
            327,
            426,
            478,
            195,
            232,
            163,
            312,
            126,
            51,
            161,
            248,
            433,
            348,
            464,
            206,
            480,
            478,
            98,
            354,
            304,
            424,
            338,
            382,
            431,
            379,
            194,
            488,
            6,
            494,
            394,
            469,
            430,
            1,
            207,
            307,
            172,
            47,
            269,
            472,
            415,
            163,
            309,
            68,
            213,
            175,
            343,
            187,
            15,
            232,
            429,
            389,
            373,
            143,
            146,
            88,
            58,
            320,
            116,
            82,
            482,
            125,
            343,
            329,
            115,
            116,
            183,
            389,
            112,
            294,
            74,
            89,
            62,
        ],
        'expected' => 426,
    ],

    [
        'input' => [0, 0],
        'expected' => 1,
    ],

    [
        'input' => [0, 0, 0],
        'expected' => 3,
    ],

    [
        'input' => [0, 0, 0, 0],
        'expected' => 6,
    ],

    [
        'input' => [0, 0, 0, 0, 0],
        'expected' => 10,
    ],

    [
        'input' => [0, 0, 0, 0, 0, 0],
        'expected' => 15,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->numPairsDivisibleBy60($input);
    if ($expected === $output) {
        echo '✅ ', implode(', ', $input), '<br>';
    } else {
        echo '🔴 ', implode(', ', $input), '<br>';
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$output}</b></i><br>";
    }
    echo '<hr>';
}
