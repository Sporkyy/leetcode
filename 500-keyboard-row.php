<?php

// 500. Keyboard Row
// https://leetcode.com/problems/keyboard-row/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 61.90% of PHP online submissions
// for Keyboard Row.
// Memory Usage: 14.6 MB, less than 100.00% of PHP online submissions
// for Keyboard Row.

// class Solution
// {

//     /**
//      * @param String[] $words
//      * @return String[]
//      */
//     function findWords($words)
//     {
//         $rowMasks = [2232170, 39698560, 25178133];
//         return array_filter($words, function ($word) use ($rowMasks) {
//             $word = strtolower($word);
//             $wordMask = '00000000000000000000000000';
//             for ($i = 0; $i < strlen($word); $i++) {
//                 $wordMask[ord($word[$i]) - 97] = '1';
//             }
//             $wordMask = bindec($wordMask);
//             foreach ($rowMasks as $rowMask) {
//                 if (!($wordMask & ~$rowMask)) return true;
//             }
//             return false;
//         });
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 61.90% of PHP online submissions
// for Keyboard Row.
// Memory Usage: 14.8 MB, less than 66.67% of PHP online submissions
// for Keyboard Row.
// class Solution
// {

//     /**
//      * @param String[] $words
//      * @return String[]
//      */
//     function findWords($words)
//     {
//         return array_filter($words, function ($word) {
//             $word = strtolower($word);
//             $bits = '00000000000000000000000000';
//             for ($i = 0; $i < strlen($word); $i++) $bits[ord($word[$i]) - 97] = '1';
//             $bits = bindec($bits);
//             return !($bits & -2232171 && $bits & -39698561 && $bits & -25178134);
//         });
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 61.90% of PHP online submissions
// for Keyboard Row.
// Memory Usage: 14.9 MB, less than 41.67% of PHP online submissions
// for Keyboard Row.

class Solution
{

    /**
     * @param String[] $words
     * @return String[]
     */
    function findWords($words)
    {
        return array_filter($words, function ($word) {
            $word = strtolower($word);
            $prevRow = null;
            foreach (str_split($word) as $c) {
                $row = [
                    'q' => 0,
                    'w' => 0,
                    'e' => 0,
                    'r' => 0,
                    't' => 0,
                    'y' => 0,
                    'u' => 0,
                    'i' => 0,
                    'o' => 0,
                    'p' => 0,
                    'a' => 1,
                    's' => 1,
                    'd' => 1,
                    'f' => 1,
                    'g' => 1,
                    'h' => 1,
                    'j' => 1,
                    'k' => 1,
                    'l' => 1,
                    'z' => 2,
                    'x' => 2,
                    'c' => 2,
                    'v' => 2,
                    'b' => 2,
                    'n' => 2,
                    'm' => 2,
                ][$c];
                if (null !== $prevRow && $prevRow !== $row) return false;
                $prevRow = $row;
            }
            return true;
        });
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// $row1 = 'qwertyuiop';
// $row1Mask = '00000000000000000000000000';
// for ($i = 0; $i < strlen($row1); $i++) {
//     $row1Mask[ord($row1[$i]) - 97] = '1';
// }
// echo '<pre>', $row1Mask, '</pre>';
// echo '<pre>', ~bindec($row1Mask), '</pre>';
// $row2 = 'asdfghjkl';
// $row2Mask = '00000000000000000000000000';
// for ($i = 0; $i < strlen($row2); $i++) {
//     $row2Mask[ord($row2[$i]) - 97] = '1';
// }
// echo '<pre>', $row2Mask, '</pre>';
// echo '<pre>', ~bindec($row2Mask), '</pre>';
// $row3 = 'zxcvbnm';
// $row3Mask = '00000000000000000000000000';
// for ($i = 0; $i < strlen($row3); $i++) {
//     $row3Mask[ord($row3[$i]) - 97] = '1';
// }
// echo '<pre>', $row3Mask, '</pre>';
// echo '<pre>', ~bindec($row3Mask), '</pre>';

$tests = [
    [
        'input' => ['Hello', 'Alaska', 'Dad', 'Peace'],
        'expected' => ['Alaska', 'Dad'],
    ],
    [
        'input' => ['abdfs', 'cccd', 'a', 'qwwewm'],
        'expected' => ['a'],
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $name = json_encode($input);
    $result = $s->findWords($input);
    if (array_values($expected) === array_values($result)) {
        echo "✅ ${name}<br>";
    } else {
        echo "🔴 ${name}<br>";
        echo "<i>Expected the below</i>";
        echo '<pre>', print_r($expected, true), '</pre>';
        echo "<i>But got the below</i>";
        echo '<pre>', print_r($result, true), '</pre>';
    }
    echo '<hr>';
}
