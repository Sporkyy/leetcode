<?php

// 1037. Valid Boomerang
// https://leetcode.com/problems/valid-boomerang/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 40 ms, faster than 100.00% of PHP online submissions
// for Valid Boomerang.
// Memory Usage: 14.7 MB, less than 100.00% of PHP online submissions
// for Valid Boomerang.

// class Solution
// {

//     /**
//      * @param Integer[][] $points
//      * @return Boolean
//      */
//     function isBoomerang($points)
//     {
//         if (
//             join($points[0]) === join($points[1])
//             || join($points[1]) === join($points[2])
//             || join($points[2]) === join($points[0])
//         ) {
//             return false;
//         }
//         $cols = [];
//         $rows = [];
//         foreach ($points as $point) {
//             $cols[] = $point[0];
//             $rows[] = $point[1];
//         }
//         if ($cols[0] === $cols[1] && $cols[1] === $cols[2]) return false;
//         if ($rows[0] === $rows[1] && $rows[1] === $rows[2]) return false;
//         $isDiagonal = true;
//         for ($i = 0; $i < count($cols) - 1; $i++) {
//             $colDistance = $cols[$i] - $cols[$i + 1];
//             $rowDistance = $rows[$i] - $rows[$i + 1];
//             $isDiagonal = $isDiagonal && $colDistance === $rowDistance;
//         }
//         echo '$isDiagonal = ', $isDiagonal, '<br>';
//         if ($isDiagonal) return false;
//         return true;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 4 ms, faster than 100.00% of PHP online submissions
// for Valid Boomerang.
// Memory Usage: 14.8 MB, less than 100.00% of PHP online submissions
// for Valid Boomerang.

// class Solution
// {

//     /**
//      * @param Integer[][] $points
//      * @return Boolean
//      */
//     function isBoomerang($points)
//     {
//         // If all points are in a line vertially
//         if (
//             $points[0][0] === $points[1][0]
//             && $points[1][0] === $points[2][0]
//             && $points[2][0] === $points[0][0]
//         ) return false;
//         // If all points are in a line horizontally
//         if (
//             $points[0][1] === $points[1][1]
//             && $points[1][1] === $points[2][1]
//             && $points[2][1] === $points[0][1]
//         ) return false;
//         // If any of the points are the same
//         if (
//             ($points[0][0] === $points[1][0]
//                 && $points[0][1] === $points[1][1])
//             || ($points[1][0] === $points[2][0]
//                 && $points[1][1] === $points[2][1])
//             || ($points[2][0] === $points[0][0]
//                 && $points[2][1] === $points[0][1])
//         ) return false;
//         $isDiagonal = true;
//         for ($i = 0; $i < count($points) - 1; $i++) {
//             $colDistance = $points[$i][0] - $points[$i + 1][0];
//             $rowDistance = $points[$i][1] - $points[$i + 1][1];
//             $isDiagonal = $isDiagonal && $colDistance === $rowDistance;
//         }
//         // If the points are in a line diagonally
//         if ($isDiagonal) return false;
//         // If all the tests are passed, assume it is valid
//         return true;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 100.00% of PHP online submissions
// for Valid Boomerang.
// Memory Usage: 14.8 MB, less than 100.00% of PHP online submissions
// for Valid Boomerang.

class Solution
{

    /**
     * @param Integer[][] $points
     * @return Boolean
     */
    function isBoomerang($points)
    {
        // If all points are in a line vertially
        if (
            $points[0][0] === $points[1][0]
            && $points[1][0] === $points[2][0]
            && $points[2][0] === $points[0][0]
        ) return false;
        // If all points are in a line horizontally
        if (
            $points[0][1] === $points[1][1]
            && $points[1][1] === $points[2][1]
            && $points[2][1] === $points[0][1]
        ) return false;
        // If any of the points are the same
        if (
            ($points[0][0] === $points[1][0]
                && $points[0][1] === $points[1][1])
            || ($points[1][0] === $points[2][0]
                && $points[1][1] === $points[2][1])
            || ($points[2][0] === $points[0][0]
                && $points[2][1] === $points[0][1])
        ) return false;
        // If the points are in a line diagonally
        if (
            ($points[0][0] - $points[1][0] === $points[0][1] - $points[1][1])
            && ($points[1][0] - $points[2][0] === $points[1][1] - $points[2][1])
            && ($points[2][0] - $points[0][0] === $points[2][1] - $points[0][1])
        ) return false;
        // If all the tests are passed, assume it is valid
        return true;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        // |X|-|-|
        // |-|-|X|
        // |-|X|-|
        'name' => '[[1, 1], [2, 3], [3, 2]]',
        'input' => [[1, 1], [2, 3], [3, 2]],
        'expected' => true,
    ],
    [
        // |X|-|-|
        // |-|X|-|
        // |-|-|X|
        'name' => '[[1, 1], [2, 2], [3, 3]]',
        'input' => [[1, 1], [2, 2], [3, 3]],
        'expected' => false,
    ],
    [
        // |-|-|-|-|-|
        // |X|-|-|-|-|
        // |-|X|-|-|-|
        // |-|-|-|-|-|
        // |-|-|-|X|-|
        'name' => '[[1, 2], [2, 3], [4, 5]]',
        'input' => [[1, 2], [2, 3], [4, 5]],
        'expected' => false,
    ],
    [
        // |-|-|-|-|-|
        // |X|-|-|-|-|
        // |-|X|-|-|-|
        // |-|-|-|-|-|
        // |-|-|-|-|X|
        'name' => '[[1, 2], [2, 3], [4, 5]]',
        'input' => [[1, 2], [2, 3], [5, 5]],
        'expected' => true,
    ],
    [
        // |X|-|-|
        // |-|-|X|
        // |X|-|-|
        'name' => '[[0, 0], [0, 2], [2, 1]]',
        'input' => [[0, 0], [0, 2], [2, 1]],
        'expected' => true,
    ],
    [
        // |X|-|-|
        // |-|X|-|
        // |-|-|-|
        'name' => '[[0, 0], [2, 1], [2, 1]]',
        'input' => [[0, 0], [2, 1], [2, 1]],
        'expected' => false,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->isBoomerang($input);
    if ($expected === $output) {
        echo '✅ ', $name, '<br>';
    } else {
        echo '🔴 ', $name, '<br>';
        echo 'Expected "', $expected, '", but got "', $output, '"';
    }
    echo '<hr>';
}
