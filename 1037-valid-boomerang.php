<?php

// 1037. Valid Boomerang
// https://leetcode.com/problems/valid-boomerang/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 40 ms, faster than 100.00% of PHP online submissions
// for Valid Boomerang.
// Memory Usage: 14.7 MB, less than 100.00% of PHP online submissions
// for Valid Boomerang.

class Solution
{

    /**
     * @param Integer[][] $points
     * @return Boolean
     */
    function isBoomerang($points)
    {
        if (
            join($points[0]) === join($points[1])
            || join($points[1]) === join($points[2])
            || join($points[2]) === join($points[0])
        ) {
            return false;
        }
        $cols = [];
        $rows = [];
        foreach ($points as $point) {
            $cols[] = $point[0];
            $rows[] = $point[1];
        }
        if ($cols[0] === $cols[1] && $cols[1] === $cols[2]) return false;
        if ($rows[0] === $rows[1] && $rows[1] === $rows[2]) return false;
        $isDiagonal = true;
        for ($i = 0; $i < count($cols) - 1; $i++) {
            $colDistance = $cols[$i] - $cols[$i + 1];
            $rowDistance = $rows[$i] - $rows[$i + 1];
            $isDiagonal = $isDiagonal && $colDistance === $rowDistance;
        }
        echo '$isDiagonal = ', $isDiagonal, '<br>';
        if ($isDiagonal) return false;
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
        'output' => true,
    ],
    [
        // |X|-|-|
        // |-|X|-|
        // |-|-|X|
        'name' => '[[1, 1], [2, 2], [3, 3]]',
        'input' => [[1, 1], [2, 2], [3, 3]],
        'output' => false,
    ],
    [
        // |-|-|-|-|-|
        // |X|-|-|-|-|
        // |-|X|-|-|-|
        // |-|-|-|-|-|
        // |-|-|-|X|-|
        'name' => '[[1, 2], [2, 3], [4, 5]]',
        'input' => [[1, 2], [2, 3], [4, 5]],
        'output' => false,
    ],
    [
        // |-|-|-|-|-|
        // |X|-|-|-|-|
        // |-|X|-|-|-|
        // |-|-|-|-|-|
        // |-|-|-|-|X|
        'name' => '[[1, 2], [2, 3], [4, 5]]',
        'input' => [[1, 2], [2, 3], [5, 5]],
        'output' => true,
    ],
    [
        // |X|-|-|
        // |-|-|X|
        // |X|-|-|
        'name' => '[[0, 0], [0, 2], [2, 1]]',
        'input' => [[0, 0], [0, 2], [2, 1]],
        'output' => true,
    ],
    [
        // |X|-|-|
        // |-|X|-|
        // |-|-|-|
        'name' => '[[0, 0], [2, 1], [2, 1]]',
        'input' => [[0, 0], [2, 1], [2, 1]],
        'output' => false,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    $name = $test['name'];
    $input = $test['input'];
    $expected = $test['output'];
    $output = $s->isBoomerang($input);
    if ($expected === $output) {
        echo '✅ ', $name, '<br>';
    } else {
        echo '🔴 ', $name, '<br>';
        echo 'Expected "', $expected, '", but got "', $output, '"';
    }
    echo '<hr>';
}
