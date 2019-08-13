<?php

// 977. Squares of a Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 88 ms, faster than 33.80% of PHP online submissions
// for Squares of a Sorted Array.
// Memory Usage: 17.5 MB, less than 100.00% of PHP online submissions
// for Squares of a Sorted Array.

// class Solution
// {

//     /**
//      * @param Integer[] $A
//      * @return Integer[]
//      */
//     function sortedSquares($A)
//     {
//         $A = array_map(function ($n) {
//             return pow($n, 2);
//         }, $A);
//         sort($A, SORT_NUMERIC);
//         return $A;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 104 ms, faster than 14.08% of PHP online submissions
// for Squares of a Sorted Array.
// Memory Usage: 17.6 MB, less than 100.00% of PHP online submissions
// for Squares of a Sorted Array.

// class Solution
// {

//     /**
//      * @param Integer[] $A
//      * @return Integer[]
//      */
//     function sortedSquares($A)
//     {
//         $a = array_fill(0, 10001, 0);
//         foreach ($A as $n) $a[abs($n)]++;
//         $result = [];
//         for ($i = 0; $i < 10001; $i++) while ($a[$i]--) $result[] = pow($i, 2);
//         return $result;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 100 ms, faster than 18.31% of PHP online submissions
// for Squares of a Sorted Array.
// Memory Usage: 17.7 MB, less than 100.00% of PHP online submissions
// for Squares of a Sorted Array.

// class Solution
// {

//     /**
//      * @param Integer[] $A
//      * @return Integer[]
//      */
//     function sortedSquares($A)
//     {
//         $a = array_fill(0, 10001, 0);
//         foreach ($A as $n) $a[abs($n)]++;
//         $result = [];
//         for ($i = 0; $i < 10001; $i++) while ($a[$i]--) $result[] = $i ** 2;
//         return $result;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 88.73% of PHP online submissions
// for Squares of a Sorted Array.
// Memory Usage: 17.5 MB, less than 100.00% of PHP online submissions
// for Squares of a Sorted Array.

// class Solution
// {

//     /**
//      * @param Integer[] $A
//      * @return Integer[]
//      */
//     function sortedSquares($A)
//     {
//         $result = [];
//         list($p1, $p2) = [0, count($A) - 1];
//         [$A[$p1], $A[$p2]] = [abs($A[$p1]), abs($A[$p2])];
//         while ($p1 <= $p2) {
//             if ($A[$p2] < $A[$p1]) {
//                 array_push($result, $A[$p1] ** 2);
//                 $A[++$p1] = abs($A[$p1]);
//             } else {
//                 array_push($result, $A[$p2] ** 2);
//                 $A[--$p2] = abs($A[$p2]);
//             }
//         }
//         return array_reverse($result);
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 88.73% of PHP online submissions
// for Squares of a Sorted Array.
// Memory Usage: 17.6 MB, less than 100.00% of PHP online submissions
// for Squares of a Sorted Array.

// class Solution
// {

//     /**
//      * @param Integer[] $A
//      * @return Integer[]
//      */
//     function sortedSquares($A)
//     {
//         for ($i = 0; $A[$i] < 0; $i++) $A[$i] = abs($A[$i]);
//         list($p1, $p2) = [0, count($A) - 1];
//         $result = [];
//         while ($p1 <= $p2)
//             if ($A[$p2] < $A[$p1]) array_push($result, $A[$p1++] ** 2);
//             else array_push($result, $A[$p2--] ** 2);
//         return array_reverse($result);
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 2876 ms, faster than 5.63% of PHP online submissions
// for Squares of a Sorted Array.
// Memory Usage: 17.7 MB, less than 100.00% of PHP online submissions
// for Squares of a Sorted Array.

// class Solution
// {

//     /**
//      * @param Integer[] $A
//      * @return Integer[]
//      */
//     function sortedSquares($A)
//     {
//         list($p1, $p2) = [0, count($A) - 1];
//         $result = [];
//         while ($p1 <= $p2)
//             if (abs($A[$p2]) < abs($A[$p1])) array_unshift($result, $A[$p1++] ** 2);
//             else array_unshift($result, $A[$p2--] ** 2);
//         return $result;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 64 ms, faster than 97.18% of PHP online submissions
// for Squares of a Sorted Array.
// Memory Usage: 17.7 MB, less than 100.00% of PHP online submissions
// for Squares of a Sorted Array.

class Solution
{

    /**
     * @param Integer[] $A
     * @return Integer[]
     */
    function sortedSquares($A)
    {
        for ($i = count($A) - 1; 0 <= $i; $i--) $A[$i] = $A[$i] ** 2;
        list($p1, $p2) = [0, count($A) - 1];
        $result = [];
        while ($p1 <= $p2)
            if ($A[$p2] < $A[$p1]) array_push($result, $A[$p1++]);
            else array_push($result, $A[$p2--]);
        return array_reverse($result);
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [-4, -1, 0, 3, 10],
        'expected' => [0, 1, 9, 16, 100],
    ],

    [
        'input' => [-7, -3, 2, 3, 11],
        'expected' => [4, 9, 9, 49, 121],
    ],

    [
        'input' => [-20, -19, -14, -12, -7, -5, 2, 2, 4, 6, 6, 7, 8, 9, 10, 12, 17, 17, 18, 18],
        'expected' => [
            4,
            4,
            16,
            25,
            36,
            36,
            49,
            49,
            64,
            81,
            100,
            144,
            144,
            196,
            289,
            289,
            324,
            324,
            361,
            400,
        ],
    ],

    [
        'input' => [-10000, 0, 10000],
        'expected' => [0, 100000000, 100000000],
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $result = $s->sortedSquares($input);
    $name = json_encode($input);
    $stringifiedExpected = json_encode($expected);
    $stringifiedResult = json_encode($result);
    if ($expected === $result) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "<i>Expected <b>{$stringifiedExpected}</b></i><br>";
        echo "<i>But got <b>{$stringifiedResult}</b></i><br>";
    }
    echo '<hr>';
}
