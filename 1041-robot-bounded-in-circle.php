<?php
// 1041. Robot Bounded In Circle
// https://leetcode.com/problems/robot-bounded-in-circle/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 4 ms, faster than 100.00% of PHP online submissions
// for Robot Bounded In Circle.
// Memory Usage: 14.7 MB, less than 100.00% of PHP online submission
// for Robot Bounded In Circle.

class Solution
{
    /**
     * @param String $instructions
     * @return Boolean
     */
    function isRobotBounded($instructions)
    {
        $direction = 0;
        $position = 0;

        for ($i = 0; $i < strlen($instructions); $i++) {
            switch ($instructions[$i]) {
                case 'G':
                    $position += [1, 2, -1, -2][$direction];
                    break;
                case 'L':
                    $direction = ($direction + 1) % 4;
                    break;
                case 'R':
                    $direction = ($direction + 3) % 4;
                    break;
            }
        }

        return 0 === $position || 0 !== $direction;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'name' => 'GGLLGG',
        'input' => 'GGLLGG',
        'expected' => true,
    ],
    [
        'name' => 'GG',
        'input' => 'GG',
        'expected' => false,
    ],
    [
        'name' => 'GL',
        'input' => 'GL',
        'expected' => true,
    ],
    [
        'name' => 'LLL',
        'input' => 'LLL',
        'expected' => true,
    ],
    [
        'name' => 'LLGRL',
        'input' => 'LLGRL',
        'expected' => true,
    ],
    [
        'name' => 'GLGLGGLGL',
        'input' => 'GLGLGGLGL',
        'expected' => false,
    ],
    [
        'name' => 'LLLRLLLRLLGLLGGRGLLLGGLRRRRRGLRLRLRLGGRGRGRLLLLLLGLLRLGLGLRLGGGRR',
        'input' => 'LLLRLLLRLLGLLGGRGLLLGGLRRRRRGLRLRLRLGGRGRGRLLLLLLGLLRLGLGLRLGGGRR',
        'expected' => false,
    ],
    [
        'name' => 'RRLRRRRRRRRLRRRLLRLL',
        'input' => 'RRLRRRRRRRRLRRRLLRLL',
        'expected' => true,
    ],
    [
        'name' => 'LRG',
        'input' => 'LRG',
        'expected' => false,
    ],
    // ➡➡⬇⬇⬇⬅⬅⬅⬆⬆⬆➡
    [
        'name' => 'GGRGGRGGRGGR',
        'input' => 'GGRGGRGGRGGR',
        'expected' => true,
    ],
    // ➡⬆➡⬆⬅⬅⬇
    [
        'name' => 'GLRLLGLL',
        'input' => 'GLRLLGLL',
        'expected' => true,
    ],
    [
        'name' => 'GRGL',
        'input' => 'GRGL',
        'expected' => false,
    ]
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->isRobotBounded($input);

    if ($expected === $output) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "Expected \"{$expected}\", but got \"{$output}\"<br>";
    }

    echo '<hr>';
}
