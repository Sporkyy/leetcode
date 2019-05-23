<?php
// 1030. Matrix Cells in Distance Order
// https://leetcode.com/problems/matrix-cells-in-distance-order/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 108 ms, faster than 50.00% of PHP online submissions
// for Matrix Cells in Distance Order.
// Memory Usage: 27.8 MB, less than 20.00% of PHP online submissions
// for Matrix Cells in Distance Order.

class Solution
{

    function distance($originRow, $originCol, $hereRow, $hereCol)
    {
        return abs($originRow - $hereRow) + abs($originCol - $hereCol);
    }

    function cellsWithDistance($rowCount, $colCount, $rowIndex, $colIndex)
    {
        $result = [];
        for ($i = 0; $i <= $rowCount - 1; $i++) {
            for ($j = 0; $j <= $colCount - 1; $j++) {
                $result[] = [$i, $j, self::distance($rowIndex, $colIndex, $i, $j)];
            }
        }
        return $result;
    }

    /**
     * @param Integer $R
     * @param Integer $C
     * @param Integer $r0
     * @param Integer $c0
     * @return Integer[][]
     */
    function allCellsDistOrder($R, $C, $r0, $c0)
    {
        $cells = self::cellsWithDistance($R, $C, $r0, $c0);
        usort($cells, function ($a, $b) {
            return $a[2] - $b[2];
        });
        return array_map(function ($c) {
            return [$c[0], $c[1]];
        }, $cells);
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
