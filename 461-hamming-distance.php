<?php

// 461. Hamming Distance
// https://leetcode.com/problems/hamming-distance/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 77.78% of PHP online submissions
// for Hamming Distance.
// Memory Usage: 14.7 MB, less than 85.71% of PHP online submissions
// for Hamming Distance.

// class Solution
// {

//     /**
//      * @param Integer $x
//      * @param Integer $y
//      * @return Integer
//      */
//     function hammingDistance($x, $y)
//     {
//         return array_reduce(str_split(decbin($x ^ $y)), function ($acc, $curr) {
//             return $acc + intval($curr);
//         });
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 77.78% of PHP online submissions
// for Hamming Distance.
// Memory Usage: 14.8 MB, less than 85.71% of PHP online submissions
// for Hamming Distance.

// class Solution
// {

//     /**
//      * @param Integer $x
//      * @param Integer $y
//      * @return Integer
//      */
//     function hammingDistance($x, $y)
//     {
//         $bin = decbin($x ^ $y);
//         $distance = 0;
//         for ($i = strlen($bin) - 1; 0 <= $i; $i--) if ('1' === $bin[$i]) $distance++;
//         return $distance;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 77.78% of PHP online submissions
// for Hamming Distance.
// Memory Usage: 14.8 MB, less than 85.71% of PHP online submissions
// for Hamming Distance.

class Solution
{

    /**
     * @param Integer $x
     * @param Integer $y
     * @return Integer
     */
    function hammingDistance($x, $y)
    {
        return strlen(implode('', explode('0', decbin($x ^ $y))));
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [
            'x' => 1,
            'y' => 4
        ],
        'expected' => 2
    ],

    [
        'input' => [
            'x' => 93,
            'y' => 73,
        ],
        'expected' => 2,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    extract($input);
    $output = $s->hammingDistance($x, $y);
    $name = implode(', ', $input);
    if ($expected === $output) {
        echo "✅ ${name}<br>";
    } else {
        echo "🔴 ${name}<br>";
        echo "Expected {$expected} but got {$output}<br>";
    }
    echo '<hr>';
}
