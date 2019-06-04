<?php

// 1071. Greatest Common Divisor of Strings
// https://leetcode.com/problems/greatest-common-divisor-of-strings/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 12 ms, faster than 100.00% of PHP online submissions
// for Greatest Common Divisor of Strings.
// Memory Usage: 14.7 MB, less than 100.00% of PHP online submissions
// for Greatest Common Divisor of Strings.

// class Solution
// {

//     /**
//      * @param String $str1
//      * @param String $str2
//      * @return String
//      */
//     function gcdOfStrings($str1, $str2)
//     {
//         if (strlen($str2) < strlen($str1)) list($str1, $str2) = [$str2, $str1];
//         if (strlen($str1) < strlen($str2)) $str2 = substr($str2, strlen($str1));
//         if (strlen($str2) < strlen($str1)) list($str1, $str2) = [$str2, $str1];
//         $test = '';
//         $gcd = '';
//         for ($i = 0; $i < strlen($str1); $i++) {
//             $test .= $str1[$i];
//             if (
//                 0 === strlen(str_replace($test, '', $str1))
//                 && 0 === strlen(str_replace($test, '', $str2))
//             ) {
//                 $gcd = $test;
//             }
//         }
//         return $gcd;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 4 ms, faster than 100.00% of PHP online submissions
// for Greatest Common Divisor of Strings.
// Memory Usage: 14.8 MB, less than 100.00% of PHP online submissions
// for Greatest Common Divisor of Strings.

class Solution
{

    function gcd($a, $b)
    {
        if (0 === $b) return $a;
        return $this->gcd($b, $a % $b);
    }

    /**
     * @param String $str1
     * @param String $str2
     * @return String
     */
    function gcdOfStrings($str1, $str2)
    {
        $gcd = $this->gcd(strlen($str1), strlen($str2));
        $combo = $str1 . $str2;
        $gcdString = substr($combo, 0, $gcd);
        for ($i = $gcd; $i < strlen($combo); $i += $gcd) {
            if ($gcdString !== substr($combo, $i, $gcd)) return '';
        }
        return $gcdString;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'name' => 'ABCABC, ABC',
        'input' => [
            'str1' => 'ABCABC',
            'str2' => 'ABC',
        ],
        'expected' => 'ABC'
    ],
    [
        'name' => 'ABABAB, ABAB',
        'input' => [
            'str1' => 'ABABAB',
            'str2' => 'ABAB',
        ],
        'expected' => 'AB'
    ],
    [
        'name' => 'ABABAB, ABABC',
        'input' => [
            'str1' => 'ABABAB',
            'str2' => 'ABABC',
        ],
        'expected' => ''
    ],
    [
        'name' => 'AB, AB',
        'input' => [
            'str1' => 'AB',
            'str2' => 'AB',
        ],
        'expected' => 'AB'
    ],
    [
        'name' => 'ABABABABABAB, ABABABABABAB',
        'input' => [
            'str1' => 'ABABABABABAB',
            'str2' => 'ABABABABABAB',
        ],
        'expected' => 'ABABABABABAB'
    ],
    [
        'name' => 'LEET, CODE',
        'input' => [
            'str1' => 'LEET',
            'str2' => 'CODE',
        ],
        'expected' => ''
    ]
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    extract($input);
    $output = $s->gcdOfStrings($str1, $str2);
    if ($expected === $output) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "Expected \"{$expected}\" but got \"{$output}\"";
    }
    echo '<br>';
}
