<?php
// 1030. Matrix Cells in Distance Order
// https://leetcode.com/problems/matrix-cells-in-distance-order/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 108 ms, faster than 50.00% of PHP online submissions
// for Matrix Cells in Distance Order.
// Memory Usage: 27.8 MB, less than 20.00% of PHP online submissions
// for Matrix Cells in Distance Order.

// class Solution
// {

//     function distance($originRow, $originCol, $hereRow, $hereCol)
//     {
//         return abs($originRow - $hereRow) + abs($originCol - $hereCol);
//     }

//     function cellsWithDistance($rowCount, $colCount, $rowIndex, $colIndex)
//     {
//         $result = [];
//         for ($i = 0; $i <= $rowCount - 1; $i++) {
//             for ($j = 0; $j <= $colCount - 1; $j++) {
//                 $result[] = [$i, $j, self::distance($rowIndex, $colIndex, $i, $j)];
//             }
//         }
//         return $result;
//     }

//     /**
//      * @param Integer $R
//      * @param Integer $C
//      * @param Integer $r0
//      * @param Integer $c0
//      * @return Integer[][]
//      */
//     function allCellsDistOrder($R, $C, $r0, $c0)
//     {
//         $cells = self::cellsWithDistance($R, $C, $r0, $c0);
//         usort($cells, function ($a, $b) {
//             return $a[2] - $b[2];
//         });
//         return array_map(function ($c) {
//             return [$c[0], $c[1]];
//         }, $cells);
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 112 ms, faster than 33.33% of PHP online submissions
// for Matrix Cells in Distance Order.
// Memory Usage: 25.7 MB, less than 20.00% of PHP online submissions
// for Matrix Cells in Distance Order.

// class Solution
// {
//     /**
//      * @param Integer $R
//      * @param Integer $C
//      * @param Integer $r0
//      * @param Integer $c0
//      * @return Integer[][]
//      */
//     function allCellsDistOrder($R, $C, $r0, $c0)
//     {
//         $result = [];
//         $byDistance = [];
//         for ($rI = 0; $rI <= $R - 1; $rI++) {
//             for ($cI = 0; $cI <= $C - 1; $cI++) {
//                 $distance = abs($r0 - $rI) + abs($c0 - $cI);
//                 if (!isset($byDistance[$distance])) $byDistance[$distance] = [];
//                 array_push($byDistance[$distance], [$rI, $cI]);
//             }
//         }
//         ksort($byDistance, SORT_NUMERIC);
//         // echo '<pre>', print_r($byDistance, true), '</pre>';
//         foreach ($byDistance as $atDistance) {
//             $result = array_merge($result, $atDistance);
//         }
//         // echo '<pre>', print_r($result, true), '</pre>';
//         return $result;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 80 ms, faster than 100.00% of PHP online submissions
// for Matrix Cells in Distance Order.
// Memory Usage: 24.4 MB, less than 60.00% of PHP online submissions
// for Matrix Cells in Distance Order.

// class Solution
// {
//     /**
//      * @param Integer $R
//      * @param Integer $C
//      * @param Integer $r0
//      * @param Integer $c0
//      * @return Integer[][]
//      */
//     function allCellsDistOrder($R, $C, $r0, $c0)
//     {
//         $result = [];
//         $byDistance = [];
//         for ($rI = 0; $rI <= $R - 1; $rI++) {
//             for ($cI = 0; $cI <= $C - 1; $cI++) {
//                 $distance = abs($r0 - $rI) + abs($c0 - $cI);
//                 if (!isset($byDistance[$distance])) $byDistance[$distance] = [];
//                 array_push($byDistance[$distance], [$rI, $cI]);
//             }
//         }
//         ksort($byDistance, SORT_NUMERIC);
//         foreach ($byDistance as $atDistance) {
//             foreach ($atDistance as $cell) {
//                 $result[] = $cell;
//             }
//         }
//         return $result;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 112 ms, faster than 33.33% of PHP online submissions
// for Matrix Cells in Distance Order.
// Memory Usage: 24.5 MB, less than 60.00% of PHP online submissions
// for Matrix Cells in Distance Order.

