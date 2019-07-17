<?php

// 1051. Height Checker
// https://leetcode.com/problems/height-checker/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 12 ms, faster than 25.00% of PHP online submissions
// for Height Checker.
// Memory Usage: 14.9 MB, less than 100.00% of PHP online submissions
// for Height Checker.

// class Solution
// {

//     /**
//      * @param Integer[] $heights
//      * @return Integer
//      */
//     function heightChecker($heights)
//     {
//         $sorted = $heights;
//         asort($sorted, SORT_NUMERIC);
//         $keys = array_keys($sorted);
//         $answer = 0;
//         $i = 0;
//         foreach ($sorted as $key => $value) {
//             if ($key !== $i && $value !== $heights[$i]) $answer++;
//             $i++;
//         }
//         return $answer;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 62.50% of PHP online submissions
// for Height Checker.
// Memory Usage: 14.8 MB, less than 100.00% of PHP online submissions
// for Height Checker.

// class Solution
// {

//     /**
//      * @param Integer[] $heights
//      * @return Integer
//      */
//     function heightChecker($heights)
//     {
//         $sorted = $heights;
//         asort($sorted, SORT_NUMERIC);
//         $answer = 0;
//         $i = 0;
//         foreach ($sorted as $value) {
//             if ($value !== $heights[$i++]) $answer++;
//         }
//         return $answer;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 62.50% of PHP online submissions
// for Height Checker.
// Memory Usage: 15 MB, less than 100.00% of PHP online submissions
// for Height Checker.

// class Solution
// {

//     /**
//      * @param Integer[] $heights
//      * @return Integer
//      */
//     function heightChecker($heights)
//     {
//         $sorted = $heights;
//         sort($sorted, SORT_NUMERIC);
//         $answer = 0;
//         $i = 0;
//         foreach ($sorted as $value) {
//             if ($value !== $heights[$i++]) $answer++;
//         }
//         return $answer;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 4 ms, faster than 95.83% of PHP online submissions
// for Height Checker.
// Memory Usage: 14.7 MB, less than 100.00% of PHP online submissions
// for Height Checker.

/**
 * @param {number[]} heights
 * @return {number}
 */
class Solution
{

    /**
     * @param Integer[] $heights
     * @return Integer
     */
    function heightChecker($heights)
    {
        $id10ts = 0;
        $counts = array_fill(1, 100, 0);
        foreach ($heights as $height) $counts[$height]++;
        echo '<pre>', print_r($counts, true), '</pre>';
        for ($i = 0, $z = 0; $i < 101; $i++)
            for ($j = $counts[$i]; 0 < $j; $j--, $z++)
                if ($heights[$z] !== $i) $id10ts++;
        return $id10ts;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [1, 1, 4, 2, 1, 3],
        'expected' => 3,
        // Explanation: Students with heights 4, 3 and the last 1 are not
        // standing in the right positions.
    ],

    [
        'input' => [1, 2, 3, 4, 5],
        'expected' => 0,
    ],

    [
        'input' => [5, 4, 3, 2, 1],
        'expected' => 4,
    ],

    [
        'input' => [1, 1, 1, 1, 1],
        'expected' => 0,
    ],

    [
        'input' => [1, 1, 2, 2],
        'expected' => 0,
    ],

    [
        'input' => [2, 2, 1, 1],
        'expected' => 4,
    ],

    [
        'input' => [2, 1, 1, 2],
        'expected' => 2,
    ],

    [
        'input' => [1, 2, 2, 1],
        'expected' => 2,
    ],

    [
        'input' => [1, 2, 1, 2],
        'expected' => 2,
    ],

    [
        'input' => [2, 1, 2, 1],
        'expected' => 2,
    ],

    [
        'input' => [2, 1, 1, 1],
        'expected' => 2,
    ],

    [
        'input' => [2, 2, 2, 1],
        'expected' => 2,
    ],

    [
        'input' => [2, 1, 2, 1, 1, 2, 2, 1],
        'expected' => 4,
    ],

    [
        'input' => [
            31,
            81,
            41,
            78,
            48,
            2,
            83,
            48,
            21,
            20,
            43,
            15,
            26,
            78,
            96,
            55,
            5,
            46,
            35,
            89,
            85,
            54,
            76,
            64,
            71,
            36,
            98,
            94,
            100,
            7,
            88,
            92,
            80,
            43,
            24,
            89,
            50,
            61,
            59,
            20,
            94,
            57,
            99,
            62,
            82,
            46,
            28,
            57,
            66,
            62,
            56,
            15,
            12,
            63,
            19,
            35,
            12,
            26,
            15,
            59,
            8,
            44,
            46,
            45,
            33,
            20,
            27,
            31,
            85,
            15,
            92,
            63,
            63,
            40,
            35,
            95,
            91,
            1,
            4,
            57,
            55,
            68,
            53,
            28,
            15,
            94,
            74,
            89,
            77,
            7,
            25,
            63,
            77,
            24,
            76,
            44,
        ],
        'expected' => 95,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $name = implode(', ', $input);
    $output = $s->heightChecker($input);
    if ($expected === $output) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$output}</b></i><br>";
    }
    echo '<hr>';
}
