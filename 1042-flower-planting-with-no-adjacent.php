<?php

// 1042. Flower Planting With No Adjacent
// https://leetcode.com/problems/flower-planting-with-no-adjacent/

// Runtime: 296 ms, faster than 100.00% of PHP online submissions
// for Flower Planting With No Adjacent.
// Memory Usage: 35.1 MB, less than 100.00% of PHP online submissions
// for Flower Planting With No Adjacent.

class Solution
{

    /**
     * @param Integer $N
     * @param Integer[][] $paths
     * @return Integer[]
     */
    function gardenNoAdj($N, $paths)
    {
        $gardens = [];

        for ($i = 0; $i < $N; $i++) {
            $gardens[] = [
                'flower' => '',
                'connectedGardens' => [],
            ];
        }

        foreach ($paths as $path) {
            $gardens[$path[0] - 1]['connectedGardens'][] = &$gardens[$path[1] - 1];
            $gardens[$path[1] - 1]['connectedGardens'][] = &$gardens[$path[0] - 1];
        }

        foreach ($gardens as &$garden) {
            $connectedFlowers = array_map(function ($g) {
                return $g['flower'];
            }, $garden['connectedGardens']);

            for ($i = 1; $i < 5; $i++) {
                if (!in_array($i, $connectedFlowers)) {
                    $garden['flower'] = $i;
                    break;
                }
            }
        }

        return array_map(function ($garden) {
            return $garden['flower'];
        }, $gardens);
    }
}

$tests = [
    [
        'name' => 'Example 1',
        'input' => [
            'N' => 3,
            'paths' => [[1, 2], [2, 3], [3, 1]],
        ],
        'expected' => [1, 2, 3],
    ],
    [
        'name' => 'Example 2',
        'input' => [
            'N' => 4,
            'paths' => [[1, 2], [3, 4]],
        ],
        'expected' => [1, 2, 1, 2],
    ],
    [
        'name' => 'Example 3',
        'input' => [
            'N' => 4,
            'paths' => [[1, 2], [2, 3], [3, 4], [4, 1], [1, 3], [2, 4]],
        ],
        'expected' => [1, 2, 3, 4],
    ],
];

$s = new Solution;

foreach ($tests as $test) {
    $N = $test['input']['N'];
    $paths = $test['input']['paths'];
    echo '<pre>', print_r($s->gardenNoAdj($N, $paths), true), '<pre>', '<hr>';
}
