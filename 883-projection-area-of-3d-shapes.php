<?php

// 883. Projection Area of 3D Shapes
// https://leetcode.com/problems/projection-area-of-3d-shapes/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 24 ms, faster than 100.00% of PHP online submissions
// for Projection Area of 3D Shapes.
// Memory Usage: 15.4 MB, less than 100.00% of PHP online submissions
// for Projection Area of 3D Shapes.

// class Solution
// {

//     /**
//      * @param Integer[][] $grid
//      * @return Integer
//      */
//     function projectionArea($grid)
//     {
//         $xy = array_fill(0, count($grid) * 2, array_fill(0, count($grid), null));
//         $z = 0;
//         for ($i = 0, $k = 0; $i < count($grid); $i++) {
//             for ($j = 0; $j < count($grid); $j++, $k++) {
//                 $xy[$i * 2][$j] = $grid[$i][$j];
//                 $xy[$i * 2 + 1][$j] = $grid[$j][$i];
//                 if (0 < $grid[$i][$j]) $z++;
//             }
//         }
//         return array_sum(array_map(function ($a) {
//             return max($a);
//         }, $xy)) + $z;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 28 ms, faster than 100.00% of PHP online submissions
// for Projection Area of 3D Shapes.
// Memory Usage: 15.3 MB, less than 100.00% of PHP online submissions
// for Projection Area of 3D Shapes.

class Solution
{

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function projectionArea($grid)
    {
        $xy = array_fill(0, count($grid) * 2, 0);
        $z = 0;
        for ($i = 0; $i < count($grid); $i++) {
            for ($j = 0; $j < count($grid); $j++) {
                $xy[$i * 2] = max($xy[$i * 2], $grid[$i][$j]);
                $xy[$i * 2 + 1] = max($xy[$i * 2 + 1], $grid[$j][$i]);
                if (0 < $grid[$i][$j]) $z++;
            }
        }
        return array_sum($xy) + $z;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [[2]],
        'expected' => 5,
    ],

    [
        'input' => [[1, 2], [3, 4]],
        'expected' => 17,
    ],

    [
        'input' => [[1, 0], [0, 2]],
        'expected' => 8,
    ],

    [
        'input' => [[1, 1, 1], [1, 0, 1], [1, 1, 1]],
        'expected' => 14,
    ],

    [
        'input' => [[2, 2, 2], [2, 1, 2], [2, 2, 2]],
        'expected' => 21,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $result = $s->projectionArea($input);
    $name = json_encode($input);
    if ($result === $expected) {
        echo "✅ ${name}<br>";
    } else {
        echo "🔴 ${name}<br>";
        echo "Expected <b>${expected}</b>, but got <b>${result}</b><br>";
    }
    echo '<hr>';
}
