<?php

// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 97.03% of PHP online submissions
// for Valid Parentheses.
// Memory Usage: 15.1 MB, less than 45.08% of PHP online submissions
// for Valid Parentheses.

// class Solution
// {

//     /**
//      * @param String $s
//      * @return Boolean
//      */
//     function isValid($s)
//     {
//         $map = [
//             ')' => '(',
//             '}' => '{',
//             ']' => '[',
//         ];
//         if (0 === strlen($s)) return true;
//         if (1 === strlen($s) % 2) return false;
//         $stack = [];
//         array_push($stack, $s[0]);
//         $i = 1;
//         while (count($stack)) {
//             $curr = $s[$i];
//             if (in_array($curr, ['(', '{', '['])) {
//                 array_push($stack, $curr);
//             } else {
//                 if (array_pop($stack) !== $map[$curr]) return false;
//             }
//             $i++;
//         }
//         return true;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 0 ms, faster than 100.00% of PHP online submissions
// for Valid Parentheses.
// Memory Usage: 14.9 MB, less than 70.98% of PHP online submissions
// for Valid Parentheses.

// class Solution
// {

//     /**
//      * @param String $s
//      * @return Boolean
//      */
//     function isValid($s)
//     {
//         if (0 === strlen($s)) return true;
//         if (1 === strlen($s) % 2) return false;
//         $map = [
//             '(' => 1,
//             ')' => -1,
//             '{' => 2,
//             '}' => -2,
//             '[' => 3,
//             ']' => -3,
//         ];
//         $stack = [];
//         array_push($stack, $s[0]);
//         $i = 1;
//         while (count($stack)) {
//             $curr = $s[$i];
//             if (0 < $map[$curr]) {
//                 array_push($stack, $curr);
//             } else {
//                 if (0 !== $map[array_pop($stack)] + $map[$curr]) return false;
//             }
//             $i++;
//         }
//         return true;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 96.19% of PHP online submissions
// for Valid Parentheses.
// Memory Usage: 15 MB, less than 49.74% of PHP online submissions
// for Valid Parentheses.

class Solution
{

    const VALUES = [
        '(' => 1,
        ')' => -1,
        '{' => 2,
        '}' => -2,
        '[' => 3,
        ']' => -3
    ];

    /**
     * @param String $s
     * @return Boolean
     */
    function isValid($s)
    {
        $stack = [];
        for ($i = 0; $i < strlen($s); $i++) {
            $v = self::VALUES[$s[$i]];
            if (0 < $v) {
                array_push($stack, $v);
            } else {
                if (0 !== array_pop($stack) + $v) return false;
            }
        }
        return 0 === count($stack);
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'name' => '()',
        'input' => '()',
        'expected' => true
    ],
    [
        'name' => '()[]{}',
        'input' => '()[]{}',
        'expected' => true
    ],
    [
        'name' => '(]',
        'input' => '(]',
        'expected' => false
    ],
    [
        'name' => '([])',
        'input' => '([])',
        'expected' => true
    ],
    [
        'name' => '([)]',
        'input' => '([)]',
        'expected' => false
    ],
    [
        'name' => '{[]}',
        'input' => '{[]}',
        'expected' => true
    ],
    [
        'name' => 'empty string',
        'input' => '',
        'expected' => true
    ],
    [
        'name' => '({)',
        'input' => '({)',
        'expected' => false
    ],
    [
        'name' => '([{}]){[()]}',
        'input' => '([{}]){[()]}',
        'expected' => true
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->isValid($input);
    if ($expected === $output) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "Expected \"{$expected}\" but got \"{$output}\"<br>";
    }
    echo '<hr>';
}
