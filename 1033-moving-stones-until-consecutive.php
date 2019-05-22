<?php

// 1033. Moving Stones Until Consecutive
// https://leetcode.com/problems/moving-stones-until-consecutive/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 0 ms, faster than 100.00% of PHP online submissions
// for Moving Stones Until Consecutive.
// Memory Usage: 14.9 MB, less than 100.00% of PHP online submissions
// for Moving Stones Until Consecutive.

// class Solution
// {

//     /**
//      * @param Integer $a
//      * @param Integer $b
//      * @param Integer $c
//      * @return Integer[]
//      */
//     function numMovesStones($a, $b, $c)
//     {
//         $arr = array($a, $b, $c);
//         sort($arr);
//         list($min, $mid, $max) = $arr;

//         $maxMoves = $max - $min - 2;

//         $minMoves = 0;
//         if (2 === $mid - $min) {
//             $max = $mid;
//             $mid--;
//             $minMoves++;
//         }
//         if (2 === $max - $mid) {
//             $min = $mid;
//             $mid++;
//             $minMoves++;
//         }
//         if (1 < $mid - $min) $minMoves++;
//         if (1 < $max - $mid) $minMoves++;

//         return [$minMoves, $maxMoves];
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 100.00% of PHP online submissions
// for Moving Stones Until Consecutive.
// Memory Usage: 14.9 MB, less than 100.00% of PHP online submissions
// for Moving Stones Until Consecutive.

// Get the distances between the stones to avoid sorting
class Solution
{

    /**
     * @param Integer $a
     * @param Integer $b
     * @param Integer $c
     * @return Integer[]
     */
    function numMovesStones($a, $b, $c)
    {
        list($x, $y, $z) = [abs($a - $b), abs($b - $c), abs($c - $a)];
        list($min, $max) = [min($x, $y, $z), max($x, $y, $z)];
        if (2 === $max) return [0, 0];
        return [$min < 3 ? 1 : 2, $max - 2];
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'name' => 'a=1, b=2, c=5]',
        'input' => ['a' => 1, 'b' => 2, 'c' => 5],
        'expected' => [1, 2],
        // Explanation: Move the stone from 5 to 3, or move the stone from 5 to 4 to 3.
        //       | 1 | 2 | 3 | 4 | 5 |
        // init  | a | b | - | - | c |
        // min 1 | a | b | c | - | - |
        // max 1 | a | b | - | c | - |
        // max 2 | a | b | c | - | - |
    ],
    [
        'name' => 'a=4, b=3, c=2',
        'input' => ['a' => 4, 'b' => 3, 'c' => 2],
        'expected' => [0, 0],
        // Explanation: We cannot make any moves.
        //     | 1 | 2 | 3 | 4 |
        // init | - | c | b | a |
    ],
    [
        'name' => 'a=3, b=5, c=1',
        'input' => ['a' => 3, 'b' => 5, 'c' => 1],
        'expected' => [1, 2],
        // Explanation: Move the stone from 1 to 4; or move the stone from 1 to 2 to 4.
        //       | 1 | 2 | 3 | 4 | 5 |
        // init  | c | - | a | - | b |
        // min 1 | - | - | a | c | b |
        // max 1 | - | c | a | - | b |
        // max 2 | - | c | a | b | - |
    ],
    [
        'name' => 'a=1, b=3, c=6',
        'input' => ['a' => 1, 'b' => 3, 'c' => 6],
        'expected' => [1, 3],
        //       | 1 | 2 | 3 | 4 | 5 | 6 |
        // init  | a | - | b | - | - | c |
        // min 1 | a | c | b | - | - | - |
        // max 1 | - | a | b | - | - | c |
        // max 2 | - | a | b | - | c | - |
        // max 3 | - | a | b | c | - | - |
    ],
    [
        'name' => 'a=2, b=4, c=1',
        'input' => ['a' => 2, 'b' => 4, 'c' => 1],
        'expected' => [1, 1],
        //       | 1 | 2 | 3 | 4 |
        // init  | c | a | - | b |
        // min 1 | - | a | c | b |
        // max 1 | c | a | b | - |
    ],
    [
        'name' => 'a=1, b=4, c=5',
        'input' => ['a' => 1, 'b' => 4, 'c' => 5],
        'expected' => [1, 2],
        // Explanation: Move the stone from 1 to 4; or move the stone from 1 to 2 to 4.
        //       | 1 | 2 | 3 | 4 | 5 |
        // init  | a | - | - | b | c |
        // min 1 | - | - | a | b | c |
        // max 1 | - | a | - | b | c |
        // max 2 | - | - | a | b | c |
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    extract($input);
    $output = $s->numMovesStones($a, $b, $c);
    if ($expected === $output) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo 'Expected the below';
        echo '<pre>', print_r($expected, true), '</pre>';
        echo 'But got the below instead';
        echo '<pre>', print_r($output, true), '</pre>';
    }
    echo '<hr>';
}
