<?php

// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 16 ms, faster than 99.55% of PHP online submissions
// for Palindrome Number.
// Memory Usage: 14.9 MB, less than 32.64% of PHP online submissions
// for Palindrome Number.

// class Solution
// {

//     /**
//      * @param Integer $x
//      * @return Boolean
//      */
//     function isPalindrome($x)
//     {
//         return strrev($x) === (string)$x;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 36 ms, faster than 80.98% of PHP online submissions
// for Palindrome Number.
// Memory Usage: 14.9 MB, less than 31.94% of PHP online submissions
// for Palindrome Number.

// class Solution
// {

//     /**
//      * @param Integer $x
//      * @return Boolean
//      */
//     function isPalindrome($x)
//     {
//         if ($x < 0 || ($x !== 0 && 0 === $x % 10)) return false;
//         $revX = 0;
//         while ($revX < $x) {
//             $revX = $revX * 10 + ($x % 10);
//             $x = intval($x / 10);
//         }
//         return $x === $revX || $x === intval($revX / 10);
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 36 ms, faster than 80.98% of PHP online submissions
// for Palindrome Number.
// Memory Usage: 16.6 MB, less than 5.21% of PHP online submissions
// for Palindrome Number.

// class Solution
// {

//     /**
//      * @param Integer $x
//      * @return Boolean
//      */
//     function isPalindrome($x)
//     {
//         if ($r = 0 === $x % 10 && $x !== 0 || $x < 0) return false;
//         while ($r < $x) {
//             $r = $r * 10 + $x % 10;
//             $x = intval($x / 10);
//         }
//         return $x === $r || $x === intval($r / 10);
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 36 ms, faster than 80.98% of PHP online submissions
// for Palindrome Number.
// Memory Usage: 14.9 MB, less than 27.78% of PHP online submissions
// for Palindrome Number.

class Solution
{

    /**
     * @param Integer $x
     * @return Boolean
     */
    function isPalindrome($x)
    {
        if ($r = 0 === $x % 10 && 0 !== $x || $x < 0) return false;
        while ($r < $x) list($r, $x) = [$r * 10 + $x % 10, (int)($x / 10)];
        return $x === $r || (int)($r / 10) === $x;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => 121,
        'expected' => true,
    ],
    [
        'input' => -121,
        'expected' => false,
    ],
    [
        'input' => 10,
        'expected' => false,
    ],
    [
        'input' => 1000021,
        'expected' => false,
    ],
    [
        'input' => 11,
        'expected' => true,
    ],
    [
        'input' => 111,
        'expected' => true,
    ],
    [
        'input' => 1239321,
        'expected' => true,
    ],
    [
        'input' => 1001,
        'expected' => true,
    ],
    [
        'input' => -1,
        'expected' => false,
    ],
    [
        'input' => 0,
        'expected' => true,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->isPalindrome($input);
    if ($output === $expected) {
        echo "✅ {$input}<br>";
    } else {
        echo "🔴 {$input}<br>";
        echo '<i>Expected <b>',
            var_export($expected),
            '</b>, ',
            'but got <b>',
            var_export($output),
            '</b></i>';
    }
    echo '<hr>';
}
