<?php

// 500. Keyboard Row
// https://leetcode.com/problems/keyboard-row/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 61.90% of PHP online submissions
// for Keyboard Row.
// Memory Usage: 14.6 MB, less than 100.00% of PHP online submissions
// for Keyboard Row.

class Solution
{

    /**
     * @param String[] $words
     * @return String[]
     */
    function findWords($words)
    {
        $rowMasks = [2232170, 39698560, 25178133];
        return array_filter($words, function ($word) use ($rowMasks) {
            $word = strtolower($word);
            $wordMask = '00000000000000000000000000';
            for ($i = 0; $i < strlen($word); $i++) {
                $wordMask[ord($word[$i]) - 97] = '1';
            }
            $wordMask = bindec($wordMask);
            foreach ($rowMasks as $rowMask) {
                if (!($wordMask & ~$rowMask)) return true;
            }
            return false;
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
// echo '<pre>', bindec($row1Mask), '</pre>';
// $row2 = 'asdfghjkl';
// $row2Mask = '00000000000000000000000000';
// for ($i = 0; $i < strlen($row2); $i++) {
//     $row2Mask[ord($row2[$i]) - 97] = '1';
// }
// echo '<pre>', $row2Mask, '</pre>';
// echo '<pre>', bindec($row2Mask), '</pre>';
// $row3 = 'zxcvbnm';
// $row3Mask = '00000000000000000000000000';
// for ($i = 0; $i < strlen($row3); $i++) {
//     $row3Mask[ord($row3[$i]) - 97] = '1';
// }
// echo '<pre>', $row3Mask, '</pre>';
// echo '<pre>', bindec($row3Mask), '</pre>';

$tests = [[
    'input' => ['Hello', 'Alaska', 'Dad', 'Peace'],
    'expected' => ['Alaska', 'Dad'],
],];

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
