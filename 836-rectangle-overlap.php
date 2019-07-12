<?php

// 836. Rectangle Overlap
// https://leetcode.com/problems/rectangle-overlap/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 8 ms, faster than 71.43% of PHP online submissions
// for Rectangle Overlap.
// Memory Usage: 14.7 MB, less than 50.00% of PHP online submissions
// for Rectangle Overlap.

class Solution
{

    /**
     * @param Integer[] $rec1
     * @param Integer[] $rec2
     * @return Boolean
     */
    function isRectangleOverlap($rec1, $rec2)
    {
        list($aX1, $aY1, $aX2, $aY2) = $rec1;
        list($bX1, $bY1, $bX2, $bY2) = $rec2;
        list($aT, $aR, $aB, $aL, $bT, $bR, $bB, $bL) = [
            min($aY1, $aY2),
            max($aX1, $aX2),
            max($aY1, $aY2),
            min($aX1, $aX2),
            min($bY1, $bY2),
            max($bX1, $bX2),
            max($bY1, $bY2),
            min($bX1, $bX2),
        ];
        if (($bT <= $aT && $bR <= $aR) || ($bL <= $aL && $bB <= $aB))
            list($aT, $aR, $aB, $aL, $bT, $bR, $bB, $bL) = [$bT, $bR, $bB, $bL, $aT, $aR, $aB, $aL];
        return !($aR <= $bL || $aB <= $bT);
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [

    [
        'input' => [
            'rec1' => [0, 0, 2, 2],
            'rec2' => [1, 1, 3, 3],
        ],
        'expected' => true,
    ],

    [
        'input' => [
            'rec1' => [1, 1, -1, -1],
            'rec2' => [2, 2, 0, 0],
        ],
        'expected' => true,
    ],

    [
        'input' => [
            'rec1' => [0, 0, 1, 1],
            'rec2' => [1, 0, 2, 1],
        ],
        'expected' => false,
    ],

    [
        'input' => [
            'rec1' => [-4, 3, -1, 5],
            'rec2' => [-4, -5, -2, -2],
        ],
        'expected' => false,
    ],

    [
        'input' => [
            'rec1' => [0, 0, 1, 1],
            'rec2' => [2, 2, 3, 3],
        ],
        'expected' => false,
    ],

    [
        'input' => [
            'rec1' => [-5, 8, 0, 8],
            'rec2' => [-5, 4, 5, 5],
        ],
        'expected' => false,
    ],

    [
        'input' => [
            'rec1' => [7, 8, 13, 15],
            'rec2' => [10, 8, 12, 20],
        ],
        'expected' => true,
    ],

    [
        'input' => [
            'rec1' => [-9, 6, -3, 10],
            'rec2' => [-8, -10, -5, -4],
        ],
        'expected' => false,
    ],

    [
        'input' => [
            'rec1' => [-687153884, -854669644, -368882013, -788694078],
            'rec2' => [540420176, -909203694, 655002739, -577226067],
        ],
        'expected' => false, // Maybe
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    extract($input);
    $output = $s->isRectangleOverlap($rec1, $rec2);
    $name = implode(', ', $rec1) . ' | ' . implode(', ', $rec2);
    if ($expected === $output) {
        echo '✅ ', $name, '<br>';
    } else {
        echo '🔴 ', $name, '<br>';
        echo "<i>Expected <b>{$expected}</b>, but got <b>{$output}</b></i>";
    }
    echo '<hr>';
}
