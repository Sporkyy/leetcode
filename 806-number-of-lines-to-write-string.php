<?php

// 806. Number of Lines To Write String
// https://leetcode.com/problems/number-of-lines-to-write-string/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// class Solution
// {

//     /**
//      * @param Integer[] $widths
//      * @param String $S
//      * @return Integer[]
//      */
//     function numberOfLines($widths, $S, $lines = [0])
//     {
//         for (
//             $i = 0, $w = 0;
//             $i < strlen($S), $w = $widths[ord(substr($S, $i, 1)) - 97];
//             $i++ && 100 < $lines[count($lines) - 1] + $w ? array_push($lines, 0) : 0
//         )
//             $lines[count($lines) - 1] += $w;
//         return [count($lines), $lines[count($lines) - 1]];
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 73.33% of PHP online submissions
// for Number of Lines To Write String.
// Memory Usage: 14.7 MB, less than 100.00% of PHP online submissions
// for Number of Lines To Write String.

// class Solution
// {

//     /**
//      * @param Integer[] $widths
//      * @param String $S
//      * @return Integer[]
//      */
//     function numberOfLines($widths, $S, $lines = [0])
//     {
//         for ($i = 0; $i < strlen($S); $i++) {
//             $w = $widths[ord(substr($S, $i, 1)) - 97];
//             if (100 < $lines[count($lines) - 1] + $w) array_push($lines, 0);
//             $lines[count($lines) - 1] += $w;
//         }
//         return [count($lines), $lines[count($lines) - 1]];
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 12 ms, faster than 26.67% of PHP online submissions
// for Number of Lines To Write String.
// Memory Usage: 14.7 MB, less than 100.00% of PHP online submissions
// for Number of Lines To Write String.

class Solution
{

    /**
     * @param Integer[] $widths
     * @param String $S
     * @return Integer[]
     */
    function numberOfLines($widths, $S)
    {
        list($lines, $cnt) = [1, 0];
        for ($i = 0; $i < strlen($S); $i++) {
            $w = $widths[ord(substr($S, $i, 1)) - 97];
            if (100 < $cnt + $w) list($lines, $cnt) = [$lines + 1, 0];
            $cnt += $w;
        }
        return [$lines, $cnt];
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [
            'widths' => [
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
            ],
            'S' => 'abcdefghijklmnopqrstuvwxyz',
        ],
        'expected' => [3, 60],
    ],
    [
        'input' => [
            'widths' => [
                4,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
            ],
            'S' => 'bbbcccdddaaa',
        ],
        'expected' => [2, 4],
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    extract($input);
    $result = $s->numberOfLines($widths, $S);
    $name = '<code>[' . implode(', ', $widths) . "]</code>; {$S}";
    if ($result === $expected) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo '<code>[' . implode(', ', $expected) . ']</code> <i>was expected</i><br>';
        echo '<code>[' . implode(', ', $result) . ']</code> <i>was gotten</i><br>';
    }
    echo '<hr>';
}
