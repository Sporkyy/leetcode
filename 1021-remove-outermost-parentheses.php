<?php

// 1021. Remove Outermost Parentheses
// https://leetcode.com/problems/remove-outermost-parentheses/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 88.64% of PHP online submissions
// for Remove Outermost Parentheses.
// Memory Usage: 14.8 MB, less than 66.67% of PHP online submissions
// for Remove Outermost Parentheses.

// class Solution
// {

//     /**
//      * @param String $S
//      * @return String
//      */
//     function removeOuterParentheses($S)
//     {
//         $result = '';
//         for (list($i, $level) = [0, 0]; $i < strlen($S); $i++) {
//             $char = $S[$i];
//             if ('(' === $char) $level++;
//             if (1 < $level) $result .= $char;
//             if (')' === $char) $level--;
//         }
//         return $result;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 88.64% of PHP online submissions
// for Remove Outermost Parentheses.
// Memory Usage: 14.9 MB, less than 33.33% of PHP online submissions
// for Remove Outermost Parentheses.

// class Solution
// {

//     /**
//      * @param String $S
//      * @return String
//      */
//     function removeOuterParentheses($S)
//     {
//         $result = '';
//         for (list($i, $level) = [0, 0]; $i < strlen($S); $i++) {
//             if ('(' === $S[$i]) $level++;
//             if (1 < $level) $result .= $S[$i];
//             if (')' === $S[$i]) $level--;
//         }
//         return $result;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 88.64% of PHP online submissions
// for Remove Outermost Parentheses.
// Memory Usage: 14.5 MB, less than 100.00% of PHP online submissions
// for Remove Outermost Parentheses.

class Solution
{

    /**
     * @param String $S
     * @return String
     */
    function removeOuterParentheses($S)
    {
        $result = '';
        // $t = tail, $h = head, $d = depth
        for (list($t, $h, $d) = [0, 1, 1]; $h < strlen($S); $h++) {
            if ($S[$h] === '(') $d++;
            else if ($S[$h] === ')') $d--;
            if (0 === $d) {
                $result .= substr($S, $t + 1, $h - $t - 1);
                $t = $h + 1;
            }
        }
        return $result;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => '(()())(())',
        'expected' => '()()()',
    ],

    [
        'input' => '(()())(())(()(()))',
        'expected' => '()()()()(())',
    ],

    [
        'input' => '()()',
        'expected' => '',
    ],

    [
        'input' => '()',
        'expected' => '',
    ],

    [
        'input' => '((((()))))',
        'expected' => '(((())))',
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $result = $s->removeOuterParentheses($input);
    if ($result === $expected) {
        echo "✅ {$input}<br>";
    } else {
        echo "🔴 {$input}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$result}</b></i><br>";
    }
    echo '<hr>';
}
