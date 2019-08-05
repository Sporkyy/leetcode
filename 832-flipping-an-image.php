<?php

// 832. Flipping an Image
// https://leetcode.com/problems/flipping-an-image/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 12 ms, faster than 85.53% of PHP online submissions
// for Flipping an Image.
// Memory Usage: 15.1 MB, less than 100.00% of PHP online submissions
// for Flipping an Image.

class Solution
{

    /**
     * @param Integer[][] $A
     * @return Integer[][]
     */
    function flipAndInvertImage($A)
    {
        list($rows, $cols) = [count($A), count($A[0])];
        for ($i = 0; $i < $rows; $i++) {
            if (1 === $cols % 2) {
                $A[$i][intdiv($cols, 2)] = 0 === $A[$i][intdiv($cols, 2)] ? 1 : 0;
            }
            for ($j = 0; $j <= intdiv($cols, 2) - 1; $j++) {
                list($A[$i][$j], $A[$i][$cols - $j - 1]) = [
                    0 === $A[$i][$cols - $j - 1] ? 1 : 0,
                    0 === $A[$i][$j] ? 1 : 0
                ];
            }
        }
        return $A;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [

    [
        'input' => [
            [1, 1, 0],
            [1, 0, 1],
            [0, 0, 0]
        ],
        'expected' => [
            [1, 0, 0],
            [0, 1, 0],
            [1, 1, 1]
        ]
    ],

    [
        'input' => [
            [1, 1, 0, 0],
            [1, 0, 0, 1],
            [0, 1, 1, 1],
            [1, 0, 1, 0]
        ],
        'expected' => [
            [1, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 1],
            [1, 0, 1, 0]
        ]
    ]

];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $result = $s->flipAndInvertImage($input);
    $name = json_encode($input);
    if (json_encode($expected) === json_encode($result)) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo '<i>Expected the below</i><br>';
        echo '<pre>', print_r($expected, true), '</pre><br>';
        echo '<i>But got the below</i><br>';
        echo '<pre>', print_r($result, true), '</pre>';
    }
};
