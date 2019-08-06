<?php

// 1025. Divisor Game
// https://leetcode.com/problems/divisor-game/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 16 ms, faster than 30.00% of PHP online submissions
// for Divisor Game.
// Memory Usage: 14.5 MB, less than 100.00% of PHP online submissions
// for Divisor Game.

class Solution
{

    /**
     * | $N | A | N | B | N | A | N | B | N | A | N | W |
     * | -- | - | - | - | - | - | - | - | - | - | - | - |
     * |  1 |   |   |   |   |   |   |   |   |   |   | B |
     * |  2 | 1 | 1 |   |   |   |   |   |   |   |   | A |
     * |  3 | 1 | 2 | 1 | 1 |   |   |   |   |   |   | B |
     * |  4 | 1 | 3 | 1 | 2 | 1 | 1 |   |   |   |   | A |
     * |  5 | 1 | 4 | 1 | 3 | 1 | 2 | 1 | 1 |   |   | B |
     * |  6 | 1 | 5 | 1 | 4 | 1 | 3 | 1 | 2 | 1 | 1 | A |
     *
     * @param Integer $N
     * @return Boolean
     */
    function divisorGame($N)
    {
        return 0 === $N % 2;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => 1,
        'expected' => false,
    ],
    [
        'input' => 2,
        'expected' => true,
    ],
    [
        'input' => 3,
        'expected' => false,
    ],
    [
        'input' => 4,
        'expected' => true,
    ],
    [
        'input' => 5,
        'expected' => false,
    ],
    [
        'input' => 6,
        'expected' => true,
    ],
    [
        'input' => 7,
        'expected' => false,
    ],
    [
        'input' => 8,
        'expected' => true,
    ],
    [
        'input' => 9,
        'expected' => false,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $result = $s->divisorGame($input);
    if ($result === $expected) {
        echo "✅ {$input}";
    } else {
        echo "🔴 {$input}";
        echo "Expected <b>{$expected}</b>, but got <b>{$result}</b>";
    }
    echo '<hr>';
}
