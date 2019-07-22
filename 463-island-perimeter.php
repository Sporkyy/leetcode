<?php

// 463. Island Perimeter
// https://leetcode.com/problems/island-perimeter/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 180 ms, faster than 85.71% of PHP online submissions
// for Island Perimeter.
// Memory Usage: 17 MB, less than 100.00% of PHP online submissions
// for Island Perimeter.

// class Solution
// {

//     /**
//      * @param Integer[][] $grid
//      * @return Integer
//      */
//     function islandPerimeter($grid)
//     {
//         $perimiter = 0;
//         for ($r = 0; $r < count($grid); $r++) {
//             for ($c = 0; $c < count($grid[0]); $c++) {
//                 if (1 !== $grid[$r][$c]) continue;
//                 $edges = 2;
//                 if ($c < count($grid[0]) - 1) $edges -= $grid[$r][$c + 1];
//                 if ($r < count($grid) - 1) $edges -= $grid[$r + 1][$c];
//                 $perimiter += $edges;
//             }
//         }
//         return $perimiter * 2;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 184 ms, faster than 85.71% of PHP online submissions
// for Island Perimeter.
// Memory Usage: 17 MB, less than 100.00% of PHP online submissions
// for Island Perimeter.

class Solution
{

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function islandPerimeter($grid)
    {
        $perimiter = 0;
        for ($r = 0; $r < count($grid); $r++) {
            for ($c = 0; $c < count($grid[0]); $c++) {
                if (0 === $grid[$r][$c]) continue;
                if (count($grid) - 1 === $r || 0 === $grid[$r + 1][$c]) $perimiter++;
                if (count($grid[0]) - 1 === $c || 0 === $grid[$r][$c + 1]) $perimiter++;
            }
        }
        return $perimiter * 2;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    // +---+===+---+---+
    // | 0 [ 1 ] 0 | 0 |
    // +===+---+===+---+
    // [ 1 | 1 | 1 ] 0 |
    // +===+---+===+---+
    // | 0 [ 1 ] 0 | 0 |
    // +===+---+---+---+
    // [ 1 | 1 ] 0 | 0 |
    // +===+===+---+---+

    // +===+---+---+---+
    // [ 1 ] 0 | 0 | 0 |
    // +---+===+===+---+
    // [ 1 | 1 | 1 ] 0 |
    // +---+===+===+---+
    // [ 1 ] 0 | 0 | 0 |
    // +---+===+---+---+
    // [ 1 | 1 ] 0 | 0 |
    // +===+===+---+---+

    [
        'input' => [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]],
        'expected' => 16,
    ],

    // +===+===+
    // [ 1 | 1 ]
    // +---+---+
    // [ 1 | 1 ]
    // +===+===+

    [
        'input' => [[1, 1], [1, 1]],
        'expected' => 8,
    ],

    // +===+
    // [ 1 ]
    // +---+
    // [ 1 ]
    // +===+

    [
        'input' => [[1], [1]],
        'expected' => 6,
    ],

    // +===+
    // [ 1 ]
    // +---+
    // [ 1 ]
    // +---+
    // [ 1 ]
    // +===+

    [
        'input' => [[1], [1], [1]],
        'expected' => 8,
    ],

    // +===+
    // [ 1 ]
    // +===+
    // [ 0 ]
    // +---+

    [
        'input' => [[1], [0]],
        'expected' => 4,
    ],

    // +---+===+---+
    // | 0 [ 1 ] 0 |
    // |===+---+===|
    // [ 1 | 1 | 1 ]
    // |===+---+===|
    // | 0 [ 1 ] 0 |
    // +---+===+---+

    [
        'input' => [[0, 1, 0], [1, 1, 1], [0, 1, 0]],
        'expected' => 12,
    ],

    // +---+===+===+
    // | 0 [ 1 | 1 ]
    // |===+---+===|
    // [ 1 | 1 ] 0 |
    // +===+===+---+

    [
        'input' => [[0, 1, 1], [1, 1, 0]],
        'expected' => 10,
    ],

    // +===+===+===+
    // [ 1 | 1 | 1 ]
    // |---+===+---|
    // [ 1 ] 0 [ 1 ]
    // +===+---+===+

    [
        'input' => [[1, 1, 1], [1, 0, 1]],
        'expected' => 12
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $result = $s->islandPerimeter($input);
    $name = json_encode($input);
    if ($result === $expected) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$result}</b></i><br>";
    }
    echo '<hr>';
}
