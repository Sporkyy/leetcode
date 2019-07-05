<?php

// 1103. Distribute Candies to People
// https://leetcode.com/problems/distribute-candies-to-people/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 12 ms, faster than 100.00% of PHP online submissions
// for Distribute Candies to People.
// Memory Usage: 14.7 MB, less than 100.00% of PHP online submissions
// for Distribute Candies to People.

// class Solution
// {

//     /**
//      * @param Integer $candies
//      * @param Integer $num_people
//      * @return Integer[]
//      */
//     function distributeCandies($candies, $num_people)
//     {
//         $result = array_fill(0, $num_people, 0);
//         for ($i = 1; 0 < $candies; $candies -= $i, $i++) {
//             $person = ($i - 1) % $num_people;
//             if ($candies < $i) {
//                 $result[$person] += $candies;
//                 break;
//             }
//             $result[$person] += $i;
//         }
//         return $result;
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 12 ms, faster than 50.00% of PHP online submissions
// for Distribute Candies to People.
// Memory Usage: 14.9 MB, less than 100.00% of PHP online submissions
// for Distribute Candies to People.

class Solution
{

    /**
     * @param Integer $candies
     * @param Integer $num_people
     * @return Integer[]
     */
    function distributeCandies($candies, $num_people)
    {
        $result = array_fill(0, $num_people, 0);
        for ($i = 1; 0 < $candies; $candies -= $i++)
            $result[($i - 1) % $num_people] += $candies < $i ? $candies : $i;
        return $result;
    }
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

$tests = [
    [
        'input' => [
            'candies' => 7,
            'num_people' => 4,
        ],
        'expected' => [1, 2, 3, 1],
    ],
    [
        'input' => [
            'candies' => 10,
            'num_people' => 3,
        ],
        'expected' => [5, 2, 3],
    ],
    [
        'input' => [
            'candies' => 60,
            'num_people' => 4,
        ],
        'expected' => [15, 18, 15, 12],
    ],
];

$s = new Solution();

foreach ($tests as $test) {
    extract($test);
    extract($input);
    $output = $s->distributeCandies($candies, $num_people);
    $name = "candies = {$candies}, num_people = {$num_people}";
    if ($expected === $output) {
        echo "✅ ${name}<br>";
    } else {
        echo "🔴 ${name}<br>";
        echo 'Expected the below<br>';
        echo '<pre>', print_r($expected, true), '</pre>';
        echo 'but got the below<br>';
        echo '<pre>', print_r($output, true), '</pre>';
    }
    echo '<hr>';
}
