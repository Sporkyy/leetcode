<?php

// 1029. Two City Scheduling
// https://leetcode.com/problems/two-city-scheduling/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class Solution
{

    /**
     * @param Integer[][] $costs
     * @return Integer
     */
    function twoCitySchedCost($costs)
    {
        $count = count($costs);
        $balance = $count / 2;

        $cityA = [];
        $cityB = [];

        for ($i = 0; $i < count($costs); $i++) {
            if ($costs[$i][0] < $costs[$i][1]) {
                $cityA[100 * abs($costs[$i][0] - $costs[$i][1]) + $i] = $costs[$i];
            } else {
                $cityB[100 * abs($costs[$i][0] - $costs[$i][1]) + $i] = $costs[$i];
            }
        }

        if ($balance < count($cityA)) {
            ksort($cityA);
            foreach (array_slice($cityA, 0, count($cityA) - $balance) as $person) {
                $cityB[] = $person;
            }
            $cityA = array_slice($cityA, $balance, count($cityA) - 1);
        } else if ($balance < count($cityB)) {
            ksort($cityB);
            foreach (array_slice($cityB, 0, count($cityB) - $balance) as $person) {
                $cityB[] = $person;
            }
            $cityB = array_slice($cityB, $balance, count($cityB) - 1);
        }

        return array_reduce($cityA, function ($acc, $curr) {
            return $acc + $curr[0];
        }, 0)
            + array_reduce($cityB, function ($acc, $curr) {
                return $acc + $curr[1];
            }, 0);
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        // | 10 |  30  | 400 | 30
        // | 20 | 200  |  50 | 20
        'name' => '[[10, 20], [30, 200], [400, 50], [30, 20]]',
        'input' => [[10, 20], [30, 200], [400, 50], [30, 20]],
        'expected' => 110,
        // Explanation:
        // The first person goes to city A for a cost of 10.
        // The second person goes to city A for a cost of 30.
        // The third person goes to city B for a cost of 50.
        // The fourth person goes to city B for a cost of 20.
    ],
    [
        'name' => '[[10, 20], [30, 200], [50, 400], [20, 30]]',
        'input' => [[10, 20], [30, 200], [50, 400], [20, 30]],
        'expected' => 130,
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    $output = $s->twoCitySchedCost($input);
    if ($output === $expected) {
        echo "✅ {$name}<br>";
    } else {
        echo "🔴 {$name}<br>";
        echo "Expected \"{$expected}\" but got \"{$output}\"";
    }
    echo '<hr>';
}
