<?php

// 728. Self Dividing Numbers
// https://leetcode.com/problems/self-dividing-numbers/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 100.00% of PHP online submissions
// for Self Dividing Numbers.
// Memory Usage: 14.8 MB, less than 100.00% of PHP online submissions
// for Self Dividing Numbers.

class Solution
{

    /**
     * @param Integer $left
     * @param Integer $right
     * @return Integer[]
     */
    function selfDividingNumbers($left, $right)
    {
        $result = [];
        do {
            $num = $left;
            do {
                $digit = $num % 10;
                if (0 === $digit || 0 !== $left % $digit) continue 2;
                $num = intdiv($num, 10);
            } while (0 < $num);
            array_push($result, $left);
        } while ($left++ < $right);
        return $result;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [
            'left' => 1,
            'right' => 22,
        ],
        'expected' => [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22],
    ],

    [
        'input' => [
            'left' => 1,
            'right' => 1,
        ],
        'expected' => [1],
    ],

    [
        'input' => [
            'left' => 127,
            'right' => 129,
        ],
        'expected' => [128],
    ],

    [
        'input' => [
            'left' => 1,
            'right' => 1000
        ],
        'expected' => [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22, 24, 33, 36, 44, 48, 55, 66, 77, 88, 99, 111, 112, 115, 122, 124, 126, 128, 132, 135, 144, 155, 162, 168, 175, 184, 212, 216, 222, 224, 244, 248, 264, 288, 312, 315, 324, 333, 336, 366, 384, 396, 412, 424, 432, 444, 448, 488, 515, 555, 612, 624, 636, 648, 666, 672, 728, 735, 777, 784, 816, 824, 848, 864, 888, 936, 999]
    ]
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    extract($input);
    $output = $s->selfDividingNumbers($left, $right);
    $name = "L = {$left}, R = {$right}";
    $encodedOutput = json_encode($output);
    $encodedExpected = json_encode($expected);
    if ($expected === $output) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "<pre>{$encodedOutput}</pre> is what I got<br>";
        echo "<pre>{$encodedExpected}</pre> But that is what I expected<br>";
    }
    echo '<br>';
}