// class Solution
// {
//     /**
//      * @param Integer $R
//      * @param Integer $C
//      * @param Integer $r0
//      * @param Integer $c0
//      * @return Integer[][]
//      */
//     function allCellsDistOrder($R, $C, $r0, $c0)
//     {
//         $result = [];
//         for ($rI = 0, $R--, $C--; $rI <= $R; $rI++) {
//             for ($cI = 0; $cI <= $C; $cI++) {
//                 $result[] = [$rI, $cI, abs($r0 - $rI) + abs($c0 - $cI)];
//             }
//         }
//         usort($result, function ($a, $b) {
//             return $a[2] - $b[2];
//         });
//         foreach ($result as &$cell) {
//             array_pop($cell);
//         }
//         return $result;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 104 ms, faster than 50.00% of PHP online submissions
// for Matrix Cells in Distance Order.
// Memory Usage: 24.5 MB, less than 60.00% of PHP online submissions
// for Matrix Cells in Distance Order.

// class Solution
// {
//     /**
//      * @param Integer $R
//      * @param Integer $C
//      * @param Integer $r0
//      * @param Integer $c0
//      * @return Integer[][]
//      */
//     function allCellsDistOrder($R, $C, $r0, $c0)
//     {
//         $result = [];
//         for ($rI = 0, $R--, $C--; $rI <= $R; $rI++) {
//             for ($cI = 0; $cI <= $C; $cI++) {
//                 $result[] = [$rI, $cI, abs($r0 - $rI) + abs($c0 - $cI)];
//             }
//         }
//         usort($result, function ($a, $b) {
//             return $a[2] - $b[2];
//         });
//         foreach ($result as &$cell) {
//             $cell = [$cell[0], $cell[1]];
//         }
//         return $result;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 76 ms, faster than 100.00% of PHP online submissions
// for Matrix Cells in Distance Order.
// Memory Usage: 23.4 MB, less than 100.00% of PHP online submissions
// for Matrix Cells in Distance Order.

/*
 * This feels excessively clever
 */
// class Solution
// {
//     /**
//      * @param Integer $R
//      * @param Integer $C
//      * @param Integer $r0
//      * @param Integer $c0
//      * @return Integer[][]
//      */
//     function allCellsDistOrder($R, $C, $r0, $c0)
//     {
//         $result = [];
//         $max = $R * $C;
//         for ($rI = $i = 0, $R--, $C--; $rI <= $R; $rI++) {
//             for ($cI = 0; $cI <= $C; $cI++, $i++) {
//                 $distance = abs($r0 - $rI) + abs($c0 - $cI);
//                 $result[$distance * $max + $i] = [$rI, $cI];
//             }
//         }
//         ksort($result, SORT_NUMERIC);
//         echo '<pre>', print_r($result, true), '</pre>';
//         return $result;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 72 ms, faster than 100.00% of PHP online submissions
// for Matrix Cells in Distance Order.
// Memory Usage: 23.5 MB, less than 100.00% of PHP online submissions
// for Matrix Cells in Distance Order.

class Solution
{
    /**
     * @param Integer $R
     * @param Integer $C
     * @param Integer $r0
     * @param Integer $c0
     * @return Integer[][]
     */
    function allCellsDistOrder($R, $C, $r0, $c0)
    {
        $result = [];
        for ($rI = $i = 0; $rI <= $R - 1; $rI++) {
            for ($cI = 0; $cI <= $C - 1; $cI++, $i++) {
                $distance = abs($r0 - $rI) + abs($c0 - $cI);
                $result[$distance * $C * $R + $i] = [$rI, $cI];
            }
        }
        ksort($result, SORT_NUMERIC);
        return $result;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'name' => 'Example 1',
        // [0, 0], [0, 1]
        'input' => [
            'R' => 1,
            'C' => 2,
            'r0' => 0,
            'c0' => 0,
        ],
        'expected' => [[0, 0], [0, 1]],
    ],
    [
        'name' => 'Example 2',
        // [0, 0], [0, 1]
        // [1, 0], [1, 1]
        'input' => [
            'R' => 2,
            'C' => 2,
            'r0' => 0,
            'c0' => 1,
        ],
        'expected' => [[0, 1], [0, 0], [1, 1], [1, 0]],
    ],
    [
        'name' => 'Example 3',
        // [0, 0], [0, 1], [0, 2]
        // [1, 0], [1, 1], [1, 2]
        'input' => [
            'R' => 2,
            'C' => 3,
            'r0' => 1,
            'c0' => 2,
        ],
        'expected' => [[1, 2], [0, 2], [1, 1], [0, 1], [1, 0], [0, 0]],
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    extract($input);
    $output = $s->allCellsDistOrder($R, $C, $r0, $c0);
    if ($expected === $output) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        // echo 'Expected the below<br>';
        // echo '<pre>', print_r($expected, true), '</pre>';
        // echo 'But got the beow instead<br>';
        // echo '<pre>', print_r($output, true), '</pre>';
    }
}
