<?php

// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 94.74% of PHP online submissions
// for Longest Common Prefix.
// Memory Usage: 14.9 MB, less than 66.89% of PHP online submissions
// for Longest Common Prefix.

class Solution
{

    /**
     * @param String[] $strs
     * @return String
     */
    function longestCommonPrefix($strs)
    {
        if (!isset($strs[0])) return '';
        $lcp = '';
        for ($i = 0; $i < strlen($strs[0]); $i++) {
            $c = $strs[0][$i];
            for ($j = 0; $j < count($strs); $j++) {
                if (!isset($strs[$j][$i]) || $c !== $strs[$j][$i]) {
                    return $lcp;
                }
            }
            $lcp .= $c;
        }
        return $lcp;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => ['flower', 'flow', 'flight'],
        'expected' => 'fl',
    ],
    [
        'input' => ['dog', 'racecar', 'car'],
        'expected' => '',
    ],
    [
        'input' => ['wwwwwww', 'wwwwww', 'wwwww', 'wwww', 'www'],
        'expected' => 'www',
    ],
    [
        'input' => [],
        'expected' => '',
    ],
    [
        'input' => ['abca', 'abc'],
        'expected' => 'abc',
    ],
    [
        'input' => ['a'],
        'expected' => 'a',
    ],
    [
        'input' => ['', ''],
        'expected' => '',
    ],
    [
        'input' => ['c', 'c'],
        'expected' => 'c',
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->longestCommonPrefix($input);
    if ($expected === $output) {
        echo '✅ ', implode(', ', $input), '<br>';
    } else {
        echo '🔴 ', implode(', ', $input), '<br>';
        echo "Expected \"{$expected}\", but got \"{$output}\" <br>";
    }
    echo '<hr>';
}
