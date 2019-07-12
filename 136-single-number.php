<?php

// 136. Single Number
// https://leetcode.com/problems/single-number/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 28 ms, faster than 62.20% of PHP online submissions
// for Single Number.
// Memory Usage: 17.6 MB, less than 30.56% of PHP online submissions
// for Single Number.

// class Solution
// {

//     /**
//      * @param Integer[] $nums
//      * @return Integer
//      */
//     function singleNumber($nums)
//     {
//         $dict = [];
//         foreach ($nums as $num) {
//             if (!array_key_exists($num, $dict)) $dict[$num] = 1;
//             else $dict[$num]++;
//         }
//         return array_flip($dict)[1];
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 16 ms, faster than 100.00% of PHP online submissions
// for Single Number.
// Memory Usage: 17.4 MB, less than 72.22% of PHP online submissions
// for Single Number.

class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function singleNumber($nums)
    {
        return array_search(1, array_count_values($nums));
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [2, 2, 1],
        'expected' => 1,
    ],
    [
        'input' => [4, 1, 2, 1, 2],
        'expected' => 4,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $name = implode(', ', $input);
    $output = $s->singleNumber($input);
    if ($expected === $output) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$output}</b></i><br>";
    }
    echo '<hr>';
}
