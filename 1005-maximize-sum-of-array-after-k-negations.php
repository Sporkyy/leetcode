<?php

// 1005. Maximize Sum Of Array After K Negations
// https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 100 ms, faster than 33.33% of PHP online submissions
// for Maximize Sum Of Array After K Negations.
// Memory Usage: 14.9 MB, less than 100.00% of PHP online submissions
// for Maximize Sum Of Array After K Negations.

// class Solution
// {

//     /**
//      * @param Integer[] $A
//      * @param Integer $K
//      * @return Integer
//      */
//     function largestSumAfterKNegations($A, $K)
//     {
//         for ($i = 0; $i < $K; $i++) {
//             $mi = 0;
//             foreach ($A as $key => $value) {
//                 if ($value < $A[$mi]) $mi = $key;
//             }
//             $mv = $A[$mi];
//             if (0 === $mv) break;
//             $A[$mi] = -$mv;
//         }
//         return array_reduce($A, function ($acc, $curr) {
//             return $acc + $curr;
//         });
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 88 ms, faster than 33.33% of PHP online submissions
// for Maximize Sum Of Array After K Negations.
// Memory Usage: 14.9 MB, less than 100.00% of PHP online submissions
// for Maximize Sum Of Array After K Negations.

// class Solution
// {

//     /**
//      * @param Integer[] $A
//      * @param Integer $K
//      * @return Integer
//      */
//     function largestSumAfterKNegations($A, $K)
//     {
//         while ($K--) {
//             $mindex = 0;
//             foreach ($A as $key => $value) {
//                 if ($value < $A[$mindex]) $mindex = $key;
//             }
//             $minVal = $A[$mindex];
//             if (0 === $minVal) break;
//             if (0 < $minVal && 1 === $K % 2) break;
//             $A[$mindex] = -$minVal;
//             if (0 < $minVal && 0 === $K % 2) break;
//         }
//         return array_reduce($A, function ($acc, $curr) {
//             return $acc + $curr;
//         });
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 16 ms, faster than 66.67% of PHP online submissions
// for Maximize Sum Of Array After K Negations.
// Memory Usage: 14.9 MB, less than 100.00% of PHP online submissions
// for Maximize Sum Of Array After K Negations.

class Solution
{

    /**
     * @param Integer[] $A
     * @param Integer $K
     * @return Integer
     */
    function largestSumAfterKNegations($A, $K)
    {
        sort($A, SORT_NUMERIC);
        $sum = 0;
        for ($i = 0; $i < count($A); $i++) {
            $val = $A[$i];
            if (0 < $K) {
                if ($val < 0) {
                    $next = $A[$i + 1];
                    if (abs($val) < $next && 0 === $K % 2) $K = 0;
                    else list($val, $K) = [-$val, $K - 1];
                } else if (0 !== val && 1 === $K % 2) list($val, $K) = [-$val, 0];
                else $K = 0;
            }
            $sum += $val;
        }
        return $sum;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [
            'A' => [4, 2, 3],
            'K' => 1,
        ],
        'expected' => 5,
    ],
    // Explanation: Choose indices (1,) and A becomes [4,-2,3].

    [
        'input' => [
            'A' => [3, -1, 0, 2],
            'K' => 3,
        ],
        'expected' => 6,
    ],
    // Explanation: Choose indices (1, 2, 2) and A becomes [3,1,0,2].

    [
        'input' => [
            'A' => [2, -3, -1, 5, -4],
            'K' => 2,
        ],
        'expected' => 13,
    ],
    // Explanation: Choose indices (1, 4) and A becomes [2,3,-1,5,4].

    [
        'input' => [
            'A' => [-8, 3, -5, -3, -5, -2],
            'K' => 6,
        ],
        'expected' => 22,
    ],

    [
        'input' => [
            'A' => [8, 3, 5, 3, 5, 2],
            'K' => 6,
        ],
        'expected' => 26,
    ],

    [
        'input' => [
            'A' => [3, 5, 3, 5, 2],
            'K' => 5,
        ],
        'expected' => 14,
    ],

    [
        'input' => [
            'A' => [-2, 5, 0, 2, -2],
            'K' => 3,
        ],
        'expected' => 11,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    extract($input);
    $output = $s->largestSumAfterKNegations($A, $K);
    if ($expected === $output) {
        echo '✅ ', implode(', ', $A), "; {$K}<br>";
    } else {
        echo '🔴 ', implode(', ', $A), "; {$K}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$output}</b></i><br>";
    }
    echo '<hr>';
}
