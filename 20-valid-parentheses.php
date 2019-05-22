<?php

// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 97.03% of PHP online submissions
// for Valid Parentheses.
// Memory Usage: 15.1 MB, less than 45.08% of PHP online submissions
// for Valid Parentheses.

class Solution
{

    /**
     * @param String $s
     * @return Boolean
     */
    function isValid($s)
    {
        $map = [
            ')' => '(',
            '}' => '{',
            ']' => '[',
        ];
        if (0 === strlen($s)) return true;
        if (1 === strlen($s) % 2) return false;
        $stack = [];
        array_push($stack, $s[0]);
        $i = 1;
        while (count($stack)) {
            $curr = $s[$i];
            if (in_array($curr, ['(', '{', '['])) {
                array_push($stack, $curr);
            } else {
                if (array_pop($stack) !== $map[$curr]) return false;
            }
            $i++;
        }
        return true;
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
