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
     *
     * Orthogonal directions have different values
     * i.e. x-axis = 1 and y-axis = 2
     * Opposite directions sum to zero
     * i.e. right = +1 and left = -1
     *      up = +2 and down = -2
     *
     * Arrays are used to handle the calculations rather than
     * logic structures like if or switch
     */
    function isRobotBounded($instructions)
    {
        // 0 = Right, 1 = Up, 2 = Left, 3 = Down
        $direction = 0;

        // Right = +1, Up = +2, Left = -1, Down = -2
        $position = 0;

        // Rotate left, Rotate right
        $directionOptions = ['L' => 1, 'R' => -1];

        // Right, Up, Left, Down
        $positionOptions = [1, 2, -1, -2];

        for ($i = 0; $i < strlen($instructions); $i++) {
            $instruction = $instructions[$i];

            if ('L' === $instruction || 'R' === $instruction) {
                // Update direction
                $direction += $directionOptions[$instruction];

                // Handle wrapping around
                if ($direction < 0) {
                    // Handle rotations below 0 gradians
                    $direction = 4 + $direction;
                } else if (3 < $direction) {
                    // Handle rotations over 400 gradians
                    $direction = $direction % 4;
                }

                // Nothing else to do; loop again
                continue;
            }

            // Update position based on direction
            $position += $positionOptions[$direction];
        }

        // If back at the same position started from
        // Or if direction differs from started from
        // (Thus circling back eventually)
        return 0 === $position || 0 !== $direction;
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
