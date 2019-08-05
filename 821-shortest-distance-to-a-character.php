<?php

// 821. Shortest Distance to a Character
// https://leetcode.com/problems/shortest-distance-to-a-character/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 100.00% of PHP online submissions
// for Shortest Distance to a Character.
// Memory Usage: 14.9 MB, less than 100.00% of PHP online submissions
// for Shortest Distance to a Character.

// class Solution
// {

//     /**
//      * @param String $S
//      * @param String $C
//      * @return Integer[]
//      */
//     function shortestToChar($S, $C)
//     {
//         $result = array_fill(0, strlen($S), INF);
//         for ($i = 0; $i < strlen($S); $i++) {
//             if ($S[$i] === $C) {
//                 $result[$i] = 0;
//                 for ($j = 1; 0 <= $i - $j && $C !== $S[$i - $j] && $j < $result[$i - $j]; $j++)
//                     $result[$i - $j] = $j;
//                 for ($j = 1; $i + $j < strlen($S) && $C !== $S[$i + $j] && $j < $result[$i + $j]; $j++)
//                     $result[$i + $j] = $j;
//             }
//         }
//         return $result;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 100.00% of PHP online submissions
// for Shortest Distance to a Character.
// Memory Usage: 14.9 MB, less than 100.00% of PHP online submissions
// for Shortest Distance to a Character.

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
class Solution
{

    /**
     * @param String $S
     * @param String $C
     * @return Integer[]
     */
    function shortestToChar($S, $C)
    {
        $result = [];

        // $forwardCounter starts high to ensure overwrites
        for ($i = 0, $forwardCounter = INF; $i < strlen($S); $i++) {
            // If the sought character is found
            if ($S[$i] === $C) {
                // Fill current
                $result[$i] = 0;
                // Fill backwards; overwrite where needed
                for ($j = 1; $j <= $i; $j++) {
                    // But don't overwrite closer results
                    if ($result[$i - $j] < $j) break;
                    $result[$i - $j] = $j;
                }
                // Reset $forwardCounter
                $forwardCounter = 1;
            } else {
                // Otherwise result is just current
                $result[$i] = $forwardCounter++;
            }
        }

        return $result;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => ['S' => 'a', 'C' => 'a'],
        'expected' => [0],
    ],
    [
        'input' => ['S' => 'ab', 'C' => 'a'],
        'expected' => [0, 1],
    ],
    [
        'input' => ['S' => 'ba', 'C' => 'a'],
        'expected' => [1, 0],
    ],
    [
        'input' => ['S' => 'aba', 'C' => 'a'],
        'expected' => [0, 1, 0],
    ],
    [
        'input' => ['S' => 'loveleetcode', 'C' => 'e'],
        'expected' => [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0],
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    extract($input);
    $result = $s->shortestToChar($S, $C);
    $name = "S = {$S}, C = {$C}";
    if (json_encode($result) === json_encode($expected)) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo '<i>Expected the below</i><br>';
        echo '<code>', implode(', ', $expected), '</code><br>';
        echo '<i>But got</i><br>';
        echo '<code>', implode(', ', $result), '</code>';
    }
    echo '<hr>';
};
