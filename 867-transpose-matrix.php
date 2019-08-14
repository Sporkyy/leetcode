<?php

// 867. Transpose Matrix
// https://leetcode.com/problems/transpose-matrix/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 48 ms, faster than 5.88% of PHP online submissions
// for Transpose Matrix.
// Memory Usage: 16.3 MB, less than 100.00% of PHP online submissions
// for Transpose Matrix.

// class Solution
// {

//     /**
//      * @param Integer[][] $A
//      * @return Integer[][]
//      */
//     function transpose($A)
//     {
//         $transposed = array_fill(0, count($A[0]), 0);
//         for ($i = 0; $i < count($transposed); $i++) {
//             $transposed[$i] = array_fill(0, count($A), 0);
//         }
//         for ($i = 0; $i < count($A); $i++) {
//             for ($j = 0; $j < count($A[$i]); $j++) {
//                 $transposed[$j][$i] = $A[$i][$j];
//             }
//         }
//         return $transposed;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 28 ms, faster than 64.71% of PHP online submissions
// for Transpose Matrix.
// Memory Usage: 16.3 MB, less than 100.00% of PHP online submissions
// for Transpose Matrix.

class Solution
{

    /**
     * @param Integer[][] $A
     * @return Integer[][]
     */
    function transpose($A)
    {
        list($rows, $cols) = [count($A), count($A[0])];
        $transposed = array_fill(0, $cols, array_fill(0, $rows, null));
        for ($i = 0; $i < $rows; $i++)
            for ($j = 0; $j < $cols; $j++)
                $transposed[$j][$i] = $A[$i][$j];
        return $transposed;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
        'expected' => [[1, 4, 7], [2, 5, 8], [3, 6, 9]],
    ],

    [
        'input' => [[1, 2, 3], [4, 5, 6]],
        'expected' => [[1, 4], [2, 5], [3, 6]],
    ],

    [
        'input' => [[1]],
        'expected' => [[1]],
    ],

    [
        'input' => [[1, 2]],
        'expected' => [[1], [2]],
    ],

    [
        'input' => [[1], [2]],
        'expected' => [[1, 2]],
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $name = json_encode($input);
    $result = $s->transpose($input);
    if ($result === $expected) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo '<i>Expected the below</i><br>';
        echo '<pre>', print_r($expected, true), '</pre>';
        echo '<i>But got the below instead</i><br>';
        echo '<pre>', print_r($result, true), '</pre>';
    }
    echo '<hr>';
};
