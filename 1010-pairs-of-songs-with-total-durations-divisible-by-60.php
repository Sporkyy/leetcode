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

class Solution
{

    /**
     * @param Integer[] $time
     * @return Integer
     */
    function numPairsDivisibleBy60($time)
    { }
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
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->numPairsDivisibleBy60($input);
    if ($expected === $output) {
        echo '✅ ', implode($input), '<br>';
    } else {
        echo '🔴 ', implode($input);
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$output}</b></i><br>";
    }
    echo '<hr>';
}
