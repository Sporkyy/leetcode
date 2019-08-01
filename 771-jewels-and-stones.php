<?php

// 771. Jewels and Stones
// https://leetcode.com/problems/jewels-and-stones/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 4 ms, faster than 91.39% of PHP online submissions
// for Jewels and Stones.
// Memory Usage: 14.7 MB, less than 93.55% of PHP online submissions
// for Jewels and Stones.

// class Solution
// {

//     /**
//      * @param String $J
//      * @param String $S
//      * @return Integer
//      */
//     function numJewelsInStones($J, $S)
//     {
//         $i = strlen($S);
//         $count = 0;
//         while ($i--) if (false !== strpos($J, $S[$i])) $count++;
//         return $count;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 4 ms, faster than 91.39% of PHP online submissions
// for Jewels and Stones.
// Memory Usage: 14.7 MB, less than 93.55% of PHP online submissions
// for Jewels and Stones.

class Solution
{

    /**
     * @param String $J
     * @param String $S
     * @return Integer
     */
    function numJewelsInStones($J, $S)
    {
        $a = array_fill(65, 58, 0);
        for ($i = 0; $i < strlen($S); $i++) $a[ord($S[$i])]++;
        $result = 0;
        for ($i = 0; $i < strlen($J); $i++) $result += $a[ord($J[$i])];
        return $result;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [
            'J' => 'aA',
            'S' => 'aAAbbbb',
        ],
        'expected' => 3,
    ],

    [
        'input' => [
            'J' => 'z',
            'S' => 'ZZ',
        ],
        'expected' => 0,
    ],

    [
        'input' => [
            'J' => '',
            'S' => 'a',
        ],
        'expected' => 0,
    ],

    [
        'input' => [
            'J' => 'a',
            'S' => '',
        ],
        'expected' => 0,
    ],

    [
        'input' => [
            'J' => '',
            'S' => '',
        ],
        'expected' => 0,
    ],

    [
        'input' => [
            'J' => 'A',
            'S' => 'AAA',
        ],
        'expected' => 3,
    ],

    [
        'input' => [
            'J' => 'z',
            'S' => 'zzz',
        ],
        'expected' => 3,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    extract($input);
    $output = $s->numJewelsInStones($J, $S);
    $name = json_encode($input);
    if ($expected === $output) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$output}</b></i><br>";
    }
    echo '<hr>';
}
