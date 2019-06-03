<?php

// 1029. Two City Scheduling
// https://leetcode.com/problems/two-city-scheduling/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 12 ms, faster than 100.00% of PHP online submissions
// for Two City Scheduling.
// Memory Usage: 14.9 MB, less than 66.67% of PHP online submissions
// for Two City Scheduling.

// class Solution
// {

//     /**
//      * @param Integer[][] $costs
//      * @return Integer
//      */
//     function twoCitySchedCost($costs)
//     {
//         $savings = [];

//         for ($i = 0; $i < count($costs); $i++) {
//             $savings[100 * ($costs[$i][0] - $costs[$i][1]) + $i] = $costs[$i];
//         }

//         ksort($savings);

//         $answer = 0;
//         $i = 0;

//         foreach ($savings as $cost) {
//             $answer += $i++ < count($savings) / 2 ? $cost[0] : $cost[1];
//         }

//         return $answer;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 12 ms, faster than 100.00% of PHP online submissions
// for Two City Scheduling.
// Memory Usage: 14.9 MB, less than 33.33% of PHP online submissions
// for Two City Scheduling.

class Solution
{

    /**
     * @param Integer[][] $costs
     * @return Integer
     */
    function twoCitySchedCost($costs)
    {
        usort($costs, function ($a, $b) {
            return ($a[0] - $a[1]) - ($b[0] - $b[1]);
        });
        $i = 0;
        return array_reduce($costs, function ($acc, $curr) use ($costs, &$i) {
            return $acc += $i++ < count($costs) / 2 ? $curr[0] : $curr[1];
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
    [
        'name' => '[[259, 770], [448, 54], [926, 667], [184, 139], [840, 118], [577, 469]]',
        'input' => [[259, 770], [448, 54], [926, 667], [184, 139], [840, 118], [577, 469]],
        'expected' => 1859
    ],
    // [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
    // Output
    // 1039
    // Expected
    // 1859
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
