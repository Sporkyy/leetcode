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

class Solution
{

    /**
     * @param Integer[] $heights
     * @return Integer
     */
    function heightChecker($heights)
    {
        $sorted = $heights;
        sort($sorted, SORT_NUMERIC);
        $answer = 0;
        $i = 0;
        foreach ($sorted as $value) {
            if ($value !== $heights[$i++]) $answer++;
        }
        return $answer;
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
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->heightChecker($input);
    if ($expected === $output) {
        echo '✅ ', implode(', ', $input), '<br>';
    } else {
        echo '🔴 ', implode(', ', $input), '<br>';
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$output}</b></i><br>";
    }
    echo '<hr>';
}
