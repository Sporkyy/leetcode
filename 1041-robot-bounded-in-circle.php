<?php
// 1041. Robot Bounded In Circle
// https://leetcode.com/problems/robot-bounded-in-circle/

// Runtime: 8 ms, faster than 100.00% of PHP online submissions
// for Robot Bounded In Circle.
// Memory Usage: 14.9 MB, less than 100.00% of PHP online submissions
// for Robot Bounded In Circle.

class Solution
{
    /**
     * @param String $instructions
     * @return Boolean
     */
    function isRobotBounded($instructions)
    {
        $a = 0;
        $g = 0;

        for ($i = 0; $i < strlen($instructions); $i++) {
            $instruction = $instructions[$i];
            if ('L' === $instruction || 'R' === $instruction) {
                switch ($instruction) {
                    case 'L':
                        $g++;
                        break;
                    case 'R':
                        $g--;
                        break;
                }

                if ($g < 0) {
                    $g = 4 + $g;
                } else if (3 < $g) {
                    $g = $g % 4;
                }

                // $directions = ['➡', '⬆', '⬅', '⬇'];
                // echo $directions[$g], '<br>';

                continue;
            }

            switch ($g) {
                case 0:
                    $a += 1;
                    break;
                case 1:
                    $a += 2;
                    break;
                case 2:
                    $a -= 1;
                    break;
                case 3:
                    $a -= 2;
                    break;
            }
        }

        // echo '$a = ', $a, '<br>';
        // echo '$g = ', $g, '<br>';

        return 0 === $a || 0 !== $g;
    }
}

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
    $name = $test['name'];
    $input = $test['input'];
    $expected = $test['expected'];
    $output = $s->isRobotBounded($input);

    if ($expected === $output) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "Expected \"{$expected}\", but got \"{$output}\"<br>";
    }

    echo '<hr>';
}
